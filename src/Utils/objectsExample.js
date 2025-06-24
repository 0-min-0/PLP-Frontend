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
    salary: '3,000,000',
    postulations: []
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

export let peopleExample = [
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
    type: 'person',
    comments: [
      {
        role: 'empresa',
        name: 'TechSolutions Inc.',
        date: '2025-04-10',
        coment: 'Juan demostró un dominio excepcional de React durante su tiempo con nosotros. Su código limpio y bien estructurado fue fundamental para el éxito de nuestro proyecto de rediseño.'
      },
      {
        role: 'contratante',
        name: 'Alejandra Rojas',
        date: '2025-04-15',
        coment: 'Trabajar con Juan fue una experiencia muy positiva. Su capacidad para resolver problemas complejos de UI y su atención a los detalles de implementación superaron nuestras expectativas.'
      },
      {
        role: 'empresa',
        name: 'Digital Creators',
        date: '2025-04-20',
        coment: 'Juan es un desarrollador frontend altamente capacitado. Su habilidad para optimizar el rendimiento de las aplicaciones y su conocimiento profundo de TypeScript fueron invaluables para nuestro equipo.'
      }
    ]
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
    type: 'person',
    comments: [
      {
        role: 'contratante',
        name: 'Ricardo Fernández',
        date: '2025-03-05',
        coment: 'Mariana transformó completamente la experiencia de usuario de nuestra aplicación. Su enfoque en accesibilidad y diseño inclusivo marcó una diferencia notable en nuestras métricas de engagement.'
      },
      {
        role: 'empresa',
        name: 'UX Masters',
        date: '2025-03-12',
        coment: 'Mariana tiene un ojo excepcional para el diseño de interfaces. Sus prototipos en Figma no solo son visualmente impresionantes, sino también funcionales y fáciles de implementar.'
      },
      {
        role: 'contratante',
        name: 'Carolina Díaz',
        date: '2025-03-18',
        coment: 'Contratamos a Mariana para rediseñar nuestro e-commerce y los resultados fueron espectaculares. Su comprensión de los flujos de usuario y su atención a los detalles fueron clave para el éxito del proyecto.'
      },
      {
        role: 'empresa',
        name: 'Digital Agency Co.',
        date: '2025-03-25',
        coment: 'Mariana es una diseñadora UX/UI excepcional. Su capacidad para traducir requisitos complejos en interfaces intuitivas y hermosas es realmente notable.'
      }
    ] 
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
    type: 'person',
    comments: [
      {
        role: 'empresa',
        name: 'Data Insights Corp.',
        date: '2025-02-10',
        coment: 'Carlos tiene una habilidad excepcional para encontrar patrones en datos complejos. Sus informes en Power BI han sido fundamentales para nuestra toma de decisiones estratégicas.'
      },
      {
        role: 'contratante',
        name: 'Oscar Mendoza',
        date: '2025-02-15',
        coment: 'El análisis que realizó Carlos para nuestro proyecto de optimización de procesos superó todas nuestras expectativas. Sus recomendaciones basadas en datos generaron ahorros significativos.'
      },
      {
        role: 'empresa',
        name: 'Analytics Solutions',
        date: '2025-02-20',
        coment: 'Carlos es un analista meticuloso y detallista. Su dominio de Python para el análisis de datos y su capacidad para comunicar hallazgos complejos de manera clara son impresionantes.'
      },
      {
        role: 'contratante',
        name: 'Luisa Fernanda Vargas',
        date: '2025-02-28',
        coment: 'Trabajar con Carlos fue una experiencia excelente. Transformó nuestros datos en información accionable que mejoró significativamente nuestras operaciones.'
      }
    ]
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
    type: 'person',
    comments: [
      {
        role: 'empresa',
        name: 'Tech Innovations',
        date: '2025-01-05',
        coment: 'Laura es una ingeniera de software excepcional. Su arquitectura de microservicios para nuestro sistema de pagos fue elegante, escalable y fácil de mantener.'
      },
      {
        role: 'contratante',
        name: 'Diego Armando Soto',
        date: '2025-01-12',
        coment: 'Laura resolvió problemas complejos de backend que llevábamos meses intentando solucionar. Su conocimiento de Spring Boot y Kubernetes es realmente profundo.'
      },
      {
        role: 'empresa',
        name: 'Software Architects',
        date: '2025-01-20',
        coment: 'Laura tiene una capacidad notable para diseñar sistemas distribuidos robustos. Su código es limpio, bien documentado y sigue las mejores prácticas de la industria.'
      }
    ]
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
    type: 'person',
    comments: [
      {
        role: 'empresa',
        name: 'IT Support Solutions',
        date: '2025-03-01',
        coment: 'Andrés es un técnico en soporte altamente capacitado. Su capacidad para diagnosticar y resolver problemas técnicos rápidamente ha sido invaluable para nuestros clientes.'
      },
      {
        role: 'contratante',
        name: 'María del Pilar Rojas',
        date: '2025-03-08',
        coment: 'Contratamos a Andrés para configurar nuestra red de oficina y el resultado fue excelente. Es profesional, puntual y tiene un amplio conocimiento técnico.'
      },
      {
        role: 'empresa',
        name: 'Computer Services Co.',
        date: '2025-03-15',
        coment: 'Andrés tiene una combinación poco común de habilidades técnicas avanzadas y excelente trato con los usuarios finales. Es un activo valioso para cualquier equipo de soporte.'
      },
      {
        role: 'contratante',
        name: 'Jorge Iván López',
        date: '2025-03-22',
        coment: 'Andrés resolvió problemas de nuestro sistema que otros técnicos no pudieron. Su conocimiento de Linux y redes es excepcional.'
      }
    ]
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
    type: 'person',
    comments: [
      {
        role: 'empresa',
        name: 'Digital Marketing Agency',
        date: '2025-02-05',
        coment: 'Valentina logró aumentar el tráfico orgánico de nuestros clientes en un 200% con sus estrategias de SEO. Su enfoque basado en datos es realmente efectivo.'
      },
      {
        role: 'contratante',
        name: 'Sofía Martínez',
        date: '2025-02-12',
        coment: 'Las campañas de Google Ads que Valentina implementó para nuestro negocio generaron un ROI excepcional. Es una profesional altamente capacitada y creativa.'
      },
      {
        role: 'empresa',
        name: 'Growth Hackers',
        date: '2025-02-20',
        coment: 'Valentina tiene un talento especial para crear contenido atractivo que convierte. Sus estrategias para redes sociales han elevado significativamente nuestro engagement.'
      }
    ]
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
    type: 'person',
    comments: [
      {
        role: 'empresa',
        name: 'Financial Advisory',
        date: '2025-01-10',
        coment: 'Santiago es un contador meticuloso y conocedor. Sus informes financieros son impecables y su dominio de las NIIF ha sido fundamental para nuestros clientes.'
      },
      {
        role: 'contratante',
        name: 'Roberto Carlos Galán',
        date: '2025-01-18',
        coment: 'Santiago optimizó nuestro sistema contable y nos ayudó a ahorrar significativamente en impuestos. Su atención al detalle y conocimiento tributario son excepcionales.'
      },
      {
        role: 'empresa',
        name: 'Audit Experts',
        date: '2025-01-25',
        coment: 'Trabajar con Santiago en proyectos de auditoría ha sido un placer. Su ética profesional y rigor técnico son ejemplares.'
      },
      {
        role: 'contratante',
        name: 'Ana María Restrepo',
        date: '2025-02-05',
        coment: 'Santiago ha sido nuestro contador durante 2 años y ha transformado completamente nuestras finanzas. Es confiable, profesional y siempre está actualizado.'
      }
    ]
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
    type: 'person',
    comments: [
      {
        role: 'contratante',
        name: 'Roberto Sánchez',
        date: '2025-05-10',
        coment: 'Camila Herrera es una educadora excepcional. Su metodología de enseñanza del inglés es innovadora y efectiva, logrando que los estudiantes pierdan el miedo a hablar. Su paciencia y dedicación son admirables.'
      },
      {
        role: 'empresa',
        name: 'Language Institute',
        date: '2025-05-12',
        coment: 'Durante su tiempo con nosotros, Camila Herrera demostró ser una profesora comprometida y creativa. Sus clases eran dinámicas y bien estructuradas, logrando excelentes resultados en los exámenes internacionales de nuestros estudiantes.'
      },
      {
        role: 'empresa',
        name: 'Global Education Center',
        date: '2025-05-15',
        coment: 'Camila se destacó por su capacidad para adaptar sus clases a diferentes niveles y estilos de aprendizaje. Su uso de herramientas tecnológicas en la enseñanza del inglés fue particularmente impresionante y efectivo.'
      },
      {
        role: 'contratante',
        name: 'Ana Lucía Ramírez',
        date: '2025-05-18',
        coment: 'Contraté a Camila para clases particulares de inglés y los resultados superaron mis expectativas. Es puntual, organizada y tiene una manera única de hacer que el aprendizaje sea divertido y significativo.'
      },
      {
        role: 'contratante',
        name: 'Pedro Fernández',
        date: '2025-05-20',
        coment: 'Como director académico, he trabajado con muchos profesores de inglés, pero Camila Herrera sobresale por su profesionalismo y su capacidad para conectar con los estudiantes. Su ética de trabajo es ejemplar.'
      }
    ]
  }
]

