<<<<<<< HEAD
import React from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { Select } from '../../UI/Select'
import { useSettings } from '../../Context/SettingsContext'

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
}

const themeOptions = [
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Oscuro' },
  { value: 'default', label: 'Por defecto' }
]

export const Preferences = () => {
  const {
    formData,
    isEditing,
=======
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
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
    activeSection,
    handleEdit,
    handleSave,
    handleCancel,
    handleChange,
    handleSelectChange
<<<<<<< HEAD
  } = useSettings()
=======
  } = useSettings();
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3

  return (
    <div className=''>
      <div className='flex justify-between items-center mr-8'>
<<<<<<< HEAD
        <h3 className='text-xl font-semibold text-[#405e7f]'>Preferencias</h3>
        <AnimatePresence mode='wait'>
          {activeSection === 'preferences' && isEditing ? (
=======
        <h3 className='text-xl font-semibold text-[#405e7f]'>Preferences</h3>
        <AnimatePresence mode='wait'>
          {activeSection === 'preferences' && editMode ? (
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
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
<<<<<<< HEAD
                <FiSave className='w-5 h-5' /> Guardar
=======
                <FiSave className='w-5 h-5' /> Save
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
              </button>
              <button
                onClick={handleCancel}
                className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
              >
<<<<<<< HEAD
                <FiX className='w-5 h-5' /> Cancelar
=======
                <FiX className='w-5 h-5' /> Cancel
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
              </button>
            </motion.div>
          ) : (
            <button
              key='edit-preferences'
              onClick={() => handleEdit('preferences')}
              className='flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer'
            >
<<<<<<< HEAD
              <FiEdit className='w-5 h-5' /> Editar preferencias
=======
              <FiEdit className='w-5 h-5' /> Edit Preferences
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
            </button>
          )}
        </AnimatePresence>
      </div>
      <div className='mt-4 mb-6 flex items-center'>
        <label className='flex flex-col gap-4'>
<<<<<<< HEAD
          <span className='font-semibold text-[#405e7f]'>Notificaciones</span>
=======
          <span className='font-semibold text-[#405e7f]'>Notifications</span>
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
          <div className='flex items-center gap-3'>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="notificationsEnabled"
<<<<<<< HEAD
                checked={formData.notificationsEnabled ?? false}
                onChange={handleChange}
                disabled={!isEditing || activeSection !== 'preferences'}
=======
                checked={tempUser.notificationsEnabled ?? false}
                onChange={handleChange}
                disabled={!editMode || activeSection !== 'preferences'}
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#60efdb]"></div>
            </label>
            <span className='text-gray-600'>
<<<<<<< HEAD
              {(formData.notificationsEnabled ?? false) ? 'Activadas' : 'Desactivadas'}
=======
              {(tempUser.notificationsEnabled ?? false) ? 'Enabled' : 'Disabled'}
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
            </span>
          </div>
        </label>
      </div>
      <hr className='border-gray-200 mr-8' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='mt-4'>
          <Select
<<<<<<< HEAD
            label='Tema'
            value={formData.theme || 'Por defecto'}
            onChange={(value) => handleSelectChange('theme', value)}
            options={themeOptions}
            disabled={!isEditing || activeSection !== 'preferences'}
            borderColor={isEditing && activeSection === 'preferences' ? 'border-[#60efdb]' : 'border-gray-300'}
=======
            label='App Theme'
            value={tempUser.theme || 'system'}
            onChange={(value) => handleSelectChange('theme', value)}
            options={themeOptions}
            disabled={!editMode || activeSection !== 'preferences'}
            borderColor={editMode && activeSection === 'preferences' ? 'border-[#60efdb]' : 'border-gray-300'}
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
          />
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
