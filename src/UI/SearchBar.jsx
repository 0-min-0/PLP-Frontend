import { useSearchBar } from '../Context/SearchBarContext'
import { MagnifyingGlassIcon, XMarkIcon, ClockIcon, ArrowPathIcon, TrashIcon } from '@heroicons/react/24/outline'

export const SearchBar = ({
  placeholder = 'Buscar...',
  className = '',
  suggestions = [],
  searchType = 'vacancies',
  onSearch = () => {},
  onSuggestionClick = () => {},
  groupSuggestions = false
}) => {
  const {
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
    showRecentSearches
  } = useSearchBar()

  // Filtrado adicional por tipo
  const filteredByType = filteredSuggestions.filter(item => 
    !item.type || item.type === searchType
  )

  const handleItemClick = (item) => {
    const clickedItem = typeof item === 'string' ? { text: item } : item
    handleSuggestionClick(clickedItem)
    onSuggestionClick(clickedItem)
    setShowSuggestions(false)
  }

  const renderSuggestionItem = (item, index, isRecent = false) => {
    const isActive = activeSuggestion === index
    const baseClass = 'm-2 rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200'
    const activeClass = isActive ? 'bg-gray-50' : ''
    const itemText = typeof item === 'string' ? item : item.text
    const originalData = typeof item === 'string' ? null : item.originalData

    return (
      <li
        key={isRecent ? `recent-${index}` : index}
        className={`${baseClass} ${activeClass} flex justify-between items-center`}
        onMouseEnter={() => setActiveSuggestion(index)}
        onClick={() => handleItemClick(item)}
      >
        <div className="flex-1">
          <div className="font-medium text-[#405e7f]">
            {highlightMatch(itemText)}
          </div>
          {originalData && (
            <div className="text-sm text-gray-500 mt-1">
              {searchType === 'people' ? (
                <>
                  {originalData.occupation} • {originalData.town}
                </>
              ) : (
                <>
                  {originalData.company} • {originalData.location}
                </>
              )}
            </div>
          )}
        </div>
        {isRecent && (
          <button
            className='text-gray-400 hover:text-gray-600 ml-2'
            onClick={(e) => {
              e.stopPropagation()
              removeRecentSearch(item)
            }}
            aria-label="Eliminar búsqueda reciente"
          >
            <TrashIcon className='h-4 w-4' />
          </button>
        )}
      </li>
    )
  }

  const renderSuggestions = () => {
    if (query.length === 0 && showRecentSearches && recentSearches.length > 0) {
      return (
        <div className='py-2'>
          <div className='px-4 py-2 text-sm text-gray-500 flex items-center'>
            <ClockIcon className='h-4 w-4 mr-2' />
            Búsquedas recientes
          </div>
          <ul>
            {recentSearches.map((search, index) => 
              renderSuggestionItem(search, index, true)
            )}
          </ul>
        </div>
      )
    }

    if (filteredByType.length > 0) {
      if (groupSuggestions) {
        return groupByCategory(filteredByType).map(([category, items]) => (
          <div key={category} className='py-2'>
            <div className='px-4 py-2 text-sm text-gray-500 border-b border-gray-100'>
              {category}
            </div>
            <ul>
              {items.map((item, index) => {
                const globalIndex = filteredByType.indexOf(item)
                return renderSuggestionItem(item, globalIndex)
              })}
            </ul>
          </div>
        ))
      } else {
        return (
          <ul>
            {filteredByType.map((item, index) => 
              renderSuggestionItem(item, index)
            )}
          </ul>
        )
      }
    }

    if (query.length > 0) {
      return (
        <div className='px-4 py-6 text-center text-gray-500'>
          No se encontraron resultados para "{query}"
        </div>
      )
    }

    return null
  }

  return (
    <div className={`relative flex flex-col ${className}`}>
      <div className='relative flex items-center'>
        <div className='absolute left-4 text-gray-400'>
          {isLoading ? (
            <ArrowPathIcon className='h-5 w-5 animate-spin' />
          ) : (
            <MagnifyingGlassIcon className='h-5 w-5' />
          )}
        </div>
        <input
          ref={inputRef}
          type='search'
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setShowSuggestions(true)
            setActiveSuggestion(-1)
            onSearch(e.target.value)
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const selectedItem = activeSuggestion >= 0 && filteredByType[activeSuggestion] 
                ? filteredByType[activeSuggestion] 
                : query.trim()
              handleItemClick(selectedItem)
            } else {
              handleKeyDown(e)
            }
          }}
          className='w-350 pl-12 pr-10 py-2.5 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 
                  focus:ring-[#60efdb] focus:border-transparent transition-all duration-300 input-no-clear'
        />
        {query && (
          <button 
            onClick={handleClear}
            className='absolute right-4 text-gray-400 hover:text-gray-600 cursor-pointer'
            aria-label='Limpiar búsqueda'
          >
            <XMarkIcon className='h-5 w-5' />
          </button>
        )}
      </div>
      
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className='absolute top-full mt-2 w-full z-50 bg-white border border-gray-200 rounded-xl shadow-lg max-h-96 overflow-y-auto'
        >
          {renderSuggestions()}
        </div>
      )}
    </div>
  )
}