import React, { useRef } from 'react'
import { NavLink, useLocation, Outlet } from 'react-router-dom'
import { categories } from '../../Utils/options'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Header } from '../../Components/Header/Header'
import { HiMiniArrowUturnLeft } from 'react-icons/hi2'
import { useChatIA } from '../../Context/ChatIAContext'
import { InteractiveLogoMain } from '../../UI/InteractiveLogo'

export const Jobs = () => {
  const location = useLocation()
  const basePath = location.pathname.split('/').slice(0, 2).join('/')
  const menuRef = useRef(null)
  const { homeRoute } = useChatIA()

  const scroll = (direction) => {
    if (menuRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      menuRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const baseItemStyle = `text-lg px-4 py-2 my-1 mx-1 rounded-full whitespace-nowrap bg-[#60efdb] text-[#405e7f] hover:shadow-sm
                         ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]`

  const getNavLinkStyle = ({ isActive }) =>
    isActive
      ? `${baseItemStyle} bg-[#405e7f] text-white hover:bg-[#405e7f] font-medium`
      : baseItemStyle

  return (
    <div className='w-full h-full vacancy-back p-6'>
      <Header
        middleObject={
          <h1 className='text-5xl font-[afacadBold] text-[color:var(--color-card-text)]'>
            Categorías de trabajo
          </h1>
        }
        logo={
          <InteractiveLogoMain
            mainRoute={homeRoute}
          />
        }
        buttons={
          <NavLink to={homeRoute}>
            <HiMiniArrowUturnLeft className='w-8 h-8 text-[color:var(--color-card-text)] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ml-6' />
          </NavLink>
        }
      />
      {/* Menú de categorías con flechas de navegación */}
      <div className='relative flex items-center py-8 px-12'>
        <button
          onClick={() => scroll('left')}
          className='p-2 rounded-full hover:bg-gray-100 z-10 bg-white shadow-md cursor-pointer'
        >
          <FiChevronLeft className="text-[#405e7f] text-xl" />
        </button>

        <div
          ref={menuRef}
          className='flex flex-row px-2 overflow-x-hidden scroll-smooth mx-2 flex-1'
        >
          <NavLink
            to={basePath}
            className={getNavLinkStyle}
            end
          >
            Todas
          </NavLink>
          {categories.map((category) => (
            <NavLink
              key={category.value}
              to={`${basePath}/${category.value}`}
              className={getNavLinkStyle}
              end
            >
              {category.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className='p-2 rounded-full hover:bg-gray-100 z-10 bg-white shadow-md cursor-pointer'
        >
          <FiChevronRight className="text-[#405e7f] text-xl" />
        </button>
      </div>

      {/* Contenido de la categoría seleccionada */}
      <div>
        <Outlet />
      </div>
    </div>
  )
}