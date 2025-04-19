import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { Button } from '../../UI/Button'

export const LoginForm = () => {
    const navigate = useNavigate()
    const [emailFocused, setEmailFocused] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false)

    // Estados para el formulario y errores
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [errorForm, setErrorForm] = useState({
        errorEmail: '',
        errorPassword: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrorForm({
            errorEmail: '',
            errorPassword: ''
        })

        if (!form.email && !form.password) {
            setErrorForm({
                errorPassword: 'ⓘ Ambos campos son requeridos'
            })
        } else if (!form.email) {
            setErrorForm({
                errorEmail: 'ⓘ El correo o número de teléfono son requeridos'
            })
        } else if (!form.password) {
            setErrorForm({
                errorPassword: 'ⓘ La contraseña es requerida'
            })
        } else {
            navigate('/inicio')
        }
    }

    return (
        <div className='w-[35%] flex flex-col justify-center items-center p-10 text-white bg-[#405e7f] rounded-xl'>
            <h2 className='text-center text-4xl font-bold pb-6 font-[arialBold]'>Acceder</h2>
            <form onSubmit={ handleSubmit } className='w-[100%] relative flex flex-col items-center gap-6 '>
                <div className='w-full relative'>
                    <div className='absolute left-3 top-2 text-[#7c92ab]'>
                        <HiOutlineMail className='w-6 h-6' />
                    </div>
                    <input
                        type='email'
                        name='email'
                        placeholder='Ingresa tu correo o número de teléfono'
                        className={`w-full bg-white py-2 pl-12 pr-4 text-[#405e7f]/90 rounded-full border border-[#7c92ab] focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent transition-all duration-300 
                        ${emailFocused ? 'ring-2 ring-[#60efdb] border-transparent' : ''}`}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                        onChange={handleChange}
                        value={form.email}
                    />
                    {errorForm.errorEmail && (
                        <p className='text-red-400 text-6 mt-1 ml-4'>{errorForm.errorEmail}</p>
                    )}
                </div>

                <div className='w-full relative'>
                    <div className='absolute left-3 top-2 text-[#7c92ab]'>
                        <HiOutlineLockClosed className='w-6 h-7' />
                    </div>
                    <input
                        type='password'
                        name='password'
                        placeholder='Ingresa tu contraseña'
                        className={`w-full bg-white py-2 pl-12 pr-4 text-[#405e7f]/90 rounded-full border border-[#7c92ab] focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent transition-all duration-300 
                        ${passwordFocused ? 'ring-2 ring-[#60efdb] border-transparent' : ''}`}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        onChange={handleChange}
                        value={form.password}
                    />
                    {errorForm.errorPassword && (
                        <p className='text-red-400 text-6 mt-1 ml-4'>{errorForm.errorPassword}</p>
                    )}
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <NavLink
                        to='/recuperar-contraseña'
                        className='hover:text-[#60efdb] hover:underline'
                    >
                        ¿Has olvidado tu contraseña?
                    </NavLink>

                    <Button
                        btnType='submit'
                        btnStyle=' bg-[#60efdb] text-[#405e7f] font-bold px-4 py-2 rounded-full cursor-pointer mb-4 w-full'
                        btnId='btnLogin'
                        btnName='Acceder'
                    />
                </div>
            </form>

            <div className='flex flex-col items-center w-full'>
                <hr className='w-full border-t-2 border-white/9' />
                <Button
                    btnType='button'
                    btnName='Continuar con Google'
                    btnStyle='w-60 flex items-center bg-white text-[#254160] rounded-full px-4 py-2 my-4'
                    btnIcon='google'
                />
                <div className='flex items-center text-center'>
                    <p>¿Aún no tienes una cuenta?</p>
                    <NavLink
                        to='/crear-cuenta'
                        className='text-white hover:text-[#60efdb] hover:underline ml-2' >
                        Únete ahora
                    </NavLink>
                </div>
            </div>
        </div>
    )
}