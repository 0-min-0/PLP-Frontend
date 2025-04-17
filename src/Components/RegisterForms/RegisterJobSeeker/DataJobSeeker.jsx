import { useState } from 'react'
import { RegisterContainer } from '../../../UI/RegisterContainer'
import { Header } from '../../Header/Header'
import { MainMenu } from '../../MainMenu/MainMenu'
import { Footer } from '../../Footer/Footer'
import { UserInput } from '../../../UI/UserInput'

export const DataJobSeeker = () => {
    const [selectedOption, setSelectedOption] = useState('')
    const [userForm, setUserForm] = useState({
        userName: '',
        userLastname: '',
        userEmail: '',
        userMunicipio: '',
        userGenero: ''
    })

    const options = [
        { value: '', label: 'No seleccionado' },
        { value: 'quindio', label: 'Quindío' },
        { value: 'antioquia', label: 'Antioquia' },
        { value: 'valle', label: 'Valle del Cauca' },
    ]


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
            <div>
                <RegisterContainer
                    width='w-[35%]'
                    form={
                        <form onSubmit='' className='w-full flex flex-col items-center gap-6'>
                            <div className='flex w-full gap-6'>
                                {/* Input para el nombre */}
                                <UserInput
                                    labelTitle='Nombre'
                                    iFor='userName'
                                    iType='text'
                                    iValue={userForm.userName}
                                    iName='userName'
                                    iChange={(e) => setUserForm({ ...userForm, userName: e.target.value })}
                                />

                                {/* Input para el apellido */}
                                <UserInput
                                    labelTitle='Apellido'
                                    iFor='userLastname'
                                    iType='text'
                                    iValue={userForm.userName}
                                    iName='userLastname'
                                    iChange={(e) => setUserForm({ ...userForm, userLastname: e.target.value })}
                                />
                            </div>
                            <div className='w-full'>
                            <UserInput
                                    labelTitle='Correo electrónico o numero de teléfono'
                                    iFor='userLastname'
                                    iType='text'
                                    iValue={userForm.userName}
                                    iName='userLastname'
                                    iChange={(e) => setUserForm({ ...userForm, userLastname: e.target.value })}
                                />
                            </div>
                            <div className='flex w-full'>
                                <div className="relative">
                                    <h2>Municipio</h2>
                                    <select
                                        value={selectedOption}
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                        className="w-full p-4 pr-10 text-[#405e7f] bg-white border-2 border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-[#60efdb] focus:ring-2 focus:ring-[#60efdb]/30 cursor-pointer"
                                    >
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative">
                                    <h2>Genero</h2>
                                    <select
                                        value={selectedOption}
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                        className="w-full p-4 pr-10 text-[#405e7f] bg-white border-2 border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-[#60efdb] focus:ring-2 focus:ring-[#60efdb]/30 cursor-pointer"
                                    >
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </form>
                    }
                />
            </div>
            <Footer />
        </div>
    )
}
