import React from 'react';
import { FiEdit, FiSave, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../../UI/Input';
import { useSettings } from '../../Context/SettingsContext';

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
};

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
};

export const Security = () => {
  const {
    editMode,
    activeSection,
    passwordData,
    passwordErrors,
    handleEdit,
    handleSave,
    handleCancel,
    handlePasswordChange
  } = useSettings();

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center mr-8'>
        <h3 className='text-xl font-semibold text-[#405e7f]'>Security</h3>
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
              </button>
            </motion.div>
          ) : (
            <button
              key='edit-security'
              onClick={() => handleEdit('security')}
              className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
            >
              <FiEdit className='w-5 h-5' /> Change Password
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
              labelTitle='Current Password'
              iHolder='Enter your current password'
              borderColor={passwordErrors.currentPassword ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={passwordErrors.currentPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={passwordErrors.currentPassword}
            />
            <Input
              iType='password'
              iValue={passwordData.newPassword}
              iName='newPassword'
              iChange={handlePasswordChange}
              labelTitle='New Password'
              iHolder='Enter your new password'
              borderColor={passwordErrors.newPassword ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={passwordErrors.newPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={passwordErrors.newPassword}
            />
            <Input
              iType='password'
              iValue={passwordData.confirmPassword}
              iName='confirmPassword'
              iChange={handlePasswordChange}
              labelTitle='Confirm New Password'
              iHolder='Confirm your new password'
              borderColor={passwordErrors.confirmPassword ? 'border-red-500' : 'border-[#60efdb]'}
              focusColor={passwordErrors.confirmPassword ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
              error={passwordErrors.confirmPassword}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};