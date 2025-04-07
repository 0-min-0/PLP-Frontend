import React from 'react'
import { Header } from '../../Components/Header/Header'
import { WelcomeText } from '../../Components/WelcomeText/WelcomeText'

export const MainLayout = () => {

  return (
    <div className='w-[90%] bg-[#dcfff6] p-0 mx-26 my-10 rounded-2xl'>
        <WelcomeText />
    </div>
  )
}
