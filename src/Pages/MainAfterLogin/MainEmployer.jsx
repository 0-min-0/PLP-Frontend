import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { SearchBar } from '../../UI/SearchBar'
import { ProfileMenu } from '../../Components/ProfileMenu/ProfileMenu'
import { HiOutlineInbox } from 'react-icons/hi2'
import avatar from '../../assets/images/avatar.jpg'
import { PeopleLayout } from '../../Layouts/PeopleLayout/PeopleLayout'
import { IoBriefcaseOutline } from 'react-icons/io5'

export const MainEmployer = () => {
    return (
        <div>
            <Header
                middleObject={<SearchBar />}
                menu={
                    <ProfileMenu
                        avatar={avatar}
                        name={<span className='text-lg font-semibold'>Jasmin Esperanza Garcia Paez</span>}
                        settingsRoute='/configuraciones-contratante'
                    />}
                buttons={
                    <div className='w-full flex'>
                        <div>
                            <NavLink
                                to='/crear-vacante'
                                title='Crear vacante'
                            >
                                <div>
                                    <IoBriefcaseOutline className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
                                </div>
                            </NavLink>
                        </div>
                        <NavLink
                            to='/centro-de-notificaciones'
                            title='Centro de notificaciones'
                        >
                            <div>
                                <HiOutlineInbox className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ml-6' />
                            </div>
                        </NavLink>
                    </div>
                }
            />
            <div>
                <PeopleLayout />
            </div>
        </div>
    )
}