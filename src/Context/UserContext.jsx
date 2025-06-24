import { createContext, useContext, useState } from 'react'
import Avatar1 from '../assets/icons/icon1.jpg'
const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Usuario',
    avatar: {Avatar1} 
  })

  const avatarOptions = [
    'https://via.placeholder.com/150/FF5733/FFFFFF',
    'https://via.placeholder.com/150/C70039/FFFFFF',
    'https://via.placeholder.com/150/900C3F/FFFFFF',
    'https://via.placeholder.com/150/581845/FFFFFF',
    'https://via.placeholder.com/150/1A5276/FFFFFF',
    'https://via.placeholder.com/150/148F77/FFFFFF'
  ]

  const handleNameChange = (newName) => {
    setUser(prev => ({ ...prev, name: newName }))
  }

  const handleAvatarChange = (newAvatar) => {
    setUser(prev => ({ ...prev, avatar: newAvatar }))
  }

  return (
    <UserContext.Provider value={{ 
      user, 
      avatarOptions, 
      handleNameChange, 
      handleAvatarChange 
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)