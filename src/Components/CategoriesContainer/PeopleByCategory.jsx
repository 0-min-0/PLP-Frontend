import React from 'react'
import { useParams } from 'react-router-dom'
import { Person } from '../../UI/Person/Person'
import { peopleExample } from '../../Utils/objectsExample'
import { categories } from '../../Utils/options'

export const PeopleByCategory = () => {
  const { category } = useParams()
  
  // Filtrar personas por categoría si existe en los parámetros
  let filteredPeople = peopleExample
  if (category) {
    const categoryObj = categories.find(cat => cat.value === category)
    if (categoryObj) {
      filteredPeople = peopleExample.filter(
        person => person.category === categoryObj.label
      )
    }
  }

  // Agrupar personas por categoría
  const peopleByCategory = filteredPeople.reduce((acc, person) => {
    if (!acc[person.category]) {
      acc[person.category] = []
    }
    acc[person.category].push(person)
    return acc
  }, {})

  return (
    <div className='space-y-8'>
      <h2 className='title-categories text-2xl font-bold text-[color:var(--color-card-text)] mb-6 ml-16'>
        {category ? `Personas en ${categories.find(c => c.value === category)?.label}` : 'Personas por categoría'}
      </h2>
      
      {Object.entries(peopleByCategory).length > 0 ? (
        Object.entries(peopleByCategory).map(([category, people]) => (
          <div key={category} className="space-y-4">
            {!category && (
              <h3 className='text-xl font-semibold text-[color:var(--color-card-text)] border-b-2 border-[#60efdb] pb-2'>
                {category}
              </h3>
            )}
            <div className='container-categories-jobs p-10 mx-16 flex flex-wrap gap-6 border-2 border-[#60efdb] rounded-xl'>
              {people.map((person) => (
                <Person key={person.id} {...person} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-[color:var(--color-card-text)]">No se encontraron personas en esta categoría</p>
        </div>
      )}
    </div>
  )
}