import React from 'react'
import { CardContainer } from '../../Components/Container/CardContainer'
import { vacanciesExample } from '../../Utils/objectsExample'
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil'

export const PersonsLayout = () => {
    return (
        <div className='flex flex-col'>
            <div className='text-[#405e7f] mx-10 mt-10 mb-5'>
                <h1 className='font-[afacadBold] text-4xl mb-2'>
                    ¡Hola, Usuario! Aquí estan las hojas de vida más recientes.
                </h1>
                <h3 className='text-lg'>Busca personas a las cuales puedas contratar ya sea temporal permanentemente, podras encontrarlas desde las más recientes (Hoy), hasta las mas antiguas (Este mes).</h3>
            </div>
            <div className='mb-10'>
                <div className='flex w-full gap-4'>
                    <div className='w-[70%]'>
                        <CardContainer
                            title='Hoy'
                            vacancies={vacanciesExample}
                            rounded='top'
                        />
                    </div>
                    <div className='w-[30%]'>
                        <SetPerfil />
                    </div>
                </div>
                <CardContainer
                    title='Esta semana'
                    vacancies={vacanciesExample}
                    rounded='top-right'
                />

                <CardContainer
                    title='Este mes'
                    vacancies={vacanciesExample}
                    rounded='bottom'
                />
            </div>
        </div>
    )
}