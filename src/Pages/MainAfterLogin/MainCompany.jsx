import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { SearchBar } from '../../UI/SearchBar'
import { ProfileMenu } from '../../Components/ProfileMenu/ProfileMenu'
import { HiOutlineInbox } from 'react-icons/hi2'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { PeopleLayout } from '../../Layouts/PeopleLayout/PeopleLayout'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { InteractiveLogoMain } from '../../UI/InteractiveLogo'

export const MainCompany = () => {
  const [hasNotifications, setHasNotifications] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (query) => {
    setIsSearching(true)
    setSearchQuery(query)
    setTimeout(() => setIsSearching(false), 300)
  }

  return (
    <div className='h-[160vh] p-6 back-color'>
      <Header
        logo={
          <InteractiveLogoMain
            mainRoute='/inicio-empresa'
          />
        }
        middleObject={
          <SearchBar
            placeholder='Buscar hojas de vida por nombre, ocupación o habilidades...'
            onSearch={handleSearch}
          />
        }
        menu={
          <ProfileMenu
            settingsRoute='/configuraciones-empresa'
            categoriesRoute='/categorias-trabajo/empresa'
          />
        }
        buttons={
          <div className='w-full flex gap-6 items-center'>
            <NavLink
              to='/chat-bot-ayuda-empresa'
              title='Chat IA de ayuda'
            >
              <IoChatbubbleEllipsesOutline className='w-8 h-8 text-[color:var(--color-card-text)] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-200' />
            </NavLink>
            <NavLink to='/crear-vacante' title='Crear vacante'>
              <IoBriefcaseOutline className='w-8 h-8 text-[color:var(--color-card-text)] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-200' />
            </NavLink>
            <NavLink
              to='/centro-de-notificaciones'
              title='Centro de notificaciones'
              className='relative'
            >
              <HiOutlineInbox className='w-8 h-8 text-[color:var(--color-card-text)] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-200' />
              {hasNotifications && (
                <>
                  <span className="absolute top-0 left-0 w-3 h-3 bg-[#60efdb] rounded-full animate-ping border-2 border-white" />
                  <span className="absolute top-0 left-0 w-3 h-3 bg-[#60efdb] rounded-full border-2 border-white" />
                </>
              )}
            </NavLink>
          </div>
        }
      />
      <PeopleLayout
        searchQuery={searchQuery}
        isSearching={isSearching}
      />
    </div>
  )
}