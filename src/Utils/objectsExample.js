export let vacanciesExample = [ //array de vacantes
  {
    id: 1,
    title: 'Desarrollador Frontend',
    company: 'Tech Solutions',
    contactPerson: 'Ana López',
    contact: 'ana@tech.com',
    location: 'Cra. 14 #18-45, Armenia, Quindío',
    category: 'Tecnología e informática',
    availability: 'Full-time',
    responsibilities: 'Desarrollo de interfaces con React',
    salary: '3,000,000'
  },
  {
    id: 2,
    title: 'Diseñador Gráfico',
    company: 'Creative Agency',
    contactPerson: 'Carlos Gómez',
    contact: 'carlos@creative.com',
    location: 'Calle 23 #12-67, Armenia, Quindío',
    category: 'Diseño web',
    availability: 'Part-time',
    responsibilities: 'Diseño de piezas gráficas para campañas digitales',
    salary: '2,000,000'
  },
  {
    id: 3,
    title: 'Gerente de Proyectos',
    company: 'Business Corp',
    contactPerson: 'Lucía Martínez',
    contact: 'lucia@businesscorp.com',
    location: 'Av. Bolívar #20N-30, Armenia, Quindío',
    category: 'Administracion y oficina',
    availability: 'Full-time',
    responsibilities: 'Gestión integral de proyectos, liderazgo de equipos y coordinación estratégica',
    salary: '5,500,000'
  },
  {
    id: 4,
    title: 'Analista de Datos',
    company: 'Data Insights',
    contactPerson: 'Pedro Ramírez',
    contact: 'pedro@datainsights.com',
    location: 'Cra. 19 #34-12, Armenia, Quindío',
    category: 'Ciencia e investigación',
    availability: 'Medio tiempo',
    responsibilities: 'Análisis de datos con Python y Power BI',
    salary: '1,200,000'
  },
  {
    id: 5,
    title: 'Desarrollador Backend',
    company: 'Web Solutions',
    contactPerson: 'Sofía Herrera',
    contact: 'sofia@websolutions.com',
    location: 'Calle 10 #15-08, Armenia, Quindío',
    category: 'Tecnología e informática',
    availability: 'Full-time',
    responsibilities: 'Desarrollo de APIs REST con Node.js',
    salary: '3,200,000'
  },
  {
    id: 6,
    title: 'Especialista en Marketing Digital',
    company: 'Marketing Agency',
    contactPerson: 'Esteban Ruiz',
    contact: 'esteban@marketingagency.com',
    location: 'Cra. 17 #25-90, Armenia, Quindío',
    category: 'Marketing y ventas',
    availability: 'Part-time',
    responsibilities: 'Planificación de campañas en redes sociales',
    salary: '2,500,000'
  },
  {
    id: 7,
    title: 'Ingeniero de Software',
    company: 'Tech Innovations',
    contactPerson: 'Valeria Torres',
    contact: 'valeria@techinnovations.com',
    location: 'Av. Centenario #40-55, Armenia, Quindío',
    category: 'Tecnología e informática',
    availability: 'Full-time',
    responsibilities: 'Desarrollo de soluciones escalables con Java',
    salary: '4,800,000'
  },
  {
    id: 8,
    title: 'Asistente Administrativo',
    company: 'Office Solutions',
    contactPerson: 'Diego Castro',
    contact: 'diego@officesolutions.com',
    location: 'Calle 16 #14-21, Armenia, Quindío',
    category: 'Administración y oficina',
    availability: 'Medio tiempo',
    responsibilities: 'Gestión documental y soporte administrativo',
    salary: '1,000,000'
  }
]

