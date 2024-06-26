import React, { useState, useEffect } from 'react';
import styles from './SingleChat.module.css';
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

const SingleChat = () => {
  const location = useLocation();
  const receiverId = location.state?.receiverId;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.userLog.user?.user);
  const [typingUser, setTypingUser] = useState(null);
  const [roomId, setRoomId] = useState(null);


  useEffect(() => {
    if (user) {
      console.log(user)
      socket.emit('joinChatRoom', { userId: user._id, receiverId });
  
      socket.on('joinedChatRoom', ({ roomId, chatHistory }) => {
        setRoomId(roomId);  // Update roomId state here
        setMessages(chatHistory);
      });
  
      socket.on('newChat', (chat) => {
        const existingMessage = messages.find(msg => msg._id === chat._id);
        if (!existingMessage) {
          setMessages(prevMessages => [...prevMessages, chat]);
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
  }, [user]); 
  

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
    <div className={styles.SingleChat}>
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
          {messages.map((chat, index) => (
            <ChatMessageCard key={index} chat={chat} isSingle={true}/>
          ))}
        </Box>
        <Box
          sx={{
            background: '#f6f6f6',
          }}
        >
          {typingUser && (
            <Typography
              variant='caption'
              sx={{ ml: 0.5 }}
              color='text.secondary'
            >
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
                    panelId: roomId,
                    user,
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

export default SingleChat;