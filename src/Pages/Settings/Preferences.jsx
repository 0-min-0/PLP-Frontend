import React from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { Select } from '../../UI/Select'
import { useSettings } from '../../Context/SettingsContext'
import { useTheme } from '../../Context/ThemeContext' // Importar el useTheme

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
}

const themeOptions = [
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Oscuro' },
  { value: 'system', label: 'Sistema' }
]

export const Preferences = () => {
  const {
    formData = {
      notificationsEnabled: false,
      theme: 'system'
    },
    isEditing,
    activeSection,
    handleEdit,
    handleSaveWithValidation,
    handleCancel,
    handleChange,
    handleSelectChange,
    errors,
    getActiveError
  } = useSettings();
  
  const { toggleTheme } = useTheme();

  const handleSave = () => {
    const isValid = true;
    
    if (isValid) {
      // Aplicar el tema seleccionado
      toggleTheme(formData.theme);
      handleSaveWithValidation();
    }
  };

  return (
    <div className='sub-section'>
      <div className='flex justify-between items-center mr-8'>
        <h3 className='title-section text-xl font-semibold text-[color:var(--color-card-text)]'>Preferencias</h3>
        <AnimatePresence mode='wait'>
          {activeSection === 'preferences' && isEditing ? (
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
              key='edit-preferences'
              onClick={() => handleEdit('preferences')}
              className='button-set flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[color:var(--color-card-text)] hover:bg-[#90d7db]/20 cursor-pointer'
            >
              <FiEdit className='edit-icon w-5 h-5' /> Editar Preferencias
            </button>
          )}
        </AnimatePresence>
      </div>
      
      <div className='mt-4 mb-6 flex items-center'>
        <label className='flex flex-col gap-4'>
          <span className='text font-semibold text-[color:var(--color-card-text)]'>Notificaciones</span>
          <div className='flex items-center gap-3'>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="notificationsEnabled"
                checked={formData.notificationsEnabled ?? false}
                onChange={handleChange}
                disabled={!isEditing || activeSection !== 'preferences'}
                className="switch sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#90d7db]"></div>
            </label>
            <span className='label-responsive text-[color:var(--color-card-text)]'>
              {formData.notificationsEnabled ? 'Activadas' : 'Desactivadas'}
            </span>
          </div>
        </label>
      </div>
      
      <hr className='border-gray-200 mr-8' />
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='mt-4'>
          <Select
            label='Tema de la App'
            color='text-[color:var(--color-card-text)]'
            value={formData.theme || 'system'}
            onChange={(value) => handleSelectChange('theme', value)}
            options={themeOptions}
            disabled={!isEditing || activeSection !== 'preferences'}
            borderColor={
              isEditing && activeSection === 'preferences' 
                ? getActiveError('theme') 
                  ? 'border-red-500' 
                  : 'select-editing' 
                : 'border-gray-300'
            }
            error={getActiveError('theme')}
          />
        </div>
      </div>
    </div>
  )
}