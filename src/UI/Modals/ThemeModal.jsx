import { HiOutlineX } from 'react-icons/hi'
import { Switch } from '@headlessui/react'
import { useTheme } from '../../Context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { RadioGroup } from '@headlessui/react'

export const ThemeModal = ({ isOpen, onClose }) => {
  const { theme, toggleTheme, isDarkMode, toggleDarkMode } = useTheme()

  const themeOptions = [
    { id: 'light', name: 'Claro' },
    { id: 'dark', name: 'Oscuro' },
    { id: 'system', name: 'Sistema' }
  ]

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
            <h2 className="theme-modal-text text-xl font-semibold mb-6">PREFERENCIAS DE TEMA</h2>

            {/* Selector de tema */}
            <div className="mb-6">
              <RadioGroup value={theme} onChange={toggleTheme}>
                <RadioGroup.Label className="sr-only">Selecciona un tema</RadioGroup.Label>
                <div className="space-y-2">
                  {themeOptions.map((option) => (
                    <RadioGroup.Option
                      key={option.id}
                      value={option.id}
                      className={({ active, checked }) =>
                        `${
                          active || checked
                            ? 'ring-2 ring-[#60efdb] ring-opacity-60'
                            : ''
                        }
                        ${
                          checked ? 'bg-[#60efdb]/10 text-[#60efdb]' : 'bg-white/5'
                        }
                        relative rounded-lg px-5 py-3 cursor-pointer flex focus:outline-none transition-all`
                      }
                    >
                      {({ checked }) => (
                        <>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium ${
                                    checked ? 'text-[#60efdb]' : 'text-[color:var(--color-card-text)]'
                                  }`}
                                >
                                  {option.name}
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="flex-shrink-0 text-[#60efdb]">
                                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Switch rápido (para compatibilidad) */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="theme-modal-subtext text-lg font-medium">Alternar rápido</span>
              <Switch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className={`relative inline-flex switch h-6 w-11 items-center rounded-full transition-colors duration-300 cursor-pointer
                ${isDarkMode ? 'bg-[#60efdb]' : 'bg-gray-300'}`}
              >
                <span
                  className={`inline-block switch-circle h-4 w-4 transform rounded-full bg-white transition-transform duration-300
                  ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </Switch>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}