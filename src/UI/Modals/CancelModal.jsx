import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'

export const CancelModal = ({ isOpen, onClose, onConfirm }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="bg-white rounded-xl p-8 max-w-md w-full mx-4"
            variants={modalVariants}
          >
            <h3 className="text-xl font-bold text-[#405e7f] mb-4">
              Cancelar Postulación
            </h3>
            <p className="mb-6">¿Deseas retirar tu postulación para esta vacante?</p>

            <div className="flex justify-end gap-3">
              <Button
                btnName='Cancelar'
                btnStyle='bg-[#405e7f] text-white'
                clicked={onClose}
              />
              <Button
                btnName='Retirar'
                btnStyle='bg-red-500 text-white'
                clicked={onConfirm}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
