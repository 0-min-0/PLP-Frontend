import React from 'react'
import { InteractiveLogo } from '../../UI/InteractiveLogo'
import { MenuProvider } from '../../Context/MenuContext'

export const Header = ({ middleObject, menu, buttons, headerClass = 'w-full flex justify-evenly items-center' }) => {
    return (
        <header className={ headerClass }>
            <InteractiveLogo />
            <div>{ middleObject }</div>
            <div>{ buttons }</div>
            <MenuProvider>
                { menu }
            </MenuProvider>
        </header>
    )
}