export let peopleExample = [ //array de contratistas
  {
    id: 1,
    occupation: 'Desarrollador Frontend',
    name: 'Juan Pérez',
    documentType: 'Cédula',
    documentNumber: '123456789',
    email: 'juan@example.com',
    phone: '3001234567',
    secondaryPhone: '6012345678',
    town: 'Genova',
    personalDescription: 'Desarrollador con 3 años de experiencia en React y TypeScript',
    skills: ['React', 'JavaScript', 'CSS', 'Redux'],
    studies: 'Ingeniería de Sistemas - Universidad Nacional',
    category: 'Educación y formación',
    postulations: ['Desarrollador Backend'],
    type: 'person'
  },
  {
    id: 2,
    occupation: 'Diseñadora UX/UI',
    name: 'Mariana Gómez',
    documentType: 'Cédula',
    documentNumber: '987654321',
    email: 'mariana@example.com',
    phone: '3119876543',
    secondaryPhone: '6023456789',
    town: 'Salento',
    personalDescription: 'Especialista en diseño de interfaces y experiencia de usuario con enfoque accesible',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'HTML'],
    studies: 'Diseño Gráfico - Universidad de Medellín',
    category: 'Educación y formación',
    postulations: ['Desarrollador Backend'],
    type: 'person'
  },
  {
    id: 3,
    occupation: 'Analista de Datos',
    name: 'Carlos Ramírez',
    documentType: 'Cédula',
    documentNumber: '456789123',
    email: 'carlos@example.com',
    phone: '3204567891',
    secondaryPhone: '6045678901',
    town: 'Filandia',
    personalDescription: 'Experiencia en análisis de grandes volúmenes de datos y visualización con Power BI',
    skills: ['Python', 'SQL', 'Power BI', 'Excel'],
    studies: 'Estadística - Universidad del Valle',
    category: 'Educación y formación',
    postulations: ['Desarrollador Backend'],
    type: 'person'
  },
  {
    id: 4,
    occupation: 'Ingeniera de Software',
    name: 'Laura Torres',
    documentType: 'Cédula',
    documentNumber: '234567891',
    email: 'laura@example.com',
    phone: '3012349876',
    secondaryPhone: '6056789012',
    town: 'Armenia',
    personalDescription: 'Ingeniera de software enfocada en backend con experiencia en microservicios',
    skills: ['Java', 'Spring Boot', 'Docker', 'Kubernetes'],
    studies: 'Ingeniería de Software - Universidad del Norte',
    category: 'Educación y formación',
    postulations: ['Desarrollador Backend'],
    type: 'person'
  },
  {
    id: 5,
    occupation: 'Técnico en Soporte',
    name: 'Andrés Castillo',
    documentType: 'Cédula',
    documentNumber: '345678912',
    email: 'andres@example.com',
    phone: '3156789123',
    secondaryPhone: '6067890123',
    town: 'La Tebaida',
    personalDescription: 'Técnico en soporte con habilidades en instalación y mantenimiento de equipos',
    skills: ['Windows', 'Linux', 'Networking', 'Atención al cliente'],
    studies: 'Tecnología en Sistemas - SENA',
    category: 'Educación y formación',
    postulations: ['Desarrollador Backend'],
    type: 'person'
  },
  {
    id: 6,
    occupation: 'Especialista en Marketing Digital',
    name: 'Valentina Ríos',
    documentType: 'Cédula',
    documentNumber: '567891234',
    email: 'valentina@example.com',
    phone: '3181234567',
    secondaryPhone: '6078901234',
    town: 'Armenia',
    personalDescription: 'Especialista en SEO, SEM y estrategias de contenido para redes sociales',
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Canva'],
    studies: 'Comunicación Social - Universidad del Quindío',
    category: 'Educación y formación',
    postulations: ['Desarrollador Backend'],
    type: 'person'
  },
  {
    id: 7,
    occupation: 'Contador Público',
    name: 'Santiago Mejía',
    documentType: 'Cédula',
    documentNumber: '678912345',
    email: 'santiago@example.com',
    phone: '3167891234',
    secondaryPhone: '6089012345',
    town: 'Circasia',
    personalDescription: 'Contador con experiencia en auditoría y declaración de impuestos para pymes',
    skills: ['Contabilidad', 'Excel', 'Normas NIIF', 'Tributación'],
    studies: 'Contaduría Pública - Universidad Libre',
    category: 'Administracion y oficina',
    postulations: ['Asistente administrativo'],
    type: 'person'
  },
  {
    id: 8,
    occupation: 'Profesora de Inglés',
    name: 'Camila Herrera',
    documentType: 'Cédula',
    documentNumber: '789123456',
    email: 'camila@example.com',
    phone: '3123456789',
    secondaryPhone: '6090123456',
    town: 'Genova',
    personalDescription: 'Docente bilingüe con experiencia en enseñanza a jóvenes y adultos',
    skills: ['Inglés', 'Didáctica', 'Evaluación', 'Herramientas TIC'],
    studies: 'Licenciatura en Lenguas Extranjeras - UIS',
    category: 'Educación y formación',
    postulations: ['Desarrollador Backend'],
    type: 'person'
  }
]

