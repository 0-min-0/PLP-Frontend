import React from 'react'
import './Style/index.css'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import { SettingsJobSeeker } from './Pages/Settings/SettingsJobSeeker/SettingsJobSeeker'
import { RegisterProvider } from './Context/RegisterContext'
import { VacancyProvider } from './Context/VacancyContext'
import { PublishedVacancies } from './Pages/Settings/SettingsEmployer/PublishedVacancies'
import { GeneralSettings } from './Pages/Settings/GeneralSettings';
import { Help } from './Pages/Settings/Help'
import { Terms } from './Pages/Settings/Terms'
import { VerifyAccount } from './Pages/SentEmails/VerifyAccount'
import { SettingsProvider } from './Context/SettingsContext'
import { users } from './Utils/users'
import { Postulations } from './Pages/Settings/SettingsJobSeeker/Postulations'

function App() {

  const location = useLocation()

  const bgRoutes = [
    '/configuraciones-contratante',
    '/configuraciones-contratista',
    '/configuraciones-contratante/general-contratante',
    '/configuraciones-contratante/publicaciones-contratante',
    '/configuraciones-contratante/terminos-condiciones',
    '/configuraciones-contratante/ayuda-soporte',
    '/configuraciones-contratista/general-contratista',
    '/configuraciones-contratista/postulaciones-contratista',
    '/configuraciones-contratista/terminos-condiciones',
    '/configuraciones-contratista/ayuda-soporte'
  ]

  const isBgRoute = bgRoutes.includes(location.pathname)

  const getInitialUser = () => {
    const role = 'contratante'
    return {
      ...users.find(user => user.role === role),
      role
    }
  }

  return (
    <PasswordProvider>
      <RegisterProvider>
        <MenuProvider>
          <VacancyProvider>
            <SettingsProvider initialUser={getInitialUser()}>
              <div className={`w-full h-screen p-6 font-[afacad] 
               ${isBgRoute ? 'bg-[#dcfff6]' : 'bg-white'}`}>
                <DynamicTitle />
                <Routes>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/acceder' element={<Login />} />
                  <Route path='/crear-cuenta' element={<Register />} />
                  <Route path='/crear-cuenta/rol' element={<RegisterRolType />} />
                  <Route path='/crear-cuenta/contratista' element={<JobSeeker />} />
                  <Route path='/crear-cuenta/contratante' element={<Employer />} />
                  <Route path='/crear-cuenta/empresa' element={<Company />} />
                  <Route path='/crear-contraseña' element={<Password />} />
                  <Route path='/inicio-contratista' element={<MainJobSeeker />} />
                  <Route path='/inicio-contratante' element={<MainEmployer />} />
                  <Route path='/crear-vacante' element={<CreateVacancie />} />
                  { /* Configuraciones contratante*/}
                  <Route path='/configuraciones-contratante' element={<SettingsEmployer />}>
                    <Route index element={<GeneralSettings />} />
                    <Route path='general-contratante' element={<GeneralSettings />} />
                    <Route path='publicaciones-contratante' element={<PublishedVacancies />} />
                    <Route path='terminos-condiciones' element={<Terms />} />
                    <Route path='ayuda-soporte' element={<Help />} />
                  </Route>
                  { /* Configuraciones contratista*/}
                  <Route path='/configuraciones-contratista' element={<SettingsJobSeeker />}>
                    <Route index element={<GeneralSettings />} />
                    <Route path='general-contratista' element={<GeneralSettings />} />
                    <Route path='postulaciones-contratista' element={<Postulations />} />
                    <Route path='terminos-condiciones' element={<Terms />} />
                    <Route path='ayuda-soporte' element={<Help />} />
                  </Route>
                  <Route path='/verificar-cuenta' element={<VerifyAccount />} />
                </Routes>
              </div>
            </SettingsProvider>
          </VacancyProvider>
        </MenuProvider>
      </RegisterProvider>
    </PasswordProvider>
  )
}

export default App
