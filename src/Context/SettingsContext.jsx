<<<<<<< HEAD
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react'
import { optionTown, optionGenre, optionId } from '../Utils/options';

const AVATAR_STORAGE_KEY = 'plp_user_avatar'
const USER_DATA_STORAGE_KEY = 'plp_user_data'
=======
import React, { createContext, useState, useContext, useEffect } from 'react';

const AVATAR_STORAGE_KEY = 'plp_user_avatar';
const USER_DATA_STORAGE_KEY = 'plp_user_data';
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3

const SettingsContext = createContext();

export const SettingsProvider = ({ children, initialUser }) => {
<<<<<<< HEAD
  // Estados principales
  const [user, setUser] = useState(initialUser)
  const [currentRole, setCurrentRole] = useState(initialUser?.role || 'contratante')
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [errors, setErrors] = useState({})
  const [passwordErrors, setPasswordErrors] = useState({})
  const [activeSection, setActiveSection] = useState('personal')
  const [realTimeErrors, setRealTimeErrors] = useState({})

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
    study4: ''
  })

  // Datos de contraseña
=======
  //---------------------------------------------ESTADOS-------------------------------------------------//
  const [user, setUser] = useState(initialUser);
  const [tempUser, setTempUser] = useState({ ...initialUser });
  const [editMode, setEditMode] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

