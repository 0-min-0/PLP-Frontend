import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMenu } from '../Context/MenuContext'

export const MenuItem = ({ to, click, children }) => {
  const { setIsOpen } = useMenu()
  const baseStyle = 'menu-item-responsive block px-4 py-3 text-sm rounded-md'
  const activeClass = 'menu-item-active'
  const inactiveClass = 'menu-item'

  if (to) {
    return (
      <li className='list-none'>
        <NavLink
          to={to}
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeClass : inactiveClass}`
          }
          onClick={() => setIsOpen(false)}
        >
          {children}
        </NavLink>
      </li>
    )
  }

  return (
    <li className='list-none'>
      <button
        onClick={() => {
          click?.()
          setIsOpen(false)
        }}
        className={`${baseStyle} ${inactiveClass} w-full text-left`}
      >
        {children}
      </button>
    </li>
  )
}
