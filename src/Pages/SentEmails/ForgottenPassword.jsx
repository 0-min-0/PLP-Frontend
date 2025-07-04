import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../UI/button'
import { Header } from '../../Components/Header/Header'
import { Input } from '../../UI/Input'
import { useContact } from '../../Context/ContactContext'


export const ForgottenPassword = () => {
    const { formData, errors, handleChange, handleSubmit, isLoading } = useContact()

    return (
        <div className='h-full back-color page p-6'>
            <Header
                middleObject={
                    <h1 className='title-page text-4xl font-[afacadBold] text-[color:var(--color-card-text)]'>
                        Reestablecer contraseña
                    </h1>
                }
            />
            <div className='w-full'>
                <h3 className='text-center text-lg/6 mt-8 text text-[color:var(--color-card-text)]'>
                    Ingresa tu correo eléctronico y haz click en "Recibir correo", luego revisa tu correo y reestablece tu contraseña,
                    <br /> serás redirigido a la página de inicio. Sino recibes el correo, puedes reenviarlo.
                </h3>
                <div className='flex flex-col items-center mt-6 gap-4'>
                    <div className='password-form w-[40%] flex text-center my-60'>
                       <div className='w-[80%]'>
                         <Input
                            iHolder='Ingresa tu correo electrónico'
                            iName='email'
                            iValue={formData.email}
                            iChange={handleChange}
                            error={errors.email}
                            iType='email'
                        />
                       </div>
                        <Button
                            btnName={'Recibir correo'}
                            btnStyle='ml-4 text-[#405e7f] bg-[#60efdb] px-6 py-1'
                        />
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <p className='text-[color:var(--color-card-text)] text'>
                            ¿Aún no recibes ningún correo? Revisa tu carpeta de spam o correo no deseado o agrega plataformalaboralproactiva@correo.com a tus contactos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}