import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MainLayout } from '../../Layouts/MainLayout/MainLayout'
import { SearchBar } from '../../UI/SearchBar'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { AccountButtons } from '../../Components/AccountButtons/AccountButtons'
import { Footer } from '../../Components/Footer/Footer'

export const MainPage = () => {
  return (
    <div>
      <Header
        middleObject={<SearchBar />}
        buttons={<AccountButtons />}
        menu={<MainMenu />}
      />
      <MainLayout />
      <div className='pb-12'>
        <Footer />
      </div>
    </div>
  )
}