import React from 'react'
import { IoClose } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../button'
import { NavLink } from 'react-router-dom'

export const AuthModal = ({
    isOpen,
    onClose,
    onLogin,
    onRegister,
    itemType
}) => {
    const getItemTypeName = () => {
        return itemType === 'vacancy' ? 'esta vacante' : 'este contratista'
    }

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
                        className="bg-white rounded-xl p-12 max-w-md w-full mx-4 relative"
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

                        <h2 className="text-2xl font-bold text-[#405e7f] mb-4">
                            ¿Deseas conocer más sobre {getItemTypeName()}?
                        </h2>

                        <p className="mb-6 text-gray-700">
                            Regístrate o inicia sesión para que puedas tener más conocimiento de las vacantes y los
                            contratistas que se registran diariamente en PLP.
                        </p>

                        <div className='flex flex-col space-y-4'>
                            <NavLink to='/acceder'>
                                <Button
                                    btnName='Iniciar sesión'
                                    btnStyle='w-full bg-[#60efdb] text-[#405e7f]'
                                />
                            </NavLink>
                             <NavLink to='/crear-cuenta'>
                                <Button
                                    btnName='Registrarse'
                                    btnStyle='w-full bg-[#405e7f] text-white'
                                />
                            </NavLink>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}