import { createContext, useContext, useState } from 'react'

export const PasswordContext = createContext()

export const PasswordProvider = ({ children }) => {
  const [visibility, setVisibility] = useState({
    currentPassword: false,
    createPassword: false,
    confirmPassword: false,
    loginPassword: false
  })

  const toggleVisibility = (field) => {
    setVisibility(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }

  return (
    <PasswordContext.Provider value={{ visibility, toggleVisibility }}>
      {children}
    </PasswordContext.Provider>
  )
}

export const usePassword = () => {
  const context = useContext(PasswordContext)
  if (!context) {
    throw new Error('usePassword debe usarse dentro de un PasswordProvider')
  }
  return context
}
