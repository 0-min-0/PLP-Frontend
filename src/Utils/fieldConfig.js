import { optionTown, optionId, optionGenre } from './options'

const baseFields = [
  { 
    name: 'documentType', 
    type: 'select', 
    label: 'Tipo de documento', 
    options: optionId, 
    required: true 
  },
  { 
    name: 'documentNumber', 
    type: 'text', 
    label: 'Número de documento', 
    required: true,
    placeholder: 'Ej: 1234567890' 
  },
  { 
    name: 'phone', 
    type: 'tel', 
    label: 'Teléfono principal', 
    required: true,
    placeholder: 'Ej: 3101234567' 
  },
  { 
    name: 'phoneSec', 
    type: 'tel', 
    label: 'Teléfono secundario (opcional)', 
    required: false 
  },
  { 
    name: 'email', 
    type: 'email', 
    label: 'Correo electrónico', 
    required: true,
    placeholder: 'Ej: usuario@ejemplo.com' 
  },
  { 
    name: 'town', 
    type: 'select', 
    label: 'Ubicación', 
    options: optionTown, 
    required: true 
  },
  { 
    name: 'genre', 
    type: 'select', 
    label: 'Género', 
    options: optionGenre, 
    required: true 
  },
  { 
    name: 'desc', 
    type: 'textarea', 
    label: 'Descripción personal', 
    required: false,
    fullWidth: true,
    placeholder: 'Escribe una breve descripción sobre ti' 
  }
]

export const employerFields = [
  ...baseFields.map(field => ({
    ...field,
    name: field.name === 'name' ? 'nameEmployer' : field.name.replace(/([A-Z])/g, '$1Employer')
  })),
  { 
    name: 'nameEmployer', 
    type: 'text', 
    label: 'Nombre completo', 
    required: true 
  }
]

export const jobSeekerFields = [
  ...baseFields.map(field => ({
    ...field,
    name: field.name === 'name' ? 'nameJobSeeker' : field.name.replace(/([A-Z])/g, '$1JobSeeker')
  })),
  { 
    name: 'nameJobSeeker', 
    type: 'text', 
    label: 'Nombre completo', 
    required: true 
  },
  { 
    name: 'skill1', 
    type: 'text', 
    label: 'Habilidad principal', 
    required: true 
  },
  { 
    name: 'skill2', 
    type: 'text', 
    label: 'Segunda habilidad', 
    required: true 
  },
  { 
    name: 'skill3', 
    type: 'text', 
    label: 'Otra habilidad (opcional)', 
    required: false 
  },
  { 
    name: 'skill4', 
    type: 'text', 
    label: 'Otra habilidad (opcional)', 
    required: false 
  },
  { 
    name: 'study1', 
    type: 'text', 
    label: 'Estudio principal', 
    required: true 
  },
  { 
    name: 'study2', 
    type: 'text', 
    label: 'Segundo estudio', 
    required: true 
  },
  { 
    name: 'study3', 
    type: 'text', 
    label: 'Otro estudio (opcional)', 
    required: false 
  },
  { 
    name: 'study4', 
    type: 'text', 
    label: 'Otro estudio (opcional)', 
    required: false 
  }
]