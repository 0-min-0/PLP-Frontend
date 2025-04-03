import { useState, useEffect, useRef } from 'react'
import { HiOutlineX, HiMenu } from 'react-icons/hi'
import { MenuItem } from '../../UI/MenuItem'

export const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [])

  return (
    <div className='relative' ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400'
        aria-label='Toggle menu'
      >
        {isOpen ? <HiOutlineX className='h-6 w-6' /> : <HiMenu className='h-6 w-6' />}
      </button>
      {isOpen && (
        <div className='fixed inset-0 bg-gray-800/20' onClick={() => setIsOpen(false)} />
      )}


      {/* Menú desplegable */}
      <div
        className={`absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg focus:outline-none transition-all duration-300 ease-in-out transform ${isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}
        role='menu'
      >
        <ul>
          <div className='p-2'>
          <div className='flex text-left px-2 text-4 font-medium text-gray-700'>
            <h3>Menú</h3>
          </div>
          </div>
        </ul>
      </div>
    </div>
  )
}


