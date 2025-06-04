import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'
import { Input } from './Input'

export const NameModal = ({ isOpen, onClose, currentName, onSave }) => {
  const [newName, setNewName] = useState(currentName)

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      scale: 0.98
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      y: 20,
      opacity: 0,
      scale: 0.98,
      transition: {
        ease: 'easeIn'
      }
    }
  };

  const handleSave = () => {
    if (newName.trim() !== '') {
      onSave(newName)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="bg-white rounded-xl p-8 max-w-lg w-full mx-4 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <div className='p-1 hover:bg-gray-100 rounded-lg cursor-pointer'>
                <IoClose className='w-6 h-6' />
              </div>
            </button>

            <h2 className="text-2xl font-bold text-[#405e7f] mb-5">
              Editar nombre
            </h2>

            <Input
              iType="text"
              iValue={newName}
              iName="name"
              iChange={(e) => setNewName(e.target.value)}
              iHolder='Ingresa el nuevo nombre'
              padding="px-4 py-2"
            />

            <div className='flex justify-end space-x-3 mt-6'>
              <Button
                btnName="Cancelar"
                btnStyle="bg-gray-200 text-gray-700"
                clicked={onClose}
              />
              <Button
                btnName="Guardar"
                btnStyle="bg-[#60efdb] text-[#405e7f]"
                clicked={handleSave}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}