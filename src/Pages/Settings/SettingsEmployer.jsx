import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { HiOutlineInbox, HiMiniArrowUturnLeft } from 'react-icons/hi2'
import avatar from '../../assets/images/avatar.jpg'
import { SearchBar } from '../../UI/SearchBar'
import { useVacancy } from '../../Context/VacancyContext' 
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { VacancyDetail } from '../../UI/Vacancy/VacancyDetail'
import { deleteVacancyFromExample, getVacancies, updateVacancyInExample } from '../../Utils/objectsExample'
import { motion } from 'framer-motion'

export const SettingsEmployer = () => {
  const { vacancies, setVacancies } = useVacancy() 
  const [selectedVacancy, setSelectedVacancy] = useState(null)

  const handleSaveVacancy = (updatedVacancy) => {
    updateVacancyInExample(updatedVacancy)
    setVacancies(getVacancies())
  }

  const handleDeleteVacancy = (id) => {
    deleteVacancyFromExample(id)
    setVacancies(getVacancies())
    setSelectedVacancy(null)
  }

  useEffect(() => {
    setVacancies(getVacancies())
  }, [])

  // Animaciones para las tarjetas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.4
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className=''>
      <Header
        middleObject={
          <h1 className='text-6xl mb-8 font-[afacadBold] text-[#405e7f]'>
            Configuraciones
          </h1>
        }
        buttons={
          <div className='w-full flex mr-6 mb-6'>
            <NavLink to='/centro-de-notificaciones' title='Centro de notificaciones'>
              <HiOutlineInbox className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
            </NavLink>
            <NavLink to='/inicio-contratante' title='Volver a inicio'>
              <HiMiniArrowUturnLeft className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ml-6' />
            </NavLink>
          </div>
        }
      />
      <div className='w-[75%] bg-white px-10 py-8 rounded-xl'>
        <div className='flex items-center'>
          <img
            src={avatar}
            alt='avatar'
            className='w-25 h-25 border-double border-8 border-[#60efdb] rounded-full'
          />
          <div className='ml-8'>
            <h2 className='text-4xl font-[afacadBold] text-[#405e7f]'>
              Nombre de usuario
            </h2>
            <h3 className='text-xl text-[#405e7f]'>
              Agregar cuenta
            </h3>
          </div>
        </div>
        <div className='mt-8'>
          <SearchBar />
          <div className='mt-6'>
            <h2 className='text-3xl font-[afacadBold] text-[#405e7f] mb-4'>
              Publicaciones
            </h2>
            {vacancies.length > 0 ? (
              <motion.div 
                className='w-full h-85 grid grid-cols-2 gap-6 max-h-[500px] overflow-y-auto scrollbar-custom pr-4'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {vacancies.map((vacancy) => (
                  <motion.div
                    key={vacancy.id}
                    className='border-2 border-[#60efdb] rounded-xl p-6 cursor-pointer'
                    onClick={() => setSelectedVacancy(vacancy)}
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className='flex justify-between items-start'>
                      <div className='w-full'>
                        <h3 className='font-bold text-lg text-[#405e7f]'>
                          {vacancy.vacancyName || vacancy.title}
                        </h3>
                        <p className='text-gray-600 mt-1'>
                          <span className='font-semibold text-[#405e7f]'>Contacto  •</span> {vacancy.contactPerson}
                        </p>
                        <p className='text-gray-600'>
                          <span className='font-semibold text-[#405e7f]'>Teléfono/Email  •</span> {vacancy.contact}
                        </p>
                      </div>
                      <div className="flex ml-4">
                        <motion.button
                          title='Editar vacante'
                          className='text-[#405e7f] cursor-pointer p-2
                                    transition-all duration-300
                                    hover:bg-[#60efdb]/20 rounded-full'
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedVacancy(vacancy)
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiEdit size={24} />
                        </motion.button>
                        <motion.button
                          title='Eliminar vacante'
                          className='text-[#405e7f] cursor-pointer p-2
                                    transition-all duration-300
                                    hover:bg-[#60efdb]/20 rounded-full'
                          onClick={(e) => {
                            e.stopPropagation()
                            if (window.confirm('¿Estás seguro de eliminar esta vacante?')) {
                              handleDeleteVacancy(vacancy.id)
                            }
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiTrash2 size={24} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
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
          </div>
        </div>
      </div>

      {selectedVacancy && (
        <VacancyDetail
          vacancy={selectedVacancy}
          onClose={() => setSelectedVacancy(null)}
          onSave={handleSaveVacancy}
          onDelete={handleDeleteVacancy}
        />
      )}
    </div>
  )
}