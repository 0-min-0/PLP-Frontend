import React from 'react'
import { motion } from 'framer-motion'
import { Terms } from '../../Pages/Settings/Terms'
import { Button } from '../../UI/button'
import { FiX } from 'react-icons/fi'

export const TermsModal = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50'>
      <div className='terms-modal general rounded-xl shadow-lg max-w-3xl w-[90%] max-h-[90vh] overflow-hidden'>
        <div className='p-6 mb-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-600'>
          <h2 className='text-xl font-bold text-[color:var(--color-card-text)]'>Términos y Condiciones</h2>
          <button
            onClick={onClose}
            className='icons p-1 cursor-pointer rounded-lg text-xl font-bold hover:text-[#405e7f] text-[color:var(--color-card-text)]'
          >
            <FiX />
          </button>
        </div>

        <div className='overflow-y-auto max-h-[70vh] px-4'>
          <Terms embedded={true} />
        </div>

        <div className='p-6 mt-4 flex justify-end border-t border-gray-200 '>
          <Button
            btnType='button'
            btnStyle='card-button bg-[#405e7f] text-white font-bold px-6 py-2 rounded-full'
            btnName='Aceptar Términos y Condiciones'
            clicked={() => {
              onAccept()
              onClose()
            }}
          />
        </div>
      </div>
    </div>
  )
}
