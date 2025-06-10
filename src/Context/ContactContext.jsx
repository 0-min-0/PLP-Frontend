import React, { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { Button } from '../UI/button'

const ContactContext = createContext()

export const ContactProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  })
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    comment: '',
    general: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Validación de email en tiempo real
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpiar errores generales al escribir
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: '' }))
    }
    
    // Validación en tiempo real solo para email
    if (name === 'email') {
      if (!value) {
        setErrors(prev => ({ ...prev, email: '' }))
      } else if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'ⓘ Por favor ingresa un correo electrónico válido' }))
      } else {
        setErrors(prev => ({ ...prev, email: '' }))
      }
    }
  }
  
  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: '',
      email: '',
      comment: '',
      general: ''
    }
    
    // Verificar si todos los campos están vacíos
    const allFieldsEmpty = !formData.name && !formData.email && !formData.comment
    
    if (allFieldsEmpty) {
      newErrors.general = 'ⓘ Para enviar un comentario o sugerencia debes completar todos los campos.'
      isValid = false
    } else {

      if (!formData.name) {
        newErrors.name = 'ⓘ El campo nombre completo es requerido'
        isValid = false
      }
      
      if (!formData.email) {
        newErrors.email = 'ⓘ El campo correo electrónico es requerido'
        isValid = false
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'ⓘ Por favor ingresa un correo electrónico válido'
        isValid = false
      }
      
      if (!formData.comment) {
        newErrors.comment = 'ⓘ El campo comentario/sugerencia es requerido'
        isValid = false
      }
    }
    
    setErrors(newErrors)
    return isValid
  }

  const submitForm = async () => {
    setIsLoading(true)
    try {
      // Simulacion de la llamada al API
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.2 ? resolve() : reject(new Error('Error en el servidor'))
        }, 1500)
      })
      
      return true
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    
    if (!validateForm()) {
      return
    }
    
    const isSuccess = await submitForm()
    
    if (isSuccess) {
      setShowSuccessModal(true)
      setTimeout(() => {
        setShowSuccessModal(false)
        setFormData({ name: '', email: '', comment: '' })
        setIsSubmitted(false)
      }, 5000)
    } else {
      setShowErrorModal(true)
    }
  }
  
  // Componente reutilizable para los modales
  const Modal = ({ isOpen, onClose, title, message, children }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl p-12 max-w-md w-full mx-4 relative"
            initial={{ y: -20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <div className='p-1 hover:bg-gray-100 rounded-lg cursor-pointer'>
                <IoClose className='w-6 h-6' />
              </div>
            </button>

            <h2 className="text-2xl font-bold text-[#405e7f] mb-4">
              {title}
            </h2>

            <p className="mb-6 text-gray-700">
              {message}
            </p>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <ContactContext.Provider value={{ 
      formData, 
      errors, 
      handleChange, 
      handleSubmit, 
      showSuccessModal, 
      setShowSuccessModal,
      showErrorModal,
      setShowErrorModal,
      isLoading
    }}>
      {children}
      
      {/* Modal de éxito */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="¡Comentario enviado!"
        message="El comentario fue enviado con éxito. Gracias por tu feedback."
      >
        <Button
          btnName='Cerrar'
          onClick={() => setShowSuccessModal(false)}
          btnStyle='w-full bg-[#60efdb] text-[#405e7f]'
        />
      </Modal>
      
      {/* Modal de error */}
      <Modal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        title="Error al enviar"
        message="No se pudo enviar el comentario. Por favor intenta nuevamente más tarde."
      >
        <div className="flex gap-4">
          <Button
            btnName='Reintentar'
            onClick={handleSubmit}
            btnStyle='flex-1 bg-[#405e7f] text-white'
            disabled={isLoading}
          />
          <Button
            btnName='Cerrar'
            onClick={() => setShowErrorModal(false)}
            btnStyle='flex-1 bg-[#60efdb] text-[#405e7f]'
          />
        </div>
      </Modal>
    </ContactContext.Provider>
  )
}

export const useContact = () => useContext(ContactContext)