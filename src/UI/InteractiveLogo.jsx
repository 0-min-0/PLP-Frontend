import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import plpLogo from '../assets/images/plpLogo.png'
import plpLogoDark from '../assets/images/plpLogoDark.png'

export const InteractiveLogo = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const updateTheme = () => {
            const html = document.documentElement
            setIsDark(html.classList.contains('dark-mode'))
        }

        updateTheme() // Verifica el estado inicial

        const observer = new MutationObserver(updateTheme)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div>
            <NavLink to='/'>
                <div className='flex flex-col items-center'>
                    <img
                        src={isDark ? plpLogoDark : plpLogo}
                        alt='Logo de PLP'
                        className='logo-plp w-20 h-23 transition-transform duration-200'
                        title='Haz click para volver al inicio'
                    />
                </div>
            </NavLink>
        </div>
    )
}


export const InteractiveLogoMain = ({ mainRoute }) => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const updateTheme = () => {
            const html = document.documentElement
            setIsDark(html.classList.contains('dark-mode'))
        }

        updateTheme() // Verifica estado inicial

        const observer = new MutationObserver(updateTheme)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div>
            <NavLink to={mainRoute}>
                <div className='flex flex-col items-center'>
                    <img
                        src={isDark ? plpLogoDark : plpLogo}
                        alt='Logo de PLP'
                        className='logo-plp w-20 h-23 transition-transform duration-200'
                        title='Haz click para volver al inicio'
                    />
                </div>
            </NavLink>
        </div>
    )
}