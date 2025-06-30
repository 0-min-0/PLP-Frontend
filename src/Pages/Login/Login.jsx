import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { LoginForm } from '../../Components/LoginForm/LoginForm'
import { WelcomeText } from '../../UI/WelcomeText'
import loginIlustration from '../../assets/images/login-ilustration.png'
import { LoginProvider } from '../../Context/LoginContext'
import { motion } from 'framer-motion'

export const Login = () => {
  return (
    <div className='login-container w-full h-full p-6'>
      <Header
        middleObject={
          <h1 className='login-title text-5xl font-[afacadBold]'>
            Iniciar sesión
          </h1>
        }
        buttons={
          <div className='login-title flex gap-2 mb-8'>
            <NavLink
              to='/politicas-de-privacidad'
              className='font-semibold hover:underline'
            >
              Políticas de privacidad
            </NavLink>
            <p className=''>•</p>
            <NavLink
              to='/terminos-condiciones'
              className='font-semibold hover:underline'
            >
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
        className='w-full flex justify-center items-start mt-12 gap-20'
      >
        <LoginProvider>
          <LoginForm />
        </LoginProvider>
        <WelcomeText
          text={
            <p className='welcome-paragraph'>
              Nos alegra tenerte denuevo en PLP, <br />
              no te pierdas las nuevas ofertas <br />
              laborales
            </p>
          }
          ilustration={loginIlustration}
          imgDesc='Ilustración de inicio de sesión'
          imgStyle='w-[400px] h-[400px]'
        />
      </motion.div>
    </div>
  )
}