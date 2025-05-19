import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Style/index.css'
import { MainPage } from './Pages/MainPage/MainPage'
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'
import { Password } from './Components/RegisterForms/Password'
import { DynamicTitle } from './Titles'
import { PasswordProvider } from './Context/PasswordContext'
import { MainAfterLogin } from './Pages/MainAfterLogin/MainAfterLogin'
import { RegisterRolType } from './Components/RegisterForms/RegisterRolType'
import { JobSeeker } from './Components/RegisterForms/JobSeeker'
import { Employer } from './Components/RegisterForms/Employer'
import { Company } from './Components/RegisterForms/Company'
import { RegisterProvider } from './Context/RegisterContext'

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
            <RegisterProvider>
              <JobSeeker />
            </RegisterProvider>
          } />
          <Route path='/crear-cuenta/contratante' element={
            <RegisterProvider>
              <Employer />
            </RegisterProvider>
          } />
          <Route path='/crear-cuenta/empresa' element={<Company />} />
          <Route path='/crear-contraseña' element={
            <PasswordProvider>
              <Password />
            </PasswordProvider>
          } />
          <Route path='/inicio' element={<MainAfterLogin />} />
        </Routes>
      </div>
  )
}

export default App
