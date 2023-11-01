import React from 'react'
import buttonList from '../config'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex gap-2 '>
        {buttonList.map((button,index)=><div key={index*"2"}> <Button name = {button} /> </div>)}
    </div>
  )
}

export default ButtonList