<<<<<<< HEAD
=======
  //---------------------------------------------VALIDACIONES MEJORADAS----------------------------------//

  const validateField = (name, value) => {
    const isEmployer = user?.role === 'contratante';
    
    if (!value) return `ⓘ Este campo es requerido`;
    
    switch (name) {
      case 'emailEmployer':
      case 'emailJobSeeker':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'ⓘ Ingrese un correo válido';
        break;
      case 'phoneEmployer':
      case 'phoneJobSeeker':
      case 'phoneSecEmployer':
      case 'phoneSecJobSeeker':
        if (!/^\d{10}$/.test(value)) return 'ⓘ Teléfono debe tener 10 dígitos';
        break;
      case 'documentNumber':
        if (!/^\d+$/.test(value)) return 'ⓘ Solo se permiten números';
        break;
      // Validaciones específicas para contratista
      case 'skill1':
      case 'skill2':
      case 'study1':
      case 'study2':
        if (!isEmployer && !value) return 'ⓘ Este campo es requerido';
        break;
    }
    return '';
  };

  const validateAllFields = () => {
    const isEmployer = user?.role === 'contratante';
    const errors = {};
    let isValid = true;

    const fieldsToValidate = isEmployer ? [
      'documentType', 'documentNumber', 'nameEmployer', 
      'phoneEmployer', 'emailEmployer', 'townEmployer', 'genreEmployer'
    ] : [
      'documentType', 'documentNumber', 'nameJobSeeker',
      'phoneJobSeeker', 'emailJobSeeker', 'townJobSeeker', 'genreJobSeeker',
      'skill1', 'skill2', 'study1', 'study2'
    ];

    fieldsToValidate.forEach(field => {
      const error = validateField(field, tempUser[field]);
      if (error) {
        errors[field] = error;
        isValid = false;
      }
    });

    setValidationErrors(errors);
    return isValid;
  };

  const validatePasswordStrength = (password) => {
    if (!password) return 'ⓘ La contraseña es requerida';
    const minLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);

    if (!minLength) return 'ⓘ La contraseña debe tener al menos 8 caracteres';
    if (!hasNumber) return 'ⓘ Debe contener al menos un número';
    if (!hasSpecialChar) return 'ⓘ Debe contener al menos un carácter especial';
    if (!hasUpperCase) return 'ⓘ Debe contener al menos una mayúscula';
    return '';
  };

  const validatePasswordFields = () => {
    const { currentPassword, newPassword, confirmPassword } = passwordData;
    const newErrors = {};
    let isValid = true;

    if (!currentPassword) {
      newErrors.currentPassword = 'ⓘ La contraseña actual es requerida';
      isValid = false;
    }

    const passwordError = validatePasswordStrength(newPassword);
    if (passwordError) {
      newErrors.newPassword = passwordError;
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'ⓘ Confirma tu nueva contraseña';
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'ⓘ Las contraseñas no coinciden';
      isValid = false;
    }

    setPasswordErrors(newErrors);
    return isValid;
  };

  //---------------------------------------------HANDLERS-------------------------------------------------//

  const handleEdit = (section) => {
    setTempUser({ ...user });
    setActiveSection(section);
    setEditMode(true);
    setValidationErrors({});
    setPasswordErrors({});
  };

  const handleSave = () => {
    let isValid = true;

    if (activeSection === 'personal') {
      isValid = validateAllFields();
    } else if (activeSection === 'security') {
      isValid = validatePasswordFields();
    }

    if (!isValid) return false;

    const updatedUser = { ...tempUser };

    if (activeSection === 'security') {
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }

    setUser(updatedUser);
    setEditMode(false);
    setActiveSection(null);
    return true;
  };

  const handleCancel = () => {
    setEditMode(false);
    setActiveSection(null);
    setValidationErrors({});
    setPasswordErrors({});
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setTempUser(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (editMode && activeSection === 'personal') {
      setValidationErrors(prev => ({
        ...prev,
        [name]: validateField(name, newValue)
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));

    if (editMode && activeSection === 'security') {
      const newErrors = { ...passwordErrors };

      if (name === 'newPassword') {
        newErrors.newPassword = validatePasswordStrength(value);
      } else if (name === 'confirmPassword') {
        newErrors.confirmPassword = 
          passwordData.newPassword !== value ? 'ⓘ Las contraseñas no coinciden' : '';
      }

      setPasswordErrors(newErrors);
    }
  };

  const handleSelectChange = (name, value) => {
    setTempUser(prev => ({
      ...prev,
      [name]: value
    }));

    if (editMode && activeSection === 'personal') {
      setValidationErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  //---------------------------------------------AVATAR Y USUARIO (MANTENIDO)----------------------------//

  const loadInitialData = () => {
    if (typeof window !== 'undefined') {
      const savedAvatar = localStorage.getItem(AVATAR_STORAGE_KEY);
      const savedUserData = localStorage.getItem(USER_DATA_STORAGE_KEY);

      return {
        avatar: savedAvatar || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        userData: savedUserData ? JSON.parse(savedUserData) : null
      };
    }
    return {
      avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      userData: null
    };
  };

  const [isEditingName, setIsEditingName] = useState(false);
  const [currentRole, setCurrentRole] = useState(initialUser?.role || 'contratante');
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
  const [userData, setUserData] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(USER_DATA_STORAGE_KEY);
      return savedData ? JSON.parse(savedData) : initialUser || null;
    }
    return initialUser || null;
  });

<<<<<<< HEAD
  // Configuración de roles
=======
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
  const [rolesConfig, setRolesConfig] = useState({
    contratista: {
      avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      nameKey: 'name',
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
  });

<<<<<<< HEAD
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
      documentNumber: 'Número de documento',
      name: 'Nombre de la empresa',
      phone: 'Teléfono principal',
      phoneSec: 'Teléfono secundario',
      email: 'Correo electrónico',
      desc: 'Descripción',
      town: 'Municipio',
      genre: 'Tipo de empresa'
    }
  }

  // Inicializar datos del formulario
  useEffect(() => {
    if (userData) {
      const data = {
        documentType: userData.documentType || '',
        documentNumber: userData.documentNumber || '',
        name: currentRole === 'Contratante' ? userData.nameEmployer || '' :
          currentRole === 'Contratista' ? userData.nameJobSeeker || '' :
            userData.nameEmployer || '',
        phone: currentRole === 'Contratante' ? userData.phoneEmployer || '' :
          currentRole === 'Contratista' ? userData.phoneJobSeeker || '' :
            userData.phoneEmployer || '',
        phoneSec: currentRole === 'Contratante' ? userData.phoneSecEmployer || '' :
          currentRole === 'Contratista' ? userData.phoneSecJobSeeker || '' :
            userData.phoneSecEmployer || '',
        email: currentRole === 'Contratante' ? userData.emailEmployer || '' :
          currentRole === 'Contratista' ? userData.emailJobSeeker || '' :
            userData.emailEmployer || '',
        desc: currentRole === 'Contratante' ? userData.descEmployer || '' :
          currentRole === 'Contratista' ? userData.descJobSeeker || '' :
            userData.descEmployer || '',
        town: currentRole === 'Contratante' ? userData.townEmployer || '' :
          currentRole === 'Contratista' ? userData.townJobSeeker || '' :
            userData.townEmployer || '',
        genre: currentRole === 'Contratante' ? userData.genreEmployer || '' :
          currentRole === 'Contratista' ? userData.genreJobSeeker || '' :
            userData.genreEmployer || '',
        notificationsEnabled: userData.notificationsEnabled || false,
        theme: userData.theme || 'system',
        skill1: currentRole === 'Contratante' ? userData.skill1Employer || '' :
          currentRole === 'Contratista' ? userData.skill1JobSeeker || '' :
            userData.skill1Employer || '',
        skill2: currentRole === 'Contratante' ? userData.skill2Employer || '' :
          currentRole === 'Contratista' ? userData.skill2JobSeeker || '' :
            userData.skill2Employer || '',
        skill3: currentRole === 'Contratante' ? userData.skill3Employer || '' :
          currentRole === 'Contratista' ? userData.skill3JobSeeker || '' :
            userData.skill3Employer || '',
        skill4: currentRole === 'Contratante' ? userData.skill4Employer || '' :
          currentRole === 'Contratista' ? userData.skill4JobSeeker || '' :
            userData.skill4Employer || '',
        study1: currentRole === 'Contratante' ? userData.study1Employer || '' :
          currentRole === 'Contratista' ? userData.study1JobSeeker || '' :
            userData.study1Employer || '',
        study2: currentRole === 'Contratante' ? userData.study2Employer || '' :
          currentRole === 'Contratista' ? userData.study2JobSeeker || '' :
            userData.study2Employer || '',
        study3: currentRole === 'Contratante' ? userData.study3Employer || '' :
          currentRole === 'Contratista' ? userData.study3JobSeeker || '' :
            userData.study3Employer || '',
        study4: currentRole === 'Contratante' ? userData.study4Employer || '' :
          currentRole === 'Contratista' ? userData.study4JobSeeker || '' :
            userData.study4Employer || '',
      }
      setFormData(data)
    }
  }, [userData, currentRole])

  // Funciones de validación
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
    return null
  }, [])

  const validateSkill = useCallback((value, fieldName) => {
    if (['skill1', 'skill2'].includes(fieldName)) { // Solo validar los primeros dos campos
      if (!value) return 'ⓘ Esta habilidad es requerida'
      if (value.length < 2) return 'ⓘ La habilidad debe tener al menos 2 caracteres'
    }
    return null
  }, [])

  const validateStudy = useCallback((value, fieldName) => {
    if (['study1', 'study2'].includes(fieldName)) { // Solo validar los primeros dos campos
      if (!value) return 'ⓘ Este estudio es requerido'
      if (value.length < 5) return 'ⓘ El estudio debe tener al menos 5 caracteres'
    }
    return null
  }, [])

  const validateRequiredField = useCallback((value, fieldName) => {
    if (!value) {
      // Mapeo de nombres técnicos a nombres legibles
      const fieldLabels = {
        documentType: 'tipo de documento',
        town: 'municipio',
        desc: 'descripción',
        name: 'Nombre',
        genre: 'género',
        phone: 'teléfono principal',
        phoneSec: 'Teléfono secundario',
        email: 'correo electrónico',
        documentNumber: 'número de documento'
      };

      const readableName = fieldLabels[fieldName] || fieldName
      return `ⓘ El campo ${readableName} es requerido`
    }
    return null
  }, [])

  const validatePasswordStrength = useCallback((password) => {
    if (!password) return 'ⓘ La contraseña es requerida'
    const minLength = password.length >= 8
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)

    if (!minLength) return 'ⓘ La contraseña debe tener al menos 8 caracteres'
    if (!hasNumber) return 'ⓘ La contraseña debe contener al menos un número'
    if (!hasSpecialChar) return 'ⓘ La contraseña debe contener al menos un carácter especial'
    if (!hasUpperCase) return 'ⓘ La contraseña debe contener al menos una mayúscula'
    return ''
  }, [])

  const validateConfirmPassword = useCallback((password, confirmPassword) => {
    if (!confirmPassword) return 'ⓘ Por favor confirma tu nueva contraseña'
    if (password !== confirmPassword) return 'ⓘ Las contraseñas no coinciden'
    return '' // Cambiado de null a string vacío
  }, [])

  // Validar todos los campos
  const validateFields = useCallback(() => {
    const newErrors = {}
    let isValid = true
    // Validar campos requeridos
    const requiredFields = ['documentType', 'town', 'desc', 'name', 'genre']
    requiredFields.forEach(field => {
      const error = validateRequiredField(formData[field], field)
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })

    // Validaciones específicas
    const phoneError = validatePhone(formData.phone)
    if (phoneError) {
      newErrors.phone = phoneError
      isValid = false
    }

    if (formData.phoneSec) {
      const phoneSecError = validatePhone(formData.phoneSec)
      if (phoneSecError) {
        newErrors.phoneSec = phoneSecError
        isValid = false
      }
    }

    const emailError = validateEmail(formData.email)
    if (emailError) {
      newErrors.email = emailError
      isValid = false;
    }

    const docNumberError = validateDocumentNumber(formData.documentNumber);
    if (docNumberError) {
      newErrors.documentNumber = docNumberError;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData, validatePhone, validateEmail, validateDocumentNumber, validateRequiredField])

  // Validar campos de contraseña
  const validatePasswordFields = useCallback(() => {
    const newErrors = {}
    let isValid = true

    // Validar contraseña actual
    const currentPasswordError = validateRequiredField(passwordData.currentPassword, 'contraseña actual')
    if (currentPasswordError) {
      newErrors.currentPassword = currentPasswordError
      isValid = false
    }

    // Validar nueva contraseña
    const newPasswordError = validatePasswordStrength(passwordData.newPassword)
    if (newPasswordError) {
      newErrors.newPassword = newPasswordError
      isValid = false
    }

    // Validar confirmación de contraseña
    const confirmPasswordError = validateConfirmPassword(
      passwordData.newPassword,
      passwordData.confirmPassword
    )
    if (confirmPasswordError) {
      newErrors.confirmPassword = confirmPasswordError
      isValid = false
    }

    setPasswordErrors(newErrors)
    return isValid
  }, [passwordData, validatePasswordStrength, validateConfirmPassword, validateRequiredField])

  const validateFieldInRealTime = useCallback((name, value) => {
  // Validaciones comunes
  if (name === 'phone' || name === 'phoneCompany') return validatePhone(value)
  if (name === 'phoneSec' || name === 'phoneSecCompany') return validatePhone(value)
  if (name === 'email' || name === 'emailCompany') return validateEmail(value)
  
  // Validaciones específicas
  if (name === 'nit') return validateNit(value)
  if (name === 'nameCompany') return validateCompanyName(value)
  if (name === 'townCompany') return validateRequiredField(value, 'townCompany')
  if (name === 'category') return validateCategory(value)
  if (name === 'webSite') return validateWebsite(value)
  
  // Validaciones para otros campos
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
  validateWebsite
])

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

  const getActiveError = useCallback((field) => {
    return errors[field] || realTimeErrors[field] || null
  }, [errors, realTimeErrors])


  // Manejar cambios en contraseña
  const handlePasswordChange = useCallback((e) => {
    const { name, value } = e.target
    setPasswordData(prev => ({ ...prev, [name]: value }))
    let error = null;
    if (name === 'newPassword') error = validatePasswordStrength(value)
    if (name === 'confirmPassword') error = validateConfirmPassword(passwordData.newPassword, value)

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


  // Manejar guardado
  const handleSave = useCallback(() => {
    if (activeSection === 'personal') {
      const updatedUser = {
        ...user,
        documentType: formData.documentType,
        documentNumber: formData.documentNumber,
        [currentRole === 'Contratante' ? 'phoneEmployer' : 'phoneJobSeeker']: formData.phone,
        [currentRole === 'Contratante' ? 'phoneSecEmployer' : 'phoneSecJobSeeker']: formData.phoneSec || null,
        [currentRole === 'Contratante' ? 'emailEmployer' : 'emailJobSeeker']: formData.email,
        [currentRole === 'Contratante' ? 'townEmployer' : 'townJobSeeker']: formData.town,
        [currentRole === 'Contratante' ? 'descEmployer' : 'descJobSeeker']: formData.desc || '',
        [currentRole === 'Contratante' ? 'genreEmployer' : 'genreJobSeeker']: formData.genre || '',
        notificationsEnabled: formData.notificationsEnabled,
        theme: formData.theme
      }

      // Actualiza el nombre según el rol
      if (currentRole === 'Contratante') {
        updatedUser.nameEmployer = formData.name
      } else if (currentRole === 'Contratista') {
        updatedUser.nameJobSeeker = formData.name
      }

      setUser(updatedUser)
      localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(updatedUser))
      setIsEditing(false)

    } else if (activeSection === 'skills') {
      const skillsErrors = {}
      let hasErrors = false

      // Validar solo los dos primeros campos de habilidades
      ['skill1', 'skill2'].forEach(field => {
        const error = validateSkill(formData[field], field)
        if (error) {
          skillsErrors[field] = error
          hasErrors = true
        }
      })

      if (hasErrors) {
        setErrors(skillsErrors)
        return
      }

      // Guardar datos si no hay errores
      const updatedUser = {
        ...user,
        skill1: formData.skill1,
        skill2: formData.skill2,
        skill3: formData.skill3,
        skill4: formData.skill4
      }
      setUser(updatedUser)
      localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(updatedUser))
      setIsEditing(false)

    } else if (activeSection === 'studies') {
      const studiesErrors = {}
      let hasErrors = false

      // Validar solo los dos primeros campos de estudios
      ['study1', 'study2'].forEach(field => {
        const error = validateStudy(formData[field], field)
        if (error) {
          studiesErrors[field] = error
          hasErrors = true
        }
      })

      if (hasErrors) {
        setErrors(studiesErrors)
        return
      }

      // Guardar datos si no hay errores
      const updatedUser = {
        ...user,
        study1: formData.study1,
        study2: formData.study2,
        study3: formData.study3,
        study4: formData.study4
      }
      setUser(updatedUser)
      localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(updatedUser))
      setIsEditing(false)

    } else if (activeSection === 'security') {
      // Lógica existente para la sección de seguridad
      const updatedUser = {
        ...user,
        // Aquí iría la actualización de datos de seguridad si es necesario
      }
      setUser(updatedUser)
      localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(updatedUser))
      setIsEditing(false)
    }
  }, [
    activeSection,
    formData,
    user,
    currentRole,
    validateSkill,
    validateStudy
  ])


  // Manejar cancelación
  const handleCancel = useCallback(() => {
    if (activeSection === 'personal' && userData) {
      setFormData({
        documentType: userData.documentType || '',
        documentNumber: userData.documentNumber || '',
        name: currentRole === 'Contratante' ? userData.nameEmployer || '' :
          currentRole === 'Contratista' ? userData.nameJobSeeker || '' :
            userData.nameEmployer || '',
        phone: currentRole === 'Contratante' ? userData.phoneEmployer || '' :
          currentRole === 'Contratista' ? userData.phoneJobSeeker || '' :
            userData.phoneEmployer || '',
        phoneSec: currentRole === 'Contratante' ? userData.phoneSecEmployer || '' :
          currentRole === 'Contratista' ? userData.phoneSecJobSeeker || '' :
            userData.phoneSecEmployer || '',
        email: currentRole === 'Contratante' ? userData.emailEmployer || '' :
          currentRole === 'Contratista' ? userData.emailJobSeeker || '' :
            userData.emailEmployer || '',
        desc: currentRole === 'Contratante' ? userData.descEmployer || '' :
          currentRole === 'Contratista' ? userData.descJobSeeker || '' :
            userData.descEmployer || '',
        town: currentRole === 'Contratante' ? userData.townEmployer || '' :
          currentRole === 'Contratista' ? userData.townJobSeeker || '' :
            userData.townEmployer || '',
        genre: currentRole === 'Contratante' ? userData.genreEmployer || '' :
          currentRole === 'Contratista' ? userData.genreJobSeeker || '' :
            userData.genreEmployer || '',
        notificationsEnabled: userData.notificationsEnabled || false,
        theme: userData.theme || 'system'
      })
    } else if (activeSection === 'security') {
      // Limpiar campos de contraseña
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

  // Efectos para persistencia
  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(user))
      setUserData(user)
    }
  }, [user])

