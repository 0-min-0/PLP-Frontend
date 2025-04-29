import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineMail } from 'react-icons/hi'

export const Button = ({
  btnType,
  btnStyle,
  btnId = 'btnAny',
  btnName,
  btnIcon = null,
  clicked
}) => {

  const btnBaseStyle = `
    font-semibold px-4 py-2 rounded-full cursor-pointer
    transition-all duration-300 ease-in-out
    transform hover:scale-105 active:scale-95
  `

  return (
    <button
      type={btnType}
      className={`${btnStyle} ${btnBaseStyle}`}
      id={btnId}
      onClick={clicked}
    >
      {btnIcon === 'google' && <FcGoogle className='w-6 h-6 text-lg mr-2' />}
      {btnIcon === 'email' && <HiOutlineMail className='w-6 h-6 text-lg mr-2' />}
      {btnName}
    </button>
  )
}
