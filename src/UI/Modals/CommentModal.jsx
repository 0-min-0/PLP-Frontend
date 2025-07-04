import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { Button } from '../button'
import { useState, useEffect } from 'react'
import { Input } from '../Input'
import { Desc } from '../Desc'

export const CommentModal = ({ isOpen, onClose, onSave, currentRole }) => {
  const [commentText, setCommentText] = useState('')
  const [commenterName, setCommenterName] = useState('')
  const [role, setRole] = useState(currentRole || 'contratante')

  const fieldConfig = {
    contratante: {
      label: 'Nombre del Contratante',
      placeholder: 'Ingresa tu nombre'
    },
    empresa: {
      label: 'Nombre de la Empresa',
      placeholder: 'Ingresa el nombre de tu empresa'
    }
  }

  const currentConfig = fieldConfig[role?.toLowerCase()] || fieldConfig.contratante

  useEffect(() => {
    if (!isOpen) {
      setCommentText('')
      setCommenterName('')
      setRole(currentRole || 'contratante')
    }
  }, [isOpen, currentRole])

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
    const trimmedComment = commentText.trim()
    const trimmedName = commenterName.trim()
    
    if (trimmedComment !== '' && trimmedName !== '') {
      const newComment = {
        role: role.toLowerCase(),
        name: trimmedName,
        date: new Date().toISOString().split('T')[0],
        coment: trimmedComment
      }
      onSave(newComment)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={backdropVariants}
        >
          <motion.div
            className="modal-auth general rounded-xl p-8 max-w-lg w-full mx-4 relative"
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
              Dejar Comentario
            </h2>

            <div className="mb-4">
              <label className="text block font-medium text-[color:var(--color-card-text)] mb-1">
                Eres:
              </label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#60efdb]"
                    name="role"
                    value="contratante"
                    checked={role === 'contratante'}
                    onChange={() => setRole('contratante')}
                  />
                  <span className="text ml-2">Contratante</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#60efdb]"
                    name="role"
                    value="empresa"
                    checked={role === 'empresa'}
                    onChange={() => setRole('empresa')}
                  />
                  <span className="text ml-2">Empresa</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <Input
                labelTitle={currentConfig.label}
                iType="text"
                iValue={commenterName}
                iName="commenterName"
                iChange={(e) => setCommenterName(e.target.value)}
                iHolder={currentConfig.placeholder}
                padding="px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <Desc
                nameDesc="Tu comentario"
                value={commentText}
                name="comment"
                onChange={(e) => setCommentText(e.target.value)}
                holderDesc="Escribe tu comentario sobre este contratista..."
                rows="4"
              />
            </div>

            <div className='flex justify-end space-x-3 mt-6'>
              <Button
                btnName="Cancelar"
                btnStyle="bg-gray-200 text-gray-700 hover:bg-gray-300"
                clicked={onClose}
              />
              <Button
                btnName="Guardar Comentario"
                btnStyle="bg-[#60efdb] text-[#405e7f] hover:bg-[#4fd4c7]"
                clicked={handleSave}
                disabled={!commentText.trim() || !commenterName.trim()}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}