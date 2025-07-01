import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MainLayout } from '../../Layouts/MainLayout/MainLayout'
import { SearchBar } from '../../UI/SearchBar'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { AccountButtons } from '../../Components/AccountButtons/AccountButtons'
import { Footer } from '../../Components/Footer/Footer'
import { JobsLayout } from '../../Layouts/JobsLayout/JobsLayout'
import { Contact } from '../../Layouts/Contact/Contact'
import { MainAboutUs } from '../../Layouts/MainAboutUs/MainAboutUs'

export const MainPage = () => {
  return (
    <div className='mt-6 main-responsive main-bg transition-colors duration-300'> 
      <Header
        middleObject={<SearchBar />}
        buttons={<AccountButtons />}
        menu={<MainMenu />}
      />
      <MainLayout /> 
      <JobsLayout />
      <MainAboutUs />
      <Contact />
      <Footer />
    </div>
  )
}
