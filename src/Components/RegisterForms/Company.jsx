import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { FormsContainer } from '../../UI/FormsContainer'
import { Input } from '../../UI/Input'
import { Button } from '../../UI/button'
import { WelcomeText } from '../../UI/WelcomeText'
import empresa from '../../assets/images/empresa.png'
import { useRegister } from '../../Context/RegisterContext'
import { motion } from 'framer-motion'

export const Company = () => {
  const navigate = useNavigate()
  const errorStyle = 'error-seeker error-responsive text-sm mt-1'

  const {
    form,
    errors,
    handleChange,
    handleSubmit,
    validateCompanyForm
  } = useRegister()

  useEffect(() => {
    if (form.nit) {
      validateCompanyForm()
    }
  }, [form.nit, form.sector])

  const localHandleSubmit = (e) => {
    handleSubmit(e, 'company', () => {
      navigate('/crear-contraseña')
    })
  }

  return (
    <div className='h-full page p-6 register-container'>
      <Header
        middleObject={
          <h1 className='title-page text-5xl font-[afacadBold] text-primary-color'>
            Registrarse como empresa
          </h1>
        }
        buttons={
          <div className='flex gap-2 links-page'>
            <NavLink to='/politicas-de-privacidad' className='text-primary-color font-semibold hover:underline'>Políticas de privacidad</NavLink>
            <p>•</p>
            <NavLink to='/terminos-condiciones' className='text-primary-color font-semibold hover:underline'>Términos y condiciones</NavLink>
          </div>
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className='container-forms flex items-center mt-14 gap-20 justify-center'
      >
        <FormsContainer
          width='w-[35%]'
          bgColor='register-form-company'
          textColor='text-[color:var(--color-card-text)]'
          changeForm={
            <div>
              <p className='text-white login-form-register-text'>
                ¿Ya estás registrado en nuestra plataforma?{' '}
                <NavLink to='/acceder' className='text-white font-semibold hover:underline hover:text-gray-200'>
                  Iniciar sesión
                </NavLink>
              </p>
            </div>
          }
          form={
            <div className='w-full'>
              <form onSubmit={localHandleSubmit} className='w-full'>
                <h2 className='label-responsive text-white font-semibold mb-4'>
                  Completa la información y haz click en continuar.
                </h2>
                <div className='w-full mb-5'>
                  <div className='mb-2'>
                    <Input
                      labelTitle='NIT (Número de identificación tributaria)'
                      labelColor='white'
                      iName='nit'
                      isFor='nit'
                      iType='text'
                      iValue={form.nit}
                      iChange={handleChange}
                      iHolder='Ingresa el NIT de la empresa (ej: 1234567-8)'
                    />
                    {errors.nit && <p className={errorStyle}>{errors.nit}</p>}
                  </div>
                  <div className='mb-2'>
                    <Input
                      labelTitle='Sector de la empresa'
                      labelColor='white'
                      iName='sector'
                      isFor='sector'
                      iType='text'
                      iValue={form.sector}
                      iChange={handleChange}
                      iHolder='Ingresa el sector de la empresa (Ej. Tecnología)'
                    />
                    {errors.sector && <p className={errorStyle}>{errors.sector}</p>}
                  </div>
                  <div>
                    <Input
                      labelTitle='Sitio web de la empresa'
                      labelColor='white'
                      iName='website'
                      isFor='website'
                      iType='text'
                      iValue={form.website}
                      iChange={handleChange}
                      iHolder='Ingresa el enlace del sitio web de la empresa (opcional)'
                    />
                  </div>
                </div>
                <Button
                  btnType='submit'
                  btnStyle='button-employer w-[25%] bg-[#60efdb] text-[#405e7f] font-bold mb- mx-50 hover:bg-[#4fd4c1]'
                  btnName='Continuar'
                />
              </form>
            </div>
          }
        />

        <WelcomeText
          text={
            <p className='welcome-paragraph'>
              Nos alegra tener nuevos usuarios como tú en
              <br /> nuestro aplicativo, esperamos que tu
              <br /> experiencia sea agradable en PLP.
            </p>
          }
          ilustration={empresa}
          imgDesc='Ilustración de inicio de sesión'
          imgStyle='forms-ilustration w-[400px] h-[400px]'
        />
      </motion.div>
    </div>
  )
}
