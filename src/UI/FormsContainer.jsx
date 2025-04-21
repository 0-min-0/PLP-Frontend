import React from 'react'
import { NavLink } from 'react-router-dom'

export const FormsContainer = ({ 
  form, 
  width,
  bgColor,
  textColor,
  title,
  changeForm

}) => {

  return (
    <div className={`${width} flex flex-col justify-center items-center p-10 text-[${textColor}] bg-[${bgColor}] rounded-xl`}>
        <h2 className='text-center text-3xl font-[arialBold] pb-8'>{ title }</h2>
        { form }
        <div className='w-full pb-4 pt-6 text-center'>
        <hr className='border-t border-[#405e7f]/40 mb-4' />
       { changeForm }
      </div>
    </div>
  )
}
