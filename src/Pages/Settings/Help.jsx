
import { Avatar } from '../../Components/Avatar/Avatar'

export const Help = () => {
  return (
    <>
      <Avatar />
      <hr className='border-t border-gray-100 my-8' />
      <div className='w-full h-100 max-h-[500px] overflow-y-auto scrollbar-custom pr-4 '>
        <div className="max-w-4xl mx-auto px-6 py-8 text-[#405e7f] leading-relaxed">
          <h1 className="text-3xl font-bold mb-6 text-center border-b-2 border-[#405e7f] pb-4">
            AYUDA Y SOPORTE DE PLP
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Preguntas Frecuentes (FAQ)</h2>

            <h3 className="font-semibold mb-3 text-lg">Para Candidatos</h3>
            <ul className="space-y-4 mb-6">
              <li>
                <p className="font-medium">¿Cómo creo un perfil en PLP?</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Ve a <a href="#" className="text-[#60efdb] hover:underline">Registro</a>, completa tus datos personales, experiencia laboral y habilidades. Sube un currículum opcional para destacarte.</p>
              </li>
              <li>
                <p className="font-medium">¿Puedo usar PLP sin título profesional?</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Sí, PLP está diseñada para valorar habilidades y experiencia práctica. Asegúrate de detallar tu trayectoria en el perfil.</p>
              </li>
              <li>
                <p className="font-medium">¿Cómo aplico a una vacante?</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Haz clic en "Aplicar" en la oferta de empleo y sigue las instrucciones. Recibirás confirmación por email.</p>
              </li>
            </ul>

            <h3 className="font-semibold mb-3 text-lg">Para Empleadores</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">¿Cómo publico una vacante?</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Registra tu empresa, verifica tus datos y haz clic en "Publicar vacante". Revisaremos tu anuncio antes de activarlo.</p>
              </li>
              <li>
                <p className="font-medium">¿Qué tipo de candidatos encontraré en PLP?</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Profesionales con experiencia demostrable, pero sin título formal. Ideal para roles que priorizan competencias técnicas.</p>
              </li>
              <li>
                <p className="font-medium">¿Hay costos por usar PLP?</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Consulta nuestros <a href="#" className="text-[#60efdb] hover:underline">Planes y Precios</a>. Algunas funciones básicas son gratuitas.</p>
              </li>
            </ul>
          </section>

          <div className="h-px bg-gray-300 my-6"></div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Guías y Tutoriales</h2>
            <ul className="space-y-3 list-disc pl-5">
              <li><a href="#" className="text-[#60efdb] hover:underline">Video tutorial: Cómo optimizar tu perfil para empleadores</a></li>
              <li><a href="#" className="text-[#60efdb] hover:underline">Guía PDF: Mejores prácticas para publicar vacantes</a></li>
              <li><a href="#" className="text-[#60efdb] hover:underline">Webinar: Cómo destacar habilidades sin título profesional</a></li>
            </ul>
          </section>

          <div className="h-px bg-gray-300 my-6"></div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Problemas Técnicos</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">La app/web no carga</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Revisa tu conexión a internet o actualiza tu navegador/app. Si persiste, repórtalo <a href="#" className="text-[#60efdb] hover:underline">aquí</a>.</p>
              </li>
              <li>
                <p className="font-medium">No recibo emails de PLP</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Verifica tu carpeta de spam o añade contacto@plp.com a tus contactos.</p>
              </li>
            </ul>
          </section>

          <div className="h-px bg-gray-300 my-6"></div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Contacto Directo</h2>
            <ul className="space-y-3">
              <li className="flex items-baseline">
                <span className="w-24 font-medium">Email:</span>
                <span>soporte@plp.com <span className="text-sm text-gray-600">(Respuesta en ≤ 24 horas)</span></span>
              </li>
              <li className="flex items-baseline">
                <span className="w-24 font-medium">Teléfono:</span>
                <span>[+XX XXX XXX XXXX] <span className="text-sm text-gray-600">(Lunes a Viernes, 9:00 a 18:00 hrs)</span></span>
              </li>
              <li className="flex items-baseline">
                <span className="w-24 font-medium">Chat en vivo:</span>
                <span>Disponible en la app/web (icono de burbuja en esquina inferior derecha)</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-gray-300 my-6"></div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Denuncias y Seguridad</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">Perfiles o vacantes sospechosas</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Repórtalo en <a href="#" className="text-[#60efdb] hover:underline">este formulario</a> o escríbenos a seguridad@plp.com.</p>
              </li>
              <li>
                <p className="font-medium">Protección de datos</p>
                <p className="ml-4 mt-1 pl-2 border-l-2 border-[#60efdb]">Revisa nuestra <a href="#" className="text-[#60efdb] hover:underline">Política de Privacidad</a> para saber cómo cuidamos tu información.</p>
              </li>
            </ul>
          </section>

          <div className="h-px bg-gray-300 my-6"></div>

          <section className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold">¿Cómo podemos mejorar PLP?</h3>
            <p className="mt-2">Déjanos tus sugerencias <a href="#" className="text-[#60efdb] hover:underline">en este formulario</a>.</p>
          </section>
        </div>
      </div>
    </>
  )
}