export let vacanciesExample = [
  {
    id: 1,
    title: 'Desarrollador Frontend',
    company: 'Tech Solutions',
    contactPerson: 'Ana López',
    contact: 'ana@tech.com',
    location: 'Madrid, España',
    category: 'tecnologia',
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
    category: 'diseno_web',
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
    category: 'administracion',
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
    category: 'ciencia',
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
    category: 'tecnologia',
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
    category: 'marketing',
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
    category: 'tecnologia',
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
    category: 'administracion',
    availability: 'Medio tiempo',
    responsibilities: 'Gestión documental y soporte administrativo',
    salary: '$1,000,000 COP'
  }
]

const syncVacancies = () => {
  localStorage.setItem('vacancies', JSON.stringify(vacanciesExample))
}

export const initializeVacancies = () => {
  const storedVacancies = localStorage.getItem('vacancies')

  if (!storedVacancies) {
    syncVacancies()
  } else {
    vacanciesExample = JSON.parse(storedVacancies)
  }
}

initializeVacancies();

export const getVacancies = () => {
  if (process.env.NODE_ENV === 'development') {
    const stored = localStorage.getItem('vacancies');
    return stored ? JSON.parse(stored) : [...vacanciesExample];
  }
  
  try {
    const stored = localStorage.getItem('vacancies');
    const storedVacancies = stored ? JSON.parse(stored) : [];
    
    const storedIds = new Set(storedVacancies.map(v => v.id));
    const uniqueExampleVacancies = vacanciesExample.filter(v => !storedIds.has(v.id));
    
    return [...storedVacancies, ...uniqueExampleVacancies];
  } catch (error) {
    console.error('Error al cargar vacantes:', error);
    return [...vacanciesExample];
  }
};

export const addVacancyToExample = (formData) => {
  const currentVacancies = getVacancies();
  const newId = currentVacancies.length > 0 
    ? Math.max(...currentVacancies.map(v => v.id)) + 1 
    : 1;

  const newVacancy = {
    id: newId,
    title: formData.vacancyName,
    vacancyName: formData.vacancyName,
    company: formData.company || "Empresa no especificada",
    contactPerson: formData.contactPerson,
    contact: formData.contact,
    location: formData.location,
    responsibilities: formData.responsibilities,
    availability: formData.availability,
    category: formData.category,
    salary: formData.salary
  };

  const updatedVacancies = [...currentVacancies, newVacancy];
  localStorage.setItem('vacancies', JSON.stringify(updatedVacancies));
  
  return newVacancy;
};

export const updateVacancyInExample = (updatedVacancy) => {
  const index = vacanciesExample.findIndex(v => v.id === updatedVacancy.id)
  if (index !== -1) {
    vacanciesExample[index] = {
      ...vacanciesExample[index],
      ...updatedVacancy,
      title: updatedVacancy.vacancyName || updatedVacancy.title
    }
    syncVacancies()
    return true
  }
  return false
}

export const deleteVacancyFromExample = (id) => {
  vacanciesExample = vacanciesExample.filter(v => v.id !== id)
  syncVacancies()
}
