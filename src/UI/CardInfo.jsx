import React from 'react'

export const CardInfo = ({ title, info, cardIcon, descIcon }) => {
  return (
    <div className='card-container px-12 py-8 rounded-xl'>
      <h2 className='font-bold card-title mb-2'>
        {title}
      </h2>
      <div className='flex items-center'>
        <p className='card-info-text'>
          {info}
        </p>
        <img className='w-24 h-24 ml-10' src={cardIcon} alt={descIcon} />
      </div>
    </div>
  )
}
