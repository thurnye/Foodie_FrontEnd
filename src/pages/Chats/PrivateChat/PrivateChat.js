import React, { useState, useEffect } from 'react';
import styles from './PrivateChat.module.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from 'react-router';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';
import ChatMessageCard from '../../../components/ChatMessageCard/ChatMessageCard';

const socket = io('http://localhost:8670/');

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const PrivateChat = ({selected}) => {
  console.log({selected})
  // const location = useLocation();
  // const receiver = location.state?.receiver;
  // const receiver = dummyData;
  // const receiverId = receiver?._id;
  const [receiver, setReceiver] = useState()
  const [receiverId, setReceiverId] = useState('')
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.userLog.user?.user);
  const [typingUser, setTypingUser] = useState(null);
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    if (user) {
      socket.emit('joinChatRoom', { userId: user._id, receiverId, roomId});

      socket.on('joinedChatRoom', ({ roomId, chatHistory }) => {
        console.log('joinedChatRoom',chatHistory)
        setRoomId(roomId);
        setMessages(chatHistory);
      });

      socket.on('newChat', (chat) => {
        const existingMessage = messages.find((msg) => msg._id === chat._id);
        if (!existingMessage) {
          setMessages((prevMessages) => [...prevMessages, chat]);
        }
      });

      socket.on('error', (error) => {
        console.error(error.message);
      });

      socket.on('typing', ({ currentTypingUser }) => {
        if (currentTypingUser._id === user._id) return;
        setTypingUser(
          `${currentTypingUser.firstName} ${currentTypingUser.lastName}`
        );
        setTimeout(() => {
          setTypingUser(null);
        }, 20000);
      });

      return () => {
        socket.off('joinedChatRoom');
        socket.off('newChat');
        socket.off('error');
        socket.off('typing');
      };
    }
  }, [receiverId, user]);

  useEffect(() => {
    if(selected){
      setReceiver(selected)
      setReceiverId(selected._id);
      setRoomId(selected.chatRoomId)
    }
  },[selected])

  const handleSendMessage = () => {
    if (message) {
      socket.emit('sendChat', {
        roomId,
        sender: user._id,
        receiverId,
        message,
      });
      setMessage('');
      setTypingUser(null);
    }
  };

  return (
    <div className={styles.PrivateChat}>
      
      <Box
        sx={{
          height: '70vh',
          border: '1px solid #f6f6f6',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {receiver && <>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: 50,
            }}
          >
            <Card
              sx={{
                border: 'none',
                boxShadow: 'none',
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    alt={`${receiver.firstName}`}
                    src={receiver.avatar}
                    sx={{ width: 30, height: 30 }}
                  />
                }
                action={
                  <IconButton aria-label='settings'>
                    <VideoCallIcon />
                  </IconButton>
                }
                title={`${receiver?.firstName} ${receiver?.lastName}`}
                subheader={typingUser ? `typing...` : ''}
                titleTypographyProps={{
                  ml: -1.25,
                }}
                subheaderTypographyProps={{
                  fontSize: '10px',
                  fontStyle: 'italic',
                  ml: -1.25,
                }}
                sx={{
                  px: 1,
                  py: 0.125,
                  pt: 0.5,
                }}
              />
            </Card>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              height: '100%',
              p: 2,
              background: '#f6f6f6',
              overflowY: 'auto',
              mt: '50px',
            }}
          >
            {messages.map((chat, index) => (
              <ChatMessageCard key={index} chat={chat} isSingle={true} />
            ))}
          </Box>
          <Box sx={{ height: 70, border: '1px solid #f6f6f6' }}>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                p: 2,
              }}
            >
              <FormControl sx={{ m: 1, flexGrow: 1 }} variant='outlined'>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type={'text'}
                  size='small'
                  fullWidth
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                    event.target.value.trim() &&
                      socket.emit('typing', {
                        panelId: roomId,
                        user,
                      });
                  }}
                  endAdornment={
                    <InputAdornment position='end' sx={{ width: 50 }}>
                      {/* <IconButton
                        aria-label='toggle password visibility'
                        onClick={() => ''}
                        edge='end'
                      >
                        <VideoCallIcon />
                      </IconButton> */}
                      <Button
                        component='label'
                        role={undefined}
                        variant='text'
                        tabIndex={-1}
                        sx={{
                          color: 'text.secondary',
                          width: 50,
                          minWidth: 'initial',
                          p: 0.625,
                        }}
                        startIcon={<ImageIcon color='text.secondary' />}
                      >
                        <VisuallyHiddenInput type='file' />
                      </Button>
                    </InputAdornment>
                  }
                  sx={{ pr: 0 }}
                />
              </FormControl>
              <IconButton
                color='text.secondary'
                aria-label='openDrawer drawer'
                edge='end'
                onClick={() => handleSendMessage()}
              >
                <SendIcon
                  sx={{
                    color: '#77839b',
                    transform: 'rotate(319deg)',
                    mt: -1,
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </>}
      </Box>
    </div>
  );
};

export default PrivateChat;
