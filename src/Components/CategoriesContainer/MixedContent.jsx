import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Vacancie } from '../../UI/Vacancy/Vacancie'
import { Person } from '../../UI/Person/Person'
import { vacanciesExample, peopleExample } from '../../Utils/objectsExample'
import { categories } from '../../Utils/options'
import { AuthModal } from '../../UI/Modals/AuthModal'

export const MixedContent = () => {
  const { category } = useParams()
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [selectedItemType, setSelectedItemType] = useState(null)

  const categoryObj = category ? categories.find(cat => cat.value === category) : null

  let mixedContent = [...vacanciesExample, ...peopleExample]

  if (category) {
    mixedContent = mixedContent.filter(item => item.category === category)
  }

  const handleItemClick = (itemType) => {
    setSelectedItemType(itemType)
    setAuthModalOpen(true)
  }

  return (
    <div className='space-y-8'>
      <h2 className='ml-20 text-2xl font-bold text-[color:var(--color-card-text)] mb-6'>
        {category ? `Oportunidades en ${categoryObj?.label}` : 'Oportunidades destacadas'}
      </h2>

      {mixedContent.length > 0 ? (
        <div className='p-10 mx-16 flex flex-wrap gap-6 border-2 border-[#90d7db] rounded-xl'>
          {mixedContent.map((item) => (
            <div key={`${item.type}-${item.id}`}>
              {item.type === 'person' ? (
                <Person
                  {...item}
                  onShowResume={() => handleItemClick('person')}
                />
              ) : (
                <Vacancie
                  {...item}
                  onShowDetails={() => handleItemClick('vacancy')}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-[color:var(--color-card-text)]">
            No se encontraron oportunidades en esta categoría
          </p>
        </div>
      )}

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        itemType={selectedItemType}
      />
    </div>
  )
}
