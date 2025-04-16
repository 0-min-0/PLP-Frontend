import React from 'react'
import { NavLink } from 'react-router-dom'

export const RegisterContainer = ({ form, width }) => {
  return (
    <div className={`${width} flex flex-col justify-center items-center p-10 text-[#405e7f] bg-[#dcfff6] rounded-xl`}>
        <h2 className='text-center text-4xl font-bold pb-6'>Registrarse</h2>
        { form }
        <div className='w-full pb-4 pt-6 text-center'>
        <hr className='border-t border-[#405e7f]/40 mb-4' />
        <p className='text-[#405e7f] pt-4'>
          ¿Ya estás registrado en nuestra plataforma?{' '}
          <NavLink to='/acceder' className='text-[#405e7f] font-semibold hover:underline hover:text-[#405e7f]/60'>
            Iniciar sesión
          </NavLink>
        </p>
      </div>
    </div>
  )
}
