import React from 'react'
import { NavLink } from 'react-router-dom'

export const RightMenu = ({ width, height }) => {

    const itemStyle = 'text-lg px-8 py-4 hover:bg-gray-100 mx-2 rounded-lg'

    return (
        <div className={`${width} ${height} bg-white py-2 rounded-xl`}>
            <div className='flex flex-col'>
                <NavLink to='/general-contratante' className={itemStyle}>
                    General
                </NavLink>
                <NavLink to='/publicaciones-contratante' className={itemStyle}>
                    Publicaciones
                </NavLink>
                <NavLink to='/terminos-condiciones' className={itemStyle}>
                    Terminos y condiciones
                </NavLink>
                <NavLink to='/ayuda-soporte' className={itemStyle}>
                    Ayuda
                </NavLink>
            </div>
        </div>
    )
}

