import { useState, useEffect } from 'react'
import { Input } from '../../UI/Input'
import { SubForm } from '../../UI/SubForm'

export const FormLaboral = () => {
  
  return (
    <div className='w-full'>
      <h2 className='text-lg text-[#405e7f] font-semibold mb-4'>Información Laboral</h2>
      <form action=''>
        <Input
          isFor='ocupation'
          labelTitle='Ocupación'
          iName='ocupation'
          iType='text'
          iValue=''
        />
        <SubForm
          label='Habilidades técnicas'
          namePrefix='skill'
          maxFields={4}
        />
        <SubForm
          label='Habilidades sociales'
          namePrefix='skill'
          maxFields={4}
        />
      </form>
    </div>
  )
}
