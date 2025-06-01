import { motion } from 'framer-motion'
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineOfficeBuilding,
    HiOutlineLocationMarker,
    HiOutlineBriefcase,
    HiOutlineUser,
    HiOutlineClock,
    HiOutlineCurrencyDollar,
    HiOutlineClipboardList,
    HiOutlineTag
} from 'react-icons/hi'
import { getCategoryLabel } from '../../Utils/options'

export const VacancyInfo = ({ vacancy }) => {
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
                <div className='mb-6'>
                    <h5 className='font-bold text-xl text-[#405e7f] mb-4'>Información de la Empresa</h5>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex items-start gap-3'>
                            <HiOutlineOfficeBuilding className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[#405e7f]'>Empresa/Emprendimiento</p>
                                <p>{vacancy.company || 'No especificado'}</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <HiOutlineLocationMarker className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[#405e7f]'>Ubicación</p>
                                <p>{vacancy.location}</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <HiOutlineTag className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[#405e7f]'>Sector</p>
                                <p>Tecnología</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-6'>
                    <h5 className='font-semibold text-lg text-[#405e7f] mb-3'>Contacto</h5>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex items-start gap-3'>
                            <HiOutlineUser className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[#405e7f]'>Persona de contacto</p>
                                <p>{vacancy.contactPerson || 'No especificado'}</p>
                            </div>
                        </div>
                        {vacancy.contact.includes('@') ? (
                            <div className='flex items-start gap-3'>
                                <HiOutlineMail className='w-5 h-5 text-[#60efdb] mt-1' />
                                <div>
                                    <p className='font-semibold text-[#405e7f]'>Correo electrónico</p>
                                    <p>{vacancy.contact}</p>
                                </div>
                            </div>
                        ) : (
                            <div className='flex items-start gap-3'>
                                <HiOutlinePhone className='w-5 h-5 text-[#60efdb] mt-1' />
                                <div>
                                    <p className='font-semibold text-[#405e7f]'>Teléfono</p>
                                    <p>{vacancy.contact}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='mb-6'>
                    <h5 className='font-semibold text-lg text-[#405e7f] mb-3'>Descripción de la empresa</h5>
                    <p className='text-gray-700'>
                        {vacancy.companyDescription || 'Somos una empresa de tecnología en busca de problemáticas alrededor para darles soluciones innovadoras y eficientes.'}
                    </p>
                </div>
            </motion.div>

            <motion.hr
                className='border-t border-gray-200 mb-6'
                variants={itemVariants}
            />

            {/* Información de la vacante */}
            <motion.div variants={itemVariants}>
                <h4 className='text-xl font-semibold text-[#405e7f] mb-4'>Detalles de la Vacante</h4>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <div className='flex items-start gap-3'>
                        <HiOutlineBriefcase className='w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='font-semibold text-[#405e7f]'>Nombre del puesto</p>
                            <p>{vacancy.title || vacancy.vacancyName}</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <HiOutlineClock className='w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='font-semibold text-[#405e7f]'>Disponibilidad</p>
                            <p>{vacancy.availability}</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <HiOutlineTag className='w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='font-semibold text-[#405e7f]'>Categoría</p>
                            <p>{getCategoryLabel(vacancy.category)}</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <HiOutlineCurrencyDollar className='w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='font-semibold text-[#405e7f]'>Salario estimado</p>
                            <p>{vacancy.salary || 'A convenir'}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.hr
                className='border-t border-gray-200 mb-6'
                variants={itemVariants}
            />

            {/* Responsabilidades */}
            <motion.div variants={itemVariants}>
                <h4 className='text-xl font-semibold text-[#405e7f] mb-4'>Responsabilidades</h4>
                <div className='flex items-start gap-3'>
                    <HiOutlineClipboardList className='w-5 h-5 text-[#60efdb] mt-1' />
                    <div className='text-gray-700'>
                        {vacancy.responsibilities.split('\n').map((item, i) => (
                            <p key={i} className='mb-2'>{item}</p>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}