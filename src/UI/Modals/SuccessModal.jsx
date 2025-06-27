import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'

export const SuccessModal = ({ isOpen, onClose, title, message, children }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      scale: 0.98
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
      y: 20,
      opacity: 0,
      scale: 0.98,
      transition: {
        ease: 'easeIn'
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={backdropVariants}
        >
          <motion.div
            className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#405e7f] mb-2">{title}</h3>
              <p className="text-gray-600 mb-6">{message}</p>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}