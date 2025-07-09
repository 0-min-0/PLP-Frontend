import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ReportModal } from '../../UI/Modals/ReportModal'
import styles from '../../Style/AIChatBot.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

export const Help = ({ embedded = false }) => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)

  const handleOpenReportModal = () => {
    setIsReportModalOpen(true)
  }

  const handleCloseReportModal = () => {
    setIsReportModalOpen(false)
  }

  const handleSubmitReport = (reportData) => {
    console.log('Report submitted:', reportData)
    alert(`Gracias por tu ${reportData.type === 'suggestion' ? 'sugerencia' : 'reporte'}. Haremos lo posible por atenderlo.`)
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={` text w-full general overflow-y-auto scrollbar-custom pr-4
          ${embedded ? 'container-help-terms h-[100%] max-h-[600px]' : 'container-screen h-screen'}
        `}
    >
      <div className="sub-help-terms max-w-5xl mx-auto px-6 py-8 text-[color:var(--color-card-text)] leading-relaxed">
        <motion.h1
          className="text-3xl font-bold mb-6 text-center border-b-2 border-[#405e7f] pb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          AYUDA Y SOPORTE DE PLP
        </motion.h1>

        <motion.p
          className='text-sm italic mb-8 text-center text-[color:var(--color-card-text)]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Última actualización: 03/06/2025
        </motion.p>

        <motion.section
          className={styles.helpSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h2>1. Preguntas Frecuentes (FAQ)</h2>

          <h3>Para Candidatos</h3>
          <ul>
            <li>
              <p className="font-medium">¿Cómo creo un perfil en PLP?</p>
              <p className="ml-4 mt-1 pl-2 border-l-2 border-[#90d7db]">
                Ve a <NavLink to='/crear-cuenta' className={styles.helpLink}>Registro</NavLink>, completa tus datos personales, experiencia laboral y habilidades. Sube un currículum opcional para destacarte.
              </p>
            </li>
            <li>
              <p className="font-medium">¿Puedo usar PLP sin título profesional?</p>
              <p className="ml-4 mt-1 pl-2 border-l-2 border-[#90d7db]">
                Sí, PLP está diseñada para valorar habilidades y experiencia práctica. Asegúrate de detallar tu trayectoria en el perfil.
              </p>
            </li>
            <li>
              <p className="font-medium">¿Cómo aplico a una vacante?</p>
              <p className="ml-4 mt-1 pl-2 border-l-2 border-[#90d7db]">
                Haz clic en "Aplicar" en la oferta de empleo y sigue las instrucciones. Recibirás confirmación por email.
              </p>
            </li>
          </ul>

          <h3 className='mt-4'>Para Empleadores</h3>
          <ul>
            <li>
              <p className="font-medium">¿Cómo publico una vacante?</p>
              <p className="ml-4 mt-1 pl-2 border-l-2 border-[#90d7db]">
                Registra tu empresa, verifica tus datos y haz clic en "Publicar vacante". Revisaremos tu anuncio antes de activarlo.
              </p>
            </li>
            <li>
              <p className="font-medium">¿Qué tipo de candidatos encontraré en PLP?</p>
              <p className="ml-4 mt-1 pl-2 border-l-2 border-[#90d7db]">
                Profesionales con experiencia demostrable, pero sin título formal. Ideal para roles que priorizan competencias técnicas.
              </p>
            </li>
            <li>
              <p className="font-medium">¿Hay costos por usar PLP?</p>
              <p className="ml-4 mt-1 pl-2 border-l-2 border-[#90d7db]">
                No, PLP es una plataforma completamente gratuita para cualquier tipo de usuario.
              </p>
            </li>
          </ul>
        </motion.section>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.section
          className={styles.helpSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h2>2. Guías y Tutoriales</h2>
          <ul className={styles.helpList}>
            <li><a href="#" className={styles.helpLink}>Video tutorial: Cómo optimizar tu perfil para empleadores</a></li>
            <li><a href="#" className={styles.helpLink}>Guía PDF: Mejores prácticas para publicar vacantes</a></li>
            <li><a href="#" className={styles.helpLink}>Webinar: Cómo destacar habilidades sin título profesional</a></li>
          </ul>
        </motion.section>

        <motion.div
          className={styles.helpDivider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.section
          className={styles.helpSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <h2>3. Problemas Técnicos</h2>
          <ul className={styles.helpList}>
            <li>
              <p className="font-medium">La app/web no carga</p>
              <p className="ml-4 mt-1 pl-2 border-l-2 border-[#90d7db]">
                Revisa tu conexión a internet o actualiza tu navegador/app. Si persiste, repórtalo
                <button onClick={handleOpenReportModal} className={`${styles.helpLink} ml-1`}>
                  aquí
                </button>.
              </p>
            </li>
            <li>
              <p className="font-medium">No recibo emails de PLP</p>
              <p className="ml-4 mt-1 pl-2 border-l-2 border-[#90d7db]">
                Verifica tu carpeta de spam o añade contacto@plp.com a tus contactos.
              </p>
            </li>
          </ul>
        </motion.section>

        <motion.div
          className={styles.helpDivider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.section
          className={styles.helpSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <h2>4. Contacto Directo</h2>
          <ul className={styles.helpContactList}>
            <li className={styles.helpContactItem}>
              <span className={styles.helpContactLabel}>Email:</span>
              <span>soporte@plp.com <span className="text-sm text-gray-600">(Respuesta en ≤ 24 horas)</span></span>
            </li>
            <li className={styles.helpContactItem}>
              <span className={styles.helpContactLabel}>Teléfono:</span>
              <span>[+XX XXX XXX XXXX] <span className="text-sm text-gray-600">(Lunes a Viernes, 9:00 a 18:00 hrs)</span></span>
            </li>
            <li className={styles.helpContactItem}>
              <span className={styles.helpContactLabel}>Chat en vivo:</span>
              <span>Disponible en la app/web (icono de burbuja en esquina inferior derecha)</span>
            </li>
          </ul>
        </motion.section>

        <motion.div
          className={styles.helpDivider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.section
          className='terms-section p-4 rounded-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <h3 className="font-semibold">¿Cómo podemos mejorar PLP?</h3>
          <p className="mt-2">Déjanos tus sugerencias
            <button onClick={handleOpenReportModal} className={`${styles.helpLink} ml-1`}>
              en este formulario
            </button>.
          </p>
        </motion.section>
      </div>
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={handleCloseReportModal}
        onSubmit={handleSubmitReport}
      />
    </motion.div>
  )
}
