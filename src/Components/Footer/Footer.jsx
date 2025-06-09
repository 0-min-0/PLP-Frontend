import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaWhatsapp, FaGithub, FaDiscord, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export const Footer = ({ bgColor = 'bg-[#405e7f]', textColor = 'text-white' }) => {
  return (
    <footer className={`${bgColor} ${textColor} py-8 px-4`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección de derechos */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Plataforma Laboral Proactiva</h3>
          <p className="text-center md:text-left">© 2025 Todos los derechos reservados</p>
        </div>

        {/* Sección de enlaces legales */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/politicas-de-privacidad"
              className="hover:underline transition duration-200"
            >
              Políticas de privacidad
            </NavLink>
            <NavLink
              to="/terminos-y-condiciones"
              className="hover:underline transition duration-200"
            >
              Términos y condiciones
            </NavLink>
          </div>
        </div>

        {/* Sección de contacto */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-bold mb-4">Contáctanos</h3>

          <div className="flex space-x-4 mb-4">
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60efdb] transition duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/0-min-0/PLP-Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60efdb] transition duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60efdb] transition duration-200"
              aria-label="Discord"
            >
              <FaDiscord className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60efdb] transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>

          <a
            href="mailto:plataformalaboralproactiva@example.com"
            className="flex items-center hover:underline transition duration-200"
          >
            <SiGmail className="mr-2 w-5 h-5" />
            plataformalaboralproactiva@example.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-opacity-20 text-center">
        <p>Construyendo el futuro del empleo profesional</p>
      </div>
    </footer>
  )
}