import React, { createContext, useState, useContext, useEffect } from 'react';
import {
  validateEmail,
  validatePhone,
  validateDocumentNumber,
  validateRequired,
  validatePasswordStrength
} from './validations';

const AVATAR_STORAGE_KEY = 'plp_user_avatar';
const USER_DATA_STORAGE_KEY = 'plp_user_data';

const SettingsContext = createContext();

export const SettingsProvider = ({ children, initialUser }) => {
  // Estados principales
  const [user, setUser] = useState(initialUser)
  const [tempUser, setTempUser] = useState({ ...initialUser })
  const [editMode, setEditMode] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [validationErrors, setValidationErrors] = useState({})
  const [passwordErrors, setPasswordErrors] = useState({})
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  
  const [isEditingName, setIsEditingName] = useState(false)
  const [currentRole, setCurrentRole] = useState(initialUser?.role || 'contratante')
  const [userData, setUserData] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(USER_DATA_STORAGE_KEY)
      return savedData ? JSON.parse(savedData) : initialUser || null
    }
    return initialUser || null
  })

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
      ],
      menuItems: [
        { to: '/mis-habilidades', label: 'Mis habilidades' },
        { to: '/mis-postulaciones', label: 'Mis postulaciones' }
      ]
    },
    contratante: {
      avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
      nameKey: 'nameEmployer',
      defaultName: 'Contratante',
      avatarOptions: [
        'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
        'https://cdn-icons-png.flaticon.com/512/921/921071.png'
      ],
      menuItems: [
        { to: '/mis-vacantes', label: 'Mis vacantes' },
        { to: '/candidatos', label: 'Candidatos' }
      ]
    },
    empresa: {
      avatar: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
      nameKey: 'companyName',
      defaultName: 'Empresa',
      avatarOptions: [
        'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
        'https://cdn-icons-png.flaticon.com/512/3667/3667339.png'
      ],
      menuItems: [
        { to: '/nuestras-vacantes', label: 'Nuestras vacantes' },
        { to: '/equipo', label: 'Equipo de contratación' }
      ]
    }
  });

  // Efecto para persistir cambios
  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(user));
      setUserData(user); // Keep userData in sync
    }
  }, [user]);

  useEffect(() => {
    if (userData?.role) {
      setCurrentRole(userData.role);
    }
  }, [userData]);

  //---------------------------------------------VALIDACIONES MEJORADAS----------------------------------//
  const validateField = (name, value) => {
    const isEmployer = user?.role === 'contratante';
    
    switch (name) {
      case 'emailEmployer':
      case 'emailJobSeeker':
        return validateEmail(value);
      case 'phoneEmployer':
      case 'phoneJobSeeker':
      case 'phoneSecEmployer':
      case 'phoneSecJobSeeker':
        return validatePhone(value);
      case 'documentNumber':
        return validateDocumentNumber(value);
      case 'skill1':
      case 'skill2':
      case 'study1':
      case 'study2':
        return !isEmployer ? validateRequired(value) : '';
      default:
        return validateRequired(value);
    }
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
    setUserData(updatedUser); // Keep userData in sync
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

  // Avatar and user name handlers (kept intact)
  const handleAvatarChange = (newAvatar) => {
    setRolesConfig(prev => ({
      ...prev,
      [currentRole]: {
        ...prev[currentRole],
        avatar: newAvatar
      }
    }));
    localStorage.setItem(AVATAR_STORAGE_KEY, newAvatar);
  };

  const handleNameChange = (newName) => {
    const nameKey = rolesConfig[currentRole].nameKey;
    const updatedUser = {
      ...user,
      [nameKey]: newName
    };
    setUser(updatedUser);
    setUserData(updatedUser);
  };

  const currentConfig = rolesConfig[currentRole] || rolesConfig.contratante;
  const userName = user?.[currentConfig.nameKey] || currentConfig.defaultName;
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