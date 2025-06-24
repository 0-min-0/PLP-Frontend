import { HiOutlineX } from 'react-icons/hi'
import { Switch } from '@headlessui/react'

export const ThemeModal = ({ isOpen, onClose, isDarkMode, onToggleTheme }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-80 shadow-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
          <HiOutlineX size={20} />
        </button>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Cambiar tema</h2>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Modo oscuro</span>
          <Switch
            checked={isDarkMode}
            onChange={onToggleTheme}
            className={`${isDarkMode ? 'bg-[#60efdb]' : 'bg-gray-300'} 
              relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>
      </div>
    </div>
  )
}
