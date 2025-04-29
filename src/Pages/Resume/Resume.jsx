import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { Button } from '../../UI/Button'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { FormData } from './FormData'
import { FormLaboral } from './FormLaboral'
import { FormStudies } from './FormStudies'
import { useFormValid } from '../../Context/ValidFormContext'
import { FormsProvider } from '../../Context/FormsContext'

export const Resume = () => {

    const navigate = useNavigate()
    const { allValid } = useFormValid()

    const handleRegistration = () => {
        if (allValid) {
            navigate('/')
        } else {
            alert('Por favor completa todos los formularios correctamente.')
        }
    }

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
                        clicked={handleRegistration}
                    />
                }
                menu={<MainMenu />}
            />
            <div className='flex justify-center items-start gap-14 py-10 px-16 my-14 mx-40 bg-[#f7fffd] border-1 border-[#60efdb] rounded-xl'>
                <FormsProvider>
                    <FormData

                    />
                    <FormLaboral

                    />
                    <FormStudies

                    />
                </FormsProvider>
            </div>
        </div>
    )
}
