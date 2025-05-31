import React from 'react'
import { CardContainerP } from '../../Components/Container/CardContainerP'
import { peopleExample } from '../../Utils/objectsExample'
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil'

export const PeopleLayout = () => {
    return (
        <div className='flex flex-col p-10'>
            <div className='text-[#405e7f] mx-10 mt-6 mb-5'>
                <h1 className='font-[afacadBold] text-4xl mb-2'>
                    ¡Bienvenido(a)!
                </h1>
                <h3 className='text-lg'>Descubre personas a quienes darles una oportunidad laboral y puedan suplir tus necesidades.</h3>
            </div>
            <div className='mb-10'>
                <div className='flex w-full gap-4'>
                    <div className='w-[70%]'>
                        <CardContainerP
                            title='Hoy'
                            persons={peopleExample}
                            rounded='top'
                        />
                    </div>
                    <div className='w-[30%]'>
                        <SetPerfil />
                    </div>
                </div>
                <CardContainerP
                    title='Esta semana'
                    persons={peopleExample}
                    rounded=''
                />
                <CardContainerP
                    title='Este mes'
                    persons={peopleExample}
                    rounded='bottom'
                />
            </div>
        </div>
    )
}