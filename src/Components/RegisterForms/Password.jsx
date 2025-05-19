import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Header } from '../Header/Header'
import { WelcomeText } from '../../UI/WelcomeText'
import { PiEyeClosed, PiEye } from 'react-icons/pi'
import registerIlustration from '../../assets/images/register-ilustration.png'
import { FormsContainer } from '../../UI/FormsContainer'
import { Input } from '../../UI/Input'
import { usePassword } from '../../Context/PasswordContext'
import { Button } from '../../UI/button'

export const Password = () => {
    const { visibility, toggleVisibility } = usePassword()
    const navigate = useNavigate()

    const pStyle = 'text-red-400 text-sm mt-2 font-semibold'

    const [passwordForm, setPasswordForm] = useState({
        createPassword: '',
        confirmPassword: ''
    })

    const [errorPassword, setErrorPassword] = useState({
        errorCreatePassword: '',
        errorConfirmPassword: '',
        errorMismatch: '',
        errorStrength: ''
    })

    const validatePasswordStrength = (password) => {
        const minLength = password.length >= 8
        const hasNumber = /\d/.test(password)
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
        const hasUpperCase = /[A-Z]/.test(password)

        if (!minLength) return 'ⓘ La contraseña debe tener al menos 8 caracteres'
        if (!hasNumber) return 'ⓘ La contraseña debe contener al menos un número'
        if (!hasSpecialChar) return 'ⓘ Debe contener al menos un carácter especial'
        if (!hasUpperCase) return 'ⓘ Debe contener al menos una mayúscula'
        return ''
    }

    useEffect(() => {

        if (passwordForm.createPassword) {
            const strengthError = validatePasswordStrength(passwordForm.createPassword)
            setErrorPassword(prev => ({
                ...prev,
                errorStrength: strengthError
            }))
        } else {
            setErrorPassword(prev => ({
                ...prev,
                errorStrength: ''
            }))
        }

        if (passwordForm.confirmPassword && passwordForm.createPassword !== passwordForm.confirmPassword) {
            setErrorPassword(prev => ({
                ...prev,
                errorMismatch: 'ⓘ Las contraseñas no coinciden.'
            }))
        } else {
            setErrorPassword(prev => ({
                ...prev,
                errorMismatch: ''
            }))
        }
    }, [passwordForm.createPassword, passwordForm.confirmPassword])

    const handleChange = (e) => {
        const { name, value } = e.target
        setPasswordForm(prev => ({
            ...prev,
            [name]: value
        }))

        if (name === 'createPassword' && errorPassword.errorCreatePassword) {
            setErrorPassword(prev => ({
                ...prev,
                errorCreatePassword: ''
            }))
        }
        if (name === 'confirmPassword' && errorPassword.errorConfirmPassword) {
            setErrorPassword(prev => ({
                ...prev,
                errorConfirmPassword: ''
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { createPassword, confirmPassword } = passwordForm

        let hasError = false
        const newErrors = {
            errorCreatePassword: '',
            errorConfirmPassword: '',
            errorMismatch: '',
            errorStrength: ''
        }

        if (!createPassword) {
            newErrors.errorCreatePassword = 'ⓘ Este campo es requerido'
            hasError = true
        }

        if (!confirmPassword) {
            newErrors.errorConfirmPassword = 'ⓘ Este campo es requerido'
            hasError = true
        }

        setErrorPassword(newErrors)

        if (!hasError && !errorPassword.errorStrength && !errorPassword.errorMismatch) {
            navigate('/verificación-de-correo')
        }
    }

    return (
        <div className=''>
            <Header
                middleObject={
                    <h1 className='text-6xl mb-8 font-[afacadBold] text-[#405e7f]'>
                        Crear contraseña
                    </h1>
                }
                buttons={
                    <div className='flex gap-2 mb-8'>
                        <NavLink to='/politicas-de-privacidad' className='text-[#254160] font-semibold hover:text-[#405e7f] hover:underline'>Políticas de privacidad</NavLink>
                        <p>•</p>
                        <NavLink to='/terminos-y-condiciones' className='text-[#254160] font-semibold hover:text-[#405e7f] hover:underline'>Terminos y condiciones</NavLink>
                    </div>
                }
            />
            <div className='flex justify-center items-start mt-14 gap-20'>
                <FormsContainer
                    width='w-[35%]'
                    bgColor='bg-[#dcfff6]'
                    textColor='#405e7f'
                    title='Registrarse'
                    changeForm={
                        <p className='text-[#405e7f] pt-4'>
                            ¿Ya estás registrado en nuestra plataforma?{' '}
                            <NavLink to='/acceder' className='text-[#405e7f] font-semibold hover:underline hover:text-[#405e7f]/60'>
                                Iniciar sesión
                            </NavLink>
                        </p>
                    }
                    form={
                        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-6 my-6'>
                            <p className='text-[#405e7f] font-semibold text-left'>
                                Al crear tu contraseña debes tomar en cuenta que ésta debe contener almenos un número, una mayúscula y un caractér especial.
                            </p>
                            <div className='w-full'>
                                <div className='w-full relative'>
                                    <Input
                                        labelTitle='Crear contraseña'
                                        isFor='createPassword'
                                        iType={visibility.createPassword ? 'text' : 'password'}
                                        iHolder='Ingresa una contraseña segura (mín. 8 caracteres)'
                                        iValue={passwordForm.createPassword}
                                        iChange={handleChange}
                                        iName='createPassword'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => toggleVisibility('createPassword')}
                                        className='absolute right-4 bottom-2 text-sm underline text-[#405e7f]/70 hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer'
                                    >
                                        {visibility.createPassword ? <PiEye className='w-7 h-7' /> : <PiEyeClosed className='w-7 h-7' />}
                                    </button>
                                </div>
                                {errorPassword.errorCreatePassword && (
                                    <p className={pStyle}>{errorPassword.errorCreatePassword}</p>
                                )}
                                {errorPassword.errorStrength && (
                                    <p className={pStyle}>{errorPassword.errorStrength}</p>
                                )}
                            </div>

                            <div className='w-full'>
                                <div className='w-full relative'>
                                    <Input
                                        labelTitle='Confirmar contraseña'
                                        isFor='confirmPassword'
                                        iType={visibility.confirmPassword ? 'text' : 'password'}
                                        iHolder='Ingresa nuevamente tu contraseña'
                                        iValue={passwordForm.confirmPassword}
                                        iChange={handleChange}
                                        iName='confirmPassword'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => toggleVisibility('confirmPassword')}
                                        className='absolute right-4 bottom-2 text-sm underline text-[#405e7f]/70 hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer'
                                    >
                                        {visibility.confirmPassword ? <PiEye className='w-7 h-7' /> : <PiEyeClosed className='w-7 h-7' />}
                                    </button>
                                </div>
                                {errorPassword.errorConfirmPassword && (
                                    <p className={pStyle}>{errorPassword.errorConfirmPassword}</p>
                                )}
                                {errorPassword.errorMismatch && (
                                    <p className={pStyle}>{errorPassword.errorMismatch}</p>
                                )}
                            </div>

                            <div className='w-[35%]'>
                                <Button
                                    btnType='submit'
                                    btnStyle='bg-[#405e7f] text-white font-bold px-4 py-2 rounded-full cursor-pointer w-full'
                                    btnId='btnPassword'
                                    btnName='Terminar registro'
                                />
                            </div>
                        </form>
                    }
                />

                <WelcomeText
                    text={
                        <p> Nos alegra tener nuevos usuarios como tú en
                        <br /> nuestro aplicativo, esperamos que tu
                        <br /> experiencia sea agradable en PLP. </p>
                    }
                    ilustration={registerIlustration}
                    imgDesc='Ilustración de inicio de sesión'
                    imgStyle='w-[400px] h-[400px]'
                />
            </div>
        </div>
    )
}