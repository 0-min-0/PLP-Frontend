import { useRegister } from '../Context/RegisterContext'

export const Desc = ({ 
    nameDesc, 
    holderDesc, 
    name,
    value,
    onChange,
    error,
    height = 'h-25', 
    color = 'text-[#405e7f]', 
    errColor = 'text-red-400'
}) => {

    const { form, errors, handleChange } = useRegister()
    const maxLength = 500

    const descStyle = `w-full ${height} bg-white px-4 py-2 resize-none text-lg mt-3 text-[#405e7f]/90 rounded-xl border 
                   border-[#405e7f]/50 focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent 
                   transition-all duration-300`

    const currentError = error || errors[name]

    return (
        <div className='w-full'>
            <label className={`${color} font-semibold`}>
                {nameDesc}
            </label>
            <div className='relative'>
                <textarea
                    name={name}
                    value={value || form[name] || ''}
                    onChange={onChange || handleChange}
                    rows={5}
                    className={descStyle}
                    placeholder={holderDesc}
                    maxLength={maxLength + 1}
                />
                <span className='absolute bottom-3 right-4 text-[#405e7f]/60'>
                    {value ? value.length : form[name] ? form[name].length : 0}/{maxLength}
                </span>
            </div>
            {currentError && (
                <p className={`${errColor} text-sm mt-1 font-semibold`}>{currentError}</p>
            )}
            {(value || form[name]) && (value ? value.length : form[name].length) === maxLength && !currentError && (
                <p className={`${errColor} text-sm mt-1 font-semibold`}>ⓘ Límite alcanzado</p>
            )}
        </div>
    )
}