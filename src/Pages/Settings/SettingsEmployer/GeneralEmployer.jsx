import React, { useEffect } from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { SearchBar } from '../../../UI/SearchBar'
import { Input } from '../../../UI/Input'
import { Select } from '../../../UI/Select'
import { Desc } from '../../../UI/Desc'
import { useSettings } from '../../../Context/SettingsContext'
import { optionTown, optionId } from '../../../Utils/options'
import { users } from '../../../Utils/users'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '../../../Components/Avatar/Avatar'

const themeOptions = [
  { value: 'light', label: 'Tema claro' },
  { value: 'dark', label: 'Tema oscuro' },
  { value: 'system', label: 'Usar configuración del sistema' }
]

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
}

const passwordFieldsVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      opacity: { duration: 0.3 },
      height: { duration: 0.4 }
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: { duration: 0.2 },
      height: { duration: 0.3 }
    }
  }
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
    user,
    tempUser,
    editMode,
    activeSection,
    passwordData,
    validationErrors,
    passwordErrors,
    handleEdit,
    handleSave,
    handleCancel,
    handleChange,
    handlePasswordChange,
    handleSelectChange,
    validateField,
    validatePersonalSection,
    validatePasswordFields
  } = useSettings()

  useEffect(() => {
    if (editMode && activeSection === 'personal') {
      Object.entries(tempUser).forEach(([name, value]) => {
        if (['documentType', 'documentNumber', 'phoneEmployer',
          'phoneSecEmployer', 'emailEmployer', 'townEmployer'].includes(name)) {
          validateField(name, value)
        }
      })
    }
  }, [tempUser, editMode, activeSection])

  const handleSaveWithValidation = () => {
    let isValid = true

    if (activeSection === 'personal') {
      isValid = validatePersonalSection();
    } else if (activeSection === 'security') {
      isValid = validatePasswordFields();
    }

    if (isValid) {
      handleSave()
    }
  }

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
              {activeSection === 'personal' && editMode ? (
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
                value={tempUser.documentType || users[0].documentType}
                onChange={(value) => handleSelectChange('documentType', value)}
                options={optionId}
                disabled={!editMode || activeSection !== 'personal'}
                borderColor={editMode && activeSection === 'personal' ?
                  (validationErrors.documentType ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={validationErrors.documentType ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={validationErrors.documentType}
              />
            </div>

            <div className=''>
              <Input
                iType='text'
                iValue={tempUser.documentNumber || users[0].documentNumber}
                iName='documentNumber'
                iChange={handleChange}
                labelTitle='Número de documento'
                iHolder='Ingrese su número de documento'
                disabled={!editMode || activeSection !== 'personal'}
                borderColor={editMode && activeSection === 'personal' ?
                  (validationErrors.documentNumber ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={validationErrors.documentNumber ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={validationErrors.documentNumber}
              />
            </div>

            <div className=''>
              <Input
                iType='tel'
                iValue={tempUser.phoneEmployer || users[0].phoneEmployer}
                iName='phoneEmployer'
                iChange={handleChange}
                labelTitle='Teléfono principal'
                iHolder='Ingrese su teléfono principal'
                disabled={!editMode || activeSection !== 'personal'}
                borderColor={editMode && activeSection === 'personal' ?
                  (validationErrors.phoneEmployer ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={validationErrors.phoneEmployer ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={validationErrors.phoneEmployer}
              />
            </div>

            <div className=''>
              <Input
                iType='tel'
                iValue={tempUser.phoneSecEmployer || users[0].phoneSecEmployer}
                iName='phoneSecEmployer'
                iChange={handleChange}
                labelTitle='Teléfono secundario'
                iHolder='Ingrese su teléfono secundario'
                disabled={!editMode || activeSection !== 'personal'}
                borderColor={editMode && activeSection === 'personal' ?
                  (validationErrors.phoneSecEmployer ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={validationErrors.phoneSecEmployer ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={validationErrors.phoneSecEmployer}
              />
            </div>

            <div className=''>
              <Input
                iType='email'
                iValue={tempUser.emailEmployer || users[0].emailEmployer}
                iName='emailEmployer'
                iChange={handleChange}
                labelTitle='Correo electrónico'
                iHolder='Ingrese su correo electrónico'
                disabled={!editMode || activeSection !== 'personal'}
                borderColor={editMode && activeSection === 'personal' ?
                  (validationErrors.emailEmployer ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={validationErrors.emailEmployer ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={validationErrors.emailEmployer}
              />
            </div>

            <div className=''>
              <Select
                label='Ubicación'
                value={tempUser.townEmployer || users[0].townEmployer}
                onChange={(value) => handleSelectChange('townEmployer', value)}
                options={optionTown}
                disabled={!editMode || activeSection !== 'personal'}
                borderColor={editMode && activeSection === 'personal' ?
                  (validationErrors.townEmployer ? 'border-red-500' : 'border-[#60efdb]') :
                  'border-gray-300'}
                focusColor={validationErrors.townEmployer ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                error={validationErrors.townEmployer}
              />
            </div>

            <div className='pr-2 col-span-1 md:col-span-2'>
              <Desc
                nameDesc='Descripción personal'
                holderDesc='Escribe una breve descripción sobre ti'
                name='descEmployer'
                value={tempUser.descEmployer || users[0].descEmployer}
                onChange={handleChange}
                disabled={!editMode || activeSection !== 'personal'}
                borderColor={editMode && activeSection === 'personal' ? 'border-[#60efdb]' : 'border-gray-300'}
              />
            </div>
          </div>
        </div>

        <hr className='border-gray-200 mr-8' />

        {/* Security Section */}
        <div className='space-y-4'>
          <div className='flex justify-between items-center mr-8'>
            <h3 className='text-xl font-semibold text-[#405e7f]'>Seguridad</h3>
            <AnimatePresence mode='wait'>
              {activeSection === 'security' && editMode ? (
                <motion.div
                  key='save-cancel-security'
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
                  key='edit-security'
                  onClick={() => handleEdit('security')}
                  className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                >
                  <FiEdit className='w-5 h-5' /> Cambiar contraseña
                </button>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {editMode && activeSection === 'security' && (
              <motion.div
                className='grid grid-cols-1 gap-2 p-4 rounded-lg mr-10'
                initial='hidden'
                animate='visible'
                exit='exit'
                variants={passwordFieldsVariants}
              >
                <Input
                  iType='password'
                  iValue={passwordData.currentPassword}
                  iName='currentPassword'
                  iChange={handlePasswordChange}
                  labelTitle='Contraseña actual'
                  iHolder='Ingresa tu contraseña actual'
                  borderColor={passwordErrors.currentPassword ? 'border-red-500' : 'border-[#60efdb]'}
                  focusColor={passwordErrors.currentPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                  error={passwordErrors.currentPassword}
                />
                <Input
                  iType='password'
                  iValue={passwordData.newPassword}
                  iName='newPassword'
                  iChange={handlePasswordChange}
                  labelTitle='Nueva contraseña'
                  iHolder='Ingresa tu nueva contraseña'
                  borderColor={passwordErrors.newPassword ? 'border-red-500' : 'border-[#60efdb]'}
                  focusColor={passwordErrors.newPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                  error={passwordErrors.newPassword}
                />
                <Input
                  iType='password'
                  iValue={passwordData.confirmPassword}
                  iName='confirmPassword'
                  iChange={handlePasswordChange}
                  labelTitle='Confirmar nueva contraseña'
                  iHolder='Confirma tu nueva contraseña'
                  borderColor={passwordErrors.confirmPassword ? 'border-red-500' : 'border-[#60efdb]'}
                  focusColor={passwordErrors.confirmPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
                  error={passwordErrors.confirmPassword}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <hr className='border-gray-200 mr-8' />

        {/* Preferences Section */}
        <div className=''>
          <div className='flex justify-between items-center mr-8'>
            <h3 className='text-xl font-semibold text-[#405e7f]'>Preferencias</h3>
            <AnimatePresence mode='wait'>
              {activeSection === 'preferences' && editMode ? (
                <motion.div
                  key='save-cancel-preferences'
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
                  key='edit-preferences'
                  onClick={() => handleEdit('preferences')}
                  className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
                >
                  <FiEdit className='w-5 h-5' /> Editar Preferencias
                </button>
              )}
            </AnimatePresence>
          </div>
          <div className='mt-4 mb-6 flex items-center'>
            <label className='flex flex-col gap-4'>
              <span className='font-semibold text-[#405e7f]'>Notificaciones</span>
              <div className='flex items-center gap-3'>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="notificationsEnabled"
                    checked={tempUser.notificationsEnabled ?? users[0].notificationsEnabled}
                    onChange={handleChange}
                    disabled={!editMode || activeSection !== 'preferences'}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#60efdb]"></div>
                </label>
                <span className='text-gray-600'>
                  {(tempUser.notificationsEnabled ?? users[0].notificationsEnabled) ? 'Activadas' : 'Desactivadas'}
                </span>
              </div>
            </label>
          </div>
          <hr className='border-gray-200 mr-8' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='mt-4'>
              <Select
                label='Tema del aplicativo'
                value={tempUser.theme || users[0].theme}
                onChange={(value) => handleSelectChange('theme', value)}
                options={themeOptions}
                disabled={!editMode || activeSection !== 'preferences'}
                borderColor={editMode && activeSection === 'preferences' ? 'border-[#60efdb]' : 'border-gray-300'}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}