import React from 'react';
import styles from './privateGroupInfo.module.css';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useDispatch, useSelector } from 'react-redux';
import { chatsActions } from '../../../store/chatSlice';
import { getRandomInt } from '../../../util/commons';

const PrivateGroupInfo = ({ selected, open, setOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLog.user?.user);
  const chatList = useSelector((state) => state.chatData.chatLists);
  
  const handleMemberChat = (member) => {
    let active = null
    //find member in chatList
    const isMemberInList = chatList.find(el => el.type === 'singleChat' && el.otherUser._id === member._id)
    if(isMemberInList){
      console.log('true')
      active = isMemberInList
    }
    if(!isMemberInList){
      active = {
        "chatRoomId": "",
        "otherUser": member,
        "type": "singleChat",
        randomId: getRandomInt()
      }
      const lists = [...chatList];
      lists.unshift(active)
      dispatch(chatsActions.getChatsList(lists));
    }
    dispatch(chatsActions.getActiveChat(active));
    setOpen(!open)
  }

  return (
    <div className={styles.PrivateGroupInfo}>
      {selected && selected.type === 'groupChat' && (
        <Dialog
          open={open}
          onClose={() => setOpen(!open)}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          maxWidth={'md'}
        >
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pt: 2,
              }}
            >
              <Avatar
                alt={`${selected.firstName}`}
                src={selected.avatar}
                sx={{ width: 150, height: 150 }}
              />
              <DialogTitle id='alert-dialog-title'>
                {selected.groupName}
              </DialogTitle>

              <Typography variant='caption' sx={{ mt: -2 }}>
                Group . {selected.groupMembers.length}{' '}
                {selected.groupMembers.length > 1 ? 'members' : 'member'}
              </Typography>
            </Box>

            <IconButton
              aria-label='more'
              id='long-button'
              aria-haspopup='true'
              onClick={() => setOpen(!open)}
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ width: '60vw', m: 'auto' }}>
            <DialogContentText id='alert-dialog-description'>
              {selected.groupDescription}
            </DialogContentText>
            <Box sx={{ p: 1, pb: 2 }}>
              <Typography sx={{
                    width: '100%',
                    maxWidth: 660,
                    m:'auto'
                  }}>
                {selected.groupMembers.length}{' '}
                {selected.groupMembers.length > 1 ? 'members' : 'member'}
              </Typography>

              <Box
                sx={{
                  height: 300,
                  overflowY: 'scroll',
                  mt: 1,
                }}
              >
                <List
                  dense
                  sx={{
                    width: '100%',
                    maxWidth: 660,
                    background: '#f4f4f4',
                    m:'auto',
                    height: '100%'
                  }}
                >
                  {selected.groupMembers.map((member) => {
                    const labelId = `checkbox-list-secondary-label-${member._id}`;
                    return (
                      <ListItem
                        key={member._id}
                        secondaryAction={
                          <>
                          {selected.startedBy._id === member._id && <AdminPanelSettingsIcon  sx={{color:'#bfbfbf'}}/>}
                          {user._id !== member._id && (
                            <IconButton sx={{ mr: -1}} onClick={() => handleMemberChat(member)}>
                              <ChatBubbleOutlineIcon />
                            </IconButton>
                            )}
                          </>
                        }
                        // disablePadding
                        sx={{
                          fontSize: 12,
                          borderRadius: 0,
                          textTransform: 'none',
                        }}
                      >
                        {/* <ListItem sx={{ px: 0 }}> */}
                          <ListItemAvatar>
                            <Avatar
                              alt={`${member.firstName}`}
                              src={member.avatar}
                              sx={{ width: 30, height: 30 }}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            id={labelId}
                            primary={user._id === member._id ? 'You' : `${member.firstName} ${member.lastName}`}
                            primaryTypographyProps={{
                              sx: { width: '60%', ml: -1 },
                            }}
                          />
                        {/* </ListItem> */}
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Box>
          </Box>
        </Dialog>
      )}
    </div>
  );
};

export default PrivateGroupInfo;
