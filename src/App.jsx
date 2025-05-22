import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Style/index.css'
import { MainPage } from './Pages/MainPage/MainPage'
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'
import { Password } from './Components/RegisterForms/Password'
import { DynamicTitle } from './Titles'
import { PasswordProvider } from './Context/PasswordContext'
import { MainJobSeeker } from './Pages/MainAfterLogin/MainJobSeeker'
import { MainEmployer } from './Pages/MainAfterLogin/MainEmployer'
import { RegisterRolType } from './Components/RegisterForms/RegisterRolType'
import { JobSeeker } from './Components/RegisterForms/JobSeeker'
import { Employer } from './Components/RegisterForms/Employer'
import { Company } from './Components/RegisterForms/Company'
import { GlobalProvider } from './Context/GlobalContext'
import { CreateVacancie } from './Pages/CreateVacancie/CreateVacancie'
import { MenuProvider } from './Context/MenuContext'

function App() {

  return (
    <div className='w-full h-screen p-6 font-[afacad]'>
      <DynamicTitle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/acceder' element={
          <PasswordProvider>
            <Login />
          </PasswordProvider>
        } />
        <Route path='/crear-cuenta' element={<Register />} />
        <Route path='/crear-cuenta/rol' element={<RegisterRolType />} />
        <Route path='/crear-cuenta/contratista' element={
          <GlobalProvider>
            <JobSeeker />
          </GlobalProvider>
        } />
        <Route path='/crear-cuenta/contratante' element={
          <GlobalProvider>
            <Employer />
          </GlobalProvider>
        } />
        <Route path='/crear-cuenta/empresa' element={<Company />} />
        <Route path='/crear-contraseña' element={
          <PasswordProvider>
            <Password />
          </PasswordProvider>
        } />
        <Route path='/inicio-contratista' element={<MainJobSeeker />} />
        <Route path='/inicio-contratante' element={<MainEmployer />} />
        <Route path='/crear-vacante' element={
          <MenuProvider>
            <CreateVacancie />
          </MenuProvider>
        } />
      </Routes>
    </div>
  )
}

export default App
