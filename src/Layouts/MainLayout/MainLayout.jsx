import React from 'react'
import { Header } from '../../Components/Header/Header'
import { WelcomeText } from '../../Components/WelcomeText/WelcomeText'

export const MainLayout = () => {

  return (
    <div className='bg-[#dcfff6] mx-20 my-10 rounded-2xl'>
        <WelcomeText />
    </div>
  )
}
