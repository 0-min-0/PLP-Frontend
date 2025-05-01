import { createContext, useContext, useState } from 'react'

export const InfoContext = createContext()

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState({
    name: '',
    phone: '',
    phoneSec: '',
    email: '',
    photo: null,
    desc: '',
    ocupation: '',
    tSkillOne: '',
    tSkillTwo: '',
    sSkillOne: '',
    sSkillTwo: '',
    studiesOne: '',
    studiesTwo: '',
    experiencia: '',
    company: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }))
  }

  return (
    <InfoContext.Provider value={{ info, setInfo, handleChange }}>
      {children}
    </InfoContext.Provider>
  )
}

export const useInfo = () => {
  const context = useContext(InfoContext)
  if (!context) {
    throw new Error('useInfo debe usarse dentro de un InfoProvider')
  }
  return context
}
