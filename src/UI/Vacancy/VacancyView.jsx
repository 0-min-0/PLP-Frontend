import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'
import { FiX, FiCheck } from 'react-icons/fi'
import { VacancyInfo } from './VacancyInfo'
import { SuccessModal } from '../../UI/Modals/SuccessModal'
import { ErrorModal } from '../../UI/Modals/ErrorModal'
import { AlreadyAppliedModal } from '../../UI/Modals/AlreadyAppliedModal'
import { useVacancy } from '../../Context/VacancyContext'
import { users, vacanciesExampleTest } from '../../Utils/users'

export const VacancyView = ({ onClose, isOpen, isApplied = false, showApplyButton = true }) => {

    const user = users[0]
    const vacancy = vacanciesExampleTest[0]

    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [showAlreadyAppliedModal, setShowAlreadyAppliedModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [applied, setApplied] = useState(isApplied)

    const { handleApplyToVacancy } = useVacancy()

    useEffect(() => {
        setApplied(isApplied)
    }, [isApplied])

    if (!isOpen || !vacancy) return null

    const handleApply = async () => {
        if (applied) {
            setShowAlreadyAppliedModal(true)
            return
        }

        setIsLoading(true)
        try {
            await handleApplyToVacancy(vacancy)
            setShowSuccessModal(true)
            setApplied(true)  
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
        hidden: { y: -20, opacity: 0, scale: 0.98 },
        visible: {
            y: 0, opacity: 1, scale: 1,
            transition: { type: 'spring', damping: 25, stiffness: 300 }
        },
        exit: { y: 20, opacity: 0, scale: 0.98, transition: { ease: 'easeIn' } }
    }

    return (
        <>
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
                            className='container-info-user general rounded-xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto'
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className='container-title-info-user flex justify-between items-center mb-6'>
                                <h2 className='info-user-title text-3xl font-bold text-[color:var(--color-card-text)] ml-6'>
                                    {vacancy.title || vacancy.vacancyName}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className='icons hover:bg-gray-100 p-2 rounded-md cursor-pointer'
                                >
                                    <FiX className='icon-close-x' size={24} />
                                </button>
                            </div>

                            <VacancyInfo vacancy={vacancy} user={user} />

                            {showApplyButton && (
                                <div className='flex buttons-user-container justify-center mt-6'>
                                    <Button
                                        btnName={
                                            applied ? (
                                                <span className="flex items-center">
                                                    <FiCheck className="mr-2" />
                                                    Postulación enviada
                                                </span>
                                            ) : (
                                                'Postular hoja de vida'
                                            )
                                        }
                                        btnType='button'
                                        btnStyle={`${applied ? 'postulation' : 'bg-[#90d7db] text-[#405e7f]'} text-lg font-semibold px-8 py-2 rounded-full`}
                                        clicked={handleApply}
                                        disabled={isLoading}
                                    />
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="¡Postulación exitosa!"
                message="Tu hoja de vida ha sido enviada correctamente."
            >
                <Button
                    btnName='Cerrar'
                    clicked={() => setShowSuccessModal(false)}
                    btnStyle='w-full bg-[#90d7db] text-[#405e7f]'
                />
            </SuccessModal>

            <ErrorModal
                isOpen={showErrorModal}
                onClose={() => setShowErrorModal(false)}
                title="Error al postular"
                message="No se pudo enviar tu hoja de vida. Intenta de nuevo."
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
                        btnStyle='flex-1 bg-[#90d7db] text-[#405e7f]'
                    />
                </div>
            </ErrorModal>

            <AlreadyAppliedModal
                isOpen={showAlreadyAppliedModal}
                onClose={() => setShowAlreadyAppliedModal(false)}
            />
        </>
    )
}
