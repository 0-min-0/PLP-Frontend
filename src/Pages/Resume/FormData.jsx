import { useState, useRef, useEffect } from 'react'
import { Input } from '../../UI/Input'
import { useData } from '../../Context/DataContext'
import { HiOutlinePhone, HiOutlineMail, HiCheckCircle } from 'react-icons/hi'
import { ResumeDesc } from '../../UI/ResumeDesc'
import { Photo } from '../../UI/Photo'
import { CardResume } from '../../UI/CardResume'
import { Button } from '../../UI/button'

export const FormData = ({ onCompletionChange }) => {
    const {
        data,
        errors,
        handleChange,
        photo,
        photoError,
        validateFields
    } = useData()

    const [completedData, setCompletedData] = useState(false)
    const photoRef = useRef()

    useEffect(() => {
        setCompletedData(false)
    }, [data, photo])


    const handleClick = (e) => {
        e.preventDefault()

        const areFieldsValid = validateFields()
        const isPhotoValid = photoRef.current?.validatePhoto() ?? false

        if (areFieldsValid && isPhotoValid) {
            setCompletedData(true)
            onCompletionChange(areFieldsValid && isPhotoValid) // Notifica al componente padre
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
                    {completedData && <HiCheckCircle className='w-6 h-6 ml-2 text-[#405e7f] text-lg' />}
                </Button>
            }
            mainForm={
                <form action='' className='w-full max-h-[50%] flex gap-20'>
                    <div className='w-[60%]'>
                        <Input
                            labelTitle='Nombre de usuario'
                            iName='name'
                            iType='text'
                            isFor='name'
                            iHolder='Elige un nombre de usuario (Ej. usuario_123)'
                            iValue={data.name}
                            iChange={handleChange}
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
                                    iChange={handleChange}
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
                                    iChange={handleChange}
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
                            error={photoError}
                        />
                        <ResumeDesc />
                    </div>
                </form>
            }
        />
    )
}