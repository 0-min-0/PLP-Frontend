import React from 'react'
import { motion } from 'framer-motion'
import { Input } from '../Input'
import { Desc } from '../Desc'
import { Select } from '../Select'
import { useVacancy } from '../../Context/VacancyContext'
import { categories } from '../../Utils/options'

export const VacancyEdit = ({ editedVacancy, isEditing }) => {
  const { errors, handleEditChange, handleSelectChange } = useVacancy()

  // Animaciones para los campos del formulario
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3
      }
    }
  }

  return (
    <motion.div 
      className='max-h-[60vh] overflow-y-auto scrollbar-custom space-y-6 px-10'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Input
          labelTitle='Nombre de la vacante'
          iName='vacancyName'
          iType='text'
          isFor='vacancyName'
          iValue={editedVacancy?.vacancyName || ''}
          iChange={handleEditChange}
          iHolder='Nombre de la vacante'
          borderColor={isEditing ? (errors.vacancyName ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
          focusColor={errors.vacancyName ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          disabled={!isEditing}
          error={errors.vacancyName}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Input
          labelTitle='Empresa'
          iName='company'
          iType='text'
          isFor='company'
          iValue={editedVacancy?.company || ''}
          iChange={handleEditChange}
          iHolder='Empresa'
          borderColor={isEditing ? (errors.company ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
          focusColor={errors.company ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          disabled={!isEditing}
          error={errors.company}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Input
          labelTitle='Persona de contacto'
          iName='contactPerson'
          iType='text'
          isFor='contactPerson'
          iValue={editedVacancy?.contactPerson || ''}
          iChange={handleEditChange}
          iHolder='Persona de contacto'
          borderColor={isEditing ? (errors.contactPerson ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
          focusColor={errors.contactPerson ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]'}
          disabled={!isEditing}
          error={errors.contactPerson}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Input
          labelTitle='Contacto'
          iName='contact'
          iType='text'
          isFor='contact'
          iValue={editedVacancy?.contact || ''}
          iChange={handleEditChange}
          iHolder='Teléfono/Email'
          borderColor={isEditing ? (errors.contact ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
          focusColor={errors.contact ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          disabled={!isEditing}
          error={errors.contact}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Input
          labelTitle='Ubicación'
          iName='location'
          iType='text'
          isFor='location'
          iValue={editedVacancy?.location || ''}
          iChange={handleEditChange}
          iHolder='Ubicación'
          borderColor={isEditing ? (errors.location ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
          focusColor={errors.location ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          disabled={!isEditing}
          error={errors.location}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Desc
          nameDesc='Responsabilidades'
          holderDesc='Describe las responsabilidades del puesto'
          name='responsibilities'
          value={editedVacancy?.responsibilities || ''}
          onChange={(e) => handleEditChange({
            target: {
              name: 'responsibilities',
              value: e.target.value
            }
          })}
          height='h-32'
          borderColor={isEditing ? (errors.responsibilities ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
          focusColor={errors.responsibilities ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          disabled={!isEditing}
          error={errors.responsibilities}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Select
          label='Categoría'
          value={editedVacancy?.category || ''}
          onChange={(value) => handleSelectChange('category', value)}
          options={categories}
          color='text-[#405e7f]'
          error={errors.category}
          errColor='text-red-400'
          borderColor={isEditing ? (errors.category ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
          focusColor={errors.category ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          disabled={!isEditing}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Input
          labelTitle='Disponibilidad'
          iName='availability'
          iType='text'
          isFor='availability'
          iValue={editedVacancy?.availability || ''}
          iChange={handleEditChange}
          iHolder='Disponibilidad'
          borderColor={isEditing ? (errors.availability ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
          focusColor={errors.availability ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          disabled={!isEditing}
          error={errors.availability}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Input
          labelTitle='Salario estimado'
          iName='salary'
          iType='text'
          isFor='salary'
          iValue={editedVacancy?.salary || ''}
          iChange={handleEditChange}
          iHolder='Salario estimado'
          borderColor={isEditing ? (errors.salary ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
          focusColor={errors.salary ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
          disabled={!isEditing}
          error={errors.salary}
        />
      </motion.div>
    </motion.div>
  )
}