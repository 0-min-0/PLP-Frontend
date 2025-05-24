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
    '/inicio-contratista': 'Inicio | PLP',
    '/inicio-contratante': 'Inicio | PLP',
    '/inicio-empresa': 'Inicio | PLP',
    '/crear-vacante': 'Crear vacante | PLP',
    '/centro-de-notificaciones': 'Centro de notificaciones | PLP',
    '/configuraciones-contratante': 'Configuraciones | PLP',
    '/configuraciones-contratista': 'Configuraciones | PLP',
  }

  useEffect(() => {
    document.title = titles[location.pathname] || 'PLP'
  }, [location.pathname])

  return null
}