import React from 'react'
import ButtonList from './ButtonList'
import VideoConatiner from './VideoConatiner'
import CommentsContainer from './CommentsContainer'

const MainConatiner = () => {
  return (
    <div className='py-4' >
      <ButtonList />

      <VideoConatiner />
         
    </div>
  )
}

export default MainConatiner