import React from 'react'
import { NavLink } from 'react-router-dom'

export const MenuItem = () => {

    const itemStyle = ''

    return (
        <div className='py-1'>
            <li><NavLink
                to='/categorias'
                className={({ isActive }) =>
                    `block px-4 py-2 m-2 text-sm ${isActive
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                }
                onClick={() => setIsOpen(false)}
            >
                Categorias de trabajo
            </NavLink>
            </li>

            <NavLink
                to='/contacto'
                className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${isActive
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                }
                onClick={() => setIsOpen(false)}
            >
                Contacto
            </NavLink>
            <NavLink
                to='/tema'
                className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${isActive
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                }
                onClick={() => setIsOpen(false)}
            >
                Tema (Predeterminado)
            </NavLink>
            <NavLink
                to='/ayuda'
                className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${isActive
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                }
                onClick={() => setIsOpen(false)}
            >
                Ayuda
            </NavLink>
        </div>
    )
}

