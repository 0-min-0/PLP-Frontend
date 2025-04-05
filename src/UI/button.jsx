import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineMail } from 'react-icons/hi'

export const Button = ({ btnType, btnStyle, btnId = 'btnAny', btnName, btnIcon = null }) => {

  const btnBaseStyle = `
    font-bold px-4 py-2 rounded-full cursor-pointer
    transition-all duration-300 ease-in-out
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#405e7f]
  `

  return (
    <button type={ btnType } className={ `${btnStyle} ${btnBaseStyle}` } id={ btnId }>
      { btnIcon === 'google' && <FcGoogle className='w-6 h-6 text-lg mr-2' /> }
      { btnIcon === 'email' && <HiOutlineMail className='w-6 h-6 text-lg mr-2' /> }
      { btnName }
    </button>
  )
}
