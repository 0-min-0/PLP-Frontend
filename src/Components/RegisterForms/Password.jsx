import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../Header/Header'
import { WelcomeText } from '../../UI/WelcomeText'
import { PiEyeClosed, PiEye } from 'react-icons/pi'
import password from '../../assets/images/password.png'
import { FormsContainer } from '../../UI/FormsContainer'
import { Input } from '../../UI/Input'
import { Button } from '../../UI/button'
import { useRegister } from '../../Context/RegisterContext'
import { motion } from 'framer-motion'
import { TermsModal } from '../../UI/Modals/TermsModal'
import { useRef } from 'react'

export const Password = () => {
  const {
    form,
    errors,
    visibility,
    handleChange,
    toggleVisibility,
    handleSubmit
  } = useRegister()

  const [termsAccepted, setTermsAccepted] = useState(false)
  const [termsError, setTermsError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const termsRef = useRef(null)

  const pStyle = 'error error-responsive text-left text-sm'

  const localHandleSubmit = (e) => {
    if (!termsAccepted) {
      e.preventDefault()
      setTermsError(true)
      return
    }
    setTermsError(false)
    handleSubmit(e, 'password')
  }

  return (
    <div className='h-full p-6 page register-container'>
      <Header
        middleObject={
          <h1 className='text-5xl title-page font-[afacadBold] text-primary-color'>
            Crear contraseña
          </h1>
        }
        buttons={
          <div className='links-page flex gap-2'>
            <NavLink to='/politicas-de-privacidad' className='text-primary-color font-semibold hover:underline'>Políticas de privacidad</NavLink>
            <p>•</p>
            <NavLink to='/terminos-condiciones' className='text-primary-color font-semibold hover:underline'>Términos y condiciones</NavLink>
          </div>
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className='container-forms flex justify-center items-start mt-14 gap-20'
      >
        <FormsContainer
          width='w-[35%]'
          bgColor='register-form'
          title='Registrarse'
          changeForm={
            <p className='text text-[color:var(--color-card-text)] pt-3'>
              ¿Ya estás registrado en nuestra plataforma?{' '}
              <NavLink to='/acceder' className='text-[color:var(--color-card-text)] font-semibold hover:underline hover:text-[#405e7f]/60'>
                Iniciar sesión
              </NavLink>
            </p>
          }
          form={
            <form onSubmit={localHandleSubmit} className='container-employer w-full flex flex-col items-center gap-4 my-4'>
              <p className='text text-[color:var(--color-card-text)] font-semibold text-left'>
                Al crear tu contraseña debes tomar en cuenta que ésta debe contener al menos un número, una mayúscula y un carácter especial.
              </p>

              {/* Contraseña */}
              <div className='w-full'>
                <div className='w-full relative mb-1'>
                  <Input
                    labelTitle='Crear contraseña'
                    labelColor='select-label-dark'
                    isFor='createPassword'
                    iType={visibility.createPassword ? 'text' : 'password'}
                    iHolder='Ingresa una contraseña segura (mín. 8 caracteres)'
                    iValue={form.createPassword}
                    iChange={handleChange}
                    iName='createPassword'
                  />
                  <button
                    type='button'
                    onClick={() => toggleVisibility('createPassword')}
                    className='absolute right-4 bottom-2 text-sm underline form-icon hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer login-form-eye-icon'
                  >
                    {visibility.createPassword ? <PiEye className='login-form-eye-icon-size w-7 h-7' /> : <PiEyeClosed className='login-form-eye-icon-size w-7 h-7' />}
                  </button>
                </div>
                {errors.errorCreatePassword && (
                  <p className={pStyle}>{errors.errorCreatePassword}</p>
                )}
                {errors.errorStrength && (
                  <p className={pStyle}>{errors.errorStrength}</p>
                )}
              </div>

              {/* Confirmar contraseña */}
              <div className='w-full'>
                <div className='w-full relative mb-1'>
                  <Input
                    labelTitle='Confirmar contraseña'
                    labelColor='select-label-dark'
                    isFor='confirmPassword'
                    iType={visibility.confirmPassword ? 'text' : 'password'}
                    iHolder='Ingresa nuevamente tu contraseña'
                    iValue={form.confirmPassword}
                    iChange={handleChange}
                    iName='confirmPassword'
                  />
                  <button
                    type='button'
                    onClick={() => toggleVisibility('confirmPassword')}
                    className='absolute right-4 bottom-2 text-sm underline form-icon hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer login-form-eye-icon'
                  >
                    {visibility.confirmPassword ? <PiEye className='login-form-eye-icon-size w-7 h-7' /> : <PiEyeClosed className='login-form-eye-icon-size w-7 h-7' />}
                  </button>
                </div>
                {errors.errorConfirmPassword && (
                  <p className={pStyle}>{errors.errorConfirmPassword}</p>
                )}
                {errors.errorMismatch && (
                  <p className={pStyle}>{errors.errorMismatch}</p>
                )}
              </div>

              {/* Aceptar términos y condiciones */}
              <div className='w-full flex gap-3'>
                <input
                  ref={termsRef}
                  type='checkbox'
                  id='terms'
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className='icon-close-x w-5 h-5 cursor-pointer terms-acept'
                />
                <label htmlFor='terms' className='text text-[color:var(--color-card-text)] font-medium'>
                  Acepto los
                  <span
                    className='ml-1 underline hover:font-semibold cursor-pointer'
                    onClick={() => setIsModalOpen(true)}
                  >
                    Términos y Condiciones
                  </span>
                </label>
              </div>
              {termsError && (
                <p className={pStyle}> ⓘ Debes aceptar los Términos y Condiciones para continuar.</p>
              )}

              {/* Botón */}
              <div className='w-[35%] my-2'>
                <Button
                  btnType='submit'
                  btnStyle='card-button bg-[#405e7f] text-white font-bold px-4 py-2 rounded-full cursor-pointer w-full'
                  btnId='btnPassword'
                  btnName='Terminar registro'
                />
              </div>
            </form>
          }
        />

        <WelcomeText
          text={
            <p className='welcome-paragraph'>
              Nos alegra tener nuevos usuarios como tú en
              <br /> nuestro aplicativo, esperamos que tu
              <br /> experiencia sea agradable en PLP.
            </p>
          }
          ilustration={password}
          imgDesc='Ilustración de inicio de sesión'
          imgStyle='forms-ilustration w-[400px] h-[400px]'
        />
        <TermsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAccept={() => {
            setTermsAccepted(true)
            if (termsRef.current) termsRef.current.checked = true
          }}
        />
      </motion.div>
    </div>
  )
}
