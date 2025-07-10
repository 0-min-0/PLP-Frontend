import React, { useEffect } from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { Input } from '../../../UI/Input'
import { Select } from '../../../UI/Select'
import { Desc } from '../../../UI/Desc'
import { useSettings } from '../../../Context/SettingsContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '../../../Components/Avatar/Avatar'
import { Security } from '../Security'
import { Preferences } from '../Preferences'
import { categories, optionTown } from '../../../Utils/options'
import { DisableAccount } from '../../../UI/DisableAccount'

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.2
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export const GeneralCompany = () => {
  const {
    isEditing,
    activeSection,
    formData,
    handleEdit,
    handleSaveWithValidation,
    handleCancel,
    handleChange,
    handleSelectChange,
    getActiveError,
    fieldLabels,
    saveSuccess,
    setSaveSuccess
  } = useSettings()

  // Manejar el mensaje de éxito localmente si es necesario
  useEffect(() => {
    if (saveSuccess) {
      const timer = setTimeout(() => {
        setSaveSuccess(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [saveSuccess, setSaveSuccess])

  return (
    <>
      <Avatar />
      <div className='divider max-w-5xl mx-auto mt-8'>
        <hr className='border-gray-200 mr-8' />
        <h2 className='info-title text-3xl mb-4 mt-6 font-[afacadBold] text-[color:var(--color-card-text)]'>
          Información General
        </h2>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='general-container max-w-5xl mx-auto h-100 general rounded-xl mt-6 max-h-[400px] overflow-y-auto scrollbar-custom'
      >
        {/* Sección de Información de la Empresa */}
        <div className='container-info my-4 pr-6'>
          <div className='flex justify-between items-center'>
            <h3 className='sub-info-text text-xl font-semibold text-[color:var(--color-card-text)]'>Información de la Empresa</h3>
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
                  onClick={() => handleEdit('personal')}
                  className='button-set flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[color:var(--color-card-text)] hover:bg-[#90d7db]/20 cursor-pointer'
                >
                  <FiEdit className='edit-icon w-5 h-5' /> Editar información
                </button>
              )}
            </AnimatePresence>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 space-x-2'>
            {/* Campo NIT */}
            <div className=''>
              <Input
                iType='text'
                iValue={formData.nit || ''}
                iName='nit'
                iChange={handleChange}
                labelTitle={fieldLabels.nit || 'NIT'}
                iHolder='Ingrese el NIT de la empresa'
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={
                  isEditing && activeSection === 'personal'
                    ? (getActiveError('nit') ? 'border-red-500' : 'select-editing')
                    : 'border-gray-300'
                }
                focusColor={getActiveError('nit') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('nit')}
                required={isEditing && activeSection === 'personal'}
              />
            </div>

            {/* Campo Teléfono Principal */}
            <div className=''>
              <Input
                iType='tel'
                iValue={formData.phone || ''}
                iName='phone'
                iChange={handleChange}
                labelTitle={fieldLabels.phone || 'Teléfono principal'}
                iHolder='Ingrese el teléfono principal'
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={
                  isEditing && activeSection === 'personal'
                    ? (getActiveError('phone') ? 'border-red-500' : 'select-editing')
                    : 'border-gray-300'
                }
                focusColor={getActiveError('phone') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('phone')}
                required={isEditing && activeSection === 'personal'}
              />
            </div>

            {/* Campo Teléfono Secundario (Opcional) */}
            <div className=''>
              <Input
                iType='tel'
                iValue={formData.phoneSec || ''}
                iName='phoneSec'
                iChange={handleChange}
                labelTitle={fieldLabels.phoneSec || 'Teléfono secundario'}
                iHolder='Ingrese el teléfono secundario'
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={
                  isEditing && activeSection === 'personal'
                    ? (getActiveError('phoneSec') ? 'border-red-500' : 'select-editing')
                    : 'border-gray-300'
                }
                focusColor={getActiveError('phoneSec') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('phoneSec')}
              />
            </div>

            {/* Campo Correo Electrónico */}
            <div className=''>
              <Input
                iType='email'
                iValue={formData.email || ''}
                iName='email'
                iChange={handleChange}
                labelTitle={fieldLabels.email || 'Correo electrónico'}
                iHolder='Ingrese el correo electrónico'
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={
                  isEditing && activeSection === 'personal'
                    ? (getActiveError('email') ? 'border-red-500' : 'select-editing')
                    : 'border-gray-300'
                }
                focusColor={getActiveError('email') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('email')}
                required={isEditing && activeSection === 'personal'}
              />
            </div>

            {/* Campo Ubicación */}
            <div className=''>
              <Select
                label={fieldLabels.town || 'Ubicación'}
                value={formData.town || ''}
                onChange={(value) => handleSelectChange('town', value)}
                options={optionTown}
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={
                  isEditing && activeSection === 'personal'
                    ? (getActiveError('town') ? 'border-red-500' : 'select-editing')
                    : 'border-gray-300'
                }
                focusColor={getActiveError('town') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('town')}
                required={isEditing && activeSection === 'personal'}
              />
            </div>

            {/* Campo Categoría */}
            <div className=''>
              <Select
                label={'Sector'}
                value={formData.category || ''}
                onChange={(value) => handleSelectChange('category', value)}
                options={categories}
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={
                  isEditing && activeSection === 'personal'
                    ? (getActiveError('category') ? 'border-red-500' : 'select-editing')
                    : 'border-gray-300'
                }
                focusColor={getActiveError('category') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('category')}
                required={isEditing && activeSection === 'personal'}
              />
            </div>

            {/* Campo Sitio Web */}
            <div className=''>
              <Input
                iType='url'
                iValue={formData.webSite || ''}
                iName='webSite'
                iChange={handleChange}
                labelTitle={fieldLabels.webSite || 'Sitio web'}
                iHolder='Ingrese la URL del sitio web'
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={
                  isEditing && activeSection === 'personal'
                    ? (getActiveError('webSite') ? 'border-red-500' : 'select-editing')
                    : 'border-gray-300'
                }
                focusColor={getActiveError('webSite') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={getActiveError('webSite')}
              />
            </div>

            {/* Campo Descripción */}
            <div className='pr-2 col-span-1 md:col-span-2 mb-4'>
              <Desc
                nameDesc={fieldLabels.desc || 'Descripción de la empresa'}
                holderDesc='Escribe una breve descripción sobre tu empresa'
                name='desc'
                color='text-[color:var(--color-card-text)]'
                value={formData.desc || ''}
                onChange={handleChange}
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={
                  isEditing && activeSection === 'personal'
                    ? (getActiveError('desc') ? 'border-red-500' : 'select-editing')
                    : 'border-gray-300'
                }
                error={getActiveError('desc')}
              />
            </div>
          </div>
        </div>

        <hr className='border-gray-200 mr-8' />

        {/* Secciones de Seguridad y Preferencias */}
        <Security />
        <hr className='border-gray-200 mr-8' />
        <Preferences />
        <hr className='border-gray-200 mr-8' />
        <div className='mt-6'>
          <DisableAccount />
        </div>
      </motion.div>

      {/* Mensaje de éxito al guardar */}
      <AnimatePresence>
        {saveSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="success-message exit-save fixed top-50 right-180 bg-white text-[#405e7f] px-4 py-2 rounded-md shadow-lg z-50"
          >
            ¡Datos guardados correctamente!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}