import { createContext, useContext, useState } from 'react'

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu debe usarse dentro de un MenuProvider')
  }
  return context
}