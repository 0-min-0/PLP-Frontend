import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../UI/button';
import mainIlustration from '../../assets/images/home-ilustration.png';
import { InfoContainer } from '../InfoContainer/InfoContainer'; 
import { NavLink } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const WelcomeTextHome = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='space-welcome-text flex gap-34'>
        <motion.div
          className='flex flex-col text-center justify-center items-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.h1
            className='main-text text-6xl font-[afacadBold] font-extrabold welcome-title mb-8'
            variants={fadeInUp}
          >
            Solo necesitas de tus <br />
            habilidades y tu experiencia
          </motion.h1>
          <motion.p
            className='sub-text welcome-paragraph text-xl mb-4'
            variants={fadeInUp}
          >
            La plataforma que te brinda numerosas oportunidades de trabajo
            <br /> sin necesidad de un titulo profesional
          </motion.p>
          <motion.div
            className='flex gap-6 mt-4 z-1'
            variants={fadeInUp}
          >
            <Button
              btnType='button'
              btnName='Continuar con Google'
              btnStyle='button flex items-center'
              btnIcon='google'
            />
            <NavLink to='/acceder'>
              <Button
                btnType='button'
                btnName='Iniciar Sesion con Correo'
                btnStyle='button flex items-center'
                btnIcon='email'
              />
            </NavLink>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInRight}
        >
          <img className='ilustration-main w-130 h-115 m-0 p-0' src={mainIlustration} alt='Ilustracion Principal' />
        </motion.div>
      </div>
      <InfoContainer />
    </div>
  )
}