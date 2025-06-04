import { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { useSettings } from '../../Context/SettingsContext'
import { NameModal } from '../../UI/NameModal'

export const Avatar = ({ userType = 'Contratante' }) => {
  const { 
    userAvatar, 
    avatarOptions, 
    userData, 
    isEditingName, 
    setIsEditingName,
    handleAvatarChange,
    handleNameChange
  } = useSettings()
  
  const [avatarSelector, setAvatarSelector] = useState(false)

  return (
    <div className='max-w-5xl mx-auto flex items-center relative'>
      {/* Modal de edición de nombre */}
      <NameModal
        isOpen={isEditingName}
        onClose={() => setIsEditingName(false)}
        currentName={userData?.nameEmployer || ''}
        onSave={handleNameChange}
      />

      {/* Avatar y selector */}
      <div className="relative group">
        <div className="relative">
          <img
            src={userAvatar}
            alt='avatar'
            className='w-24 h-24 border-double border-8 border-[#60efdb] rounded-full 
                     transition-all duration-300 group-hover:brightness-95'
          />
          <button
            onClick={() => setAvatarSelector(!avatarSelector)}
            className='absolute -bottom-1 -right-2 bg-[#60efdb] p-2 rounded-full
                      transition-all duration-300 transition-all duration-500 
                      ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform hover:-translate-y-0.5 
                      hover:shadow-md active:scale-[0.98] cursor-pointer'
            title='Cambiar avatar'
          >
            <FiEdit className='text-[#405e7f]' size={18} />
          </button>
        </div>
        
        {avatarSelector && (
          <div className='absolute z-20 mt-3 w-95 h-75 bg-white rounded-xl shadow-lg border border-gray-100 p-8 animate-fade-in'>
            <div className='flex justify-between items-center mb-3'>
              <h4 className='text-[#405e7f] font-semibold text-lg'>Elige tu avatar</h4>
              <button
                onClick={() => setAvatarSelector(false)}
                className='text-gray-400 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors cursor-pointer'
                aria-label='Cerrar selector'
              >
                ✕
              </button>
            </div>
            <div className='grid grid-cols-3 gap-3 max-h-60 overflow-y-auto custom-scrollbar'>
              {avatarOptions.map((avatar, index) => (
                <button
                  key={index}
                  className={`p-1 m-2 rounded-lg transition-all duration-200 flex justify-center cursor-pointer
                            ${userAvatar === avatar
                      ? 'bg-[#60efdb]/20 border-2 border-[#60efdb]'
                      : 'hover:bg-gray-100'}`}
                  onClick={() => {
                    handleAvatarChange(avatar);
                    setAvatarSelector(false);
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

      {/* Información del usuario con botón de edición */}
      <div className='ml-6 relative group'>
        <div className='flex items-center'>
          <h2 className='text-3xl font-bold text-[#405e7f]'>
            {userData?.nameEmployer || 'Nombre de usuario'}
          </h2>
          <button
            onClick={() => setIsEditingName(true)}
            className='ml-3 p-1 rounded-full hover:bg-[#60efdb]/20 transition-colors duration-300'
            title='Editar nombre'
          >
            <FiEdit className='text-[#405e7f]' size={18} />
          </button>
        </div>
        <h3 className='text-lg text-[#405e7f] opacity-80'>
          {userType}
        </h3>
      </div>
    </div>
  )
}