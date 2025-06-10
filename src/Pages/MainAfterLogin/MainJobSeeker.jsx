import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { SearchBar } from '../../UI/SearchBar'
import { ProfileMenu } from '../../Components/ProfileMenu/ProfileMenu'
import { HiOutlineInbox } from 'react-icons/hi2'
import avatar from '../../assets/images/avatar.jpg'
import { VacanciesLayout } from '../../Layouts/VacanciesLayout/VacanciesLayout'
import { jobs } from '../../Utils/jobs'

export const MainJobSeeker = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleSearch = (query) => {
    setSearchQuery(query)
    
    if (!query.trim()) {
      setFilteredJobs(jobs)
      return
    }

    const lowerQuery = query.toLowerCase()
    const results = jobs.filter(job => {
      // Búsqueda genérica que funciona para ambos tipos (vacancy/person)
      return (
        (job.title && job.title.toLowerCase().includes(lowerQuery)) ||
        (job.occupation && job.occupation.toLowerCase().includes(lowerQuery)) ||
        (job.company && job.company.toLowerCase().includes(lowerQuery)) ||
        (job.name && job.name.toLowerCase().includes(lowerQuery)) ||
        (job.skills && job.skills.some(skill => 
          skill.toLowerCase().includes(lowerQuery)
        )) ||
        (job.location && job.location.toLowerCase().includes(lowerQuery)) ||
        (job.municipality && job.municipality.toLowerCase().includes(lowerQuery))
      )
    })

    setFilteredJobs(results)
  }

  return (
    <div>
      <Header
        middleObject={
          <SearchBar 
            onSearch={handleSearch}
            placeholder="Buscar vacantes o contratistas..."
          />
        }
        menu={
          <ProfileMenu
            avatar={avatar}
            name={<span className='text-lg font-semibold'>Jasmin Esperanza Garcia Paez</span>}
            settingsRoute='/configuraciones-contratista'
          />
        }
        buttons={
          <NavLink
            to='/centro-de-notificaciones'
            title='Centro de notificaciones'
          >
            <div>
              <HiOutlineInbox className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
            </div>
          </NavLink>
        }
      />
      <div>
        <VacanciesLayout 
          searchQuery={searchQuery}
          filteredJobs={filteredJobs}
        />
      </div>
    </div>
  )
}