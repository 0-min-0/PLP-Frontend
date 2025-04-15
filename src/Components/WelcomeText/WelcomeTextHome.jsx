import React from 'react'
import { Button } from '../../UI/button'
import mainIlustration from '../../assets/images/home-ilustration.png'
import { InfoContainer } from '../InfoContainer/InfoContainer'
import { NavLink } from 'react-router-dom'

export const WelcomeTextHome = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex gap-40'>
                <div className=' flex flex-col text-center justify-center items-center'>
                    <h1 className='text-6xl font-[arialBold] font-extrabold text-[#254160] mb-8'>Solo necesitas de tus <br />
                        habilidades y tu experiencia</h1>
                    <p
                        className='text-[#405e7f] text-xl mb-4'>
                        La plataforma que te brinda numerosas oportunidades de trabajo
                        <br /> sin necesidad de un titulo profesional
                    </p>
                    <div className='flex gap-6 mt-4 z-1'>
                        <Button
                            btnType='button'
                            btnName='Continuar con Google'
                            btnStyle='flex items-center bg-[#405e7f] text-white rounded-full px-4 py-2 hover:bg-[#405e7f]'
                            btnIcon='google'
                        />
                        <NavLink to='/acceder'>
                            <Button
                                btnType='button'
                                btnName='Iniciar Sesion con Correo'
                                btnStyle='flex items-center bg-[#405e7f] text-white rounded-full px-4 py-2 hover:bg-[#405e7f]'
                                btnIcon='email'
                            />
                        </NavLink>
                    </div>
                </div>
                <div>
                    <img className='w-115 h-115 m-0 p-0' src={mainIlustration} alt='Ilustracion Principal' />
                </div>
            </div>
            <InfoContainer />
        </div>
    )
}
