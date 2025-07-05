import React from 'react'
import { motion } from 'framer-motion'
import job from '../../assets/images/job.png'
import job2 from '../../assets/images/job-2.png'
import job3 from '../../assets/images/job-3.png'
import { Button } from '../../UI/button'
import { NavLink } from 'react-router-dom'

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const creativeImageAnimation = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -5,
        filter: "blur(4px)"
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.2, 0.8, 0.4, 1],
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    },
    hover: {
        scale: 1.05,
        rotate: 1,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
}

export const MainAboutUs = () => {
  const imgStyle = 'about-image w-100 h-100 rounded-xl object-cover cursor-pointer'

  return (
    <div className='about-container about-responsive px-24 py-16'>
      <div className='about-card flex flex-col items-center'>
        <motion.h2
          className='jobs-title about-title'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          Nosotros
        </motion.h2>

        <div className='flex flex-col items-center'>
          <motion.div
            className='text-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <p className='jobs-subtitle about-text'>
              PLP (Plataforma Laboral Proactiva) es una solución para personas con habilidades y experiencia que no tienen un título profesional. La plataforma les
              <br /> permite publicar su perfil y ser vistos por empresas y emprendedores que buscan talento, brindándoles oportunidades laborales dignas sin necesidad
              <br /> de un título. A su vez, estas empresas y emprendedores pueden publicar sus vacantes para que puedan ser vistas por aquellos que buscan un empleo.
            </p>
          </motion.div>

          <div className='flex py-10 gap-8'>
            <motion.img
              src={job}
              alt='Trabajo 1'
              className={imgStyle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={creativeImageAnimation}
              whileHover="hover"
              transition={{ delay: 0 }}
            />
            <motion.img
              src={job2}
              alt='Trabajo 2'
              className={imgStyle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={creativeImageAnimation}
              whileHover="hover"
              transition={{ delay: 0.1 }}
            />
            <motion.img
              src={job3}
              alt='Trabajo 3'
              className={imgStyle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={creativeImageAnimation}
              whileHover="hover"
              transition={{ delay: 0.2 }}
            />
          </div>

          <NavLink to='/sobre-plp' className='w-full flex flex-col items-center'>
            <Button
              btnName='Leer más'
              btnType='submit'
              btnStyle='w-[30%] text-lg text-[#405e7f] bg-[#60efdb]'
            />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
