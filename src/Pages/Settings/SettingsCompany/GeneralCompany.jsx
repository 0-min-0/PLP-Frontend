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

export const GeneralCompany = () => {
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
    optionCategory,
    getActiveError,
    handleSaveWithValidation
  } = useSettings()

  // Validation effect for company fields
  useEffect(() => {
    if (isEditing && activeSection === 'company' && userData) {
      Object.entries(formData).forEach(([name, value]) => {
        if (['nit', 'nameCompany', 'phoneCompany', 'phoneSecCompany', 'emailCompany', 'townCompany', 'category', 'webSite'].includes(name)) {
          if (roleFields && roleFields[currentRole]) {
            if (name === 'phoneCompany') {
              errors.phoneCompany = validatePhone(value)
            } else if (name === 'phoneSecCompany' && value) {
              errors.phoneSecCompany = validatePhone(value)
            } else if (name === 'emailCompany') {
              errors.emailCompany = validateEmail(value)
            } else if (name === 'nit') {
              errors.nit = validateNit(value)
            } else if (name === 'webSite') {
              errors.webSite = validateWebsite(value)
            } else if (['nameCompany', 'townCompany', 'category'].includes(name)) {
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
        {/* Company Information Section */}
        <div className='space-y-4 pr-6'>
          <div className='flex justify-between items-center'>
            <h3 className='text-xl font-semibold text-[#405e7f]'>Información de la Empresa</h3>
            <AnimatePresence mode='wait'>
              {activeSection === 'company' && isEditing ? (
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
                  onClick={() => handleEdit('company')}
                  className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                  >
                  <FiEdit className='w-5 h-5' /> Editar información
                </button>
              )}
            </AnimatePresence>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 space-x-2'>
            <div className=''>
              <Input
                iType='text'
                iValue={formData.nit || ''}
                iName='nit'
                iChange={handleChange}
                labelTitle='NIT'
                iHolder='Ingrese el NIT de la empresa'
                disabled={!isEditing || activeSection !== 'company'}
                borderColor={isEditing && activeSection === 'company' ?
                  (getActiveError('nit') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('nit') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('nit')}
              />
            </div>

            <div className=''>
              <Input
                iType='text'
                iValue={formData.nameCompany || ''}
                iName='nameCompany'
                iChange={handleChange}
                labelTitle='Nombre de la empresa'
                iHolder='Ingrese el nombre de la empresa'
                disabled={!isEditing || activeSection !== 'company'}
                borderColor={isEditing && activeSection === 'company' ?
                  (getActiveError('nameCompany') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('nameCompany') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('nameCompany')}
              />
            </div>

            <div className=''>
              <Input
                iType='tel'
                iValue={formData.phoneCompany || ''}
                iName='phoneCompany'
                iChange={handleChange}
                labelTitle='Teléfono principal'
                iHolder='Ingrese el teléfono principal'
                disabled={!isEditing || activeSection !== 'company'}
                borderColor={isEditing && activeSection === 'company' ?
                  (getActiveError('phoneCompany') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('phoneCompany') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('phoneCompany')}
              />
            </div>

            <div className=''>
              <Input
                iType='tel'
                iValue={formData.phoneSecCompany || ''}
                iName='phoneSecCompany'
                iChange={handleChange}
                labelTitle='Teléfono secundario'
                iHolder='Ingrese el teléfono secundario'
                disabled={!isEditing || activeSection !== 'company'}
                borderColor={isEditing && activeSection === 'company' ?
                  (getActiveError('phoneSecCompany') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('phoneSecCompany') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('phoneSecCompany')}
              />
            </div>

            <div className=''>
              <Input
                iType='email'
                iValue={formData.emailCompany || ''}
                iName='emailCompany'
                iChange={handleChange}
                labelTitle='Correo electrónico'
                iHolder='Ingrese el correo electrónico'
                disabled={!isEditing || activeSection !== 'company'}
                borderColor={isEditing && activeSection === 'company' ?
                  (getActiveError('emailCompany') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('emailCompany') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('emailCompany')}
              />
            </div>

            <div className=''>
              <Select
                label='Ubicación'
                value={formData.townCompany || ''}
                onChange={(value) => handleSelectChange('townCompany', value)}
                options={optionTown}
                disabled={!isEditing || activeSection !== 'company'}
                borderColor={isEditing && activeSection === 'company' ?
                  (getActiveError('townCompany') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('townCompany') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('townCompany')}
              />
            </div>

            <div className=''>
              <Select
                label='Categoría'
                value={formData.category || ''}
                onChange={(value) => handleSelectChange('category', value)}
                options={optionCategory}
                disabled={!isEditing || activeSection !== 'company'}
                borderColor={isEditing && activeSection === 'company' ?
                  (getActiveError('category') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('category') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('category')}
              />
            </div>

            <div className=''>
              <Input
                iType='url'
                iValue={formData.webSite || ''}
                iName='webSite'
                iChange={handleChange}
                labelTitle='Sitio web'
                iHolder='Ingrese la URL del sitio web'
                disabled={!isEditing || activeSection !== 'company'}
                borderColor={isEditing && activeSection === 'company' ?
                  (getActiveError('webSite') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={getActiveError('webSite') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('webSite')}
              />
            </div>

            <div className='pr-2 col-span-1 md:col-span-2'>
              <Desc
                nameDesc='Descripción de la empresa'
                holderDesc='Escribe una breve descripción sobre tu empresa'
                name='descCompany'
                value={formData.descCompany || ''}
                onChange={handleChange}
                disabled={!isEditing || activeSection !== 'company'}
                borderColor={isEditing && activeSection === 'company' ?
                  (getActiveError('descCompany') ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                error={getActiveError('descCompany')}
              />
            </div>
          </div>
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
}