export const comments = [ // Array de comentarios
  {
    role: 'contratante',
    name: 'Carlos Méndez',
    coment: 'Laura Torres es una profesional altamente comprometida. Durante su tiempo con nosotros, demostró puntualidad, responsabilidad y una excelente actitud frente a los retos. Su capacidad de trabajo en equipo y su ética laboral hicieron que el proyecto avanzara sin contratiempos.'
  },
  {
    role: 'empresa',
    name: 'Office Solutions',
    coment: 'Trabajar con Laura Torres fue una grata experiencia. Mostró siempre disposición para colaborar, fue proactiva y resolutiva ante los inconvenientes que surgieron. Cumplió con todas las tareas asignadas con eficacia y sin necesidad de supervisión constante.'
  },
  {
    role: 'empresa',
    name: 'Marketing Solutions',
    coment: 'Laura Torres se destacó por su profesionalismo, su organización y su actitud positiva. Su capacidad de adaptación a diferentes entornos de trabajo fue impresionante. Se notó su interés genuino por aportar y mejorar cada aspecto de las tareas que le fueron encomendadas.'
  },
  {
    role: 'contratante',
    name: 'María Fernanda Gómez',
    coment: 'Estoy muy satisfecho con el desempeño de Laura Torres. Desde el primer día mostró iniciativa, responsabilidad y un gran enfoque en los objetivos. Fue una pieza clave para que lográramos cumplir los plazos y mantener altos estándares de calidad en los entregables.'
  },
  {
    role: 'contratante',
    name: 'Luis Herrera',
    coment: 'Laura Torres ha sido una de las colaboradoras más eficientes que hemos tenido. Su compromiso con el trabajo, la excelente comunicación con el equipo y su constante disposición para aprender y mejorar fueron aspectos que marcaron una gran diferencia en el proyecto.'
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

initializeVacancies()

export const getVacancies = () => {
  if (process.env.NODE_ENV === 'development') {
    const stored = localStorage.getItem('vacancies')
    return stored ? JSON.parse(stored) : [...vacanciesExample]
  }

  try {
    const stored = localStorage.getItem('vacancies')
    const storedVacancies = stored ? JSON.parse(stored) : []
    const storedIds = new Set(storedVacancies.map(v => v.id))
    const uniqueExampleVacancies = vacanciesExample.filter(v => !storedIds.has(v.id))
    return [...storedVacancies, ...uniqueExampleVacancies]
  } catch (error) {
    console.error('Error al cargar vacantes:', error)
    return [...vacanciesExample]
  }
}

export const addVacancyToExample = (formData) => {
  const currentVacancies = getVacancies()
  const newId = currentVacancies.length > 0
    ? Math.max(...currentVacancies.map(v => v.id)) + 1
    : 1

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
  }

  const updatedVacancies = [...currentVacancies, newVacancy]
  localStorage.setItem('vacancies', JSON.stringify(updatedVacancies))
  return newVacancy
}

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

// funciones para contratistas

export const getPeople = () => {
  const saved = localStorage.getItem('peopleData')
  if (saved) {
    return JSON.parse(saved)
  }
  localStorage.setItem('peopleData', JSON.stringify(peopleExample))
  return [...peopleExample]
}

export const rejectPostulation = (personId) => {
  // Filtramos el array para excluir la persona con el ID especificado
  peopleExample = peopleExample.filter(person => person.id !== personId)
  localStorage.setItem('peopleData', JSON.stringify(peopleExample))
  
  return [...peopleExample]
}