import { useEffect, useRef } from 'react'
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi'
import { MenuItem } from '../../UI/MenuItem'
import { useMenu } from '../../Context/MenuContext'

export const MainMenu = () => {

  const { isOpen, setIsOpen } = useMenu()
  const menuRef = useRef(null)

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
        className='p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100'
        aria-label='Toggle menu'
      >
        {isOpen ? <HiOutlineX className='h-7 w-7 cursor-pointer' /> : <HiOutlineMenu className='h-7 w-7 cursor-pointer' />}
      </button>
      {isOpen && (
        <div className='fixed inset-0 bg-gray-800/30 z-40' onClick={() => setIsOpen(false)} />
      )}

      <div
        className={`absolute z-50 right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${isOpen
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}
        role='menu'
      >
        <ul className='p-2'>
          <div className='flex text-left p-3 text-4 text-gray-700'>
            <h3 className='font-bold'>
              Menú
            </h3>
          </div>
            <MenuItem to='/categorias-trabajo'>Categorias de trabajo</MenuItem>
            <MenuItem to='/contacto'>Sobre PLP</MenuItem>
            <MenuItem to='/tema'>Tema (Predeterminado)</MenuItem>
            <MenuItem to='/chat-bot-ayuda'>Chat IA (Soporte)</MenuItem>
        </ul>
      </div>
    </div>
  )
}


