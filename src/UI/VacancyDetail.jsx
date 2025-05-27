import React, { useEffect } from 'react'
import { Input } from '../UI/Input'
import { Desc } from '../UI/Desc'
import { Button } from '../UI/button'
import { FiX } from 'react-icons/fi'
import { ConfirmAlert } from './ConfirmAlert'
import { useVacancy } from '../Context/VacancyContext'

export const VacancyDetail = ({ vacancy, onClose }) => {
  const {
    isEditing,
    showConfirm,
    editedVacancy,
    setEditedVacancy,
    setIsEditing,
    setShowConfirm,
    updateVacancy,
    deleteVacancy,
    errors,
    handleEditChange
  } = useVacancy()

  useEffect(() => {
    setEditedVacancy({
      ...vacancy,
      vacancyName: vacancy.vacancyName || vacancy.title
    })
  }, [vacancy])

  const handleSave = () => {
    const success = updateVacancy({
      ...editedVacancy,
      title: editedVacancy.vacancyName || editedVacancy.title
    })

    if (success) {
      setIsEditing(false)
      onClose?.()
    }
  }

  const handleDeleteConfirm = () => {
    deleteVacancy(vacancy.id)
    onClose()
  }

  return (
    <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl px-12 py-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto scrollbar-custom'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-[#405e7f]'>
            {isEditing ? "Editando vacante" : "Detalles de la vacante"}
          </h2>
          <button
            onClick={onClose}
            className='text-[#405e7f] hover:bg-gray-100 transition-colors duration-300 cursor-pointer p-2 rounded-md'
          >
            <FiX size={24} />
          </button>
        </div>

        <div className='space-y-6'>
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

          <Input
            labelTitle='Tipo'
            iName='type'
            iType='text'
            isFor='type'
            iValue={editedVacancy?.type || ''}
            iChange={handleEditChange}
            iHolder='Tipo de contrato'
            borderColor={isEditing ? (errors.type ? 'border-red-500' : 'border-[#60efdb]') : 'border-gray-300'}
            focusColor={errors.type ? 'focus:ring-red-500' : 'focus:ring-[#405e7f]/50'}
            disabled={!isEditing}
            error={errors.type}
          />

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
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <Button
            btnName={isEditing ? 'Guardar cambios' : 'Editar vacante'}
            btnType="button"
            btnStyle={`px-6 py-2 rounded-full ${isEditing
                ? 'bg-[#60efdb] text-[#405e7f]'
                : 'bg-[#405e7f] text-white'
              } font-semibold`}
            clicked={isEditing ? handleSave : () => setIsEditing(true)}
          />
          <Button
            btnName='Eliminar vacante'
            btnType='button'
            btnStyle='px-6 py-2 bg-red-500 text-white rounded-full font-semibold'
            clicked={() => setShowConfirm(true)}
          />
        </div>

        {showConfirm && (
          <ConfirmAlert
            message='¿Estás seguro de eliminar esta vacante?'
            onConfirm={handleDeleteConfirm}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </div>
    </div>
  )
}