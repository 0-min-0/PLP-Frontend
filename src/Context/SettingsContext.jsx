import { createContext, useState, useContext, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { optionTown, optionGenre, optionId, categories } from '../Utils/options'

const USER_DATA_STORAGE_KEY = 'plp_user_data'

const SettingsContext = createContext()

export const SettingsProvider = ({ children, initialUser }) => {
  // Nombre por defecto basado en la ruta
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
  const [currentRole, setCurrentRole] = useState((initialUser?.role || 'contratante').toLowerCase())
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
    occupation: '',
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
      occupation: 'Ocupación',
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
    occupation: 'Ocupación',
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
        occupation: currentRole === 'Contratista' ? userData.occupationJobSeeker || '' : '',
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
  const validatePhone = useCallback((phone) => {
    if (!phone) return 'ⓘ El número de teléfono es requerido'
    if (!/^\d+$/.test(phone)) return 'ⓘ El número de teléfono solo puede contener dígitos (0-9)'
    if (phone.length !== 10) return 'ⓘ El número de teléfono debe contener 10 dígitos'
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
  

const validateFieldInRealTime = useCallback((name, value) => {
  // Validaciones comunes
  if (name === 'phone' || name === 'phoneCompany' || name === 'phoneSec' || name === 'phoneSecCompany') {
    return value ? validatePhone(value) : null
  }
  if (name === 'email' || name === 'emailCompany') return validateEmail(value)
  if (name === 'documentNumber') return validateDocumentNumber(value)
  if (name.startsWith('skill')) return validateSkill(value, name)
  if (name.startsWith('study')) return validateStudy(value, name)
  
  // Validaciones específicas por rol
  if (currentRole === 'Empresa') {
    if (name === 'nit') return validateNit(value)
    if (name === 'name') return validateCompanyName(value)
    if (name === 'category') return validateCategory(value)
    if (name === 'webSite') return validateWebsite(value)
  }
  
  // Validaciones de campos requeridos
  if (['documentType', 'town', 'desc', 'name', 'genre', 'occupation'].includes(name)) {
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

  const validatePersonalFields = () => {
    const newErrors = {}

    // Validaciones comunes a todos los roles
    const commonValidations = {
      documentType: validateRequiredField(formData.documentType, 'documentType'),
      documentNumber: validateDocumentNumber(formData.documentNumber),
      phone: validatePhone(formData.phone),
      email: validateEmail(formData.email),
      town: validateRequiredField(formData.town, 'town'),
      desc: validateRequiredField(formData.desc, 'desc'),
      genre: validateRequiredField(formData.genre, 'genre')
    }

    // Aplicar validaciones comunes
    Object.entries(commonValidations).forEach(([field, error]) => {
      if (error) newErrors[field] = error
    })

    // Validaciones específicas por rol
    if (currentRole === 'Contratante') {
      const contratanteValidations = {
        name: validateRequiredField(formData.name, 'name'),
        phoneSec: formData.phoneSec ? validatePhone(formData.phoneSec) : null
      }
      Object.entries(contratanteValidations).forEach(([field, error]) => {
        if (error) newErrors[field] = error
      })
    }
    else if (currentRole === 'Contratista') {
      const contratistaValidations = {
        name: validateRequiredField(formData.name, 'name'),
        occupation: validateRequiredField(formData.occupation, 'occupation'),
        phoneSec: formData.phoneSec ? validatePhone(formData.phoneSec) : null
      }
      Object.entries(contratistaValidations).forEach(([field, error]) => {
        if (error) newErrors[field] = error
      })
    }
    else if (currentRole === 'Empresa') {
      const empresaValidations = {
        name: validateCompanyName(formData.name),
        nit: validateNit(formData.nit),
        category: validateCategory(formData.category),
        webSite: validateWebsite(formData.webSite),
        phoneSec: formData.phoneSec ? validatePhone(formData.phoneSec) : null
      }
      Object.entries(empresaValidations).forEach(([field, error]) => {
        if (error) newErrors[field] = error
      })
    }

    setErrors(newErrors)
    return newErrors
  }

  //Validar habilidades y estudios
  const validateSkills = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    ['skill1', 'skill2'].forEach(field => {
      const error = validateSkill(formData[field], field);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateSkill]);

  const validateStudies = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    ['study1', 'study2'].forEach(field => {
      const error = validateStudy(formData[field], field);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateStudy]);

  //Validar contraseña
  const validatePassword = useCallback(() => {
    const newErrors = {}
    let isValid = true

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = 'ⓘ La contraseña actual es requerida'
      isValid = false
    }

    const passwordError = validatePasswordStrength(passwordData.newPassword)
    if (passwordError) {
      newErrors.newPassword = passwordError
      isValid = false
    }

    const confirmError = validateConfirmPassword(passwordData.newPassword, passwordData.confirmPassword)
    if (confirmError) {
      newErrors.confirmPassword = confirmError
      isValid = false
    }

    setPasswordErrors(newErrors)
    return isValid
  }, [passwordData, validatePasswordStrength, validateConfirmPassword])

  //-----------------------------------------MANEJO DE EVENTOS--------------------------------------//

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

  const handleEdit = useCallback((section) => {
    setActiveSection(section)
    setIsEditing(true)
  }, [])

  const handleCancel = useCallback(() => {
    if (userData) {
      setFormData({
        documentType: userData.documentType || '',
        documentNumber: userData.documentNumber || '',
        occupation: currentRole === 'Contratista' ? userData.occupationJobSeeker || '' : '',
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
        category: currentRole === 'Empresa' ? userData.category || '' :
          currentRole === 'Contratista' ? userData.category || '' : '',
        webSite: currentRole === 'Empresa' ? userData.webSite || '' : ''
      })
    }
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    setErrors({})
    setPasswordErrors({})
    setIsEditing(false)
  }, [activeSection, userData, currentRole])

  const handleCancelWithReset = useCallback(() => {
    handleCancel()
    setLocalPasswordErrors({
      newPassword: '',
      confirmPassword: ''
    })
  }, [handleCancel])

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))

    const error = validateSkill(value, name)
    setRealTimeErrors(prev => ({ ...prev, [name]: error }))

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleStudyChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))

    const error = validateStudy(value, name)
    setRealTimeErrors(prev => ({ ...prev, [name]: error }))

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const getCombinedError = (fieldName) => {
    return realTimeErrors[fieldName] || errors[fieldName] || null
  }

  //-----------------------------------------MANEJO DE GUARDADO-------------------------------------//
  const handleSave = useCallback(() => {
    if (!user) return

    const updatedUser = { ...user }

    // Guardar campos comunes a todos
    updatedUser.documentType = formData.documentType
    updatedUser.documentNumber = formData.documentNumber
    updatedUser.notificationsEnabled = formData.notificationsEnabled
    updatedUser.theme = formData.theme

    // Guardar según sección activa y rol
    if (activeSection === 'personal') {
      switch (currentRole) {
        case 'Contratista':
          Object.assign(updatedUser, {
            nameJobSeeker: formData.name,
            occupationJobSeeker: formData.occupation,
            phoneJobSeeker: formData.phone,
            phoneSecJobSeeker: formData.phoneSec,
            emailJobSeeker: formData.email,
            townJobSeeker: formData.town,
            descJobSeeker: formData.desc,
            genreJobSeeker: formData.genre,
            category: formData.category,
          })
          break
        case 'Contratante':
          Object.assign(updatedUser, {
            nameEmployer: formData.name,
            phoneEmployer: formData.phone,
            phoneSecEmployer: formData.phoneSec,
            emailEmployer: formData.email,
            townEmployer: formData.town,
            descEmployer: formData.desc,
            genreEmployer: formData.genre,
          })
          break
        case 'Empresa':
          Object.assign(updatedUser, {
            companyName: formData.name,
            nit: formData.nit,
            category: formData.category,
            phoneCompany: formData.phone,
            phoneSecCompany: formData.phoneSec,
            emailCompany: formData.email,
            townCompany: formData.town,
            descCompany: formData.desc,
            genreCompany: formData.genre,
            webSite: formData.webSite,
          })
          break
      }
    }

    // Guardar habilidades (solo para contratista)
    if (activeSection === 'skills' && currentRole === 'Contratista') {
      Object.assign(updatedUser, {
        skill1JobSeeker: formData.skill1,
        skill2JobSeeker: formData.skill2,
        skill3JobSeeker: formData.skill3,
        skill4JobSeeker: formData.skill4,
      })
    }

    // Guardar estudios (solo para contratista)
    if (activeSection === 'studies' && currentRole === 'Contratista') {
      Object.assign(updatedUser, {
        study1JobSeeker: formData.study1,
        study2JobSeeker: formData.study2,
        study3JobSeeker: formData.study3,
        study4JobSeeker: formData.study4,
      })
    }

    setUser(updatedUser)
    localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(updatedUser))
    setIsEditing(false)
  }, [activeSection, formData, user, currentRole])


  const handleSaveWithValidation = useCallback(() => {
    let isValid = true
    let validationErrors = {}

    switch (activeSection) {
      case 'personal':
        validationErrors = validatePersonalFields()
        isValid = Object.keys(validationErrors).length === 0

        break

      case 'skills':
        isValid = currentRole === 'Contratista' ? validateSkills() : true
        break

      case 'studies':
        isValid = currentRole === 'Contratista' ? validateStudies() : true
        break

      case 'security':
        isValid = validatePassword()
        break
    }

    if (isValid) {
      handleSave()
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 3000)
    } else {
      const firstErrorField = Object.keys(validationErrors).find((key) => validationErrors[key])
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`)
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [
    activeSection,
    formData,
    handleSave,
    validateSkills,
    validateStudies,
    validatePassword,
    validatePersonalFields
  ])


  //-----------------------------------------FUNCIONES AUXILIARES-----------------------------------//

  const getActiveError = useCallback((field) => {
    return errors[field] || realTimeErrors[field] || null
  }, [errors, realTimeErrors])

  const getCombinedPasswordError = useCallback((field) => {
    return passwordErrors[field] || localPasswordErrors[field] || null
  }, [passwordErrors, localPasswordErrors])

  //-----------------------------------------CONTEXTO-----------------------------------------------//
  const currentRoleName = getCurrentRoleFromPath()

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