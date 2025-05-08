import React from 'react';
import { VacanciesContainer } from '../../Components/Vacancies/VacanciesContainer'
import { vacanciesExample } from '../../Utils/objectsExample'
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil';

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
                <div className='flex'>
                    <VacanciesContainer
                        title='Hoy'
                        vacancies={vacanciesExample}
                        rounded='top'
                        widthContainer='70%'
                    />
                    <SetPerfil />
                </div>
                <VacanciesContainer
                    title='Esta semana'
                    vacancies={vacanciesExample}
                    rounded='top-right'
                />

                <VacanciesContainer
                    title='Este mes'
                    vacancies={vacanciesExample}
                    rounded='bottom'
                />
            </div>
        </div>
    )
}