export const comments = [ // Array de comentarios
  {
    role: 'contratante',
    name: 'Carlos Méndez',
    date: '2025-06-15',
    coment: 'Laura Torres es una profesional altamente comprometida. Durante su tiempo con nosotros, demostró puntualidad, responsabilidad y una excelente actitud frente a los retos. Su capacidad de trabajo en equipo y su ética laboral hicieron que el proyecto avanzara sin contratiempos.'
  },
  {
    role: 'empresa',
    name: 'Office Solutions',
    date: '2025-06-15',
    coment: 'Trabajar con Laura Torres fue una grata experiencia. Mostró siempre disposición para colaborar, fue proactiva y resolutiva ante los inconvenientes que surgieron. Cumplió con todas las tareas asignadas con eficacia y sin necesidad de supervisión constante.'
  },
  {
    role: 'empresa',
    name: 'Marketing Solutions',
    date: '2025-06-15',
    coment: 'Laura Torres se destacó por su profesionalismo, su organización y su actitud positiva. Su capacidad de adaptación a diferentes entornos de trabajo fue impresionante. Se notó su interés genuino por aportar y mejorar cada aspecto de las tareas que le fueron encomendadas.'
  },
  {
    role: 'contratante',
    name: 'María Fernanda Gómez',
    date: '2025-06-16',
    coment: 'Estoy muy satisfecho con el desempeño de Laura Torres. Desde el primer día mostró iniciativa, responsabilidad y un gran enfoque en los objetivos. Fue una pieza clave para que lográramos cumplir los plazos y mantener altos estándares de calidad en los entregables.'
  },
  {
    role: 'contratante',
    name: 'Luis Herrera',
    date: '2025-06-16',
    coment: 'Laura Torres ha sido una de las colaboradoras más eficientes que hemos tenido. Su compromiso con el trabajo, la excelente comunicación con el equipo y su constante disposición para aprender y mejorar fueron aspectos que marcaron una gran diferencia en el proyecto.'
  }
]

