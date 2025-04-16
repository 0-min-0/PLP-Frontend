import React from 'react'
import { RegisterContainer } from '../../../UI/RegisterContainer'
import { Header } from '../../Header/Header'
import { MainMenu } from '../../MainMenu/MainMenu'

export const DataJobSeeker = () => {
    return (
        <div className='w-full min-h-screen p-6 border-2 rounded-2xl border-[#405e7f]/70'>
            <Header
                headerClass='w-full flex justify-between items-center'
                middleObject={
                    <h1 className='text-6xl text-[#405e7f] ml-10 font-[arialBold] items-end'>
                        Plataforma Laboral Proactiva
                    </h1>
                }
                 menu={<MainMenu />}
            />
            <div>
            <RegisterContainer
                width='w-[35%]'
            />
            </div>
            <Footer />
        </div>
    )
}
