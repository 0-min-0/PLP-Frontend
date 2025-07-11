import React from 'react'
import { motion } from 'framer-motion'
import contactIlustration from '../../assets/images/ilustration-contact.png'
import { Input } from '../../UI/Input'
import { Desc } from '../../UI/Desc'
import { Button } from '../../UI/button'
import { useContact } from '../../Context/ContactContext'

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

export const Contact = () => {
    const { formData, errors, handleChange, handleSubmit, isLoading } = useContact()

    return (
        <div className='about-responsive bg-[#405e7f] px-24 py-16'>
            <div className='contact-responsive contact-inner-container rounded-xl'>
                <motion.h2
                    className='contact-title text-5xl font-[afacadBold] px-15 pt-12'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    Contactanos y dejanos tus comentarios
                </motion.h2>
                <div className='contact-content w-full flex items-center pl-25 pr-40 py-12 gap-12'>
                    <motion.img
                        src={contactIlustration}
                        alt='Ilustracion contacto'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInRight}
                        className='contact-ilustration w-130 h-auto'
                    />
                    <motion.div
                        className='w-full'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInLeft}
                    >
                        <div className='contact-text text-lg'>
                            <p>Escribe tu nombre y tu correo electronico, dejanos un comentario y cuentanos tu
                                experiencia en PLP o escribe tus dudas y sugerencias para hacer crecer nuestro
                                aplicativo, hacerlo mas eficiente y cómodo para nuestros usuarios.</p>
                        </div>
                        <form className='comment-container w-full mt-6' onSubmit={handleSubmit} noValidate>
                            <div className='contact-content-1 flex gap-4 mb-4'>
                                <div className='flex-1'>
                                    <Input
                                        labelTitle='Nombre completo'
                                        iHolder='Ingresa tu nombre completo'
                                        iName='name'
                                        iValue={formData.name}
                                        iChange={handleChange}
                                        error={errors.name}
                                    />
                                </div>

                                <div className='flex-1'>
                                    <Input
                                        labelTitle='Correo electrónico'
                                        iHolder='Ingresa tu correo electrónico'
                                        iName='email'
                                        iValue={formData.email}
                                        iChange={handleChange}
                                        error={errors.email}
                                        iType='email'
                                    />
                                </div>
                            </div>
                            <div className='contact-content-2 mb-4'>
                                <Desc
                                    nameDesc='Comentario/Sugerencia'
                                    holderDesc='Ingresa tu comentario o sugerencia'
                                    height='h-40'
                                    name='comment'
                                    value={formData.comment}
                                    onChange={handleChange}
                                    error={errors.comment}
                                    color='select-label-dark'
                                />
                            </div>
                            {errors.general && (
                                <div className='error-responsive mb-2 error text-sm'>{errors.general}</div>
                            )}
                            <Button
                                btnName={isLoading ? 'Enviando...' : 'Enviar'}
                                btnType='submit'
                                btnStyle='send-contact-button w-full mt-4 text-[#405e7f] bg-[#90d7db]'
                                disabled={isLoading}
                            />
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}