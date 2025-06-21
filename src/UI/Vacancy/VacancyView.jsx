import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'
import { FiX } from 'react-icons/fi'
import { VacancyInfo } from './VacancyInfo'

export const VacancyView = ({ vacancy, onClose, onApply, isOpen }) => {
    const handleApply = () => {
        if (typeof onApply === 'function') {
            onApply(vacancy)
        }
    }

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
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={backdropVariants}
                >
                    <motion.div
                        className='bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto'
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className='flex justify-between items-center mb-6'>
                            <h2 className='text-3xl font-bold text-[#405e7f] ml-6'>{vacancy.vacancyName}</h2>
                            <button
                                onClick={onClose}
                                className='text-[#405e7f] hover:bg-gray-100 transition-colors duration-300 cursor-pointer p-2 rounded-md'
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        <VacancyInfo vacancy={vacancy} />

                        <div className='flex justify-center mt-6'>
                            <Button
                                btnName='Postular hoja de vida'
                                btnType='button'
                                btnStyle='bg-[#60efdb] text-[#405e7f] text-lg font-semibold px-8 py-2 rounded-full transition-all duration-300'
                                clicked={handleApply}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}