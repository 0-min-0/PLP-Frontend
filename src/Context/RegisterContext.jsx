import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterContext = createContext()

export const RegisterProvider = ({ children }) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    // Campos para RegisterUser
    documentType: '',
    documentNumber: '',
    name: '',
    phone: '',
    phoneSec: '',
    email: '',
    description: '',
    town: '',
    genre: '',
    // Campos para JobSeeker
    skillOne: '',
    skillTwo: '',
    skillThree: '',
    skillFour: '',
    studiesOne: '',
    studiesTwo: '',
    studiesThree: '',
    studiesFour: '',
    // Campos para Company
    nit: '',
    sector: '',
    website: '',
    // Campo para RegisterRolType
    userType: null,
    // Campos para Password
    createPassword: '',
    confirmPassword: ''
  })

  // Estados para errores
  const [errors, setErrors] = useState({})

  // Estados para visibilidad de contraseñas
  const [visibility, setVisibility] = useState({
    createPassword: false,
    confirmPassword: false,
    loginPassword: false
  })

  // Toggle para visibilidad de contraseñas
  const toggleVisibility = (field) => {
    setVisibility(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }

  // Validaciones comunes
  const validatePhone = (value, isRequired = true) => {
    if (!value) return isRequired ? 'ⓘ El número de teléfono es requerido.' : ''
    if (!/^[0-9]+$/.test(value)) return 'ⓘ El número de teléfono solo puede contener dígitos (0-9).'
    if (value.length !== 10) return 'ⓘ El número de teléfono debe tener exactamente 10 dígitos.'
    return ''
  }

   const validatePhoneSec = (value) => {
    if (!/^[0-9]+$/.test(value)) return 'ⓘ El número de teléfono solo puede contener dígitos (0-9).'
    if (value.length !== 10) return 'ⓘ El número de teléfono debe tener exactamente 10 dígitos.'
    return ''
  }

  const validateEmail = (value) => {
    if (!value) return 'ⓘ El correo electrónico campo es requerido.'
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

  const validateSelect = (value, fieldName) => {
    if (!value) return `ⓘ El ${fieldName} es requerido.`
    return ''
  }

  // Validaciones específicas para Company
  const validateNIT = (nit) => {
    if (!nit) return 'ⓘ El NIT es requerido'
    if (!/^[0-9-]+$/.test(nit)) return 'ⓘ El NIT solo puede contener números y guiones'
    if (nit.replace(/-/g, '').length < 6) return 'ⓘ NIT demasiado corto'
    
    const cleanNit = nit.replace(/-/g, '')
    const digits = cleanNit.split('').map(Number)
    const lastDigit = digits.pop()

    let sum = 0
    let factor = digits.length + 1

    digits.forEach(digit => {
      sum += digit * factor
      factor--
    })

    const calculatedDigit = 11 - (sum % 11)
    const finalDigit = calculatedDigit === 10 ? 'k' : calculatedDigit === 11 ? 0 : calculatedDigit

    if (String(finalDigit).toLowerCase() !== String(lastDigit).toLowerCase()) {
      return 'ⓘ NIT inválido (dígito verificador incorrecto)'
    }

    return ''
  }

  // Validación para RegisterRolType
  const validateUserType = (userType) => {
    if (!userType) return 'ⓘ Selecciona un rol para continuar'
    return ''
  }

  // Validaciones para Password
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

  // Efectos para validaciones en tiempo real
  useEffect(() => {
    if (form.createPassword) {
      const strengthError = validatePasswordStrength(form.createPassword)
      setErrors(prev => ({
        ...prev,
        errorStrength: strengthError
      }))
    } else {
      setErrors(prev => ({
        ...prev,
        errorStrength: ''
      }))
    }

    if (form.confirmPassword && form.createPassword !== form.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        errorMismatch: 'ⓘ Las contraseñas no coinciden.'
      }))
    } else {
      setErrors(prev => ({
        ...prev,
        errorMismatch: ''
      }))
    }
  }, [form.createPassword, form.confirmPassword])

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }

    let error = ''
    if (value) {
      if (name === 'phone' || name === 'phoneSec') {
        error = validatePhone(value, name === 'phone' || name === 'phoneSec')
      } else if (name === 'email') {
        error = validateEmail(value)
      } else if (name === 'documentNumber') {
        error = validateDocumentNumber(value)
      } else if (name === 'nit') {
        error = validateNIT(value)
      }
      if (error) {
        setErrors(prev => ({
          ...prev,
          [name]: error
        }))
      }
    }
  }

  const handleSelectChange = (name, value) => {
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleUserTypeChange = (value) => {
    setForm(prev => ({
      ...prev,
      userType: value
    }))
    if (errors.userType) {
      setErrors(prev => ({
        ...prev,
        userType: ''
      }))
    }
  }

  // Validaciones de formularios
  const validateRegisterUserForm = () => {
    const newErrors = {
      name: validateNotEmpty(form.name, 'nombre'),
      phone: validatePhone(form.phone),
      phoneSec: validatePhoneSec(form.phoneSec),
      email: validateEmail(form.email),
      description: validateNotEmpty(form.description, 'descripción'),
      town: validateSelect(form.town, 'municipio'),
      genre: validateSelect(form.genre, 'género')
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== '')
  }

  const validateEmployerForm = () => {
    const newErrors = {
      documentType: validateSelect(form.documentType, 'tipo de documento'),
      documentNumber: validateDocumentNumber(form.documentNumber)
    }
    setErrors(prev => ({ ...prev, ...newErrors }))
    return !Object.values(newErrors).some(error => error !== '')
  }

  const validateJobSeekerForm = () => {
    const newErrors = {
      documentType: validateSelect(form.documentType, 'tipo de documento'),
      documentNumber: validateDocumentNumber(form.documentNumber),
      skillOne: validateNotEmpty(form.skillOne, 'habilidad técnica'),
      skillTwo: validateNotEmpty(form.skillTwo, 'habilidad técnica'),
      skillThree: validateNotEmpty(form.skillThree, 'habilidad social'),
      skillFour: validateNotEmpty(form.skillFour, 'habilidad social'),
      studiesOne: validateNotEmpty(form.studiesOne, 'estudio complementario'),
      studiesTwo: validateNotEmpty(form.studiesTwo, 'estudio complementario')
    }

    setErrors(prev => ({ ...prev, ...newErrors }))
    return !Object.values(newErrors).some(error => error !== '')
  }

  const validateCompanyForm = () => {
    const newErrors = {
      nit: validateNIT(form.nit),
      sector: validateNotEmpty(form.sector, 'sector de la empresa')
    }
    setErrors(prev => ({ ...prev, ...newErrors }))
    return !Object.values(newErrors).some(error => error !== '')
  }

  const validateRoleTypeForm = () => {
    const newErrors = {
      userType: validateUserType(form.userType)
    }
    setErrors(prev => ({ ...prev, ...newErrors }))
    return !Object.values(newErrors).some(error => error !== '')
  }

  const validatePasswordForm = () => {
    const newErrors = {
      errorCreatePassword: form.createPassword ? '' : 'ⓘ Este campo es requerido',
      errorConfirmPassword: form.confirmPassword ? '' : 'ⓘ Este campo es requerido',
      errorMismatch: errors.errorMismatch,
      errorStrength: errors.errorStrength
    }

    setErrors(prev => ({ ...prev, ...newErrors }))
    return !Object.values(newErrors).some(error => error !== '')
  }

  const mampFrom = (form) => {
    console.log('mampFrom', form)

     const genreMap = {
    'femenino': 'F',
    'masculino': 'M'
  }

  const userTypeMap = {
    'jobSeeker': 'contratista',
    'employer': 'contratante_informal',
    'company': 'contratante_formal'
  }

  const documentTypeMap = {
    'cedula': 'CC',
    'cedula de Extranjería': 'CE',
    'nit': 'NIT'
  }

  return {
    ...form,
    genre: genreMap[form.genre] || '',
    userType: userTypeMap[form.userType] || '',
    documentType: documentTypeMap[form.documentType] || '',
  }
  }

  const subirData = async () => {
      const mappedForm = mampFrom(form)
      
      const formData = new FormData()

      formData.append('nombreCompleto', mappedForm.name)
      formData.append('email', mappedForm.email)
      formData.append('telefono', mappedForm.phone)
      formData.append('telefono2', mappedForm.phoneSec)
      formData.append('password', mappedForm.createPassword)
      formData.append('descripcion', mappedForm.description)
      formData.append('fotoPerfil', null)
      formData.append('municipio', mappedForm.town)
      formData.append('tipoDocumento', mappedForm.documentType)
      formData.append('numeroCedula', mappedForm.documentNumber)
      formData.append('genero', mappedForm.genre)
      formData.append('estado_perfil', 'activo')
      formData.append('tipo_usuario', mappedForm.userType)
      formData.append('numeroDocumento', mappedForm.documentNumber)
      formData.append('categoria_trabajo', mappedForm.skillOne)
      formData.append('HabilidadesTecnicas', [mappedForm.skillTwo, mappedForm.skillThree, mappedForm.skillFour].filter(Boolean).join(', '))
      formData.append('HabilidadesSociales', [mappedForm.studiesOne, mappedForm.studiesTwo].filter(Boolean).join(', '))
      formData.append('NIT', mappedForm.nit)
      formData.append('sector', mappedForm.sector)
      formData.append('sitioWeb', mappedForm.website)

      //console.log('Datos a enviar:', Object.fromEntries(formData.entries()))

      try {
        const response = await fetch('http://localhost:8000/Users/RegisterUser', {
          method: 'POST',
          body: formData,
          credentials: 'include',
        })

        const data = await response.json()
        console.log('Response data:', data)
        if (response.status === 200) {
          console.log('Datos enviados correctamente')
          const {token} = data;
          if (token) {
            localStorage.setItem('token', token)
            console.log('Token almacenado en localStorage:', token)
          }
          return true
        }  else {
          console.error('Error al enviar los datos:', data);
          return false;
      }
      }catch (error) {
        console.error('Error al enviar los datos:', error)
        return false
      }
  }

  // Submit handler
  const handleSubmit = async (e, formType, onSuccess) => {
    e.preventDefault()
    let isValid = false

    if (formType === 'employer') isValid = validateEmployerForm()
    else if (formType === 'jobSeeker') isValid = validateJobSeekerForm()
    else if (formType === 'registerUser') isValid = validateRegisterUserForm()
    else if (formType === 'company') isValid = validateCompanyForm()
    else if (formType === 'roleType') isValid = validateRoleTypeForm()
    else if (formType === 'password') isValid = validatePasswordForm()

    if (!isValid) return

  if (typeof onSuccess === 'function') {
    onSuccess()
    return
  }

  if (formType === 'password') {
    try {
      const success = await subirData()
      if (success) {
        navigate('/verificación-de-correo')
      } else {
        console.error('Error al enviar los datos')
      }
    } catch (error) {
      console.error('Error inesperado:', error)
    }
  } else {
    navigate('/crear-contraseña')
  }
  }
  return (
    <RegisterContext.Provider value={{
      form,
      errors,
      visibility,
      handleChange,
      handleSelectChange,
      handleUserTypeChange,
      toggleVisibility,
      handleSubmit,
      validateEmployerForm,
      validateJobSeekerForm,
      validateRegisterUserForm,
      validateCompanyForm,
      validateRoleTypeForm,
      validatePasswordForm
    }}>
      {children}
    </RegisterContext.Provider>
  )
}

export const useRegister = () => {
  const context = useContext(RegisterContext)
  if (!context) {
    throw new Error('useRegister debe usarse dentro de un RegisterProvider')
  }
  return context
}