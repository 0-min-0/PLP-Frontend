import { useState, useEffect, useRef } from 'react'
import { HiChevronDown } from 'react-icons/hi'

export const Select = ({
    label = '',
    value,
    onChange,
    desc = '',
    options = [],
    color = 'text-[#405e7f]',
    error = '',
    errColor = 'text-red-400',
    borderColor = 'border-[#405e7f]/50',
    focusColor = 'focus:ring-[#60efdb]',
    disabled = false
}) => {
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

    const selectedOption = options.find(opt => opt.value === value)
    const displayText = selectedOption ? selectedOption.label : 'No seleccionado'

    const handleClick = () => {
        if (!disabled) {
            setIsOpen(!isOpen)
        }
    }

    const handleOptionClick = (optionValue) => {
        if (!disabled) {
            onChange(optionValue)
            setIsOpen(false)
        }
    }

    return (
        <div className='relative w-full' ref={ref}>
            {label && <h2 className={`mb-2 ${color} font-semibold text-left`}>{label}</h2>}
            {desc && <p className='mb-3 text-[#405e7f] text-sm text-left'>{desc}</p>}
            <div
                className={`w-full py-2 px-4 text-[#405e7f] text-lg bg-white border ${borderColor} rounded-xl 
                    ${!disabled ? `focus:border-transparent focus:ring-2 ${focusColor}` : ''}
                    transition-all duration-500 flex justify-between items-center
                    ${disabled ? 'cursor-not-allowed bg-gray-100' : 'cursor-pointer'}`}
                onClick={handleClick}
            >
                <span>{displayText}</span>
                <HiChevronDown
                    className={`text-[#405e7f] w-5 h-5 transition-transform 
                    ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </div>

            <div
                className={`absolute z-40 mt-2 w-full bg-white rounded-xl shadow-lg transition-all 
                        duration-300 ease-in-out transform ${isOpen
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                        } max-h-50 overflow-y-auto`}
            >
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`m-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-[#405e7f] text-left 
                        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        onClick={() => handleOptionClick(option.value)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
            {error && (
                <span className={`${errColor} font-semibold text-sm mt-1 block`}>
                    {error}
                </span>
            )}
        </div>
    )
}