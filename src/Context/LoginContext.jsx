import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const users = [
    { user: 'usuario01@gmail.com', password: 'Usuario#01?', phone: '1234567890' },
    { user: 'usuario02@hotmail.com', password: 'usuariO2025&', phone: '2345678901' },
    { user: 'usuario03@yahoo.com', password: 'Usuario111_', phone: '3456789012' },
    { user: 'usuario04@gmail.com', password: 'uSuario*04', phone: '4567890123' },
    { user: 'usuario05@gmail.com', password: 'usuaRio@00?', phone: '5678901234' },
    { phone: '3012345678', password: 'numero123#' },
    { phone: '3112345678', password: 'numero234#' },
    { phone: '3212345678', password: 'numero345#' },
]

const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        emailOrPhone: '',
        password: ''
    })
    const [errorForm, setErrorForm] = useState({
        errorEmailOrPhone: '',
        errorPassword: '',
        loginError: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validatePhone = (value) => {
        if (!/^\d+$/.test(value)) return 'ⓘ El número de teléfono solo puede contener dígitos.'
        if (value.length < 10) return 'ⓘ El número de teléfono debe tener al menos 10 dígitos.'
        return ''
    }

    const validateEmail = (value) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'ⓘ El correo electrónico es inválido, asegúrate de que contenga un @ y un dominio.'
        return ''
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })

        if (name === 'emailOrPhone') {
            const isEmail = value.includes('@')
            const error = isEmail ? validateEmail(value) : validatePhone(value)
            setErrorForm(prev => ({
                ...prev,
                errorEmailOrPhone: error,
                loginError: ''
            }))
        } else if (name === 'password' && errorForm.loginError) {
            setErrorForm(prev => ({
                ...prev,
                loginError: ''
            }))
        }
    }

    const validateEmptyFields = () => {
        if (!form.emailOrPhone && !form.password) {
            setErrorForm({
                errorEmailOrPhone: 'ⓘ Ambos campos son requeridos',
                errorPassword: '',
                loginError: ''
            })
            return false

        } else if (!form.emailOrPhone) {
            setErrorForm({
                errorEmailOrPhone: 'ⓘ El correo o número de teléfono son requeridos',
                errorPassword: '',
                loginError: ''
            })
            return false

        } else if (!form.password) {
            setErrorForm({
                errorEmailOrPhone: '',
                errorPassword: 'ⓘ La contraseña es requerida',
                loginError: ''
            })
            return false
        }
        return true
    }

    const validateFormat = () => {
        const isEmail = form.emailOrPhone.includes('@')
        const error = isEmail ? validateEmail(form.emailOrPhone) : validatePhone(form.emailOrPhone)

        if (error) {
            setErrorForm({
                errorEmailOrPhone: error,
                errorPassword: '',
                loginError: ''
            })
            return false
        }
        return true
    }

    const validateUserExists = () => {
        const isEmail = form.emailOrPhone.includes('@')
        const userExists = users.some(u =>
            isEmail ? u.user === form.emailOrPhone : u.phone === form.emailOrPhone
        )

        if (!userExists) {
            setErrorForm({
                errorEmailOrPhone: '',
                errorPassword: '',
                loginError: 'ⓘ La información ingresada es de un usuario inexistente'
            })
            return false
        }
        return true
    }

    const validateCredentials = () => {
        const isEmail = form.emailOrPhone.includes('@')
        const userFound = users.find(u =>
            isEmail ? u.user === form.emailOrPhone : u.phone === form.emailOrPhone
        )

        if (userFound.password !== form.password) {
            setErrorForm({
                errorEmailOrPhone: '',
                errorPassword: '',
                loginError: 'ⓘ La información no coincide, el correo/número de teléfono o contraseña son incorrectos'
            })
            return false
        }

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        setErrorForm({
            errorEmailOrPhone: '',
            errorPassword: '',
            loginError: ''
        })

        if (!validateEmptyFields()) {
            setIsSubmitting(false)
            return
        }

        if (!validateFormat()) {
            setIsSubmitting(false)
            return
        }

        if (!validateUserExists()) {
            setIsSubmitting(false)
            return
        }

        if (!validateCredentials()) {
            setIsSubmitting(false)
            return
        }

        try {
            //Aqui va la logica de autenticacion
            setTimeout(() => {
                navigate('/inicio-contratista')
                setIsSubmitting(false)
            }, 1000)
        } catch (error) {
            setErrorForm({
                errorEmailOrPhone: '',
                errorPassword: '',
                loginError: 'ⓘ Algo salió mal con el inicio de sesión, porfavor inténtalo de nuevo'
            })
            setIsSubmitting(false)
        }
    }

    return (
        <LoginContext.Provider value={{
            form,
            errorForm,
            isSubmitting,
            handleChange,
            handleSubmit
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => {
    const context = useContext(LoginContext)
    if (!context) {
        throw new Error('useLogin debe ser usado dentro de un LoginProvider')
    }
    return context
}

