import React from 'react'
import plpLogo from '../assets/images/plpLogo.png'
import { NavLink } from 'react-router-dom'

export const InteractiveLogo = () => {
    return (
        <div className='group relative'>
            <NavLink to='/'>
                <div className='flex flex-col items-center'>
                    <img
                        src={plpLogo}
                        alt='Logo de PLP'
                        className='w-20 h-23 transition-transform duration-200 group-hover:scale-105'
                    />
                    <p className='text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1
                    2xl: text-sm'>
                        Haz click para volver <br /> a la pagina principal
                    </p>
                </div>
            </NavLink>
        </div>
    )
}