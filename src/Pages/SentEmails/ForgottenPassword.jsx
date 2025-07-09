import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../../UI/button'
import { Header } from '../../Components/Header/Header'
import { Input } from '../../UI/Input'
import { useContact } from '../../Context/ContactContext'
import email from '../../assets/images/email.png'
import { LoadingSpinner } from '../../UI/LoadingSpinner'
import { ResendTimer } from '../../Components/ResendTime/ResendTimer'
import { validateEmail } from '../../Utils/validations'

export const ForgottenPassword = () => {
    const { formData, errors, handleChange } = useContact()
    const [localErrors, setLocalErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [canResend, setCanResend] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const emailInputRef = useRef(null)

    useEffect(() => {
        emailInputRef.current?.focus()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = {}
        
        if (!formData.email.trim()) {
            validationErrors.email = 'El correo electrónico es requerido'
        } else if (!validateEmail(formData.email)) {
            validationErrors.email = 'Ingresa un correo electrónico válido'
        }
        
        setLocalErrors(validationErrors)
        
        if (Object.keys(validationErrors).length === 0) {
            try {
                setIsLoading(true)
                setIsSubmitted(true)
                await new Promise(resolve => setTimeout(resolve, 1500))
                
                setCanResend(false)
            } catch (error) {
                setLocalErrors({ submit: 'Ocurrió un error al enviar el correo' })
                setIsSubmitted(false)
            } finally {
                setIsLoading(false)
            }
        }
    }

    const handleResendEmail = async () => {
        if (!canResend) return
        
        try {
            setIsLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            setCanResend(false)
        } catch (error) {
            setLocalErrors({ submit: 'Ocurrió un error al reenviar el correo' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='h-full back-color page p-6'>
            <Header
                middleObject={
                    <h1 className='title-page text-4xl font-[afacadBold] text-[color:var(--color-card-text)]'>
                        Reestablecer contraseña
                    </h1>
                }
                leftObject={
                    <NavLink to="/acceder" className="text-[color:var(--color-card-text)] hover:underline">
                        Volver al inicio de sesión
                    </NavLink>
                }
            />
            
            <div className='w-full'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <h3 className='text-center text-lg/6 mt-5 text text-[color:var(--color-card-text)]'>
                        Ingresa tu correo electrónico y haz click en "Recibir correo", luego revisa tu correo y reestablece tu contraseña,
                        <br /> serás redirigido a la página de inicio. Sino recibes el correo, puedes reenviarlo.
                    </h3>
                    <img src={email} className='w-[280px] h-[280px] email-ilustration' alt='email recibido' />
                </div>
                
                <form onSubmit={handleSubmit} className='flex flex-col items-center mt-6 gap-4'>
                    <div className='password-form w-full md:w-[45%] flex flex-col md:flex-row items-center text-center my-10 md:my-20'>
                        <div className='w-full md:w-[80%]'>
                            <Input
                                ref={emailInputRef}
                                iHolder='Ingresa tu correo electrónico'
                                iName='email'
                                iValue={formData.email}
                                iChange={handleChange}
                                error={localErrors.email || errors.email}
                                iType='email'
                                disabled={isSubmitted}
                            />
                        </div>
                        <Button
                            type="submit"
                            btnName={isLoading ? <LoadingSpinner size="small" /> : 'Recibir correo'}
                            btnStyle={`ml-0 md:ml-4 mt-4 md:mt-0 text-[#405e7f] bg-[#90d7db] px-6 py-2 ${isSubmitted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4fd1c5]'}`}
                            disabled={isSubmitted || isLoading}
                        />
                    </div>
                    
                    {localErrors.submit && (
                        <div className="text-red-500 mb-4">
                            {localErrors.submit}
                        </div>
                    )}
                    
                    {isSubmitted && (
                        <div className="text flex items-center gap-2 mb-2">
                            <div className="text-green-500 text-center">
                                ¡Correo enviado con éxito! Revisa tu bandeja de entrada.
                            </div>
                            <NavLink 
                                to="/acceder" 
                                className="text-green-500 font-semibold hover:underline"
                            >
                                Ir a inicio de sesión
                            </NavLink>
                        </div>
                    )}
                    
                    <div className='flex flex-col items-center gap-2 w-[80%]'>
                        <p className='text text-[color:var(--color-card-text)] text-center'>
                            ¿Aún no recibes ningún correo? Revisa tu carpeta de spam o correo no deseado o agrega plataformalaboralproactiva@correo.com a tus contactos.
                        </p>
                        
                        {!canResend ? (
                            <ResendTimer 
                                onTimerEnd={() => setCanResend(true)} 
                                initialTime={60} 
                            />
                        ) : (
                            <Button
                                btnName={isLoading ? <LoadingSpinner size="small" /> : "Reenviar correo"}
                                onClick={handleResendEmail}
                                btnStyle="text-[#405e7f] bg-[#90d7db] px-6 py-2 hover:bg-[#4fd1c5]"
                                disabled={!formData.email || isSubmitted || isLoading}
                            />
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}