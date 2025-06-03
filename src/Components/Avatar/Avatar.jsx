import { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { useSettings } from '../../Context/SettingsContext'

export const Avatar = ({ userName, userType = 'Contratante' }) => {
  const { userAvatar, avatarOptions, handleAvatarChange } = useSettings();
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);

  return (
    <div className='max-w-5xl mx-auto flex items-center relative'>
      <div className="relative group">
        {/* Avatar actual */}
        <div className="relative">
          <img
            src={userAvatar}
            alt='avatar'
            className='w-24 h-24 border-double border-8 border-[#60efdb] rounded-full 
                     transition-all duration-300 group-hover:brightness-95 cursor-pointer'
          />

          {/* Botón de edición */}
          <button
            onClick={() => setShowAvatarSelector(!showAvatarSelector)}
            className="absolute -bottom-2 -right-2 bg-[#60efdb] p-2 rounded-full
                      transition-all duration-300 hover:bg-[#405e7f] hover:scale-110"
            title="Cambiar avatar"
          >
            <FiEdit className='text-white' size={18} />
          </button>
        </div>

        {/* Selector de avatares */}
        {showAvatarSelector && (
          <div className="absolute z-20 mt-3 w-72 bg-white rounded-xl shadow-2xl 
                        border border-gray-100 p-4 animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-[#405e7f] font-semibold text-lg">Elige tu avatar</h4>
              <button
                onClick={() => setShowAvatarSelector(false)}
                className="text-gray-400 hover:text-[#405e7f] transition-colors"
                aria-label="Cerrar selector"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 max-h-60 overflow-y-auto custom-scrollbar">
              {avatarOptions.map((avatar, index) => (
                <button
                  key={index}
                  className={`p-1 rounded-lg transition-all duration-200 flex justify-center
                            ${userAvatar === avatar
                      ? 'bg-[#60efdb]/20 border-2 border-[#60efdb]'
                      : 'hover:bg-gray-100'}`}
                  onClick={() => {
                    handleAvatarChange(avatar);
                    setShowAvatarSelector(false);
                  }}
                  aria-label={`Seleccionar avatar ${index + 1}`}
                >
                  <img
                    src={avatar}
                    alt={`avatar-${index}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Información del usuario */}
      <div className='ml-6'>
        <h2 className='text-3xl font-bold text-[#405e7f]'>
          {userName || 'Nombre de usuario'}
        </h2>
        <h3 className='text-lg text-[#405e7f] opacity-80'>
          {userType}
        </h3>
      </div>
    </div>
  );
};
