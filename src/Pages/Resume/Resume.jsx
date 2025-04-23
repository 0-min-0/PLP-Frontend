import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Button } from '../../UI/Button'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { FormData } from './FormData'

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
                menu={ <MainMenu /> }
            />
            <div className='bg-[#f7fffd]'>
                
                <FormData />
            </div>
        </div>
    )
}
