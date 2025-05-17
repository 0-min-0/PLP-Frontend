import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Style/index.css'
import { MainPage } from './Pages/MainPage/MainPage'
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'
import { PasswordJobSeeker } from './Components/RegisterForms/RegisterJobSeeker/PasswordJobSeeker'
import { DynamicTitle } from './Titles'
import { PasswordProvider } from './Context/PasswordContext'
import { Resume } from './Pages/Resume/Resume'
import { MainAfterLogin } from './Pages/MainAfterLogin/MainAfterLogin'
import { RegisterRolType } from './Components/RegisterForms/RegisterRolType'

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
          <Route path='/crear-cuenta/contratista/crear-contraseña' element={
            <PasswordProvider>
              <PasswordJobSeeker />
            </PasswordProvider>
          } />
          <Route path='/crear-cuenta/contratista/hoja-de-vida' element={<Resume />} />
          <Route path='/inicio' element={<MainAfterLogin />} />
        </Routes>
      </div>
  )
}

export default App
