import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../button';
import { Input } from '../Input';

// Modal de confirmación inicial (¿Estás seguro?)
export const DeactivateAccountModal = ({
    isOpen,
    onClose,
    onContinue,
    rol = "usuario"
}) => {
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { y: -20, opacity: 0, scale: 0.98 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', damping: 25, stiffness: 300 }
        },
        exit: {
            y: 20,
            opacity: 0,
            scale: 0.98,
            transition: { ease: 'easeIn' }
        }
    };

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
                        className="general rounded-xl p-10 max-w-md w-full mx-4 relative"
                        variants={modalVariants}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                            <div className='text-[color:var(--color-card-text)] p-1 hover:bg-gray-100 rounded-lg cursor-pointer'>
                                <IoClose className='w-6 h-6' />
                            </div>
                        </button>

                        <div>
                            <h2 className="text-2xl font-bold text-[color:var(--color-card-text)] mb-4">
                                ¿Estás seguro de desactivar tu cuenta?
                            </h2>
                            <p className="mb-6 text-[color:var(--color-card-text)]">
                                Al desactivar tu cuenta, tu perfil como {rol} no será visible y no podrás realizar ninguna acción en la plataforma.
                            </p>

                            <div className='flex flex-col space-y-4'>
                                <Button
                                    btnName='Sí, continuar'
                                    btnStyle='w-full bg-[#405e7f] text-white'
                                    clicked={onContinue}
                                />
                                <Button
                                    btnName='No, cancelar'
                                    btnStyle='w-full bg-gray-200 text-gray-800'
                                    clicked={onClose}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Modal para confirmar desactivación con contraseña
export const DeactivateConfirmModal = ({
    isOpen,
    onClose,
    onDeactivate,
    isLoading,
    isAccountActive
}) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { y: -20, opacity: 0, scale: 0.98 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', damping: 25, stiffness: 300 }
        },
        exit: {
            y: 20,
            opacity: 0,
            scale: 0.98,
            transition: { ease: 'easeIn' }
        }
    };

    const handleDeactivate = () => {
        if (!password.trim()) {
            setError('Por favor ingresa tu contraseña');
            return;
        }
        onDeactivate(password);
    };

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
                        className="general rounded-xl p-10 max-w-md w-full mx-4 relative"
                        variants={modalVariants}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                            <div className='text-[color:var(--color-card-text)] p-1 hover:bg-gray-100 rounded-lg cursor-pointer'>
                                <IoClose className='w-6 h-6' />
                            </div>
                        </button>

                        <div>
                            <h2 className="text-2xl font-bold text-[color:var(--color-card-text)] mb-4">
                                Confirmar desactivación
                            </h2>
                            <p className="mb-6 text-[color:var(--color-card-text)]">
                                Si deseas activar tu cuenta de nuevo, vuelve a las configuraciones y da click en Activar.
                                Se te pedirá nuevamente tu contraseña y tu cuenta estará activa de nuevo. Para desactivar 
                                tu cuenta debes ingresar tu contraseña a continuación.
                            </p>

                            <Input
                                iType="password"
                                iValue={password}
                                isFor="deactivatePassword"
                                iName="deactivatePassword"
                                iChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error) setError('');
                                }}
                                labelTitle="Contraseña"
                                labelColor="[#405e7f]"
                                iHolder="Ingresa tu contraseña"
                                error={error}
                                errColor="text-red-400"
                                borderColor={error ? 'border-red-400' : 'border-[#405e7f]/50'}
                                focusColor="focus:ring-[#60efdb]"
                            />

                            <div className='flex flex-col space-y-4 mt-6'>
                                <Button
                                    btnName={isAccountActive ? 'Desactivar cuenta' : 'Cuenta desactivada'}
                                    btnStyle={`w-full ${password.trim() ? 'bg-red-600 hover:bg-red-700' : 'bg-red-300 cursor-not-allowed'} text-white`}
                                    clicked={handleDeactivate}
                                    disabled={!password.trim() || isLoading || !isAccountActive}
                                    isLoading={isLoading}
                                />
                                <Button
                                    btnName='Cancelar'
                                    btnStyle='w-full bg-gray-200 hover:bg-gray-300 text-gray-800'
                                    clicked={onClose}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Modal para reactivar la cuenta
export const ActivateConfirmModal = ({
    isOpen,
    onClose,
    onActivate,
    isLoading
}) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { y: -20, opacity: 0, scale: 0.98 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', damping: 25, stiffness: 300 }
        },
        exit: {
            y: 20,
            opacity: 0,
            scale: 0.98,
            transition: { ease: 'easeIn' }
        }
    };

    const handleActivate = () => {
        if (!password.trim()) {
            setError('Por favor ingresa tu contraseña');
            return;
        }
        onActivate(password);
    };

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
                        className="general rounded-xl p-10 max-w-md w-full mx-4 relative"
                        variants={modalVariants}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                            <div className='text-[color:var(--color-card-text)] p-1 hover:bg-gray-100 rounded-lg cursor-pointer'>
                                <IoClose className='w-6 h-6' />
                            </div>
                        </button>

                        <div>
                            <h2 className="text-2xl font-bold text-[color:var(--color-card-text)] mb-4">
                                Confirmar activación
                            </h2>
                            <p className="mb-6 text-[color:var(--color-card-text)]">
                                Al activar tu cuenta, tu perfil volverá a ser visible y podrás realizar todas las acciones en la plataforma.
                            </p>

                            <Input
                                iType="password"
                                iValue={password}
                                isFor="activatePassword"
                                iName="activatePassword"
                                iChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error) setError('');
                                }}
                                labelTitle="Contraseña"
                                labelColor="[#405e7f]"
                                iHolder="Ingresa tu contraseña"
                                error={error}
                                errColor="text-red-400"
                                borderColor={error ? 'border-red-400' : 'border-[#405e7f]/50'}
                                focusColor="focus:ring-[#60efdb]"
                            />

                            <div className='flex flex-col space-y-4 mt-6'>
                                <Button
                                    btnName='Activar cuenta'
                                    btnStyle={`w-full ${password.trim() ? 'bg-green-600 hover:bg-green-700' : 'bg-green-300 cursor-not-allowed'} text-white`}
                                    clicked={handleActivate}
                                    disabled={!password.trim() || isLoading}
                                    isLoading={isLoading}
                                />
                                <Button
                                    btnName='Cancelar'
                                    btnStyle='w-full bg-gray-200 hover:bg-gray-300 text-gray-800'
                                    clicked={onClose}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};