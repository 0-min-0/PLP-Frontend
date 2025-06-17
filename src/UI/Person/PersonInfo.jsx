import { HiOutlineMail, HiOutlinePhone, HiOutlineAcademicCap, HiOutlineUser, HiOutlineMap, HiOutlineBriefcase } from 'react-icons/hi'

export const PersonInfo = ({ person }) => {
    return (
        <div className='w-full px-12 max-h-[65vh] overflow-y-auto scrollbar-custom'>
            {/* Información personal */}
            <div>
                <div className='mb-6'>
                    <h5 className='font-bold text-xl text-[#405e7f] mb-3'>Información Personal</h5>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex items-start gap-3'>
                            <HiOutlineUser className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[#405e7f]'>Nombre completo</p>
                                <p>{person.name}</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <HiOutlineMap className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[#405e7f]'>Ubicación</p>
                                <p>{person.town}</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <HiOutlineMail className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[#405e7f]'>Correo electrónico</p>
                                <p>{person.email}</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <HiOutlinePhone className='w-5 h-5 text-[#60efdb] mt-1' />
                            <div>
                                <p className='font-semibold text-[#405e7f]'>Teléfono</p>
                                <p>{person.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='border-t border-gray-200 mb-6' />

            {/* Descripción personal */}
            {person.personalDescription && (
                <div className='mb-6'>
                    <h4 className='text-xl font-semibold text-[#405e7f] mb-4'>Sobre mí</h4>
                    <p className='text-gray-700'>{person.personalDescription}</p>
                </div>
            )}

            <hr className='border-t border-gray-200 mb-6' />

            {/* Habilidades */}
            {person.skills?.length > 0 && (
                <div className='mb-6'>
                    <h4 className='text-xl font-semibold text-[#405e7f] mb-4'>Habilidades</h4>
                    <div className='flex flex-wrap gap-2'>
                        {person.skills.map((skill, index) => (
                            <span
                                key={index}
                                className='bg-[#dcfff6] text-[#405e7f] px-3 py-1 rounded-full text-sm'
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <hr className='border-t border-gray-200 mb-6' />

            {/* Formación académica */}
            {person.studies && (
                <div className='mb-6'>
                    <h4 className='text-xl font-semibold text-[#405e7f] mb-4'>Estudios y complementarios</h4>
                    <div className='flex items-center gap-3'>
                        <HiOutlineAcademicCap className='w-6 h-6 text-[#60efdb] mt-1' />
                        <p>{person.studies}</p>
                    </div>
                </div>
            )}
        </div>
    )
}