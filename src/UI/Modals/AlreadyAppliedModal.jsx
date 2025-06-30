import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'

export const AlreadyAppliedModal = ({ isOpen, onClose }) => {
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
                        className='general rounded-xl p-8 max-w-md w-full mx-4 relative'
                        variants={modalVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <div className='text-center'>
                            <div className='w-16 h-16 bg-[#60efdb]/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg
                                    className='w-10 h-10 text-[#60efdb]'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z'
                                    />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-bold text-[color:var(--color-card-text)] mb-2'>Ya estás postulado</h3>
                            <p className='text-[color:var(--color-card-text)] mb-6'>Tu hoja de vida ya está postulada a esta vacante, no necesitas postularte denuevo.</p>
                            <Button
                                btnName='Cerrar'
                                clicked={onClose}
                                btnStyle='w-full bg-[#60efdb] text-[#405e7f]'
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
