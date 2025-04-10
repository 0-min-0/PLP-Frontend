import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { Button } from '../../UI/button'
// import { useFocus } from '../../Context/FocusContext'

export const LoginForm = () => {

    const [emailFocused, setEmailFocused] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false)
  

    return (
        <div className='w-[40%] flex flex-col justify-center items-center text-white bg-[#405e7f]'>
            <h2 className='text-center text-4xl font-bold font-[bodyBold]'>Acceder</h2>
            <form onSubmit='' className='w-[80%] relative flex flex-col p-8 gap-4 '>
                <div className='absolute left-12 top-10 text-[#7c92ab]'>
                    <HiOutlineMail className='w-6 h-6' />
                </div>
                <input
                    type='text'
                    placeholder='Ingresa tu correo o número de teléfono'
                    className={`bg-white py-2 pl-12 pr-4 text-[#405e7f]/90 rounded-full border border-[#7c92ab] focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent transition-all duration-300 
                   ${emailFocused ? 'ring-2 ring-[#60efdb] border-transparent' : ''}`}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                />
                <div className='absolute left-12 top-23 text-[#7c92ab]'>
                    <HiOutlineLockClosed className='w-6 h-7' />
                </div>
                <input
                    type='password'
                    placeholder='Ingresa tu contraseña'
                    className={`bg-white py-2 pl-12 pr-4 text-[#405e7f]/90 rounded-full border border-[#7c92ab] focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent transition-all duration-300 
                    ${passwordFocused ? 'ring-2 ring-[#60efdb] border-transparent' : ''}`}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                />
                <NavLink
                    to='/recuperar-contraseña'
                    className='underline'
                > ¿Haz olvidado tu contraseña?
                </NavLink>
                <NavLink to='/Inicio'>
                    <Button
                        btnType='button'
                        btnStyle='bg-[#60efdb] text-[#405e7f] font-bold px-4 py-2 rounded-full cursor-pointer'
                        btnId='btnCreateAccount'
                        btnName='Acceder'
                    />
                </NavLink>
            </form>
            <hr />
            <Button
                btnType='button'
                btnName='Continuar con Google'
                btnStyle='flex items-center bg-white text-[#254160] rounded-full px-4 py-2'
                btnIcon='google'
            />
        </div>
    )
}
