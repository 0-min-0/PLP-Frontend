import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Button } from '../../UI/button'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { FormData } from './FormData'
import { FormLaboral } from './FormLaboral'

export const Resume = () => {
    return (
        <div className='w-full min-h-screen p-6 border-2 rounded-2xl border-[#405e7f]/70'>
            <Header
                middleObject={
                    <h1 className='text-6xl text-[#405e7f] ml-10 font-[arialBold] items-end'>
                        Formato de Hoja de Vida
                    </h1>
                }
                menu={ <MainMenu /> }
            />
            <div className='mx-50 my-15'>
                <FormData />
                <FormLaboral />
            </div>
        </div>
    )
}
