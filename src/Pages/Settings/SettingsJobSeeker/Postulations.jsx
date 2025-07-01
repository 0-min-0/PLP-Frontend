import { useState, useEffect } from 'react'
import { FiEye, FiTrash2 } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '../../../Components/Avatar/Avatar'
import { CancelModal } from '../../../UI/Modals/CancelModal'
import { VacancyView } from '../../../UI/Vacancy/VacancyView'
import { vacanciesExampleTest } from '../../../Utils/users'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
}

export const Postulations = () => {
  const currentUserId = 1
  const [applications, setApplications] = useState([])
  const [vacancyToView, setVacancyToView] = useState(null)
  const [vacancyToCancel, setVacancyToCancel] = useState(null)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  useEffect(() => {
    const apps = vacanciesExampleTest
      .filter(vacancy =>
        vacancy.postulations?.some(post => post.personId === currentUserId)
      )
      .map(vacancy => {
        const post = vacancy.postulations.find(p => p.personId === currentUserId)
        return {
          ...post,
          vacancy,
          applicationId: `${currentUserId}-${vacancy.id}`
        }
      })
    setApplications(apps)
  }, [])

  const handleCancel = (applicationId) => {
    setApplications(prev => prev.filter(app => app.applicationId !== applicationId))
    setVacancyToCancel(null)
    setIsCancelModalOpen(false)
  }

  return (
    <>
      <Avatar />
      <div className='max-w-5xl mx-auto pt-8 pb-4'>
        <hr className='border-gray-200 mr-8' />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='mt-6'
        >
          <h2 className='text-3xl font-bold text-[color:var(--color-card-text)] mb-4'>
            Mis Postulaciones
          </h2>

          {applications.length > 0 ? (
            <div className='grid grid-cols-2 gap-6 max-h-[500px] overflow-y-auto scrollbar-custom pr-4'>
              {applications.map(app => (
                <div
                  key={app.applicationId}
                  className='border-2 border-[#60efdb] rounded-xl p-6'
                  whileHover={{ y: -2 }}
                >
                  <div className='flex justify-between items-start'>
                    <div className='w-full'>
                      <h3 className='font-bold text-lg text-[color:var(--color-card-text)]'>
                        {app.vacancy.title}
                      </h3>
                      <p className='text-[color:var(--scrollbar-thumb-bg)]'>Estado: {app.status}</p>
                    </div>

                    <div className='flex gap-2 ml-2'>
                      <button
                        onClick={() => setVacancyToView(app.vacancy)}
                        className='text-[color:var(--color-card-text)] p-2 hover:bg-[#60efdb]/20 rounded-full cursor-pointer'
                        title='Ver detalles'
                      >
                        <FiEye className='w-6 h-6' />
                      </button>

                      <button
                        onClick={() => {
                          setVacancyToCancel(app.applicationId)
                          setIsCancelModalOpen(true)
                        }}
                        className='text-[color:var(--color-card-text)] p-2 hover:bg-[#60efdb]/20 rounded-full cursor-pointer'
                        title='Retirar postulación'
                      >
                        <FiTrash2 className='w-5 h-5' />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-gray-500 py-8 text-center'>
              No tienes postulaciones activas.
            </p>
          )}
        </motion.div>
      </div>

      {/* Modal para ver detalles de la vacante */}
      <VacancyView
        isOpen={!!vacancyToView}
        vacancy={vacancyToView}
        onClose={() => setVacancyToView(null)}
        showApplyButton={false}
      />

      {/* Modal para cancelar postulación */}
      <CancelModal
        isOpen={isCancelModalOpen}
        onClose={() => {
          setIsCancelModalOpen(false)
          setVacancyToCancel(null)
        }}
        onConfirm={() => handleCancel(vacancyToCancel)}
      />
    </>
  )
}
