import React from 'react'
import { IoClose } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'
// import { useAuth } from '../../Context/AuthContext' 

export const LogoutModal = ({
    isOpen,
    onClose,
    onLogout
}) => {
    // Animaciones
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
                    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={backdropVariants}
                >
                    <motion.div
                        className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <div className='p-1 hover:bg-gray-100 rounded-lg cursor-pointer'>
                                <IoClose className='w-6 h-6' />
                            </div>
                        </button>

                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-[#405e7f] mb-4">
                                ¿Estás seguro de que quieres cerrar sesión?
                            </h2>

                            <p className="mb-6 text-gray-700">
                                Serás redirigido a la página de inicio y tendrás que iniciar sesión nuevamente para acceder a tu cuenta.
                            </p>

                            <div className='flex flex-col space-y-4'>
                                <Button
                                    btnName='Confirmar'
                                    btnStyle='w-full bg-red-500 hover:bg-red-600 text-white'
                                    clicked={onLogout}
                                />
                                <Button
                                    btnName='Cancelar'
                                    btnStyle='w-full bg-gray-200 hover:bg-gray-300 text-gray-800'
                                    clicked={onClose}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}