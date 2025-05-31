import React, { useEffect, useState } from 'react'
import { JobsContainer } from '../../Components/Container/JobsContainer'
import { getVacancies, vacanciesExample } from '../../Utils/objectsExample'
import { peopleExample } from '../../Utils/objectsExample'
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil'
import { AuthModal } from '../../UI/AuthModal'

export const JobsLayout = () => {
  const [vacancies, setVacancies] = useState([])
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const loadedVacancies = await getVacancies();
        setVacancies(loadedVacancies.length > 0 ? loadedVacancies : vacanciesExample)
        setPeople(peopleExample)
      } catch (error) {
        console.error("Error loading data:", error)
        setVacancies(vacanciesExample)
        setPeople(peopleExample)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  if (loading) {
    return <div className="text-center py-10">Cargando información...</div>
  }

  return (
    <div className='flex flex-col'>
      <div className='text-[#405e7f] mx-10 mt-10 mb-5'>
        <h1 className='font-[afacadBold] text-4xl mb-2'>
          Vacantes y personas
        </h1>
        <h3 className='text-lg'>
          Descubre las vacantes más recientes y postula tu hoja de vida o descubre personas a quienes 
          darles una oportunidad laboral y puedan suplir tus necesidades.
        </h3>
      </div>
      
      <div className='mb-10'>
        <div className='flex w-full gap-4'>
          <div className='w-[70%]'>
            <JobsContainer
              title='Hoy'
              vacancies={vacancies}
              people={people}
              rounded='top'
            />
          </div>
          <div className='w-[30%]'>
            <SetPerfil />
          </div>
        </div>
        
        <JobsContainer
          title='Esta semana'
          vacancies={vacancies}
          people={people}
          rounded='top-right'
        />
        
        <JobsContainer
          title='Este mes'
          vacancies={vacancies}
          people={people}
          rounded='bottom'
        />
      </div>

      {/* <AuthModal 
        isOpen={showAuthModal}
        onClose={handleCloseAuthModal}
        onLogin={handleLogin}
        onRegister={handleRegister}
        itemType={selectedItem?.type}
      /> */}
    </div>
  )
}