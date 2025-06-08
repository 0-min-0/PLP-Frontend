<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { SearchBar } from '../../../UI/SearchBar'
import { Input } from '../../../UI/Input'
import { Select } from '../../../UI/Select'
import { Desc } from '../../../UI/Desc'
import { useSettings } from '../../../Context/SettingsContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '../../../Components/Avatar/Avatar'
import { Security } from '../Security'
import { Preferences } from '../Preferences'
import { SkillsStudies } from './SkillsStudies'

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export const GeneralJobSeeker = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const {
    userData,
    isEditing,
    activeSection,
    formData,
    errors,
    handleEdit,
    handleSave,
    handleCancel,
    handleChange,
    handleSelectChange,
    validateFields,
    roleFields,
    currentRole,
    optionTown,
    optionId,
    getActiveError,
    handleSaveWithValidation
  } = useSettings()

  useEffect(() => {
    if (isEditing && activeSection === 'personal' && userData) {
      Object.entries(formData).forEach(([name, value]) => {
        if (['documentType', 'documentNumber', 'phone', 'phoneSec', 'email', 'town'].includes(name)) {
          if (roleFields && roleFields[currentRole]) {
            if (name === 'phone') {
              errors.phone = validatePhone(value)
            } else if (name === 'phoneSec' && value) {
              errors.phoneSec = validatePhone(value)
            } else if (name === 'email') {
              errors.email = validateEmail(value)
            } else if (name === 'documentNumber') {
              errors.documentNumber = validateDocumentNumber(value)
            } else if (name === 'documentType' || name === 'town') {
              const fieldLabel = roleFields[currentRole][name] || name
              errors[name] = validateRequiredField(value, fieldLabel.toLowerCase())
            }
          }
        }
      })
    }
  }, [formData, isEditing, activeSection, currentRole, roleFields])

  return (
    <>
      <Avatar />
      <div className='max-w-5xl mx-auto mt-8'>
        <SearchBar />
        <h2 className='text-3xl mb-4 mt-6 font-[afacadBold] text-[#405e7f]'>
          General
        </h2>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='max-w-5xl mx-auto h-85 bg-white rounded-xl space-y-6 max-h-[400px] overflow-y-auto scrollbar-custom'
      >
        {/* Personal Information Section */}
        <div className='space-y-4 pr-6'>
          <div className='flex justify-between items-center'>
            <h3 className='text-xl font-semibold text-[#405e7f]'>Información Personal</h3>
            <AnimatePresence mode='wait'>
              {activeSection === 'personal' && isEditing ? (
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
                  onClick={() => handleEdit('personal')}
                  className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                >
                  <FiEdit className='w-5 h-5' /> Editar información
                </button>
              )}
            </AnimatePresence>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 space-x-2'>
            <div className=''>
              <Select
                label='Tipo de documento'
                value={formData.documentType || ''}
                onChange={(value) => handleSelectChange('documentType', value)}
                options={optionId}
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={isEditing && activeSection === 'personal' ?
                  (getActiveError('documentType') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('documentType') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('documentType')}
              />
            </div>

            <div className=''>
              <Input
                iType='text'
                iValue={formData.documentNumber || ''}
                iName='documentNumber'
                iChange={handleChange}
                labelTitle='Número de documento'
                iHolder='Ingrese su número de documento'
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={isEditing && activeSection === 'personal' ?
                  (getActiveError('documentNumber') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('documentNumber') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('documentNumber')}
              />
            </div>

            <div className=''>
              <Input
                iType='tel'
                iValue={formData.phone || ''}
                iName='phone'
                iChange={handleChange}
                labelTitle='Teléfono principal'
                iHolder='Ingrese su teléfono principal'
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={isEditing && activeSection === 'personal' ?
                  (getActiveError('phone') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('phone') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('phone')}
              />
            </div>

            <div className=''>
              <Input
                iType='tel'
                iValue={formData.phoneSec || ''}
                iName='phoneSec'
                iChange={handleChange}
                labelTitle='Teléfono secundario'
                iHolder='Ingrese su teléfono secundario'
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={isEditing && activeSection === 'personal' ?
                  (getActiveError('phoneSec') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('phoneSec') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('phoneSec')}
              />
            </div>

            <div className=''>
              <Input
                iType='email'
                iValue={formData.email || ''}
                iName='email'
                iChange={handleChange}
                labelTitle='Correo electrónico'
                iHolder='Ingrese su correo electrónico'
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={isEditing && activeSection === 'personal' ?
                  (getActiveError('email') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('email') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('email')}
              />
            </div>

            <div className=''>
              <Select
                label='Ubicación'
                value={formData.town || ''}
                onChange={(value) => handleSelectChange('town', value)}
                options={optionTown}
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={isEditing && activeSection === 'personal' ?
                  (getActiveError('town') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('town') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('town')}
              />
            </div>
            <div className='pr-2 col-span-1 md:col-span-2'>
              <Desc
                nameDesc='Descripción personal'
                holderDesc='Escribe una breve descripción sobre ti'
                name='desc'
                value={formData.desc || ''}
                onChange={handleChange}
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={isEditing && activeSection === 'personal' ?
                  (getActiveError('desc') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                error={getActiveError('desc')}
              />
            </div>
          </div>
        </div>
        <hr className=' border-gray-200 mr-8' />
        <div className='mr-8'>
           <SkillsStudies />
        </div>
        <hr className='border-gray-200 mr-8' />
        {/* Seguridad y preferencias */}
        <Security />
        <hr className='border-gray-200 mr-8' />
        <Preferences />
      </motion.div>
      {/* Mensaje de éxito al guardar */}
      {saveSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg"
        >
          ¡Datos guardados correctamente!
        </motion.div>
      )}
    </>
  )
=======
import { GeneralSettings } from '../GeneralSettings';

export const GeneralJobSeeker = () => {
  return <GeneralSettings />
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
}