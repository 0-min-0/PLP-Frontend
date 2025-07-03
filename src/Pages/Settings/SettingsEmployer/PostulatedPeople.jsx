import { useState, useEffect } from 'react'
import { FiFileText, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '../../../Components/Avatar/Avatar'
import { SearchBar } from '../../../UI/SearchBar'
import { PersonView } from '../../../UI/Person/PersonView'
import { RejectionModal } from '../../../UI/Modals/RejectionModal'
import { peopleExample } from '../../../Utils/objectsExample'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
}

export const PostulatedPeople = () => {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false)
  const [personToReject, setPersonToReject] = useState(null)
  const [applications, setApplications] = useState([])

  const handleContactPerson = () => {}

  // Inicializamos postulaciones desde los datos base
  useEffect(() => {
    const initialApplications = peopleExample.flatMap(person =>
      (person.appliedTo || []).map(post => ({
        ...person,
        appliedVacancyTitle: post.vacancyTitle,
        appliedStatus: post.status,
        applicationId: `${person.id}-${post.vacancyTitle}` // ID único por persona + vacante
      }))
    )
    setApplications(initialApplications)
  }, [])

  // Rechazar y eliminar visualmente la postulación
  const handleRejectPerson = (applicationId) => {
    setApplications(prev =>
      prev.filter(app => app.applicationId !== applicationId)
    )
    setIsRejectionModalOpen(false)
    setPersonToReject(null)
  }

  const handleSafeReject = (applicationId, e) => {
    e.stopPropagation()
    setPersonToReject(applicationId)
    setIsRejectionModalOpen(true)
  }

  return (
    <>
      <Avatar />
      <div className='max-w-5xl mx-auto pt-8 pb-4'>
        <hr className='border-gray-200 mr-8' />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='mt-6'
        >
          <h2 className='info-title text-3xl font-bold text-[color:var(--color-card-text)] mb-4'>
            Candidatos Postulados
          </h2>

          {applications.length > 0 ? (
            <div className='postulated-container h-90 grid grid-cols-2 gap-6 max-h-[500px] overflow-y-auto scrollbar-custom pr-4'>
              {applications.map((applicant) => (
                <div
                  key={applicant.applicationId}
                  className='card-postulated h-42 border-2 border-[#60efdb] rounded-xl p-6'
                >
                  <div className='flex justify-between items-start'>
                    <div className='w-full'>
                      <h3 className='text font-bold text-lg text-[color:var(--color-card-text)]'>{applicant.name}</h3>
                      <p className='text text-[color:var(--color-card-text)]'>{applicant.phone}</p>
                      <p className='text text-[color:var(--color-card-text)]'>{applicant.town}</p>
                      <p className='text-vacancy-applied text-[#60efdb] mt-2 font-medium'>
                        Vacante: {applicant.appliedVacancyTitle}
                      </p>
                    </div>

                    <div className='flex gap-2 ml-2'>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedPerson(applicant)
                        }}
                        className='text-[color:var(--color-card-text)] p-2 hover:bg-[#60efdb]/20 rounded-full cursor-pointer'
                        title='Ver hoja de vida'
                      >
                        <FiFileText className='icon-close-x w-5 h-5' />
                      </button>
                      <button
                        onClick={(e) => handleSafeReject(applicant.applicationId, e)}
                        className='text-[color:var(--color-card-text)] p-2 hover:bg-[#60efdb]/20 rounded-full cursor-pointer'
                        title='Rechazar'
                      >
                        <FiX className='icon-close-x w-5 h-5' />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-[color:var(--color-card-text)] py-8 text-center'>
              No hay candidatos postulados actualmente
            </p>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPerson && (
          <PersonView
            person={selectedPerson}
            isOpen={!!selectedPerson}
            onClose={() => setSelectedPerson(null)}
            onContact={handleContactPerson}
            showCommentButton={true}
          />
        )}
      </AnimatePresence>

      {/* Modal de rechazo */}
      <RejectionModal
        isOpen={isRejectionModalOpen}
        onClose={() => {
          setIsRejectionModalOpen(false)
          setPersonToReject(null)
        }}
        onConfirm={() => handleRejectPerson(personToReject)}
      />
    </>
  )
}
