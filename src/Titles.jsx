import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const DynamicTitle = () => {
  const location = useLocation()

  // Titles.jsx / Titles.ts

  const titles = {
    // Página principal y auth
    '/': 'PLP - Bienvenido/a',
    '/acceder': 'Iniciar sesión | PLP',
    '/crear-cuenta': 'Registrarse | PLP',
    '/crear-cuenta/rol': 'Selecciona un rol | PLP',
    '/crear-cuenta/contratista': 'Registrarse como contratista | PLP',
    '/crear-cuenta/contratante': 'Registrarse como contratante | PLP',
    '/crear-cuenta/empresa': 'Registrarse como empresa | PLP',
    '/crear-contraseña': 'Crear contraseña | PLP',
    '/recuperar-contraseña': 'Recuperar contraseña | PLP',

    // Inicios por rol
    '/inicio-contratista': 'Inicio contratista | PLP',
    '/inicio-contratante': 'Inicio contratante | PLP',
    '/inicio-empresa': 'Inicio empresa | PLP',

    // Crear vacantes
    '/crear-vacante-empresa': 'Crear vacante empresa | PLP',
    '/crear-vacante-contratante': 'Crear vacante contratante | PLP',

    // Configuraciones contratante
    '/configuraciones-contratante': 'Configuraciones contratante | PLP',
    '/configuraciones-contratante/general-contratante': 'General contratante | PLP',
    '/configuraciones-contratante/publicaciones-contratante': 'Publicaciones contratante | PLP',
    '/configuraciones-contratante/postulados': 'Postulados contratante | PLP',
    '/configuraciones-contratante/terminos-condiciones': 'Términos y condiciones | PLP',
    '/configuraciones-contratante/ayuda-soporte': 'Ayuda y soporte | PLP',
    '/configuraciones-contratante/chat-bot': 'ChatBot | PLP',

    // Configuraciones contratista
    '/configuraciones-contratista': 'Configuraciones contratista | PLP',
    '/configuraciones-contratista/general-contratista': 'General contratista | PLP',
    '/configuraciones-contratista/postulaciones-contratista': 'Postulaciones contratista | PLP',
    '/configuraciones-contratista/comentarios-contratista': 'Comentarios contratista | PLP',
    '/configuraciones-contratista/terminos-condiciones': 'Términos y condiciones | PLP',
    '/configuraciones-contratista/ayuda-soporte': 'Ayuda y soporte | PLP',
    '/configuraciones-contratista/chat-bot': 'ChatBot | PLP',

    // Configuraciones empresa
    '/configuraciones-empresa': 'Configuraciones empresa | PLP',
    '/configuraciones-empresa/general-empresa': 'General empresa | PLP',
    '/configuraciones-empresa/publicaciones-empresa': 'Publicaciones empresa | PLP',
    '/configuraciones-empresa/postulados': 'Postulados empresa | PLP',
    '/configuraciones-empresa/terminos-condiciones': 'Términos y condiciones | PLP',
    '/configuraciones-empresa/ayuda-soporte': 'Ayuda y soporte | PLP',
    '/configuraciones-empresa/chat-bot': 'ChatBot | PLP',

    // Sobre nosotros
    '/sobre-plp': 'Sobre PLP | PLP',
    '/sobre-plp-contratista': 'Sobre PLP contratista | PLP',
    '/sobre-plp-contratante': 'Sobre PLP contratante | PLP',
    '/sobre-plp-empresa': 'Sobre PLP empresa | PLP',

    // Centro de notificaciones
    '/centro-de-notificaciones-contratista': 'Notificaciones contratista | PLP',
    '/centro-de-notificaciones-contratante': 'Notificaciones contratante | PLP',
    '/centro-de-notificaciones-empresa': 'Notificaciones empresa | PLP',

    // ChatBot ayuda
    '/chat-bot-ayuda': 'Ayuda ChatBot | PLP',
    '/chat-bot-ayuda-contratista': 'Ayuda ChatBot contratista | PLP',
    '/chat-bot-ayuda-contratante': 'Ayuda ChatBot contratante | PLP',
    '/chat-bot-ayuda-empresa': 'Ayuda ChatBot empresa | PLP',

    // Categorías trabajo (Jobs)
    '/categorias-trabajo': 'Categorías de trabajo | PLP',
    '/categorias-trabajo/categorias': 'Categorías de trabajo | PLP',
    '/categorias-trabajo-contratista': 'Categorías de trabajo contratista | PLP',
    '/categorias-trabajo-contratante': 'Categorías de trabajo contratante | PLP',
    '/categorias-trabajo-empresa': 'Categorías de trabajo empresa | PLP',

    // Otros
    '/terminos-condiciones': 'Términos y condiciones | PLP',
    '/ayuda-soporte': 'Ayuda y soporte | PLP',
  }


  useEffect(() => {
    document.title = titles[location.pathname] || 'PLP'
  }, [location.pathname])

  return null
}