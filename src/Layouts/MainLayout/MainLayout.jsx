import React from 'react'
import { Header } from '../../Components/Header/Header'
import { WelcomeTextHome } from '../../Components/WelcomeText/WelcomeTextHome'

export const MainLayout = () => {

  return (
    <div className='w-[90%] bg-[#dcfff6] pb-14 mx-26 mt-4 mb-20 rounded-2xl'>
        <WelcomeTextHome />
    </div>
  )
}
