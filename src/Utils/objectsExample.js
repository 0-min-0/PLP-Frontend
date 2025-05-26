export let vacanciesExample = [
  {
    id: 1,
    title: 'Desarrollador Frontend',
    company: 'Tech Solutions',
    contactPerson: 'Ana López',
    contact: 'ana@tech.com',
    location: 'Madrid, España',
    type: 'Full-time',
    availability: 'Full-time',
    responsibilities: 'Desarrollo de interfaces con React',
    salary: '$3,000,000 COP'
  },
  {
    id: 2,
    title: 'Diseñador Gráfico',
    company: 'Creative Agency',
    contactPerson: 'Carlos Gómez',
    contact: 'carlos@creative.com',
    location: 'Barcelona, España',
    type: 'Part-time',
    availability: 'Part-time',
    responsibilities: 'Diseño de piezas gráficas para campañas digitales',
    salary: '$2,000,000 COP'
  },
  {
    id: 3,
    title: 'Gerente de Proyectos',
    company: 'Business Corp',
    contactPerson: 'Lucía Martínez',
    contact: 'lucia@businesscorp.com',
    location: 'Valencia, España',
    type: 'Full-time',
    availability: 'Full-time',
    responsibilities: 'Gestión de proyectos y liderazgo de equipos multidisciplinarios',
    salary: '$5,500,000 COP'
  },
  {
    id: 4,
    title: 'Analista de Datos',
    company: 'Data Insights',
    contactPerson: 'Pedro Ramírez',
    contact: 'pedro@datainsights.com',
    location: 'Sevilla, España',
    type: 'Internship',
    availability: 'Medio tiempo',
    responsibilities: 'Análisis de datos con Python y Power BI',
    salary: '$1,200,000 COP'
  },
  {
    id: 5,
    title: 'Desarrollador Backend',
    company: 'Web Solutions',
    contactPerson: 'Sofía Herrera',
    contact: 'sofia@websolutions.com',
    location: 'Bilbao, España',
    type: 'Full-time',
    availability: 'Full-time',
    responsibilities: 'Desarrollo de APIs REST con Node.js',
    salary: '$3,200,000 COP'
  },
  {
    id: 6,
    title: 'Especialista en Marketing Digital',
    company: 'Marketing Agency',
    contactPerson: 'Esteban Ruiz',
    contact: 'esteban@marketingagency.com',
    location: 'Málaga, España',
    type: 'Part-time',
    availability: 'Part-time',
    responsibilities: 'Planificación de campañas en redes sociales',
    salary: '$2,500,000 COP'
  },
  {
    id: 7,
    title: 'Ingeniero de Software',
    company: 'Tech Innovations',
    contactPerson: 'Valeria Torres',
    contact: 'valeria@techinnovations.com',
    location: 'Zaragoza, España',
    type: 'Full-time',
    availability: 'Full-time',
    responsibilities: 'Desarrollo de soluciones escalables con Java',
    salary: '$4,800,000 COP'
  },
  {
    id: 8,
    title: 'Asistente Administrativo',
    company: 'Office Solutions',
    contactPerson: 'Diego Castro',
    contact: 'diego@officesolutions.com',
    location: 'Alicante, España',
    type: 'Internship',
    availability: 'Medio tiempo',
    responsibilities: 'Gestión documental y soporte administrativo',
    salary: '$1,000,000 COP'
  },
  {
    id: 9,
    title: 'Desarrollador Móvil',
    company: 'App Development',
    contactPerson: 'Marta Delgado',
    contact: 'marta@appdev.com',
    location: 'Granada, España',
    type: 'Full-time',
    availability: 'Full-time',
    responsibilities: 'Desarrollo de aplicaciones móviles con Flutter',
    salary: '$3,600,000 COP'
  },
  {
    id: 10,
    title: 'Contador Público',
    company: 'Accounting Firm',
    contactPerson: 'Julián Salas',
    contact: 'julian@accountingfirm.com',
    location: 'Murcia, España',
    type: 'Part-time',
    availability: 'Part-time',
    responsibilities: 'Elaboración de informes financieros y declaraciones tributarias',
    salary: '$2,800,000 COP'
  },
  {
    id: 11,
    title: 'Diseñador UX/UI',
    company: 'Design Studio',
    contactPerson: 'Elena Morales',
    contact: 'elena@designstudio.com',
    location: 'Córdoba, España',
    type: 'Full-time',
    availability: 'Full-time',
    responsibilities: 'Diseño centrado en el usuario para plataformas digitales',
    salary: '$3,400,000 COP'
  },
  {
    id: 12,
    title: 'Desarrollador de Juegos',
    company: 'Gaming Company',
    contactPerson: 'Andrés Castaño',
    contact: 'andres@gamingco.com',
    location: 'Bilbao, España',
    type: 'Internship',
    availability: 'Medio tiempo',
    responsibilities: 'Desarrollo de videojuegos en Unity',
    salary: '$1,500,000 COP'
  }
]

export const initializeVacancies = () => {
  const storedVacancies = localStorage.getItem('vacancies')

  if (!storedVacancies) {
    vacanciesExample = [
      {
        id: 1,
        title: 'Desarrollador Frontend',
        company: 'Tech Solutions',
        contactPerson: 'Ana López',
        contact: 'ana@tech.com',
        location: 'Madrid, España',
        type: 'Full-time',
        availability: 'Full-time',
        responsibilities: 'Desarrollo de interfaces con React',
        salary: '$3,000,000 COP'
      }
    ]
    localStorage.setItem('vacancies', JSON.stringify(vacanciesExample))
  } else {
    vacanciesExample = JSON.parse(storedVacancies)
  }
}

initializeVacancies()

export const getVacancies = () => {
  const storedVacancies = localStorage.getItem('vacancies')
  return storedVacancies ? JSON.parse(storedVacancies) : []
}

export const addVacancyToExample = (formData, companyName) => {
  const newId = vacanciesExample.length > 0
    ? Math.max(...vacanciesExample.map(v => v.id)) + 1
    : 1

  const newVacancy = {
    id: newId,
    title: formData.vacancyName,
    vacancyName: formData.vacancyName,
    company: companyName,
    contactPerson: formData.contactPerson,
    contact: formData.contact,
    location: formData.location,
    responsibilities: formData.responsibilities,
    availability: formData.availability,
    type: formData.availability,
    salary: formData.salary
  }

  vacanciesExample.push(newVacancy)
  localStorage.setItem('vacancies', JSON.stringify(vacanciesExample))
  return newVacancy
}

// Actualizar una vacante existente
export const updateVacancyInExample = (updatedVacancy) => {
  const currentVacancies = getVacancies()
  const index = currentVacancies.findIndex(v => v.id === updatedVacancy.id)
  if (index !== -1) {
    currentVacancies[index] = {
      ...currentVacancies[index],
      ...updatedVacancy,
      title: updatedVacancy.vacancyName || updatedVacancy.title
    }
    localStorage.setItem('vacancies', JSON.stringify(currentVacancies))
    return true
  }
  return false
}

export const deleteVacancyFromExample = (id) => {
  const currentVacancies = getVacancies()
  const updated = currentVacancies.filter(v => v.id !== id)
  localStorage.setItem('vacancies', JSON.stringify(updated))
}
