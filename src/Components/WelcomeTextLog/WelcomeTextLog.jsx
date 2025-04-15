import React from 'react'
import loginIlustration from '../../assets/images/login-ilustration.png'

export const WelcomeTextLog = () => {
  return (
    <div className=''>
      <h2 className='text-4xl font-[arialBold] text-[#405e7f]'>Nos alegra tenerte denuevo en PLP,
        <br /> no te pierdas las nuevas ofertas
        <br /> laborales</h2>
      <img
        src={ loginIlustration }
        alt='Ilustracion inicio de sesion'
        className='w-[400px] h-[400px]'
       />
    </div>
  )
}