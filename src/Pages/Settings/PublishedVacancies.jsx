import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { SearchBar } from '../../UI/SearchBar'
import { VacancyDetail } from '../../UI/Vacancy/VacancyDetail'
import { useOutletContext } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '../../Components/Avatar/Avatar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
}

export const PublishedVacancies = () => {
  const context = useOutletContext() || {}

  // Proporciona valores por defecto para todas las propiedades del contexto
  const {
    selectedVacancy = null,
    setSelectedVacancy = () => { },
    handleSaveVacancy = () => { },
    handleDeleteVacancy = () => { },
    vacancies = []
  } = context

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
          <h2 className='text-3xl font-[afacadBold] text-[color:var(--color-card-text)] mb-4'>
            Publicaciones
          </h2>

          {vacancies.length > 0 ? (
            <div className='w-full h-90 grid grid-cols-2 gap-6 max-h-[500px] overflow-y-auto scrollbar-custom pr-4'>
              {vacancies.map((vacancy) => (
                <div
                  key={vacancy.id}
                  className='border-2 border-[#60efdb] rounded-xl p-6'
                  onClick={() => setSelectedVacancy(vacancy)}
                >
                  <div className='flex justify-between items-start'>
                    <div className='w-full'>
                      <h3 className='font-bold text-lg text-[color:var(--color-card-text)]'>
                        {vacancy.vacancyName || vacancy.title}
                      </h3>
                      <p className='text-[color:var(--color-card-text)] mt-1'>
                        <span className='font-semibold text-[color:var(--color-card-text)]'>Contacto  •</span> {vacancy.contactPerson}
                      </p>
                      <p className='text-[color:var(--color-card-text)]'>
                        <span className='font-semibold text-[color:var(--color-card-text)]'>Teléfono/Email  •</span> {vacancy.contact}
                      </p>
                    </div>
                    <div className="flex ml-4">
                      <button
                        title='Editar vacante'
                        className='text-[color:var(--color-card-text)] cursor-pointer p-2
                                transition-all duration-300
                                hover:bg-[#60efdb]/20 rounded-full'
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedVacancy(vacancy)
                        }}
                        variants={buttonVariants}
                      >
                        <FiEdit className='w-5 h-5' />
                      </button>
                      <button
                        title='Eliminar vacante'
                        className='text-[color:var(--color-card-text)] cursor-pointer p-2
                                transition-all duration-300
                                hover:bg-[#60efdb]/20 rounded-full'
                        onClick={(e) => {
                          e.stopPropagation()
                          if (window.confirm('¿Estás seguro de eliminar esta vacante?')) {
                            handleDeleteVacancy(vacancy.id)
                          }
                        }}
                        variants={buttonVariants}
                      >
                        <FiTrash2 className='w-5 h-5' />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.p
              className='text-gray-500 py-8 text-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No hay vacantes publicadas aún
            </motion.p>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedVacancy && (
          <VacancyDetail
            vacancy={selectedVacancy}
            onClose={() => setSelectedVacancy(null)}
            onSave={handleSaveVacancy}
            onDelete={handleDeleteVacancy}
          />
        )}
      </AnimatePresence>
    </>
  )
}