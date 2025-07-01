import { useEffect, useRef, useState } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { FiLogOut } from 'react-icons/fi'
import { MenuItem } from '../../UI/MenuItem'
import { useMenu } from '../../Context/MenuContext'
import { useUser } from '../../Context/UserContext'
import { LogoutModal } from '../../UI/Modals/LogoutModal'
import { ThemeModal } from '../../UI/Modals/ThemeModal'
import { useNavigate, useLocation } from 'react-router-dom'

export const ProfileMenu = ({ settingsRoute, categoriesRoute, aboutRoute, menuItems = [] }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isOpen, setIsOpen } = useMenu()
  const { user } = useUser()
  const menuRef = useRef(null)

  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [showThemeModal, setShowThemeModal] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const getRoleFromPath = () => {
    const path = location.pathname
    if (path.includes('/configuraciones-contratista')) return 'Contratista'
    if (path.includes('/configuraciones-empresa')) return 'Empresa'
    if (path.includes('/configuraciones-contratante')) return 'Contratante'
    return ''
  }

  const currentRoleName = getRoleFromPath()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleLogoutClick = () => {
    setIsOpen(false)
    setShowLogoutModal(true)
  }

  const handleConfirmLogout = () => {
    setShowLogoutModal(false)
    navigate('/')
  }

  const commonMenuItems = [
    { to: settingsRoute, label: 'Configuraciones' },
    { to: categoriesRoute, label: 'Categorías de trabajo' },
    { to: aboutRoute, label: 'Sobre PLP' },
    { to: '/tema', label: 'Tema (Predeterminado)', onClick: () => setShowThemeModal(true) },
    { to: '/ayuda-soporte', label: 'Ayuda' }
  ]

  return (
    <div className='relative' ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 rounded-full hover:bg-[#60efdb] transition duration-300 ease-in-out cursor-pointer'
        aria-label='Toggle profile menu'
      >
        <img
          src={user.avatar}
          alt='avatar'
          className='w-14 h-14 rounded-full border-6 border-double border-[#60efdb]'
        />
      </button>

      {isOpen && (
        <div className='fixed inset-0 bg-gray-800/30 z-40' onClick={() => setIsOpen(false)} />
      )}

      <div
        className={`absolute z-50 right-0 mt-2 w-64 origin-top-right menu-bg rounded-lg shadow-lg focus:outline-none transition-all duration-300 ease-in-out transform ${isOpen
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}
        role='menu'
      >
        <ul className='p-2'>
          <div className='flex justify-between items-center p-3 border-b border-gray-100'>
            <div className='flex flex-col'>
              <h3 className='font-bold text-[color:var(--color-card-text)] truncate max-w-[180px]'>{user.name}</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='icons p-1 rounded-md hover:bg-gray-100 cursor-pointer'
            >
              <HiOutlineX className='h-5 w-5' />
            </button>
          </div>

          {commonMenuItems.map((item) => (
            <li key={item.to}>
              <button
                onClick={() => {
                  if (item.onClick) item.onClick()
                  else navigate(item.to)
                  setIsOpen(false)
                }}
                className='w-full menu-item text-left px-4 py-3 rounded-md text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
              >
                {item.label}
              </button>
            </li>
          ))}

          {menuItems.map((item) => (
            <MenuItem key={item.to} to={item.to}>
              {item.label}
            </MenuItem>
          ))}

          <hr className='border-t border-gray-100' />
          <li>
            <button
              onClick={handleLogoutClick}
              className="menu-item w-full px-4 py-3 text-left rounded-md text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
            >
              <span>Cerrar sesión</span>
              <FiLogOut className='w-4 h-4' />
            </button>
          </li>
        </ul>
      </div>

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleConfirmLogout}
      />

      <ThemeModal
        isOpen={showThemeModal}
        onClose={() => setShowThemeModal(false)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  )
}
