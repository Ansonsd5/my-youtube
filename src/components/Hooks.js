import React, { useState } from 'react'

const Hooks = () => {
    const [isDark,setIsDark]= useState(false);

  return (
    <div className='flex  w-[200px] h-[200px] border border-black  ' >
        <div className={` ${isDark && 'bg-blue-950 text-white' }`}>Hello</div>
        <article>
            <nav className='w-[100%] border border-black'>
                <ul>
                    <li>
                        <button onClick={setIsDark(!isDark)}>Dark</button></li>
                </ul>
            </nav>
            <div className='w-[100%]'>page content</div>
        </article>
    </div>
  )
}

export default Hooks