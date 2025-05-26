import { createContext, useContext, useState, useEffect } from 'react'
import { getVacancies, addVacancyToExample, updateVacancyInExample, deleteVacancyFromExample } from '../Utils/objectsExample'

const VacancyContext = createContext()

export const VacancyProvider = ({ children }) => {
    const [vacancies, setVacancies] = useState(getVacancies())
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

    // Actualizar vacancies cuando cambie localStorage
    useEffect(() => {
        const handleStorageChange = () => {
            setVacancies(getVacancies())
        }
        
        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [])

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

    const handleChange = (e) => {
        const { name, value } = e.target
        setVacancy(prev => ({ ...prev, [name]: value }))
    }

    const addVacancy = (vacancyData, companyName) => {
        const newVacancy = addVacancyToExample(vacancyData, companyName)
        setVacancies(getVacancies())
        return newVacancy
    }

    const updateVacancy = (updatedVacancy) => {
        const success = updateVacancyInExample(updatedVacancy)
        if (success) {
            setVacancies(getVacancies())
        }
        return success
    }

    const deleteVacancy = (id) => {
        deleteVacancyFromExample(id)
        setVacancies(getVacancies())
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
            updateVacancy,
            deleteVacancy,
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