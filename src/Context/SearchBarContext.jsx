import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'

const SearchBarContext = createContext()

export const SearchBarProvider = ({ 
  children,
  onSearch = () => {},
  delay = 300,
  suggestions = [],
  searchType = 'vacancies', // 'vacancies' o 'people'
  searchOnType = true,
  showRecentSearches = true,
  maxRecentSearches = 5,
  groupSuggestions = false
}) => {
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [activeSuggestion, setActiveSuggestion] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  const [recentSearches, setRecentSearches] = useState([])
  const inputRef = useRef(null)
  const suggestionsRef = useRef(null)

  // Cargar búsquedas recientes
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches')
    if (savedSearches && showRecentSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }
  }, [showRecentSearches])

  // Guardar búsquedas recientes
  useEffect(() => {
    if (showRecentSearches) {
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
    }
  }, [recentSearches, showRecentSearches])

  // Función de búsqueda mejorada
  const performSearch = useCallback(async (searchQuery) => {
    try {
      setIsLoading(true)
      
      const filtered = suggestions.filter(item => {
        const searchText = typeof item === 'string' ? item : item.text
        const originalData = item.originalData || {}
        
        // Campos de búsqueda según el tipo
        const searchFields = [searchText.toLowerCase()]
        
        if (searchType === 'people') {
          // Campos para búsqueda de hojas de vida (contratistas)
          searchFields.push(
            originalData.name?.toLowerCase(),
            originalData.occupation?.toLowerCase(),
            originalData.skills?.join(' ')?.toLowerCase(),
            originalData.personalDescription?.toLowerCase(),
            originalData.studies?.toLowerCase(),
            originalData.town?.toLowerCase()
          )
        } else {
          // Campos para búsqueda de vacantes
          searchFields.push(
            originalData.title?.toLowerCase(),
            originalData.company?.toLowerCase(),
            originalData.category?.toLowerCase(),
            originalData.responsibilities?.toLowerCase(),
            originalData.location?.toLowerCase()
          )
        }

        return searchFields.some(field => 
          field && field.includes(searchQuery.toLowerCase())
        )
      })

      setFilteredSuggestions(filtered)
      onSearch(searchQuery)
    } catch (error) {
      console.error('Error fetching suggestions:', error)
    } finally {
      setIsLoading(false)
    }
  }, [suggestions, onSearch, searchType])

  // Debounce para búsqueda
  useEffect(() => {
    if (!searchOnType) return

    const timer = setTimeout(() => {
      if (query.trim()) {
        performSearch(query)
      } else {
        setFilteredSuggestions([])
        onSearch('')
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [query, delay, searchOnType, performSearch, onSearch])

  // Añadir a recientes
  const addToRecentSearches = useCallback((searchText) => {
    if (!searchText.trim() || !showRecentSearches) return
    
    const updatedSearches = [
      searchText,
      ...recentSearches.filter(item => item !== searchText)
    ].slice(0, maxRecentSearches)
    
    setRecentSearches(updatedSearches)
  }, [recentSearches, showRecentSearches, maxRecentSearches])

  // Manejar selección
  const handleSuggestionClick = useCallback((suggestion) => {
    const searchText = typeof suggestion === 'string' ? suggestion : suggestion.text
    setQuery(searchText)
    onSearch(searchText)
    setShowSuggestions(false)
    addToRecentSearches(searchText)
    inputRef.current?.focus()
  }, [onSearch, addToRecentSearches])

  // Manejar teclado
  const handleKeyDown = useCallback((e) => {
    if (!showSuggestions) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveSuggestion(prev => 
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveSuggestion(prev => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === 'Enter' && activeSuggestion >= 0) {
      e.preventDefault()
      handleSuggestionClick(filteredSuggestions[activeSuggestion])
    }
  }, [showSuggestions, filteredSuggestions, activeSuggestion, handleSuggestionClick])

  // Resaltar coincidencias
  const highlightMatch = useCallback((text) => {
    if (!query) return text

    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="font-bold text-[#60efdb]">
          {part}
        </span>
      ) : (
        part
      )
    )
  }, [query])

  // Limpiar búsqueda
  const handleClear = useCallback(() => {
    setQuery('')
    onSearch('')
    setFilteredSuggestions([])
    setShowSuggestions(false)
    inputRef.current?.focus()
  }, [onSearch])

  // Eliminar búsqueda reciente
  const removeRecentSearch = useCallback((item) => {
    setRecentSearches(prev => prev.filter(search => search !== item))
  }, [])

  // Agrupar por categoría
  const groupByCategory = useCallback((items) => {
    const groups = {}
    items.forEach(item => {
      const category = item.category || item.originalData?.category || 'Otros'
      if (!groups[category]) groups[category] = []
      groups[category].push(item)
    })
    return Object.entries(groups)
  }, [])

  const value = {
    query,
    setQuery,
    showSuggestions,
    setShowSuggestions,
    filteredSuggestions,
    activeSuggestion,
    setActiveSuggestion,
    isLoading,
    recentSearches,
    inputRef,
    suggestionsRef,
    handleSuggestionClick,
    handleKeyDown,
    highlightMatch,
    handleClear,
    removeRecentSearch,
    groupByCategory,
    groupSuggestions,
    showRecentSearches,
    searchType
  }

  return (
    <SearchBarContext.Provider value={value}>
      {children}
    </SearchBarContext.Provider>
  )
}

export const useSearchBar = () => {
  const context = useContext(SearchBarContext)
  if (!context) {
    throw new Error('useSearchBar must be used within a SearchBarProvider')
  }
  return context
}