import React, { useState } from 'react'
import { Input } from './Input'

export const SubForm = ({ label, namePrefix, maxFields = 4 }) => {
  const [fields, setFields] = useState(['', ''])

  const handleAddField = () => {
    if (fields.length < maxFields) {
      setFields([...fields, ''])
    }
  }

  const handleChange = (index, value) => {
    const updatedFields = [...fields]
    updatedFields[index] = value
    setFields(updatedFields)
  }

  return (
    <div className='mt-6'>
      <h3 className='text-[#405e7f] font-semibold'>{label}</h3>
      {fields.map((value, index) => (
        <div key={index} className=''>
          <Input
            isFor={`${namePrefix}-${index}`}
            iName={`${namePrefix}-${index}`}
            iType='text'
            iValue={value}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          {index === fields.length - 1 && fields.length < maxFields && (
            <button
              type='button'
              onClick={handleAddField}
              className='text-[#405e7f]/80 text-sm font-semibold mt-2 hover:text-[#405e7f]/60 hover:underline cursor-pointer'
            >
             + Agregar campo
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
