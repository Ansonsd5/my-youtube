import React from 'react'

const Header = () => {
  return (
    <div className='header-wrapper flex justify-between items-center align-middle shadow-md'>
      <div className='icon-hamberger-menu flex '>
        
        <img className='h-8 w-8' src='https://cdn-icons-png.flaticon.com/128/5358/5358649.png'/>
        <img className='h-8 w-auto' src='https://www.gstatic.com/youtube/img/promos/growth/6ab442d6a1002dcfa655526badce27feecfc743e1fbe9cbb98ed6855a504a898_324x72.png'/>
      
      </div>
      <div className='search flex border border-gray-800 rounded-es-sm'>
        <div className='flex - items-center rounded-t-3xl' >
          <input className='p-2 ' placeholder='search'/>
          <button><img src='https://img.icons8.com/?size=30&id=59878&format=png'/></button>
        </div>
      </div>
      <div className='userinfo '>
        <div><img className='h-6 w-6'  src='https://img.icons8.com/?size=30&id=98957&format=png'/></div>
      </div>

    </div>
  )
}

export default Header