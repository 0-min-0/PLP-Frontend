import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { FormsContainer } from '../../../UI/FormsContainer'
import { Header } from '../../Header/Header'
import { MainMenu } from '../../MainMenu/MainMenu'
import { Footer } from '../../Footer/Footer'
import { Input } from '../../../UI/Input'
import { Select } from '../../../UI/Select'
import { optionTown, optionGenre } from '../../../Utils/options'
import { Button } from '../../../UI/button'
import { WelcomeText } from '../../../UI/WelcomeText'
import registerIlustration from '../../../assets/images/register-ilustration.png'

export const DataJobSeeker = () => {

    const navigate = useNavigate()

    const pStyle = 'text-red-400 text-sm mt-1 font-semibold'

    const [selectedTown, setSelectedTown] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('')
    const [userForm, setUserForm] = useState({
        userName: '',
        userEmail: '',
        userMunicipio: '',
        userGenero: ''
    })

    const [errorRegister, setErrorRegister] = useState({
        errorName: '',
        errorEmail: '',
        errorTown: '',
        errorGenre: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedForm = {
            ...userForm,
            userMunicipio: selectedTown,
            userGenero: selectedGenre
        }

        setUserForm(updatedForm)

        const newErrors = {
            errorName: updatedForm.userName ? '' : 'ⓘ El nombre de usuario es requerido',
            errorEmail: updatedForm.userEmail ? '' : 'ⓘ El correo o número de teléfono es requerido',
            errorTown: updatedForm.userMunicipio ? '' : 'ⓘ El municipio es requerido',
            errorGenre: updatedForm.userGenero ? '' : 'ⓘ El género es requerido'
        }

        setErrorRegister(newErrors)

        const hasErrors = Object.values(newErrors).some(error => error !== '')

        if (!hasErrors) {
            navigate('/crear-cuenta/contratista/crear-contraseña')
        }
    }

    return (
        <div className='w-full min-h-screen p-6 border-2 rounded-2xl border-[#405e7f]/70'>
            <Header
                headerClass='w-full flex justify-between items-center'
                middleObject={
                    <h1 className='text-6xl text-[#405e7f] ml-10 font-[afacadBold] items-end'>
                        Plataforma Laboral Proactiva
                    </h1>
                }
                menu={<MainMenu />}
            />
            <div className='flex justify-center items-start pt-26 gap-20'>
                <FormsContainer
                    width='w-[35%]'
                    bgColor='#dcfff6'
                    textColor='#405e7f'
                    title='Registrarse'
                    changeForm={
                        <p className='text-[#405e7f] pt-4'>
                            ¿Ya estás registrado en nuestra plataforma?{' '}
                            <NavLink to='/acceder' className='text-[#405e7f] font-semibold hover:underline hover:text-[#405e7f]/60'>
                                Iniciar sesión
                            </NavLink>
                        </p>}
                    form={
                        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-4 my-6'>
                            <div className='w-full'>
                                <Input
                                    labelTitle='Nombre de usuario'
                                    isFor='userName'
                                    iType=''
                                    iHolder='Elije un nombre de usuario (Ej. usuario_123)'
                                    iValue={userForm.userName}
                                    iName='userName'
                                    iChange={(e) => setUserForm({ ...userForm, userName: e.target.value })}
                                />
                                {errorRegister.errorName && (
                                    <p className={pStyle}>{errorRegister.errorName}</p>
                                )}
                            </div>
                            <div className='w-full'>
                                <Input
                                    labelTitle='Correo electrónico o numero de teléfono'
                                    isFor='userEmail'
                                    iType={'email' || 'tel'}
                                    iHolder='Ej. usuario01@ejemplo.com o 3001234567'
                                    iValue={userForm.userEmail}
                                    iName='userEmail'
                                    iChange={(e) => setUserForm({ ...userForm, userEmail: e.target.value })}
                                />
                                {errorRegister.errorEmail && (
                                    <p className={pStyle}>{errorRegister.errorEmail}</p>
                                )}
                            </div>
                            <div className='flex w-full gap-6 mb-4'>
                                <div className='w-1/2'>
                                    <Select
                                        label='Municipio'
                                        value={selectedTown}
                                        onChange={setSelectedTown}
                                        options={optionTown}
                                    />
                                    {errorRegister.errorTown && (
                                        <p className={pStyle}>{errorRegister.errorTown}</p>
                                    )}
                                </div>
                                <div className='w-1/2'>
                                    <Select
                                        label='Género'
                                        value={selectedGenre}
                                        onChange={setSelectedGenre}
                                        options={optionGenre}
                                    />
                                    {errorRegister.errorGenre && (
                                        <p className={pStyle}>{errorRegister.errorGenre}</p>
                                    )}
                                </div>
                            </div>
                            <Button
                                btnType='submit'
                                btnStyle='w-[30%] bg-[#405e7f] text-white font-bold'
                                btnName='Continuar'
                            />
                        </form>
                    }
                />
                <WelcomeText
                    text={<p> Nos alegra tener nuevos usuarios
                        <br /> como tu en nuestro aplicativo,
                        <br /> esperamos que tu experiencia
                        <br /> sea agradable en PLP. </p>}
                    ilustration={registerIlustration}
                    imgDesc='Ilustración de inicio de sesión'
                    imgStyle='w-[400px] h-[400px]'
                />
            </div>
            <div className='py-8'>
                <Footer />
            </div>
        </div>
    )
}
