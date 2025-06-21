import { useState } from 'react'
import { Header } from '../../Components/Header/Header'
import { notifications as initialNotifications } from '../../Utils/objectsExample'
import { motion, AnimatePresence } from 'framer-motion'
import { LuMail, LuMailOpen } from 'react-icons/lu'
import { ProfileMenu } from '../../Components/ProfileMenu/ProfileMenu'

export const Notifications = () => {
  const [activeNotification, setActiveNotification] = useState(null)
  const [readStatus, setReadStatus] = useState(
    initialNotifications.map(() => false)
  )

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
    <div className='p-6'>
      <Header
        middleObject={
          <h1 className='text-5xl mb-8 font-[afacadBold] text-[#405e7f]'>
            Centro de notificaciones
          </h1>
        }
        menu={
          <ProfileMenu
            name={<span className='text-lg font-semibold'>Usuario</span>}
            settingsRoute='/configuraciones-contratante'
          />
        }
      />
      <div className='max-w-7xl mx-auto'>
        <h3 className='mb-4 text-xl text-[#405e7f]'>
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
                  ? 'border-gray-300 bg-white'
                  : 'border-[#60efdb] bg-[#e0fdfa]'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#405e7f] text-base">
                    {item.name}
                  </h3>
                  {readStatus[index] ? (
                    <LuMailOpen className='w-6 h-6 text-gray-400' />
                  ) : (
                    <LuMail className='w-6 h-6 text-[#60efdb]' />
                  )}
                </div>
                <p className='text-gray-500 text-sm mt-1'>
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
                  <h3 className="text-xl font-bold text-[#405e7f] mb-2">
                    {initialNotifications[activeNotification].name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {formatDate(initialNotifications[activeNotification].date)}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
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
                  className="text-gray-400 text-center"
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
