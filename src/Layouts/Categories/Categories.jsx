// Categories.jsx
import React from 'react'
import { useLocation } from 'react-router-dom'
import { VacanciesByCategory } from '../../Components/CategoriesContainer/VacanciesByCategory'
import { PeopleByCategory } from '../../Components/CategoriesContainer/PeopleByCategory'
import { MixedContent } from '../../Components/CategoriesContainer/MixedContent'

export const Categories = () => {
  const { pathname } = useLocation()

  const isContractor = pathname.includes('contratista')
  const isEmployer = pathname.includes('contratante') || pathname.includes('empresa')

  return (
    <div className="w-full mx-auto px-4 pb-8">
      {isContractor && <VacanciesByCategory />}
      {isEmployer && <PeopleByCategory />}
      {!isContractor && !isEmployer && <MixedContent />}
    </div>
  )
}
