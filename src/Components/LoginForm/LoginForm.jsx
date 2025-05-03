import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { PiEyeClosed } from 'react-icons/pi'
import { PiEye } from 'react-icons/pi'
import { Button } from '../../UI/button'
import { FormsContainer } from '../../UI/FormsContainer'
import { Input } from '../../UI/Input'
import { usePassword } from '../../Context/PasswordContext'

export const LoginForm = () => {
    const navigate = useNavigate()

    const pStyle = 'text-[#60efdb] text-sm mt-1 font-semibold'
    const { visibility, toggleVisibility } = usePassword()

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
        <div className='w-[30%] text-white'>
            <FormsContainer
                width='w-full'
                bgColor='#405e7f'
                title='Acceder'
                changeForm={
                    <div className='flex flex-col items-center w-full'>
                        <hr className='w-full border-t-2 border-white/9' />
                        <Button
                            btnType='button'
                            btnName='Continuar con Google'
                            btnStyle='w-60 flex items-center text-center bg-white text-[#254160] rounded-full px-4 py-2 my-4'
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
                    </div>}
                form={
                    <form onSubmit={handleSubmit} className='w-full relative flex flex-col items-center'>
                        <div className='w-full'>
                            <div className='w-full relative'>
                                <div className='absolute left-3 bottom-3 text-[#7c92ab]'>
                                    <HiOutlineMail className='w-6 h-6' />
                                </div>
                                <Input
                                    iType='email'
                                    iName='email'
                                    iValue={form.email}
                                    iChange={handleChange}
                                    iHolder='Ingresa tu correo o número de teléfono'
                                    padding='pl-12 pr-4 py-2'
                                />
                            </div>
                            {errorForm.errorEmail && (
                                <p className={pStyle}>{errorForm.errorEmail}</p>
                            )}
                        </div>
                        <div className='w-full mt-4'>
                            <div className='w-full relative'>
                                <div className='absolute left-3 bottom-3 text-[#7c92ab]'>
                                    <HiOutlineLockClosed className='w-6 h-7' />
                                </div>
                                <Input
                                    iType={visibility.loginPassword ? 'text' : 'password'}
                                    iName='password'
                                    iValue={form.password}
                                    iChange={handleChange}
                                    iHolder='Ingresa tu contraseña'
                                    padding='pl-12 pr-4 py-2'
                                />
                                <button
                                    type='button'
                                    onClick={() => toggleVisibility('loginPassword')}
                                    className='absolute right-4 bottom-2 text-[#405e7f]/70 hover:text-[#405e7f] font-semibold cursor-pointer'
                                >
                                    {visibility.loginPassword ? <PiEye className='w-7 h-7' /> : <PiEyeClosed className='w-7 h-7' /> }
                                </button>
                            </div>
                            {errorForm.errorPassword && (
                                <p className={pStyle}>{errorForm.errorPassword}</p>
                            )}
                        </div>
                        <div className='flex flex-col items-center gap-4 mt-6'>
                            <NavLink
                                to='/recuperar-contraseña'
                                className='hover:text-[#60efdb] hover:underline'
                            >
                                ¿Has olvidado tu contraseña?
                            </NavLink>

                            <Button
                                btnType='submit'
                                btnStyle=' bg-[#60efdb] text-[#405e7f] font-bold px-4 py-2 rounded-full cursor-pointer w-full'
                                btnId='btnLogin'
                                btnName='Acceder'
                            />
                        </div>
                    </form>
                }
            />
        </div>

    )
}