import React, { useState } from 'react';
import ModalDialog from '../../../components/ModalDialog/ModalDialog';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';
import { DialogActions } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { chatsActions } from '../../../store/chatSlice';
import socket from '../../../util/socket';




function AddGroupMember({ open, setOpen, groupId }) {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const chatList = useSelector((state) => state.chatData.chatLists);
  const activeChat = useSelector((state) => state.chatData.activeChat);

  const handleSave = async () => {
    try {
      if (email) {
        const data = {
          email,
          groupId,
        };
        console.log(data);
        socket.emit('addToPrivateGroup', data);
        socket.on('newMemberAdded', (newMembers) => {
          const lists = chatList.map((item) => {
            if (item._id === groupId) {
              // Update the group members
              return {
                ...item,
                groupMembers: newMembers,
              };
            } else {
              return item;
            }
          });
          
        
          // Assuming you have a dispatch or a state update function to update the chat list
          dispatch(chatsActions.getChatsList(lists));
          dispatch(chatsActions.getActiveChat({
            ...activeChat,
            groupMembers: newMembers
          }));
        });
      }
      setOpen(!open);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <ModalDialog
        setOpen={setOpen}
        open={open}
        title={'Add Group Member'}
        size={'md'}
      >
        <Box >
          <TextField
            label='Email'
            variant='standard'
            size='small'
            fullWidth={true}
            id='outlined-controlled'
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            // sx={{ maxWidth: 350 }}
          />
        </Box>
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
              setEmail('');
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
            label={'Add Member'}
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
    </Box>
  );
}

export default AddGroupMember;
