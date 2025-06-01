import { BaseLayout } from '../Base/BaseLayout';
import { useData } from '../../Hooks/useData'
import { Person } from '../../UI/Person/Person'

export const PeopleLayout = () => {
  const { data, loading } = useData('people')

  return (
    <BaseLayout
      title='¡Bienvenido(a)!'
      description='Descubre personas a quienes darles una oportunidad laboral y puedan suplir tus necesidades.'
      dataType='personas'
      data={data}
      loading={loading}
      ItemComponent={Person}
    />
  )
}