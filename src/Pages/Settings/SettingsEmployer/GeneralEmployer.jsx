import React from 'react'
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

export const GeneralEmployer = () => {
  const {
    isEditing,
    activeSection,
    formData = {},
    handleEdit,
    handleSave,
    handleCancel,
    handleChange,
    handleSelectChange,
    optionTown,
    optionId,
    getActiveError,
    fieldLabels,
    saveSuccess
  } = useSettings()

  return (
    <>
      <Avatar />
      <div className='max-w-5xl mx-auto mt-8'>
        <SearchBar />
        <h2 className='text-3xl mb-4 mt-6 font-[afacadBold] text-[#405e7f]'>
          Información General
        </h2>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='max-w-5xl mx-auto h-85 bg-white rounded-xl space-y-6 max-h-[400px] overflow-y-auto scrollbar-custom'
      >
        {/* Sección de Información Personal */}
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
                    onClick={handleSave}
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
            <Select
              label={fieldLabels.documentType || 'Tipo de documento'}
              value={formData.documentType || ''}
              onChange={(value) => handleSelectChange('documentType', value)}
              options={optionId}
              disabled={!isEditing || activeSection !== 'personal'}
              borderColor={isEditing && activeSection === 'personal'
                ? (getActiveError('documentType') ? 'border-red-500' : 'border-[#60efdb]')
                : 'border-gray-300'}
              focusColor={getActiveError('documentType') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getActiveError('documentType')}
              required={isEditing && activeSection === 'personal'}
            />

            <Input
              iType='text'
              iValue={formData.documentNumber || ''}
              iName='documentNumber'
              iChange={handleChange}
              labelTitle={fieldLabels.documentNumber}
              iHolder={`Ingrese su ${fieldLabels.documentNumber?.toLowerCase()}`}
              disabled={!isEditing || activeSection !== 'personal'}
              borderColor={isEditing && activeSection === 'personal'
                ? (getActiveError('documentNumber') ? 'border-red-500' : 'border-[#60efdb]')
                : 'border-gray-300'}
              focusColor={getActiveError('documentNumber') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getActiveError('documentNumber')}
              required={isEditing && activeSection === 'personal'}
            />

            <Input
              iType='tel'
              iValue={formData.phone || ''}
              iName='phone'
              iChange={handleChange}
              labelTitle={fieldLabels.phone}
              iHolder={`Ingrese su ${fieldLabels.phone?.toLowerCase()}`}
              disabled={!isEditing || activeSection !== 'personal'}
              borderColor={isEditing && activeSection === 'personal'
                ? (getActiveError('phone') ? 'border-red-500' : 'border-[#60efdb]')
                : 'border-gray-300'}
              focusColor={getActiveError('phone') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getActiveError('phone')}
              required={isEditing && activeSection === 'personal'}
            />

            <Input
              iType='tel'
              iValue={formData.phoneSec || ''}
              iName='phoneSec'
              iChange={handleChange}
              labelTitle={fieldLabels.phoneSec}
              iHolder={`Ingrese su ${fieldLabels.phoneSec?.toLowerCase()}`}
              disabled={!isEditing || activeSection !== 'personal'}
              borderColor={isEditing && activeSection === 'personal'
                ? (getActiveError('phoneSec') ? 'border-red-500' : 'border-[#60efdb]')
                : 'border-gray-300'}
              focusColor={getActiveError('phoneSec') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getActiveError('phoneSec')}
            />

            <Input
              iType='email'
              iValue={formData.email || ''}
              iName='email'
              iChange={handleChange}
              labelTitle={fieldLabels.email}
              iHolder={`Ingrese su ${fieldLabels.email?.toLowerCase()}`}
              disabled={!isEditing || activeSection !== 'personal'}
              borderColor={isEditing && activeSection === 'personal'
                ? (getActiveError('email') ? 'border-red-500' : 'border-[#60efdb]')
                : 'border-gray-300'}
              focusColor={getActiveError('email') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getActiveError('email')}
              required={isEditing && activeSection === 'personal'}
            />

            <Select
              label={fieldLabels.town}
              value={formData.town || ''}
              onChange={(value) => handleSelectChange('town', value)}
              options={optionTown}
              disabled={!isEditing || activeSection !== 'personal'}
              borderColor={isEditing && activeSection === 'personal'
                ? (getActiveError('town') ? 'border-red-500' : 'border-[#60efdb]')
                : 'border-gray-300'}
              focusColor={getActiveError('town') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getActiveError('town')}
              required={isEditing && activeSection === 'personal'}
            />

            <div className='pr-2 col-span-1 md:col-span-2'>
              <Desc
                nameDesc={fieldLabels.desc}
                holderDesc='Escribe una breve descripción sobre ti'
                name='desc'
                value={formData.desc || ''}
                onChange={handleChange}
                disabled={!isEditing || activeSection !== 'personal'}
                borderColor={isEditing && activeSection === 'personal'
                  ? (getActiveError('desc') ? 'border-red-500' : 'border-[#60efdb]')
                  : 'border-gray-300'}
                error={getActiveError('desc')}
              />
            </div>
          </div>
        </div>

        <hr className='border-gray-200 mr-8' />
        <Security />
        <hr className='border-gray-200 mr-8' />
        <Preferences />
      </motion.div>
      <AnimatePresence>
        {saveSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='fixed top-50 right-170 bg-white text-[#405e7f] px-4 py-2 rounded-md shadow-md z-50'
          >
            ¡Datos guardados correctamente!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
