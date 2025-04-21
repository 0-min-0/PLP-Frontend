import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DynamicTitle = () => {
  const location = useLocation()

  const titles: Record<string, string> = {
    '/inicio': 'Inicio | PLP',
    '/acceder': 'Acceder | PLP',
    '/registro': 'Registro | PLP',
  }

  useEffect(() => {
    document.title = titles[location.pathname] || 'PLP'
  }, [location.pathname]);

  return null
}