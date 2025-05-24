import { NavLink } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { HiOutlineInbox } from 'react-icons/hi2'
import { HiMiniArrowUturnLeft } from 'react-icons/hi2'
import avatar from '../../assets/images/avatar.jpg'
import { SearchBar } from '../../UI/SearchBar'
import { useGlobal } from '../../Context/GlobalContext'
import { VacancyCard } from '../../UI/VacancyCard'

export const SettingsEmployer = () => {
    const { vacancies } = useGlobal()

    return (
        <div className=''>
            <Header
                middleObject={
                    <h1 className='text-6xl mb-8 font-[afacadBold] text-[#405e7f]'>
                        Configuraciones
                    </h1>
                }
                buttons={
                    <div className='w-full flex mr-6 mb-6'>
                        <NavLink
                            to='/centro-de-notificaciones'
                            title='Centro de notificaciones'
                        >
                            <div>
                                <HiOutlineInbox className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
                            </div>
                        </NavLink>
                        <NavLink
                            to='/inicio-contratante'
                            title='Volver a inicio'
                        >
                            <div>
                                <HiMiniArrowUturnLeft className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ml-6' />
                            </div>
                        </NavLink>
                    </div>
                }
            />
            <div className='w-[75%] bg-white p-10 rounded-xl'>
                <div className='flex items-center'>
                    <img
                        src={avatar}
                        alt='avatar'
                        className='w-25 h-25 border-double border-8 border-[#60efdb] rounded-full'
                    />
                    <div className='ml-8'>
                        <h2 className='text-4xl font-[afacadBold] text-[#405e7f]'>
                            Nombre de usuario
                        </h2>
                        <h3 className='text-xl text-[#405e7f]'>
                            Agregar cuenta
                        </h3>
                    </div>
                </div>
                <div className='mt-8'>
                    <SearchBar />
                    <div className='mt-6'>
                        <h2 className='text-2xl font-[afacadBold] text-[#405e7f] mb-4'>
                            Publicaciones
                        </h2>
                        {vacancies.length > 0 ? (
                            vacancies.map((vacancy) => (
                                <VacancyCard
                                    key={vacancy.id}
                                    title={vacancy.title}
                                    category={vacancy.category || "Sin categoría"}
                                    phone={vacancy.contact || "300 123 4567"}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500">No hay publicaciones aún</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

