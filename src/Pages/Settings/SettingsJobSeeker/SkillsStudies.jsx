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
    <div className='space-y-4 pr-6'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-semibold text-[#405e7f]'>Habilidades y Estudios</h3>
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
            <button 
              key='edit'
              onClick={() => handleEdit('skillsStudies')}
              className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
            >
              <FiEdit className='w-5 h-5' /> Editar
            </button>
          )}
        </AnimatePresence>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 space-x-2'>
        {/* Habilidades */}
        <div>
          <h4 className='font-semibold text-[#405e7f] mb-2'>Habilidades</h4>
          <Input 
            iType='text'
            iValue={formData.skill1 || ''}
            iName='skill1'
            iChange={handleSkillChange}
            labelTitle={fieldLabels.skill1 || 'Habilidad 1'}
            iHolder='Habilidad Principal'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('skill1') ? 'border-red-500' : 'border-[#60efdb]') 
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
            labelTitle={fieldLabels.skill2 || 'Habilidad 2'}
            iHolder='Habilidad Secundaria'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('skill2') ? 'border-red-500' : 'border-[#60efdb]') 
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
            labelTitle={fieldLabels.skill3 || 'Habilidad 3'}
            iHolder='Habilidad Opcional'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('skill3') ? 'border-red-500' : 'border-[#60efdb]') 
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
            labelTitle={fieldLabels.skill4 || 'Habilidad 4'}
            iHolder='Habilidad Opcional'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('skill4') ? 'border-red-500' : 'border-[#60efdb]') 
                : 'border-gray-300'
            }
            focusColor={getActiveError('skill4') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            error={getActiveError('skill4')}
          />
        </div>

        {/* Estudios */}
        <div>
          <h4 className='font-semibold text-[#405e7f] mb-2'>Estudios</h4>
          <Input 
            iType='text'
            iValue={formData.study1 || ''}
            iName='study1'
            iChange={handleStudyChange}
            labelTitle={fieldLabels.study1 || 'Estudio 1'}
            iHolder='Estudio Principal'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('study1') ? 'border-red-500' : 'border-[#60efdb]') 
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
            labelTitle={fieldLabels.study2 || 'Estudio 2'}
            iHolder='Estudio Secundario'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('study2') ? 'border-red-500' : 'border-[#60efdb]') 
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
            labelTitle={fieldLabels.study3 || 'Estudio 3'}
            iHolder='Estudio Opcional'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('study3') ? 'border-red-500' : 'border-[#60efdb]') 
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
            labelTitle={fieldLabels.study4 || 'Estudio 4'}
            iHolder='Estudio Opcional'
            disabled={!isEditing || activeSection !== 'skillsStudies'}
            borderColor={
              isEditing && activeSection === 'skillsStudies' 
                ? (getActiveError('study4') ? 'border-red-500' : 'border-[#60efdb]') 
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