import { createContext, useState, useContext } from 'react'

const FormsContext = createContext()

export const useForm = () => {
    return useContext(FormsContext)
}

export const FormsProvider = ({ children }) => {
    const [allForms, setAllForms] = useState({
        formData: {
            name: '',
            email: '',
            phone: '',
            phoneSec: '',
        },
        formLaboral: {
            ocupation: '',
            technicalSkills: [],
            softSkills: [],
        },
        formStudies: {
            photo: null,
            complementaries: [],
            experiences: '',
            companyExperience: [],
        },
    })

    const updateForm = (formName, fieldName, value) => {
        setAllForms(prevState => ({
            ...prevState,
            [formName]: {
                ...prevState[formName],
                [fieldName]: value,
            }
        }))
    }

    return (
        <FormsContext.Provider value={{
            allForms,
            updateForm,
        }}>
            {children}
        </FormsContext.Provider>
    )
}

