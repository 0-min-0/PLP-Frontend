import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../../Components/Header/Header';
import { HiOutlineInbox, HiMiniArrowUturnLeft } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import { RightMenu } from '../../../Components/RightMenu/RightMenu';
import { useVacancy } from '../../../Context/VacancyContext';
import { deleteVacancyFromExample, getVacancies, updateVacancyInExample } from '../../../Utils/objectsExample';
import { menuConfig } from '../../../Utils/options';

export const SettingsEmployer = () => {
  const { vacancies, setVacancies } = useVacancy();
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  // Guardar vacante editada
  const handleSaveVacancy = (updatedVacancy) => {
    updateVacancyInExample(updatedVacancy);
    setVacancies(getVacancies());
  };

  // Eliminar vacante
  const handleDeleteVacancy = (id) => {
    deleteVacancyFromExample(id);
    setVacancies(getVacancies());
    setSelectedVacancy(null);
  };

  // Cargar vacantes al iniciar
  useEffect(() => {
    setVacancies(getVacancies());
  }, [setVacancies]);

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
            <NavLink to='/centro-de-notificaciones' title='Centro de notificaciones'>
              <HiOutlineInbox className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]' />
            </NavLink>
            <NavLink to='/inicio-contratante' title='Volver a inicio'>
              <HiMiniArrowUturnLeft className='w-8 h-8 text-[#405e7f] ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ml-6' />
            </NavLink>
          </div>
        }
      />

      <div className='w-[90%] flex justify-center gap-6 mx-30 mt-4'>
        {/* Contenedor principal de configuraciones */}
        <div className='w-[70%] bg-white px-10 py-8 rounded-xl'>
          {/* Outlet renderizará GeneralSettings u otros componentes según la ruta */}
          <Outlet context={{
            selectedVacancy,
            setSelectedVacancy,
            handleSaveVacancy,
            handleDeleteVacancy,
            vacancies
          }} />
        </div>

        {/* Menú lateral derecho */}
        <div className='w-[30%]'>
          <RightMenu
            width='w-[80%]'
            height='h-165'
            menuItems={menuConfig.employer.filter(item =>
              item.label !== 'Habilidades' && item.label !== 'Estudios'
            )}
            basePath='/configuraciones-contratante'
          />
        </div>
      </div>
    </div>
  );
};