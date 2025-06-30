import { HiOutlineX } from 'react-icons/hi';
import { Switch } from '@headlessui/react';
import { useTheme } from '../../Context/ThemeContext';

export const ThemeModal = ({ isOpen, onClose }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60"> {/* Este bg-black/40 y dark:bg-black/60 puede ser problemático si no usas Tailwind dark */}
      <div className="theme-modal-container rounded-xl p-6 w-80 shadow-lg relative"> {/* Usa la clase CSS para el contenedor del modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white" // Aquí podrías usar una variable para el color del icono
        >
          <HiOutlineX size={20} />
        </button>
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Cambiar tema</h2> {/* Adapta estas clases también */}
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Modo oscuro</span> {/* Adapta estas clases también */}
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            className={`${isDarkMode ? 'bg-[#60efdb]' : 'bg-gray-300'}
              relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${isDarkMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}