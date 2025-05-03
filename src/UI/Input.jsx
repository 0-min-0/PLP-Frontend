import { useFocus } from '../Context/FocusContext'

export const Input = ({
    iType,
    iValue,
    isFor,
    iName,
    iChange,
    labelTitle = '',
    iHolder = '',
    padding = 'px-4 py-2',
}) => {

    const { focused, setIsFocused } = useFocus()

    const iStyle = `w-full bg-white ${padding} text-lg mt-3 text-[#405e7f]/90 rounded-xl border border-[#405e7f]/50 
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
            <input
                id={isFor}
                type={iType}
                name={iName}
                value={iValue}
                className={iStyle}
                placeholder={iHolder}
                onChange={iChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    )
}
