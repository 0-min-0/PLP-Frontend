import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CardInfo } from '../../UI/CardInfo'; // Asume que CardInfo renderiza la imagen a través de la prop cardIcon
import noCost from '../../assets/images/signo-de-dolar.png';
import findPeople from '../../assets/images/buscar.png';
import jobOffer from '../../assets/images/oferta-de-trabajo.png';
import noCostDark from '../../assets/images/dollarDark.png';
import findPeopleDark from '../../assets/images/buscarDark.png';
import jobOfferDark from '../../assets/images/ofertaDark.png';

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
};

export const InfoContainer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const html = document.documentElement
      setIsDark(html.classList.contains('dark-mode'))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const currentNoCostIcon = isDark ? noCostDark : noCost;
  const currentFindPeopleIcon = isDark ? findPeopleDark : findPeople;
  const currentJobOfferIcon = isDark ? jobOfferDark : jobOffer;

  return (
    <motion.div
      className='bg-[#405e7f] info-container w-360 flex justify-evenly p-6 items-center gap-6 rounded-2xl'
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
          info='Regístrate y postula tu hoja de vida totalmente gratis y encuentra gente que necesite de tu trabajo.'
          cardIcon={currentNoCostIcon} // Usa la imagen condicional
          descIcon='Sin costos'
        />
      </motion.div>
      <motion.div variants={cardAnimation}>
        <CardInfo
          title='Encuentra contratistas'
          info='Además de registrar tu hoja de vida, puedes buscar personas a quienes ofrecer un buen empleo.'
          cardIcon={currentFindPeopleIcon} // Usa la imagen condicional
          descIcon='Encontrar Contratistas'
        />
      </motion.div>
      <motion.div variants={cardAnimation}>
        <CardInfo
          title='Ofertas laborales'
          info='Encuentra buenas ofertas laborales que se ajusten a tu tiempo y requieran de tus servicios.'
          cardIcon={currentJobOfferIcon} // Usa la imagen condicional
          descIcon='Encontrar Ofertas Laborales'
        />
      </motion.div>
    </motion.div>
  );
};