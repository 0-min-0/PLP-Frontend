import React from 'react'

export const Input = ({
    iType,
    iValue,
    isFor,
    iName,
    iChange,
    labelTitle = '',
    iHolder = '',
    padding = 'px-4 py-2 2xl:px-5 2xl:py-3',
    error = ''
}) => {

    const iStyle = `w-full bg-white ${padding} text-lg mt-3 text-[#405e7f]/90 rounded-xl border border-[#405e7f]/50 
                    focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent transition-all 
                    duration-300
                    ${error ? 'border-red-400' : ''}`

    const lStyle = 'text-[#405e7f] font-semibold'

    return (

        <div className='w-full text-[#405e7f]'>
            <label
                htmlFor={isFor}
                className={lStyle}
            >
                {labelTitle}
            </label>
            <input
                id={isFor}
                type={iType}
                name={iName}
                value={iValue}
                className={iStyle}
                placeholder={iHolder}
                onChange={iChange}
            />
            <div>
                {error && <span className='text-red-400 text-sm mt-1'>{error}</span>}
            </div>
        </div>
    )
}
