import { optionTown, optionId, optionGenre } from './options';

export const employerFields = [
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
    name: 'nameEmployer', 
    type: 'text', 
    label: 'Nombre completo', 
    required: true 
  },
  { 
    name: 'phoneEmployer', 
    type: 'tel', 
    label: 'Teléfono principal', 
    required: true,
    placeholder: 'Ej: 3101234567' 
  },
  { 
    name: 'phoneSecEmployer', 
    type: 'tel', 
    label: 'Teléfono secundario (opcional)', 
    required: false 
  },
  { 
    name: 'emailEmployer', 
    type: 'email', 
    label: 'Correo electrónico', 
    required: true,
    placeholder: 'Ej: usuario@ejemplo.com' 
  },
  { 
    name: 'townEmployer', 
    type: 'select', 
    label: 'Ubicación', 
    options: optionTown, 
    required: true 
  },
  { 
    name: 'genreEmployer', 
    type: 'select', 
    label: 'Género', 
    options: optionGenre, 
    required: true 
  },
  { 
    name: 'descEmployer', 
    type: 'textarea', 
    label: 'Descripción personal', 
    required: false,
    fullWidth: true,
    placeholder: 'Escribe una breve descripción sobre ti' 
  }
];

export const jobSeekerFields = [
  ...employerFields.map(field => ({
    ...field,
    name: field.name.replace('Employer', 'JobSeeker')
  })),
  // Campos adicionales para contratista
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
];