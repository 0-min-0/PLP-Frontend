import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Header } from '../../Header/Header'
import { Footer } from '../../Footer/Footer'
import { MainMenu } from '../../MainMenu/MainMenu'
import { WelcomeText } from '../../../UI/WelcomeText'
import registerIlustration from '../../../assets/images/register-ilustration.png'
import { FormsContainer } from '../../../UI/FormsContainer'
import { Input } from '../../../UI/Input'
import { usePassword } from '../../../Context/PasswordContext'
import { Button } from '../../../UI/button'

export const PasswordJobSeeker = () => {
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
        errorMismatch: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const { createPassword, confirmPassword } = passwordForm

        setErrorPassword({
            errorCreatePassword: '',
            errorConfirmPassword: '',
            errorMismatch: ''
        })

        let hasError = false
        if (!createPassword) {
            setErrorPassword(prev => ({
                ...prev,
                errorCreatePassword: 'ⓘ Este campo es requerido'
            }))
            hasError = true
        }

        if (!confirmPassword) {
            setErrorPassword(prev => ({
                ...prev,
                errorConfirmPassword: 'ⓘ Este campo es requerido'
            }))
            hasError = true
        }

        if (createPassword && confirmPassword && createPassword !== confirmPassword) {
            setErrorPassword(prev => ({
                ...prev,
                errorMismatch: 'ⓘ Las contraseñas no coinciden'
            }))
            hasError = true
        }

        if (!hasError) {
            navigate('/crear-cuenta/contratista/hoja-de-vida')
        }
    }

    return (
        <div className='w-full min-h-screen p-6 border-2 rounded-2xl border-[#405e7f]/70'>
            <Header
                headerClass='w-full flex justify-between items-center'
                middleObject={
                    <h1 className='text-6xl text-[#405e7f] ml-10 font-[arialBold] items-end'>
                        Plataforma Laboral Proactiva
                    </h1>
                }
                menu={<MainMenu />}
            />
            <div className='flex justify-center items-start pt-26 gap-20'>
                <FormsContainer
                    width='w-[35%]'
                    bgColor='#dcfff6'
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
                        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-6 mt-6'>
                            <div className='w-full'>
                                <div className='w-full relative'>
                                    <Input
                                        labelTitle='Crear contraseña'
                                        isFor='createPassword'
                                        iType={visibility.createPassword ? 'text' : 'password'}
                                        iValue={passwordForm.createPassword}
                                        iChange={e => setPasswordForm({ ...passwordForm, createPassword: e.target.value })}
                                        iName='createPassword'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => toggleVisibility('createPassword')}
                                        className='absolute right-4 bottom-3 text-sm underline text-[#405e7f]/70 hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer'
                                    >
                                        {visibility.createPassword ? 'Ocultar' : 'Mostrar'}
                                    </button>

                                </div>
                                {errorPassword.errorCreatePassword && (
                                    <p className={pStyle}>{errorPassword.errorCreatePassword}</p>
                                )}
                            </div>

                            <div className='w-full'>
                                <div className='w-full relative'>
                                    <Input
                                        labelTitle='Confirmar contraseña'
                                        isFor='confirmPassword'
                                        iType={visibility.confirmPassword ? 'text' : 'password'}
                                        iValue={passwordForm.confirmPassword}
                                        iChange={e => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                                        iName='confirmPassword'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => toggleVisibility('confirmPassword')}
                                        className='absolute right-4 bottom-3 text-sm underline text-[#405e7f]/70 hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer'
                                    >
                                        {visibility.confirmPassword ? 'Ocultar' : 'Mostrar'}
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
                                    btnName='Llenar hoja de vida'
                                />
                            </div>
                        </form>
                    }
                />

                <WelcomeText
                    text={
                        <p>
                            Nos alegra tener nuevos usuarios
                            <br /> como tú en nuestro aplicativo,
                            <br /> esperamos que tu experiencia
                            <br /> sea agradable en PLP.
                        </p>
                    }
                    ilustration={registerIlustration}
                    imgDesc='Ilustración de inicio de sesión'
                    imgStyle='w-[400px] h-[400px]'
                />
            </div>
            <div className='py-8'>
                <Footer />
            </div>
        </div>
    )
}
