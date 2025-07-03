import React from 'react'

export const FormsContainer = ({ 
  form, 
  width,
  bgColor,
  textColor,
  title,
  changeForm

}) => {

  return (
    <div className={`${width} forms-container flex flex-col justify-center items-center p-10 text-[${textColor}] ${bgColor} rounded-xl`}>
        { form }
        <div className='w-full text-center'>
        <hr className='border-t border-[#405e7f]/40 mb-4' />
       { changeForm }
      </div>
    </div>
  )
}
