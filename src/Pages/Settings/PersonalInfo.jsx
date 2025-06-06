import React from 'react'
import { FiEdit, FiSave, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { FieldRenderer } from './FieldRenderer'
import { useSettings } from '../../Context/SettingsContext'

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
}

export const PersonalInfo = () => {
  const {
    user,
    tempUser,
    editMode,
    activeSection,
    validationErrors,
    handleEdit,
    handleSave,
    handleCancel,
    handleChange,
    handleSelectChange
  } = useSettings()

  const isEmployer = user?.role === 'contratante'
  const fields = isEmployer ? employerFields : jobSeekerFields
  const title = "Información Personal"

  const onChangeHandler = (name, value) => {
    const field = fields.find(f => f.name === name)
    if (field?.type === 'select') {
      handleSelectChange(name, value)
    } else {
      handleChange({ target: { name, value } })
    }
  }

  return (
    <div className="space-y-4 pr-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-[#405e7f]">{title}</h3>
        <AnimatePresence mode="wait">
          {activeSection === 'personal' && editMode ? (
            <motion.div
              key="save-cancel"
              className="flex gap-2"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={buttonVariants}
            >
              <button
                onClick={handleSave}
                className="flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer"
              >
                <FiSave className="w-5 h-5" /> Guardar
              </button>
              <button
                onClick={handleCancel}
                className="flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer"
              >
                <FiX className="w-5 h-5" /> Cancelar
              </button>
            </motion.div>
          ) : (
            <button
              key="edit"
              onClick={() => handleEdit('personal')}
              className="flex text-lg items-center py-1 px-2 rounded-xl gap-1 text-[#405e7f] hover:bg-[#60efdb]/20 cursor-pointer"
            >
              <FiEdit className="w-5 h-5" /> Editar información
            </button>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-x-2">
        {fields.map(field => (
          <div key={field.name} className={field.fullWidth ? 'col-span-1 md:col-span-2' : ''}>
            <FieldRenderer
              field={field}
              value={tempUser[field.name] || ''}
              onChange={onChangeHandler}
              disabled={!editMode || activeSection !== 'personal'}
              error={validationErrors[field.name]}
              isEditing={editMode && activeSection === 'personal'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}