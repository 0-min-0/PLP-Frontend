import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../UI/Button'

export const AccountButtons = () => {
    return (
        <div>
            <NavLink to='/acceder'>
                <Button
                    btnType='button'
                    btnStyle='bg-white text-[#405e7f] font-bold px-4 py-2 rounded-full cursor-pointer mx-4'
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
        </div>
    )
}

