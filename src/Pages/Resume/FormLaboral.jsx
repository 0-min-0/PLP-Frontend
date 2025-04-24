import React, { useState } from 'react'
import { Input } from '../../UI/Input'

export const FormLaboral = () => {
  const [skills, setSkills] = useState(['', ''])

  const handleAddField = () => {
    if (skills.length < 4) {
      setSkills([...skills, ''])
    }
  }

  const handleChange = (index, value) => {
    const updatedSkills = [...skills]
    updatedSkills[index] = value
    setSkills(updatedSkills)
  }

  return (
    <div>
      <h2 className='text-lg text-[#405e7f] font-semibold'>Información Laboral</h2>
      <form action=''>
        <Input
          isFor='ocupation'
          labelTitle='Ocupación'
          iName='ocupation'
          iType='text'
          iValue=''
        />

        <div className='mt-4'>
          <h3 className='text-[#405e7f] font-semibold'>Habilidades técnicas</h3>
          {skills.map((skill, index) => (
            <div key={index} className='mb-2'>
              <Input
                isFor={`skill-${index}`}
                iName={`skill-${index}`}
                iType='text'
                iValue={skill}
                onChange={(e) => handleChange(index, e.target.value)}
              />
              {index === skills.length - 1 && skills.length < 4 && (
                <button
                  type='button'
                  onClick={handleAddField}
                  className='text-[#405e7f] mt-2 font-semibold hover:text-[#405e7f]/70 hover:underline cursor-pointer'
                >
                 + Agregar campo
                </button>
              )}
            </div>
          ))}
        </div>
        <div className='mt-4'>
          <h3 className='text-[#405e7f] font-semibold'>Habilidades técnicas</h3>
          {skills.map((skill, index) => (
            <div key={index} className='mb-2'>
              <Input
                isFor={`skill-${index}`}
                iName={`skill-${index}`}
                iType='text'
                iValue={skill}
                onChange={(e) => handleChange(index, e.target.value)}
              />
              {index === skills.length - 1 && skills.length < 4 && (
                <button
                  type='button'
                  onClick={handleAddField}
                  className='text-[#405e7f] mt-2 font-semibold hover:text-[#405e7f]/70 hover:underline cursor-pointer'
                >
                 + Agregar campo
                </button>
              )}
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}
