import { memo, useMemo } from 'react'
import { CardContainer } from '../../Components/Container/CardContainer'
import { SetPerfil } from '../../Components/SetPerfil/SetPerfil'
import load from '../../assets/images/cargando.gif'

export const BaseLayout = memo(({
  title,
  description,
  dataType,
  data = [],
  loading,
  ItemComponent,
  showSidebar = true
}) => {
  const timePeriods = useMemo(() => ['Hoy', 'Esta semana', 'Este mes'], [])

  if (loading) {
    return (
      <div className='flex flex-col justify-center text-xl items-center py-30'>
        <img src={load} alt='Cargando' className='w-30 h-30' />
        Cargando {dataType}...
      </div>
    )
  }

  if (!Array.isArray(data)) {
    return (
      <div className='flex flex-col justify-center text-xl items-center py-30 text-red-500'>
        Error: los datos no tienen el formato esperado.
      </div>
    )
  }

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
              key={`container-0-${data.length}`}
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
          key={`container-1-${data.length}`}
          title={timePeriods[1]}
          items={data}
          rounded={showSidebar ? 'top-right' : 'none'}
          ItemComponent={ItemComponent}
        />

        <CardContainer
          key={`container-2-${data.length}`}
          title={timePeriods[2]}
          items={data}
          rounded='bottom'
          ItemComponent={ItemComponent}
        />
      </div>
    </div>
  )
})