import React from 'react'
import { Button } from '../../UI/button'
import mainIlustration from '../../assets/images/main-ilustration.png'

export const WelcomeText = () => {
    return (
        <div className='flex justify-evenly items-center'>
            <div className=''>
                <h1 className='text-4xl font-bold text-[#254160]'>Solo necesitas de tus <br />
                    habilidades y tu experiencia</h1>
                <p>La plataforma que te brinda numerosas oportunidades de trabajo <br /> sin necesidad de un titulo profesional</p>
                <div className='flex gap-4 mt-4'>
                    <Button 
                       btnType='button' 
                       btnName='Continuar con Google'
                       btnStyle='flex items-center bg-[#405e7f] text-white rounded-full px-4 py-2 hover:bg-[#405e7f]'
                       btnIcon='google'
                    />
                    <Button 
                       btnType='button' 
                       btnName='Iniciar Sesion con Correo'
                       btnStyle='flex items-center bg-[#405e7f] text-white rounded-full px-4 py-2 hover:bg-[#405e7f]'
                       btnIcon='email'
                    />
                </div>
            </div>
            <div>
                <img src={ mainIlustration } alt='Ilustracion Principal' />
            </div>
        </div>
    )
}
