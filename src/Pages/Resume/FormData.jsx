import { useState, useEffect } from 'react'
import { Input } from '../../UI/Input'
import { HiOutlinePhone } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { useForm } from '../../Context/FormsContext'
import { useFormValid } from '../../Context/ValidFormContext'

export const FormData = () => {

  const maxLength = 500
  const [focused, setFocused] = useState(false)
  const [text, setText] = useState('')
  const { setIsValidFormData } = useFormValid()
  const { allForms, updateForm } = useForm()

  const handleInput = (e) => {
    const { name, value } = e.target
    updateForm('formData', name, value)
  }

  const handleDescription = (e) => {
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
          iValue={allForms.formData.name}
          iChange={handleInput}
        />
        <div className='mt-4'>
          <div className='relative'>
            <Input
              labelTitle='Contacto'
              isFor='contactNum'
              iHolder='Numero de telefono principal'
              iName='contactNum'
              iType='tel'
              iValue={allForms.formData.phone}
              iChange={handleInput}
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
              iValue={allForms.formData.phoneSec}
              iChange={handleInput}
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
              iValue={allForms.formData.email}
              iChange={handleInput}
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
              onChange={handleDescription}
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
            <p className='text-red-400 mt-1 font-semibold'>ⓘ Límite alcanzado</p>
          )}
        </div>
      </form>
    </div>
  )
}