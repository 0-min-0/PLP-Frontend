import { useEffect, useRef, useState } from 'react'
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi'
import { MenuItem } from '../../UI/MenuItem'
import { useMenu } from '../../Context/MenuContext'
import { ThemeModal } from '../../UI/Modals/ThemeModal'

export const MainMenu = () => {
  const { isOpen, setIsOpen } = useMenu()
  const menuRef = useRef(null)
  const [showThemeModal, setShowThemeModal] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className='relative' ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-2 rounded-md transition-all duration-300 menu-toggle-btn'
        aria-label='Toggle menu'
      >
        {isOpen ? (
          <HiOutlineX className='icon-menu h-7 w-7 cursor-pointer menu-icon' />
        ) : (
          <HiOutlineMenu className='icon-menu h-7 w-7 cursor-pointer menu-icon' />
        )}
      </button>

      {/* Fondo oscuro semitransparente cuando el menú está abierto */}
      {isOpen && (
        <div
          className='fixed inset-0 z-40 menu-overlay'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menú desplegable */}
      <div
        className={`menu-responsive menu-bg absolute z-50 right-0 mt-2 w-56 origin-top-right rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}
        role='menu'
      >
        <ul className='menu-list p-2'>
          <div className='mtitle-container flex text-left'>
            <h3 className=' menu-title menu-responsive-title'>Menú</h3>
          </div>
          <hr className='border-t border-gray-100' />
          <MenuItem to='/categorias-trabajo'>Categorías de trabajo</MenuItem>
          <MenuItem to='/sobre-plp'>Sobre PLP</MenuItem>
          <MenuItem click={() => setShowThemeModal(true)}>Tema (Predeterminado)</MenuItem>
          <MenuItem to='/chat-bot-ayuda'>Chat IA (Soporte)</MenuItem>
        </ul>
      </div>

      <ThemeModal
        isOpen={showThemeModal}
        onClose={() => setShowThemeModal(false)}
      />
    </div>
  )
}
