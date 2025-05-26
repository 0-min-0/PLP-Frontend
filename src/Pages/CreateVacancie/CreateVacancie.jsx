import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { ProfileMenu } from '../../Components/ProfileMenu/ProfileMenu'
import avatar from '../../assets/images/avatar.jpg'
import { HiOutlineInbox } from 'react-icons/hi2'
import { VacancyForm } from '../../Components/VacancyForm/VacancyForm'
import { GlobalProvider } from '../../Context/GlobalContext'
import { VacancyProvider } from '../../Context/VacancyContext'

export const CreateVacancie = () => {
    return (
        <div>
            <Header
                middleObject={
                    <h1 className='text-6xl mb-8 font-[afacadBold] text-[#405e7f]'>
                        Crear nueva vacante
                    </h1>
                }
                buttons={
                    <NavLink
                        to='/centro-de-notificaciones'
                        title='Centro de notificaciones'
                    >
                        <div>
                            <HiOutlineInbox className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
                        </div>
                    </NavLink>
                }
                menu={
                    <ProfileMenu
                        avatar={avatar}
                        name={<span className='text-lg font-semibold'>Jasmin Esperanza Garcia Paez</span>}
                    />
                }
            />
            <div>
                <VacancyProvider>
                    <VacancyForm />
                </VacancyProvider>
            </div>
        </div>
    )
}

