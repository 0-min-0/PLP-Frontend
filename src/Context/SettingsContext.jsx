import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo
} from 'react'
import {
  useLocation
} from 'react-router-dom' // Asume react-router-dom está instalado

// Datos iniciales de ejemplo para los tres roles
const initialUsers = {
  contratista: {
    documentType: 'CC',
    documentNumber: '1234567890',
    phone: '3001234567',
    phoneSec: '3120091746',
    email: 'contratista@example.com',
    town: 'Armenia',
    desc: 'Descripción del contratista.',
    genre: 'Masculino',
    occupation: 'Desarrollador',
    skill1: 'JavaScript',
    skill2: 'React',
    skill3: '',
    skill4: '',
    study1: 'Ingeniería de Sistemas',
    study2: '',
    study3: '',
    study4: '',
    password: 'Password123!',
    confirmPassword: 'Password123!',
    notificationsEnabled: true,
    theme: 'system'
  },
  empresa: {
    nit: '900123456-1',
    name: 'Empresa Ejemplo S.A.S',
    phone: '6011234567',
    phoneSec: '6017654321',
    email: 'empresa@example.com',
    town: 'Bogotá',
    category: 'Tecnología',
    webSite: 'https://www.empresa.com',
    desc: 'Descripción de la empresa ejemplo.',
    password: 'Password123!',
    confirmPassword: 'Password123!',
    notificationsEnabled: true,
    theme: 'system'
  },
  contratante: {
    documentType: 'CE',
    documentNumber: '1098765432',
    phone: '3109876543',
    phoneSec: '',
    email: 'contratante@example.com',
    town: 'Medellín',
    desc: 'Descripción del contratante.',
    genre: 'Femenino',
    occupation: 'Gerente de Proyectos',
    password: 'Password123!',
    confirmPassword: 'Password123!',
    notificationsEnabled: true,
    theme: 'system'
  },
}

export const SettingsContext = createContext()

