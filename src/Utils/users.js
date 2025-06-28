export const users = [
    {
        id: 1,
        documentType: 'C.C (Cédula de ciudadania)',
        documentNumber: '189123456',
        nameEmployer: 'Carolina Sanchez Torres',
        phoneEmployer: '3030120982',
        phoneSecEmployer: '3030120096',
        emailEmployer: 'carosan80@hotmail.com',
        descEmployer: 'Una persona',
        townEmployer: 'Salento',
        genreEmployer: 'Femenino',
        role: 'Contratante',
    },
    {
        id: 2,
        documentType: 'Cédula',
        documentNumber: '123456789',
        occupation: 'Desarrolladora Full Stack',
        nameJobSeeker: 'Ana López',
        phoneJobSeeker: '3101234567',
        phoneSecJobSeeker: '3101234568',
        emailJobSeeker: 'ana@example.com',
        genreJobSeeker: 'Femenino',
        descJobSeeker: 'Desarrolladora full stack con 5 años de experiencia',
        townJobSeeker: 'Armenia',
        skill1: 'JavaScript',
        skill2: 'React',
        skill3: 'Node.js',
        skill4: 'SQL',
        study1: 'Ingeniería de Sistemas',
        study2: 'Curso de React Avanzado',
        study3: '',
        study4: '',
        role: 'Contratista'
    },
    {
        id: 3,
        nit: '90012345-6',
        nameCompany: 'Constructora XYZ S.A.S.',
        phoneCompany: '3109876543',
        phoneSecCompany: '3109876542',
        emailCompany: 'contacto@constructora.xyz',
        descCompany: 'Una constructora',
        townCompany: 'Armenia',
        genreCompany: 'No aplica (empresa)',
        category: 'Construcción',
        webSite: 'www.constructora.xyz',
        role: 'Empresa',
    }
]

export const vacanciesExampleTest = [
  {
    id: 1,
    title: 'Desarrollador Frontend',
    company: 'Tech Corp',
    location: 'Armenia, Quindío',
    category: 'Tecnología',
    availability: 'Full-time',
    responsibilities: 'Desarrollar interfaces modernas con React',
    salary: '3,000,000',
    contactPerson: 'Ana López',
    contact: 'ana@techcorp.com',
    postulations: [
      {
        personId: 1,
        personName: 'Juan Pérez',
        appliedDate: '2025-06-10',
        status: 'En revisión'
      }
    ]
  },
  {
    id: 2,
    title: 'Diseñador UX/UI',
    company: 'Creative Studio',
    location: 'Salento, Quindío',
    category: 'Diseño',
    availability: 'Part-time',
    responsibilities: 'Diseño de interfaces y prototipos de usuario',
    salary: '2,500,000',
    contactPerson: 'Carlos Gómez',
    contact: 'carlos@creative.com',
    postulations: [
      {
        personId: 2,
        personName: 'Mariana Gómez',
        appliedDate: '2025-06-11',
        status: 'Entrevista programada'
      }
    ]
  },
  {
    id: 3,
    title: 'Backend Developer',
    company: 'Data Systems',
    location: 'Armenia, Quindío',
    category: 'Tecnología',
    availability: 'Full-time',
    responsibilities: 'Desarrollar APIs REST con Node.js',
    salary: '4,000,000',
    contactPerson: 'Pedro Torres',
    contact: 'pedro@datasystems.com',
    postulations: [
      {
        personId: 1,
        personName: 'Juan Pérez',
        appliedDate: '2025-06-12',
        status: 'Entrevista técnica agendada'
      }
    ]
  }
]
