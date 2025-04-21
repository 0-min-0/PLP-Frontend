import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Style/index.css'
import { MainPage } from './Pages/MainPage/MainPage'
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'
import { DataJobSeeker } from './Components/RegisterForms/RegisterJobSeeker/DataJobSeeker'
import { PasswordJobSeeker } from './Components/RegisterForms/RegisterJobSeeker/PasswordJobSeeker'
import { DynamicTitle } from './Titles'

function App() {

  return (
      <div className='w-full h-screen p-6 font-[arialRounded]'>
        <DynamicTitle />
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/acceder' element={ <Login /> } />
          <Route path='/crear-cuenta' element={ <Register /> } />
          <Route path='/crear-cuenta/contratista' element={ <DataJobSeeker /> } />
          <Route path='/crear-cuenta/contratista/crear-contraseña' element={ <PasswordJobSeeker /> }/>
        </Routes>
    </div>
  )
}

export default App
