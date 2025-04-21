import React from 'react'

export const CardUserType = ({
  value,
  currentSelection,
  title,
  userType,
  rolIcon,
  iconDesc,
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

      className={`w-full p-5 bg-white rounded-xl border-1 cursor-pointer transition-all duration-200 mb-4
        ${isSelected ? 'border-[#60efdb] ring-2 ring-[#60efdb]/30' : 'border-none hover:bg-gray-100'}`}
    >
      <div className='flex items-center justify-between' title={ desc }>
        <div className='flex items-center'>
          <input
            type='radio'
            name='userType'
            checked={ isSelected }
            onChange={() => {}}
            className='hidden'
          />
          <div className=''>
            <h3 className='text- font-semibold text-[#405e7f]'>{ title }</h3>
            <p className='text-gray-500 text-sm'>{ userType }</p>
          </div>
        </div>
        <img
          src={ rolIcon }
          alt={ iconDesc }
          className='w-11 h-11 ml-6'
        />
      </div>
    </div>
  )
}