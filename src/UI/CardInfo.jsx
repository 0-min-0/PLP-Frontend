import React from 'react'

export const CardInfo = ({ title, info, cardIcon, descIcon }) => {

  const cardStyle = 'bg-white px-12 py-8 rounded-xl'
  const titleStyle = 'font-bold text-[#254160] mb-2'
  const textStyle = 'text-[#405e7f]'

  return (
    <div className={`${cardStyle}
                    2xl:w-108`}
    >
      <h2 className={`${titleStyle}
                      2xl:text-xl
                    `}
      >
        {title}
      </h2>
      <div className='flex items-center'>
        <p className={`${textStyle}
                       2xl:text-lg`}
        >
          {info}
        </p>
        <img className='w-24 h-24 ml-10' src={cardIcon} alt={descIcon} />
      </div>
    </div>
  )
}
