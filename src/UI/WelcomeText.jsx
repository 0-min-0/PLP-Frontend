import React from 'react'

export const WelcomeText = ({ text, ilustration, imgDesc, imgStyle}) => {
    return (
        <div className=''>
            <h2 className='paragraph-page text-3xl font-[afacadBold] text-[#405e7f]'>
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
