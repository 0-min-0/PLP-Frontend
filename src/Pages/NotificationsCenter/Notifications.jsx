import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { notifications as initialNotifications } from '../../Utils/objectsExample'
import { motion, AnimatePresence } from 'framer-motion'
import { LuMail, LuMailOpen } from 'react-icons/lu'
import { HiMiniArrowUturnLeft } from 'react-icons/hi2'
import { useChatIA } from '../../Context/ChatIAContext'
import { InteractiveLogoMain } from '../../UI/InteractiveLogo'

export const Notifications = () => {
  const [activeNotification, setActiveNotification] = useState(null)
  const [readStatus, setReadStatus] = useState(
    initialNotifications.map(() => false)
  )
  const { homeRoute } = useChatIA()

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  const handleOpen = (index) => {
    setActiveNotification(index)
    setReadStatus(prev =>
      prev.map((read, i) => (i === index ? true : read))
    )
  }

  return (
    <div className='h-full p-6 back-color'>
      <Header
        middleObject={
          <h1 className='text-5xl font-[afacadBold] text-primary-color'>
            Centro de notificaciones
          </h1>
        }
        logo={
          <InteractiveLogoMain
            mainRoute={homeRoute}
          />
        }
        buttons={
          <NavLink to={homeRoute}>
            <HiMiniArrowUturnLeft className='w-8 h-8 text-white ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ml-6' />
          </NavLink>
        }
      />
      <div className='max-w-7xl mx-auto mt-4'>
        <h3 className='mb-4 text-xl text-[color:var(--color-card-text)]'>
          Aqui podras ver todas tus notificaciones y estar al pendiente tanto de lo que suceda con postulaciones, hojas de vida y demás.
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Lista de notificaciones */}
          <div className="md:col-span-1 h-[600px] overflow-y-auto scrollbar-custom pr-2 space-y-3">
            {initialNotifications.map((item, index) => (
              <div
                key={index}
                onClick={() => handleOpen(index)}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all mr-2 ${readStatus[index]
                  ? 'notifications'
                  : 'unread-notify'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[color:var(--color-card-text)] text-base">
                    {item.name}
                  </h3>
                  {readStatus[index] ? (
                    <LuMailOpen className='w-6 h-6 notify-icon' />
                  ) : (
                    <LuMail className='w-6 h-6 text-[#60efdb]' />
                  )}
                </div>
                <p className='text-[color:var(--color-card-text)] text-sm mt-1'>
                  {formatDate(item.date)}
                </p>
              </div>
            ))}
          </div>

          {/* Vista de detalle con animaciones */}
          <div className="md:col-span-2 p-6 border-2 border-gray-200 rounded-xl min-h-[300px] relative">
            <AnimatePresence mode="wait">
              {activeNotification !== null ? (
                <motion.div
                  key={activeNotification}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <h3 className="text-xl font-bold text-[color:var(--color-card-text)] mb-2">
                    {initialNotifications[activeNotification].name}
                  </h3>
                  <p className="text-sm text-[color:var(--color-card-text)] mb-4">
                    {formatDate(initialNotifications[activeNotification].date)}
                  </p>
                  <p className="text-[color:var(--color-card-text)] text-base leading-relaxed">
                    {initialNotifications[activeNotification].notification}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key="placeholder"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="text-[color:var(--color-card-text)] text-center"
                >
                  Selecciona una notificación para verla en detalle
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
