import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { WelcomeText } from '../../UI/WelcomeText'
import registerIlustration from '../../assets/images/register-ilustration.png'
import { FormsContainer } from '../../UI/FormsContainer'
import { Button } from '../../UI/button'
import { Input } from '../../UI/Input'
import { Select } from '../../UI/Select'
import { optionId } from '../../Utils/options'
import { useRegister } from '../../Context/RegisterContext'
import { motion } from 'framer-motion'

export const JobSeeker = () => {
    const {
        form,
        errors,
        handleChange,
        handleSelectChange,
        handleSubmit
    } = useRegister()

    const errorStyle = 'error-seeker text-sm mt-1 font-semibold'

    const localHandleSubmit = (e) => {
        handleSubmit(e, 'jobSeeker')
    }

    return (
        <div className='w-full h-full p-6 register-container'>
            <Header
                middleObject={
                    <h1 className='text-5xl font-[afacadBold] text-primary-color'>
                        Registrarse como contratista
                    </h1>
                }
                buttons={
                    <div className='flex gap-2'>
                        <NavLink to='/politicas-de-privacidad' className='text-primary-color font-semibold hover:text-[#405e7f] hover:underline'>Políticas de privacidad</NavLink>
                        <p>•</p>
                        <NavLink to='/terminos-y-condiciones' className='text-primary-color font-semibold hover:text-[#405e7f] hover:underline'>Términos y condiciones</NavLink>
                    </div>
                }
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className='flex justify-center items-start gap-20 mt-6'
            >
                <div className='w-[35%]'>
                    <FormsContainer
                        width='w-full'
                        bgColor='register-form-seeker'
                        textColor='text-[color:var(--color-card-text)]'
                        changeForm={
                            <div className=''>
                                <Button
                                    clicked={localHandleSubmit}
                                    btnStyle='card-button w-[30%] bg-[#405e7f] text-white font-bold mt-2'
                                    btnName='Continuar'
                                />
                                <p className='text-white pt-4'>
                                    ¿Ya estás registrado en nuestra plataforma?{' '}
                                    <NavLink to='/acceder' className='text-white font-semibold hover:underline hover:text-[#405e7f]/60'>
                                        Iniciar sesión
                                    </NavLink>
                                </p>
                            </div>
                        }
                        form={
                            <form className='w-full h-115 overflow-y-auto scrollbar-custom mb-4' onSubmit={localHandleSubmit}>
                                <div className='mr-4'>
                                    <h2 className='text-white font-semibold'>
                                        Documento de identidad
                                    </h2>
                                    <div className='w-full mb-3'>
                                        <div className=' mt-3'>
                                            <Select
                                                name='documentType'
                                                value={form.documentType}
                                                onChange={(value) => handleSelectChange('documentType', value)}
                                                options={optionId}
                                            />
                                            {errors.documentType && <p className={errorStyle}>{errors.documentType}</p>}
                                        </div>
                                        <div className=''>
                                            <Input
                                                iName='documentNumber'
                                                isFor='documentNumber'
                                                iType='text'
                                                iValue={form.documentNumber}
                                                iChange={handleChange}
                                                iHolder='Ingresa tu número de documento'
                                            />
                                            {errors.documentNumber && <p className={errorStyle}>{errors.documentNumber}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='mb-3 mr-4'>
                                        <h2 className='text-white font-semibold'>
                                            Habilidades Técnicas y Sociales
                                        </h2>
                                        <p className='text-white'>
                                            Ingresa tus habilidades técnicas (Ej. Operación en maquinaria pesada.)
                                            <br /> Ingresa tus habilidades sociales (Ej. Buena comunicación y trabajo en equipo.)
                                        </p>
                                        <Input
                                            iName='skillOne'
                                            isFor='skillOne'
                                            iType='text'
                                            iValue={form.skillOne}
                                            iChange={handleChange}
                                            iHolder='Ingresa nombre de tu habilidad técnica'
                                        />
                                        {errors.skillOne && <p className={errorStyle}>{errors.skillOne}</p>}
                                        <Input
                                            iName='skillTwo'
                                            isFor='skillTwo'
                                            iType='text'
                                            iValue={form.skillTwo}
                                            iChange={handleChange}
                                            iHolder='Ingresa nombre de tu habilidad técnica'
                                        />
                                        {errors.skillTwo && <p className={errorStyle}>{errors.skillTwo}</p>}
                                        <Input
                                            iName='skillThree'
                                            isFor='skillThree'
                                            iType='text'
                                            iValue={form.skillThree}
                                            iChange={handleChange}
                                            iHolder='Ingresa nombre de tu habilidad social'
                                        />
                                        {errors.skillThree && <p className={errorStyle}>{errors.skillThree}</p>}
                                        <Input
                                            iName='skillFour'
                                            isFor='skillFour'
                                            iType='text'
                                            iValue={form.skillFour}
                                            iChange={handleChange}
                                            iHolder='Ingresa nombre de tu habilidad social'
                                        />
                                        {errors.skillFour && <p className={errorStyle}>{errors.skillFour}</p>}
                                    </div>
                                    <div className='mr-4'>
                                        <h2 className='text-white font-semibold'>
                                            Estudios complementarios
                                        </h2>
                                        <p className='text-white'>Ej. Curso básico de programación. (En caso de tener estudios complementarios, agrega tus estudios básicos)</p>
                                        <Input
                                            iName='studiesOne'
                                            isFor='studiesOne'
                                            iType='text'
                                            iValue={form.studiesOne}
                                            iChange={handleChange}
                                            iHolder='Ingresa nombre de tu complementario'
                                        />
                                        {errors.studiesOne && <p className={errorStyle}>{errors.studiesOne}</p>}
                                        <Input
                                            iName='studiesTwo'
                                            isFor='studiesTwo'
                                            iType='text'
                                            iValue={form.studiesTwo}
                                            iChange={handleChange}
                                            iHolder='Ingresa nombre de tu complementario'
                                        />
                                        {errors.studiesTwo && <p className={errorStyle}>{errors.studiesTwo}</p>}
                                        <Input
                                            iName='studiesThree'
                                            isFor='studiesThree'
                                            iType='text'
                                            iValue={form.studiesThree}
                                            iChange={handleChange}
                                            iHolder='Ingresa nombre de tu complementario (Opcional)'
                                        />
                                        <Input
                                            iName='studiesFour'
                                            isFor='studiesFour'
                                            iType='text'
                                            iValue={form.studiesFour}
                                            iChange={handleChange}
                                            iHolder='Ingresa nombre de tu complementario (Opcional)'
                                        />
                                    </div>
                                </div>
                            </form>
                        }
                    />
                </div>

                <WelcomeText
                    text={<p className='welcome-paragraph'>
                        Nos alegra tener nuevos usuarios como tú en
                        <br /> nuestro aplicativo, esperamos que tu
                        <br /> experiencia sea agradable en PLP. </p>}
                    ilustration={registerIlustration}
                    imgDesc='Ilustración de inicio de sesión'
                    imgStyle='w-[450px] h-[450px]'
                />
            </motion.div>
        </div>
    )
}
