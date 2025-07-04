import { HiOutlineMail, HiOutlinePhone, HiOutlineAcademicCap, HiOutlineUser, HiOutlineMap, HiOutlineBriefcase, HiOutlineChatAlt } from 'react-icons/hi'

export const PersonInfo = ({ person }) => {
    return (
        <div className='sub-info-container-user w-full px-12 max-h-[65vh] overflow-y-auto scrollbar-custom'>
            {/* Información personal */}
            <div>
                <div className='company-info mb-6'>
                    <h5 className='subtitle-section font-bold text-xl text-[color:var(--color-card-text)] mb-3'>Información Personal</h5>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='sub-columns-info flex items-start gap-3'>
                            <HiOutlineUser className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='text font-semibold text-[color:var(--color-card-text)]'>Nombre completo</p>
                                <p className='text'>{person.name}</p>
                            </div>
                        </div>
                        <div className='text sub-columns-info flex items-start gap-3'>
                            <HiOutlineMap className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[color:var(--color-card-text)]'>Ubicación</p>
                                <p>{person.town}</p>
                            </div>
                        </div>
                        <div className='text sub-columns-info flex items-start gap-3'>
                            <HiOutlineMail className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[color:var(--color-card-text)]'>Correo electrónico</p>
                                <p>{person.email}</p>
                            </div>
                        </div>
                        <div className='text sub-columns-info flex items-start gap-3'>
                            <HiOutlinePhone className='ilustration-icons w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[color:var(--color-card-text)]'>Teléfono</p>
                                <p>{person.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='hr border-t border-gray-200 mb-6' />

            {/* Descripción personal */}
            {person.personalDescription && (
                <div className='desc-company mb-6'>
                    <h4 className='title-desc-company text-xl font-semibold text-[color:var(--color-card-text)] mb-4'>Sobre mí</h4>
                    <p className='text text-[color:var(--color-card-text)]'>{person.personalDescription}</p>
                </div>
            )}

            <hr className='hr border-t border-gray-200 mb-6' />

            {/* Habilidades */}
            {person.skills?.length > 0 && (
                <div className='desc-company mb-6'>
                    <h4 className='title-desc-company text-xl font-semibold text-[color:var(--color-card-text)] mb-4'>Habilidades</h4>
                    <div className='skills flex flex-wrap gap-2'>
                        {person.skills.map((skill, index) => (
                            <span
                                key={index}
                                className='skill-space bg-[#dcfff6] text-[#405e7f] px-3 py-1 rounded-full text-sm'
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <hr className='hr border-t border-gray-200 mb-6' />

            {/* Formación académica */}
            {person.studies && (
                <div className='desc-company mb-6'>
                    <h4 className='title-desc-company text-xl font-semibold text-[color:var(--color-card-text)] mb-4'>Estudios y complementarios</h4>
                    <div className='skills flex items-center gap-3'>
                        <HiOutlineAcademicCap className='ilustration-icons w-6 h-6 text-[#60efdb] mt-1' />
                        <p className='text'>{person.studies}</p>
                    </div>
                </div>
            )}

            {/* Sección de Comentarios */}
            {person.comments?.length > 0 && (
                <>
                    <hr className='hr border-t border-gray-200 mb-6' />
                    
                    <div className='desc-company mb-6'>
                        <h4 className='title-desc-company text-xl font-semibold text-[color:var(--color-card-text)] mb-4 flex items-center gap-2'>
                            <HiOutlineChatAlt className='ilustration-icons w-5 h-5 text-[#60efdb]' />
                            Comentarios y Recomendaciones
                        </h4>
                        <div className='main-comment-container flex flex-col gap-4'>
                            {person.comments.map((comment, index) => (
                                <div key={index} className='comment-container comments p-4 rounded-lg border border-[#e2e8f0]'>
                                    <div className='sub-comment-container flex justify-between items-start mb-2'>
                                        <div>
                                            <p className='comment-title font-semibold text-[color:var(--color-card-text)]'>{comment.name}</p>
                                            <p className='comment-rol text-sm text-[color:var(--color-card-text)] capitalize'>{comment.role}</p>
                                        </div>
                                        <span className='comment-date text-sm text-[color:var(--color-card-text)]'>{comment.date}</span>
                                    </div>
                                    <p className='text text-[color:var(--color-card-text)]'>{comment.coment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}