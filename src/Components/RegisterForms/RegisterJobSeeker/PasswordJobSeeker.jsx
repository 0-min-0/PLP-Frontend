import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Header/Header'
import { Footer } from '../../Footer/Footer'
import { MainMenu } from '../../MainMenu/MainMenu'
import { WelcomeText } from '../../../UI/WelcomeText'
import registerIlustration from '../../../assets/images/register-ilustration.png'
import { FormsContainer } from '../../../UI/FormsContainer'
import { usePassword } from '../../../Context/PasswordContext'
import { UserInput } from '../../../UI/UserInput'
import { PasswordProvider } from '../../../Context/PasswordContext'

export const PasswordJobSeeker = () => {

    const { showPassword, setShowPassword } = usePassword()

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
                    title='Acceder'
                    changeForm={
                        <p className='text-[#405e7f] pt-4'>
                            ¿Ya estás registrado en nuestra plataforma?{' '}
                            <NavLink to='/acceder' className='text-[#405e7f] font-semibold hover:underline hover:text-[#405e7f]/60'>
                                Iniciar sesión
                            </NavLink>
                        </p>}
                    form={
                        <PasswordProvider>
                        <form action=''>

                            <UserInput
                                labelTitle='Crear contraseña'
                                isFor='createPassword'
                                iType={showPassword ? 'text' : 'password'}
                                iValue={userForm.userName}
                                iName='createPassword' 
                            />
                        </form>
                        </PasswordProvider>
                    }
                />

                <WelcomeText
                    text={<p> Nos alegra tener nuevos usuarios
                        <br /> como tu en nuestro aplicativo,
                        <br /> esperamos que tu experiencia
                        <br /> sea agradable en PLP. </p>}
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

