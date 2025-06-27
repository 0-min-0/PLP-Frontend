import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'
import { FiX, FiCheck } from 'react-icons/fi'
import { VacancyInfo } from './VacancyInfo'
import { SuccessModal } from '../../UI/Modals/SuccessModal'
import { ErrorModal } from '../../UI/Modals/ErrorModal'

export const VacancyView = ({ vacancy, onClose, onApply, isOpen, isApplied }) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    if (!isOpen || !vacancy) return null;

    const handleApply = async () => {
        setIsLoading(true)
        try {
            if (typeof onApply === 'function') {
                await onApply(vacancy)
                setShowSuccessModal(true)
            }
        } catch (error) {
            console.error('Error applying:', error)
            setShowErrorModal(true)
        } finally {
            setIsLoading(false)
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
        <>
            <AnimatePresence>
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
                            <h2 className='text-3xl font-bold text-[#405e7f] ml-6'>
                                {vacancy.title || vacancy.vacancyName}
                            </h2>
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
                                btnName={
                                    isApplied ? (
                                        <span className="flex items-center">
                                            <FiCheck className="mr-2" />
                                            Postulación enviada
                                        </span>
                                    ) : (
                                        'Postular hoja de vida'
                                    )
                                }
                                btnType='button'
                                btnStyle={`${isApplied ? 'bg-green-100 text-green-800' : 'bg-[#60efdb] text-[#405e7f]'} text-lg font-semibold px-8 py-2 rounded-full transition-all duration-300`}
                                clicked={!isApplied ? handleApply : null}
                                disabled={isApplied || isLoading}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="¡Postulación exitosa!"
                message="Tu hoja de vida ha sido enviada correctamente. El empleador revisará tu información."
            >
                <Button
                    btnName='Cerrar'
                    clicked={() => setShowSuccessModal(false)}
                    btnStyle='w-full bg-[#60efdb] text-[#405e7f]'
                />
            </SuccessModal>

            {/* Error Modal */}
            <ErrorModal
                isOpen={showErrorModal}
                onClose={() => setShowErrorModal(false)}
                title="Error al postular"
                message="No se pudo enviar tu hoja de vida. Por favor intenta nuevamente más tarde."
            >
                <div className="flex gap-4">
                    <Button
                        btnName='Reintentar'
                        clicked={handleApply}
                        btnStyle='flex-1 bg-[#405e7f] text-white'
                        disabled={isLoading}
                    />
                    <Button
                        btnName='Cerrar'
                        clicked={() => setShowErrorModal(false)}
                        btnStyle='flex-1 bg-[#60efdb] text-[#405e7f]'
                    />
                </div>
            </ErrorModal>
        </>
    )
}