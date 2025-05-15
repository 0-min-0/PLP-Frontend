import React from 'react'

export const CardInfo = ({ title, info, cardIcon, descIcon }) => {

  return (
    <div className='bg-white px-12 py-8 rounded-xl'>
      <h2 className='font-bold text-[#254160] mb-2'>
        {title}
      </h2>
      <div className='flex items-center'>
        <p className='text-[#405e7f]'>
          {info}
        </p>
        <img className='w-24 h-24 ml-10' src={cardIcon} alt={descIcon} />
      </div>
    </div>
  )
}
