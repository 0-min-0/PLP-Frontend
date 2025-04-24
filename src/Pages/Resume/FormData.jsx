import { useState } from 'react'
import { Input } from '../../UI/Input'
import { HiOutlinePhone } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'


export const FormData = () => {

  const [focused, setFocused] = useState(false)

  const maxLength = 500
  const [text, setText] = useState('')

  const handleChange = (e) => {
    const input = e.target.value
    if (input.length <= maxLength) {
      setText(input)
    }
  }

  return (
    <div className='w-full'>
      <h2 className='text-lg text-[#405e7f] font-semibold mb-4'>Información personal</h2>
      <form action=''>
        <Input
          isFor='completeName'
          labelTitle='Nombre completo'
          iName='completeName'
          iType='text'
          iValue=''
        />
        <div>
          <h3 className='text-[#405e7f] font-semibold mt-2'>Contacto</h3>
          <div className='relative'>
            <Input
              isFor='contactNum'
              iHolder='Numero de telefono principal'
              iName='contactNum'
              iType='tel'
              iValue=''
              padding='pl-12 py-1'
            />
            <HiOutlinePhone className='w-6 h-6 absolute left-3 bottom-2 text-[#405e7f]/70' />
          </div>
          <div className='relative'>
            <Input
              isFor='contactNumSec'
              iHolder='Numero de telefono secundario'
              iName='contactNumSec'
              iType='tel'
              iValue=''
              padding='pl-12 py-1'
            />
            <HiOutlinePhone className='w-6 h-6 absolute left-3 bottom-2 text-[#405e7f]/70' />
          </div>
          <div className='relative'>
            <Input
              isFor='contactMail'
              iHolder='Correo electronico'
              iName='contactMail'
              iType='email'
              iValue=''
              padding='pl-12 py-1'
            />
            <HiOutlineMail className='w-6 h-6 absolute left-3 bottom-2 text-[#405e7f]/70' />
          </div>
        </div>
        <div className='mt-4'>
          <label className='text-[#405e7f] font-semibold'>
            Descripción personal
          </label>
          <div className='relative'>
            <textarea
              value={text}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 bg-white text-lg text-[#405e7f]/90 rounded-xl border border-[#405e7f]/50 focus:outline-none 
                          focus:ring-2 focus:ring-[#60efdb] focus:border-transparent transition-all duration-300 resize-none mt-2
                          ${focused ? 'ring-2 ring-[#60efdb] border-transparent' : ''}`}

              placeholder='Escribe tu descripción...'
              maxLength={maxLength + 1}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <span className='absolute bottom-3 right-4 text-gray-400'>
              {text.length}/{maxLength}
            </span>
          </div>
          {text.length === maxLength && (
            <p className='text-red-500 text-xs mt-1'>ⓘ Límite alcanzado</p>
          )}
        </div>
      </form>
    </div>
  )
}