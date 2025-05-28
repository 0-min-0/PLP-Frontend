import React from 'react'

export const Input = ({
    iType,
    iValue,
    isFor,
    iName,
    iChange,
    labelTitle = '',
    labelColor = '[#405e7f]',
    iHolder = '',
    padding = 'px-4 py-2',
    error = '',
    errColor = 'text-red-400',
    borderColor = 'border-[#405e7f]/50',
    focusColor = 'focus:ring-[#60efdb]',
    disabled = false
}) => {
    const iStyle = `w-full bg-white ${padding} text-lg mt-3 text-[#405e7f]/90 rounded-xl border ${borderColor} 
                    focus:outline-none focus:ring-2 ${focusColor} focus:border-transparent transition-all 
                    duration-500 ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`

    return (
        <div className='w-full text-[#405e7f]'>
            {labelTitle && (
                <label
                    htmlFor={isFor}
                    className={`text-${labelColor} font-semibold`}
                >
                    {labelTitle}
                </label>
            )}
            <input
                id={isFor}
                type={iType}
                name={iName}
                value={iValue || ''}
                className={iStyle}
                placeholder={iHolder}
                onChange={iChange}
                disabled={disabled}
            />
            {error && (
                <span className={`${errColor} font-semibold text-sm mt-1 block`}>
                    {error}
                </span>
            )}
        </div>
    )
}