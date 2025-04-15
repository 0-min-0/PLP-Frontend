import React from 'react'
import { Header } from '../../Components/Header/Header'
import { WelcomeTextHome } from '../../Components/WelcomeText/WelcomeTextHome'

export const MainLayout = () => {

  return (
    <div className='w-[90%] bg-[#dcfff6] pb-14 mx-26 my-10 rounded-2xl'>
        <WelcomeTextHome />
    </div>
  )
}
