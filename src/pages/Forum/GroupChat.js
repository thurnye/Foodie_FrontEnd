import React, { useState, useEffect } from 'react';
import { socket } from '../../util/socket';
// import io from 'socket.io-client';


// const socket = io(process.env.REACT_APP_BACKEND_URL);

const GroupChat = ({ groupId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.emit('join group', groupId);

    socket.on('group chat history', (chatHistory) => {
      setMessages(chatHistory);
    });

    socket.on('group chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('group chat history');
      socket.off('group chat message');
    };
  }, [groupId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      const sender = 'user1'; // Replace with actual sender ID
      socket.emit('group chat message', { groupId, sender, message: input });
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

export default GroupChat;
