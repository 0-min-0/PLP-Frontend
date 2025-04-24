import React from 'react'
import { SubForm } from '../../UI/SubForm'
import { Input } from '../../UI/Input'

export const FormStudies = () => {
  return (
    <div className='w-full'>
      <form action='' className='mt-11'>
        <SubForm
          label='Estudios y complementarios'
          namePrefix='skill'
          maxFields={4}
        />
        <div className='mt-5'>
          <Input
            labelTitle='Experiencia laboral'
            isFor='experience'
            iHolder='Tiempo/nivel de experiencia'
            iName='experience'
            iType='text'
            iValue=''
            padding='px-4 py-1'
          />
        </div>
        <SubForm
          label='Empresa/lugar de experiencia'
          namePrefix='skill'
          maxFields={4}
        />
      </form>
    </div>
  )
}
