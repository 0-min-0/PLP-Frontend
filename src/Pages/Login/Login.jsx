import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { LoginForm } from '../../Components/LoginForm/LoginForm'
import { WelcomeText } from '../../UI/WelcomeText'
import { Footer } from '../../Components/Footer/Footer'
import loginIlustration from '../../assets/images/login-ilustration.png'
import { LoginProvider } from '../../Context/LoginContext'

export const Login = () => {
    return (
        <div className='w-full h-full'>
            <Header
                middleObject={
                    <h1 className='text-6xl mb-8 font-[afacadBold] text-[#405e7f]'>
                        Iniciar sesión
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
            <div className='w-[100%] flex justify-center items-start mt-12 gap-20'>
                <LoginProvider>
                    <LoginForm />
                </LoginProvider>
                <WelcomeText
                    text={ <p> Nos alegra tenerte denuevo en PLP, <br /> no te pierdas las nuevas ofertas <br /> laborales </p> }
                    ilustration={ loginIlustration }
                    imgDesc='Ilustración de inicio de sesión'
                    imgStyle='w-[400px] h-[400px]'
                />
            </div>
        </div>
    )
}

