import { useState, useEffect, useMemo } from 'react'
import { BaseLayout } from '../Base/BaseLayout'
import { useData } from '../../Hooks/useData'
import { Vacancie } from '../../UI/Vacancy/Vacancie'
import { Button } from '../../UI/button'
import { EmptyState } from '../../UI/EmptyState'

export const VacanciesLayout = ({
  searchQuery = '',
  isSearching = false
}) => {
  const { data, loading, error } = useData('vacancies')
  
  // Filtrado optimizado con useMemo
  const filteredData = useMemo(() => {
    if (!data) return []
    if (!searchQuery.trim()) return data

    const lowerQuery = searchQuery.toLowerCase()
    return data.filter(vacancy => {
      // Búsqueda en campos relevantes
      const searchFields = [
        vacancy.title,
        vacancy.company,
        vacancy.category,
        vacancy.description,
        ...(vacancy.skills || [])
      ].filter(Boolean) 

      return searchFields.some(
        field => field.toString().toLowerCase().includes(lowerQuery)
      )
    })
  }, [data, searchQuery])

  // Textos del layout memoizados
  const [layoutTitle, layoutDescription] = useMemo(() => [
    searchQuery
      ? `Resultados para "${searchQuery}"`
      : "¡Hola, Usuario! No te pierdas las vacantes más recientes.",
    searchQuery
      ? `${filteredData.length} ${filteredData.length === 1 ? 'vacante encontrada' : 'vacantes encontradas'}`
      : "Busca ofertas laborales desde las más recientes (Hoy) hasta las más pasadas de fecha (Este mes)."
  ], [searchQuery, filteredData.length])

  // Renderizado condicional
  const renderContent = () => {
    if (error) {
      return (
        <EmptyState
          title="Error al cargar vacantes"
          description="Ocurrió un problema al obtener las vacantes. Por favor intenta nuevamente."
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
              className="animate-pulse bg-gray-100 rounded-lg h-32"
              aria-label="Cargando vacantes..."
            />
          ))}
        </div>
      )
    }

    if (searchQuery && filteredData.length === 0) {
      return (
        <EmptyState
          title="No se encontraron resultados"
          description={`No hay vacantes que coincidan con "${searchQuery}"`}
          icon="search"
        >
          <Button variant="outline" onClick={() => window.location.reload()}>
            Ver todas las vacantes
          </Button>
        </EmptyState>
      )
    }

    return (
      <div className="grid gap-4" aria-live="polite">
        {filteredData.map(vacancy => (
          <Vacancie
            key={vacancy.id}
            id={vacancy.id}
            title={vacancy.title}
            company={vacancy.company}
            location={vacancy.location}
            salary={vacancy.salary}
            category={vacancy.category}
            description={vacancy.description}
            skills={vacancy.skills}
          />
        ))}
      </div>
    )
  }

  return (
    <BaseLayout
      title={layoutTitle}
      description={layoutDescription}
      dataType="vacantes"
      data={filteredData}
      loading={loading || isSearching}
      ItemComponent={Vacancie}
    >
      {renderContent()}
    </BaseLayout>
  )
}