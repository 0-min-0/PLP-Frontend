import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'
import { FiX } from 'react-icons/fi'
import { ConfirmAlert } from '../Modals/ConfirmAlert'
import { useVacancy } from '../../Context/VacancyContext'
import { VacancyEdit } from './VacancyEdit'

export const VacancyDetail = ({ vacancy, onClose }) => {
  const {
    isEditing,
    showConfirm,
    editedVacancy,
    setEditedVacancy,
    setIsEditing,
    setShowConfirm,
    handleSaveVacancy,
    handleDeleteConfirmVacancy
  } = useVacancy()

  useEffect(() => {
    setEditedVacancy({
      ...vacancy,
      vacancyName: vacancy.vacancyName || vacancy.title
    })
  }, [vacancy, setEditedVacancy])

  // Animaciones
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { 
      y: 20,
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
        duration: 0.2
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
      >
        <motion.div
          className='general rounded-xl px-4 py-10 w-full max-w-2xl'
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className='flex justify-between items-center mb-6 ml-10'>
            <motion.h2 
              className='text-2xl font-bold text-[color:var(--color-card-text)]'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {isEditing ? "Editando vacante" : "Detalles de la vacante"}
            </motion.h2>
            <motion.button
              onClick={onClose}
              className='text-[color:var(--color-card-text)] hover:bg-gray-100 transition-colors duration-300 cursor-pointer p-2 rounded-md'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiX size={24} />
            </motion.button>
          </div>

          <VacancyEdit 
            editedVacancy={editedVacancy} 
            isEditing={isEditing} 
          />

          <motion.div 
            className="mt-8 mr-12 flex justify-end space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              btnName={isEditing ? 'Guardar cambios' : 'Editar vacante'}
              btnType="button"
              btnStyle={`px-6 py-2 rounded-full ${isEditing
                  ? 'bg-[#60efdb] text-[#405e7f]'
                  : 'bg-[#405e7f] text-white'
                } font-semibold`}
              clicked={isEditing ? () => handleSaveVacancy(onClose) : () => setIsEditing(true)}
            />
            <Button
              btnName='Eliminar vacante'
              btnType='button'
              btnStyle='px-6 py-2 bg-red-500 text-white rounded-full font-semibold'
              clicked={() => setShowConfirm(true)}
            />
          </motion.div>

          <AnimatePresence>
            {showConfirm && (
              <ConfirmAlert
                message='¿Estás seguro de eliminar esta vacante?'
                onConfirm={() => handleDeleteConfirmVacancy(vacancy.id, onClose)}
                onCancel={() => setShowConfirm(false)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}