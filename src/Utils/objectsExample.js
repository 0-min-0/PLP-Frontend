export let vacanciesExample = [
    {
        id: 1,
        title: 'Desarrollador Frontend',
        company: 'Tech Solutions',
        location: 'Madrid, España',
        type: 'Full-time',
    },
    {
        id: 2,
        title: 'Diseñador Gráfico',
        company: 'Creative Agency',
        location: 'Barcelona, España',
        type: 'Part-time',
    },
    {
        id: 3,
        title: 'Gerente de Proyectos',
        company: 'Business Corp',
        location: 'Valencia, España',
        type: 'Full-time',
    },
    {
        id: 4,
        title: 'Analista de Datos',
        company: 'Data Insights',
        location: 'Sevilla, España',
        type: 'Internship',
    },
    {
        id: 5,
        title: 'Desarrollador Backend',
        company: 'Web Solutions',
        location: 'Bilbao, España',
        type: 'Full-time',
    },
    {
        id: 6,
        title: 'Especialista en Marketing Digital',
        company: 'Marketing Agency',
        location: 'Málaga, España',
        type: 'Part-time',
    },
    {
        id: 7,
        title: 'Ingeniero de Software',
        company: 'Tech Innovations',
        location: 'Zaragoza, España',
        type: 'Full-time',
    },
    {
        id: 8,
        title: 'Asistente Administrativo',
        company: 'Office Solutions',
        location: 'Alicante, España',
        type: 'Internship',
    },
    {
        id: 9,
        title: 'Desarrollador Móvil',
        company: 'App Development',
        location: 'Granada, España',
        type: 'Full-time',
    },
    {
        id: 10,
        title: 'Contador Público',
        company: 'Accounting Firm',
        location: 'Murcia, España',
        type: 'Part-time',
    },
    {
        id: 11,
        title: 'Diseñador UX/UI',
        company: 'Design Studio',
        location: 'Córdoba, España',
        type: 'Full-time',
    },
    {
        id: 12,
        title: 'Desarrollador de Juegos',
        company: 'Gaming Company',
        location: 'Bilbao, España',
        type: 'Internship',
    }
]

const saveVacancies = () => {
  localStorage.setItem('vacancies', JSON.stringify(vacanciesExample))
}

if (!localStorage.getItem('vacancies')) {
  saveVacancies()
} else {
  vacanciesExample = JSON.parse(localStorage.getItem('vacancies'))
}

export const addVacancyToExample = (vacancyData, companyName) => {
  const newId = vacanciesExample.length > 0 
    ? Math.max(...vacanciesExample.map(v => v.id)) + 1 
    : 1

  const newVacancy = {
    id: newId,
    title: vacancyData.vacancyName,
    company: companyName, 
    location: vacancyData.location,
    type: vacancyData.availability
  }

  vacanciesExample.push(newVacancy)
  localStorage.setItem('vacancies', JSON.stringify(vacanciesExample))
  return newVacancy
}

export const publishedVacancies = [
    {
        id: 1,
        title: 'Desarrollador Frontend',
        company: 'Tech Solutions',
        location: 'Madrid, España',
        type: 'Full-time',
    },
]