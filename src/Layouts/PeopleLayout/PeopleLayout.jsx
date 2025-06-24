import { useState, useEffect, useMemo } from 'react'
import { BaseLayout } from '../Base/BaseLayout'
import { useData } from '../../Hooks/useData'
import { Person } from '../../UI/Person/Person'
import { Button } from '../../UI/button'
import { EmptyState } from '../../UI/EmptyState'
import { useUser } from '../../Context/UserContext'

export const PeopleLayout = ({
  searchQuery = '',
  isSearching = false
}) => {
  const { data, loading, error } = useData('people')
  const { user } = useUser()
  
  const filteredData = useMemo(() => {
    if (!data) return []
    if (!searchQuery.trim()) return data

    const lowerQuery = searchQuery.toLowerCase()
    return data.filter(person => {
      const searchFields = [
        person.name,
        person.occupation,
        person.town,
        person.category,
        person.description,
        ...(person.skills || [])
      ].filter(Boolean)

      return searchFields.some(
        field => field.toString().toLowerCase().includes(lowerQuery)
      )
    })
  }, [data, searchQuery])

  const [layoutTitle, layoutDescription] = useMemo(() => [
    searchQuery
      ? `Resultados para "${searchQuery}"`
      : `¡Hola, ${user.name}! Mira las hojas de vida publicadas más recientemente.`,
    searchQuery
      ? `${filteredData.length} ${filteredData.length === 1 ? 'persona encontrada' : 'personas encontradas'}`
      : "Descubre personas a quienes darles una oportunidad laboral y puedan suplir tus necesidades."
  ], [searchQuery, filteredData.length, user.name])

  const renderContent = () => {
    if (error) {
      return (
        <EmptyState
          title="Error al cargar personas"
          description="Ocurrió un problema al obtener las hojas de vida. Por favor intenta nuevamente."
          icon="error"
        >
          <Button variant="outline" onClick={() => window.location.reload()}>
            Reintentar
          </Button>
        </EmptyState>
      )
    }

    if (loading || isSearching) {
      return (
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="animate-pulse bg-gray-100 rounded-lg h-60"
              aria-label="Cargando hojas de vida..."
            />
          ))}
        </div>
      )
    }

    if (searchQuery && filteredData.length === 0) {
      return (
        <EmptyState
          title="No se encontraron resultados"
          description={`No hay personas que coincidan con "${searchQuery}"`}
          icon="search"
        >
          <Button variant="outline" onClick={() => window.location.reload()}>
            Ver todas las personas
          </Button>
        </EmptyState>
      )
    }

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {filteredData.map(person => (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            occupation={person.occupation}
            town={person.town}
            category={person.category}
            description={person.description}
            skills={person.skills}
          />
        ))}
      </div>
    )
  }

  return (
    <BaseLayout
      title={layoutTitle}
      description={layoutDescription}
      dataType="personas"
      data={filteredData}
      loading={loading || isSearching}
      ItemComponent={Person}
    >
      {renderContent()}
    </BaseLayout>
  )
}