export const optionTown = [  //Opciones de municipios
    { value: 'armenia', label: 'Armenia' },
    { value: 'buenaVista', label: 'Buenavista' },
    { value: 'circasia', label: 'Circasia' },
    { value: 'calarca', label: 'Calarcá' },
    { value: 'cordoba', label: 'Córdoba' },
    { value: 'filandia', label: 'Filandia' },
    { value: 'genova', label: 'Génova' },
    { value: 'laTebaida', label: 'La Tebaida' },
    { value: 'montenegro', label: 'Montenegro' },
    { value: 'pijao', label: 'Pijao' },
    { value: 'quimbaya', label: 'Quimbaya' },
    { value: 'salento', label: 'Salento' },
]

export const optionGenre = [  //Opciones de generos
    { value: 'masculino', label: 'Masculino' },
    { value: 'femenino', label: 'Femenino' },
]

export const optionId = [  //Opciones de tipo de documento
    { value: 'cedula', label: 'C.C (Cédula de Ciudadanía)' },
    { value: 'cedulaExtranjeria', label: 'C.E (Cédula de Extranjería)' },
    { value: 'pasaporte', label: 'P.P (Pasaporte)' },
]

export const categories = [  //Categorias de trabajo
    { value: 'administracion', label: 'Administración y oficina' },
    { value: 'arte', label: 'Arte y decoración' },
    { value: 'cocina', label: 'Cocina y Gastronomía' },
    { value: 'ciencia', label: 'Ciencia e investigación' },
    { value: 'diseno_web', label: 'Diseño web' },
    { value: 'deporte', label: 'Deporte y Bienestar' },
    { value: 'enfermeria', label: 'Enfermería y farmacia' },
    { value: 'educacion', label: 'Educación y formación' },
    { value: 'hoteleria', label: 'Hotelería y turismo' },
    { value: 'logistica', label: 'Logística y transporte' },
    { value: 'medio_ambiente', label: 'Medio ambiente y agricultura' },
    { value: 'marketing', label: 'Marketing y ventas' },
    { value: 'moda', label: 'Moda y estilismo' },
    { value: 'servicios', label: 'Servicios y atención al público' },
    { value: 'tecnologia', label: 'Tecnología e informática' },
    { value: 'manual', label: 'Trabajo manual y oficios' }
]

const categoryMap = categories.reduce((acc, category) => {
    acc[category.value] = category.label
    return acc
}, {})

export const getCategoryLabel = (categoryValue) => {
    return categoryMap[categoryValue] || categoryValue
}