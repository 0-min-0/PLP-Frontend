import React from 'react'
import { SubForm } from '../../UI/SubForm'
import { Input } from '../../UI/Input'

export const FormStudies = () => {
  return (
    <div className='w-full'>
      <form action='' className='gap-4'>
        <SubForm
          label='Estudios y complementarios'
          namePrefix='skill'
          maxFields={4}
        />
        <Input
          labelTitle='Experiencia laboral'
          isFor='experience'
          iHolder='Tiempo/nivel de experiencia'
          iName='experience'
          iType='text'
          iValue=''
          padding='px-4 py-1'
        />
        <SubForm
          label='Empresa/lugar de experiencia'
          namePrefix='skill'
          maxFields={4}
        />
      </form>
    </div>
  )
}
