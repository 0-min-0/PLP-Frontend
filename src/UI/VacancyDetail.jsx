import React, { useEffect } from 'react'
import { Button } from '../UI/button'
import { FiX } from 'react-icons/fi'
import { ConfirmAlert } from './ConfirmAlert'
import { useVacancy } from '../Context/VacancyContext'
import { VacancyEdit } from './VacancyEdit'

export const VacancyDetail = ({ vacancy, onClose }) => {
  const {
    isEditing,
    showConfirm,
    editedVacancy,
    setEditedVacancy,
    setIsEditing,
    setShowConfirm,
    updateVacancy,
    deleteVacancy
  } = useVacancy()

  useEffect(() => {
    setEditedVacancy({
      ...vacancy,
      vacancyName: vacancy.vacancyName || vacancy.title
    })
  }, [vacancy, setEditedVacancy])

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
      <div className='bg-white rounded-xl px-4 py-10 w-full max-w-2xl'>
        <div className='flex justify-between items-center mb-6 ml-10'>
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

        <VacancyEdit 
          editedVacancy={editedVacancy} 
          isEditing={isEditing} 
          handleSave={handleSave}
        />

        <div className="mt-8 mr-12 flex justify-end space-x-4">
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