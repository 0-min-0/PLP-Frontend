import { HiOutlineX } from 'react-icons/hi'
import { Switch } from '@headlessui/react'
import { useTheme } from '../../Context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

export const ThemeModal = ({ isOpen, onClose }) => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='modal-theme-responsive general text-[color:var(--color-card-text)] rounded-2xl shadow-xl w-80 max-w-sm p-8 relative'
          >
            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="icon-close icons absolute p-1 rounded-lg top-3 right-3 text-gray-400 cursor-pointer"
            >
              <HiOutlineX className='icon-close-x w-5 h-5' />
            </button>

            {/* Título */}
            <h2 className="theme-modal-text text-xl font-semibold mb-4">CAMBIAR TEMA</h2>

            {/* Switch con etiqueta */}
            <div className="flex items-center justify-between">
              <span className="theme-modal-subtext text-lg font-medium">Modo oscuro</span>
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                className={`relative inline-flex switch h-6 w-11 items-center rounded-full transition-colors duration-300 cursor-pointer
                ${isDarkMode ? 'bg-[#60efdb]' : 'bg-gray-300'}`}
              >
                <span
                  className={`inline-block switch-circle h-4 w-4 transform rounded-full bg-white transition-transform duration-300
                  ${isDarkMode ? 'switch-circle translate-x-6' : 'switch-circle translate-x-1'}`}
                />
              </Switch>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
