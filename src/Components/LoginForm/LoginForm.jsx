import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { Button } from '../../UI/button'

export const LoginForm = () => {
    return (
        <div className='text-white justify-center'>
            <h2>Acceder</h2>
            <form onSubmit='' action='' className='relative flex flex-col bg-[#405e7f]'>
                <div className='absolute left-3 text-[#7c92ab]'>
                    <HiOutlineMail className='w-5 h-5' />
                </div>
                <input type='text' placeholder='Ingresa tu correo o número de teléfono' className='bg-white text-[#405e7f]/90' />
                <div className='absolute left-3 text-[#7c92ab]'>
                    <HiOutlineLockClosed className='w-5 h-5' />
                </div>
                <input type='text' placeholder='Ingresa tu contraseña' className='bg-white text-[#405e7f]/90' />
                <NavLink to='/recuperar-contraseña' className='underline'>¿Haz olvidado tu contraseña?</NavLink>
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
