import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { SearchBar } from '../../UI/SearchBar'
import { ProfileMenu } from '../../Components/ProfileMenu/ProfileMenu'
import { HiOutlineInbox } from 'react-icons/hi2'
import { VacanciesLayout } from '../../Layouts/VacanciesLayout/VacanciesLayout'
import { vacanciesExample } from '../../Utils/objectsExample'
import { VacancyView } from '../../UI/Vacancy/VacancyView'

export const MainJobSeeker = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [selectedVacancy, setSelectedVacancy] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasNotifications, setHasNotifications] = useState(true)

  // Si más adelante conectas con backend:
  // useEffect(() => {
  //   fetch('/api/notificaciones-nuevas')
  //     .then(res => res.json())
  //     .then(data => setHasNotifications(data.hayNuevas))
  // }, [])

  const handleSearch = (query) => {
    setIsSearching(true)
    setSearchQuery(query)
    setTimeout(() => setIsSearching(false), 300)
  }

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.type === 'vacancy') {
      setSelectedVacancy(suggestion.originalData) 
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVacancy(null)
  }

  return (
    <div className='p-6'>
      <Header
        middleObject={
          <SearchBar
            placeholder="Buscar vacantes por título, empresa o habilidades..."
            searchType="vacancies"
            onSearch={handleSearch}
            onSuggestionClick={handleSuggestionClick}
            groupSuggestions={true}
          />
        }
        menu={
          <ProfileMenu
            name={<span className='text-lg font-semibold'>Jasmin Esperanza Garcia Paez</span>}
            settingsRoute='/configuraciones-contratista'
          />
        }
        buttons={
          <NavLink
            to='/centro-de-notificaciones'
            title='Centro de notificaciones'
            className=' relative'
          >
            <HiOutlineInbox className='w-8 h-8 text-[#405e7f] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-200' />
            {hasNotifications && (
              <>
                <span className='absolute top-0 left-0 w-3 h-3 bg-[#60efdb] rounded-full animate-ping border-2 border-white' />
                <span className='absolute top-0 left-0 w-3 h-3 bg-[#60efdb] rounded-full border-2 border-white' />
              </>
            )}
          </NavLink>
        }
      />

      <VacanciesLayout
        searchQuery={searchQuery}
        isSearching={isSearching}
      />

      <VacancyView
        vacancy={selectedVacancy} 
        isOpen={isModalOpen}
        onClose={closeModal}
        onApply={(vac) => {
          console.log('Postulación enviada a:', vac)
          closeModal()
        }}
      />
    </div>
  )
}