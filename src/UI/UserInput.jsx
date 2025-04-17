import { useState } from 'react'

export const UserInput = ({
    iType,
    iValue,
    isFor,
    iName,
    iChange,
    labelTitle,
}) => {


    const [focused, setFocused] = useState(false)

    const iStyle = `w-full bg-white py-2 px-4 text-lg text-[#405e7f]/90 rounded-xl border border-[#7c92ab] focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent transition-all duration-300 
                    ${focused ? 'ring-2 ring-[#60efdb] border-transparent' : ''}`
    const lStyle = 'text-[#405e7f] text-lg font-semibold mb-6'

    return (

        <form action='' className='w-full text-[#405e7f]'>
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
                onChange={iChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </form>
    )
}
