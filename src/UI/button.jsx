import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineMail } from 'react-icons/hi'

export const Button = ({
  btnType,
  btnStyle,
  btnId = 'btnAny',
  btnName,
  btnIcon = null,
  clicked,
  disabled = false,
  children
}) => {

  const btnBaseStyle = `
    button-responsive font-semibold px-4 py-2 rounded-full cursor-pointer
    transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
    transform hover:-translate-y-0.5 hover:shadow-md
    active:scale-[0.98]
  `

  return (
    <button
      type={btnType}
      className={`${btnStyle} ${btnBaseStyle}`}
      id={btnId}
      onClick={clicked}
      disabled={disabled}
    >
      {btnIcon === 'google' && <FcGoogle className='icons-responsive w-6 h-6 text-lg mr-2' />}
      {btnIcon === 'email' && <HiOutlineMail className='icons-responsive w-6 h-6 text-lg mr-2' />}
      {btnName}
      {children}
    </button>
  )
}
