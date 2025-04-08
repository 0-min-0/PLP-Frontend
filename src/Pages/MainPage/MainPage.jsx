import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MainLayout } from '../../Layouts/MainLayout/MainLayout'
import { SearchBar } from '../../UI/SearchBar'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { AccountButtons } from '../../Components/AccountButtons/AccountButtons'

export const MainPage = () => {
  return (
    <div>
      <Header
        middleObject={<SearchBar />}
        buttons={<AccountButtons />}
        menu={<MainMenu />}
      />
      <MainLayout />
    </div>
  )
}