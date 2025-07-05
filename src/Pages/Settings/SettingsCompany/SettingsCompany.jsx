import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Header } from '../../../Components/Header/Header'
import { HiOutlineInbox, HiMiniArrowUturnLeft } from 'react-icons/hi2'
import { RightMenu } from '../../../Components/RightMenu/RightMenu'
import { menuConfig } from '../../../Utils/options'
import { InteractiveLogoMain } from '../../../UI/InteractiveLogo'

export const SettingsCompany = () => {
    return (
        <div className='h-full page p-6 back-color-set'>
            <div className=''>
                <Header
                    logo={
                        <InteractiveLogoMain
                            mainRoute='/inicio-empresa'
                        />
                    }
                    middleObject={
                        <h1 className='title-page text-5xl font-[afacadBold] text-primary-color'>
                            Configuraciones
                        </h1>
                    }
                    buttons={
                        <div className='w-full flex mr-6 mb-6'>
                            <NavLink to='/centro-de-notificaciones-empresa' title='Centro de notificaciones'>
                                <HiOutlineInbox className='routes-icons w-8 h-8 text-[color:var(--color-card-text)] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
                            </NavLink>
                            <NavLink to='/inicio-empresa' title='Volver a inicio'>
                                <HiMiniArrowUturnLeft className='routes-icons w-8 h-8 text-[color:var(--color-card-text)] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ml-6' />
                            </NavLink>
                        </div>
                    }
                />

                <div className='settings w-[90%] flex justify-center gap-6 mx-30 mt-4'>
                    <div className='sub-settings w-[70%] general px-10 py-8 rounded-xl'>
                        <Outlet />
                    </div>

                    {/* Menú lateral derecho */}
                    <div className='w-[30%]'>
                        <RightMenu
                            menuItems={menuConfig.company}
                            basePath='/configuraciones-empresa'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}