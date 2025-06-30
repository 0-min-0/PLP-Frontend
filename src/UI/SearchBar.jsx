import { useState } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

export const SearchBar = ({
  placeholder = 'Buscar...',
  className = '',
  onSearch = () => {},
}) => {
  const [query, setQuery] = useState('')

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className={`relative flex flex-col ${className}`}>
      <div className='relative flex items-center'>
        <div className='absolute left-4 text-gray-400'>
          <MagnifyingGlassIcon className='h-5 w-5' />
        </div>
        <input
          type='search'
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            onSearch(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch(query.trim())
            }
          }}
          className='search w-350 pl-12 pr-10 py-2.5 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 
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
    </div>
  )
}