import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Button } from '../../UI/Button'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { FormData } from './FormData'
import { FormLaboral } from './FormLaboral'
import { FormStudies } from './FormStudies'

export const Resume = () => {
    return (
        <div>
            <Header
                middleObject={
                    <h1 className='text-6xl text-[#405e7f] ml-10 font-[arialBold] items-end'>
                        Formato Hoja de vida
                    </h1>
                }
                buttons={
                    <Button
                        btnType='button'
                        btnName='Completar registro'
                        btnStyle='bg-[#60efdb] text-[#405e7f] rounded-full px-4 py-2 font-[arialRounded]'
                    />
                }
                menu={<MainMenu />}
            />
            <div className='w-full flex justify-center items-start gap-14 py-10 px-12 bg-[#f7fffd] border-1 border-[#60efdb] rounded-xl'>
                <FormData />
                <FormLaboral />
                <FormStudies />
            </div>
        </div>
    )
}
