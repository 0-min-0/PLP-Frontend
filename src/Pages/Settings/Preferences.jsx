import React from 'react';
import { FiEdit, FiSave, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Select } from '../../UI/Select';
import { useSettings } from '../../Context/SettingsContext';

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
};

const themeOptions = [
  { value: 'light', label: 'Light theme' },
  { value: 'dark', label: 'Dark theme' },
  { value: 'system', label: 'Use system settings' }
];

export const Preferences = () => {
  const {
    tempUser,
    editMode,
    activeSection,
    handleEdit,
    handleSave,
    handleCancel,
    handleChange,
    handleSelectChange
  } = useSettings();

  return (
    <div className=''>
      <div className='flex justify-between items-center mr-8'>
        <h3 className='text-xl font-semibold text-[#405e7f]'>Preferences</h3>
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
              key='edit-preferences'
              onClick={() => handleEdit('preferences')}
              className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
            >
              <FiEdit className='w-5 h-5' /> Edit Preferences
            </button>
          )}
        </AnimatePresence>
      </div>
      <div className='mt-4 mb-6 flex items-center'>
        <label className='flex flex-col gap-4'>
          <span className='font-semibold text-[#405e7f]'>Notifications</span>
          <div className='flex items-center gap-3'>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="notificationsEnabled"
                checked={tempUser.notificationsEnabled ?? false}
                onChange={handleChange}
                disabled={!editMode || activeSection !== 'preferences'}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#60efdb]"></div>
            </label>
            <span className='text-gray-600'>
              {(tempUser.notificationsEnabled ?? false) ? 'Enabled' : 'Disabled'}
            </span>
          </div>
        </label>
      </div>
      <hr className='border-gray-200 mr-8' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='mt-4'>
          <Select
            label='App Theme'
            value={tempUser.theme || 'system'}
            onChange={(value) => handleSelectChange('theme', value)}
            options={themeOptions}
            disabled={!editMode || activeSection !== 'preferences'}
            borderColor={editMode && activeSection === 'preferences' ? 'border-[#60efdb]' : 'border-gray-300'}
          />
        </div>
      </div>
    </div>
  );
};