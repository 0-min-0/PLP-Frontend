import React from 'react'
import { useRegister } from '../Context/RegisterContext'

export const Desc = ({
    nameDesc,
    holderDesc,
    name,
    value,
    onChange,
    error,
    height = 'h-25',
    borderColor = 'border-[#405e7f]/50',
    focusColor = 'focus:ring-[#60efdb]',
    disabled = false,
    color = 'text-[#405e7f]',
    errColor = 'text-red-400'
}) => {
    
    const maxLength = 500

    const descStyle = `w-full ${height} bg-white px-4 py-2 resize-none text-lg mt-3 text-[#405e7f]/90 rounded-xl border 
                  ${borderColor} focus:outline-none focus:ring-2 ${focusColor} focus:border-transparent 
                   transition-all duration-500  ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`

    return (
        <div className='w-full'>
            <label className={`${color} label-responsive font-semibold`}>
                {nameDesc}
            </label>
            <div className='relative'>
                <textarea
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    rows={5}
                    className={`desc desc-dark ${descStyle}`}
                    placeholder={holderDesc}
                    maxLength={maxLength}
                    disabled={disabled}
                />
                <span className='error-responsive desc-counter-responsive desc-counter absolute bottom-3 right-4 text-[#405e7f]/60'>
                    {value?.length || 0}/{maxLength}
                </span>
            </div>
            {error && (
                <p className={`${errColor} error-responsive error text-sm mt-1`}>{error}</p>
            )}
            {value && value.length === maxLength && !error && (
                <p className={`${errColor} error-responsive error text-sm mt-1`}>ⓘ Límite alcanzado</p>
            )}
        </div>
    )
}
