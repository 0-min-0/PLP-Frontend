import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { SearchBar } from '../../UI/SearchBar'
import { VacancyDetail } from '../../UI/Vacancy/VacancyDetail'
import avatar from '../../assets/images/avatar.jpg'
import { useOutletContext } from 'react-router-dom'

export const PublishedVacancies = () => {
  const { 
    selectedVacancy, 
    setSelectedVacancy, 
    handleSaveVacancy, 
    handleDeleteVacancy,
    vacancies
  } = useOutletContext()

  return (
    <>
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
            <div className='w-full h-85 grid grid-cols-2 gap-6 max-h-[500px] overflow-y-auto scrollbar-custom pr-4'>
              {vacancies.map((vacancy) => (
                <div
                  key={vacancy.id}
                  className='border-2 border-[#60efdb] rounded-xl p-6'
                  onClick={() => setSelectedVacancy(vacancy)}
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
                      <button
                        title='Editar vacante'
                        className='text-[#405e7f] cursor-pointer p-2
                                transition-all duration-300
                                hover:bg-[#60efdb]/20 rounded-full'
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedVacancy(vacancy)
                        }}
                      >
                        <FiEdit size={24} />
                      </button>
                      <button
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
                      >
                        <FiTrash2 size={24} />
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
      {selectedVacancy && (
        <VacancyDetail
          vacancy={selectedVacancy}
          onClose={() => setSelectedVacancy(null)}
          onSave={handleSaveVacancy}
          onDelete={handleDeleteVacancy}
        />
      )}
    </>
  )
}