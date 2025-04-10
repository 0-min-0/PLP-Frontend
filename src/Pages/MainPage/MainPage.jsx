import React from 'react'
import { Header } from '../../Components/Header/Header'
import { MainLayout } from '../../Layouts/MainLayout/MainLayout'
import { SearchBar } from '../../UI/SearchBar'
import { MainMenu } from '../../Components/MainMenu/MainMenu'
import { AccountButtons } from '../../Components/AccountButtons/AccountButtons'
import { FocusProvider } from '../../Context/FocusContext'

export const MainPage = () => {
  return (
    <div>
      <FocusProvider>
        <Header
          middleObject={<SearchBar />}
          buttons={<AccountButtons />}
          menu={<MainMenu />}
        />
      </FocusProvider>
      <MainLayout />
    </div>
  )
}