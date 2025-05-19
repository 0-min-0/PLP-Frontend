import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { FormsContainer } from '../../UI/FormsContainer'
import { Input } from '../../UI/Input'
import { Button } from '../../UI/button'
import { WelcomeText } from '../../UI/WelcomeText'
import registerIlustration from '../../assets/images/register-ilustration.png'

export const Company = () => {
    const navigate = useNavigate()
    const errorStyle = 'text-[#60efdb] text-sm mt-1 font-semibold'

    const [form, setForm] = useState({
        nit: '',
        sector: '',
        website: ''
    })

    const [errors, setErrors] = useState({
        nit: '',
        sector: '',
        website: ''
    })

    const validateNIT = (nit) => {
        if (!nit) return 'ⓘ El NIT es requerido'
        if (!/^[0-9-]+$/.test(nit)) return 'ⓘ El NIT solo puede contener números y guiones'
        if (nit.replace(/-/g, '').length < 6) return 'ⓘ NIT demasiado corto'
        const cleanNit = nit.replace(/-/g, '')
        const digits = cleanNit.split('').map(Number)
        const lastDigit = digits.pop()

        let sum = 0
        let factor = digits.length + 1

        digits.forEach(digit => {
            sum += digit * factor
            factor--
        })

        // const calculatedVerifier = (11 - (sum % 11)) % 11
        // if (calculatedVerifier !== lastDigit) {
        //     return 'ⓘ NIT inválido (dígito verificador incorrecto)'
        // }
        // return ''
    }

    useEffect(() => {
        if (form.nit) {
            const nitError = validateNIT(form.nit)
            setErrors(prev => ({
                ...prev,
                nit: nitError
            }))
        }

        if (form.sector) {
            setErrors(prev => ({
                ...prev,
                sector: form.sector ? '' : 'ⓘ El sector es requerido'
            }))
        }
    }, [form.nit, form.sector])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const localHandleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {
            nit: validateNIT(form.nit),
            sector: form.sector ? '' : 'ⓘ El sector es requerido',
            website: '' 
        }

        setErrors(newErrors)

        if (!newErrors.nit && !newErrors.sector) {
            navigate('/crear-contraseña')
        }
    }

    return (
        <div>
            <Header
                middleObject={
                    <h1 className='text-6xl mb-8 font-[afacadBold] text-[#405e7f]'>
                        Registrarse como empresa
                    </h1>
                }
                buttons={
                    <div className='flex gap-2 mb-8'>
                        <NavLink to='/politicas-de-privacidad' className='text-[#254160] font-semibold hover:text-[#405e7f] hover:underline'>Políticas de privacidad</NavLink>
                        <p>•</p>
                        <NavLink to='/terminos-y-condiciones' className='text-[#254160] font-semibold hover:text-[#405e7f] hover:underline'>Terminos y condiciones</NavLink>
                    </div>
                }
            />
            <div className='flex items-center mt-14 gap-20 justify-center'>
                <FormsContainer
                    width='w-[35%]'
                    bgColor='bg-[#405e7f]'
                    changeForm={
                        <div>
                            <hr className='w-full border-t-2 border-white/9 mb-4' />
                            <p className='text-white pt-4'>
                                ¿Ya estás registrado en nuestra plataforma?{' '}
                                <NavLink to='/acceder' className='text-white font-semibold hover:underline hover:text-gray-200'>
                                    Iniciar sesión
                                </NavLink>
                            </p>
                        </div>
                    }
                    form={
                        <div className='w-full'>
                            <form onSubmit={localHandleSubmit} className='w-full'>
                                <h2 className='text-white font-semibold mb-4'>
                                    Completa la información y haz click en continuar.
                                </h2>
                                <div className='w-full mb-5'>
                                    <div className='mb-4'>
                                        <Input
                                            labelTitle='NIT (Número de identificación tributaria)'
                                            labelColor='white'
                                            iName='nit'
                                            isFor='nit'
                                            iType='text'
                                            iValue={form.nit}
                                            iChange={handleChange}
                                            iHolder='Ingresa el NIT de la empresa (ej: 1234567-8)'
                                        />
                                        {errors.nit && <p className={errorStyle}>{errors.nit}</p>}
                                    </div>
                                    <div className='mb-4'>
                                        <Input
                                            labelTitle='Sector de la empresa'
                                            labelColor='white'
                                            iName='sector'
                                            isFor='sector'
                                            iType='text'
                                            iValue={form.sector}
                                            iChange={handleChange}
                                            iHolder='Ingresa el sector de la empresa (Ej. Tecnología)'
                                        />
                                        {errors.sector && <p className={errorStyle}>{errors.sector}</p>}
                                    </div>
                                    <div>
                                        <Input
                                            labelTitle='Sitio web de la empresa'
                                            labelColor='white'
                                            iName='website'
                                            isFor='website'
                                            iType='text'
                                            iValue={form.website}
                                            iChange={handleChange}
                                            iHolder='Ingresa el enlace del sitio web de la empresa (opcional)'
                                        />
                                    </div>
                                </div>
                                <Button
                                    btnType='submit'
                                    btnStyle='w-[25%] bg-[#60efdb] text-[#405e7f] font-bold mb-4 mx-50 hover:bg-[#4fd4c1]'
                                    btnName='Continuar'
                                />
                            </form>
                        </div>
                    }
                />
                <WelcomeText
                    text={<p> Nos alegra tener nuevos usuarios como tú en
                        <br /> nuestro aplicativo, esperamos que tu
                        <br /> experiencia sea agradable en PLP. </p>
                    }
                    ilustration={registerIlustration}
                    imgDesc='Ilustración de inicio de sesión'
                    imgStyle='w-[400px] h-[400px]'
                />
            </div>
        </div>
    )
}