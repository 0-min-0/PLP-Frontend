import React from 'react';
import { CardContainer } from '../../Components/Container/CardContainer'
import { vacanciesExample } from '../../Utils/objectsExample'
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil'

export const VacanciesLayout = () => {
    return (
        <div className='flex flex-col'>
            <div className='text-[#405e7f] mx-10 mt-10 mb-5'>
                <h1 className='font-[afacadBold] text-4xl mb-2'>
                    ¡Hola, Usuario! No te pierdas las vacantes mas recientes.
                </h1>
                <h3 className='text-lg'>Busca ofertas laborales desde las mas recientes (Hoy) hasta las mas pasadas de fecha (Este mes).</h3>
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