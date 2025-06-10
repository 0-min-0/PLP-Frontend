import { useState } from 'react'
import { motion } from 'framer-motion'
import { useData } from '../../Hooks/useData'
import { JobsContainer } from '../../Components/Container/JobsContainer'
import { AuthModal } from '../../UI/AuthModal'

const sectionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

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
    <motion.div
      className='flex flex-col bg-[#405e7f] px-10 py-6'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      <motion.div className='text-white mx-10 mt-10 mb-5' variants={sectionAnimation}>
        <h1 className='font-[afacadBold] text-4xl mb-2'>Vacantes y personas</h1>
        <h3 className='text-lg'>
          Descubre las vacantes más recientes y postula tu hoja de vida o descubre personas a quienes
          darles una oportunidad laboral y puedan suplir tus necesidades.
        </h3>
      </motion.div>

      <div className='mb-10'>
        <motion.div variants={sectionAnimation}>
          <JobsContainer
            title='Hoy'
            vacancies={vacancies}
            people={people}
            rounded='top'
            onShowDetails={handleShowDetails}
            onShowResume={handleShowResume}
          />
        </motion.div>
        <motion.div variants={sectionAnimation}>
          <JobsContainer
            title='Esta semana'
            vacancies={vacancies}
            people={people}
            rounded='top-right'
            onShowDetails={handleShowDetails}
            onShowResume={handleShowResume}
          />
        </motion.div>
        <motion.div variants={sectionAnimation}>
          <JobsContainer
            title='Este mes'
            vacancies={vacancies}
            people={people}
            rounded='bottom'
            onShowDetails={handleShowDetails}
            onShowResume={handleShowResume}
          />
        </motion.div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={handleCloseAuthModal}
        onLogin={handleLogin}
        onRegister={handleRegister}
        itemType={selectedItem?.type}
      />
    </motion.div>
  )
}