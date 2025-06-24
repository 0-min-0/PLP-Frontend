import React from 'react'
import plpLogo from '../assets/images/plpLogo.png'
import { NavLink } from 'react-router-dom'

export const InteractiveLogo = () => {
    return (
        <div>
            <NavLink to='/'>
                <div className='flex flex-col items-center'>
                    <img
                        src={plpLogo}
                        alt='Logo de PLP'
                        className='w-20 h-23 transition-transform duration-200'
                        title='Haz click para volver al inicio'
                    />
                </div>
            </NavLink>
        </div>
    )
}