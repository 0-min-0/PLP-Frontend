import { useState, useEffect, useRef } from 'react'
import { HiChevronDown } from 'react-icons/hi'

export const Select = ({ label, value, onChange, options = [] }) => {

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className='relative w-full' ref={ref}>
            <h2 className='mb-3 text-[#405e7f] font-semibold'>{label}</h2>

            <div
                className='w-full py-2 px-4 text-[#405e7f] bg-white border border-[#405e7f]/50 rounded-xl cursor-pointer flex justify-between items-center'
                onClick={() => setIsOpen(!isOpen)}
            >
                {options.find(opt => opt.value === value).label || 'No seleccionado'}
                <HiChevronDown className={`text-[#405e7f] w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </div>

            <div
                className={`absolute z-40 mt-2 w-full bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out transform ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    } max-h-50 overflow-y-auto`}
            >
                {options.map((option) => (
                    <div
                        key={option.value}
                        className='m-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-[#405e7f] cursor-pointer'
                        onClick={() => {
                            onChange(option.value)
                            setIsOpen(false)
                        }}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

