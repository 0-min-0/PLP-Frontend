import { Input } from '../../UI/Input'
import { useInfo } from '../../Context/InfoContext'
import { HiOutlinePhone } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { ResumeDesc } from '../../UI/ResumeDesc'
import { Photo } from '../../UI/Photo'
import { CardResume } from '../../UI/CardResume'

export const FormData = () => {

    const { info, handleChange } = useInfo()

    return (
        <CardResume
            formTitle='Información Personal'
            mainForm={
                <div className='w-full flex gap-20'>
                    <div className='w-[60%]'>
                        <Input
                            labelTitle='Nombre completo'
                            iName='completeName'
                            iType='text'
                            isFor='name'
                            iHolder='Ingresa tu nombre(s) y apellidos'
                            iValue={info.name}
                            iChange={handleChange}
                        />
                        <div className='mt-4'>
                            <h2 className='text-[#405e7f] font-semibold'>Contacto</h2>
                            <div className='relative'>
                                <Input
                                    iName='phone'
                                    iType='tel'
                                    isFor='phoneOne'
                                    iHolder='Ingresa tu numero de telefono'
                                    iValue={info.phone}
                                    iChange={handleChange}
                                    padding='pl-12 py-2'
                                />
                                <HiOutlinePhone className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                            </div>
                            <div className='relative'>
                                <Input
                                    iName='phoneSec'
                                    iType='tel'
                                    isFor='phoneSec'
                                    iHolder='Ingresa tu numero de telefono secundario (Opcional)'
                                    iValue={info.phoneSec}
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
                                    iValue={info.email}
                                    iChange={handleChange}
                                    padding='pl-12 py-2'
                                />
                                <HiOutlineMail className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%]'>
                        <Photo />
                        <ResumeDesc />
                    </div>
                </div>
            }
        />
    )
}
