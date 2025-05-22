import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        // Campos para RegisterUser
        documentType: '',
        documentNumber: '',
        name: '',
        phone: '',
        phoneSec: '',
        email: '',
        description: '',
        town: '',
        genre: '',
        // Campos para JobSeeker
        skillOne: '',
        skillTwo: '',
        skillThree: '',
        skillFour: '',
        studiesOne: '',
        studiesTwo: '',
        studiesThree: '',
        studiesFour: ''
    })
    
    const [errors, setErrors] = useState({
        documentType: '',
        documentNumber: '',
        name: '',
        phone: '',
        phoneSec: '',
        email: '',
        description: '',
        town: '',
        genre: '',
        skillOne: '',
        skillTwo: '',
        skillThree: '',
        skillFour: '',
        studiesOne: '',
        studiesTwo: ''
    })

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

    const validateDocumentNumber = (value) => {
        if (!value) return 'ⓘ El número de documento es requerido.'
        if (!/^[0-9]+$/.test(value)) return 'ⓘ El número de documento solo puede contener números.'
        return ''
    }

    const validateNotEmpty = (value, fieldName) => {
        if (!value) return `ⓘ El campo ${fieldName} es requerido.`
        return ''
    }

    // Validación específica para campos de selección (Select)
    const validateSelect = (value, fieldName) => {
        if (!value) return `ⓘ El ${fieldName} es requerido.`
        return ''
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }

        if (value) {
            let error = ''
            if (name === 'phone') {
                error = validatePhone(value)
            } else if (name === 'phoneSec') {
                error = validatePhone(value, false)
            } else if (name === 'email') {
                error = validateEmail(value)
            } else if (name === 'documentNumber') {
                error = validateDocumentNumber(value)
            }

            if (error) {
                setErrors(prev => ({
                    ...prev,
                    [name]: error
                }))
            }
        }
    }

    const handleSelectChange = (name, value) => {
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateRegisterUserForm = () => {
        const newErrors = {
            name: validateNotEmpty(form.name, 'nombre'),
            phone: validatePhone(form.phone),
            email: validateEmail(form.email),
            description: validateNotEmpty(form.description, 'descripción'),
            town: validateSelect(form.town, 'municipio'),  
            genre: validateSelect(form.genre, 'género')    
        }
        
        setErrors(newErrors)
        
        return !Object.values(newErrors).some(error => error !== '')
    }

    const validateEmployerForm = () => {
        const newErrors = {
            documentType: validateSelect(form.documentType, 'tipo de documento'),
            documentNumber: validateDocumentNumber(form.documentNumber)
        }
        
        setErrors(prev => ({
            ...prev,
            ...newErrors
        }))
        
        return !Object.values(newErrors).some(error => error !== '')
    }

    const validateJobSeekerForm = () => {
        const newErrors = {
            documentType: validateSelect(form.documentType, 'tipo de documento'),
            documentNumber: validateDocumentNumber(form.documentNumber),
            skillOne: validateNotEmpty(form.skillOne, 'habilidad técnica'),
            skillTwo: validateNotEmpty(form.skillTwo, 'habilidad técnica'),
            skillThree: validateNotEmpty(form.skillThree, 'habilidad social'),
            skillFour: validateNotEmpty(form.skillFour, 'habilidad social'),
            studiesOne: validateNotEmpty(form.studiesOne, 'estudio complementario'),
            studiesTwo: validateNotEmpty(form.studiesTwo, 'estudio complementario')
        }
        
        setErrors(prev => ({
            ...prev,
            ...newErrors
        }))
        
        return !Object.values(newErrors).some(error => error !== '')
    }

    // Función de envío genérica
    const handleSubmit = (e, formType) => {
        e.preventDefault()
        
        let isValid = false
        if (formType === 'employer') {
            isValid = validateEmployerForm()
        } else if (formType === 'jobSeeker') {
            isValid = validateJobSeekerForm()
        } else if (formType === 'registerUser') {
            isValid = validateRegisterUserForm()
        }

        if (isValid) {
            // Guardar datos antes de redirigir
            console.log('Formulario válido:', form)
            navigate('/crear-contraseña')
        }
    }

    return (
        <GlobalContext.Provider value={{
            form,
            errors,
            handleChange,
            handleSelectChange,
            handleSubmit,
            validateEmployerForm,
            validateJobSeekerForm,
            validateRegisterUserForm
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error('useGlobal debe usarse dentro de un GlobalProvider')
    }
    return context
}