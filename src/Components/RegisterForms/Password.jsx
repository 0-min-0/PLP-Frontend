import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../Header/Header'
import { WelcomeText } from '../../UI/WelcomeText'
import { PiEyeClosed, PiEye } from 'react-icons/pi'
import registerIlustration from '../../assets/images/register-ilustration.png'
import { FormsContainer } from '../../UI/FormsContainer'
import { Input } from '../../UI/Input'
import { Button } from '../../UI/button'
import { useRegister } from '../../Context/RegisterContext'
import { motion } from 'framer-motion'

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

  const pStyle = 'text-red-400 text-sm mt-2 font-semibold'

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
    <div className='p-6'>
      <Header
        middleObject={
          <h1 className='text-5xl mb-8 font-[afacadBold] text-[#405e7f]'>
            Crear contraseña
          </h1>
        }
        buttons={
          <div className='flex gap-2 mb-8'>
            <NavLink to='/politicas-de-privacidad' className='text-[#254160] font-semibold hover:text-[#405e7f] hover:underline'>Políticas de privacidad</NavLink>
            <p>•</p>
            <NavLink to='/terminos-y-condiciones' className='text-[#254160] font-semibold hover:text-[#405e7f] hover:underline'>Términos y condiciones</NavLink>
          </div>
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className='flex justify-center items-start mt-14 gap-20'
      >
        <FormsContainer
          width='w-[35%]'
          bgColor='bg-[#dcfff6]'
          textColor='#405e7f'
          title='Registrarse'
          changeForm={
            <p className='text-[#405e7f] pt-4'>
              ¿Ya estás registrado en nuestra plataforma?{' '}
              <NavLink to='/acceder' className='text-[#405e7f] font-semibold hover:underline hover:text-[#405e7f]/60'>
                Iniciar sesión
              </NavLink>
            </p>
          }
          form={
            <form onSubmit={localHandleSubmit} className='w-full flex flex-col items-center gap-4 my-4'>
              <p className='text-[#405e7f] font-semibold text-left'>
                Al crear tu contraseña debes tomar en cuenta que ésta debe contener al menos un número, una mayúscula y un carácter especial.
              </p>

              {/* Contraseña */}
              <div className='w-full'>
                <div className='w-full relative'>
                  <Input
                    labelTitle='Crear contraseña'
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
                    className='absolute right-4 bottom-2 text-sm underline text-[#405e7f]/70 hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer'
                  >
                    {visibility.createPassword ? <PiEye className='w-7 h-7' /> : <PiEyeClosed className='w-7 h-7' />}
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
                <div className='w-full relative'>
                  <Input
                    labelTitle='Confirmar contraseña'
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
                    className='absolute right-4 bottom-2 text-sm underline text-[#405e7f]/70 hover:text-[#405e7f] font-semibold focus:outline-none cursor-pointer'
                  >
                    {visibility.confirmPassword ? <PiEye className='w-7 h-7' /> : <PiEyeClosed className='w-7 h-7' />}
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
                  type='checkbox'
                  id='terms'
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className='w-5 h-5 cursor-pointer accent-[#405e7f]'
                />
                <label htmlFor='terms' className='text-[#405e7f] font-medium'>
                  Acepto los <NavLink to="/terminos-y-condiciones" className='underline hover:text-[#254160]'>Términos y Condiciones</NavLink>
                </label>
              </div>
              {termsError && (
                <p className={pStyle}> ⓘ Debes aceptar los Términos y Condiciones para continuar.</p>
              )}

              {/* Botón */}
              <div className='w-[35%] my-2'>
                <Button
                  btnType='submit'
                  btnStyle='bg-[#405e7f] text-white font-bold px-4 py-2 rounded-full cursor-pointer w-full'
                  btnId='btnPassword'
                  btnName='Terminar registro'
                />
              </div>
            </form>
          }
        />

        <WelcomeText
          text={
            <p>
              Nos alegra tener nuevos usuarios como tú en
              <br /> nuestro aplicativo, esperamos que tu
              <br /> experiencia sea agradable en PLP.
            </p>
          }
          ilustration={registerIlustration}
          imgDesc='Ilustración de inicio de sesión'
          imgStyle='w-[400px] h-[400px]'
        />
      </motion.div>
    </div>
  )
}
