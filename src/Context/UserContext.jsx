import { createContext, useContext, useState } from 'react'
import Avatar1 from '../assets/icons/icon1.png'
import Avatar2 from '../assets/icons/icon2.png'
import Avatar3 from '../assets/icons/icon3.png'
import Avatar4 from '../assets/icons/icon4.png'
import Avatar5 from '../assets/icons/icon5.png'
import Avatar6 from '../assets/icons/icon6.png'


const UserContext = createContext()

export const UserProvider = ({ children }) => {
 const [user, setUser] = useState({
  name: 'Usuario',
  avatar: Avatar1,
})

const avatarOptions = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6]


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