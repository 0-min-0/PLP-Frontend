import { createContext, useContext, useState, useEffect } from 'react'
import { getVacancies, addVacancyToExample, updateVacancyInExample, deleteVacancyFromExample } from '../Utils/objectsExample'

const VacancyContext = createContext()

export const VacancyProvider = ({ children }) => {
    const [vacancies, setVacancies] = useState(getVacancies())
    const [vacancy, setVacancy] = useState({
        vacancyName: '',
        company: '',
        contactPerson: '',
        contact: '',
        location: '',
        responsibilities: '',
        type: '',
        availability: '',
        salary: ''
    })

    const [isEditing, setIsEditing] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [editedVacancy, setEditedVacancy] = useState(null)
    const [errors, setErrors] = useState({})

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

    const validateSalary = (value) => {
        if (!value) return 'ⓘ El salario estimado es requerido.'
        if (!/^[\d,.]+$/.test(value)) return 'ⓘ Ingresa un valor numérico válido'
        return ''
    }

    const validateVacancyForm = (form) => {
        const newErrors = {
            vacancyName: validateNotEmpty(form.vacancyName || form.title, 'nombre de la vacante'),
            company: validateNotEmpty(form.company, 'empresa'),
            contactPerson: validateNotEmpty(form.contactPerson, 'persona de contacto'),
            contact: validateContact(form.contact),
            location: validateNotEmpty(form.location, 'ubicación'),
            responsibilities: validateNotEmpty(form.responsibilities, 'responsabilidades'),
            type: validateNotEmpty(form.type, 'tipo de contrato'),
            availability: validateNotEmpty(form.availability, 'disponibilidad'),
            salary: validateSalary(form.salary)
        }

        return {
            isValid: !Object.values(newErrors).some(error => error !== ''),
            errors: newErrors
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setVacancy(prev => ({ ...prev, [name]: value }))
        const validation = validateVacancyForm({ ...vacancy, [name]: value })
        setErrors(prev => ({ ...prev, [name]: validation.errors[name] }))
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target
        const updated = { ...editedVacancy, [name]: value }
        setEditedVacancy(updated)
        const validation = validateVacancyForm(updated)
        setErrors(prev => ({ ...prev, [name]: validation.errors[name] }))
    }

    const addVacancy = (vacancyData, companyName) => {
        const validation = validateVacancyForm(vacancyData)
        if (!validation.isValid) {
            setErrors(validation.errors)
            return false
        }

        const newVacancy = addVacancyToExample(vacancyData, companyName)
        setVacancies(getVacancies())
        return newVacancy
    }

    const updateVacancy = (updatedVacancy) => {
        const validation = validateVacancyForm(updatedVacancy)
        if (!validation.isValid) {
            setErrors(validation.errors)
            return false
        }

        const success = updateVacancyInExample(updatedVacancy)
        if (success) {
            setVacancies(getVacancies())
            setErrors({})
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
                company: '',
                contactPerson: '',
                contact: '',
                location: '',
                responsibilities: '',
                type: '',
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
            isEditing,
            showConfirm,
            editedVacancy,
            setVacancy,
            setVacancies,
            setIsEditing,
            setShowConfirm,
            setEditedVacancy,
            addVacancy,
            updateVacancy,
            deleteVacancy,
            validateVacancyForm,
            handleChange,
            handleEditChange,
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
