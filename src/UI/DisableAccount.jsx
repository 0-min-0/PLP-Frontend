import React, { useState } from 'react'
import { Button } from './button'
import { DeactivateAccountModal, DeactivateConfirmModal, ActivateConfirmModal } from './Modals/DesactiveModal'

export const DisableAccount = ({ userRol = "usuario" }) => {
    const [showFirstModal, setShowFirstModal] = useState(false)
    const [showSecondModal, setShowSecondModal] = useState(false)
    const [showActivateModal, setShowActivateModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isAccountActive, setIsAccountActive] = useState(true)
    const [buttonText, setButtonText] = useState('Desactivar cuenta')

    const handleOpenModal = () => {
        if (isAccountActive) {
            setShowFirstModal(true)
        } else {
            setShowActivateModal(true)
        }
    }

    const handleContinue = () => {
        setShowFirstModal(false)
        setShowSecondModal(true)
    }

    const handleDeactivateAccount = async (password) => {
        setIsLoading(true)
        try {
            // Lógica para desactivar la cuenta
            console.log('Cuenta desactivada con contraseña:', password)
            setIsAccountActive(false)
            setButtonText('Activar cuenta')
            setShowSecondModal(false)
        } catch (error) {
            console.error('Error al desactivar cuenta:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleActivateAccount = async (password) => {
        setIsLoading(true)
        try {
            // Lógica para activar la cuenta
            console.log('Cuenta activada con contraseña:', password)
            setIsAccountActive(true)
            setButtonText('Desactivar cuenta')
            setShowActivateModal(false)
        } catch (error) {
            console.error('Error al activar cuenta:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='' >
            {/* Botón principal que cambia entre Desactivar/Activar */}
            <Button
                btnName={buttonText}
                btnType='button'
                btnStyle={isAccountActive ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-[#60efdb] hover:bg-[#] text-[#405e7f]'}
                clicked={handleOpenModal}
            />

            {/* Modal de confirmación para desactivar */}
            <DeactivateAccountModal
                isOpen={showFirstModal}
                onClose={() => setShowFirstModal(false)}
                onContinue={handleContinue}
                rol={userRol}
            />

            {/* Modal para confirmar desactivación con contraseña */}
            <DeactivateConfirmModal
                isOpen={showSecondModal}
                onClose={() => setShowSecondModal(false)}
                onDeactivate={handleDeactivateAccount}
                isLoading={isLoading}
                isAccountActive={isAccountActive}
            />

            {/* Modal para confirmar activación con contraseña */}
            <ActivateConfirmModal
                isOpen={showActivateModal}
                onClose={() => setShowActivateModal(false)}
                onActivate={handleActivateAccount}
                isLoading={isLoading}
            />
        </div>
    )
}