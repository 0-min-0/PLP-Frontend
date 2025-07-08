import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { Button } from '../button'
import { useState, useEffect } from 'react'
import { Input } from '../Input'

export const NameModal = ({ 
  isOpen, 
  onClose, 
  currentName, 
  onSave, 
  currentRole 
}) => {
  const [newName, setNewName] = useState(currentName || 'Usuario')
  const [error, setError] = useState('')

  // Configuración dinámica según el rol
  const fieldConfig = {
    contratista: {
      label: 'Nombre del Contratista',
      placeholder: 'Ingresa el nombre del contratista',
      validation: (name) => name.length >= 3 || 'Mínimo 3 caracteres'
    },
    contratante: {
      label: 'Nombre del Contratante',
      placeholder: 'Ingresa el nombre del contratante',
      validation: (name) => name.length >= 3 || 'Mínimo 3 caracteres'
    },
    empresa: {
      label: 'Nombre de la Empresa',
      placeholder: 'Ingresa el nombre de la empresa',
      validation: (name) => name.length >= 3 || 'Mínimo 3 caracteres'
    },
    default: {
      label: 'Nombre',
      placeholder: 'Ingresa el nuevo nombre',
      validation: (name) => name.length >= 2 || 'Mínimo 2 caracteres'
    }
  }

  // Obtener configuración según el rol
  const currentConfig = fieldConfig[currentRole?.toLowerCase()] || fieldConfig.default

  // Resetear el estado cuando se abre/cierra el modal
  useEffect(() => {
    if (isOpen) {
      setNewName(currentName || '')
      setError('')
    }
  }, [isOpen, currentName])

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
  }

  const handleSave = () => {
    const trimmedName = newName.trim()
    
    // Validación
    const validationResult = currentConfig.validation(trimmedName)
    if (validationResult !== true) {
      setError(validationResult)
      return
    }

    if (trimmedName !== '') {
      onSave(trimmedName)
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
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
            className='modal-auth general rounded-xl p-8 max-w-lg w-full mx-4 relative'
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[color:var(--color-card-text)] hover:text-gray-700"
              aria-label="Cerrar modal"
            >
              <div className='icons p-1 hover:bg-gray-100 rounded-lg cursor-pointer'>
                <IoClose className='icon-close-x w-6 h-6' />
              </div>
            </button>

            <h2 className="modal-auth-title text-2xl font-bold text-[color:var(--color-card-text)] mb-5">
              Editar {currentConfig.label.toLowerCase()}
            </h2>

            <div className='mb-4'>
              <Input
                iType="text"
                iValue={newName}
                iName="name"
                iChange={(e) => {
                  setNewName(e.target.value)
                  setError('')
                }}
                iHolder={currentConfig.placeholder}
                padding="px-4 py-2"
                onKeyDown={handleKeyDown}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <div className='flex justify-end space-x-3 mt-6'>
              <Button
                btnName="Cancelar"
                btnStyle="bg-gray-200 text-gray-700 hover:bg-gray-300"
                clicked={onClose}
              />
              <Button
                btnName="Guardar"
                btnStyle="bg-[#60efdb] text-[#405e7f] hover:bg-[#4fd4c7]"
                clicked={handleSave}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}