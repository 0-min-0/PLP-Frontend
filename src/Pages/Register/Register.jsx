import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { RegisterFirst } from '../../Components/RegisterForms/RegisterFirst'

export const Register = () => {
    return (
        <div className='w-full h-full p-6 border-2 rounded-2xl border-[#405e7f]/70'>
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
                <RegisterFirst />
            </div>
        </div>
    )
}
