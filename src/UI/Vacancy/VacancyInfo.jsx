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
    HiOutlineTag,
    HiOutlineGlobeAlt,
    HiOutlineIdentification
} from 'react-icons/hi'

import { getCategoryLabel } from '../../Utils/options'

// COMPONENTE PRINCIPAL
export const VacancyInfo = ({ vacancy, user }) => {
    const isEmployer = user?.role === 'Contratante'
    const isCompany = user?.role === 'Empresa'

    return (
        <div className='sub-info-container-user w-full px-12 max-h-[65vh] overflow-y-auto scrollbar-custom'>
            {/* Información del contratante o empresa */}
            <div>
                <div className='company-info mb-6'>
                    <h5 className='subtitle-section font-bold text-xl text-[color:var(--color-card-text)] mb-4'>
                        {isEmployer ? 'Información del Contratante' : 'Información de la Empresa'}
                    </h5>

                    <div className='columns-info grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='sub-columns-info flex items-start gap-3'>
                            <HiOutlineIdentification className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='text font-semibold text-[color:var(--color-card-text)]'>
                                    {isEmployer ? 'Nombre' : 'Empresa'}
                                </p>
                                <p className='text'>{isEmployer ? user.nameEmployer : user.nameCompany}</p>
                            </div>
                        </div>

                        <div className='sub-columns-info flex items-start gap-3'>
                            <HiOutlineLocationMarker className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='text font-semibold text-[color:var(--color-card-text)]'>Ubicación</p>
                                <p className='text'>{isEmployer ? user.townEmployer : user.townCompany}</p>
                            </div>
                        </div>

                        {isCompany && (
                            <div className='sub-columns-info flex items-start gap-3'>
                                <HiOutlineTag className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                                <div>
                                    <p className='text font-semibold text-[color:var(--color-card-text)]'>Categoría</p>
                                    <p className='text'>{user.category || 'No especificado'}</p>
                                </div>
                            </div>
                        )}

                        {isCompany && (
                            <div className='sub-columns-info flex items-start gap-3'>
                                <HiOutlineGlobeAlt className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                                <div>
                                    <p className='text font-semibold text-[color:var(--color-card-text)]'>Sitio web</p>
                                    <p className='text'>{user.webSite || 'No especificado'}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='desc-company mb-6'>
                    <h5 className='text font-semibold text-lg text-[color:var(--color-card-text)] mb-2'>Descripción</h5>
                    <p className='text text-[color:var(--color-card-text)]'>
                        {isEmployer ? user.descEmployer : user.descCompany || 'No especificado'}
                    </p>
                </div>
            </div>

            <hr className='hr border-t border-gray-200 mb-6' />

            {/* Información de la vacante */}
            <div>
                <h4 className='subtitle-section text-xl font-semibold text-[color:var(--color-card-text)] mb-4'>Detalles de la Vacante</h4>
                <div className='columns-info-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <div className='sub-columns-info flex items-start gap-3'>
                        <HiOutlineBriefcase className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='text font-semibold text-[color:var(--color-card-text)]'>Nombre del puesto</p>
                            <p className='text'>{vacancy.title || vacancy.vacancyName}</p>
                        </div>
                    </div>

                    <div className='sub-columns-info flex items-start gap-3'>
                        <HiOutlineUser className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='text font-semibold text-[color:var(--color-card-text)]'>Persona de contacto</p>
                            <p className='text'>{vacancy.contactPerson || 'No especificado'}</p>
                        </div>
                    </div>

                    {vacancy.contact.includes('@') ? (
                        <div className='sub-columns-info flex items-start gap-3'>
                            <HiOutlineMail className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='text font-semibold text-[color:var(--color-card-text)]'>Correo electrónico</p>
                                <p className='text'>{vacancy.contact}</p>
                            </div>
                        </div>
                    ) : (
                        <div className='sub-columns-info flex items-start gap-3'>
                            <HiOutlinePhone className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='text font-semibold text-[color:var(--color-card-text)]'>Teléfono</p>
                                <p className='text'>{vacancy.contact}</p>
                            </div>
                        </div>
                    )}

                    <div className='sub-columns-info flex items-start gap-3'>
                        <HiOutlineClock className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='text font-semibold text-[color:var(--color-card-text)]'>Disponibilidad</p>
                            <p className='text'>{vacancy.availability}</p>
                        </div>
                    </div>

                    <div className='sub-columns-info flex items-start gap-3'>
                        <HiOutlineTag className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='text font-semibold text-[color:var(--color-card-text)]'>Categoría</p>
                            <p className='text'>{getCategoryLabel(vacancy.category)}</p>
                        </div>
                    </div>

                    <div className='sub-columns-info flex items-start gap-3'>
                        <HiOutlineCurrencyDollar className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                        <div>
                            <p className='text font-semibold text-[color:var(--color-card-text)]'>Salario estimado</p>
                            <p className='text'>{vacancy.salary || 'A convenir'}</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='hr border-t border-gray-200 mb-6' />

            {/* Responsabilidades */}
            <div>
                <h4 className='subtitle-section text-xl font-semibold text-[color:var(--color-card-text)] mb-4'>Responsabilidades</h4>
                <div className='sub-columns-info flex items-start gap-3'>
                    <HiOutlineClipboardList className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                    <div className='text text-[color:var(--color-card-text)]'>
                        {vacancy.responsibilities.split('\n').map((item, i) => (
                            <p key={i} className='mb-2'>{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ==============================
// EJEMPLOS DE USUARIO Y VACANTE
// ==============================
