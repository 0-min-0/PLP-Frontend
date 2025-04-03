import React from 'react'
import { NavLink } from 'react-router-dom'
import { InteractiveLogo } from '../../UI/InteractiveLogo'
import { SearchBar } from '../../UI/SearchBar'
import { Button } from '../../UI/button'
import { MainMenu } from '../MainMenu/MainMenu'

export const Header = () => {
    return (
        <header className='w-full flex justify-evenly items-center'>
            <InteractiveLogo />
            <SearchBar />
            <NavLink to='/acceder'>
                <Button
                    btnType='button'
                    btnStyle='bg-white text-[#405e7f] font-bold px-4 py-2 rounded-full cursor-pointer'
                    btnId='btnAccess'
                    btnName='Acceder'
                />
            </NavLink>
            <NavLink to='/crear-cuenta'>
                <Button
                    btnType='button'
                    btnStyle='bg-[#60efdb] text-[#405e7f] font-bold px-4 py-2 rounded-full cursor-pointer'
                    btnId='btnCreateAccount'
                    btnName='Crear cuenta'
                />
            </NavLink>
            <MainMenu />
        </header>
    )
}

