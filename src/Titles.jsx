import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const DynamicTitle = () => {
  const location = useLocation()

  const titles = {
    '/': 'PLP - Bienvenido/a',
    '/acceder': 'Iniciar sesión | PLP',
    '/crear-cuenta': 'Registrate | PLP',
    '/crear-cuenta/contratista': 'Registrate como contratista | PLP',
    '/crear-cuenta/contratista/crear-contraseña': 'Registrate como contratista | PLP',
    '/crear-cuenta/contratista/hoja-de-vida': 'Hoja de vida | PLP'
  }

  useEffect(() => {
    document.title = titles[location.pathname] || 'PLP'
  }, [location.pathname])

  return null
}