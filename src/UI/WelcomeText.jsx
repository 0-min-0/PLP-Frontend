import React from 'react'

export const WelcomeText = ({ text, ilustration, imgDesc, imgStyle}) => {
    return (
        <div className=''>
            <h2 className='text-3xl font-[arialBold] text-[#405e7f]'>
                { text }
            </h2>
            <img
                src={ ilustration }
                alt={ imgDesc }
                className={ imgStyle }
            />
        </div>
    )
}
