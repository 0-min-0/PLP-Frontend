import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterContainer } from '../../../UI/RegisterContainer'
import { Header } from '../../Header/Header'
import { MainMenu } from '../../MainMenu/MainMenu'
import { Footer } from '../../Footer/Footer'
import { UserInput } from '../../../UI/UserInput'
import { Select } from '../../../UI/Select'
import { optionTown, optionGenre } from './options'
import { Button } from '../../../UI/Button'
import { WelcomeText } from '../../../UI/WelcomeText'
import registerIlustration from '../../../assets/images/register-ilustration.png'

export const DataJobSeeker = () => {

    const navigate = useNavigate()

    const [selectedTown, setSelectedTown] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('')
    const [userForm, setUserForm] = useState({
        userName: '',
        userLastname: '',
        userEmail: '',
        userMunicipio: '',
        userGenero: ''
    })

    const [errorRegister, setErrorRegister] = useState({
        errorName: '',
        errorLastname: '',
        errorEmail: '',
        errorTown: '',
        errorGenre: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        // Actualiza userForm con el municipio y género seleccionados
        const updatedForm = {
            ...userForm,
            userMunicipio: selectedTown,
            userGenero: selectedGenre
        }

        setUserForm(updatedForm)

        // Validaciones simples
        const newErrors = {
            errorName: updatedForm.userName ? '' : 'ⓘ El nombre es requerido',
            errorLastname: updatedForm.userLastname ? '' : 'ⓘ El apellido es requerido',
            errorEmail: updatedForm.userEmail ? '' : 'ⓘ El correo o número de teléfono es requerido',
            errorTown: updatedForm.userMunicipio ? '' : 'ⓘ El municipio es requerido',
            errorGenre: updatedForm.userGenero ? '' : 'ⓘ El género es requerido'
        }

        setErrorRegister(newErrors)

        const hasErrors = Object.values(newErrors).some(error => error !== '')

        if (!hasErrors) {
            navigate('/inicio')
        }
    }

    return (
        <div className='w-full min-h-screen p-6 border-2 rounded-2xl border-[#405e7f]/70'>
            <Header
                headerClass='w-full flex justify-between items-center'
                middleObject={
                    <h1 className='text-6xl text-[#405e7f] ml-10 font-[arialBold] items-end'>
                        Plataforma Laboral Proactiva
                    </h1>
                }
                menu={<MainMenu />}
            />
            <div className='flex justify-center items-start pt-26 gap-20'>
                <RegisterContainer
                    width='w-[35%]'
                    form={
                        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-6 mt-4'>
                            <div className='flex w-full gap-6'>
                                <div className='w-full'>
                                    <UserInput
                                        labelTitle='Nombre'
                                        isFor='userName'
                                        iType='text'
                                        iValue={userForm.userName}
                                        iName='userName'
                                        iChange={(e) => setUserForm({ ...userForm, userName: e.target.value })}
                                    />
                                    {errorRegister.errorName && (
                                        <p className='text-red-400 text-6 mt-1 ml-4'>{errorRegister.errorName}</p>
                                    )}
                                </div>
                                <div className='w-full'>
                                    <UserInput
                                        labelTitle='Apellido'
                                        isFor='userLastname'
                                        iType='text'
                                        iValue={userForm.userLastname}
                                        iName='userLastname'
                                        iChange={(e) => setUserForm({ ...userForm, userLastname: e.target.value })}
                                    />
                                    {errorRegister.errorLastname && (
                                        <p className='text-red-400 text-6 mt-1 ml-4'>{errorRegister.errorLastname}</p>
                                    )}
                                </div>
                            </div>
                            <div className='w-full'>
                                <UserInput
                                    labelTitle='Correo electrónico o numero de teléfono'
                                    isFor='userEmail'
                                    iType='text'
                                    iValue={userForm.userEmail}
                                    iName='userEmail'
                                    iChange={(e) => setUserForm({ ...userForm, userEmail: e.target.value })}
                                />
                                {errorRegister.errorEmail && (
                                    <p className='text-red-400 text-6 mt-1'>{errorRegister.errorEmail}</p>
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
                                        <p className='text-red-400 text-6 mt-1'>{errorRegister.errorTown}</p>
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
                                        <p className='text-red-400 text-6 mt-1'>{errorRegister.errorGenre}</p>
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
                    imgStyle='w-[500px] h-[500px]'
                />
            </div>
            <div className='py-8'>
            <Footer />
            </div>
        </div>
    )
}
