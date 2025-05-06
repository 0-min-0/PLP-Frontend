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
    companyWork: ''
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
    companyWork: ''
  })

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    const [parent, child] = name.split('.')
    
    setLaboralData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [child]: value
      }
    }))

    // Limpiar error cuando se escribe
    if (errors[parent]?.[child]) {
      setErrors(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: ''
        }
      }));
    }
  }, [errors])

  const validateFieldsLaboral = useCallback(() => {
    const newErrors = {
      technicalSkills: {
        tSkillOne: !laboralData.technicalSkills.tSkillOne.trim() ? 'ⓘ Campo requerido' : '',
        tSkillTwo: !laboralData.technicalSkills.tSkillTwo.trim() ? 'ⓘ Campo requerido' : '',
        tSkillThree: '',
        tSkillFour: ''
      },
      softSkills: {
        sSkillOne: !laboralData.softSkills.sSkillOne.trim() ? 'ⓘ Campo requerido' : '',
        sSkillTwo: !laboralData.softSkills.sSkillTwo.trim() ? 'ⓘ Campo requerido' : '',
        sSkillThree: '',
        sSkillFour: ''
      },
      studies: {
        studiesOne: !laboralData.studies.studiesOne.trim() ? 'ⓘ Campo requerido' : '',
        studiesTwo: !laboralData.studies.studiesTwo.trim() ? 'ⓘ Campo requerido' : '',
        studiesThree: '',
        studiesFour: ''
      },
      experience: !laboralData.experience.trim() ? 'ⓘ Campo requerido' : '',
      companyWork: {
        companyOne: !laboralData.companyWork.trim() ? 'ⓘ Campo requerido' : ''
      }
    }

    setErrors(newErrors)
    
    // Verificar si hay errores en campos requeridos
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
    throw new Error('useLaboral debe usarse dentro de InfoProvider')
  }
  return context
}