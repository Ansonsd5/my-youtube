import React, { useState } from 'react';
import './sendchat.css';

function SendChatMessage({  userName, onSubmit }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  return (
    <div className="send-chat-message flex items-center gap-2 bg-red-200 rounded-md border border-black">
      <div className="user-info">
      <img className='w-4 h-4 border' src='https://img.icons8.com/?size=50&id=11781&format=png' alt='user'/>
      </div>
      <div>
      <span className='user-name'>{userName}</span>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input
        className='input-chat'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className='send-chat px-2' type="submit" disabled={!message}>Send</button>
      </form>
      </div>
    </div>
  );
}

export default SendChatMessage;