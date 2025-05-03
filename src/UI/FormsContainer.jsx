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
    <div className={`${width} flex flex-col justify-center items-center p-10  text-[${textColor}] bg-[${bgColor}] rounded-xl`}>
        <h2 className='text-center text-3xl font-[afacad] font-semibold pb-2'>{ title }</h2>
        { form }
        <div className='w-full text-center'>
        <hr className='border-t border-[#405e7f]/40 mb-4' />
       { changeForm }
      </div>
    </div>
  )
}
