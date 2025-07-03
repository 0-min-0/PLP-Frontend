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
import { MainCompany } from './Pages/MainAfterLogin/MainCompany'
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
import { PublishedVacancies } from './Pages/Settings/PublishedVacancies'
import { Help } from './Pages/Settings/Help'
import { Terms } from './Pages/Settings/Terms'
import { VerifyAccount } from './Pages/SentEmails/VerifyAccount'
import { SettingsProvider } from './Context/SettingsContext'
import { Postulations } from './Pages/Settings/SettingsJobSeeker/Postulations'
import { GeneralEmployer } from './Pages/Settings/SettingsEmployer/GeneralEmployer'
import { GeneralJobSeeker } from './Pages/Settings/SettingsJobSeeker/GeneralJobSeeker'
import { SettingsCompany } from './Pages/Settings/SettingsCompany/SettingsCompany'
import { GeneralCompany } from './Pages/Settings/SettingsCompany/GeneralCompany'
import { AboutUs } from './Pages/AboutUs/AboutUs'
import { ContactProvider } from './Context/ContactContext'
import { SearchBarProvider } from './Context/SearchBarContext'
import { PostulatedPeople } from './Pages/Settings/SettingsEmployer/PostulatedPeople'
import { Comments } from './Pages/Settings/SettingsJobSeeker/Comments'
import { Notifications } from './Pages/NotificationsCenter/Notifications'
import { AIChatBot } from './Pages/Chat/AIChatBot'
import { ChatIAProvider } from './Context/ChatIAContext'
import { UserProvider } from './Context/UserContext'
import { Jobs } from './Pages/Jobs/Jobs'
import { VacanciesByCategory } from './Components/CategoriesContainer/VacanciesByCategory'
import { PeopleByCategory } from './Components/CategoriesContainer/PeopleByCategory'
import { MixedContent } from './Components/CategoriesContainer/MixedContent'
import { Categories } from './Layouts/Categories/Categories'
import { users } from './Utils/users'

