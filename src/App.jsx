import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Style/index.css'
import { MainPage } from './Pages/MainPage/MainPage'
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'
import { DataJobSeeker } from './Components/RegisterForms/RegisterJobSeeker/DataJobSeeker'
import { PasswordJobSeeker } from './Components/RegisterForms/RegisterJobSeeker/PasswordJobSeeker'
import { DynamicTitle } from './Titles'
import { PasswordProvider } from './Context/PasswordContext'
import { Resume } from './Pages/Resume/Resume'
import { InfoProvider } from './Context/InfoContext'
import { FocusProvider } from './Context/FocusContext'

function App() {

  return (
    <div className='w-full h-screen p-6 font-[arialRounded]'>
      <DynamicTitle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/acceder' element={
          <PasswordProvider>
            <FocusProvider>
              <Login />
            </FocusProvider>
          </PasswordProvider>
        } />
        <Route path='/crear-cuenta' element={
          <FocusProvider>
            <Register />
          </FocusProvider>
        } />
        <Route path='/crear-cuenta/contratista' element={
          <FocusProvider>
            <DataJobSeeker />
          </FocusProvider>
        } />
        <Route path='/crear-cuenta/contratista/crear-contraseña' element={
          <PasswordProvider>
            <FocusProvider>
              <PasswordJobSeeker />
            </FocusProvider>
          </PasswordProvider>
        } />
        <Route path='/crear-cuenta/contratista/hoja-de-vida' element={
          <InfoProvider>
            <FocusProvider>
              <Resume />
            </FocusProvider>
          </InfoProvider>
        } />
      </Routes>
    </div>
  )
}

export default App
