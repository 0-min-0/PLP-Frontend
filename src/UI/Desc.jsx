import { useGlobal } from '../Context/GlobalContext'

export const Desc = ({ nameDesc, holderDesc, height = 'h-25', color = 'text-[#405e7f]' }) => {
    const { form, errors, handleChange } = useGlobal()
    const maxLength = 500

    const descStyle = `w-full ${height} bg-white px-4 py-2 resize-none text-lg mt-3 text-[#405e7f]/90 rounded-xl border 
                   border-[#405e7f]/50 focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent 
                   transition-all duration-300`

    return (
        <div className='w-full'>
            <label className= {`${color} font-semibold`}>
                {nameDesc}
            </label>
            <div className='relative'>
                <textarea
                    name='description'
                    value={form.description}
                    onChange={(e) => {
                        if (e.target.value.length <= maxLength) {
                            handleChange(e)
                        }
                    }}
                    rows={5}
                    className={descStyle}
                    placeholder={holderDesc}
                    maxLength={maxLength + 1}
                />
                <span className='absolute bottom-3 right-4 text-[#405e7f]/60'>
                    {form.description ? form.description.length : 0}/{maxLength}
                </span>
            </div>
            {/* Muestra errores o advertencias */}
            {errors.description && (
                <p className='text-[#ff6b6b] text-sm mt-1 font-semibold'>{errors.description}</p>
            )}
            {form.description && form.description.length === maxLength && !errors.description && (
                <p className='text-[#ff6b6b] text-sm mt-1 font-semibold'>ⓘ Límite alcanzado</p>
            )}
        </div>
    )
}