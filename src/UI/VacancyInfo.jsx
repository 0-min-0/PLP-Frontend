import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

export const VacancyInfo = ({ vacancy }) => {
    // Animaciones para los elementos internos
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 0.5
            }
        }
    }

    return (
        <motion.div 
            className='w-full px-12 max-h-[65vh] overflow-y-auto scrollbar-custom'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Información de la empresa */}
            <motion.div variants={itemVariants}>
                <div className='mb-4'>
                    <h5 className='font-bold text-xl text-[#405e7f] mb-3'>Información de la empresa</h5>
                    <div className='space-y-2'>
                        <p><span className='font-semibold text-[#405e7f]'>Nombre de la empresa/contratante:</span> {vacancy.company}</p>
                        <p><span className='font-semibold text-[#405e7f]'>Ubicación(es) de la empresa:</span> {vacancy.location}</p>
                        <p><span className='font-semibold text-[#405e7f]'>Sector:</span> Tecnología</p>
                    </div>
                </div>

                <div className='mb-4'>
                    <h5 className='font-semibold text-[#405e7f] mb-2'>Contacto</h5>
                    <div className='space-y-1'>
                        <p className='flex items-center gap-2'>
                            <HiOutlineMail className='w-5 h-5 text-[#405e7f]' />
                            {vacancy.contact.includes('@') ? vacancy.contact : 'No especificado'}
                        </p>
                        <p className='flex items-center gap-2'>
                            <HiOutlinePhone className='w-5 h-5 text-[#405e7f]' />
                            {!vacancy.contact.includes('@') ? vacancy.contact : 'No especificado'}
                        </p>
                    </div>
                </div>

                <div className='mb-4'>
                    <h5 className='font-semibold text-[#405e7f] mb-2'>Descripción de la empresa</h5>
                    <p>Somos una empresa de tecnología en busca de problemáticas alrededor para darles soluciones innovadoras y eficientes.</p>
                </div>
            </motion.div>
            
            <motion.hr 
                className='border-t border-gray-200 mb-8' 
                variants={itemVariants}
            />
            
            {/* Información de la vacante */}
            <motion.div className='mb-8' variants={itemVariants}>
                <h4 className='text-xl font-semibold text-[#405e7f] mb-4'>Información de la vacante</h4>

                <motion.div className='space-y-4'>
                    <motion.div variants={itemVariants}>
                        <h5 className='font-semibold text-[#405e7f]'>Nombre de la vacante:</h5>
                        <p>{vacancy.title || vacancy.vacancyName}</p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <h5 className='font-semibold text-[#405e7f]'>Persona de contacto:</h5>
                        <p>{vacancy.contactPerson}</p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <h5 className='w-[] font-semibold text-[#405e7f]'>Responsabilidades y tareas:</h5>
                        <p>{vacancy.responsibilities}</p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <h5 className='font-semibold text-[#405e7f]'>Salario estimado:</h5>
                        <p>{vacancy.salary}</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}