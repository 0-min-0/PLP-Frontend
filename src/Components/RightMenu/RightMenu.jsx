import React from 'react'
import { NavLink } from 'react-router-dom'

export const RightMenu = ({ width, height }) => {
    const baseItemStyle = 'text-lg text-[#405e7f] px-8 py-3 my-1 hover:bg-gray-50 mx-2 rounded-lg transition-colors duration-200'

    const getNavLinkStyle = ({ isActive }) =>
        isActive
            ? `${baseItemStyle} bg-gray-50 text-[#405e7f] hover:bg-gray-100`
            : baseItemStyle

    return (
        <div className={`${width} ${height} bg-white py-2 rounded-xl`}>
            <div className='flex flex-col'>
                <NavLink
                    to='general-contratante'
                    className={getNavLinkStyle}
                >
                    General
                </NavLink>
                <NavLink
                    to='publicaciones-contratante'
                    className={getNavLinkStyle}
                >
                    Publicaciones
                </NavLink>
                <NavLink
                    to='terminos-condiciones'
                    className={getNavLinkStyle}
                >
                    Terminos y condiciones
                </NavLink>
                <NavLink
                    to='ayuda-soporte'
                    className={getNavLinkStyle}
                >
                    Ayuda
                </NavLink>
            </div>
        </div>
    )
}