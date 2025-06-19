import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FormsContainer } from '../../UI/FormsContainer'
import { Input } from '../../UI/Input'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { optionGenre, optionTown, categories } from '../../Utils/options'
import { Select } from '../../UI/Select'
import { Desc } from '../../UI/Desc'
import { Button } from '../../UI/button'
import { useRegister } from '../../Context/RegisterContext'

export const RegisterUser = () => {
    const navigate = useNavigate()
    const {
        form,
        errors,
        handleChange,
        handleSelectChange,
        handleSubmit,
        validateRegisterUserForm
    } = useRegister()

    const errorStyle = 'text-[#ff6b6b] text-sm mt-1 font-semibold'

    const localHandleSubmit = (e) => {
        e.preventDefault()
        if (validateRegisterUserForm()) {
            handleSubmit(e, 'registerUser')
            navigate('/crear-cuenta/rol')
        }
    }

    return (
        <div className='w-[35%]'>
            <FormsContainer
                width='w-full'
                bgColor='bg-[#dcfff6]'
                textColor='#405e7f'
                changeForm={
                    <div className=''>
                        <Button
                            clicked={localHandleSubmit}
                            btnStyle='w-[30%] bg-[#405e7f] text-white font-bold mt-2'
                            btnName='Continuar'
                        />
                        <p className='text-[#405e7f] pt-4'>
                            ¿Ya estás registrado en nuestra plataforma?{' '}
                            <NavLink to='/acceder' className='text-[#405e7f] font-semibold hover:underline hover:text-[#405e7f]/60'>
                                Iniciar sesión
                            </NavLink>
                        </p>
                    </div>
                }
                form={
                    <form onSubmit={localHandleSubmit} className='w-full h-115 overflow-y-auto scrollbar-custom mb-5'>
                        <div className='w-full items-start'>
                            <div className='w- pr-5 mb-3'>
                                <div>
                                    <Input
                                        labelTitle='Nombre completo/Nombre de la empresa'
                                        iName='name'
                                        iType='text'
                                        isFor='name'
                                        iValue={form.name}
                                        iChange={handleChange}
                                        iHolder='Ingresa nombre completo o nombre de la empresa'
                                    />
                                    {errors.name && <p className={errorStyle}>{errors.name}</p>}
                                </div>

                                <div className='mt-4'>
                                    <h2 className='text-[#405e7f] font-semibold'>Contacto (Personal/Empresa)</h2>
                                    <div className='relative'>
                                        <Input
                                            iName='phone'
                                            iType='tel'
                                            isFor='phoneOne'
                                            iValue={form.phone}
                                            iChange={handleChange}
                                            iHolder='Ingresa numero de telefono'
                                            padding='pl-12 py-2'
                                        />
                                        <HiOutlinePhone className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                                    </div>
                                    {errors.phone && <p className={errorStyle}>{errors.phone}</p>}

                                    <div className='relative mt-4'>
                                        <Input
                                            iName='phoneSec'
                                            iType='tel'
                                            isFor='phoneSec'
                                            iValue={form.phoneSec}
                                            iChange={handleChange}
                                            iHolder='Ingresa numero de telefono secundario (Opcional)'
                                            padding='pl-12 py-2'
                                        />
                                        <HiOutlinePhone className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                                    </div>
                                    {errors.phoneSec && <p className={errorStyle}>{errors.phoneSec}</p>}

                                    <div className='relative mt-4'>
                                        <Input
                                            iName='email'
                                            iType='email'
                                            isFor='emailAdress'
                                            iValue={form.email}
                                            iChange={handleChange}
                                            iHolder='Ingresa direccion de correo electronico'
                                            padding='pl-12 py-2'
                                        />
                                        <HiOutlineMail className='absolute w-6 h-6 text-[#405e7f]/70 bottom-3 left-3' />
                                    </div>
                                    {errors.email && <p className={errorStyle}>{errors.email}</p>}
                                </div>
                            </div>

                            <div className='pr-5'>
                                <Desc
                                    nameDesc='Descripción'
                                    holderDesc='Escribe una breve descripción de la empresa o de ti mismo'
                                    name='description'
                                    value={form.description}
                                    onChange={(e) => handleChange({
                                        target: {
                                            name: 'description',
                                            value: e.target.value
                                        }
                                    })}
                                    error={errors.description}
                                />
                                <div className='w-full'>
                                    <div className='mt-2'>
                                        <Select
                                            label='Municipio'
                                            name='town'
                                            value={form.town}
                                            onChange={(value) => handleSelectChange('town', value)}
                                            options={optionTown}
                                        />
                                        {errors.town && <p className={errorStyle}>{errors.town}</p>}
                                    </div>
                                    <div className='mt-3'>
                                        <Select
                                            label='Género (Si te estas registrando como empresa no aplica)'
                                            name='genre'
                                            value={form.genre}
                                            onChange={(value) => handleSelectChange('genre', value)}
                                            options={optionGenre}
                                        />
                                        {errors.genre && <p className={errorStyle}>{errors.genre}</p>}
                                    </div>
                                    <div className='mt-3'>
                                        <Select
                                            label='Categoría'
                                            name='category'
                                            value={form.category}
                                            onChange={(value) => handleSelectChange('category', value)}
                                            options={categories}
                                        />
                                        {errors.category && <p className={errorStyle}>{errors.category}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                }
            />
        </div>
    )
}
