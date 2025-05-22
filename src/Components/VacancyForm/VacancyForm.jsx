import React from 'react'
import { Input } from '../../UI/Input'
import { Desc } from '../../UI/Desc'
import { Button } from '../../UI/button'

export const VacancyForm = () => {
    return (
        <div className='rounded-xl px-20 py-14 mx-30 mt-6 bg-[#405e7f]'>
            <form action='' className='w-full'>
                <div className='flex justify-between items-start mb-8'>
                    <h2 className='text-white text-2xl font-semibold'>
                        Crea una nueva vacante, al terminar de llenar todos los campos, haz click en "publicar vacante"
                    </h2>
                    <Button
                        btnName='Publicar vacante'
                        btnType='submit'
                        btnStyle='w-[12%] bg-[#60efdb] text-[#405e7f] font-semibold text-lg rounded-full hover:bg-[#60efdb]/90 transition-all duration-300'
                    />
                </div>
                <div className='w-full flex gap-12'>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <Input
                            labelTitle='Nombre de la vacante'
                            labelColor='white'
                            iName='vacancyName'
                            isFor='vacancyName'
                            iType='text'
                            iHolder='Ingresa nombre de la ocupación que solicitas'
                        />
                        <Input
                            labelTitle='Persona de contacto'
                            labelColor='white'
                            iName='contactPerson'
                            isFor='contactPerson'
                            iType='text'
                            iHolder='Ingresa nombre de la persona de contacto'
                        />
                        <Input
                            labelTitle='Contacto'
                            labelColor='white'
                            iName='contact'
                            isFor='contact'
                            iType={'email' || 'tel'}
                            iHolder='Ingresa número de contacto o correo electrónico'
                        />
                        <Input
                            labelTitle='Ubicación'
                            labelColor='white'
                            iName='location'
                            isFor='location'
                            iType='text'
                            iHolder='Ingresa la ubicación de la vacante'
                        />
                    </div>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <Desc
                            height='h-34'
                            color='text-white'
                            nameDesc='Responsabilidades y especificaciones'
                            holderDesc='Escribe las responsabilidades que tendrá la persona que ocupe la vacante'
                        />
                        <Input
                            labelTitle='Disponibilidad requerida'
                            labelColor='white'
                            iName='availability'
                            isFor='availability'
                            iType='text'
                            iHolder='Ingresa la disponibilidad que solicitas (Ej. Tiempo completo de lunes a viernes)'
                        />
                        <Input
                            labelTitle='Salario estimado'
                            labelColor='white'
                            iName='salary'
                            isFor='salary'
                            iType='text'
                            iHolder='Ingresa el salario que ofreces Ej. 1.200.000 COP (dependiendo de tus especificaciones)'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

