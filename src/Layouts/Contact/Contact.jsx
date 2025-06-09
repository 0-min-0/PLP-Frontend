import React from 'react'
import contactIlustration from '../../assets/images/ilustration-contact.png'
import { Input } from '../../UI/Input'
import { Desc } from '../../UI/Desc'
import { Button } from '../../UI/button'

export const Contact = () => {
    return (
        <div className='bg-[#405e7f] px-24 py-16'>
            <div className='bg-white rounded-xl'>
                <h2 className='text-5xl font-[afacadBold] text-[#405e7f] mx-15 pt-12'>
                    Contactanos y dejanos tus comentarios
                </h2>
                <div className='w-full flex p-8 items-center px-40 py-12'>
                    <img src={contactIlustration} alt='Ilustracion contacto' />
                    <div className='w-full'>
                        <div className='text-[#405e7f] text-lg'>
                            <p>Escribe tu nombre y tu correo electronico, dejanos un comentario y cuentanos tu
                            experiencia en PLP o escribe tus dudas y sugerencias para hacer crecer nuestro
                            aplicativo, hacerlo mas eficiente y cómodo para nuestros usuarios.</p>
                        </div>
                        <div className='w-full mt-6'>
                            <div className='flex gap-4 mb-4'>
                                <Input
                                    labelTitle='Nombre completo'
                                    iHolder='Ingresa tu nombre completo'
                                />
                                <Input
                                    labelTitle='Correo electrónico'
                                    iHolder='Ingresa tu correo electrónico'
                                />
                            </div>
                            <Desc
                                nameDesc='Comentario/Sugerencia'
                                holderDesc='Ingresa tu comentario o sugerencia'
                                height = 'h-40'
                            />
                            <Button
                                btnName='Enviar'
                                btnType='submit'
                                btnStyle='w-full mt-4 text-[#405e7f] bg-[#60efdb]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


