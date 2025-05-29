import React from 'react'
import './Style/index.css'
import { Routes, Route } from 'react-router-dom'
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
import { CreateVacancie } from './Pages/CreateVacancie/CreateVacancie'
import { MenuProvider } from './Context/MenuContext'
import { SettingsEmployer } from './Pages/Settings/SettingsEmployer/SettingsEmployer'
import { RegisterProvider } from './Context/RegisterContext'
import { VacancyProvider } from './Context/VacancyContext'

function App() {

  return (
    <PasswordProvider>
      <RegisterProvider>
        <MenuProvider>
          <VacancyProvider>
            <div className={`w-full h-screen p-6 font-[afacad] 
                ${location.pathname === '/configuraciones-contratante' ? 'bg-[#dcfff6]' :
                location.pathname === '/configraciones-contratista' ? 'bg-[#dcfff6]' : 'bg-white'
              }`}>
              <DynamicTitle />
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/acceder' element={ <Login /> } />
                <Route path='/crear-cuenta' element={<Register />} />
                <Route path='/crear-cuenta/rol' element={<RegisterRolType />} />
                <Route path='/crear-cuenta/contratista' element={ <JobSeeker /> } />
                <Route path='/crear-cuenta/contratante' element={<Employer /> } />
                <Route path='/crear-cuenta/empresa' element={<Company />} />
                <Route path='/crear-contraseña' element={ <Password /> } />
                <Route path='/inicio-contratista' element={<MainJobSeeker />} />
                <Route path='/inicio-contratante' element={<MainEmployer />} />
                <Route path='/crear-vacante' element={ <CreateVacancie /> } />
                <Route path='/configuraciones-contratante' element={ <SettingsEmployer /> } />
              </Routes>
            </div>
          </VacancyProvider>
        </MenuProvider>
      </RegisterProvider>
    </PasswordProvider>
  )
}

export default App
