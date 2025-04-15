import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { LoginForm } from '../../Components/LoginForm/LoginForm'
import { WelcomeText } from '../../UI/WelcomeText'
import { Footer } from '../../Components/Footer/Footer'
import loginIlustration from '../../assets/images/login-ilustration.png'

export const Login = () => {
    return (
        <div className='w-full h-full p-6 border-2 rounded-2xl border-[#405e7f]/70'>
            <Header
                headerClass='w-full flex justify-between items-center'
                middleObject={
                    <h1 className='text-6xl text-[#405e7f] ml-10 font-[arialBold] items-end'>
                        Plataforma Laboral Proactiva
                    </h1>
                }
                menu={<MainMenu />}
            />
            <div className='w-[100%] flex justify-center items-start pt-26 gap-20'>
                <LoginForm />
                <WelcomeText
                    text={ <p> Nos alegra tenerte denuevo en PLP, <br /> no te pierdas las nuevas ofertas <br /> laborales </p> }
                    ilustration={ loginIlustration }
                    imgDesc='Ilustración de inicio de sesión'
                    imgStyle='w-[400px] h-[400px]'
                />
            </div>
            <Footer />
        </div>
    )
}

