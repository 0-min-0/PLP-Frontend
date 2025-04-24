import React from 'react'
import { Input } from '../../UI/Input'
import { SubForm } from '../../UI/SubForm'

export const FormLaboral = () => {
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

        <SubForm
          label='Habilidades'
          namePrefix='skill'
          maxFields={4}
        />
      </form>
    </div>
  )
}
