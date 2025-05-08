import React from 'react'
import { Vacancie } from '../../UI/Vacancie'

export const VacanciesLayout = () => {
    return (
        <div className='w-full p-10'>
            <h1 className='text-4xl text-[#405e7f] font-[afacadBold]'>
                ¡Hola, usuario! No te pierdas las vacantes mas recientes.
            </h1>
            <div className='w-full flex gap-6 bg-[#dcfff6] p-10 mt-10'>
                <Vacancie />
                <Vacancie />
                <Vacancie />
                <Vacancie />
                <Vacancie />
            </div>
        </div>
    )
}


