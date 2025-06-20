import React from 'react'
import { Input } from '../../../UI/Input'
import { useSettings } from '../../../Context/SettingsContext'
import { FiSave, FiX, FiEdit } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.1 }
  },
  exit: { opacity: 0, y: -10 }
}

export const SkillsStudies = () => {
  const {
    formData = {
      skill1: '',
      skill2: '',
      skill3: '',
      skill4: '',
      study1: '',
      study2: '',
      study3: '',
      study4: ''
    },
    isEditing,
    activeSection,
    handleEdit,
    handleSaveWithValidation,
    handleCancel,
    getCombinedError,
    handleSkillChange,
    handleStudyChange
  } = useSettings()

  // Determinar si estamos editando esta sección
  const editingSkills = isEditing && activeSection === 'skills'
  const editingStudies = isEditing && activeSection === 'studies'
  
  return (
    <div className="space-y-6">
      {/* Sección de Habilidades */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#405e7f]">Habilidades</h3>
          
          <AnimatePresence mode='wait'>
            {editingSkills ? (
              <motion.div
                key='skills-save-cancel'
                className='flex gap-2'
                initial='hidden'
                animate='visible'
                exit='exit'
                variants={buttonVariants}
              >
                <button
                  onClick={handleSaveWithValidation}
                  className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                >
                  <FiSave className='w-5 h-5' /> Guardar
                </button>
                <button
                  onClick={handleCancel}
                  className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                >
                  <FiX className='w-5 h-5' /> Cancelar
                </button>
              </motion.div>
            ) : (
              <motion.button
                key='skills-edit'
                onClick={() => handleEdit('skills')}
                className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                initial='hidden'
                animate='visible'
                exit='exit'
                variants={buttonVariants}
              >
                <FiEdit className='w-5 h-5' /> Editar habilidades
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        
        <p className="text-sm text-gray-500">Las dos primeras habilidades son requeridas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num) => {
            const fieldName = `skill${num}`
            const isRequired = num <= 2
            const error = getCombinedError(fieldName)
            
            return (
              <motion.div 
                key={`skill-${num}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: num * 0.05 }}
              >
                <Input
                  iType='text'
                  iValue={formData[fieldName] || ''}
                  iName={fieldName}
                  iChange={handleSkillChange}
                  iHolder={`Ingresa tu habilidad ${num}${isRequired ? ' (requerido)' : ''}`}
                  disabled={!editingSkills}
                  borderColor={
                    editingSkills
                      ? error
                        ? 'border-red-500'
                        : 'border-[#60efdb]'
                      : 'border-gray-300'
                  }
                  focusColor={
                    error
                      ? 'focus:ring-red-500'
                      : 'focus:ring-[#405e7f]/50'
                  }
                  error={error}
                  required={isRequired && editingSkills}
                /> 
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Sección de Estudios */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#405e7f]">Estudios</h3>
          
          <AnimatePresence mode='wait'>
            {editingStudies ? (
              <motion.div
                key='studies-save-cancel'
                className='flex gap-2'
                initial='hidden'
                animate='visible'
                exit='exit'
                variants={buttonVariants}
              >
                <button
                  onClick={handleSaveWithValidation}
                  className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                >
                  <FiSave className='w-5 h-5' /> Guardar
                </button>
                <button
                  onClick={handleCancel}
                  className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                >
                  <FiX className='w-5 h-5' /> Cancelar
                </button>
              </motion.div>
            ) : (
              <motion.button
                key='studies-edit'
                onClick={() => handleEdit('studies')}
                className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                initial='hidden'
                animate='visible'
                exit='exit'
                variants={buttonVariants}
              >
                <FiEdit className='w-5 h-5' /> Editar estudios
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        
        <p className="text-sm text-gray-500">Los dos primeros estudios son requeridos</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num) => {
            const fieldName = `study${num}`
            const isRequired = num <= 2
            const error = getCombinedError(fieldName)
            
            return (
              <motion.div 
                key={`study-${num}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: num * 0.05 }}
              >
                <Input
                  iType='text'
                  iValue={formData[fieldName] || ''}
                  iName={fieldName}
                  iChange={handleStudyChange}
                  iHolder={`Ingresa tu estudio ${num}${isRequired ? ' (requerido)' : ''}`}
                  disabled={!editingStudies}
                  borderColor={
                    editingStudies
                      ? error
                        ? 'border-red-500'
                        : 'border-[#60efdb]'
                      : 'border-gray-300'
                  }
                  focusColor={
                    error
                      ? 'focus:ring-red-500'
                      : 'focus:ring-[#405e7f]/50'
                  }
                  error={error}
                  required={isRequired && editingStudies}
                /> 
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}