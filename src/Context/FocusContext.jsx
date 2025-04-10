import { createContext, useState, useContext } from 'react'

const FocusContext = createContext()

export const FocusProvider = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <FocusContext.Provider value={{ isFocused, setIsFocused }}>
      {children}
    </FocusContext.Provider>
  )
}

export const useFocus = () => {
  const context = useContext(FocusContext)
  if (!context) {
    throw new Error('useFocus debe ser implementado en FocusProvider')
  }
  return context
}