import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { WelcomeText } from '../../UI/WelcomeText'
import registerIlustration from '../../assets/images/register-ilustration.png'
import { RegisterUser } from '../../Components/RegisterForms/RegisterUser'
import { motion } from 'framer-motion'

export const Register = () => {
  return (
    <div className='w-full p-6'>
      <Header
        middleObject={
          <h1 className='text-5xl font-[afacadBold] text-[#405e7f]'>
            Registrarse
          </h1>
        }
        buttons={
          <div className='flex gap-2 mb-8'>
            <NavLink to='/politicas-de-privacidad' className='text-[#254160] font-semibold hover:text-[#405e7f] hover:underline'>
              Políticas de privacidad
            </NavLink>
            <p>•</p>
            <NavLink to='/terminos-y-condiciones' className='text-[#254160] font-semibold hover:text-[#405e7f] hover:underline'>
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
        className='flex justify-center items-start gap-20 mt-6'
      >
        <RegisterUser />
        <WelcomeText
          text={
            <p>
              Nos alegra tener nuevos usuarios como tú en
              <br /> nuestro aplicativo, esperamos que tu
              <br /> experiencia sea agradable en PLP.
            </p>
          }
          ilustration={registerIlustration}
          imgDesc='Ilustración de inicio de sesión'
          imgStyle='w-[450px] h-[450px]'
        />
      </motion.div>
    </div>
  )
}
