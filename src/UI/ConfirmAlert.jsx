import React from 'react'

export const ConfirmAlert = ({ message, onConfirm, onCancel }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl p-6 w-full max-w-md'>
        <h3 className='text-xl font-semibold mb-4 text-center text-[#405e7f]'>{message}</h3>
        <div className='flex justify-center space-x-6 mt-6'>
          <button
            onClick={onCancel}
            className='px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-full font-semibold text-[#405e7f] transition-all duration-300'
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className='px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-all duration-300'
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}