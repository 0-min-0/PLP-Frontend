import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { Button } from '../../UI/button'
import { CardUserType } from '../../UI/CardUserType'
import { FormsContainer } from '../../UI/FormsContainer'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { BiBuildings } from 'react-icons/bi'

export const RegisterRolType = () => {
  const [userType, setUserType] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userType) {
      setError('ⓘ Selecciona un rol para continuar')
      return
    }

    setError('')

    if (userType === 'jobSeeker') {
      navigate('/crear-cuenta/contratista')
    } else if (userType === 'employer') {
      navigate('/crear-cuenta/contratante')
    } else if (userType === 'company') {
      navigate('/crear-cuenta/empresa')
    } else {
      setError('ⓘ Ocurrió un error inesperado')
    }
  }

  return (
    <div className='w-[35%]'>
      <FormsContainer
        width='w-full'
        bgColor='#dcfff6'
        textColor='#405e7f'
        title='Registrarse'
        changeForm={
        <p className='text-[#405e7f] pt-4'>
          ¿Ya estás registrado en nuestra plataforma?{' '}
          <NavLink to='/acceder' className='text-[#405e7f] font-semibold hover:underline hover:text-[#405e7f]/60'>
            Iniciar sesión
          </NavLink>
        </p>}
        form={
          <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-6 my-6'>
            <div className='w-full'>
            <p className='mb-4 font-semibold'>Selecciona el rol con el que utilizarás tu cuenta y luego presiona continuar.</p>
              <CardUserType
                value='jobSeeker'
                currentSelection={userType}
                title='Soy una persona en busca de nuevas oportunidades laborales'
                userType='Contratista'
                rolIcon={<HiOutlineBriefcase className='w-10 h-10' />}
                iconDesc='Contratista Logo'
                onChange={setUserType}
                error={error}
                setError={setError}
                desc='Haga click en la tarjeta para seleccionar su rol como Contratista'
              />

              <CardUserType
                value='employer'
                currentSelection={userType}
                title='Soy una persona que solicita servicios temporales'
                userType='Contratante'
                rolIcon={<HiOutlineUserGroup className='w-12 h-12' />}
                iconDesc='Contratante Logo'
                onChange={setUserType}
                error={error}
                setError={setError}
                desc='Haga click en la tarjeta para seleccionar su rol como Contratante'
              />

              <CardUserType
                value='company'
                currentSelection={userType}
                title='Somos una empresa en busca de talento y experiencia'
                userType='Empresa/Emprendimiento'
                rolIcon={<BiBuildings className='w-12 h-12' />}
                iconDesc='Empresa/Emprendimiento Logo'
                onChange={setUserType}
                error={error}
                setError={setError}
                desc='Haga click en la tarjeta para seleccionar su rol como Empresa/Emprendimiento'
              />
               {error && <p className='text-red-400 w-full text-left'>{error}</p>}
            </div>

            <div className='w-[30%]'>
              <Button
                btnType='submit'
                btnStyle='bg-[#405e7f] text-white w-full'
                btnId='btnRegister'
                btnName='Continuar'
              />
            </div>
          </form>
        } />
    </div>
  )
}