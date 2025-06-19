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

  const formatVacancySuggestions = (vacancies) => {
    return vacancies.map(vacancy => ({
      id: vacancy.id,
      text: `${vacancy.title} - ${vacancy.company}`,
      category: vacancy.category,
      originalData: vacancy,
      type: 'vacancy'
    }))
  }

  const handleSearch = (query) => {
    setIsSearching(true)
    setSearchQuery(query)
    setTimeout(() => setIsSearching(false), 300)
  }

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.originalData && suggestion.type === 'vacancy') {
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
            suggestions={formatVacancySuggestions(vacanciesExample)}
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
          <NavLink to='/centro-de-notificaciones' title='Centro de notificaciones'>
            <HiOutlineInbox className='w-8 h-8 text-[#405e7f] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-200' />
          </NavLink>
        }
      />

      <VacanciesLayout 
        searchQuery={searchQuery}
        isSearching={isSearching}
      />

      {/* Modal centralizado */}
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