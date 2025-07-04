import { useState, useEffect, useRef } from 'react'
import { HiChevronDown } from 'react-icons/hi'

export const Select = ({
    label = '',
    value,
    onChange,
    desc = '',
    options = [],
    error = '',
    disabled = false,
    isEditing = false,
    hasError = false,
    borderColor = 'border-gray-300',
    focusColor = '',
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

    const containerClasses = [
        'input select-container-dark w-full py-2 px-4 text-lg border rounded-xl',
        'transition-all duration-500 flex justify-between items-center',
        borderColor,
        focusColor,
        isEditing ? 'select-editing' : '',
        disabled ? 'cursor-not-allowed bg-gray-100' : 'cursor-pointer',
        hasError || error ? 'border-red-500 focus:ring-red-500' : ''
    ].filter(Boolean).join(' ')

    const optionsClasses = [
        'select-size select-options p-2 absolute z-40 mt-2 w-full rounded-xl shadow-lg bg-white dark:bg-[#1b1b1d]',
        'transition-all duration-300 ease-in-out transform',
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none',
        'h-60 overflow-y-auto'
    ].join(' ')

    const optionClasses = 'select-item select-option-dark text-[color:var(--color-card-text)] px-4 py-3 hover:bg-gray-100 rounded-lg text-left cursor-pointer'

    return (
        <div className='relative w-full' ref={ref}>
            {label && <label className='label-responsive mb-3 block font-semibold text-[color:var(--color-card-text)]'>{label}</label>}
            {desc && <p className='mb-1 text-sm text-gray-500'>{desc}</p>}

            <div className={containerClasses} onClick={handleClick}>
                <span>{displayText}</span>
                <HiChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            <div className={optionsClasses}>
                {options.map(option => (
                    <div
                        key={option.value}
                        className={optionClasses}
                        onClick={() => handleOptionClick(option.value)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>

            {error && <span className='text-red-500 error error-responsive text-sm mt-1 block'>{error}</span>}
        </div>
    )
}