export const SettingsProvider = ({
  children
}) => {
  const location = useLocation()
  const [isEditing, setIsEditing] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [formData, setFormData] = useState({})
  const [initialFormData, setInitialFormData] = useState({}) // Para revertir cambios
  const [errors, setErrors] = useState({})
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [currentRole, setCurrentRole] = useState('')
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [passwordErrors, setPasswordErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  // Etiquetas de campo para mensajes de error
  const fieldLabels = useMemo(() => ({
    phone: 'Teléfono',
    email: 'Correo electrónico',
    documentNumber: 'Número de documento',
    nit: 'NIT',
    name: 'Nombre de la empresa',
    category: 'Categoría',
    webSite: 'Sitio web',
    skill1: 'Habilidad 1',
    skill2: 'Habilidad 2',
    skill3: 'Habilidad 3',
    skill4: 'Habilidad 4',
    study1: 'Estudio 1',
    study2: 'Estudio 2',
    study3: 'Estudio 3',
    study4: 'Estudio 4',
    documentType: 'Tipo de documento',
    town: 'Ubicación',
    desc: 'Descripción',
    genre: 'Género',
    occupation: 'Ocupación',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    notificationsEnabled: 'Notificaciones',
    theme: 'Tema'
  }), [])

  // Función para obtener el rol actual de la URL
  const getCurrentRoleFromPath = useCallback(() => {
    const path = location.pathname
    if (path.includes('configuraciones-contratista')) return 'contratista'
    if (path.includes('configuraciones-empresa')) return 'empresa'
    if (path.includes('configuraciones-contratante')) return 'contratante'
    return ''
  }, [location.pathname])

  useEffect(() => {
    const role = getCurrentRoleFromPath()
    setCurrentRole(role)
    // Cargar datos iniciales según el rol
    if (initialUsers[role]) {
      setFormData(initialUsers[role])
      setInitialFormData(initialUsers[role])
    } else {
      setFormData({})
      setInitialFormData({})
    }
    setErrors({})
  }, [getCurrentRoleFromPath])

  // --------------------------------------------VALIDACIONES-----------------------------------------//

  const validatePhone = useCallback((value, isRequired = true) => {
    if (isRequired && !value) return 'ⓘ El número de teléfono es requerido'
    if (value && !/^\d+$/.test(value)) return 'ⓘ El número de teléfono solo puede contener digitos (0-9)'
    if (value && value.length !== 10) return 'ⓘ El número de teléfono debe contener almenos 10 digitos'
    return null
  }, [])

  const validateEmail = useCallback((email) => {
    if (!email) return 'ⓘ El correo electrónico es requerido'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'ⓘ Ingresa un correo válido (ej. correo@ejemplo.com)'
    return null
  }, [])

  const validateDocumentNumber = useCallback((docNumber) => {
    if (!docNumber) return 'ⓘ El número de documento es requerido'
    if (docNumber.length < 6) return 'ⓘ El número de documento debe tener al menos 6 caracteres'
    if (docNumber.length > 15) return 'ⓘ El número de documento debe tener como máximo 15 caracteres'
    if (!/^[A-Z0-9]+$/.test(docNumber)) return 'ⓘ Solo se permiten dígitos (0-9) y letras mayúsculas (A-Z)'
    return null
  }, [])

  const validateNit = useCallback((nit) => {
    if (!nit) return 'ⓘ El NIT es requerido'
    if (!/^\d{9}(-\d)?$/.test(nit)) return 'ⓘ El NIT debe tener el formato correcto (ej. 123456789-1)'
    return null
  }, [])

  const validateCompanyName = useCallback((name) => {
    if (!name) return 'ⓘ El nombre de la empresa es requerido'
    if (name.length < 3) return 'ⓘ El nombre debe tener al menos 3 caracteres'
    return null
  }, [])

  const validateCategory = useCallback((category) => {
    if (!category) return 'ⓘ La categoría es requerida'
    return null
  }, [])

  const validateWebsite = useCallback((url) => {
    if (url && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url)) {
      return 'ⓘ Ingresa una URL válida (ej. https://ejemplo.com)'
    }
    return null
  }, [])

  const validateSkill = useCallback((value, fieldName) => {
    if (['skill1', 'skill2'].includes(fieldName)) {
      if (!value) return 'ⓘ Esta habilidad es requerida'
      if (value.length < 5) return 'ⓘ La habilidad debe tener al menos 5 caracteres'
    }
    return null
  }, [])

  const validateStudy = useCallback((value, fieldName) => {
    if (['study1', 'study2'].includes(fieldName)) {
      if (!value) return 'ⓘ Este estudio es requerido'
      if (value.length < 5) return 'ⓘ El estudio debe tener al menos 5 caracteres'
    }
    return null
  }, [])

  const validateRequiredField = useCallback((value, fieldName) => {
    if (!value) {
      const readableName = fieldLabels[fieldName] || fieldName
      return `ⓘ El campo ${readableName} es requerido`
    }
    return null
  }, [fieldLabels])

  const validatePasswordStrength = useCallback((password) => {
    if (!password) return 'ⓘ La contraseña es requerida'
    if (password.length < 8) return 'ⓘ La contraseña debe tener al menos 8 caracteres'
    if (!/\d/.test(password)) return 'ⓘ La contraseña debe contener al menos un número'
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return 'ⓘ La contraseña debe contener al menos un carácter especial'
    if (!/[A-Z]/.test(password)) return 'ⓘ La contraseña debe contener al menos una mayúscula'
    return ''
  }, [])

  const validateConfirmPassword = useCallback((password, confirmPassword) => {
    if (!confirmPassword) return 'ⓘ Por favor confirma tu nueva contraseña'
    if (password !== confirmPassword) return 'ⓘ Las contraseñas no coinciden'
    return ''
  }, [])

  // Validación en tiempo real para campos específicos
  const validateFieldInRealTime = useCallback((name, value) => {
    let error = null

    if (name === 'phoneSec') {
      if (value) { // Solo validar si tiene valor
        error = validatePhone(value, false); // No es requerido
      }
    }
    // Validaciones comunes
    if (['phone', 'phoneCompany'].includes(name)) {
      error = validatePhone(value)
    } else if (['email', 'emailCompany'].includes(name)) {
      error = validateEmail(value)
    } else if (name === 'documentNumber') {
      error = validateDocumentNumber(value)
    } else if (name.startsWith('skill')) {
      error = validateSkill(value, name)
    } else if (name.startsWith('study')) {
      error = validateStudy(value, name)
    } else if (name === 'password') {
      error = validatePasswordStrength(value)
    } else if (name === 'confirmPassword') {
      error = validateConfirmPassword(formData.password, value)
    }

    // Validaciones específicas por rol
    if (currentRole === 'empresa') {
      if (name === 'nit') error = validateNit(value)
      if (name === 'name') error = validateCompanyName(value)
      if (name === 'category') error = validateCategory(value)
      if (name === 'webSite') error = validateWebsite(value)
    }

    // Validaciones de campos requeridos (excluyendo phoneSec)
    const requiredFields = {
      contratista: ['documentType', 'town', 'desc', 'genre', 'occupation', 'email', 'phone', 'password', 'confirmPassword', 'skill1', 'skill2', 'study1', 'study2'],
      empresa: ['nit', 'name', 'phone', 'email', 'town', 'category', 'desc', 'password', 'confirmPassword'],
      contratante: ['documentType', 'town', 'desc', 'genre', 'occupation', 'email', 'phone', 'password', 'confirmPassword'],
    }

    if (requiredFields[currentRole] && requiredFields[currentRole].includes(name) && name !== 'phoneSec') {
      if (!value && typeof value !== 'boolean') {
        error = validateRequiredField(value, name)
      }
    }

    return error
  }, [
    validatePhone,
    validateEmail,
    validateNit,
    validateDocumentNumber,
    validateRequiredField,
    validateSkill,
    validateStudy,
    validateCompanyName,
    validateCategory,
    validateWebsite,
    validatePasswordStrength,
    validateConfirmPassword,
    currentRole,
    formData.password,
  ])

  const validatePasswordForm = useCallback(() => {
    let isValid = true
    const newErrors = {}

    // Validar contraseña actual
    if (!passwordData.currentPassword) {
      newErrors.currentPassword = 'ⓘ La contraseña actual es requerida'
      isValid = false
    }

    // Validar nueva contraseña
    const newPasswordError = validatePasswordStrength(passwordData.newPassword)
    if (newPasswordError) {
      newErrors.newPassword = newPasswordError
      isValid = false
    }

    // Validar confirmación
    const confirmError = validateConfirmPassword(
      passwordData.newPassword,
      passwordData.confirmPassword
    )
    if (confirmError) {
      newErrors.confirmPassword = confirmError
      isValid = false
    }

    setPasswordErrors(newErrors)
    return isValid
  }, [passwordData, validatePasswordStrength, validateConfirmPassword])




  const handleEdit = useCallback((section) => {
    setIsEditing(true)
    setActiveSection(section)
    setErrors({}) // Limpiar errores al iniciar edición
  }, [])

  const handleChange = useCallback((e) => {
    const {
      name,
      value,
      type,
      checked
    } = e.target
    const newValue = type === 'checkbox' ? checked : value
    setFormData((prev) => ({
      ...prev,
      [name]: newValue
    }))

    // Validar en tiempo real
    const error = validateFieldInRealTime(name, newValue)
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }))
  }, [validateFieldInRealTime])

  const handleSelectChange = useCallback((name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    // Validar en tiempo real
    const error = validateFieldInRealTime(name, value)
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }))
  }, [validateFieldInRealTime])

  const handleSkillChange = useCallback((e) => {
    const {
      name,
      value
    } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    const error = validateSkill(value, name)
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }))
  }, [validateSkill])

  const handleStudyChange = useCallback((e) => {
    const {
      name,
      value
    } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    const error = validateStudy(value, name)
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }))
  }, [validateStudy])

  //Guardar datos validados
  const handleSaveWithValidation = useCallback(() => {
    let newErrors = {}
    let isValid = true

    // Definir los campos requeridos para cada rol (excluyendo phoneSec)
    const requiredFieldsByRole = {
      contratista: ['documentType', 'documentNumber', 'phone', 'email', 'town', 'desc', 'genre', 'occupation', 'skill1', 'skill2', 'study1', 'study2', 'password', 'confirmPassword'],
      empresa: ['nit', 'name', 'phone', 'email', 'town', 'category', 'webSite', 'desc', 'password', 'confirmPassword'],
      contratante: ['documentType', 'documentNumber', 'phone', 'email', 'town', 'desc', 'genre', 'occupation', 'password', 'confirmPassword'],
    }

    const fieldsToValidate = requiredFieldsByRole[currentRole] || []

    console.log(fieldsToValidate)
    console.log(formData)

    // Validar todos los campos requeridos y los campos con validaciones específicas
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key]
        let error = null

        // Validar campos requeridos específicos de cada rol (excluyendo phoneSec)
        if (fieldsToValidate.includes(key) && key !== 'phoneSec') {
          error = validateRequiredField(value, key)
          if (error) {
            newErrors[key] = error
            isValid = false
          }
        }

        // Validaciones generales para todos los campos presentes en formData
        const generalError = validateFieldInRealTime(key, value)
        if (generalError) {
          newErrors[key] = generalError
          isValid = false
        }
      }
    }

    // Validaciones adicionales para campos específicos si no están en formData (excluyendo phoneSec)
    fieldsToValidate.forEach(field => {
      if (!formData[field] && field !== 'phoneSec') {
        const error = validateRequiredField(formData[field], field)
        if (error) {
          newErrors[field] = error
          isValid = false
        }
      }
    })

    setErrors(newErrors)

    if (isValid) {
      console.log('Datos guardados localmente:', formData) // Guardar información localmente [cite: 259]
      setInitialFormData(formData) // Actualizar el estado inicial después de guardar
      setIsEditing(false)
      setActiveSection(null)
      setSaveSuccess(true) // Mostrar mensaje de éxito [cite: 269, 295]
      setTimeout(() => setSaveSuccess(false), 3000)
    } else {
      setSaveSuccess(false)
      console.log('Errores de validación:', newErrors)
    }
  }, [formData, currentRole, validateFieldInRealTime, validatePasswordStrength, validateConfirmPassword, validateRequiredField])

  //Guardar contraseña validada
  const handlePasswordChangeWithValidation = useCallback((e) => {
    const { name, value } = e.target

    setPasswordData(prev => {
      const updated = { ...prev, [name]: value }

      let error = ''
      if (name === 'currentPassword') {
        if (!value) error = 'ⓘ La contraseña actual es requerida'
      } else if (name === 'newPassword') {
        error = validatePasswordStrength(value)
        const confirmError = validateConfirmPassword(value, updated.confirmPassword)
        setPasswordErrors(prevErrors => ({
          ...prevErrors,
          confirmPassword: confirmError,
        }))
      } else if (name === 'confirmPassword') {
        error = validateConfirmPassword(updated.newPassword, value)
      }
      setPasswordErrors(prevErrors => ({
        ...prevErrors,
        [name]: error
      }))

      return updated
    })
  }, [validatePasswordStrength, validateConfirmPassword])


  const handleSavePassword = useCallback(() => {
    const isValid = validatePasswordForm()

    if (!isValid) {
      console.log("Errores en la validación de contraseña:", passwordErrors)
      return
    }

    console.log('Contraseña cambiada exitosamente:', {
      currentPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword
    })

    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })

    setPasswordErrors({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })

    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
    setIsEditing(false)
    setActiveSection(null)
  }, [validatePasswordForm, passwordData, passwordErrors])


  //Cancelar edicion
  const handleCancel = useCallback(() => {
    setFormData(initialFormData)
    setIsEditing(false)
    setActiveSection(null)
    setErrors({})
  }, [initialFormData])

  // Obtener el error activo para un campo específico
  const getActiveError = useCallback((fieldName) => {
    return errors[fieldName]
  }, [errors])

  // Combinar errores para campos como skills y studies
  const getCombinedError = useCallback((fieldName) => {
    return errors[fieldName]
  }, [errors])

  const getCombinedPasswordError = useCallback((fieldName) => {
    return passwordErrors[fieldName] || ''
  }, [passwordErrors])

  const handleCancelPasswoord = useCallback(() => {
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    setPasswordErrors({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    setIsEditing(false)
    setActiveSection(null)
  }, [])

  const contextValue = useMemo(() => ({
    isEditing,
    activeSection,
    formData,
    initialFormData,
    errors,
    passwordData,
    passwordErrors,
    saveSuccess,
    fieldLabels,
    currentRole,
    handleEdit,
    handleSaveWithValidation,
    handleCancel,
    handleChange,
    handleSelectChange,
    getActiveError,
    getCombinedError,
    handleSkillChange,
    handleStudyChange,
    setSaveSuccess,
    handlePasswordChangeWithValidation,
    handleSavePassword,
    handleCancelPasswoord,
    getCombinedPasswordError,
  }), [
    isEditing,
    activeSection,
    formData,
    initialFormData,
    errors,
    passwordData,
    passwordErrors,
    saveSuccess,
    fieldLabels,
    currentRole,
    handleEdit,
    handleSaveWithValidation,
    handleCancel,
    handleChange,
    handleSelectChange,
    getActiveError,
    getCombinedError,
    handleSkillChange,
    handleStudyChange,
    setSaveSuccess,
    handlePasswordChangeWithValidation,
    handleSavePassword,
    handleCancelPasswoord,
    getCombinedPasswordError
  ])

  return (
    <SettingsContext.Provider value={contextValue} >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings debe ser usado dentro de un SettingsProvider')
  }
  return context
}