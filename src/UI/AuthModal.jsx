import React from 'react'
import { IoClose } from 'react-icons/io5'

export const AuthModal = ({
    isOpen,
    onClose,
    onLogin,
    onRegister,
    itemType
}) => {
    if (!isOpen) return null

    const getItemTypeName = () => {
        return itemType === 'vacancy' ? 'vacante' : 'contratista'
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <IoClose className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-[#405e7f] mb-4">
                    ¿Deseas conocer más sobre esta {getItemTypeName()}?
                </h2>

                <p className="mb-6 text-gray-700">
                    Regístrate o inicia sesión para que puedas tener más conocimiento de las vacantes y los
                    contratistas que se registran diariamente en PLP.
                </p>

                <div className="flex flex-col space-y-4">
                    <button
                        className="bg-[#405e7f] text-white py-2 px-4 rounded-lg hover:bg-[#334d6b] transition-colors"
                        onClick={onLogin}
                    >
                        Iniciar sesión
                    </button>

                    <button
                        className="border border-[#405e7f] text-[#405e7f] py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={onRegister}
                    >
                        Registrarse
                    </button>
                </div>
            </div>
        </div>
    )
}