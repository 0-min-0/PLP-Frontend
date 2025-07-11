import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../UI/button'

export const AccountButtons = () => {
    return (
        <div className='buttons-responsive'>
            <NavLink to='/acceder'>
                <Button
                    btnType='button'
                    btnStyle='buttons-responsive button-acc bg-white text-[#405e7f] font-bold px-4 py-2 rounded-full cursor-pointer mx-4'
                    btnId='btnAccess'
                    btnName='Acceder'
                />
            </NavLink>
            <NavLink to='/crear-cuenta'>
                <Button
                    btnType='button'
                    btnStyle='bg-[#90d7db] text-[#405e7f] font-bold px-4 py-2 rounded-full cursor-pointer'
                    btnId='btnCreateAccount'
                    btnName='Crear cuenta'
                />
            </NavLink>
        </div>
    )
}

