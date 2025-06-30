import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { FormsContainer } from '../../UI/FormsContainer'
import { Input } from '../../UI/Input'
import { Select } from '../../UI/Select'
import { optionId } from '../../Utils/options'
import { Button } from '../../UI/button'
import { useRegister } from '../../Context/RegisterContext'
import { WelcomeText } from '../../UI/WelcomeText'
import registerIlustration from '../../assets/images/register-ilustration.png'
import { motion } from 'framer-motion'

export const Employer = () => {
  const {
    form,
    errors,
    handleChange,
    handleSelectChange,
    handleSubmit
  } = useRegister()

  const errorStyle = 'error text-sm mt-1 font-semibold'

  const localHandleSubmit = (e) => {
    handleSubmit(e, 'employer')
  }

  return (
    <div className='h-full p-6 register-container'>
      <Header
        middleObject={
          <h1 className='text-5xl font-[afacadBold] text-primary-color'>
            Registrarse como contratante
          </h1>
        }
        buttons={
          <div className='flex gap-2'>
            <NavLink to='/politicas-de-privacidad' className='text-primary-color font-semibold hover:text-[#405e7f] hover:underline'>
              Políticas de privacidad
            </NavLink>
            <p>•</p>
            <NavLink to='/terminos-y-condiciones' className='text-primary-color font-semibold hover:text-[#405e7f] hover:underline'>
              Términos y condiciones
            </NavLink>
          </div>
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className='flex items-center mt-14 gap-20 justify-center'
      >
        <FormsContainer
          width='w-[35%]'
          bgColor='register-form'
          textColor='text-[color:var(--color-card-text)]'
          changeForm={
            <p className='text-[color:var(--color-card-text)] pt-4'>
              ¿Ya estás registrado en nuestra plataforma?{' '}
              <NavLink to='/acceder' className='text-[color:var(--color-card-text)] font-semibold hover:underline hover:text-[#405e7f]/60'>
                Iniciar sesión
              </NavLink>
            </p>
          }
          form={
            <div className='w-full my-6'>
              <form onSubmit={localHandleSubmit} className='w-full'>
                <h2 className='text-[color:var(--color-card-text)] font-semibold mb-4'>
                  Completa la información y haz click en continuar.
                </h2>
                <div className='w-full mb-5'>
                  <div className='mb-4'>
                    <Select
                      label='Tipo de documento'
                      name='documentType'
                      value={form.documentType}
                      onChange={(value) => handleSelectChange('documentType', value)}
                      options={optionId}
                      color='select-label-dark'
                    />
                    {errors.documentType && <p className={errorStyle}>{errors.documentType}</p>}
                  </div>
                  <div className=''>
                    <Input
                      labelTitle='Número de documento'
                      labelColor='input-label'
                      iName='documentNumber'
                      isFor='documentNumber'
                      iType='text'
                      iValue={form.documentNumber}
                      iChange={handleChange}
                      iHolder='Ingresa tu número de documento'
                    />
                    {errors.documentNumber && <p className={errorStyle}>{errors.documentNumber}</p>}
                  </div>
                </div>
                <Button
                  btnType='submit'
                  btnStyle='card-button w-[25%] bg-[#405e7f] text-white font-bold mb-6 mx-50'
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
          ilustration={registerIlustration}
          imgDesc='Ilustración de inicio de sesión'
          imgStyle='w-[400px] h-[400px]'
        />
      </motion.div>
    </div>
  )
}
