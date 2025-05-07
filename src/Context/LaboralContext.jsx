import { createContext, useContext, useState, useCallback } from 'react'

export const LaboralContext = createContext()

export const LaboralProvider = ({ children }) => {
  const [laboralData, setLaboralData] = useState({
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
    experience: '',
    companyWork: '' // Cambiado a string plano
  })

  const [errors, setErrors] = useState({
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
    experience: '',
    companyWork: '' // Cambiado a string plano
  })

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    const [parent, child] = name.split('.')

    // Actualización segura del estado
    setLaboralData(prev => {
      if (child) {
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value
          }
        }
      }
      return {
        ...prev,
        [parent]: value
      }
    })

    // Limpiar error al escribir
    setErrors(prev => {
      if (child) {
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: ''
          }
        }
      }
      return {
        ...prev,
        [parent]: ''
      }
    })
  }, [])

  const validateFieldsLaboral = useCallback(() => {
    const newErrors = {
      technicalSkills: {
        tSkillOne: !laboralData.technicalSkills.tSkillOne.trim() ? 'ⓘ Este campo es requerido, completa almenos dos habilidades técnicas' : '',
        tSkillTwo: !laboralData.technicalSkills.tSkillTwo.trim() ? 'ⓘ Este campo es requerido, completa almenos dos habilidades técnicas' : '',
        tSkillThree: '',
        tSkillFour: ''
      },
      softSkills: {
        sSkillOne: !laboralData.softSkills.sSkillOne.trim() ? 'ⓘ Este campo es requerido, completa almenos dos habilidades sociales' : '',
        sSkillTwo: !laboralData.softSkills.sSkillTwo.trim() ? 'ⓘ Este campo es requerido, completa almenos dos habilidades sociales' : '',
        sSkillThree: '',
        sSkillFour: ''
      },
      studies: {
        studiesOne: !laboralData.studies.studiesOne.trim() ? 'ⓘ Este campo es requerido' : '',
        studiesTwo: !laboralData.studies.studiesTwo.trim() ? 'ⓘ Este campo es requerido' : '',
        studiesThree: '',
        studiesFour: ''
      },
      experience: !laboralData.experience.trim() ? 'ⓘ Este campo es requerido' : '',
      companyWork: !laboralData.companyWork.trim() ? 'ⓘ Este campo es requerido, agrega el lugar (o lugares) donde adquiriste tu experiencia' : ''
    }

    // Actualización forzada de errores
    setErrors(newErrors)

    // Verificación profunda de errores
    const hasErrors = (
      newErrors.technicalSkills.tSkillOne ||
      newErrors.technicalSkills.tSkillTwo ||
      newErrors.softSkills.sSkillOne ||
      newErrors.softSkills.sSkillTwo ||
      newErrors.studies.studiesOne ||
      newErrors.studies.studiesTwo ||
      newErrors.experience ||
      newErrors.companyWork
    )

    return !hasErrors
  }, [laboralData])

  return (
    <LaboralContext.Provider value={{
      laboralData,
      errors,
      handleChange,
      validateFieldsLaboral
    }}>
      {children}
    </LaboralContext.Provider>
  )
}

export const useLaboral = () => {
  const context = useContext(LaboralContext)
  if (!context) {
    throw new Error('useLaboral debe usarse dentro de LaboralProvider')
  }
  return context
}