import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { Button } from '../../UI/Button'
import { CardUserType } from '../../UI/CardUserType'
import jobSeekerIcon from '../../assets/images/hombre-empleado.png'
import employerIcon from '../../assets/images/corporativo.png'
import { FormsContainer } from '../../UI/FormsContainer'

export const RegisterRolType = () => {
  const [userType, setUserType] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userType) {
      setError('ⓘ Seleccione un rol para continuar')
      return
    }

    setError('')

    if (userType === 'jobSeeker') {
      navigate('/crear-cuenta/contratista')
    } else if (userType === 'employer') {
      navigate('/crear-cuenta/empresa')
    } else {
      setError('ⓘ Ocurrió un error inesperado')
    }
  }

  return (
    <div>
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
          <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-6'>
            <div className='w-full'>
              <CardUserType
                value='jobSeeker'
                currentSelection={userType}
                title='Soy una persona en busca de nuevas oportunidades laborales'
                userType='Contratista'
                rolIcon={jobSeekerIcon}
                iconDesc='Contratista Logo'
                onChange={setUserType}
                error={error}
                setError={setError}
                desc='Haga click en la tarjeta para seleccionar su rol como Contratista'
              />

              <CardUserType
                value='employer'
                currentSelection={userType}
                title='Somos una empresa en busca de talento y experiencia'
                userType='Contratante'
                rolIcon={employerIcon}
                iconDesc='Empresa/Emprendimiento Logo'
                onChange={setUserType}
                error={error}
                setError={setError}
                desc='Haga click en la tarjeta para seleccionar su rol como Contratante'
              />
            </div>

            {error && <p className='text-red-400 font-semibold w-full text-center'>{error}</p>}

            <div className='w-[30%]'>
              <Button
                btnType='submit'
                btnStyle='bg-[#405e7f] text-white w-full'
                btnName='Continuar'
              />
            </div>
          </form>
        } />
    </div>
  )
}