=======
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
  useEffect(() => {
    if (userData?.role) {
      setCurrentRole(userData.role);
    }
  }, [userData]);

<<<<<<< HEAD
  // Funciones para avatar y nombre
=======
  useEffect(() => {
    if (typeof window !== 'undefined' && userData) {
      localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(userData));
    }
  }, [userData]);

>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
  const handleAvatarChange = (newAvatar) => {
    setRolesConfig(prev => ({
      ...prev,
      [currentRole]: {
        ...prev[currentRole],
        avatar: newAvatar
      }
<<<<<<< HEAD
    }))
    localStorage.setItem(AVATAR_STORAGE_KEY, newAvatar)
  }
=======
    }));
  };
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3

  const handleNameChange = (newName) => {
    const nameKey = rolesConfig[currentRole].nameKey
    const updatedUser = {
      ...user,
      [nameKey]: newName
<<<<<<< HEAD
    }
    setUser(updatedUser)
    setUserData(updatedUser)
  }

  // Validación en tiempo real de campos de contraseña

  const [localPasswordErrors, setLocalPasswordErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  })

  const handlePasswordChangeWithValidation = useCallback((e) => {
    const { name, value } = e.target;
    handlePasswordChange(e)

    // Validación en tiempo real
    if (name === 'newPassword') {
      const error = validatePasswordStrength(value)
      setLocalPasswordErrors(prev => ({
        ...prev,
        newPassword: error || ''
      }))
    } else if (name === 'confirmPassword') {
      const error = validateConfirmPassword(passwordData.newPassword, value)
      setLocalPasswordErrors(prev => ({
        ...prev,
        confirmPassword: error || ''
      }))
    }
  }, [handlePasswordChange, passwordData.newPassword, validatePasswordStrength, validateConfirmPassword])

  const handleSaveWithValidation = () => {
    if (activeSection === 'personal') {
      const fieldLabels = {
        documentType: 'Tipo de documento',
        documentNumber: 'Número de documento',
        phone: 'Teléfono principal',
        phoneSec: 'Teléfono secundario',
        email: 'Correo electrónico',
        town: 'Ubicación',
        desc: 'Descripción'
      };

      const newErrors = {};
      let hasErrors = false;

      // Validación de campos obligatorios
      const requiredFields = ['documentType', 'documentNumber', 'phone', 'email', 'town', 'desc']
      requiredFields.forEach(field => {
        if (!formData[field]) {
          newErrors[field] = `ⓘ ${fieldLabels[field]} es requerido`
          hasErrors = true
        }
      })

      // Validaciones específicas
      if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'ⓘ El teléfono debe tener 10 dígitos'
        hasErrors = true
      }

      if (formData.phoneSec && formData.phoneSec !== '' && !/^\d{10}$/.test(formData.phoneSec)) {
        newErrors.phoneSec = 'ⓘ El teléfono secundario debe tener 10 dígitos'
        hasErrors = true
      }

      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'ⓘ Ingresa un correo electrónico válido'
        hasErrors = true
      }

      if (formData.documentNumber && (formData.documentNumber.length < 6 || formData.documentNumber.length > 15)) {
        newErrors.documentNumber = 'ⓘ El documento debe tener entre 6 y 15 caracteres'
        hasErrors = true
      }

      setErrors(newErrors)

      if (!hasErrors) {
        handleSave()
        setSaveSuccess(true)
        setTimeout(() => setSaveSuccess(false), 3000)
      } else {
        const firstErrorField = Object.keys(newErrors)[0]
        const element = document.querySelector(`[name="${firstErrorField}"]`)
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    } else {
      handleSave()
    }
  }

  // Manejar cancelación con reset de errores locales
  const handleCancelWithReset = useCallback(() => {
    handleCancel()
    // Limpiar errores locales al cancelar
    setLocalPasswordErrors({
      newPassword: '',
      confirmPassword: ''
    })
  }, [handleCancel])

  // Combinar errores del contexto y errores locales
  const getCombinedPasswordError = useCallback((field) => {
    return passwordErrors[field] || localPasswordErrors[field] || null
  }, [passwordErrors, localPasswordErrors])

  const currentConfig = rolesConfig[currentRole] || rolesConfig.contratante
  const userName = user?.[currentConfig.nameKey] || currentConfig.defaultName
  const userAvatar = currentConfig.avatar
  const avatarOptions = currentConfig.avatarOptions

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

  const contextValue = {
    user,
    currentRole,
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
    getActiveError,
    handleChange,
    handlePasswordChange,
    handleSelectChange,
    handleEdit,
    handleSave,
    handleCancel,
    validateFields,
    validatePasswordFields,
    setCurrentRole,
    setPasswordData,
    setPasswordErrors,
    validateSkill,
    validateStudy,
    // Funciones para avatar y nombre
    handleAvatarChange,
    handleNameChange,
    setIsEditingName,
    // Opciones de select
    optionTown,
    optionGenre,
    optionId,
    // Funciones de validación de contraseña
    validatePasswordStrength,
    validateConfirmPassword,
    handlePasswordChangeWithValidation,
    handleSaveWithValidation,
    handleCancelWithReset,
    getCombinedPasswordError
  }

  return (
    <SettingsContext.Provider value={contextValue}>
=======
    }));
  };

  const currentConfig = rolesConfig[currentRole] || rolesConfig.contratante;
  const userName = userData?.[currentConfig.nameKey] || currentConfig.defaultName;
  const userAvatar = currentConfig.avatar;
  const avatarOptions = currentConfig.avatarOptions;
  const roleMenuItems = currentConfig.menuItems;

  //---------------------------------------------PROVIDER-------------------------------------------------//

  return (
    <SettingsContext.Provider
      value={{
        // Estados
        user,
        tempUser,
        editMode,
        activeSection,
        passwordData,
        validationErrors,
        passwordErrors,
        isEditingName,
        currentRole,
        userData,
        userAvatar,
        userName,
        avatarOptions,
        roleMenuItems,
        
        // Handlers
        handleAvatarChange,
        setCurrentRole,
        setIsEditingName,
        handleNameChange,
        handleEdit,
        handleSave,
        handleCancel,
        handleChange,
        handlePasswordChange,
        handleSelectChange
      }}
    >
>>>>>>> b8c3c6fdf051c57467915bfb8eada8cd67bb20a3
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings debe usarse dentro de un SettingsProvider');
  }
  return context;
};