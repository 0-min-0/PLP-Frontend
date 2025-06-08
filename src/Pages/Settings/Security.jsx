<<<<<<< HEAD
import React from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '../../UI/Input'
import { useSettings } from '../../Context/SettingsContext'
=======
import React from 'react';
import { FiEdit, FiSave, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../../UI/Input';
import { useSettings } from '../../Context/SettingsContext';
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
<<<<<<< HEAD
}
=======
};
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3

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
<<<<<<< HEAD
}

export const Security = () => {
  const {
    isEditing,
=======
};

export const Security = () => {
  const {
    editMode,
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
    activeSection,
    passwordData,
    passwordErrors,
    handleEdit,
<<<<<<< HEAD
    handleSaveWithValidation,
    handleCancelWithReset,
    handlePasswordChangeWithValidation,
    getCombinedPasswordError
=======
    handleSave,
    handleCancel,
    handlePasswordChange
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
  } = useSettings();

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center mr-8'>
<<<<<<< HEAD
        <h3 className='text-xl font-semibold text-[#405e7f]'>Seguridad</h3>
        <AnimatePresence mode='wait'>
          {activeSection === 'security' && isEditing ? (
=======
        <h3 className='text-xl font-semibold text-[#405e7f]'>Security</h3>
        <AnimatePresence mode='wait'>
          {activeSection === 'security' && editMode ? (
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
            <motion.div
              key='save-cancel-security'
              className='flex gap-2'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={buttonVariants}
            >
              <button
<<<<<<< HEAD
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
=======
                onClick={handleSave}
                className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
              >
                <FiSave className='w-5 h-5' /> Save
              </button>
              <button
                onClick={handleCancel}
                className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
              >
                <FiX className='w-5 h-5' /> Cancel
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
              </button>
            </motion.div>
          ) : (
            <button
              key='edit-security'
              onClick={() => handleEdit('security')}
              className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
            >
<<<<<<< HEAD
              <FiEdit className='w-5 h-5' /> Cambiar contraseña
=======
              <FiEdit className='w-5 h-5' /> Change Password
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
            </button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
<<<<<<< HEAD
        {isEditing && activeSection === 'security' && (
=======
        {editMode && activeSection === 'security' && (
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
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
<<<<<<< HEAD
              iChange={handlePasswordChangeWithValidation}
              labelTitle='Contraseña actual'
              iHolder='Ingrese su contraseña actual'
=======
              iChange={handlePasswordChange}
              labelTitle='Current Password'
              iHolder='Enter your current password'
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
              borderColor={passwordErrors.currentPassword ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={passwordErrors.currentPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={passwordErrors.currentPassword}
            />
            <Input
              iType='password'
              iValue={passwordData.newPassword}
              iName='newPassword'
<<<<<<< HEAD
              iChange={handlePasswordChangeWithValidation}
              labelTitle='Nueva contraseña'
              iHolder='Ingrese su nueva contraseña'
              borderColor={getCombinedPasswordError('newPassword') ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={getCombinedPasswordError('newPassword') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getCombinedPasswordError('newPassword')}
=======
              iChange={handlePasswordChange}
              labelTitle='New Password'
              iHolder='Enter your new password'
              borderColor={passwordErrors.newPassword ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={passwordErrors.newPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={passwordErrors.newPassword}
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
            />
            <Input
              iType='password'
              iValue={passwordData.confirmPassword}
              iName='confirmPassword'
<<<<<<< HEAD
              iChange={handlePasswordChangeWithValidation}
              labelTitle='Confirmar nueva contraseña'
              iHolder='Confirme su nueva contraseña'
              borderColor={getCombinedPasswordError('confirmPassword') ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={getCombinedPasswordError('confirmPassword') ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={getCombinedPasswordError('confirmPassword')}
=======
              iChange={handlePasswordChange}
              labelTitle='Confirm New Password'
              iHolder='Confirm your new password'
              borderColor={passwordErrors.confirmPassword ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={passwordErrors.confirmPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={passwordErrors.confirmPassword}
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
