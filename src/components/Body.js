import React from 'react'
import SideBar from './SideBar';
import MainConatiner from './MainConatiner'

const Body = () => {
  return (
    <div className='flex flex-row gap-4'>
      <SideBar />
      <MainConatiner />
    </div>
  )
}

export default Body