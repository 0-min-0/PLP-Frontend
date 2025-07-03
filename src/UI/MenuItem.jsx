import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMenu } from '../Context/MenuContext'

export const MenuItem = ({ to, click, children }) => {
  const { setIsOpen } = useMenu()
  const baseStyle = 'menu-item-responsive block px-4 py-3 text-sm rounded-md'

  const getLinkStyle = ({ isActive }) =>
    `${baseStyle} ${
      isActive
        ? 'menu-item-active'
        : 'menu-item'
    }`

  return (
    <li className='list-none' onClick={click}>
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
