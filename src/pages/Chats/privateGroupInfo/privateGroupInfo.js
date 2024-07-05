import React, { useEffect, useState } from 'react';
import styles from './privateGroupInfo.module.css';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { TextField, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useDispatch, useSelector } from 'react-redux';
import { chatsActions } from '../../../store/chatSlice';
import { getRandomInt } from '../../../util/commons';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';
import ImageUploadOptions from '../../../components/ImageUploadOptions/ImageUploadOptions';
import groupAvatarPlaceholder from '../../../public/images/placeholders/group.png';

import io from 'socket.io-client';
const socket = io('http://localhost:8670/');

const PrivateGroupInfo = ({ setSelected, selected, open, setOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLog.user?.user);
  const chatList = useSelector((state) => state.chatData.chatLists);
  const [edit, setEdit] = useState([]);
  const [groupDescription, setGroupDescription] = useState();
  const [groupName, setGroupName] = useState();
  const [groupAvatar, setGroupAvatar] = useState();

  const handleMemberChat = (member) => {
    let active = null;
    //find member in chatList
    const isMemberInList = chatList.find(
      (el) => el.type === 'singleChat' && el.otherUser._id === member._id
    );
    if (isMemberInList) {
      console.log('true');
      active = isMemberInList;
    }
    if (!isMemberInList) {
      active = {
        chatRoomId: '',
        otherUser: member,
        type: 'singleChat',
        randomId: getRandomInt(),
      };
      const lists = [...chatList];
      lists.unshift(active);
      dispatch(chatsActions.getChatsList(lists));
    }
    dispatch(chatsActions.getActiveChat(active));
    setOpen(!open);
  };

  useEffect(() => {
    if (selected) {
      setGroupDescription(selected.groupDescription);
      setGroupName(selected.groupName);
      setGroupAvatar(
        selected.groupAvatar ? selected.groupAvatar : groupAvatarPlaceholder
      );
    }
  }, [selected]);

  const editButton = (type) => (
    <Box>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-haspopup='true'
        onClick={() => setEdit((prev) => [...prev, type])}
        sx={{
          position: 'absolute',
          top: type === 'avatar' ? 0 : 0,
          right: type === 'avatar' ? 0 : 10,
          width: type === 'avatar' ? 150 : '',
          height: type === 'avatar' ? 150 : '',
          m: type === 'avatar' ? 'auto' : '',
        }}
      >
        {type !== 'avatar' && (
          <BorderColorIcon sx={{ color: '#1769aa', fontSize: 16 }} />
        )}
      </IconButton>
    </Box>
  );

  const saveButton = (type) => (
    <Box sx={{ width: '100%', textAlign: 'end' }}>
      <CustomizedButton
        variant='text'
        label={'save'}
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={() => handleSave(type)}
        sx={{
          fontSize: 13,
          // borderRadius: 0,
          height: 20,
          textTransform: 'none',
        }}
      />
    </Box>
  );
  console.log(chatList);

  const handleSave = () => {
    try {
      const data = {
        user: user._id,
        groupName,
        groupAvatar,
        groupDescription,
        _id: selected._id,
        chatRoomId: selected.chatRoomId,
      };
      socket.emit('updatePrivateGroupInfo', data);

      socket.on('privateGroupInfoUpdated', (updatedGroup) => {
        console.log({ updatedGroup });
        const lists = chatList.map((item) =>
          item._id === updatedGroup._id ? updatedGroup : item
        );

        dispatch(chatsActions.getChatsList(lists));
        //   setEdit([]);
        const updateMessage = {
          roomId: updatedGroup.chatRoomId,
          sender: user._id,
          message: `
          <i>
          Group Update!!
          <br/>
          ${user.firstName} ${user.lastName} updated group info</i>
          </i>
         
          `,
        };
        setSelected(updatedGroup)
        dispatch(chatsActions.getActiveChat(updatedGroup));
        socket.emit('sendPrivateGroupMessage', updateMessage);
      });

      const lists = chatList.map((item) =>
        item._id === selected._id
          ? {
              ...item,
              groupName,
              groupAvatar,
              groupDescription,
            }
          : item
      );
      

      dispatch(chatsActions.getChatsList(lists));
      setEdit([]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(edit);

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
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  alt={`${groupName}`}
                  src={groupAvatar}
                  sx={{ width: 150, height: 150 }}
                />
                {editButton('avatar')}
                {edit.includes('avatar') && (
                  <ImageUploadOptions
                    images={groupAvatar}
                    setImages={setGroupAvatar}
                    isMulti={false}
                  />
                )}
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  px: 2,
                }}
              >
                {edit.includes('name') ? (
                  <>
                    <TextField
                      size='small'
                      fullWidth={true}
                      id='outlined-controlled'
                      value={groupName}
                      onChange={(event) => {
                        setGroupName(event.target.value);
                      }}
                      sx={{ width: '100%', my: 3 }}
                      placeholder='Group Name'
                    />
                  </>
                ) : (
                  <>
                    <DialogTitle
                      id='alert-dialog-title'
                      sx={{ textAlign: 'center' }}
                    >
                      {groupName}
                    </DialogTitle>
                    {editButton('name')}
                  </>
                )}
              </Box>

              <Typography variant='caption' sx={{ mt: -2 }}>
                Group . {selected.groupMembers.length}{' '}
                {selected.groupMembers.length > 1 ? 'members' : 'member'}
              </Typography>
            </Box>

            <IconButton
              aria-label='more'
              id='long-button'
              aria-haspopup='true'
              onClick={() => {
                setEdit([]);
                setOpen(!open);
              }}
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
            <Box sx={{ p: 2, position: 'relative' }}>
              {edit.includes('desc') ? (
                <>
                  <TextField
                    size='small'
                    id='outlined-multiline-flexible'
                    placeholder='Group Description'
                    multiline
                    fullWidth={true}
                    rows={4}
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <DialogContentText
                    id='alert-dialog-description'
                    sx={{ pt: 2 }}
                  >
                    {groupDescription}
                  </DialogContentText>
                  {editButton('desc')}
                </>
              )}
              {edit.length > 0 && saveButton()}
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography
                sx={{
                  width: '100%',
                  maxWidth: 660,
                  m: 'auto',
                }}
              >
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
                    m: 'auto',
                    height: '100%',
                  }}
                >
                  {selected.groupMembers.map((member) => {
                    const labelId = `checkbox-list-secondary-label-${member._id}`;
                    return (
                      <ListItem
                        key={member._id}
                        secondaryAction={
                          <>
                            {selected.startedBy._id === member._id && (
                              <AdminPanelSettingsIcon
                                sx={{ color: '#bfbfbf' }}
                              />
                            )}
                            {user._id !== member._id && (
                              <IconButton
                                sx={{ mr: -1 }}
                                onClick={() => handleMemberChat(member)}
                              >
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
                          primary={
                            user._id === member._id
                              ? 'You'
                              : `${member.firstName} ${member.lastName}`
                          }
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
