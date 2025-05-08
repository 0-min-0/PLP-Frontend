import React from 'react'
import profile from '../../assets/images/perfil.gif'
import { Button } from '../../UI/button'

export const SetPerfil = () => {
    return (
        <div className='w-[30%]'>
            <div className='border border-[#60efdb] py-6 px-8 mr-10 rounded-xl mt-8'>
                <div className='flex'>
                    <div>
                        <h2 className='text-xl text-[#405e7f] font-semibold mb-2'>Completa tu perfil</h2>
                        <p className='text-[#405e7f]'>
                            Aun hay informacion que falta por agregar a tu perfil, completalo ahora (la informacion que se pide de los usuarios para el perfil no es confidencial)
                        </p>
                    </div>
                    <img
                        src={profile}
                        alt='perfil'
                        className='w-35 h-35 ml-4'
                    />
                </div>
                <div className=' gap-4 pt-4'>
                    <Button
                        btnName='Completar'
                        btnType='button'
                        btnStyle='bg-[#60efdb] text-[#405e7f] font-semibold w-full mt-2'
                    />
                    <Button
                        btnName='Más tarde'
                        btnType='button'
                        btnStyle='bg-[#405e7f] text-white font-semibold w-full mt-4'
                    />
                </div>
            </div>
        </div>
    )
}

