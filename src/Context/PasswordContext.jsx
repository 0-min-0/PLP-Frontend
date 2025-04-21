import { createContext, useContext, useState } from 'react'

const PasswordContext = createContext()

export const PasswordProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <PasswordContext.Provider value={{ showPassword, setShowPassword }}>
      {children}
    </PasswordContext.Provider>
  )
}

export const usePassword = () => {
  return useContext(PasswordContext)
}