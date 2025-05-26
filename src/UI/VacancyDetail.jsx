import { useState } from 'react'
import { Input } from '../UI/Input'
import { Desc } from '../UI/Desc'
import { Button } from '../UI/button'
import { FiX } from 'react-icons/fi'
import { ConfirmAlert } from './ConfirmAlert'

export const VacancyDetail = ({ vacancy, onClose, onSave, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [editedVacancy, setEditedVacancy] = useState({ 
    ...vacancy,
    vacancyName: vacancy.vacancyName || vacancy.title
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedVacancy(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    onSave({
      ...editedVacancy,
      title: editedVacancy.vacancyName || editedVacancy.title
    })
    setIsEditing(false)
  }

  const handleDeleteConfirm = () => {
    onDelete(vacancy.id)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#405e7f]">
            {isEditing ? "Editando vacante" : "Detalles de la vacante"}
          </h2>
          <button 
            onClick={onClose} 
            className="text-[#405e7f] hover:text-[#405e7f]/70 transition-colors duration-300"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <Input
            labelTitle="Nombre de la vacante"
            iName="vacancyName"
            iType="text"
            isFor="vacancyName"
            iValue={editedVacancy.vacancyName}
            iChange={handleChange}
            iHolder="Nombre de la vacante"
            borderColor={isEditing ? "border-[#60efdb]" : "border-gray-300"}
            focusColor="focus:ring-[#405e7f]"
            disabled={!isEditing}
          />

          <Input
            labelTitle="Persona de contacto"
            iName="contactPerson"
            iType="text"
            isFor="contactPerson"
            iValue={editedVacancy.contactPerson}
            iChange={handleChange}
            iHolder="Persona de contacto"
            borderColor={isEditing ? "border-[#60efdb]" : "border-gray-300"}
            focusColor="focus:ring-[#405e7f]"
            disabled={!isEditing}
          />

          <Input
            labelTitle="Contacto"
            iName="contact"
            iType="text"
            isFor="contact"
            iValue={editedVacancy.contact}
            iChange={handleChange}
            iHolder="Teléfono/Email"
            borderColor={isEditing ? "border-[#60efdb]" : "border-gray-300"}
            focusColor="focus:ring-[#405e7f]"
            disabled={!isEditing}
          />

          <Input
            labelTitle="Ubicación"
            iName="location"
            iType="text"
            isFor="location"
            iValue={editedVacancy.location}
            iChange={handleChange}
            iHolder="Ubicación"
            borderColor={isEditing ? "border-[#60efdb]" : "border-gray-300"}
            focusColor="focus:ring-[#405e7f]"
            disabled={!isEditing}
          />

          <Desc
            nameDesc="Responsabilidades"
            holderDesc="Describe las responsabilidades del puesto"
            name="responsibilities"
            value={editedVacancy.responsibilities}
            onChange={(e) => handleChange({
              target: {
                name: 'responsibilities',
                value: e.target.value
              }
            })}
            height="h-32"
            borderColor={isEditing ? "border-[#60efdb]" : "border-gray-300"}
            focusColor="focus:ring-[#405e7f]"
            disabled={!isEditing}
          />

          <Input
            labelTitle="Disponibilidad"
            iName="availability"
            iType="text"
            isFor="availability"
            iValue={editedVacancy.availability}
            iChange={handleChange}
            iHolder="Disponibilidad"
            borderColor={isEditing ? "border-[#60efdb]" : "border-gray-300"}
            focusColor="focus:ring-[#405e7f]"
            disabled={!isEditing}
          />

          <Input
            labelTitle="Salario estimado"
            iName="salary"
            iType="text"
            isFor="salary"
            iValue={editedVacancy.salary}
            iChange={handleChange}
            iHolder="Salario estimado"
            borderColor={isEditing ? "border-[#60efdb]" : "border-gray-300"}
            focusColor="focus:ring-[#405e7f]"
            disabled={!isEditing}
          />
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <Button
            btnName={isEditing ? "Guardar cambios" : "Editar vacante"}
            btnType="button"
            btnStyle={`px-6 py-2 rounded-full ${
              isEditing 
                ? 'bg-[#60efdb] hover:bg-[#60efdb]/90 text-[#405e7f]' 
                : 'bg-[#405e7f] hover:bg-[#405e7f]/90 text-white'
            } font-semibold transition-all duration-300`}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          />
          <Button
            btnName="Eliminar vacante"
            btnType="button"
            btnStyle="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-all duration-300"
            onClick={() => setShowConfirm(true)}
          />
        </div>

        {showConfirm && (
          <ConfirmAlert
            message="¿Estás seguro de eliminar esta vacante?"
            onConfirm={handleDeleteConfirm}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </div>
    </div>
  )
}