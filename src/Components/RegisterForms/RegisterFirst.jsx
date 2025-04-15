import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../UI/button'

export const RegisterFirst = () => {
  const [userType, setUserType] = useState('')

  const handleUserTypeChange = (type) => {
    setUserType(type)
  }

  return (
    <div className='w-[35%] flex flex-col justify-center items-center p-10 text-[#254160] bg-[#dcfff6] rounded-xl'>
      <h2 className='text-center text-4xl font-bold pb-6 font-[arialBold]'>Registrarse</h2>
      
      <div className='w-full mb-8'>
        {/* Opción 1 - Buscador de empleo */}
        <div 
          className={`mb-4 p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${userType === 'jobSeeker' ? 'border-[#60efdb] bg-[#60efdb]/10' : 'border-[#7c92ab] hover:border-[#60efdb]/50'}`}
          onClick={() => handleUserTypeChange('jobSeeker')}
        >
          <div className='flex items-center'>
            <input
              type="radio"
              id="jobSeeker"
              name="userType"
              checked={userType === 'jobSeeker'}
              onChange={() => {}}
              className='h-5 w-5 text-[#60efdb] focus:ring-[#60efdb]'
            />
            <label htmlFor="jobSeeker" className='ml-4 text-xl font-semibold'>
              Soy una persona en busca de nuevas oportunidades laborales
            </label>
          </div>
          <p className='mt-2 ml-9 text-[#405e7f]'>Contratado</p>
        </div>

        {/* Opción 2 - Empresa */}
        <div 
          className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${userType === 'employer' ? 'border-[#60efdb] bg-[#60efdb]/10' : 'border-[#7c92ab] hover:border-[#60efdb]/50'}`}
          onClick={() => handleUserTypeChange('employer')}
        >
          <div className='flex items-center'>
            <input
              type="radio"
              id="employer"
              name="userType"
              checked={userType === 'employer'}
              onChange={() => {}}
              className='h-5 w-5 text-[#60efdb] focus:ring-[#60efdb]'
            />
            <label htmlFor="employer" className='ml-4 text-xl font-semibold'>
              Somos una empresa en busca de talento y experiencia
            </label>
          </div>
          <p className='mt-2 ml-9 text-[#405e7f]'>Contratante</p>
        </div>
      </div>

      <div className='w-full pt-4 border-t border-[#7c92ab]/50'>
      <Button 
          btnType='button'
          btnName='Continuar'
          btnStyle={`w-full bg-[#405e7f] text-[#405e7f] font-bold px-4 py-3 rounded-full mb-6 ${!userType ? '' : 'hover:bg-[#60efdb]/90'}`}
          disabled={!userType}
      />

        <div className='text-center text-[#254160]'>
          <p>
            ¿Ya estás registrado en nuestra plataforma?{' '}
            <NavLink
              to='/iniciar-sesion'
              className='hover:text-[#405e7f] hover:underline'
            >
              Iniciar sesión
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}
