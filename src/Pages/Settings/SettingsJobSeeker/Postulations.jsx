import { useState, useEffect } from 'react'
import { FiEye, FiTrash2 } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '../../../Components/Avatar/Avatar'
import { SearchBar } from '../../../UI/SearchBar'
import { CancelModal } from '../../../UI/Modals/CancelModal'
import { VacancyView } from '../../../UI/Vacancy/VacancyView'
import { peopleExample, vacanciesExample } from '../../../Utils/objectsExample'

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
    const user = peopleExample.find(p => p.id === currentUserId)
    if (user && user.appliedTo) {
      const apps = user.appliedTo.map(post => {
        const normalize = str => str.toLowerCase().replace(/\s|-/g, '')

        const fullVacancy = vacanciesExample.find(v =>
          normalize(v.title) === normalize(post.vacancyTitle)
        )
        return {
          ...post,
          vacancy: fullVacancy,
          applicationId: `${user.id}-${post.vacancyTitle}`
        }
      })
      setApplications(apps)
    }
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
        <SearchBar />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='mt-6'
        >
          <h2 className='text-3xl font-bold text-[#405e7f] mb-4'>
            Mis Postulaciones
          </h2>

          {applications.length > 0 ? (
            <div className='grid grid-cols-2 gap-6 max-h-[500px] overflow-y-auto scrollbar-custom pr-4'>
              {applications.map(app => (
                <motion.div
                  key={app.applicationId}
                  className='border-2 border-[#60efdb] rounded-xl p-6'
                  whileHover={{ y: -2 }}
                >
                  <div className='flex justify-between items-start'>
                    <div className='w-full'>
                      <h3 className='font-bold text-lg text-[#405e7f]'>{app.vacancyTitle}</h3>
                      <p className='text-gray-600'>Estado: {app.status}</p>
                    </div>

                    <div className='flex gap-2 ml-2'>
                      <button
                        onClick={() => {
                          console.log('Vacancy to view:', app.vacancy) // Agrega esto para depurar
                          setVacancyToView(app.vacancy)
                        }}
                        className='text-[#405e7f] p-2 hover:bg-[#60efdb]/20 rounded-full'
                        title='Ver detalles'
                      >
                        <FiEye className='w-5 h-5' />
                      </button>
                      <button
                        onClick={() => {
                          setVacancyToCancel(app.applicationId)
                          setIsCancelModalOpen(true)
                        }}
                        className='text-red-500 p-2 hover:bg-red-100 rounded-full'
                        title='Retirar postulación'
                      >
                        <FiTrash2 className='w-5 h-5' />
                      </button>
                    </div>
                  </div>
                </motion.div>
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
