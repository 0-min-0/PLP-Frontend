import { createContext, useState, useContext, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { optionTown, optionGenre, optionId } from '../Utils/options';

const AVATAR_STORAGE_KEY = 'plp_user_avatar'
const USER_DATA_STORAGE_KEY = 'plp_user_data'

const SettingsContext = createContext()

export const SettingsProvider = ({ children, initialUser }) => {

  //Nombre por defecto basado en la ruta

  const location = useLocation()

  const getCurrentRoleFromPath = () => {
    const path = location.pathname
    if (path.includes('configuraciones-contratista')) return 'contratista'
    if (path.includes('configuraciones-empresa')) return 'empresa'
    if (path.includes('configuraciones-contratante')) return 'contratante'
    return ''
  }

  //-----------------------------------------------ESTADOS--------------------------------------------//

  // Estados principales
  const [user, setUser] = useState(initialUser)
  const [currentRole, setCurrentRole] = useState(initialUser?.role || 'contratante')
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [errors, setErrors] = useState({})
  const [passwordErrors, setPasswordErrors] = useState({})
  const [activeSection, setActiveSection] = useState('personal')
  const [realTimeErrors, setRealTimeErrors] = useState({})
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [localPasswordErrors, setLocalPasswordErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  })

  // Datos del formulario
  const [formData, setFormData] = useState({
    documentType: '',
    documentNumber: '',
    name: '',
    phone: '',
    phoneSec: '',
    email: '',
    desc: '',
    town: '',
    genre: '',
    notificationsEnabled: false,
    theme: 'system',
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    study1: '',
    study2: '',
    study3: '',
    study4: '',
    // Campos específicos para empresa
    nit: '',
    category: '',
    webSite: ''
  })

  // Datos de contraseña
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [userData, setUserData] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(USER_DATA_STORAGE_KEY)
      return savedData ? JSON.parse(savedData) : initialUser || null
    }
    return initialUser || null
  })

  // Configuración de roles
  const [rolesConfig, setRolesConfig] = useState({
    contratista: {
      avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      nameKey: 'nameJobSeeker',
      defaultName: 'Contratista',
      avatarOptions: [
        'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
        'https://cdn-icons-png.flaticon.com/512/921/921071.png',
        'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
        'https://cdn-icons-png.flaticon.com/512/3667/3667339.png',
        'https://cdn-icons-png.flaticon.com/512/3048/3048127.png'
      ]
    },
    contratante: {
      avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
      nameKey: 'nameEmployer',
      defaultName: 'Contratante',
      avatarOptions: [
        'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
        'https://cdn-icons-png.flaticon.com/512/921/921071.png',
        'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
        'https://cdn-icons-png.flaticon.com/512/3667/3667339.png',
        'https://cdn-icons-png.flaticon.com/512/3048/3048127.png'
      ],
    },
    empresa: {
      avatar: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
      nameKey: 'companyName',
      defaultName: 'Empresa',
      avatarOptions: [
        'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
        'https://cdn-icons-png.flaticon.com/512/921/921071.png',
        'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
        'https://cdn-icons-png.flaticon.com/512/3667/3667339.png',
        'https://cdn-icons-png.flaticon.com/512/3048/3048127.png'
      ],
    }
  })

  // Campos por rol
  const roleFields = {

    Contratante: {
      documentType: 'Tipo de documento',
      documentNumber: 'Número de documento',
      name: 'Nombre completo',
      phone: 'Teléfono principal',
      phoneSec: 'Teléfono secundario',
      email: 'Correo electrónico',
      desc: 'Descripción',
      town: 'Municipio',
      genre: 'Género'
    },
    Contratista: {
      documentType: 'Tipo de documento',
      documentNumber: 'Número de documento',
      name: 'Nombre completo',
      phone: 'Teléfono principal',
      phoneSec: 'Teléfono secundario',
      email: 'Correo electrónico',
      desc: 'Descripción',
      town: 'Municipio',
      genre: 'Género',
      skills: 'Habilidades',
      studies: 'Estudios'
    },
    Empresa: {
      documentType: 'Tipo de documento',
      documentNumber: 'NIT',
      name: 'Nombre de la empresa',
      phone: 'Teléfono principal',
      phoneSec: 'Teléfono secundario',
      email: 'Correo electrónico',
      desc: 'Descripción',
      town: 'Municipio',
      genre: 'Tipo de empresa',
      nit: 'NIT',
      category: 'Categoría',
      webSite: 'Sitio web'
    }
  }

  const fieldLabels = {
    documentType: 'Tipo de documento',
    documentNumber: 'Número de documento',
    phone: 'Teléfono principal',
    phoneSec: 'Teléfono secundario',
    email: 'Correo electrónico',
    town: 'Ubicación',
    desc: 'Descripción',
    name: 'Nombre',
    genre: 'Género',
    nit: 'NIT',
    category: 'Sector',
    webSite: 'Sitio web',
    skill1: 'Habilidad 1',
    skill2: 'Habilidad 2',
    skill3: 'Habilidad 3',
    skill4: 'Habilidad 4',
    study1: 'Estudio 1',
    study2: 'Estudio 2',
    study3: 'Estudio 3',
    study4: 'Estudio 4',
    currentPassword: 'Contraseña actual',
    newPassword: 'Nueva contraseña',
    confirmPassword: 'Confirmar contraseña'
  };

  //--------------------------------------------EFECTOS--------------------------------------------//
  // Inicializar datos del formulario
  useEffect(() => {
    if (userData) {
      const data = {
        documentType: userData.documentType || '',
        documentNumber: userData.documentNumber || '',
        name: currentRole === 'Contratante' ? userData.nameEmployer || '' :
          currentRole === 'Contratista' ? userData.nameJobSeeker || '' :
            currentRole === 'Empresa' ? userData.companyName || '' :
              '',
        phone: currentRole === 'Contratante' ? userData.phoneEmployer || '' :
          currentRole === 'Contratista' ? userData.phoneJobSeeker || '' :
            currentRole === 'Empresa' ? userData.phoneCompany || '' :
              '',
        phoneSec: currentRole === 'Contratante' ? userData.phoneSecEmployer || '' :
          currentRole === 'Contratista' ? userData.phoneSecJobSeeker || '' :
            currentRole === 'Empresa' ? userData.phoneSecCompany || '' :
              '',
        email: currentRole === 'Contratante' ? userData.emailEmployer || '' :
          currentRole === 'Contratista' ? userData.emailJobSeeker || '' :
            currentRole === 'Empresa' ? userData.emailCompany || '' :
              '',
        desc: currentRole === 'Contratante' ? userData.descEmployer || '' :
          currentRole === 'Contratista' ? userData.descJobSeeker || '' :
            currentRole === 'Empresa' ? userData.descCompany || '' :
              '',
        town: currentRole === 'Contratante' ? userData.townEmployer || '' :
          currentRole === 'Contratista' ? userData.townJobSeeker || '' :
            currentRole === 'Empresa' ? userData.townCompany || '' :
              '',
        genre: currentRole === 'Contratante' ? userData.genreEmployer || '' :
          currentRole === 'Contratista' ? userData.genreJobSeeker || '' :
            currentRole === 'Empresa' ? userData.genreCompany || '' :
              '',
        notificationsEnabled: userData.notificationsEnabled || false,
        theme: userData.theme || 'system',
        skill1: currentRole === 'Contratista' ? userData.skill1JobSeeker || '' : '',
        skill2: currentRole === 'Contratista' ? userData.skill2JobSeeker || '' : '',
        skill3: currentRole === 'Contratista' ? userData.skill3JobSeeker || '' : '',
        skill4: currentRole === 'Contratista' ? userData.skill4JobSeeker || '' : '',
        study1: currentRole === 'Contratista' ? userData.study1JobSeeker || '' : '',
        study2: currentRole === 'Contratista' ? userData.study2JobSeeker || '' : '',
        study3: currentRole === 'Contratista' ? userData.study3JobSeeker || '' : '',
        study4: currentRole === 'Contratista' ? userData.study4JobSeeker || '' : '',
        nit: currentRole === 'Empresa' ? userData.nit || '' : '',
        category: currentRole === 'Empresa' ? userData.category || '' : '',
        webSite: currentRole === 'Empresa' ? userData.webSite || '' : ''
      }
      setFormData(data)
    }
  }, [userData, currentRole])

  // Persistencia de datos
  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(user))
        setUserData(user)
      } catch (error) {
        console.error('Error al guardar en localStorage:', error)
      }
    }
  }, [user])

  // Actualizar rol cuando cambia userData
  useEffect(() => {
    if (userData?.role) {
      setCurrentRole(userData.role)
    }
  }, [userData])

  //--------------------------------------------VALIDACIONES-----------------------------------------//
  // Validación de teléfono
  const validatePhone = useCallback((phone) => {
    if (!phone) return 'ⓘ El número de teléfono es requerido'
    if (!/^\d+$/.test(phone)) return 'ⓘ El número de teléfono solo puede contener dígitos (0-9)'
    if (phone.length !== 10) return 'ⓘ El número de teléfono debe contener 10 dígitos'
    return null
  }, [])

  // Validación de email
  const validateEmail = useCallback((email) => {
    if (!email) return 'ⓘ El correo electrónico es requerido'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'ⓘ Ingresa un correo válido (ej. correo@ejemplo.com)'
    return null
  }, [])

  // Validación de número de documento
  const validateDocumentNumber = useCallback((docNumber) => {
    if (!docNumber) return 'ⓘ El número de documento es requerido'
    if (docNumber.length < 6) return 'ⓘ El número de documento debe tener al menos 6 caracteres'
    if (docNumber.length > 15) return 'ⓘ El número de documento debe tener como máximo 15 caracteres'
    if (!/^[A-Z0-9]+$/.test(docNumber)) return 'ⓘ Solo se permiten dígitos (0-9) y letras mayúsculas (A-Z)'
    return null
  }, [])

  // Validación de NIT
  const validateNit = useCallback((nit) => {
    if (!nit) return 'ⓘ El NIT es requerido'
    if (!/^\d{9}(-\d)?$/.test(nit)) return 'ⓘ El NIT debe tener el formato correcto (ej. 123456789-1)'
    return null
  }, [])

  // Validación de nombre de empresa
  const validateCompanyName = useCallback((name) => {
    if (!name) return 'ⓘ El nombre de la empresa es requerido'
    if (name.length < 3) return 'ⓘ El nombre debe tener al menos 3 caracteres'
    return null
  }, [])

  // Validación de categoría
  const validateCategory = useCallback((category) => {
    if (!category) return 'ⓘ La categoría es requerida'
    return null
  }, [])

  // Validación de sitio web
  const validateWebsite = useCallback((url) => {
    if (url && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url)) {
      return 'ⓘ Ingresa una URL válida (ej. https://ejemplo.com)'
    }
    return null
  }, [])

  // Validación de habilidades
  const validateSkill = useCallback((value, fieldName) => {
    if (['skill1', 'skill2'].includes(fieldName)) {
      if (!value) return 'ⓘ Esta habilidad es requerida'
      if (value.length < 5) return 'ⓘ La habilidad debe tener al menos 5 caracteres'
    }
    return null
  }, [])

  // Validación de estudios
  const validateStudy = useCallback((value, fieldName) => {
    if (['study1', 'study2'].includes(fieldName)) {
      if (!value) return 'ⓘ Este estudio es requerido'
      if (value.length < 5) return 'ⓘ El estudio debe tener al menos 5 caracteres'
    }
    return null
  }, [])

  // Validación de campo requerido genérico
  const validateRequiredField = useCallback((value, fieldName) => {
    if (!value) {
      const readableName = fieldLabels[fieldName] || fieldName
      return `ⓘ El campo ${readableName} es requerido`
    }
    return null
  }, [])

  // Validación de fortaleza de contraseña
  const validatePasswordStrength = useCallback((password) => {
    if (!password) return 'ⓘ La contraseña es requerida'
    if (password.length < 8) return 'ⓘ La contraseña debe tener al menos 8 caracteres'
    if (!/\d/.test(password)) return 'ⓘ La contraseña debe contener al menos un número'
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return 'ⓘ La contraseña debe contener al menos un carácter especial'
    if (!/[A-Z]/.test(password)) return 'ⓘ La contraseña debe contener al menos una mayúscula'
    return ''
  }, [])

  // Validación de confirmación de contraseña
  const validateConfirmPassword = useCallback((password, confirmPassword) => {
    if (!confirmPassword) return 'ⓘ Por favor confirma tu nueva contraseña'
    if (password !== confirmPassword) return 'ⓘ Las contraseñas no coinciden'
    return ''
  }, [])

  // Validación en tiempo real
  const validateFieldInRealTime = useCallback((name, value) => {
    if (name === 'phone' || name === 'phoneCompany') return validatePhone(value)
    if (name === 'phoneSec' || name === 'phoneSecCompany') return validatePhone(value)
    if (name === 'email' || name === 'emailCompany') return validateEmail(value)
    if (name === 'nit') return validateNit(value)
    if (name === 'name' && currentRole === 'Empresa') return validateCompanyName(value)
    if (name === 'category') return validateCategory(value)
    if (name === 'webSite') return validateWebsite(value)
    if (name === 'documentNumber') return validateDocumentNumber(value)
    if (name.startsWith('skill')) return validateSkill(value, name)
    if (name.startsWith('study')) return validateStudy(value, name)
    if (['documentType', 'town', 'desc', 'name', 'genre'].includes(name)) {
      return validateRequiredField(value, name)
    }
    return null
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
    currentRole
  ])

  //-----------------------------------------VALIDACIONES POR SECCIÓN--------------------------------//
  // Validación de campos personales
  const validatePersonalFields = useCallback(() => {
    const newErrors = {}
    let isValid = true

    // Campos requeridos básicos para todos los roles
    const requiredFields = [
      'documentType',
      'documentNumber',
      'name',
      'phone',
      'email',
      'town',
      'genre',
      'desc',
      'nit',
      'category',
      'webSite'
    ]

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `ⓘ El campo ${fieldLabels[field] || field} es requerido`
        isValid = false
      }
    })

    // Validaciones específicas por rol
    if (currentRole === 'Empresa') {
      if (!formData.nit) {
        newErrors.nit = 'ⓘ El NIT es requerido'
        isValid = false
      } else if (!/^\d{9}(-\d)?$/.test(formData.nit)) {
        newErrors.nit = 'ⓘ El NIT debe tener el formato correcto (ej. 123456789-1)'
        isValid = false
      }

      if (!formData.category) {
        newErrors.category = 'ⓘ La categoría es requerida'
        isValid = false
      }
    }

    // Validaciones comunes
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'ⓘ El teléfono debe tener 10 dígitos'
      isValid = false
    }

    if (formData.phoneSec && !/^\d{10}$/.test(formData.phoneSec)) {
      newErrors.phoneSec = 'ⓘ El teléfono secundario debe tener 10 dígitos'
      isValid = false
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'ⓘ Ingresa un correo electrónico válido'
      isValid = false
    }

    if (formData.documentNumber && (formData.documentNumber.length < 6 || formData.documentNumber.length > 15)) {
      newErrors.documentNumber = 'ⓘ El documento debe tener entre 6 y 15 caracteres'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }, [formData, currentRole])

  // Validación de habilidades
  const validateSkills = useCallback(() => {
    const newErrors = {}
    let isValid = true

    ['skill1', 'skill2'].forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'ⓘ Esta habilidad es requerida'
        isValid = false
      } else if (formData[field].length < 2) {
        newErrors[field] = 'ⓘ La habilidad debe tener al menos 2 caracteres'
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [formData])

  // Validación de estudios
  const validateStudies = useCallback(() => {
    const newErrors = {}
    let isValid = true

    ['study1', 'study2'].forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'ⓘ Este estudio es requerido'
        isValid = false
      } else if (formData[field].length < 5) {
        newErrors[field] = 'ⓘ El estudio debe tener al menos 5 caracteres'
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [formData])

  // Validación de contraseña
  const validatePassword = useCallback(() => {
    const newErrors = {}
    let isValid = true

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = 'ⓘ La contraseña actual es requerida'
      isValid = false
    }

    if (!passwordData.newPassword) {
      newErrors.newPassword = 'ⓘ La nueva contraseña es requerida'
      isValid = false
    } else {
      const passwordError = validatePasswordStrength(passwordData.newPassword)
      if (passwordError) {
        newErrors.newPassword = passwordError
        isValid = false
      }
    }

    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = 'ⓘ Por favor confirma tu nueva contraseña'
      isValid = false
    } else {
      const confirmError = validateConfirmPassword(passwordData.newPassword, passwordData.confirmPassword)
      if (confirmError) {
        newErrors.confirmPassword = confirmError
        isValid = false
      }
    }

    setPasswordErrors(newErrors)
    return isValid
  }, [passwordData, validatePasswordStrength, validateConfirmPassword])

  //-----------------------------------------MANEJO DE EVENTOS--------------------------------------//

  // Manejar cambios en el formulario
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    const actualValue = type === 'checkbox' ? checked : value
    setFormData(prev => ({ ...prev, [name]: actualValue }))
    setRealTimeErrors(prev => ({
      ...prev,
      [name]: validateFieldInRealTime(name, actualValue)
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }, [errors, validateFieldInRealTime])

  // Manejar cambios en contraseña
  const handlePasswordChange = useCallback((e) => {
    const { name, value } = e.target
    setPasswordData(prev => ({ ...prev, [name]: value }))

    let error = null
    if (name === 'newPassword') {
      error = validatePasswordStrength(value)
      setLocalPasswordErrors(prev => ({ ...prev, newPassword: error || '' }))
    } else if (name === 'confirmPassword') {
      error = validateConfirmPassword(passwordData.newPassword, value)
      setLocalPasswordErrors(prev => ({ ...prev, confirmPassword: error || '' }))
    }

    setPasswordErrors(prev => ({ ...prev, [name]: error }))
  }, [passwordData.newPassword, validatePasswordStrength, validateConfirmPassword])

  // Manejar cambios en selects
  const handleSelectChange = useCallback((name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }, [errors])

  // Manejar edición
  const handleEdit = useCallback((section) => {
    setActiveSection(section)
    setIsEditing(true)
  }, [])

  // Manejar cancelación
  const handleCancel = useCallback(() => {
    if (activeSection === 'personal' && userData) {
      setFormData({
        documentType: userData.documentType || '',
        documentNumber: userData.documentNumber || '',
        name: currentRole === 'Contratante' ? userData.nameEmployer || '' :
          currentRole === 'Contratista' ? userData.nameJobSeeker || '' :
            currentRole === 'Empresa' ? userData.companyName || '' :
              '',
        phone: currentRole === 'Contratante' ? userData.phoneEmployer || '' :
          currentRole === 'Contratista' ? userData.phoneJobSeeker || '' :
            currentRole === 'Empresa' ? userData.phoneCompany || '' :
              '',
        phoneSec: currentRole === 'Contratante' ? userData.phoneSecEmployer || '' :
          currentRole === 'Contratista' ? userData.phoneSecJobSeeker || '' :
            currentRole === 'Empresa' ? userData.phoneSecCompany || '' :
              '',
        email: currentRole === 'Contratante' ? userData.emailEmployer || '' :
          currentRole === 'Contratista' ? userData.emailJobSeeker || '' :
            currentRole === 'Empresa' ? userData.emailCompany || '' :
              '',
        desc: currentRole === 'Contratante' ? userData.descEmployer || '' :
          currentRole === 'Contratista' ? userData.descJobSeeker || '' :
            currentRole === 'Empresa' ? userData.descCompany || '' :
              '',
        town: currentRole === 'Contratante' ? userData.townEmployer || '' :
          currentRole === 'Contratista' ? userData.townJobSeeker || '' :
            currentRole === 'Empresa' ? userData.townCompany || '' :
              '',
        genre: currentRole === 'Contratante' ? userData.genreEmployer || '' :
          currentRole === 'Contratista' ? userData.genreJobSeeker || '' :
            currentRole === 'Empresa' ? userData.genreCompany || '' :
              '',
        notificationsEnabled: userData.notificationsEnabled || false,
        theme: userData.theme || 'system',
        skill1: currentRole === 'Contratista' ? userData.skill1JobSeeker || '' : '',
        skill2: currentRole === 'Contratista' ? userData.skill2JobSeeker || '' : '',
        skill3: currentRole === 'Contratista' ? userData.skill3JobSeeker || '' : '',
        skill4: currentRole === 'Contratista' ? userData.skill4JobSeeker || '' : '',
        study1: currentRole === 'Contratista' ? userData.study1JobSeeker || '' : '',
        study2: currentRole === 'Contratista' ? userData.study2JobSeeker || '' : '',
        study3: currentRole === 'Contratista' ? userData.study3JobSeeker || '' : '',
        study4: currentRole === 'Contratista' ? userData.study4JobSeeker || '' : '',
        nit: currentRole === 'Empresa' ? userData.nit || '' : '',
        category: currentRole === 'Empresa' ? userData.category || '' : '',
        webSite: currentRole === 'Empresa' ? userData.webSite || '' : ''
      })
    } else if (activeSection === 'security') {
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
    }
    setErrors({})
    setPasswordErrors({})
    setIsEditing(false)
  }, [activeSection, userData, currentRole])

  // Manejar cancelación con reset de errores locales
  const handleCancelWithReset = useCallback(() => {
    handleCancel()
    setLocalPasswordErrors({
      newPassword: '',
      confirmPassword: ''
    })
  }, [handleCancel])

  //Validación en tiempo real para campos de habilidades y estudios
  const handleSkillChange = (e) => {
    const { name, value } = e.target
    handleChange(e)
    if (name === 'skill1' || name === 'skill2') {
      validateSkill(value, name)
    }
  }

  const handleStudyChange = (e) => {
    const { name, value } = e.target
    handleChange(e)
    if (name === 'study1' || name === 'study2') {
      validateStudy(value, name)
    }
  }

  const getCombinedError = (fieldName) => {
    return realTimeErrors[fieldName] || getActiveError(fieldName)
  }


  //-----------------------------------------MANEJO DE GUARDADO-------------------------------------//
  // Función de guardado principal
  const handleSave = useCallback(() => {
    if (!user) return

    const updatedUser = { ...user }

    // Actualizar datos según la sección activa
    switch (activeSection) {
      case 'personal':
        updatedUser.documentType = formData.documentType
        updatedUser.documentNumber = formData.documentNumber
        updatedUser[`${currentRole === 'Contratante' ? 'phoneEmployer' :
          currentRole === 'Contratista' ? 'phoneJobSeeker' : 'phoneCompany'}`] = formData.phone
        updatedUser[`${currentRole === 'Contratante' ? 'phoneSecEmployer' :
          currentRole === 'Contratista' ? 'phoneSecJobSeeker' : 'phoneSecCompany'}`] = formData.phoneSec || null
        updatedUser[`${currentRole === 'Contratante' ? 'emailEmployer' :
          currentRole === 'Contratista' ? 'emailJobSeeker' : 'emailCompany'}`] = formData.email
        updatedUser[`${currentRole === 'Contratante' ? 'townEmployer' :
          currentRole === 'Contratista' ? 'townJobSeeker' : 'townCompany'}`] = formData.town
        updatedUser[`${currentRole === 'Contratante' ? 'descEmployer' :
          currentRole === 'Contratista' ? 'descJobSeeker' : 'descCompany'}`] = formData.desc || ''
        updatedUser[`${currentRole === 'Contratante' ? 'genreEmployer' :
          currentRole === 'Contratista' ? 'genreJobSeeker' : 'genreCompany'}`] = formData.genre || ''
        updatedUser.notificationsEnabled = formData.notificationsEnabled
        updatedUser.theme = formData.theme

        // Actualizar nombre según el rol
        if (currentRole === 'Contratante') {
          updatedUser.nameEmployer = formData.name
        } else if (currentRole === 'Contratista') {
          updatedUser.nameJobSeeker = formData.name
        } else if (currentRole === 'Empresa') {
          updatedUser.companyName = formData.name
          updatedUser.nit = formData.nit
          updatedUser.category = formData.category
          updatedUser.webSite = formData.webSite
        }
        break

      case 'skills':
        if (currentRole === 'Contratista') {
          updatedUser.skill1JobSeeker = formData.skill1
          updatedUser.skill2JobSeeker = formData.skill2
          updatedUser.skill3JobSeeker = formData.skill3
          updatedUser.skill4JobSeeker = formData.skill4
        }
        break

      case 'studies':
        if (currentRole === 'Contratista') {
          updatedUser.study1JobSeeker = formData.study1
          updatedUser.study2JobSeeker = formData.study2
          updatedUser.study3JobSeeker = formData.study3
          updatedUser.study4JobSeeker = formData.study4
        }
        break

      case 'security':
        // Aquí iría la lógica para actualizar la contraseña
        break
    }

    setUser(updatedUser)
    localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(updatedUser))
    setIsEditing(false)
  }, [activeSection, formData, user, currentRole])

  // Función de guardado con validación
  const handleSaveWithValidation = useCallback(() => {
    let isValid = false

    switch (activeSection) {
      case 'personal':
        isValid = validatePersonalFields()
        break
      case 'skills':
        isValid = validateSkills()
        break
      case 'studies':
        isValid = validateStudies()
        break
      case 'security':
        isValid = validatePassword()
        break
      default:
        isValid = true
    }

    if (isValid) {
      handleSave()
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 3000)
    } else {
      // Enfocar el primer campo con error
      const errorObject = activeSection === 'security' ? passwordErrors : errors
      const firstErrorField = Object.keys(errorObject).find(key => errorObject[key])
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`)
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [activeSection, validatePersonalFields, validateSkills, validateStudies, validatePassword, handleSave, passwordErrors, errors])

  //-----------------------------------------FUNCIONES AUXILIARES-----------------------------------//

  // Obtener error activo
  const getActiveError = useCallback((field) => {
    return errors[field] || realTimeErrors[field] || null
  }, [errors, realTimeErrors])

  // Combinar errores de contraseña
  const getCombinedPasswordError = useCallback((field) => {
    return passwordErrors[field] || localPasswordErrors[field] || null
  }, [passwordErrors, localPasswordErrors])

  // Manejar cambio de avatar
  const handleAvatarChange = (newAvatar) => {
    setRolesConfig(prev => ({
      ...prev,
      [currentRole]: {
        ...prev[currentRole],
        avatar: newAvatar
      }
    }))
    localStorage.setItem(AVATAR_STORAGE_KEY, newAvatar)
  }

  // Manejar cambio de nombre
  const roleConfig = {
    Contratista: { nameKey: 'nameJobSeeker', default: 'Usuario' },
    Contratante: { nameKey: 'nameEmployer', default: 'Usuario' },
    Empresa: { nameKey: 'companyName', default: 'Usuario' }
  }

 const handleNameChange = (newName) => {
  if (!newName || typeof newName !== 'string') return
  
  const updatedUser = {
    ...user,
    [currentRole === 'Contratista' ? 'nameJobSeeker' : 
     currentRole === 'Contratante' ? 'nameEmployer' : 
     'companyName']: newName.trim()
  }
  
  setUser(updatedUser)
  localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(updatedUser))
}


  //-----------------------------------------CONTEXTO-----------------------------------------------//

  const currentRoleName = getCurrentRoleFromPath()
  const currentConfig = rolesConfig[currentRole] || rolesConfig.user
  const userName = user?.[currentConfig.nameKey] || currentConfig.defaultName
  const userAvatar = currentConfig.avatar
  const avatarOptions = currentConfig.avatarOptions

  const contextValue = {
    user,
    currentRole,
    currentRoleName,
    formData,
    errors,
    passwordData,
    passwordErrors,
    isEditing,
    isEditingName,
    activeSection,
    roleFields,
    userData,
    userAvatar,
    userName,
    avatarOptions,
    saveSuccess,
    fieldLabels,
    getActiveError,
    handleChange,
    handlePasswordChange,
    handleSelectChange,
    handleEdit,
    handleSave,
    handleCancel,
    handleSkillChange,
    handleStudyChange,
    validateFields: validatePersonalFields,
    validatePasswordFields: validatePassword,
    setCurrentRole,
    setPasswordData,
    setPasswordErrors,
    validateSkill,
    validateStudy,
    handleAvatarChange,
    handleNameChange,
    setIsEditingName,
    optionTown,
    optionGenre,
    optionId,
    validatePasswordStrength,
    validateConfirmPassword,
    handlePasswordChangeWithValidation: handlePasswordChange,
    handleSaveWithValidation,
    handleCancelWithReset,
    getCombinedPasswordError,
    getCombinedError,
  }

  return (
    <SettingsContext.Provider value={contextValue}>
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