import React from 'react'
import { VacanciesByCategory } from './VacanciesByCategory'
import { PeopleByCategory } from './PeopleByCategory'
import { MixedContent } from '../../Components/CategoriesContainer/MixedContent'

export const Categories = ({ showType = 'mixed' }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {showType === 'mixed' && <MixedContent />}
      {showType === 'vacancies' && <VacanciesByCategory />}
      {showType === 'people' && <PeopleByCategory />}
    </div>
  )
}