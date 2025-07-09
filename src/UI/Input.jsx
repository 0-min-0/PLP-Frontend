import React from 'react'

export const Input = ({
    iType,
    iValue,
    isFor,
    iName,
    iChange,
    labelTitle = '',
    labelColor = '',
    iHolder = '',
    padding = 'px-4 py-2',
    error = '',
    errColor = 'text-red-400',
    borderColor = 'border-[#405e7f]/50',
    focusColor = 'focus:ring-[#90d7db]',
    disabled = false
}) => {
    const iStyle = `w-full bg-white ${padding} text-lg mt-3 text-[#405e7f]/90 rounded-xl border ${borderColor} 
                    focus:outline-none focus:ring-2 ${focusColor} focus:border-transparent transition-all 
                    duration-500 ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`

    // Definir color personalizado del label
    const labelStyle = labelColor
        ? { color: labelColor } // se usa color pasado por props
        : undefined              // se aplicará desde la clase CSS (modo claro/oscuro)

    return (
        <div className='w-full'>
            {labelTitle && (
                <label
                    htmlFor={isFor}
                    className='label-responsive input-label font-semibold'
                    style={labelStyle}
                >
                    {labelTitle}
                </label>
            )}
            <input
                id={isFor}
                type={iType}
                name={iName}
                value={iValue || ''}
                className={`input input-dark ${iStyle}`}
                placeholder={iHolder}
                onChange={iChange}
                disabled={disabled}
            />
            {error && (
                <span className={`${errColor} error-responsive error text-sm mt-1 block`}>
                    {error}
                </span>
            )}
        </div>
    )
}
