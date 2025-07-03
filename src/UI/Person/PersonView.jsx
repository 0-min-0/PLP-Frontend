import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { Button } from '../button'
import { PersonInfo } from './PersonInfo'
import { useRef, useState } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { CommentModal } from '../Modals/CommentModal'

export const PersonView = ({ person, isOpen, onClose, showCommentButton = false }) => {
  const contentRef = useRef(null)
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
  const [currentRole, setCurrentRole] = useState('contratante')

  const sanitizeColors = (element) => {
    try {
      const elements = element.querySelectorAll('*')
      const allElements = [element, ...elements]

      allElements.forEach(el => {
        const style = window.getComputedStyle(el)
        const replaceOklch = (property, fallback) => {
          if (style[property] && style[property].includes('oklch')) {
            el.style[property] = fallback
          }
        }

        // Reemplazar posibles valores "oklch"
        replaceOklch('color', 'rgb(64, 94, 127)')
        replaceOklch('backgroundColor', 'rgb(220, 255, 246)')
        replaceOklch('borderColor', 'rgb(64, 94, 127)')
        replaceOklch('borderTopColor', 'rgb(64, 94, 127)')
        replaceOklch('borderRightColor', 'rgb(64, 94, 127)')
        replaceOklch('borderBottomColor', 'rgb(64, 94, 127)')
        replaceOklch('borderLeftColor', 'rgb(64, 94, 127)')
        replaceOklch('outlineColor', 'rgb(64, 94, 127)')

        // Manejar estilos en línea que podrían contener oklch
        if (el.hasAttribute('style')) {
          const inlineStyle = el.getAttribute('style')
          if (inlineStyle.includes('oklch')) {
            const cleanedStyle = inlineStyle.replace(/oklch\([^)]+\)/g, 'rgb(64, 94, 127)')
            el.setAttribute('style', cleanedStyle)
          }
        }
      })
    } catch (error) {
      console.warn('Error durante la sanitización de colores:', error)
    }
  }

  const handleDownloadPDF = async () => {
    if (!contentRef.current) {
      console.error("El contenido no está disponible para generar PDF.")
      return
    }

    // Creamos un clon del contenido para no afectar la visualización original
    const clone = contentRef.current.cloneNode(true)
    const container = document.createElement('div')

    // Estilos para el contenedor fuera de pantalla
    container.style.position = 'fixed'
    container.style.left = '-9999px'
    container.style.top = '0'
    container.style.padding = '24px'
    container.style.backgroundColor = 'white'
    container.appendChild(clone)
    document.body.appendChild(container)

    // Sanitizacion de los colores antes de generar el PDF
    sanitizeColors(container)

    try {
      // Configuración de html2canvas con opciones para mejor calidad
      const canvas = await html2canvas(container, {
        scale: 2,
        logging: true,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png', 1.0)
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`${person.name.replace(/\s+/g, '_')}_CV.pdf`)

    } catch (error) {
      console.error('Error al generar el PDF:', error)
      // Podrías añadir aquí un toast o alerta para el usuario
    } finally {
      // Limpieza: remover el contenedor temporal
      if (container.parentNode) {
        document.body.removeChild(container)
      }
    }
  }

  const handleOpenCommentModal = () => {
    setIsCommentModalOpen(true)
  }

  const handleCloseCommentModal = () => {
    setIsCommentModalOpen(false)
  }

  const handleSaveComment = (newComment) => {
    // Aquí puedes manejar el guardado del comentario
    // Por ejemplo, enviarlo a una API o guardarlo en el estado
    console.log('Nuevo comentario:', newComment)
    // onContact podría ser modificado para manejar comentarios
    // o podrías tener una prop específica para comentarios
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { y: -20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0, opacity: 1, scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: { y: 20, opacity: 0, scale: 0.98, transition: { ease: 'easeIn' } }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
          >
            <motion.div
              className='container-info-user general rounded-xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto'
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className='container-title-info-user flex justify-between items-center mb-6'>
                <h2 className='info-user-title text-3xl font-bold text-[color:var(--color-card-text)] ml-6'>{person.occupation}</h2>
                <button
                  onClick={onClose}
                  className='icons hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer'
                  aria-label="Cerrar ventana"
                >
                  <FiX className='icon-close-x w-5 h-5' />
                </button>
              </div>

              <div ref={contentRef}>
                <PersonInfo person={person} />
              </div>

              <div className='buttons-user-container flex justify-center gap-4 mt-6'>
                <Button
                  btnName='Descargar CV'
                  btnType='button'
                  btnStyle='download-cv border border-[#405e7f] text-[#405e7f] text-lg font-medium px-6 py-2 rounded-full'
                  clicked={handleDownloadPDF}
                  aria-label="Descargar currículum en PDF"
                />
                {showCommentButton && (
                  <Button
                    btnName='Dejar comentario'
                    btnType='button'
                    btnStyle='bg-[#60efdb] text-[#405e7f] text-lg font-semibold px-6 py-2 rounded-full'
                    clicked={handleOpenCommentModal}
                    aria-label="Dejar comentario sobre este profesional"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {showCommentButton && (
        <CommentModal
          isOpen={isCommentModalOpen}
          onClose={handleCloseCommentModal}
          onSave={handleSaveComment}
          currentRole={currentRole}
        />
      )}
    </>
  )
}