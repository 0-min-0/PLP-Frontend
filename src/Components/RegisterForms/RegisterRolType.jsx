import { useNavigate, NavLink } from 'react-router-dom'
import { Button } from '../../UI/button'
import { CardUserType } from '../../UI/CardUserType'
import { FormsContainer } from '../../UI/FormsContainer'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { BiBuildings } from 'react-icons/bi'
import { Header } from '../Header/Header'
import { WelcomeText } from '../../UI/WelcomeText'
import registerIlustration from '../../assets/images/register-ilustration.png'
import { useRegister } from '../../Context/RegisterContext'
import { motion } from 'framer-motion'

export const RegisterRolType = () => {
  const navigate = useNavigate()
  const {
    form,
    errors,
    handleUserTypeChange,
    handleSubmit
  } = useRegister()

  const localHandleSubmit = (e) => {
    handleSubmit(e, 'roleType', () => {
      if (form.userType === 'jobSeeker') {
        navigate('/crear-cuenta/contratista')
      } else if (form.userType === 'employer') {
        navigate('/crear-cuenta/contratante')
      } else if (form.userType === 'company') {
        navigate('/crear-cuenta/empresa')
      }
    })
  }

  return (
    <div className='h-full page p-6 register-container'>
      <Header
        middleObject={
          <h1 className='title-page text-5xl font-[afacadBold] text-primary-color'>
            Registrarse
          </h1>
        }
        buttons={
          <div className='links-page flex gap-2'>
            <NavLink to='/politicas-de-privacidad' className='text-primary-color font-semibold hover:text-[#405e7f] hover:underline'>Políticas de privacidad</NavLink>
            <p>•</p>
            <NavLink to='/terminos-condiciones' className='text-primary-color font-semibold hover:text-[#405e7f] hover:underline'>Términos y condiciones</NavLink>
          </div>
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className='container-forms flex justify-center items-start mt-8 gap-20'
      >
        <div className='w-[35%]'>
          <FormsContainer
            width='w-full'
            bgColor='register-form'
            textColor='text-[color:var(--color-card-text)]'
            changeForm={
              <p className='login-form-register-text text-[color:var(--color-card-text)]'>
                ¿Ya estás registrado en nuestra plataforma?{' '}
                <NavLink to='/acceder' className='font-semibold hover:underline hover:text-[#405e7f]/60'>
                  Iniciar sesión
                </NavLink>
              </p>
            }
            form={
              <form onSubmit={localHandleSubmit} className='container-user-type w-full flex flex-col items-center gap-6 my-6'>
                <div className='w-full'>
                  <p className='mb-4 font-semibold label-responsive text-lg'>
                    Selecciona el rol con el que utilizarás tu cuenta y luego presiona continuar.
                  </p>
                  <CardUserType
                    value='jobSeeker'
                    currentSelection={form.userType}
                    title='Soy una persona en busca de nuevas oportunidades laborales'
                    userType='Contratista'
                    rolIcon={<HiOutlineBriefcase className='logo-user-2 w-10 h-10' />}
                    iconDesc='Contratista Logo'
                    onChange={handleUserTypeChange}
                    error={errors.userType}
                    setError={() => { }}
                    desc='Haga click en la tarjeta para seleccionar su rol como Contratista'
                  />

                  <CardUserType
                    value='employer'
                    currentSelection={form.userType}
                    title='Soy una persona que solicita servicios temporales'
                    userType='Contratante'
                    rolIcon={<HiOutlineUserGroup className='logo-user w-12 h-12' />}
                    iconDesc='Contratante Logo'
                    onChange={handleUserTypeChange}
                    error={errors.userType}
                    setError={() => { }}
                    desc='Haga click en la tarjeta para seleccionar su rol como Contratante'
                  />

                  <CardUserType
                    value='company'
                    currentSelection={form.userType}
                    title='Somos una empresa en busca de talento y experiencia'
                    userType='Empresa/Emprendimiento'
                    rolIcon={<BiBuildings className='logo-user w-12 h-12' />}
                    iconDesc='Empresa/Emprendimiento Logo'
                    onChange={handleUserTypeChange}
                    error={errors.userType}
                    setError={() => { }}
                    desc='Haga click en la tarjeta para seleccionar su rol como Empresa/Emprendimiento'
                  />
                  {errors.userType && <p className='error-responsive error text-sm w-full text-left'>{errors.userType}</p>}
                </div>

                <div className='w-[30%]'>
                  <Button
                    btnType='submit'
                    btnStyle='card-button bg-[#405e7f] text-white w-full'
                    btnId='btnRegister'
                    btnName='Continuar'
                  />
                </div>
              </form>
            }
          />
        </div>

        <WelcomeText
          text={<p className='welcome-paragraph'>
            Nos alegra tener nuevos usuarios como tú en
            <br /> nuestro aplicativo, esperamos que tu
            <br /> experiencia sea agradable en PLP. </p>}
          ilustration={registerIlustration}
          imgDesc='Ilustración de inicio de sesión'
          imgStyle='forms-ilustration w-[450px] h-[450px]'
        />
      </motion.div>
    </div>
  )
}
