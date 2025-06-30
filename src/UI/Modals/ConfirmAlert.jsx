import React from 'react'
import { Button } from '../button'

export const ConfirmAlert = ({ message, onConfirm, onCancel }) => {
  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
      <div className='general rounded-xl p-6 w-full max-w-md'>
        <h3 className='text-xl font-semibold mb-4 text-center text-[color:var(--color-card-text)]'>{message}</h3>
        <div className='flex justify-center space-x-6 mt-6'>
          <Button
            btnName='Cancelar'
            clicked={onCancel}
            btnStyle='px-6 py-2 bg-[#405e7f] rounded-full font-semibold text-white'
          />
          <Button
            btnName='Eliminar'
            clicked={onConfirm}
            btnStyle='px-6 py-2 bg-red-500 text-white rounded-full font-semibold'
          />
        </div>
      </div>
    </div>
  )
}