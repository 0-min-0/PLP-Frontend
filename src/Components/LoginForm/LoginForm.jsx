import { NavLink } from 'react-router-dom'
import { HiOutlineMail, HiOutlineLockClosed, HiOutlinePhone } from 'react-icons/hi'
import { PiEye, PiEyeClosed } from 'react-icons/pi'
import { Button } from '../../UI/button'
import { FormsContainer } from '../../UI/FormsContainer'
import { Input } from '../../UI/Input'
import { useRegister } from '../../Context/RegisterContext'
import { useLogin } from '../../Context/LoginContext'

export const LoginForm = () => {
    const pStyle = 'error-responsive text-[#90d7db] text-sm mt-1'
    const { visibility, toggleVisibility } = useRegister()
    const {
        form,
        errorForm,
        isSubmitting,
        handleChange,
        handleSubmit
    } = useLogin()

    const isEmail = form.emailOrPhone.includes('@')

    return (
        <div className='w-[35%] login-form-dark rounded-xl login-form-container'>
            <FormsContainer
                width='w-full'
                bgColor='login-form-dark'
                title='Acceder'
                changeForm={
                    <div className='flex flex-col items-center w-full'>
                        <hr className='w-full border-t-2 border-white/9 login-form-divider' />
                        <Button
                            btnType='button'
                            btnName='Continuar con Google'
                            btnStyle='w-60 flex items-center text-center bg-white text-[#254160] rounded-full px-4 py-2 my-4 login-form-google-btn'
                            btnIcon='google'
                        />
                        <div className='flex items-center text-center login-form-register-text'>
                            <p>¿Aún no tienes una cuenta?</p>
                            <NavLink
                                to='/crear-cuenta'
                                className='text-white font-semibold hover:text-[#90d7db] hover:underline ml-2 login-form-register-link' >
                                Únete ahora
                            </NavLink>
                        </div>
                    </div>}
                form={
                    <form onSubmit={handleSubmit} className='w-full relative flex flex-col items-center login-form'>
                        {errorForm.loginError && (
                            <div className='w-full mb-4 text-center login-form-error-container'>
                                <p className={pStyle}>{errorForm.loginError}</p>
                                {errorForm.loginError.includes('inexistente') && (
                                    <NavLink
                                        to='/crear-cuenta'
                                        className='text-[#90d7db] text-sm font-semibold underline hover:text-white mt-1 login-form-register-link'
                                    >
                                        Regístrate aquí
                                    </NavLink>
                                )}
                            </div>
                        )}
                        <div className='w-full'>
                            <div className='w-full relative'>
                                <div className='absolute left-3 bottom-3 form-icon login-form-icon'>
                                    <HiOutlineMail className='w-6 h-6 login-form-icon-size' />
                                </div>
                                <Input
                                    labelTitle='Correo electrónico o número de teléfono'
                                    labelColor='white'
                                    iType={isEmail ? 'email' : 'tel'}
                                    iName='emailOrPhone'
                                    iValue={form.emailOrPhone}
                                    iChange={handleChange}
                                    iHolder='Ingresa tu correo electrónico o número de teléfono'
                                    padding='pl-12 pr-4 py-2 login-form-input-padding'
                                />
                            </div>
                            {errorForm.errorEmailOrPhone && (
                                <p className={pStyle}>{errorForm.errorEmailOrPhone}</p>
                            )}
                        </div>
                        <div className='w-full mt-4 login-form-input-container'>
                            <div className='w-full relative'>
                                <div className='absolute left-3 bottom-3 form-icon login-form-icon'>
                                    <HiOutlineLockClosed className='w-6 h-6 login-form-icon-size' />
                                </div>
                                <Input
                                    labelTitle='Contraseña'
                                    labelColor='white'
                                    iType={visibility.loginPassword ? 'text' : 'password'}
                                    iName='password'
                                    iValue={form.password}
                                    iChange={handleChange}
                                    iHolder='Ingresa tu contraseña'
                                    padding='pl-12 pr-4 py-2 login-form-input-padding'
                                />
                                <button
                                    type='button'
                                    onClick={() => toggleVisibility('loginPassword')}
                                    className='absolute right-4 bottom-2 form-icon hover:text-white font-semibold cursor-pointer login-form-eye-icon'
                                >
                                    {visibility.loginPassword ? <PiEye className='w-7 h-7 login-form-eye-icon-size' /> : <PiEyeClosed className='w-7 h-7 login-form-eye-icon-size' />}
                                </button>
                            </div>
                            {errorForm.errorPassword && (
                                <p className={pStyle}>{errorForm.errorPassword}</p>
                            )}
                        </div>
                        <div className='flex flex-col items-center gap-4 mt-6 login-form-actions'>
                            <NavLink
                                to='/recuperar-contraseña'
                                className='hover:text-[#90d7db] hover:underline login-form-forgot-password'>
                                ¿Has olvidado tu contraseña?
                            </NavLink>

                            <Button
                                btnType='submit'
                                btnStyle={`bg-[#90d7db] text-[#405e7f] font-bold px-4 py-2 rounded-full cursor-pointer w-full login-form-submit-btn ${isSubmitting ? 'opacity-70' : ''}`}
                                btnId='btnLogin'
                                btnName={isSubmitting ? 'Verificando...' : 'Acceder'}
                                disabled={isSubmitting}
                            />
                        </div>
                    </form>
                }
            />
        </div>
    )
}