import React, { useEffect, useState } from 'react'
import { CardContainer } from '../../Components/Container/CardContainer'
import { getVacancies } from '../../Utils/objectsExample'
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil'

export const VacanciesLayout = () => {
    const [vacancies, setVacancies] = useState([])

    useEffect(() => {
        const loadedVacancies = getVacancies()
        setVacancies(loadedVacancies)
    }, [])

    return (
        <div className='flex flex-col'>
            <div className='text-[#405e7f] mx-10 mt-10 mb-5'>
                <h1 className='font-[afacadBold] text-4xl mb-2'>
                    ¡Hola, Usuario! No te pierdas las vacantes más recientes.
                </h1>
                <h3 className='text-lg'>Busca ofertas laborales desde las más recientes (Hoy) hasta las más pasadas de fecha (Este mes).</h3>
            </div>
            <div className='mb-10'>
                <div className='flex w-full gap-4'>
                    <div className='w-[70%]'>
                        <CardContainer
                            title='Hoy'
                            vacancies={vacancies}
                            rounded='top'
                        />
                    </div>
                    <div className='w-[30%]'>
                        <SetPerfil />
                    </div>
                </div>
                <CardContainer
                    title='Esta semana'
                    vacancies={vacancies}
                    rounded='top-right'
                />
                <CardContainer
                    title='Este mes'
                    vacancies={vacancies}
                    rounded='bottom'
                />
            </div>
        </div>
    )
}