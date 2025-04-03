import React from 'react'
import plpLogo from '../assets/images/plpLogo.jpg'

export const InteractiveLogo = () => {

    const logoStyles = 'w-20 h-23'

    return (
        <div>
            <img
                src={ plpLogo }
                alt='plpLogo'
                className={ logoStyles }
            />
        </div>
    )

}
