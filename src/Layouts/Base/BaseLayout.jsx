import { CardContainer } from '../../Components/Container/CardContainer'
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil'

export const BaseLayout = ({
  title,
  description,
  dataType,
  data,
  loading,
  ItemComponent,
  showSidebar = true
}) => {
  if (loading) {
    return <div className="text-center py-10">Cargando {dataType}...</div>;
  }

  const timePeriods = ['Hoy', 'Esta semana', 'Este mes'];

  return (
    <div className='flex flex-col'>
      <div className='text-[#405e7f] mx-10 mt-6 mb-5'>
        <h1 className='font-[afacadBold] text-4xl mb-2'>{title}</h1>
        <h3 className='text-lg'>{description}</h3>
      </div>
      
      <div className='mb-10'>
        <div className='flex w-full gap-4'>
          <div className={showSidebar ? 'w-[70%]' : 'w-full'}>
            <CardContainer
              title={timePeriods[0]}
              items={data}
              rounded='top'
              ItemComponent={ItemComponent}
            />
          </div>
          
          {showSidebar && (
            <div className='w-[30%]'>
              <SetPerfil />
            </div>
          )}
        </div>
        
        <CardContainer
          title={timePeriods[1]}
          items={data}
          rounded={showSidebar ? 'top-right' : 'none'}
          ItemComponent={ItemComponent}
        />
        
        <CardContainer
          title={timePeriods[2]}
          items={data}
          rounded='bottom'
          ItemComponent={ItemComponent}
        />
      </div>
    </div>
  );
};