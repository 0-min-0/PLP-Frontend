import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FaWhatsapp, FaGithub, FaDiscord, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

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

const iconAnimation = {
  hover: {
    y: -3,
    scale: 1.1,
    color: "#60efdb",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

export const Footer = ({ bgColor = 'bg-[#405e7f]', textColor = 'text-white' }) => {
  return (
    <motion.footer 
      className={`${bgColor} ${textColor} footer-responsive py-6 px-4`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      <div className="footer-grid-responsive max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sección de derechos */}
        <motion.div 
          className="footer-section-responsive flex flex-col items-center md:items-start"
          variants={fadeInUp}
        >
          <h3 className="footer-title-responsive text-lg font-bold mb-3">Plataforma Laboral Proactiva</h3>
          <p className="footer-link-responsive text-sm text-center md:text-left">© 2025 Todos los derechos reservados</p>
        </motion.div>

        {/* Sección de enlaces legales */}
        <motion.div 
          className='footer-section-responsive flex flex-col text-center items-center'
          variants={fadeInUp}
        >
          <h3 className='footer-title-responsive text-lg font-bold mb-3'>Legal</h3>
          <div className='footer-links-responsive flex flex-col space-y-1'>
            <NavLink
              to='/ayuda-soporte'
              className='footer-link-responsive text-sm hover:underline transition duration-200'
            >
              Ayuda y soporte
            </NavLink>
            <NavLink
              to='/terminos-condiciones'
              className='footer-link-responsive text-sm hover:underline transition duration-200'
            >
              Términos y condiciones
            </NavLink>
          </div>
        </motion.div>

        {/* Sección de contacto */}
        <motion.div 
          className="footer-section-responsive flex flex-col items-center md:items-end"
          variants={fadeInUp}
        >
          <h3 className="footer-title-responsive text-lg font-bold mb-3">Contáctanos</h3>

          <div className="footer-icons-responsive flex space-x-3 mb-3">
            <motion.a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60efdb] transition duration-200"
              aria-label="WhatsApp"
              variants={iconAnimation}
              whileHover="hover"
            >
              <FaWhatsapp className="footer-icon-responsive w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/0-min-0/PLP-Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60efdb] transition duration-200"
              aria-label="GitHub"
              variants={iconAnimation}
              whileHover="hover"
            >
              <FaGithub className="footer-icon-responsive w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60efdb] transition duration-200"
              aria-label="Discord"
              variants={iconAnimation}
              whileHover="hover"
            >
              <FaDiscord className="footer-icon-responsive w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60efdb] transition duration-200"
              aria-label="LinkedIn"
              variants={iconAnimation}
              whileHover="hover"
            >
              <FaLinkedin className="footer-icon-responsive w-5 h-5" />
            </motion.a>
          </div>

          <motion.a
            href="mailto:plataformalaboralproactiva@example.com"
            className="footer-email-responsive flex items-center text-sm hover:underline transition duration-200"
            whileHover={{ x: 3 }}
          >
            <SiGmail className="footer-email-icon-responsive mr-1 w-4 h-4" />
            plataformalaboralproactiva@example.com
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        className="footer-divider-responsive max-w-7xl mx-auto mt-6 pt-3 border-t border-opacity-20 text-center text-sm"
        variants={fadeInUp}
      >
        <p className='footer-link-responsive'>Construyendo el futuro del empleo profesional</p>
      </motion.div>
    </motion.footer>
  )
}