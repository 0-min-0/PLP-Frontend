import React, { useEffect, useState } from 'react'
import { CardContainerV } from '../../Components/Container/CardContainerV'
import { getVacancies, vacanciesExample } from '../../Utils/objectsExample'
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil'

export const VacanciesLayout = () => {
    const [vacancies, setVacancies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            try {
                const loadedVacancies = getVacancies()
                const dataToUse = loadedVacancies.length > 0 ? loadedVacancies : vacanciesExample
                setVacancies(dataToUse)
            } catch (error) {
                console.error("Error loading vacancies:", error)
                setVacancies(vacanciesExample)
            } finally {
                setLoading(false)
            }
        }
        
        loadData()
    }, [])

    if (loading) {
        return <div className="text-center py-10">Cargando vacantes...</div>
    }

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
                        <CardContainerV
                            title='Hoy'
                            vacancies={vacancies}
                            rounded='top'
                        />
                    </div>
                    <div className='w-[30%]'>
                        <SetPerfil />
                    </div>
                </div>
                <CardContainerV
                    title='Esta semana'
                    vacancies={vacancies}
                    rounded='top-right'
                />
                <CardContainerV
                    title='Este mes'
                    vacancies={vacancies}
                    rounded='bottom'
                />
            </div>
        </div>
    )
}
