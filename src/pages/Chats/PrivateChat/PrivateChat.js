import React, { useState, useEffect, useRef } from 'react';
import styles from './PrivateChat.module.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';
import ChatMessageCard from '../../../components/ChatMessageCard/ChatMessageCard';
import ChatImage from '../ChatImage/ChatImage';
import socket from '../../../util/socket';



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

const PrivateChat = ({selected, setTypingUser}) => {
  const [receiver, setReceiver] = useState(null);
  const [receiverId, setReceiverId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.userLog.user?.user);
  const [roomId, setRoomId] = useState(null);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (user) {
      socket.emit('joinChatRoom', { userId: user._id, receiverId, roomId });

      socket.on('joinedChatRoom', ({ roomId, chatHistory }) => {
        setRoomId(roomId);
        setMessages(chatHistory);
      });

      socket.on('newChat', (chat) => {
        const existingMessage = messages.find((msg) => msg._id === chat._id);
        if (!existingMessage) {
          setMessages((prevMessages) => [...prevMessages, chat]);
        }
      });

      // groupChat
      socket.emit('joinPrivateGroup', { roomId, type: receiver?.type });

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
        }, 10000);
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
    if (selected) {
      setReceiver(selected);
      setReceiverId(selected.type === 'singleChat' ? selected.otherUser._id : selected._id);
      setRoomId(selected.chatRoomId);
    }
  }, [selected]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const data = {
        roomId,
        sender: user._id,
        receiverId,
        message,
      };
      if (receiver.type === 'groupChat') {
        socket.emit('sendPrivateGroupMessage', data);
      }
      if (receiver.type === 'singleChat') {
        socket.emit('sendChat', data);
      }
      setMessage('');
      setTypingUser(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImage(file);
        setOpen(!open);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
      setImage(null);
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
        {receiver && (
          <>
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
                <ChatMessageCard
                  key={index}
                  chat={chat}
                  isSingle={receiver?.type === 'singleChat'}
                />
              ))}
              <div ref={messagesEndRef} />
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
                          <VisuallyHiddenInput type='file' onChange={handleImageChange} />
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
          </>
        )}
      </Box>
      <ChatImage
        open={open}
        setOpen={setOpen}
        imagePreview={imagePreview}
        image={image}
        setImage={setImage}
        setImagePreview={setImagePreview}
        socket={socket}
        roomId={roomId}
        userId={user?._id}
        receiverId={receiverId}
        chatType={selected?.type}
      />
    </div>
  );
};

export default PrivateChat;
