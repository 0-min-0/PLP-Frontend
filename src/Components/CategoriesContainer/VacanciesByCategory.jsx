// VacanciesByCategory.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { Vacancie } from '../../UI/Vacancy/Vacancie'
import { vacanciesExample } from '../../Utils/objectsExample'
import { categories } from '../../Utils/options'

export const VacanciesByCategory = () => {
  const { category } = useParams()
  
  // Definir categoryObj fuera del if para que esté disponible en todo el componente
  const categoryObj = category ? categories.find(cat => cat.value === category) : null
  
  let filteredVacancies = vacanciesExample
  if (category && categoryObj) {
    filteredVacancies = vacanciesExample.filter(
      vacancy => vacancy.category === categoryObj.label
    )
  }

  const vacanciesByCategory = filteredVacancies.reduce((acc, vacancy) => {
    if (!acc[vacancy.category]) {
      acc[vacancy.category] = []
    }
    acc[vacancy.category].push(vacancy)
    return acc
  }, {})

  return (
    <div className='space-y-12'>
      <h2 className='text-2xl font-bold text-[#405e7f] mb-6 ml-16'>
        {category ? `Vacantes en ${categoryObj?.label}` : 'Vacantes por categoría'}
      </h2>
      
      {Object.entries(vacanciesByCategory).length > 0 ? (
        Object.entries(vacanciesByCategory).map(([category, vacancies]) => (
          <div key={category} className='space-y-4'>
            <div className='p-10 mx-16 flex flex-wrap gap-6 border-2 border-[#60efdb] rounded-xl'>
              {vacancies.map((vacancy) => (
                <Vacancie key={vacancy.id} {...vacancy} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className='text-center py-10'>
          <p className='text-lg text-[#405e7f]'>No se encontraron vacantes en esta categoría</p>
        </div>
      )}
    </div>
  )
}