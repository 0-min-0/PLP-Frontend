import React from 'react'

export const CardUserType = ({
  value,
  currentSelection,
  title,
  userType,
  rolIcon,
  onChange,
  error,
  setError,
  desc
}) => {

  const isSelected = currentSelection === value

  return (
    <div

      onClick={() => {
        onChange(value)
        setError('')
      }}

      className={`w-full p-5 rounded-xl cursor-pointer mb-4 transition-all duration-200 
        ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] 
        ${isSelected ? 'card-selected ring-2 ring-[#60efdb]/30' : 'card-user'}`}
    >
      <div className='flex items-center justify-between' title={desc}>
        <div className='flex items-center'>
          <input
            type='radio'
            name='userType'
            checked={isSelected}
            onChange={() => { }}
            className='hidden'
          />
          <div className=''>
            <h3 className='font-semibold'>{title}</h3>
            <p className='text-sm'>{userType}</p>
          </div>
        </div>
        <div className='ml-4'>
          { rolIcon }
        </div>
      </div>
    </div>
  )
}