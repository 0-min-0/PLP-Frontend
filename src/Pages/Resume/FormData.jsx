import { useState } from 'react'
import { Input } from '../../UI/Input'
import { useData } from '../../Context/DataContext'
import { HiOutlinePhone, HiOutlineMail, HiCheckCircle } from 'react-icons/hi'
import { ResumeDesc } from '../../UI/ResumeDesc'
import { Photo } from '../../UI/Photo'
import { CardResume } from '../../UI/CardResume'
import { Button } from '../../UI/button'

export const FormData = () => {
    const { data, handleChange, photo } = useData()
    const [completedData, setCompletedData] = useState(false)
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        email: false,
        photo: false,
    })

    const handleClick = (e) => {
        e.preventDefault()

        const newErrors = {
            name: !data.name.trim(),
            phone: !data.phone.trim(),
            email: !data.email.trim(),
            photo: !photo,
        }

        setErrors(newErrors)

        const isValid = !Object.values(newErrors).includes(true)
        if (isValid) {
            setCompletedData(true)
        } else {
            setCompletedData(false)
        }
    }

    return (
        <CardResume
            formTitle='Información Personal'
            btnCompleted={
                <Button
                    btnType='submit'
                    clicked={handleClick}
                    btnStyle='min-w-[10%] flex items-center bg-[#60efdb] text-[#405e7f]'
                >
                    {completedData ? 'Completado' : 'Completar'}
                    {completedData && <HiCheckCircle className='w-6 h-6 ml-2 text-[#2a445e] text-lg' />}
                </Button>
            }
            mainForm={
                <form action='' className='w-full max-h-[50%] flex gap-20'>
                    <div className='w-[60%]'>
                        <Input
                            labelTitle='Nombre completo'
                            iName='name'
                            iType='text'
                            isFor='name'
                            iHolder='Ingresa tu nombre(s) y apellidos'
                            iValue={data.name}
                            iChange={handleChange}
                            error={errors.name ? 'El nombre de usuario es requerido.' : ''}
                        />
                        <div className='mt-8'>
                            <h2 className='text-[#405e7f] font-semibold'>Contacto</h2>
                            <div className='relative'>
                                <Input
                                    iName='phone'
                                    iType='tel'
                                    isFor='phoneOne'
                                    iHolder='Ingresa tu numero de telefono'
                                    iValue={data.phone}
                                    iChange={handleChange}
                                    padding='pl-12 py-2'
                                    error={errors.phone ? 'El número de teléfono es requerido.' : ''}
                                />
                                <HiOutlinePhone className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                            </div>
                            <div className='relative'>
                                <Input
                                    iName='phoneSec'
                                    iType='tel'
                                    isFor='phoneSec'
                                    iHolder='Ingresa tu numero de telefono secundario (Opcional)'
                                    iValue={data.phoneSec}
                                    iChange={handleChange}
                                    padding='pl-12 py-2'
                                />
                                <HiOutlinePhone className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                            </div>
                            <div className='relative'>
                                <Input
                                    iName='email'
                                    iType='email'
                                    isFor='emailAdress'
                                    iHolder='Ingresa tu direccion de correo electronico'
                                    iValue={data.email}
                                    iChange={handleChange}
                                    padding='pl-12 py-2'
                                    error={errors.email ? 'El correo electrónico es requerido.' : ''}
                                />
                                <HiOutlineMail className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <Photo error={errors.photo} />
                        <ResumeDesc />
                    </div>
                </form>
            }
        />
    )
}
