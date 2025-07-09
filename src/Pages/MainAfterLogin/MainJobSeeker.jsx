import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { SearchBar } from '../../UI/SearchBar'
import { ProfileMenu } from '../../Components/ProfileMenu/ProfileMenu'
import { HiOutlineInbox } from 'react-icons/hi2'
import { VacanciesLayout } from '../../Layouts/VacanciesLayout/VacanciesLayout'
import { VacancyView } from '../../UI/Vacancy/VacancyView'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { InteractiveLogoMain } from '../../UI/InteractiveLogo'

export const MainJobSeeker = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [selectedVacancy, setSelectedVacancy] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasNotifications, setHasNotifications] = useState(true)

  const handleSearch = (query) => {
    setIsSearching(true)
    setSearchQuery(query)
    setTimeout(() => setIsSearching(false), 300)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVacancy(null)
  }

  return (
    <div className='h-[160vh] page p-6 back-color'>
      <Header
        logo={
          <InteractiveLogoMain
            mainRoute='/inicio-contratista'
          />
        }
        middleObject={
          <SearchBar
            placeholder='Buscar vacantes por título, empresa o habilidades...'
            onSearch={handleSearch}
          />
        }
        menu={
          <ProfileMenu
            settingsRoute='/configuraciones-contratista'
            categoriesRoute='/categorias-trabajo-contratista'
            aboutRoute='/sobre-plp-contratista'
          />
        }
        buttons={
          <div className='w-full container-routes flex gap-6 items-center'>
            <NavLink
              to='/chat-bot-ayuda-contratista'
              title='Chat IA de ayuda'
            >
              <IoChatbubbleEllipsesOutline className='routes-icons w-8 h-8 text-[color:var(--color-card-text)] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-200' />
            </NavLink>
            <NavLink
              to='/centro-de-notificaciones-contratista'
              title='Centro de notificaciones'
              className=' relative'
            >
              <HiOutlineInbox className='routes-icons w-8 h-8 text-[color:var(--color-card-text)] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-200' />
              {hasNotifications && (
                <>
                  <span className='absolute top-0 left-0 w-3 h-3 bg-[#90d7db] rounded-full animate-ping border-2 border-white' />
                  <span className='absolute top-0 left-0 w-3 h-3 bg-[#] rounded-full border-2 border-white' />
                </>
              )}
            </NavLink>
          </div>
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