import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const RightMenu = ({ width, height, menuItems }) => {
  const location = useLocation()
  const basePath = location.pathname.split('/').slice(0, 2).join('/')

  const baseItemStyle = 'text-lg text-[#405e7f] px-8 py-3 my-1 hover:bg-gray-50 mx-2 rounded-lg transition-colors duration-200'

  const getNavLinkStyle = ({ isActive }) =>
    isActive
      ? `${baseItemStyle} bg-gray-50 text-[#405e7f] hover:bg-gray-100`
      : baseItemStyle

  return (
    <div className={`${width} ${height} bg-white py-2 rounded-xl`}>
      <div className='flex flex-col'>
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={`${basePath}/${item.to}`}
            className={getNavLinkStyle}
            end
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}