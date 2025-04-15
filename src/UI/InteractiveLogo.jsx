import React from 'react'
import plpLogo from '../assets/images/plpLogo.jpg'
import { NavLink } from 'react-router-dom'

export const InteractiveLogo = () => {

    const logoStyles = 'w-20 h-23'

    return (
        <div>
            <NavLink to='/'>
                <img
                    title='Haz click para volver a la pagina principal'
                    src={plpLogo}
                    alt='plpLogo'
                    className={logoStyles}
                />
            </NavLink>
        </div>
    )

}
