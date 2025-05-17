import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { Button } from '../../UI/button'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { FormData } from './FormData'
import { FormLaboral } from './FormLaboral'
import { DataProvider } from '../../Context/DataContext'
import { LaboralProvider } from '../../Context/LaboralContext'

export const Resume = () => {

    const [isDataComplete, setIsDataComplete] = useState(false)
    const [isLaboralComplete, setIsLaboralComplete] = useState(false)
    const navigate = useNavigate()

    const handleCompleteRegister = () => {
        if (isDataComplete && isLaboralComplete) {
            navigate('/verficar-cuenta') 
        }
    }

    return (
        <div className='w-full min-h-screen p-6 border-2 rounded-2xl border-[#405e7f]/70'>
            <Header
                middleObject={
                    <h1 className='text-6xl text-[#405e7f] ml-10 font-[afacadBold] items-end'>
                        Formato de Hoja de Vida
                    </h1>
                }
                menu={<MainMenu />}
            />
            <div className='flex flex-col gap-10 mx-50 my-15'>
                <DataProvider>
                    <FormData />
                </DataProvider>
                <LaboralProvider>
                    <FormLaboral onCompletionChange={setIsLaboralComplete} />
                </LaboralProvider>
                <Button
                    btnName='Terminar y completar registro'
                    btnType='button'
                    btnId='finishRegister'
                    clicked={handleCompleteRegister}
                    disabled={!isDataComplete || !isLaboralComplete}
                    btnStyle={`w-[18%] text-[#405e7f] ${isDataComplete && isLaboralComplete
                            ? 'bg-[#60efdb] cursor-pointer'
                            : 'bg-gray-300 cursor-not-allowed'
                        }`}
                />
            </div>
        </div>
    )
}
