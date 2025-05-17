import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FormsContainer } from '../../UI/FormsContainer'
import { Header } from '../Header/Header'
import { Input } from '../../UI/Input'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { optionGenre, optionTown } from '../../Utils/options'
import { Select } from '../../UI/Select'
import { ResumeDesc } from '../../UI/ResumeDesc'
import { DataProvider } from '../../Context/DataContext'
import { Button } from '../../UI/button'

export const RegisterUser = () => {

    const [selectedTown, setSelectedTown] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('')

    return (
        <div className='w-[55%]'>
            <FormsContainer
                width='w-full'
                bgColor='#dcfff6'
                textColor='#405e7f'
                changeForm={
                    <p className='text-[#405e7f] pt-4'>
                        ¿Ya estás registrado en nuestra plataforma?{' '}
                        <NavLink to='/acceder' className='text-[#405e7f] font-semibold hover:underline hover:text-[#405e7f]/60'>
                            Iniciar sesión
                        </NavLink>
                    </p>
                }
                form={
                    <form action='' className='w-full'>
                        <div className='w-full flex items-start'>
                            <div className='w-1/2 pr-5'>
                                <Input
                                    labelTitle='Nombre completo/Nombre de la empresa'
                                    iName='name'
                                    iType='text'
                                    isFor='name'
                                    iHolder='Ingresa nombre completo o nombre de la empresa'
                                />
                                <div className='mt-8'>
                                    <h2 className='text-[#405e7f] font-semibold'>Contacto (Personal/Empresa)</h2>
                                    <div className='relative'>
                                        <Input
                                            iName='phone'
                                            iType='tel'
                                            isFor='phoneOne'
                                            iHolder='Ingresa numero de telefono'
                                            padding='pl-12 py-2'
                                        />
                                        <HiOutlinePhone className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                                    </div>
                                    <div className='relative'>
                                        <Input
                                            iName='phoneSec'
                                            iType='tel'
                                            isFor='phoneSec'
                                            iHolder='Ingresa numero de telefono secundario (Opcional)'
                                            padding='pl-12 py-2'
                                        />
                                        <HiOutlinePhone className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                                    </div>
                                    <div className='relative'>
                                        <Input
                                            iName='email'
                                            iType='email'
                                            isFor='emailAdress'
                                            iHolder='Ingresa direccion de correo electronico'
                                            padding='pl-12 py-2'
                                        />
                                        <HiOutlineMail className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 pl-5'>
                                <DataProvider>
                                    <ResumeDesc />
                                </DataProvider>
                                <div className='w-full gap-6'>
                                    <div>
                                        <Select
                                            label='Municipio'
                                            value={selectedTown}
                                            onChange={setSelectedTown}
                                            options={optionTown}
                                        />
                                    </div>
                                    <div className='mt-3'>
                                        <Select
                                            label='Género (Si te estas registrando como empresa no aplica)'
                                            value={selectedGenre}
                                            onChange={setSelectedGenre}
                                            options={optionGenre}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button
                            btnType='submit'
                            btnStyle='w-[30%] bg-[#405e7f] text-white font-bold my-6 mx-75'
                            btnName='Continuar'
                        />
                    </form>
                }
            />
        </div>
    )
}

