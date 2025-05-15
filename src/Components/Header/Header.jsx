import React from 'react'
import { InteractiveLogo } from '../../UI/InteractiveLogo'
import { MenuProvider } from '../../Context/MenuContext'

export const Header = ({ middleObject, menu, buttons, headerClass = 'w-full px-6 flex flex-row justify-between items-center' }) => {
    return (
        <header className={headerClass}>
            <div className='flex items-center gap-6'>
                <InteractiveLogo />
                <div className=''>{middleObject}</div>
            </div>
            <div className='flex items-center gap-8'>
                <div>{buttons}</div>
                <MenuProvider>
                    {menu}
                </MenuProvider>
            </div>
        </header>
    )
}
