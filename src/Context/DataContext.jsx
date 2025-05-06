import { createContext, useContext, useState, useCallback } from 'react'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

  // Validaciones para la foto

  const [photo, setPhoto] = useState(null)
  const [photoError, setPhotoError] = useState('')

  const validatePhoto = useCallback((file) => {
    const MAX_SIZE = 2 * 1024 * 1024; // 2 MB
    const ASPECT_RATIO = 3 / 4
    const ALLOWED_MARGIN = 0.1

    setPhotoError('')

    if (!file) {
      setPhotoError('ⓘ La foto es requerida')
      return false;
    }

    // Validacion del tipo de archivo
    if (!file.type.match('image.*')) {
      setPhotoError('ⓘ Solo se permiten archivos de imagen.')
      return false;
    }

    // Validacion del tamaño
    if (file.size > MAX_SIZE) {
      setPhotoError('ⓘ El archivo es muy pesado, debe pesar máximo 2MB.')
      return false;
    }

    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => {
        const ratio = img.width / img.height;
        if (Math.abs(ratio - ASPECT_RATIO) > ALLOWED_MARGIN) {
          setPhotoError('ⓘ La imagen no tiene proporción 3x4, usa una foto tipo documento.')
          resolve(false)
        } else {
          setPhoto(file)
          resolve(true)
        }
      }

      img.onerror = () => {
        setPhotoError('ⓘ No se pudo leer la imagen, intenta con otro archivo.')
        resolve(false)
      }

      img.src = URL.createObjectURL(file)
    })

  }, [])

  // Funcion para manejar el cambio de foto
  const clearPhoto = useCallback(() => {
    setPhoto(null)
    setPhotoError('')
  }, [])


  const [data, setData] = useState({
    name: '',
    phone: '',
    phoneSec: '',
    email: '',
    description: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    photo: '',
    description: ''
  })
  const [typingTimeouts, setTypingTimeouts] = useState({})

  // Función debounce genérica
  const validateWithDebounce = useCallback((fieldName, value, validator) => {
    clearTimeout(typingTimeouts[fieldName])

    const newTimeout = setTimeout(() => {
      setErrors(prev => ({ ...prev, [fieldName]: validator(value) }))
    }, 300)

    setTypingTimeouts(prev => ({ ...prev, [fieldName]: newTimeout }))
  }, [typingTimeouts])

  // Validadores
  const validateName = (value) => {
    if (/[A-Z]/.test(value)) return 'ⓘ El nombre de usuario no puede incluir mayúsculas. \nSólo puedes utilizar minúsculas, puntos (.), guiones bajos (_) y números.' 
    if (/\s/.test(value)) return 'ⓘ El nombre de usuario no puede incluir espacios. \nSólo puedes utilizar minúsculas, puntos (.), guiones bajos (_) y números.'
    if (!/^[a-z0-9._]+$/.test(value)) return 'ⓘ El nombre de usuario no puede incluir caracteres especiales. \nSólo puedes utilizar minúsculas, puntos (.), guiones bajos (_) y números.'
    return ''
  }

  const validatePhone = (value) => {
    if (!/^\d+$/.test(value)) return 'ⓘ El número de teléfono solo puede contener dígitos.'
    if (value.length < 10) return 'ⓘ El número de teléfono debe tener al menos 10 dígitos.'
    return ''
  }

  const validateEmail = (value) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'ⓘ El correo eléctronico es inválido, asegúrate de que contenga un @ y un dominio.'
    return ''
  }

  const validateDescription = (value) => {
    if (!value.trim()) return ''
    if (value.length > 500) return 'ⓘ Máximo 500 caracteres'
    return ''
  }


  const validateFields = () => {
    const newErrors = {
      name: !data.name.trim() ? 'ⓘ El nombre de usuario es requerido' : validateName(data.name),
      phone: !data.phone.trim() ? 'ⓘ El número de teléfono es requerido' : validatePhone(data.phone),
      email: !data.email.trim() ? 'ⓘ El correo electrónico es requerido' : validateEmail(data.email),
      description: !data.description.trim() ? 'ⓘ La descripción es requerida' : '',
      photo: !photo ? 'ⓘ La foto es requerida' : ''
    }
    setErrors(newErrors)
    return Object.values(newErrors).every(err => !err)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))

    if (name === 'description') {
      setErrors(prev => ({ ...prev, [name]: validateDescription(value) }))
    }

    // Validación en tiempo real con debounce
    switch (name) {
      case 'name':
        validateWithDebounce(name, value, validateName)
        break
      case 'phone':
      case 'phoneSec':
        validateWithDebounce(name, value, validatePhone)
        break
      case 'email':
        validateWithDebounce(name, value, validateEmail)
        break
    }
  }

  return (
    <DataContext.Provider value={{
      data,
      photo,
      errors,
      photoError,
      handleChange,
      setPhoto,
      setPhotoError,
      setErrors,
      validatePhoto,
      clearPhoto,
      validateFields
    }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData debe usarse dentro de InfoProvider')
  }
  return context
}

