import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMenu } from '../Context/MenuContext'

export const MenuItem = ({ to, children }) => {

    const { setIsOpen } = useMenu();
    const baseStyle = 'block px-4 py-3 text-sm rounded-md'

    const getLinkStyle = ({ isActive }) =>
        `${baseStyle} ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`

    return (
        <li className='list-none'>
            <NavLink
                to={to}
                className={getLinkStyle}
                onClick={() => setIsOpen(false)}
            >
                {children}
            </NavLink>
        </li>
    )
}


