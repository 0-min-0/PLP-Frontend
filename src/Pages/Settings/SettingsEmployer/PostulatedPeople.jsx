import { FiFileText, FiCheck, FiX, FiPhone } from 'react-icons/fi'
import { SearchBar } from '../../../UI/SearchBar'
import { useOutletContext } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '../../../Components/Avatar/Avatar'
import { PersonView } from '../../../UI/Person/PersonView'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
}

export const PostulatedPeople = () => {
  // Obtener contexto de manera segura
  const {
    selectedPerson,
    setSelectedPerson,
    handleContactPerson = () => {},
    handleRejectPerson = () => {
      console.error('handleRejectPerson no fue proporcionado en el contexto')
    },
    people = []
  } = useOutletContext() || {}

  // Manejo seguro del rechazo
  const handleSafeReject = (personId, e) => {
    e.stopPropagation()
    console.log('Rechazando postulación con ID:', personId)
    handleRejectPerson(personId)
  }

  return (
    <>
      <Avatar />
      <div className='max-w-5xl mx-auto pt-8 pb-4'>
        <SearchBar />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='mt-6'
        >
          <h2 className='text-3xl font-bold text-[#405e7f] mb-4'>
            Candidatos Disponibles
          </h2>

          {people.length > 0 ? (
            <div className='w-full h-80 grid grid-cols-2 gap-6 max-h-[500px] overflow-y-auto scrollbar-custom pr-4'>
              {people.map((person) => (
                <div
                  key={person.id}
                  className='border-2 border-[#60efdb] rounded-xl p-6'
                  whileHover={{ y: -2 }}
                >
                  <div className='flex justify-between items-start'>
                    <div className='w-full'>
                      <h3 className='font-bold text-lg text-[#405e7f] flex items-center gap-2'>
                        {person.name}
                      </h3>
                      <p className='text-gray-600 mt-1 flex items-center gap-2'>
                        {person.phone}
                      </p>
                      <p className='text-gray-600 mt-1 flex items-center gap-2'>
                        {person.town}
                      </p>
                    </div>
                    <div className='flex'>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedPerson(person)
                        }}
                        className='text-[#405e7f] p-2 hover:bg-[#60efdb]/20 rounded-full cursor-pointer'
                        title='Ver hoja de vida'
                      >
                        <FiFileText className='w-5 h-5' />
                      </button>
                      <button
                        onClick={(e) => handleSafeReject(person.id, e)}
                        className='text-[#405e7f] p-2 hover:bg-[#60efdb]/20 rounded-full cursor-pointer'
                        title='Rechazar'
                      >
                        <FiX className='w-5 h-5' />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-gray-500 py-8 text-center'>
              No hay candidatos disponibles
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
          />
        )}
      </AnimatePresence>
    </>
  )
}