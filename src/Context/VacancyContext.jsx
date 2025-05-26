import { createContext, useContext, useState, useEffect } from 'react'

const VacancyContext = createContext()

export const VacancyProvider = ({ children }) => {
    const [vacancies, setVacancies] = useState(() => {
        const saved = localStorage.getItem('vacancies')
        return saved ? JSON.parse(saved) : []
    })

    const [vacancy, setVacancy] = useState({
        vacancyName: '',
        contactPerson: '',
        contact: '',
        location: '',
        responsibilities: '',
        availability: '',
        salary: ''
    })

    const [errors, setErrors] = useState({})

    // ====================== Validaciones ======================

    const validatePhone = (value, isRequired = true) => {
        if (!value) return isRequired ? 'ⓘ El número de teléfono es requerido.' : ''
        if (!/^[0-9]+$/.test(value)) return 'ⓘ El número de teléfono solo puede contener dígitos (0-9).'
        if (value.length !== 10) return 'ⓘ El número de teléfono debe tener exactamente 10 dígitos.'
        return ''
    }

    const validateEmail = (value) => {
        if (!value) return 'ⓘ El correo electrónico campo es requerido.'
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(value)) return 'ⓘ Ingresa un correo válido (Ej. usuario@ejemplo.com).'
        if (/\s/.test(value)) return 'ⓘ El correo no puede contener espacios.'
        return ''
    }

    const validateNotEmpty = (value, fieldName) => {
        if (!value) return `ⓘ El campo ${fieldName} es requerido.`
        return ''
    }

    const validateContact = (value) => {
        if (!value) return 'ⓘ El contacto es requerido.'
        return value.includes('@') ? validateEmail(value) : validatePhone(value)
    }

    const validateVacancyForm = (form) => {
        const newErrors = {
            vacancyName: validateNotEmpty(form.vacancyName, 'nombre de la vacante'),
            contactPerson: validateNotEmpty(form.contactPerson, 'persona de contacto'),
            contact: validateContact(form.contact),
            location: validateNotEmpty(form.location, 'ubicación'),
            responsibilities: validateNotEmpty(form.responsibilities, 'responsabilidades'),
            availability: validateNotEmpty(form.availability, 'disponibilidad'),
            salary: validateNotEmpty(form.salary, 'salario estimado')
        }

        return {
            isValid: !Object.values(newErrors).some(error => error !== ''),
            errors: newErrors
        }
    }

    // ====================== Funciones ======================

    const handleChange = (e) => {
        const { name, value } = e.target
        setVacancy(prev => ({ ...prev, [name]: value }))
    }

    const addVacancy = (vacancyData) => {
        const newId = vacancies.length > 0 ? Math.max(...vacancies.map(v => v.id)) + 1 : 1
        const newVacancy = {
            id: newId,
            title: vacancyData.vacancyName,
            company: vacancyData.contactPerson,
            location: vacancyData.location,
            type: vacancyData.availability,
            fullData: { ...vacancyData }
        }
        const updatedVacancies = [...vacancies, newVacancy]
        setVacancies(updatedVacancies)
        localStorage.setItem('vacancies', JSON.stringify(updatedVacancies))
    }

    const handleSubmit = (e, type, onSuccess) => {
        e.preventDefault()
        const validation = validateVacancyForm(vacancy)
        setErrors(validation.errors)

        if (validation.isValid) {
            addVacancy(vacancy)
            setVacancy({
                vacancyName: '',
                contactPerson: '',
                contact: '',
                location: '',
                responsibilities: '',
                availability: '',
                salary: ''
            })
            if (typeof onSuccess === 'function') onSuccess()
        }
    }

    return (
        <VacancyContext.Provider value={{
            vacancy,
            vacancies,
            errors,
            setVacancy,
            setVacancies,
            addVacancy,
            validateVacancyForm,
            handleChange,
            handleSubmit
        }}>
            {children}
        </VacancyContext.Provider>
    )
}

export const useVacancy = () => {
    const context = useContext(VacancyContext)
    if (!context) {
        throw new Error('useVacancy debe usarse dentro de un VacancyProvider')
    }
    return context
}
