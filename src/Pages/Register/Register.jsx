import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { RegisterRolType } from '../../Components/RegisterForms/RegisterRolType'
import { WelcomeText } from '../../UI/WelcomeText'
import registerIlustration from '../../assets/images/register-ilustration.png'
import { Footer } from '../../Components/Footer/Footer'

export const Register = () => {
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
