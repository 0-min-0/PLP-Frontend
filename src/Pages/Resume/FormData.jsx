import { useState, useRef, useEffect } from 'react'
import { Input } from '../../UI/Input'
import { useData } from '../../Context/DataContext'
import { HiOutlinePhone, HiOutlineMail, HiCheckCircle } from 'react-icons/hi'
import { ResumeDesc } from '../../UI/ResumeDesc'
import { Photo } from '../../UI/Photo'
import { CardResume } from '../../UI/CardResume'
import { Button } from '../../UI/button'

export const FormData = () => {
    const { data, errors, handleChange, photo, setPhoto } = useData()
    const [completedData, setCompletedData] = useState(false)
   
    const photoRef = useRef()

    useEffect(() => {
        setCompletedData(false)
    }, [data, photo])

    const handleClick = (e) => {
        e.preventDefault()
        const isValid = validateForm()

        if (isValid) {
            setCompletedData(true)
        }
    }

    return (
        <CardResume
            formTitle='Información Personal'
            btnCompleted={
                <Button
                    btnType='submit'
                    clicked={handleClick}
                    btnStyle={`min-w-[10%] flex items-center bg-[#60efdb] text-[#405e7f] p-2`}
                >
                    {completedData ? 'Completado' : 'Completar'}
                    {completedData && <HiCheckCircle className='w-6 h-6 ml-2 text-[#2a445e] text-lg' />}
                </Button>
            }
            mainForm={
                <form onSubmit={handleClick} className='w-full max-h-[50%] flex gap-20'>
                    <div className='w-[60%]'>
                        <Input
                            labelTitle='Nombre completo'
                            iName='name'
                            iType='text'
                            isFor='name'
                            iHolder='Ingresa tu nombre(s) y apellidos'
                            iValue={data.name}
                            iChange={(e) => {
                                handleChange(e)
                                setCompletedData(false)
                                setErrors(prev => ({ ...prev, name: '' }))
                            }}
                        />
                        {errors.name && <p className='text-red-400 text-sm mt-1'>{errors.name}</p>}

                        <div className='mt-8'>
                            <h2 className='text-[#405e7f] font-semibold'>Contacto</h2>
                            <div className='relative'>
                                <Input
                                    iName='phone'
                                    iType='tel'
                                    isFor='phoneOne'
                                    iHolder='Ingresa tu numero de telefono'
                                    iValue={data.phone}
                                    iChange={(e) => {
                                        handleChange(e)
                                        setCompletedData(false)
                                        setErrors(prev => ({ ...prev, phone: '' }))
                                    }}
                                    padding='pl-12 py-2'
                                />
                                <HiOutlinePhone className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                            </div>

                            {errors.phone && <p className='text-red-400 text-sm mt-1'>{errors.phone}</p>}

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
                                    iChange={(e) => {
                                        handleChange(e)
                                        setCompletedData(false)
                                        setErrors(prev => ({ ...prev, name: '' }))
                                    }}
                                    padding='pl-12 py-2'
                                />
                                <HiOutlineMail className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                            </div>

                            {errors.email && <p className='text-red-400 text-sm mt-1'>{errors.email}</p>}

                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <Photo
                            ref={photoRef}
                            error={errors.photo}
                            onPhotoValid={(file) => {
                                setPhoto(file)
                                setCompletedData(false)
                                setErrors(prev => ({ ...prev, name: '' }))
                            }}
                        />
                        <ResumeDesc />
                    </div>
                </form>
            }
        />
    )
}