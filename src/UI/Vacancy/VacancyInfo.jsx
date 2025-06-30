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

    return (
        <div className='w-full px-12 max-h-[65vh] overflow-y-auto scrollbar-custom'>
            {/* Información de la empresa */}
            <div>
                <div className='mb-6'>
                    <h5 className='font-bold text-xl text-[color:var(--color-card-text)] mb-4'>Información de la Empresa</h5>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex items-start gap-3'>
                            <HiOutlineOfficeBuilding className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[color:var(--color-card-text)]'>Empresa/Emprendimiento</p>
                                <p>{vacancy.company || 'No especificado'}</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <HiOutlineLocationMarker className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[color:var(--color-card-text)]'>Ubicación</p>
                                <p>{vacancy.location}</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <HiOutlineTag className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[color:var(--color-card-text)]'>Sector</p>
                                <p>Tecnología</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-6'>
                    <h5 className='font-semibold text-lg text-[color:var(--color-card-text)] mb-3'>Descripción de la empresa</h5>
                    <p className='text-[color:var(--color-card-text)]'>
                        {vacancy.companyDescription || 'Somos una empresa de tecnología en busca de problemáticas alrededor para darles soluciones innovadoras y eficientes.'}
                    </p>
                </div>
            </div>

            <hr className='border-t border-gray-200 mb-6' />
            {/* Información de la vacante */}
            <div>
                <h4 className='text-xl font-semibold text-[color:var(--color-card-text)] mb-4'>Detalles de la Vacante</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <div className='flex items-start gap-3'>
                        <HiOutlineBriefcase className='w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='font-semibold text-[color:var(--color-card-text)]'>Nombre del puesto</p>
                            <p>{vacancy.title || vacancy.vacancyName}</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <HiOutlineUser className='w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='font-semibold text-[color:var(--color-card-text)]'>Persona de contacto</p>
                            <p>{vacancy.contactPerson || 'No especificado'}</p>
                        </div>
                    </div>
                    {vacancy.contact.includes('@') ? (
                        <div className='flex items-start gap-3'>
                            <HiOutlineMail className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[color:var(--color-card-text)]'>Correo electrónico</p>
                                <p>{vacancy.contact}</p>
                            </div>
                        </div>
                    ) : (
                        <div className='flex items-start gap-3'>
                            <HiOutlinePhone className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[color:var(--color-card-text)]'>Teléfono</p>
                                <p>{vacancy.contact}</p>
                            </div>
                        </div>
                    )}
                    <div className='flex items-start gap-3'>
                        <HiOutlineClock className='w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='font-semibold text-[color:var(--color-card-text)]'>Disponibilidad</p>
                            <p>{vacancy.availability}</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <HiOutlineTag className='w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='font-semibold text-[color:var(--color-card-text)]'>Categoría</p>
                            <p>{getCategoryLabel(vacancy.category)}</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <HiOutlineCurrencyDollar className='w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='font-semibold text-[color:var(--color-card-text)]'>Salario estimado</p>
                            <p>{vacancy.salary || 'A convenir'}</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='border-t border-gray-200 mb-6' />
            {/* Responsabilidades */}
            <div>
                <h4 className='text-xl font-semibold text-[color:var(--color-card-text)] mb-4'>Responsabilidades</h4>
                <div className='flex items-start gap-3'>
                    <HiOutlineClipboardList className='w-5 h-5 text-[#60efdb] mt-1' />
                    <div className='text-[color:var(--color-card-text)]'>
                        {vacancy.responsibilities.split('\n').map((item, i) => (
                            <p key={i} className='mb-2'>{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}