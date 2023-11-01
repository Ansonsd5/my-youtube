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
    <div className="send-chat-message flex items-center gap-2 border-t-2 ">
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
        <button className={`send-chat px-3 rounded-xl text-xs shadow-xl inset-2 ${!message ? 'opacity-50 border border-red-500' : 'border border-green-500'}`}  type="submit" disabled={!message}>Send</button>
      </form>
      </div>
    </div>
  );
}

export default SendChatMessage;