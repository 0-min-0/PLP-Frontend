import { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { NameModal } from '../../UI/Modals/NameModal'
import { useLocation } from 'react-router-dom'
import { HiOutlineX } from 'react-icons/hi'
import { useUser } from '../../Context/UserContext'

export const Avatar = () => {
  const { user, avatarOptions, handleNameChange, handleAvatarChange } = useUser()
  const [avatarSelector, setAvatarSelector] = useState(false)
  const [isEditingName, setIsEditingName] = useState(false)
  const location = useLocation()

  const getRoleFromPath = () => {
    const path = location.pathname
    if (path.includes('/configuraciones-contratista')) return 'Contratista'
    if (path.includes('/configuraciones-empresa')) return 'Empresa'
    if (path.includes('/configuraciones-contratante')) return 'Contratante'
    return ''
  }

  const currentDisplayRole = getRoleFromPath()

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

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
  }

  return (
    <div className='max-w-5xl mx-auto flex items-center relative'>
      <NameModal
        isOpen={isEditingName}
        onClose={() => setIsEditingName(false)}
        currentName={user.name}
        onSave={handleNameChange}
        currentRole={currentDisplayRole}
      />

      <div className="relative group">
        <div className="relative">
          <img
            src={user.avatar}
            alt='avatar'
            className='avatar-edit w-24 h-24 border-double border-8 border-[#60efdb] rounded-full 
                     transition-all duration-300 group-hover:brightness-95'
          />
          <button
            onClick={() => setAvatarSelector(!avatarSelector)}
            className='absolute -bottom-1 -right-2 bg-[#60efdb] p-2 rounded-full
                      transition-all duration-300 hover:-translate-y-0.5 
                      hover:shadow-md active:scale-[0.98] cursor-pointer'
            title='Cambiar avatar'
          >
            <FiEdit className='edit-icon w-4.5 h-4.5 text-[#405e7f]' />
          </button>
        </div>

        <AnimatePresence>
          {avatarSelector && (
            <>
              <motion.div
                className="fixed inset-0 z-40"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={backdropVariants}
                onClick={() => setAvatarSelector(false)}
              />

              <motion.div
                className="avatar-selector absolute z-50 mt-3 w-80 back-color rounded-xl shadow-lg border border-gray-100 p-6"
                variants={selectorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className='flex justify-between items-center mb-4'>
                  <h4 className='text text-[color:var(--color-card-text)] font-semibold text-lg'>Elige tu avatar</h4>
                  <button
                    onClick={() => setAvatarSelector(false)}
                    className='text-[color:var(--color-card-text)] hover:bg-gray-100 p-1 rounded-md transition-colors cursor-pointer'
                    aria-label='Cerrar selector'
                  >
                    <HiOutlineX className='icon-close-x w-5 h-5' />
                  </button>
                </div>

                <div className='avatar-space grid grid-cols-3 gap-3 max-h-60 overflow-y-auto custom-scrollbar'>
                  {avatarOptions.map((avatar, index) => (
                    <button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`avatar-option p-1 rounded-lg transition-all duration-200 flex justify-center cursor-pointer
                                ${user.avatar === avatar
                          ? 'bg-[#60efdb]/20 border-2 border-[#60efdb]'
                          : 'hover:bg-gray-100'}`}
                      onClick={() => {
                        handleAvatarChange(avatar)
                        setAvatarSelector(false)
                      }}
                      aria-label={`Seleccionar avatar ${index + 1}`}
                    >
                      <img
                        src={avatar}
                        alt={`avatar-${index}`}
                        className="avatar-img w-16 h-16 rounded-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <div className='ml-6 relative group'>
        <div className='flex items-center'>
          <h2 className='user-name text-3xl font-bold text-[color:var(--color-card-text)] truncate max-w-[500px]'>
            {user.name}
          </h2>
          <button
            onClick={() => setIsEditingName(true)}
            className='ml-2 p-2 rounded-full hover:bg-[#60efdb]/20 transition-colors duration-300 cursor-pointer'
            title='Editar nombre'
          >
            <FiEdit className='edit-icon w-4.5 h-4.5 text-[color:var(--color-card-text)]' />
          </button>
        </div>
        <h3 className='role-user text-lg text-[color:var(--color-card-text)] opacity-80'>
          {currentDisplayRole}
        </h3>
      </div>
    </div>
  )
}