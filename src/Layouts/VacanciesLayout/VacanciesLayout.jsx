import { BaseLayout } from '../Base/BaseLayout'
import { useData } from '../../Hooks/useData'
import { Vacancie } from '../../UI/Vacancy/Vacancie'

export const VacanciesLayout = () => {
  const { data, loading } = useData('vacancies')

  return (
    <BaseLayout
      title="¡Hola, Usuario! No te pierdas las vacantes más recientes."
      description="Busca ofertas laborales desde las más recientes (Hoy) hasta las más pasadas de fecha (Este mes)."
      dataType="vacantes"
      data={data}
      loading={loading}
      ItemComponent={Vacancie}
    />
  )
}