import React, { useState } from 'react';
import styles from './VideoContainer.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import VideoChat from '../VideoChat/VideoChat';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';
import CallIcon from '@mui/icons-material/Call';
import CallEndIcon from '@mui/icons-material/CallEnd';
import IconButton from '@mui/material/IconButton';

const VideoContainer = ({ open, setOpen, selected }) => {

  const [answerCall, setAnswerCall] = useState(false)
  const [receivingCall, setReceivingCall] = useState(false)
  const [callAccepted, setCallAccepted] = useState(false);

  return (
    <Box className={styles.VideoContainer} sx={{ position: 'relative' }}>
      {receivingCall && !callAccepted && (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          mt: '-15px',
          mb: 2,
          alignItems: 'center',
        }}
      >
        <Typography variant='body2' sx={{ flexGrow: 1 }}>
          Video Call request from ...
        </Typography>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => setAnswerCall(true)}
          edge='start'
          sx={{ background: '#56B659', mr: 4 }}
        >
          <CallIcon sx={{ color: '#fff' }} />
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => setAnswerCall(false)}
          edge='start'
          sx={{ background: '#E71E26' }}
        >
          <CallEndIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Box>
      )}
      {selected?.type === 'singleChat' && (
        <ModalDialog
          setOpen={setOpen}
          open={open}
          fullScreen={false}
          size={'xl'}
        >
          <VideoChat
            roomId={selected.chatRoomId}
            setOpen={setOpen}
            open={open}
            answerCall={answerCall}
            // receivingCall={receivingCall}
            setReceivingCall={setReceivingCall}
            setCallAccepted={setCallAccepted}
            callAccepted={callAccepted}
          />
        </ModalDialog>
      )}
    </Box>
  );
};

export default VideoContainer;
