import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export const SearchBar = ({ onSearch, delay = 500 }) => {
    const [query, setQuery] = useState('')
    
    // Implementación con debounce para búsqueda en tiempo real
    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.trim() !== '') {
                onSearch(query)
            } else {
                onSearch('') // Para resetear la búsqueda cuando se borra el texto
            }
        }, delay)
        
        return () => clearTimeout(timer)
    }, [query, delay, onSearch])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(query)
        }
    }

    return (
        <div className='w-full relative flex items-center'>
            <div className='absolute left-3 text-[#7c92ab]'>
                <MagnifyingGlassIcon className='h-5 w-5' />
            </div>
            <input
                type='search'
                placeholder='Buscar...'
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className='w-340 pl-10 pr-4 py-2 rounded-full bg-white border border-[#7c92ab] focus:outline-none focus:ring-2 focus:ring-[#7c92ab] focus:border-transparent transition-all duration-300'
            />
        </div>
    )
}