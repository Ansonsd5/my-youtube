import React from 'react'
import buttonList from '../config'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex gap-2 '>
        {buttonList.map((button)=> <Button name = {button} />)}
    </div>
  )
}

export default ButtonList