export const notifications = [ // Notificaciones
  {
    name: 'Nueva postulación recibida',
    date: '2025-06-15',
    notification: 'Laura Torres se ha postulado a la vacante "Diseñadora UX/UI Senior". Te recomendamos revisar su hoja de vida y su experiencia previa para evaluar su compatibilidad con los requerimientos del puesto.'
  },
  {
    name: 'Cierre de vacante exitoso',
    date: '2025-06-15',
    notification: 'La vacante "Desarrollador Frontend React" ha sido cerrada exitosamente. Todos los candidatos han sido notificados y el proceso de selección ha finalizado conforme al cronograma establecido.'
  },
  {
    name: 'Evaluación pendiente del candidato',
    date: '2025-06-16',
    notification: 'Laura Torres completó todas las etapas del proceso de selección para la vacante "Coordinador de Proyectos". Por favor, ingresa al panel de contrataciones y realiza la evaluación final para continuar con el proceso.'
  },
  {
    name: 'Nueva vacante publicada',
    date: '2025-06-16',
    notification: 'Se ha publicado correctamente la vacante "Analista de Datos Junior". A partir de ahora, los candidatos podrán postularse. Revisa que toda la información esté completa y alineada a lo solicitado por el área técnica.'
  },
  {
    name: 'Contratista con proceso de selección finalizado',
    date: '2025-06-16',
    notification: 'El proceso de selección de Laura Torres para la vacante "Especialista en Marketing Digital" ha finalizado. Puedes revisar los resultados, comentarios del equipo y tomar una decisión sobre su contratación.'
  },
  {
    name: 'Actualización en requisitos de vacante',
    date: '2025-06-17',
    notification: 'Los requisitos de la vacante "Desarrollador Backend Node.js" han sido actualizados para incluir experiencia mínima de 2 años en bases de datos relacionales. Asegúrate de revisar los cambios antes de continuar el proceso de selección.'
  },
  {
    name: 'Nuevo mensaje de un postulante',
    date: '2025-06-17',
    notification: 'Has recibido un nuevo mensaje de Laura Torres respecto a la vacante "Gestora de Contenidos Digitales". El mensaje contiene observaciones sobre la entrevista realizada y solicitudes de aclaración sobre el siguiente paso del proceso.'
  },
  {
    name: 'Vacante pausada temporalmente',
    date: '2025-06-18',
    notification: 'La vacante "Arquitecto de Soluciones Cloud" ha sido pausada temporalmente por decisión del departamento de tecnología. No se podrán recibir nuevas postulaciones hasta nuevo aviso.'
  },
  {
    name: 'Recordatorio: revisión de hojas de vida',
    date: '2025-06-18',
    notification: 'Tienes 8 hojas de vida pendientes por revisar para la vacante "Asistente Administrativo". Se recomienda hacer la evaluación antes del viernes para cumplir con el cronograma establecido.'
  },
  {
    name: 'Nuevo reporte de desempeño disponible',
    date: '2025-06-19',
    notification: 'Ya está disponible el reporte de desempeño mensual de Laura Torres. Puedes consultarlo en el panel de evaluaciones para analizar su progreso y definir próximos objetivos profesionales.'
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