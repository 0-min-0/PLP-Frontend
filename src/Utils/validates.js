export const validateEmail = (email) => {
  if (!email) return 'ⓘ Este campo es requerido'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'ⓘ Ingrese un correo válido'
  return ''
}

export const validatePhone = (phone) => {
  if (!phone) return 'ⓘ Este campo es requerido'
  if (!/^\d{10}$/.test(phone)) return 'ⓘ Teléfono debe tener 10 dígitos'
  return ''
}

export const validateDocumentNumber = (docNumber) => {
  if (!docNumber) return 'ⓘ Este campo es requerido'
  if (!/^\d+$/.test(docNumber)) return 'ⓘ Solo se permiten números'
  return ''
}

export const validateRequired = (value) => {
  if (!value) return 'ⓘ Este campo es requerido'
  return ''
}

export const validatePasswordStrength = (password) => {
  if (!password) return 'ⓘ La contraseña es requerida'
  const minLength = password.length >= 8
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  const hasUpperCase = /[A-Z]/.test(password)

  if (!minLength) return 'ⓘ La contraseña debe tener al menos 8 caracteres'
  if (!hasNumber) return 'ⓘ Debe contener al menos un número'
  if (!hasSpecialChar) return 'ⓘ Debe contener al menos un carácter especial'
  if (!hasUpperCase) return 'ⓘ Debe contener al menos una mayúscula'
  return ''
}