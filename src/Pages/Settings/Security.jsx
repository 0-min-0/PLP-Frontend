import React from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { PiEye, PiEyeClosed } from 'react-icons/pi'
import { Input } from '../../UI/Input'
import { useSettings } from '../../Context/SettingsContext'
import { usePassword } from '../../Context/PasswordContext'

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
    isEditing = false,
    activeSection = '',
    passwordData,
    passwordErrors,
    handleEdit,
    handleCancelPasswoord,
    handlePasswordChangeWithValidation,
    handleSavePassword,
    getCombinedPasswordError
  } = useSettings()

  const { visibility, toggleVisibility } = usePassword()

  return (
    <div className=''>
      <div className='flex justify-between items-center mr-8'>
        <h3 className='title-section sub-section text-xl font-semibold text-[color:var(--color-card-text)]'>Seguridad</h3>
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
                onClick={handleSavePassword}
                className='button-set flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[color:var(--color-card-text)] hover:bg-[#90d7db]/20 cursor-pointer'
              >
                <FiSave className='edit-icon w-5 h-5' /> Guardar
              </button>
              <button
                onClick={handleCancelPasswoord}
                className='button-set flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[color:var(--color-card-text)] hover:bg-[#90d7db]/20 cursor-pointer'
              >
                <FiX className='edit-icon w-5 h-5' /> Cancelar
              </button>
            </motion.div>
          ) : (
            <button
              key='edit-security'
              onClick={() => handleEdit('security')}
              className='button-set flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[color:var(--color-card-text)] hover:bg-[#90d7db]/20 cursor-pointer'
            >
              <FiEdit className='edit-icon w-5 h-5' /> Cambiar contraseña
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
            {/* Contraseña actual */}
            <div className='relative'>
              <Input
                iType={visibility.currentPassword ? 'text' : 'password'}
                iValue={passwordData.currentPassword}
                iName='currentPassword'
                iChange={handlePasswordChangeWithValidation}
                labelTitle='Contraseña actual'
                iHolder='Ingrese su contraseña actual'
                borderColor={passwordErrors.currentPassword ? 'border-red-500' : 'border-[#90d7db]'}
                focusColor={passwordErrors.currentPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              />
              <button
                type='button'
                onClick={() => toggleVisibility('currentPassword')}
                className='absolute right-4 bottom-2 text-sm form-icon hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer login-form-eye-icon'
              >
                {visibility.currentPassword ? <PiEye className=' login-form-eye-icon-size w-7 h-7' /> : <PiEyeClosed className='login-form-eye-icon-size w-7 h-7' />}
              </button>
            </div>
            {passwordErrors.currentPassword && (
              <p className='text-sm error-responsive error ml-1 font-semibold'>{passwordErrors.currentPassword}</p>
            )}

            {/* Nueva contraseña */}
            <div className='relative'>
              <Input
                iType={visibility.createPassword ? 'text' : 'password'}
                iValue={passwordData.newPassword}
                iName='newPassword'
                iChange={handlePasswordChangeWithValidation}
                labelTitle='Nueva contraseña'
                iHolder='Ingrese su nueva contraseña'
                borderColor={getCombinedPasswordError('newPassword') ? 'border-red-500' : 'border-[#90d7db]'}
                focusColor={getCombinedPasswordError('newPassword') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              />
              <button
                type='button'
                onClick={() => toggleVisibility('createPassword')}
                className='absolute right-4 bottom-2 text-sm form-icon hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer login-form-eye-icon'
              >
                {visibility.createPassword ? <PiEye className='login-form-eye-icon-size w-7 h-7' /> : <PiEyeClosed className='login-form-eye-icon-size w-7 h-7' />}
              </button>
            </div>
            {getCombinedPasswordError('newPassword') && (
              <p className='text-sm error-responsive error ml-1 font-semibold'>{getCombinedPasswordError('newPassword')}</p>
            )}

            {/* Confirmar contraseña */}
            <div className='relative'>
              <Input
                iType={visibility.confirmPassword ? 'text' : 'password'}
                iValue={passwordData.confirmPassword}
                iName='confirmPassword'
                iChange={handlePasswordChangeWithValidation}
                labelTitle='Confirmar nueva contraseña'
                iHolder='Confirme su nueva contraseña'
                borderColor={getCombinedPasswordError('confirmPassword') ? 'border-red-500' : 'border-[#90d7db]'}
                focusColor={getCombinedPasswordError('confirmPassword') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              />
              <button
                type='button'
                onClick={() => toggleVisibility('confirmPassword')}
                className='absolute right-4 bottom-2 text-sm form-icon hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer login-form-eye-icon'
              >
                {visibility.confirmPassword ? <PiEye className='login-form-eye-icon-size w-7 h-7' /> : <PiEyeClosed className='login-form-eye-icon-size w-7 h-7' />}
              </button>
            </div>
            {getCombinedPasswordError('confirmPassword') && (
              <p className='text-sm error-responsive error ml-1 font-semibold'>{getCombinedPasswordError('confirmPassword')}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
