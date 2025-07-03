import React from 'react'
import { IoClose } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'

export const LogoutModal = ({
    isOpen,
    onClose,
    onLogout
}) => {
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
                        className="modal-auth general rounded-xl p-10 max-w-md w-full mx-4 relative"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <div className='icons p-1 hover:bg-gray-100 rounded-lg cursor-pointer'>
                                <IoClose className='icon-close-x w-6 h-6' />
                            </div>
                        </button>

                        <div className="">
                            <h2 className="modal-auth-title text-2xl font-bold text-[color:var(--color-card-text)] mb-4">
                                ¿Estás seguro de que quieres cerrar sesión?
                            </h2>

                            <p className="modal-auth-text mb-6 text-[color:var(--color-card-text)]">
                                Serás redirigido a la página de inicio y tendrás que iniciar sesión nuevamente para acceder a tu cuenta.
                            </p>

                            <div className='flex flex-col space-y-4'>
                                <Button
                                    btnName='Confirmar'
                                    btnStyle='w-full bg-[#405e7f] text-white'
                                    clicked={onLogout}
                                />
                                <Button
                                    btnName='Cancelar'
                                    btnStyle='w-full bg-gray-200 text-gray-800'
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