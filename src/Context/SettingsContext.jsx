import React, { createContext, useState, useContext } from 'react'
import { useRegister } from './RegisterContext'

const SettingsContext = createContext()

export const SettingsProvider = ({ children, initialUser }) => {
  const [user, setUser] = useState(initialUser)
  const [editMode, setEditMode] = useState(false)
  const [tempUser, setTempUser] = useState({...initialUser})
  const [activeSection, setActiveSection] = useState(null)
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [validationErrors, setValidationErrors] = useState({})
  const [passwordErrors, setPasswordErrors] = useState({})

  // Common validations
  const validatePhone = (value, isRequired = true) => {
    if (!value) return isRequired ? 'ⓘ El número de teléfono es requerido.' : ''
    if (!/^[0-9]+$/.test(value)) return 'ⓘ El número de teléfono solo puede contener dígitos (0-9).'
    if (value.length !== 10) return 'ⓘ El número de teléfono debe tener exactamente 10 dígitos.'
    return ''
  }

  const validatePhoneSec = (value) => {
    if (!value) return ''
    if (!/^[0-9]+$/.test(value)) return 'ⓘ El número de teléfono solo puede contener dígitos (0-9).'
    if (value.length !== 10) return 'ⓘ El número de teléfono debe tener exactamente 10 dígitos.'
    return ''
  }

  const validateEmail = (value) => {
    if (!value) return 'ⓘ El correo electrónico es requerido.'
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(value)) return 'ⓘ Ingresa un correo válido (Ej. usuario@ejemplo.com).'
    if (/\s/.test(value)) return 'ⓘ El correo no puede contener espacios.'
    return ''
  }

  const validateDocumentNumber = (value) => {
    if (!value) return 'ⓘ El número de documento es requerido.'
    if (!/^[0-9]+$/.test(value)) return 'ⓘ El número de documento solo puede contener números.'
    return ''
  }

  const validateNotEmpty = (value, fieldName) => {
    if (!value) return `ⓘ El campo ${fieldName} es requerido.`
    return ''
  }

  const validatePasswordStrength = (password) => {
    const minLength = password.length >= 8
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)

    if (!minLength) return 'ⓘ La contraseña debe tener al menos 8 caracteres'
    if (!hasNumber) return 'ⓘ La contraseña debe contener al menos un número'
    if (!hasSpecialChar) return 'ⓘ Debe contener al menos un carácter especial'
    if (!hasUpperCase) return 'ⓘ Debe contener al menos una mayúscula'
    return ''
  }

  // Field validation
  const validateField = (name, value) => {
    let error = ''

    switch(name) {
      case 'phoneEmployer':
        error = validatePhone(value)
        break
      case 'phoneSecEmployer':
        error = validatePhoneSec(value)
        break
      case 'emailEmployer':
        error = validateEmail(value)
        break
      case 'documentNumber':
        error = validateDocumentNumber(value)
        break
      case 'documentType':
      case 'townEmployer':
        error = validateNotEmpty(value, name === 'documentType' ? 'tipo de documento' : 'ubicación')
        break
      default:
        break
    }

    setValidationErrors(prev => ({
      ...prev,
      [name]: error
    }))

    return error === ''
  }

  // Section validation
  const validatePersonalSection = () => {
    const fieldsToValidate = {
      documentType: tempUser.documentType,
      documentNumber: tempUser.documentNumber,
      phoneEmployer: tempUser.phoneEmployer,
      phoneSecEmployer: tempUser.phoneSecEmployer,
      emailEmployer: tempUser.emailEmployer,
      townEmployer: tempUser.townEmployer
    }

    let isValid = true
    const newErrors = {}

    Object.entries(fieldsToValidate).forEach(([name, value]) => {
      const fieldValid = validateField(name, value)
      if (!fieldValid) {
        isValid = false
      }
    })

    return isValid;
  }

  const validatePasswordFields = () => {
    const { currentPassword, newPassword, confirmPassword } = passwordData
    const newErrors = {}
    let isValid = true

    if (!currentPassword) {
      newErrors.currentPassword = 'ⓘ La contraseña actual es requerida'
      isValid = false
    }

    if (!newPassword) {
      newErrors.newPassword = 'ⓘ La nueva contraseña es requerida'
      isValid = false
    } else {
      const strengthError = validatePasswordStrength(newPassword)
      if (strengthError) {
        newErrors.newPassword = strengthError
        isValid = false
      }
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'ⓘ Confirma tu nueva contraseña'
      isValid = false
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'ⓘ Las contraseñas no coinciden'
      isValid = false
    }

    setPasswordErrors(newErrors)
    return isValid
  }

  // Handlers
  const handleEdit = (section) => {
    setTempUser({...user})
    setActiveSection(section)
    setEditMode(true)
    setValidationErrors({})
    setPasswordErrors({})
  }

  const handleSave = () => {
    if (activeSection === 'personal' && !validatePersonalSection()) {
      return
    }

    if (activeSection === 'security' && !validatePasswordFields()) {
      return
    }

    const updatedUser = {...tempUser}
    
    if (activeSection === 'security') {
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
    }

    setUser(updatedUser)
    setEditMode(false)
    setActiveSection(null)
  }

  const handleCancel = () => {
    setEditMode(false)
    setActiveSection(null)
    setValidationErrors({})
    setPasswordErrors({})
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    
    setTempUser({
      ...tempUser,
      [name]: newValue
    })

    if (editMode && activeSection === 'personal') {
      validateField(name, newValue)
    }
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData({
      ...passwordData,
      [name]: value
    })

    if (editMode && activeSection === 'security') {
      const newErrors = {...passwordErrors}
      
      if (name === 'newPassword') {
        const strengthError = validatePasswordStrength(value)
        newErrors.newPassword = strengthError || ''
      } else if (name === 'confirmPassword' && passwordData.newPassword !== value) {
        newErrors.confirmPassword = 'ⓘ Las contraseñas no coinciden'
      } else {
        newErrors[name] = ''
      }

      setPasswordErrors(newErrors)
    }
  }

  const handleSelectChange = (name, value) => {
    setTempUser({
      ...tempUser,
      [name]: value
    })

    if (editMode && activeSection === 'personal') {
      validateField(name, value)
    }
  }

  return (
    <SettingsContext.Provider
      value={{
        user,
        tempUser,
        editMode,
        activeSection,
        passwordData,
        validationErrors,
        passwordErrors,
        handleEdit,
        handleSave,
        handleCancel,
        handleChange,
        handlePasswordChange,
        handleSelectChange,
        validateField,
        validatePersonalSection,
        validatePasswordFields
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings debe usarse dentro de un SettingsProvider')
  }
  return context
}