import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { SearchBar } from '../../UI/SearchBar'
import { ProfileMenu } from '../../Components/ProfileMenu/ProfileMenu'
import { HiOutlineInbox } from 'react-icons/hi2'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { PeopleLayout } from '../../Layouts/PeopleLayout/PeopleLayout'
import { peopleExample } from '../../Utils/objectsExample'

export const MainEmployer = () => {
  const formatPersonSuggestions = (people) => {
    return people.map(person => ({
      id: person.id,
      text: `${person.name} - ${person.occupation}`,
      category: person.occupation,
      originalData: person,
      type: 'person'
    }))
  }

  const handleSearch = (query) => {
    console.log('Buscando contratistas:', query)
  }

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.originalData) {
      console.log('Hoja de vida seleccionada:', suggestion.originalData)
      // Redirigir al perfil: navigate(`/perfil/${suggestion.originalData.id}`)
    }
  }

  return (
    <div className='p-6'>
      <Header
        middleObject={
          <SearchBar 
            placeholder="Buscar hojas de vida por nombre, ocupación o habilidades..."
            suggestions={formatPersonSuggestions(peopleExample)}
            searchType="people"
            onSearch={handleSearch}
            onSuggestionClick={handleSuggestionClick}
            groupSuggestions={true}
          />
        }
        menu={
          <ProfileMenu
            name={<span className='text-lg font-semibold'>Jasmin Esperanza Garcia Paez</span>}
            settingsRoute='/configuraciones-contratante'
          />
        }
        buttons={
          <div className='w-full flex'>
            <NavLink to='/crear-vacante' title='Crear vacante'>
              <IoBriefcaseOutline className='w-8 h-8 text-[#405e7f] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-200' />
            </NavLink>
            <NavLink 
              to='/centro-de-notificaciones' 
              title='Centro de notificaciones'
              className='ml-6'
            >
              <HiOutlineInbox className='w-8 h-8 text-[#405e7f] hover:-translate-y-0.5 active:scale-[0.98] transition-transform duration-200' />
            </NavLink>
          </div>
        }
      />
      <PeopleLayout />
    </div>
  )
}