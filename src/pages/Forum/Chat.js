import React, { useState, useEffect } from 'react';
// import { socket } from '../../util/socket';
import io from 'socket.io-client';

const socket = io('http://localhost:8670/');

const Chat = ({ chatRoomId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.emit('join room', chatRoomId);

    socket.on('chat history', (chatHistory) => {
      setMessages(chatHistory);
    });

    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat history');
      socket.off('chat message');
    };
  }, [chatRoomId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      const sender = 'user1'; // Replace with actual sender ID
      const receiver = 'user2'; // Replace with actual receiver ID
      socket.emit('chat message', { chatRoomId, sender, receiver, message: input });
      setInput('');
    }
  };

  return (
    <div>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>{msg.message}</li>
        ))}
      </ul>
      <form id="form" onSubmit={handleSubmit}>
        <input
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
