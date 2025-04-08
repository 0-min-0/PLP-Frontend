import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import './Style/index.css'
import { MainPage } from './Pages/MainPage/MainPage'
import { Login } from './Pages/Login/Login'

function App() {

  return (
      <div className='w-full h-screen p-6 font-[bodyText]'>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/acceder' element={ <Login /> } />
        </Routes>
    </div>
  )
}

export default App
