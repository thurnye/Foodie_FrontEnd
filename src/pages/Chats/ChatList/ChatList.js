import React from 'react';
import styles from './ChatList.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { chatsActions } from '../../../store/chatSlice';

const ChatList = ({ setSelected, selected }) => {
  const lists = useSelector((state) => state.chatData.chatLists);
  const active = useSelector((state) => state.chatData.activeChat);
  const dispatch = useDispatch();

  const handleSelected = (activeChat) => {
    dispatch(chatsActions.getActiveChat(activeChat));
  }

  return (
    <div className={styles.ChatList}>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        
        {lists.map((item) => (
          <ListItem alignItems='flex-start' key={item.chatRoomId} sx={{mb: -2}}>
            <ListItemButton 
            onClick={() => {
              // setSelected(item)
              handleSelected(item)
              }}>
              <ListItemAvatar>
                <Avatar
                  alt={item.type === 'singleChat' ? item.otherUser.firstName : item.groupName}
                  src={item.type === 'singleChat' ? item.otherUser.avatar : item.groupName}
                  sx={{ width: 30, height: 30 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  item.type === 'singleChat' ? `${item.otherUser.firstName} ${item.otherUser.lastName}` : `${item.groupName}`
                }
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: 13,
                    ml: -2.5,
                    color:
                      // selected?.chatRoomId === item.chatRoomId
                      active?.randomId=== item.randomId
                        ? '#1976d2'
                        : 'text.secondary',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatList;
