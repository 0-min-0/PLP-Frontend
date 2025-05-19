import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const DynamicTitle = () => {
  const location = useLocation()

  const titles = {
    '/': 'PLP - Bienvenido/a',
    '/acceder': 'Iniciar sesión | PLP',
    '/crear-cuenta': 'Registrarse | PLP',
    '/crear-cuenta/rol': 'Selecciona un rol | PLP',
    '/crear-cuenta/contratante': 'Registrarse como contratante | PLP',
    '/crear-cuenta/empresa': 'Registrarse como empresa | PLP',
    '/crear-cuenta/contratista': 'Registrarse como contratista | PLP',
    '/crear-contraseña': 'Crear contraseña | PLP',
    '/inicio': 'Inicio | PLP'
  }

  useEffect(() => {
    document.title = titles[location.pathname] || 'PLP'
  }, [location.pathname])

  return null
}