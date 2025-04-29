import { createContext, useState, useContext } from 'react'

const ValidFormContext = createContext()

export const useFormValid = () => {
    return useContext(ValidFormContext)
}

export const ValidProvider = ({ children }) => {
    const [validData, setValidData] = useState(false)
    const [validLaboral, setValidLaboral] = useState(false)
    const [validStudies, setValidStudies] = useState(false)

    const allValid = validData && validLaboral && validStudies

    return (
        <ValidFormContext.Provider value={{
            validData,
            setValidData,
            validLaboral,
            setValidLaboral,
            validStudies,
            setValidStudies,
            allValid,
        }}>
            {children}
        </ValidFormContext.Provider>
    )
}