function App() {
  const location = useLocation()

  const bgRoutes = [
    '/configuraciones-contratante',
    '/configuraciones-contratista',
    '/configuraciones-contratante/general-contratante',
    '/configuraciones-contratante/publicaciones-contratante',
    '/configuraciones-contratante/terminos-condiciones',
    '/configuraciones-contratante/ayuda-soporte',
    '/configuraciones-contratante/postulados',
    '/configuraciones-contratante/chat-bot',
    '/configuraciones-contratista/general-contratista',
    '/configuraciones-contratista/postulaciones-contratista',
    '/configuraciones-contratista/terminos-condiciones',
    '/configuraciones-contratista/ayuda-soporte',
    '/configuraciones-contratista/comentarios-contratista',
    '/configuraciones-contratista/chat-bot',
    '/configuraciones-empresa',
    '/configuraciones-empresa/general-empresa',
    '/configuraciones-empresa/publicaciones-empresa',
    '/configuraciones-empresa/terminos-condiciones',
    '/configuraciones-empresa/ayuda-soporte',
    '/configuraciones-empresa/postulados',
    '/configuraciones-empresa/chat-bot'

  ]

  const isBgRoute = bgRoutes.includes(location.pathname)

  return (
    <PasswordProvider>
      <RegisterProvider>
        <MenuProvider>
          <SettingsProvider initialData={users[1]}>
            <ContactProvider>
              <SearchBarProvider
                groupSuggestions={true}
                showRecentSearches={true}
                delay={300}
              >
                <UserProvider>
                  <ChatIAProvider>
                    <VacancyProvider>
                      <div className={`w-full h-screen p- font-[afacad] 
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
                          <Route path='/inicio-empresa' element={<MainCompany />} />
                          <Route path='/crear-vacante-empresa' element={<CreateVacancie />} />
                          <Route path='/crear-vacante-contratante' element={<CreateVacancie />} />
                          { /* Configuraciones contratante */}
                          <Route path='/configuraciones-contratante' element={<SettingsEmployer />}>
                            <Route index element={<GeneralEmployer />} />
                            <Route path='general-contratante' element={<GeneralEmployer />} />
                            <Route path='publicaciones-contratante' element={<PublishedVacancies />} />
                            <Route path='postulados' element={<PostulatedPeople />} />
                            <Route path='terminos-condiciones' element={<Terms embedded />} />
                            <Route path='ayuda-soporte' element={<Help embedded />} />
                            <Route path='chat-bot' element={<AIChatBot />} />
                          </Route>
                          { /* Configuraciones contratista */}
                          <Route path='/configuraciones-contratista' element={<SettingsJobSeeker />}>
                            <Route index element={<GeneralJobSeeker />} />
                            <Route path='general-contratista' element={<GeneralJobSeeker />} />
                            <Route path='postulaciones-contratista' element={<Postulations />} />
                            <Route path='comentarios-contratista' element={<Comments />} />
                            <Route path='terminos-condiciones' element={<Terms embedded />} />
                            <Route path='ayuda-soporte' element={<Help embedded />} />
                            <Route path='chat-bot' element={<AIChatBot />} />
                          </Route>
                          { /* Configuraciones empresa */}
                          <Route path='/configuraciones-empresa' element={<SettingsCompany />}>
                            <Route index element={<GeneralCompany />} />
                            <Route path='general-empresa' element={<GeneralCompany />} />
                            <Route path='publicaciones-empresa' element={<PublishedVacancies />} />
                            <Route path='postulados' element={<PostulatedPeople />} />
                            <Route path='terminos-condiciones' element={<Terms embedded />} />
                            <Route path='ayuda-soporte' element={<Help embedded />} />
                            <Route path='chat-bot' element={<AIChatBot />} />
                          </Route>
                          <Route path='/verificar-cuenta' element={<VerifyAccount />} />
                          <Route path='/sobre-plp' element={<AboutUs />} />
                          <Route path='/sobre-plp-contratista' element={<AboutUs />} />
                          <Route path='/sobre-plp-contratante' element={<AboutUs />} />
                          <Route path='/sobre-plp-empresa' element={<AboutUs />} />
                          <Route path='/centro-de-notificaciones-contratista' element={<Notifications />} />
                          <Route path='/centro-de-notificaciones-contratante' element={<Notifications />} />
                          <Route path='/centro-de-notificaciones-empresa' element={<Notifications />} />
                          <Route path='/chat-bot-ayuda' element={<AIChatBot />} />
                          <Route path='/chat-bot-ayuda-contratista' element={<AIChatBot />} />
                          <Route path='/chat-bot-ayuda-contratante' element={<AIChatBot />} />
                          <Route path='/chat-bot-ayuda-empresa' element={<AIChatBot />} />
                          <Route path='/categorias-trabajo' element={<Jobs />}>
                            <Route index element={<MixedContent />} />
                            <Route path='categorias' element={<MixedContent />} />
                            <Route path=':categoria' element={<MixedContent />} />
                          </Route>
                          <Route path='/categorias-trabajo' element={<Jobs />}>
                            <Route index element={<Categories />} />
                            <Route path=':category' element={<Categories />} />
                          </Route>
                          <Route path='/categorias-trabajo-contratista' element={<Jobs />}>
                            <Route index element={<Categories />} />
                            <Route path=':category' element={<Categories />} />
                          </Route>
                          <Route path='/categorias-trabajo-contratante' element={<Jobs />}>
                            <Route index element={<Categories />} />
                            <Route path=':category' element={<Categories />} />
                          </Route>
                          <Route path='/categorias-trabajo-empresa' element={<Jobs />}>
                            <Route index element={<Categories />} />
                            <Route path=':category' element={<Categories />} />
                          </Route>
                          <Route path='/terminos-condiciones' element={<Terms />} />
                          <Route path='/ayuda-soporte' element={<Help />} />
                        </Routes>
                      </div>
                    </VacancyProvider>
                  </ChatIAProvider>
                </UserProvider>
              </SearchBarProvider>
            </ContactProvider>
          </SettingsProvider>
        </MenuProvider>
      </RegisterProvider>
    </PasswordProvider>
  )
}

export default App