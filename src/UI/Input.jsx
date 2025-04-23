import { useState } from 'react'

export const Input = ({
    iType,
    iValue,
    isFor,
    iName,
    iChange,
    labelTitle = '',
    iHolder = '',
    padding = 'px-4 py-1',
}) => {

    const [focused, setFocused] = useState(false)

    const iStyle = `w-full bg-white ${padding} text-lg text-[#405e7f]/90 rounded-xl mt- border border-[#405e7f]/50 
                    focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent transition-all 
                    duration-300 
                    ${focused ? 'ring-2 ring-[#60efdb] border-transparent' : ''}`
    const lStyle = 'text-[#405e7f] font-semibold'

    return (

        <div className='w-full text-[#405e7f]'>
            <label
                htmlFor={isFor}
                className={lStyle}
            >
                {labelTitle}
            </label>
            <br />
            <input
                id={isFor}
                type={iType}
                name={iName}
                value={iValue}
                className={iStyle}
                placeholder={iHolder}
                onChange={iChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </div>
    )
}
