import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { SearchBar } from '../../UI/SearchBar'
import { ProfileMenu } from '../../Components/ProfileMenu/ProfileMenu'
import { FiInbox } from 'react-icons/fi'
import avatar from '../../assets/images/avatar.jpg'
import { VacanciesLayout } from '../../Layouts/VacanciesLayout/VacanciesLayout'

export const MainAfterLogin = () => {
    return (
        <div>
            <Header
                middleObject={<SearchBar />}
                menu={
                    <ProfileMenu
                        avatar={avatar}
                        name={<span className='text-lg font-semibold'>Jasmin Esperanza Garcia Paez</span>}
                    />}
                buttons={
                    <NavLink
                        to='/centro-de-notificaciones'
                    >
                        <div>
                            <FiInbox className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
                        </div>
                    </NavLink>
                }
            />
            <div>
                <VacanciesLayout />
            </div>
        </div>
    )
}


