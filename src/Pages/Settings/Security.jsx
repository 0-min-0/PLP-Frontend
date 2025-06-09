import React from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '../../UI/Input'
import { useSettings } from '../../Context/SettingsContext'

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

export const Security = () => {
  const {
    isEditing,
    activeSection,
    passwordData,
    passwordErrors,
    handleEdit,
    handleSaveWithValidation,
    handleCancelWithReset,
    handlePasswordChangeWithValidation,
    getCombinedPasswordError
  } = useSettings();

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center mr-8'>
        <h3 className='text-xl font-semibold text-[#405e7f]'>Seguridad</h3>
        <AnimatePresence mode='wait'>
          {activeSection === 'security' && isEditing ? (
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
                onClick={handleCancelWithReset}
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
        {isEditing && activeSection === 'security' && (
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
              iChange={handlePasswordChangeWithValidation}
              labelTitle='Contraseña actual'
              iHolder='Ingrese su contraseña actual'
              borderColor={passwordErrors.currentPassword ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={passwordErrors.currentPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={passwordErrors.currentPassword}
            />
            <Input
              iType='password'
              iValue={passwordData.newPassword}
              iName='newPassword'
              iChange={handlePasswordChangeWithValidation}
              labelTitle='Nueva contraseña'
              iHolder='Ingrese su nueva contraseña'
              borderColor={getCombinedPasswordError('newPassword') ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={getCombinedPasswordError('newPassword') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getCombinedPasswordError('newPassword')}
            />
            <Input
              iType='password'
              iValue={passwordData.confirmPassword}
              iName='confirmPassword'
              iChange={handlePasswordChangeWithValidation}
              labelTitle='Confirmar nueva contraseña'
              iHolder='Confirme su nueva contraseña'
              borderColor={getCombinedPasswordError('confirmPassword') ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={getCombinedPasswordError('confirmPassword') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getCombinedPasswordError('confirmPassword')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}