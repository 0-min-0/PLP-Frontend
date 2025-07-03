import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { WelcomeText } from '../../UI/WelcomeText'
import registerIlustration from '../../assets/images/register-ilustration.png'
import { RegisterUser } from '../../Components/RegisterForms/RegisterUser'
import { motion } from 'framer-motion'

export const Register = () => {
  return (
    <div className='w-full h-full page p-6 register-container'>
      <Header
        middleObject={
          <h1 className='title-page text-5xl font-[afacadBold] text-primary-color'>
            Registrarse
          </h1>
        }
        buttons={
          <div className='links-page flex gap-2'>
            <NavLink to='/politicas-de-privacidad' className='text-primary-color font-semibold hover:underline'>
              Políticas de privacidad
            </NavLink>
            <p className='text-primary-color'>•</p>
            <NavLink to='/terminos-y-condiciones' className='text-primary-color font-semibold hover:underline'>
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
        className='container-forms flex justify-center items-start gap-20 mt-6'
      >
        <RegisterUser />
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
          imgStyle='forms-ilustration w-[450px] h-[450px]'
        />
      </motion.div>
    </div>
  )
}
