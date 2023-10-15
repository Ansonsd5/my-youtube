import React from 'react'
import ButtonList from './ButtonList'
import VideoConatiner from './VideoConatiner'

const MainConatiner = () => {
  return (
    <div className='flex-auto' >
      <ButtonList />

      <VideoConatiner />    
    </div>
  )
}

export default MainConatiner