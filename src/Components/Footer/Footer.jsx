import React from 'react'
import { NavLink } from 'react-router-dom'
import whatsappIcon from '../../assets/images/whatsapp.png'
import githubIcon from '../../assets/images/github.png'
import discordIcon from '../../assets/images/discord.png'

export const Footer = () => {
  return (
    <div className='flex justify-around items-center font-[arialBold] text-[#254160] mt-6'>
      <div className='flex gap-2'>
        <p className='text-[#254160]'>© 2025 Plataforma Laboral Proactiva </p>
        <p>•</p>
        <div className='flex gap-2'>
          <NavLink to='/politicas-de-privacidad' className='text-[#254160] hover:text-[#405e7f] hover:underline'>Políticas de privacidad</NavLink>
          <p>•</p>
          <NavLink to='/terminos-y-condiciones' className='text-[#254160] hover:text-[#405e7f] hover:underline'>Terminos y condiciones</NavLink>
        </div>
      </div>
      <div className=''>
        <div className='flex gap-2 mb-4'>
          <p className='mr-2'>Contactanos</p>
          <a
            href='https://wa.me/123456789'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative'
          >
            <img
              src={whatsappIcon}
              alt='whatsapp'
              className='w-6 h-6 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110'
            />
          </a>
          <a
            href='https://github.com/0-min-0/PLP-Frontend'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative'
          >
            <img
              src={githubIcon}
              alt='github'
              className='w-6 h-6 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110'
            />
          </a>
          <a
            href='https://discord.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative'
          >
            <img
              src={discordIcon}
              alt='discord'
              className='w-6 h-6 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110'
            />
          </a>
        </div>
        <div>
        <a
            href='https://workspace.google.com/intl/es-419/gmail/'
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            <p className='hover:underline hover:text-[#405e7f]'>plataformalaboralproactiva@example.com</p>
          </a>
        </div>
      </div>
    </div>
  )
}
