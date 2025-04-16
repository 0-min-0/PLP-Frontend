import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { Button } from '../../UI/button'
import { CardUserType } from '../../UI/CardUserType'
import jobSeekerIcon from '../../assets/images/hombre-empleado.png'
import employerIcon from '../../assets/images/corporativo.png'
import { RegisterContainer } from '../../UI/RegisterContainer'

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
      <RegisterContainer
        width='w-full'
        form={
          <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-6'>
            <div className='w-full'>
              <CardUserType
                value='jobSeeker'
                currentSelection={userType}
                title='Soy una persona en busca de nuevas oportunidades laborales'
                userType='Contratista'
                rolIcon={jobSeekerIcon}
                iconDesc='Contratista'
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
                iconDesc='Empresa'
                onChange={setUserType}
                error={error}
                setError={setError}
                desc='Haga click en la tarjeta para seleccionar su rol como Contratante'
              />
            </div>

            {error && <p className='text-red-400 text-lg w-full text-center'>{error}</p>}

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