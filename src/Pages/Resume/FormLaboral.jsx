import React from 'react'
import { Input } from '../../UI/Input'

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
       <div>
        <h3 className='text-[#405e7f] font-semibold'>Habilidades</h3>
       <Input
          isFor='ocupation'
          labelTitle='Ocupación'
          iName='ocupation'
          iType='text'
          iValue=''
        />
       </div>
      </form>
    </div>
  )
}
