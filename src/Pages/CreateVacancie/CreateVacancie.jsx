import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { HiMiniArrowUturnLeft, HiOutlineInbox } from 'react-icons/hi2'
import { VacancyForm } from '../../Components/VacancyForm/VacancyForm'
import { VacancyProvider } from '../../Context/VacancyContext'
import { useChatIA } from '../../Context/ChatIAContext'

export const CreateVacancie = () => {

    const { homeRoute } = useChatIA()

    return (
        <div className='h-full p-6 vacancy-back'>
            <Header
                middleObject={
                    <h1 className='text-5xl font-[afacadBold] text-[color:var(--color-card-text)]'>
                        Crear nueva vacante
                    </h1>
                }
                buttons={
                    <NavLink to={homeRoute}>
                        <HiMiniArrowUturnLeft className='text-[color:var(--color-card-text)] w-8 h-8 ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ml-6' />
                    </NavLink>
                }
            />
            <div className='flex justify-center items-center mt-6'>
                <VacancyProvider>
                    <VacancyForm />
                </VacancyProvider>
            </div>
        </div>
    )
}

