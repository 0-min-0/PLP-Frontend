import { useEffect, useRef, useState } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { FiLogOut } from 'react-icons/fi'
import { MenuItem } from '../../UI/MenuItem'
import { useMenu } from '../../Context/MenuContext'
import { useSettings } from '../../Context/SettingsContext'
// import { useAuth } from '../../Context/AuthContext' // Asume que tienes un contexto de autenticación
import { LogoutModal } from '../../UI/Modals/LogoutModal' // Ajusta la ruta según tu estructura
import { useNavigate } from 'react-router-dom'

export const ProfileMenu = ({ settingsRoute, menuItems = [] }) => {
  const navigate = useNavigate()
  const { isOpen, setIsOpen } = useMenu()
  const { userAvatar, currentRoleName } = useSettings() 
  const menuRef = useRef(null)
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Cerrar con Escape
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
    logout()
    setShowLogoutModal(false)
    navigate('/')
  }

  // Items comunes a todos los roles
  const commonMenuItems = [
    { to: settingsRoute, label: 'Configuraciones' },
    { to: '/categorias', label: 'Categorías de trabajo' },
    { to: '/contacto', label: 'Contacto' },
    { to: '/tema', label: 'Tema' },
    { to: '/ayuda', label: 'Ayuda' }
  ]

  return (
    <div className='relative' ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 rounded-full hover:bg-[#60efdb] transition duration-300 ease-in-out'
        aria-label='Toggle profile menu'
      >
        <img
          src={userAvatar}
          alt='avatar'
          className='w-14 h-14 rounded-full border-6 border-double border-[#60efdb]'
        />
      </button>

      {isOpen && (
        <div className='fixed inset-0 bg-gray-800/30 z-40' onClick={() => setIsOpen(false)} />
      )}

      <div
        className={`absolute z-50 right-0 mt-2 w-64 origin-top-right bg-white rounded-lg shadow-lg focus:outline-none transition-all duration-300 ease-in-out transform ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
        role='menu'
      >
        <ul className='p-2'>
          <div className='flex justify-between items-center p-3 border-b border-gray-100'>
            <h3 className='font-bold text-gray-900 truncate max-w-[180px]'>{currentRoleName}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className='p-1 rounded-md hover:bg-gray-100'
            >
              <HiOutlineX className='h-5 w-5 text-gray-500' />
            </button>
          </div>

          {commonMenuItems.map((item) => (
            <MenuItem key={item.to} to={item.to}>
              {item.label}
            </MenuItem>
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
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
            >
              <span>Cerrar sesión</span>
              <FiLogOut className='w-4 h-4' />
            </button>
          </li>
        </ul>
      </div>

      {/* Modal de confirmación de cierre de sesión */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleConfirmLogout}
      />
    </div>
  );
};