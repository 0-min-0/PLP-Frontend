import React from 'react'
import { motion } from 'framer-motion'
import { CardInfo } from '../../UI/CardInfo'
import noCost from '../../assets/images/signo-de-dolar.png'
import findPeople from '../../assets/images/buscar.png'
import jobOffer from '../../assets/images/oferta-de-trabajo.png'

const cardAnimation = {
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

export const InfoContainer = () => {
  return (
    <motion.div 
      className='w-360 flex justify-evenly px-6 py-6 items-center gap-6 bg-[#405e7f] rounded-2xl'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      <motion.div variants={cardAnimation}>
        <CardInfo 
          title='Es totalmente gratis' 
          info='Registrate y postula tu hoja de vida totalmente gratis y encuentra gente que necesite de tu trabajo.'
          cardIcon={ noCost } 
          descIcon='Sin costos' 
        />
      </motion.div>
      <motion.div variants={cardAnimation}>
        <CardInfo 
          title='Encuentra contratistas' 
          info='Ademas de registrar tu hoja de vida, puedes buscar personas a quienes ofrecer un buen empleo.' 
          cardIcon={ findPeople }
          descIcon='Encontrar Contratistas'
        />
      </motion.div>
      <motion.div variants={cardAnimation}>
        <CardInfo 
          title='Ofertas laborales' 
          info='Encuentra buenas ofertas laborales que se ajusten a tu tiempo y requieran de tus servicios.'
          cardIcon={ jobOffer } 
          descIcon='Encontrar Ofertas Laborales'
        />
      </motion.div>
    </motion.div>
  )
}