import React from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

export const VacancyCard = ({ title, category, phone }) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md border border-gray-100'>
      <div className='flex justify-between items-start'>
        <div>
          <h3 className='font-bold text-lg text-[#405e7f]'>{title}</h3>
          <p className='text-gray-600'>{category}</p>
          <p className='text-gray-700 mt-1'>{phone}</p>
        </div>
        <div className='flex space-x-2'>
          <button className='text-[#405e7f] hover:text-blue-700'>
            <FiEdit size={18} />
          </button>
          <button className='text-[#405e7f] hover:text-red-700'>
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}