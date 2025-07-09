import React from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

export const VacancyCard = ({ title, category, phone }) => {
  return (
    <div className='bg-white py-4 px-6 rounded-xl border border-[#90d7db]'>
      <div className='flex justify-between items-start'>
        <div>
          <h3 className='font-bold text-lg text-[#405e7f]'>{title}</h3>
          <p className='text-gray-600'>{category}</p>
          <p className='text-gray-700 mt-1'>{phone}</p>
        </div>
        <div className='flex space-x-2'>
          <button className='text-[#405e7f] cursor-pointer
            transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
            transform hover:-translate-y-0.5 hover:shadow-md
            active:scale-[0.98]'
          >
            <FiEdit size={24} />
          </button>
          <button className='text-[#405e7f] cursor-pointer
            transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
            transform hover:-translate-y-0.5 hover:shadow-md
            active:scale-[0.98]'
          >
            <FiTrash2 size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}