import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Style/index.css'
import { MainPage } from './Pages/MainPage/MainPage'
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'

function App() {

  return (
      <div className='w-full h-screen p-6 font-[arialRounded]'>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/acceder' element={ <Login /> } />
          <Route path='/crear-cuenta' element={ <Register /> } />
        </Routes>
    </div>
  )
}

export default App
