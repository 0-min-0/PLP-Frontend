import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../../Components/Header/Header'
import { HiOutlineInbox, HiMiniArrowUturnLeft } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { RightMenu } from '../../../Components/RightMenu/RightMenu'
import { useVacancy } from '../../../Context/VacancyContext'
import {
  getVacancies,
  updateVacancyInExample,
  deleteVacancyFromExample,
  getPeople,
  rejectPostulation
} from '../../../Utils/objectsExample'
import { menuConfig } from '../../../Utils/options'
import { RejectionModal } from '../../../UI/Modals/RejectionModal'
import { InteractiveLogoMain } from '../../../UI/InteractiveLogo'

export const SettingsEmployer = () => {
  const { vacancies, setVacancies } = useVacancy()
  const [selectedVacancy, setSelectedVacancy] = useState(null)
  const [people, setPeople] = useState([])
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [rejectionModal, setRejectionModal] = useState({
    isOpen: false,
    personId: null
  })

  const handleOpenModal = (personId) => {
    setRejectionModal({ isOpen: true, personId })
  }

  const handleCloseModal = () => {
    setRejectionModal({ isOpen: false, personId: null })
  }

  const handleRejectConfirmed = () => {
    const { personId } = rejectionModal
    try {
      const updatedPeople = rejectPostulation(personId)
      setPeople(updatedPeople)

      if (selectedPerson?.id === personId) {
        setSelectedPerson(null)
      }

      console.log('Postulación rechazada exitosamente')
    } catch (error) {
      console.error('Error al rechazar postulación:', error)
    } finally {
      handleCloseModal()
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setVacancies(getVacancies())
      setPeople(getPeople())
    }
    loadData()
  }, [setVacancies])

  const outletContext = {
    selectedVacancy,
    setSelectedVacancy,
    handleSaveVacancy: (updatedVacancy) => {
      updateVacancyInExample(updatedVacancy)
      setVacancies(getVacancies())
    },
    handleDeleteVacancy: (id) => {
      deleteVacancyFromExample(id)
      setVacancies(getVacancies())
      setSelectedVacancy(null)
    },
    vacancies,

    selectedPerson,
    setSelectedPerson,
    handleRejectPerson: handleOpenModal, // Ahora abre el modal
    handleContactPerson: () => console.log('Contactar persona'),
    people
  }

  return (
    <div className='h-full p-6 page back-color-set'>
      <Header
        logo={
          <InteractiveLogoMain
            mainRoute='/inicio-contratante'
          />
        }
        middleObject={
          <h1 className='title-page text-5xl font-[afacadBold] text-primary-color'>
            Configuraciones
          </h1>
        }
        buttons={
          <div className='w-full flex mr-6 mb-6'>
            <NavLink to='/centro-de-notificaciones-contratante' title='Centro de notificaciones'>
              <HiOutlineInbox className='routes-icons w-8 h-8 text-[color:var(--color-card-text)] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
            </NavLink>
            <NavLink to='/inicio-contratante' title='Volver a inicio'>
              <HiMiniArrowUturnLeft className='routes-icons w-8 h-8 text-[color:var(--color-card-text)] ml-6 ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
            </NavLink>
          </div>
        }
      />

      <div className='settings w-[90%] flex justify-center gap-6 mx-30 mt-4'>
        <div className='sub-settings w-[70%] general px-10 py-8 rounded-xl'>
          <Outlet context={outletContext} />
        </div>
        <div className='w-[30%]'>
          <RightMenu
            menuItems={menuConfig.employer}
            basePath='/configuraciones-contratante'
          />
        </div>
      </div>
      <RejectionModal
        isOpen={rejectionModal.isOpen}
        onClose={handleCloseModal}
        onConfirm={handleRejectConfirmed}
      />
    </div>
  )
}
