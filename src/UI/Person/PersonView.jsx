import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { Button } from '../button'
import { PersonInfo } from './PersonInfo'

export const PersonView = ({ person, isOpen, onClose, onContact }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { 
      y: -50,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      scale: 0.95,
      transition: {
        ease: 'easeIn'
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className='bg-white rounded-xl pr-6 py-8 w-full max-w-2xl max-h-[90vh]'
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-3xl font-bold text-[#405e7f] px-12'>{person.occupation}</h2>
              <button
                onClick={onClose}
                className='text-[#405e7f] hover:bg-gray-100 transition-colors duration-300 cursor-pointer p-2 rounded-md'
              >
                <FiX size={24} />
              </button>
            </div>

            <PersonInfo person={person} />

            <div className='flex justify-center gap-4 mt-6'>
              <Button
                btnName='Descargar CV'
                btnType='button'
                btnStyle='border border-[#405e7f] text-[#405e7f] text-lg font-medium px-6 py-2 rounded-full transition-all duration-300'
                clicked={() => console.log('Descargar CV de', person.name)}
              />
              <Button
                btnName='Contactar'
                btnType='button'
                btnStyle='bg-[#60efdb] text-[#405e7f] text-lg font-semibold px-6 py-2 rounded-full transition-all duration-300'
                clicked={() => onContact(person)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}