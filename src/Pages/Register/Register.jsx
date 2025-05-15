import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { RegisterRolType } from '../../Components/RegisterForms/RegisterRolType'
import { WelcomeText } from '../../UI/WelcomeText'
import registerIlustration from '../../assets/images/register-ilustration.png'
import { Footer } from '../../Components/Footer/Footer'
import { InteractiveLogo } from '../../UI/InteractiveLogo'

export const Register = () => {
    return (
        <div className='w-full'>
            <Header
                middleObject={<h1>Registrarse</h1>}
            />
            <div className='flex justify-center items-start gap-20'>
                <RegisterRolType />
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
            <div className='py-4'>
                <Footer />
            </div>
        </div>
    )
}
