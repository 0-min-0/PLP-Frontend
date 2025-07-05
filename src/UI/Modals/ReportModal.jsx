import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { Button } from '../button'
import { useState, useEffect } from 'react'
import { Input } from '../Input'
import { Desc } from '../Desc'

export const ReportModal = ({ isOpen, onClose, onSubmit }) => {
  const [reportText, setReportText] = useState('')
  const [email, setEmail] = useState('')
  const [reportType, setReportType] = useState('technical')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setReportText('')
      setEmail('')
      setReportType('technical')
    }
  }, [isOpen])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      scale: 0.98
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      y: 20,
      opacity: 0,
      scale: 0.98,
      transition: {
        ease: 'easeIn'
      }
    }
  }

  const handleSubmit = () => {
    const trimmedReport = reportText.trim()
    const trimmedEmail = email.trim()
    
    if (trimmedReport !== '' && trimmedEmail !== '') {
      setIsSubmitting(true)
      const reportData = {
        type: reportType,
        email: trimmedEmail,
        description: trimmedReport,
        date: new Date().toISOString()
      }
      
      onSubmit(reportData)
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        onClose()
      }, 1500)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={backdropVariants}
        >
          <motion.div
            className="modal-comment general rounded-xl p-8 max-w-lg w-full mx-4 relative max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Cerrar modal"
            >
              <div className='icons p-1 hover:bg-gray-100 rounded-lg cursor-pointer'>
                <IoClose className='icon-close-x w-6 h-6' />
              </div>
            </button>

            <h2 className="modal-auth-title text-2xl font-bold text-[color:var(--color-card-text)] mb-5">
              Reportar un problema o sugerencia
            </h2>

            <div className="modal-comment-input mb-4">
              <label className="block text-sm font-medium text-[color:var(--color-card-text)] mb-1">
                Tipo de reporte:
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#60efdb]"
                    name="reportType"
                    value="technical"
                    checked={reportType === 'technical'}
                    onChange={() => setReportType('technical')}
                  />
                  <span className="text ml-2">Problema técnico</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#60efdb]"
                    name="reportType"
                    value="suggestion"
                    checked={reportType === 'suggestion'}
                    onChange={() => setReportType('suggestion')}
                  />
                  <span className="text ml-2">Sugerencia</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#60efdb]"
                    name="reportType"
                    value="other"
                    checked={reportType === 'other'}
                    onChange={() => setReportType('other')}
                  />
                  <span className="text ml-2">Otro</span>
                </label>
              </div>
            </div>

            <div className="mb-2">
              <Input
                labelTitle="Tu email"
                iType="email"
                iValue={email}
                iName="email"
                iChange={(e) => setEmail(e.target.value)}
                iHolder="ejemplo@email.com"
                padding="px-4 py-2"
              />
            </div>

            <div className="">
              <Desc
                nameDesc={reportType === 'suggestion' ? 'Tu sugerencia' : 'Descripción del problema'}
                value={reportText}
                name="reportText"
                onChange={(e) => setReportText(e.target.value)}
                holderDesc={
                  reportType === 'technical' 
                    ? 'Describe detalladamente el problema que encontraste...' 
                    : reportType === 'suggestion'
                      ? 'Cuéntanos cómo podemos mejorar PLP...'
                      : 'Describe tu consulta o comentario...'
                }
                rows="6"
              />
            </div>

            <div className='flex justify-end space-x-3 mt-4'>
              <Button
                btnName="Cancelar"
                btnStyle="bg-gray-200 text-gray-700 hover:bg-gray-300"
                clicked={onClose}
              />
              <Button
                btnName={isSubmitting ? "Enviando..." : "Enviar Reporte"}
                btnStyle="bg-[#60efdb] text-[#405e7f] hover:bg-[#4fd4c7]"
                clicked={handleSubmit}
                disabled={!reportText.trim() || !email.trim() || isSubmitting}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}