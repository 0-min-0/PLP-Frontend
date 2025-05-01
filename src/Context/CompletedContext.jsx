import { createContext, useContext, useState } from 'react'

export const CompletedContext = createContext()

export const CompletedProvider = ({ children }) => {
    const [completed, setCompleted] = useState({
        completedData: false,
        completedLaboral: false 
    })

    const handleClick = () => {
        setCompleted(prev => !prev)
    }

    return (
        <CompletedContext.Provider value={{ completed, setCompleted, handleClick }}>
            {children}
        </CompletedContext.Provider>
    )

}

export const useCompleted = () => {
    const context = useContext(CompletedContext)
    if (!context) {
        throw new Error('useCompleted debe usarse dentro de un CompletedProvider')
    }
    return context
}
