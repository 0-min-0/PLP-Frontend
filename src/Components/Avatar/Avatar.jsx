import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useSettings } from '../../Context/SettingsContext';
import { NameModal } from '../../UI/NameModal';

export const Avatar = () => {
  const { 
    currentRole,
    userAvatar,
    userName,
    avatarOptions,
    handleAvatarChange,
    handleNameChange
  } = useSettings();
  
  const [avatarSelector, setAvatarSelector] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);

  // Animaciones
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const selectorVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      scale: 0.98
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      y: 20,
      opacity: 0,
      scale: 0.98,
      transition: {
        ease: 'easeIn'
      }
    }
  };

  // Etiquetas de rol
  const roleLabels = {
    contratista: 'Contratista',
    contratante: 'Contratante',
    empresa: 'Empresa'
  };

  return (
    <div className='max-w-5xl mx-auto flex items-center relative'>
      {/* Modal de edición de nombre */}
      <NameModal
        isOpen={isEditingName}
        onClose={() => setIsEditingName(false)}
        currentName={userName}
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
                      transition-all duration-300 hover:-translate-y-0.5 
                      hover:shadow-md active:scale-[0.98] cursor-pointer'
            title='Cambiar avatar'
          >
            <FiEdit className='text-[#405e7f]' size={18} />
          </button>
        </div>
        
        {/* Selector de avatares */}
        <AnimatePresence>
          {avatarSelector && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/20 z-40"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={backdropVariants}
                onClick={() => setAvatarSelector(false)}
              />
              
              <motion.div
                className="absolute z-50 mt-3 w-72 bg-white rounded-xl shadow-lg border border-gray-100 p-6"
                variants={selectorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className='flex justify-between items-center mb-4'>
                  <h4 className='text-[#405e7f] font-semibold text-lg'>Elige tu avatar</h4>
                  <button
                    onClick={() => setAvatarSelector(false)}
                    className='text-gray-400 hover:bg-gray-100 p-1 rounded-md transition-colors'
                    aria-label='Cerrar selector'
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className='grid grid-cols-3 gap-3 max-h-60 overflow-y-auto custom-scrollbar'>
                  {avatarOptions.map((avatar, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-1 rounded-lg transition-all duration-200 flex justify-center cursor-pointer
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
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Información del usuario */}
      <div className='ml-6 relative group'>
        <div className='flex items-center'>
          <h2 className='text-3xl font-bold text-[#405e7f]'>
            {userName}
          </h2>
          <button
            onClick={() => setIsEditingName(true)}
            className='ml-2 p-2 rounded-full hover:bg-[#60efdb]/20 transition-colors duration-300 cursor-pointer'
            title='Editar nombre'
          >
            <FiEdit className='text-[#405e7f]' size={20} />
          </button>
        </div>
        <h3 className='text-lg text-[#405e7f] opacity-80'>
          {roleLabels[currentRole] || 'Usuario'}
        </h3>
      </div>
    </div>
  );
};