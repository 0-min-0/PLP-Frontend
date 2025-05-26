import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { HiOutlineInbox, HiMiniArrowUturnLeft } from 'react-icons/hi2'
import avatar from '../../assets/images/avatar.jpg'
import { SearchBar } from '../../UI/SearchBar'
import { useGlobal } from '../../Context/GlobalContext'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { VacancyDetail } from '../../UI/VacancyDetail'
import { deleteVacancyFromExample, getVacancies, updateVacancyInExample } from '../../Utils/objectsExample'

export const SettingsEmployer = () => {
  const { vacancies, setVacancies } = useGlobal()
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
      <div className='w-[75%] bg-white p-10 rounded-xl'>
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
            <h2 className='text-2xl font-[afacadBold] text-[#405e7f] mb-4'>
              Publicaciones
            </h2>
            {vacancies.length > 0 ? (
              <div className='w-full h-85 grid grid-cols-2 gap-6 max-h-[500px] overflow-y-auto pr-4'>
                {vacancies.map((vacancy) => (
                  <div
                    key={vacancy.id}
                    className='border-2 border-[#60efdb] rounded-xl p-6 cursor-pointer hover:shadow-md transition-all duration-300'
                    onClick={() => setSelectedVacancy(vacancy)}
                  >
                    <div className='flex justify-between items-start'>
                      <div className='w-full'>
                        <h3 className='font-bold text-lg text-[#405e7f]'>
                          {vacancy.vacancyName || vacancy.title}
                        </h3>
                        <p className='text-gray-600 mt-2'>
                          <span className='font-medium'>Contacto:</span> {vacancy.contactPerson}
                        </p>
                        <p className='text-gray-600'>
                          <span className='font-medium'>Teléfono/Email:</span> {vacancy.contact}
                        </p>
                        <p className='text-gray-600'>
                          <span className='font-medium'>Ubicación:</span> {vacancy.location}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <button
                          className='text-[#405e7f] cursor-pointer p-1
                                    transition-all duration-300
                                    hover:bg-[#60efdb]/20 rounded-full'
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedVacancy(vacancy)
                          }}
                        >
                          <FiEdit size={20} />
                        </button>
                        <button
                          className='text-red-500 cursor-pointer p-1
                                    transition-all duration-300
                                    hover:bg-red-500/20 rounded-full'
                          onClick={(e) => {
                            e.stopPropagation()
                            if (window.confirm('¿Estás seguro de eliminar esta vacante?')) {
                              handleDeleteVacancy(vacancy.id)
                            }
                          }}
                        >
                          <FiTrash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-gray-500 py-8 text-center'>
                No hay vacantes publicadas aún
              </p>
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