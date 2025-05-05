import { createContext, useContext, useState, useCallback } from 'react'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

  const [photo, setPhoto] = useState(null)

  const [data, setData] = useState({
    name: '',
    phone: '',
    phoneSec: '',
    email: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    photo: ''
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
    if (!value.trim()) return 'ⓘ El nombre es requerido'
    if (/[A-Z]/.test(value)) return 'ⓘ Solo minúsculas'
    if (/\s/.test(value)) return 'ⓘ Sin espacios'
    if (!/^[a-z0-9._]+$/.test(value)) return 'ⓘ Solo a-z, 0-9, . o _'
    return ''
  }

  const validatePhone = (value) => {
    if (!value.trim()) return 'ⓘ Teléfono requerido'
    if (!/^\d+$/.test(value)) return 'ⓘ Solo números'
    if (value.length < 10) return 'ⓘ Mínimo 10 dígitos'
    return ''
  }

  const validateEmail = (value) => {
    if (!value.trim()) return 'ⓘ Email requerido'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'ⓘ Email inválido'
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }))

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
    <DataContext.Provider value={{ data, photo, errors, handleChange, setPhoto, setErrors }}>
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

