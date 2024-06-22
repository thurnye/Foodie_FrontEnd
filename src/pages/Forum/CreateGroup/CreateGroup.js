import React, { useState, useEffect } from 'react';
import styles from './CreateGroup.module.css';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';
import Box from '@mui/material/Box';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
// import io from 'socket.io-client';
// import { baseUrl } from '../../../util/http-commons';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import services from '../../../util/services';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';

// const socket = io(baseUrl);
// console.log(baseUrl);

const CreateGroup = ({ setNewGroup }) => {
  const location = useLocation();
  const forumId = location.state?.forumId;
  const [open, setOpen] = useState(false);
  const [groupName, setGroupName] = useState('');
  const user = useSelector((state) => state.userLog.user?.user);

  // FeedBack States
  const [reqOpen, setReqOpen] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   console.log('Client-side socket ID:', socket.id);

  //   // Listen for savedGroupRoom response
  //   socket.on('savedGroupRoom', (data) => {
  //     console.log('Received savedGroupRoom:', data);
  //     setNewGroup(data);
  //   });

  //   return () => {
  //     // Cleanup on unmount
  //     socket.disconnect();
  //   };
  // }, [setNewGroup]);

  const handleSave = async () => {
    try {
      if (groupName) {
        const data = {
          groupName,
          forumId,
          startedBy: user._id,
          groupMembers: [user._id],
        };
        // console.log('Emitting createGroup:', data);
        // socket.emit('createGroup', data);
        setIsError(false);
        setSaved(false);
        setShowCancel(false);
        setReqLoading(true);
        setReqOpen(!reqOpen);
        setMessage('');
        setOpen(!open);
        const res = await services.postGroup(data);
        setNewGroup(res.data);
        setGroupName('');
        setReqLoading(false);
        setSaved(true);
        setMessage('Group Created Successfully');
      }
    } catch (error) {
      console.error(error);
      setReqLoading(false);
      console.log('ERROR:::', error);
      const errMsg = error.response.data;
      setMessage(errMsg);
      setShowCancel(false);
      setSaved(false);
      setIsError(true);
      setReqOpen(!reqOpen);
    }
  };

  return (
    <Box className={styles.CreateGroup}>
      <CustomizedButton
        variant='text'
        label={'Create Group'}
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={() => setOpen(!open)}
        sx={{
          fontSize: { xs: 15, md: 18 },
          borderRadius: 0,
          height: 40,
          textTransform: 'none',
        }}
      />
      <ModalDialog
        setOpen={setOpen}
        open={open}
        title={'Create A Group'}
        size={'md'}
      >
        <DialogContent>
          <TextField
            size='small'
            fullWidth={true}
            id='outlined-controlled'
            value={groupName}
            onChange={(event) => {
              setGroupName(event.target.value);
            }}
            sx={{ width: '30vw' }}
          />
        </DialogContent>
        <DialogActions>
          <CustomizedButton
            variant='text'
            label={'Cancel'}
            id='demo-customized-button'
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={() => {
              setOpen(!open);
              setGroupName('');
            }}
            sx={{
              fontSize: { xs: 15, md: 18 },
              borderRadius: 0,
              height: 40,
              textTransform: 'none',
            }}
          />
          <CustomizedButton
            variant='text'
            label={'Create'}
            id='demo-customized-button'
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={handleSave}
            sx={{
              fontSize: { xs: 15, md: 18 },
              borderRadius: 0,
              height: 40,
              textTransform: 'none',
            }}
          />
        </DialogActions>
      </ModalDialog>

      <RequestFeedback
        successMessage={message}
        errorMessage={message}
        open={reqOpen}
        loading={reqLoading}
        setOpen={setReqOpen}
        isError={isError}
        saved={saved}
        showCancel={showCancel}
        handleError={() => setReqOpen(!reqOpen)}
        errorBtnLabel={'close'}
        handleSuccess={() => {
          setReqOpen(!reqOpen);
        }}
        successBtnLabel={'close'}
      />
    </Box>
  );
};

export default CreateGroup;
