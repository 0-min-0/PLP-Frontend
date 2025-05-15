import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../Header/Header'
import { MainMenu } from '../../MainMenu/MainMenu'
import { FormsContainer } from '../../../UI/FormsContainer'
import { optionSubrol } from '../../../Utils/options'
import { Select } from '../../../UI/Select'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/button'
import { WelcomeText } from '../../../UI/WelcomeText'
import registerIlustration from '../../../assets/images/register-ilustration.png'

export const RegisterSubrol = () => {

    const [selectedSubrol, setSelectedSubrol] = useState('')

    return (
        <div className='w-full min-h-screen p-6 border-2 rounded-2xl border-[#405e7f]/70'>
            <Header
                middleObject={
                    <h1 className='text-6xl text-[#405e7f] ml-10 font-[afacadBold] items-end'>
                        Plataforma Laboral Proactiva
                    </h1>
                }
                menu={<MainMenu />}
            />
            <div className='flex justify-center items-start pt-16 gap-20'>
                <FormsContainer
                    width='w-[35%]'
                    bgColor='#dcfff6'
                    textColor='#405e7f'
                    title='Registrarse'
                    changeForm={<p className='text-[#405e7f] pt-4'>
                        ¿Ya estás registrado en nuestra plataforma?{' '}
                        <NavLink to='/acceder' className='text-[#405e7f] font-semibold hover:underline hover:text-[#405e7f]/60'>
                            Iniciar sesión
                        </NavLink>
                    </p>}
                    form={
                        <form action='' className='w-full flex flex-col items-center gap-4'>
                            <div className='w-full'>
                                <Select
                                    label='Subrol'
                                    desc='Los subroles están para hacer más accesible el aplicativo, si se trata de una empresa/emprendimiento selecciona el rol “contratante formal”, si se trata de una persona que busca soluciones rápidas y momentáneas selecciona el rol “contratante informal”.'
                                    value={selectedSubrol}
                                    onChange={setSelectedSubrol}
                                    options={optionSubrol}
                                />
                            </div>
                            <div className='w-full'>
                                <Input
                                    labelTitle='Número de teléfono'
                                    iName='phoneSubrol'
                                    isFor='phoneSubrol'
                                    iType='tel'
                                    iHolder='Ingresa número de teléfono (Ej. 3123456789)'
                                />
                            </div>
                            <div className='w-full mb-4'>
                                <Input
                                    labelTitle='Correo electrónico'
                                    iName='emailSubrol'
                                    isFor='emailSubrol'
                                    iType='email'
                                    iHolder='Ingresa correo electrónico (Ej. correo@ejemplo.com)'
                                />
                            </div>
                            <Button
                                btnType='submit'
                                btnStyle='w-[30%] bg-[#405e7f] text-white font-bold mb-6'
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
        </div>
    )
}
