import React from 'react'

const ChatMessage = ({message, name}) => {
  return (
    <div className='flex items-center gap-2 inset-2  px-2 py-1'>
        <img className='w-4 h-4 border' src='https://img.icons8.com/?size=50&id=11781&format=png' alt='user'/>
        <span className=' font-bold'>{name}</span>
        <span className='text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage