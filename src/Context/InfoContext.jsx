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
    technicalSkills: {
      tSkillOne: '',
      tSkillTwo: '',
      tSkillThree: '',
      tSkillFour: ''
    },
    softSkills: {
      sSkillOne: '',
      sSkillTwo: '',
      sSkillThree: '',
      sSkillFour: ''
    },
    studies: {
      studiesOne: '',
      studiesTwo: '',
      studiesThree: '',
      studiesFour: ''
    },
    experiencie: '',
    companyWork: {
      companyOne: '',
      companyTwo: '',
      companyThree: '',
      companyFour: ''
    },
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    const keys = name.split('.') 
    if (keys.length === 1) {
      setInfo(prev => ({
        ...prev,
        [name]: value
      }))
    } else {
      setInfo(prev => {
        const updated = { ...prev }
        let obj = updated

        for (let i = 0; i < keys.length - 1; i++) {
          obj[keys[i]] = { ...obj[keys[i]] }
          obj = obj[keys[i]]
        }

        obj[keys[keys.length - 1]] = value
        return updated
      })
    }
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
