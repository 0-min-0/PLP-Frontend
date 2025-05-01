import { useState } from 'react'
import { useFocus } from '../Context/FocusContext'

export const ResumeDesc = () => {

    const maxLength = 500
    const [text, setText] = useState('')
    const { focused, setFocused } = useFocus()

    const handleChange = (e) => {
        const input = e.target.value
        if (input.length <= maxLength) {
            setText(input)
        }
    }

    const descStyle = `w-full h-25 bg-white px-4 py-2 resize-none text-lg mt-3 text-[#405e7f]/90 rounded-xl border 
                       border-[#405e7f]/50 focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent 
                       transition-all duration-300 ${focused ? 'ring-2 ring-[#60efdb] border-transparent' : ''}`

    return (
        <div className='w-full mt-4'>
            <label className='text-[#405e7f] font-semibold'>
                Descripción
            </label>
            <div className='relative'>
                <textarea
                    value={text}
                    onChange={handleChange}
                    rows={5}
                    className={descStyle}
                    placeholder='Escribe tu descripción personal'
                    maxLength={maxLength + 1}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                <span className='absolute bottom-3 right-4 text-[#405e7f]/60'>
                    {text.length}/{maxLength}
                </span>
            </div>
            {text.length === maxLength && (
                <p className='text-red-400 font-semibold'>Límite alcanzado</p>
            )}
        </div>
    )
}
