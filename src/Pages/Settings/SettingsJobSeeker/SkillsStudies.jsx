// src/Components/Configuraciones/SkillsStudies.jsx
import React from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { Input } from '../../../UI/Input'
import { useSettings } from '../../../Context/SettingsContext'
import { motion, AnimatePresence } from 'framer-motion'

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
}

export const SkillsStudies = () => {
  const {
    isEditing,
    activeSection,
    formData,
    handleEdit,
    handleSaveWithValidation,
    handleCancel,
    handleSkillChange,
    handleStudyChange,
    getActiveError,
    fieldLabels,
  } = useSettings()

  return (
    <div className='general-employer-container pr-6'>
      <div className='flex justify-between items-center'>
        <h3 className='sub-info-text text-xl font-semibold text-[color:var(--color-card-text)]'>Habilidades y Estudios</h3>
        <AnimatePresence mode='wait'>
          {activeSection === 'skillsStudies' && isEditing ? (
            <motion.div 
              key='save-cancel'
              className='flex gap-2'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={buttonVariants}
            >
              <button 
                onClick={handleSaveWithValidation}
                className='button-set flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[color:var(--color-card-text)] hover:bg-[#90d7db]/20 cursor-pointer'
              >
                <FiSave className='edit-icon w-5 h-5' /> Guardar
              </button>
              <button 
                onClick={handleCancel}
                className='button-set flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[color:var(--color-card-text)] hover:bg-[#90d7db]/20 cursor-pointer'
              >
                <FiX className='edit-icon w-5 h-5' /> Cancelar
              </button>
            </motion.div>
          ) : (
            <button 
              key='edit'
              onClick={() => handleEdit('skillsStudies')}
              className='button-set flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[color:var(--color-card-text)] hover:bg-[#90d7db]/20 cursor-pointer'
            >
              <FiEdit className='edit-icon w-5 h-5' /> Editar habilidades y estudios
            </button>
          )}
        </AnimatePresence>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 space-x-2'>
        {/* Habilidades */}
        <div>
          <h4 className='text-lg font-semibold text-[color:var(--color-card-text)] mb-2'>Habilidades</h4>
          <Input 
            iType='text'
            iValue={formData.skill1 || ''}
            iName='skill1'
            iChange={handleSkillChange}
            iHolder='Ingresa tu habilidad'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('skill1') ? 'border-red-500' : 'select-editing') 
                : 'border-gray-300'
            }
            focusColor={getActiveError('skill1') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            error={getActiveError('skill1')}
            required={isEditing && activeSection === 'skillsStudies'}
          />
          <Input 
            iType='text'
            iValue={formData.skill2 || ''}
            iName='skill2'
            iChange={handleSkillChange}
            iHolder='Ingresa tu habilidad'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('skill2') ? 'border-red-500' : 'select-editing') 
                : 'border-gray-300'
            }
            focusColor={getActiveError('skill2') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            error={getActiveError('skill2')}
            required={isEditing && activeSection === 'skillsStudies'}
          />
          <Input 
            iType='text'
            iValue={formData.skill3 || ''}
            iName='skill3'
            iChange={handleSkillChange}
            iHolder='Ingresa tu habilidad (opcional)'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('skill3') ? 'border-red-500' : 'select-editing') 
                : 'border-gray-300'
            }
            focusColor={getActiveError('skill3') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            error={getActiveError('skill3')}
          />
          <Input 
            iType='text'
            iValue={formData.skill4 || ''}
            iName='skill4'
            iChange={handleSkillChange}
            iHolder='Ingresa tu habilidad (opcional)'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('skill4') ? 'border-red-500' : 'select-editing') 
                : 'border-gray-300'
            }
            focusColor={getActiveError('skill4') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            error={getActiveError('skill4')}
          />
        </div>

        {/* Estudios */}
        <div>
          <h4 className='text-lg font-semibold text-[color:var(--color-card-text)] mb-2'>Estudios</h4>
          <Input 
            iType='text'
            iValue={formData.study1 || ''}
            iName='study1'
            iChange={handleStudyChange}
            iHolder='Ingresa tu estudio'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('study1') ? 'border-red-500' : 'select-editing') 
                : 'border-gray-300'
            }
            focusColor={getActiveError('study1') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            error={getActiveError('study1')}
            required={isEditing && activeSection === 'skillsStudies'}
          />
          <Input 
            iType='text'
            iValue={formData.study2 || ''}
            iName='study2'
            iChange={handleStudyChange}
            iHolder='Ingresa tu estudio'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('study2') ? 'border-red-500' : 'select-editing') 
                : 'border-gray-300'
            }
            focusColor={getActiveError('study2') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            error={getActiveError('study2')}
            required={isEditing && activeSection === 'skillsStudies'}
          />
          <Input 
            iType='text'
            iValue={formData.study3 || ''}
            iName='study3'
            iChange={handleStudyChange}
            iHolder='Ingresa tu estudio (opcional)'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('study3') ? 'border-red-500' : 'select-editing') 
                : 'border-gray-300'
            }
            focusColor={getActiveError('study3') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            error={getActiveError('study3')}
          />
          <Input 
            iType='text'
            iValue={formData.study4 || ''}
            iName='study4'
            iChange={handleStudyChange}
            iHolder='Ingresa tu estudio (opcional)'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('study4') ? 'border-red-500' : 'select-editing') 
                : 'border-gray-300'
            }
            focusColor={getActiveError('study4') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            error={getActiveError('study4')}
          />
        </div>
      </div>
    </div>
  )
}