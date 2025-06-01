import { useState } from 'react';
import { BaseLayout } from '../../Layouts/Base/BaseLayout';
import { useData } from '../../Hooks/useData';
import { Vacancie } from '../../UI/Vacancy/Vacancie';
import { Person } from '../../UI/Person/Person';
import { JobsContainer } from '../../Components/Container/JobsContainer';
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil';
import { AuthModal } from '../../UI/AuthModal';

export const JobsLayout = () => {
  const { data: vacancies, loading: loadingVacancies } = useData('vacancies')
  const { data: people, loading: loadingPeople } = useData('people')
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleShowDetails = (item) => {
    setSelectedItem({ ...item, type: 'vacancy' })
    setShowAuthModal(true)
  }

  const handleShowResume = (item) => {
    setSelectedItem({ ...item, type: 'person' })
    setShowAuthModal(true)
  }

  const handleCloseAuthModal = () => {
    setShowAuthModal(false)
    setSelectedItem(null)
  }

  const handleLogin = () => {
    console.log('Iniciar sesión')
    setShowAuthModal(false)
  }

  const handleRegister = () => {
    console.log('Registrarse')
    setShowAuthModal(false)
  }

  if (loadingVacancies || loadingPeople) {
    return <div className="text-center py-10">Cargando información...</div>;
  }

  return (
    <div className='flex flex-col bg-[#405e7f] px-10 py-6'>
      <div className='text-white mx-10 mt-10 mb-5'>
        <h1 className='font-[afacadBold] text-4xl mb-2'>Vacantes y personas</h1>
        <h3 className='text-lg'>
          Descubre las vacantes más recientes y postula tu hoja de vida o descubre personas a quienes 
          darles una oportunidad laboral y puedan suplir tus necesidades.
        </h3>
      </div>
      
      <div className='mb-10'>
        <JobsContainer
          title='Hoy'
          vacancies={vacancies}
          people={people}
          rounded='top'
          onShowDetails={handleShowDetails}
          onShowResume={handleShowResume}
        />
        <JobsContainer
          title='Esta semana'
          vacancies={vacancies}
          people={people}
          rounded='top-right'
          onShowDetails={handleShowDetails}
          onShowResume={handleShowResume}
        />
        
        <JobsContainer
          title='Este mes'
          vacancies={vacancies}
          people={people}
          rounded='bottom'
          onShowDetails={handleShowDetails}
          onShowResume={handleShowResume}
        />
      </div>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={handleCloseAuthModal}
        onLogin={handleLogin}
        onRegister={handleRegister}
        itemType={selectedItem?.type}
      />
    </div>
  )
}



// import { BaseLayout } from '../../Layouts/Base/BaseLayout'
// import { useData } from '../../Hooks/useData'
// import { Vacancie } from '../../UI/Vacancy/Vacancie'
// import { Person } from '../../UI/Person/Person'
// import { CardContainer } from '../../Components/Container/CardContainer'
// import { SetPerfil } from '../../Components/SetPerfil/SetPerfil'

// export const JobsLayout = () => {
//   const { data: vacancies, loading: loadingVacancies } = useData('vacancies')
//   const { data: people, loading: loadingPeople } = useData('people')

//   if (loadingVacancies || loadingPeople) {
//     return <div className="text-center py-10">Cargando información...</div>
//   }

//   return (
//     <div className='flex flex-col bg-[#405e7f] px-10 py-6'>
//       <div className='text-white mx-10 mt-10 mb-5'>
//         <h1 className='font-[afacadBold] text-4xl mb-2'>Vacantes y personas</h1>
//         <h3 className='text-lg'>
//           Descubre las vacantes más recientes y postula tu hoja de vida o descubre personas a quienes 
//           darles una oportunidad laboral y puedan suplir tus necesidades.
//         </h3>
//       </div>
      
//       <div className='mb-10'>
//         <div className='flex w-full gap-4'>
//           <div className='w-full'>
//             <CardContainer
//               title='Vacantes'
//               items={vacancies}
//               rounded='top'
//               ItemComponent={Vacancie}
//             />
//             <CardContainer
//               title='Personas'
//               items={people}
//               rounded='bottom'
//               ItemComponent={Person}
//             />
//           </div>
//         </div>
        
//         {/* Secciones para Esta semana y Este mes */}
//       </div>
//     </div>
//   )
// }