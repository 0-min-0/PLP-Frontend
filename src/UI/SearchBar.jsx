import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export const SearchBar = () => {

    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className='relative flex items-center'>
            <div className='absolute left-3 text-[#7c92ab]'>
                <MagnifyingGlassIcon className='h-5 w-5' />
            </div>
            <input
                type='search'
                placeholder='Buscar...'
                className={`w-350 pl-10 pr-4 py-2 rounded-full border border-[#7c92ab] focus:outline-none focus:ring-2 focus:ring-[#7c92ab] focus:border-transparent transition-all duration-300 
                    ${isFocused ? 'ring-2 ring-blue-500 border-transparent' : '' }`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    )
}
