import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../Components/Header/Header'; // Asegúrate de que Header también use variables si tiene colores que cambian
import { WelcomeTextHome } from '../../Components/WelcomeText/WelcomeTextHome';

const subtleFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const MainLayout = () => {
  return (
    <motion.div
      // Elimina 'bg-[#dcfff6]' y añade 'main-layout-container'
      className='w-[90%] main-layout-container pb-14 mx-26 mt-4 mb-20 rounded-2xl'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={subtleFadeIn}
    >
      <WelcomeTextHome />
    </motion.div>
  );
};