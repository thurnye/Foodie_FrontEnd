import React, { useState, useEffect } from 'react';
import styles from './GroupChat.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ChatMessageCard from '../ChatMessageCard/ChatMessageCard';
import { useLocation } from 'react-router';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';

const socket = io('http://localhost:8670/');

const GroupChat = () => {
  const location = useLocation();
  const panelId = location.state?.panelId;

  const [message, setMessage] = useState('');
  const [groupMessages, setGroupMessages] = useState([]);
  const user = useSelector((state) => state.userLog.user?.user);
  const [typingUser, setTypingUser] = useState(null);

  useEffect(() => {
    if (panelId) {
      socket.emit('join group', panelId);

      socket.on('group chat history', (chatHistory) => {
        console.log('chatHistory::', chatHistory);
        setGroupMessages(chatHistory);
      });

      socket.on('message', (message) => {
        console.log('Message::', message);
        setGroupMessages((messages) => [...messages, message]);
      });

      socket.on('typing', ({ currentTypingUser }) => {
        if (currentTypingUser._id === user._id) return; // Skip showing typing indicator for self
        setTypingUser(`${currentTypingUser.firstName} ${currentTypingUser.lastName}`);
        setTimeout(() => {
          setTypingUser(null); // Clear typing indicator after some time
        }, 20000); // Adjust timing as needed
      });

      return () => {
        socket.off('group chat history');
        socket.off('message');
        socket.off('typing');
      };
    }
  }, [panelId]);

  const handleSendMessage = () => {
    if (message) {
      socket.emit('sendMessage', { panelId, sender: user._id, message });
      setMessage('');
      setTypingUser(null)
    }
  };

  return (
    <div className={styles.GroupChat}>
      <Box
        sx={{
          height: '70vh',
          border: '1px solid #f6f6f6',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: '100%',
            p: 2,
            background: '#f6f6f6',
            overflowY: 'auto',
          }}
        >
          {groupMessages.map((chat, index) => (
            <ChatMessageCard key={index} chat={chat} />
          ))}
        </Box>
        <Box sx={{
          background: '#f6f6f6',
        }}>
          {typingUser && (
            <Typography variant='caption' sx={{ ml: 0.5 }} color="text.secondary">
              <i>{typingUser} is typing...</i>
            </Typography>
          )}
        </Box>
        <Box sx={{ height: 70, border: '1px solid #f6f6f6' }}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              p: 2,
            }}
          >
            <TextField
              sx={{
                flexGrow: 1,
              }}
              fullWidth
              size='small'
              id='chat-input-controlled'
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                event.target.value.trim() &&
                  socket.emit('typing', { 
                    panelId, 
                    user
                  });
              }}
            />
            <IconButton
              color='inherit'
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
      </Box>
    </div>
  );
};

export default GroupChat;
