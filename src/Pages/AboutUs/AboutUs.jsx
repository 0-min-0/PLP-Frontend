import React from 'react'

export const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#405e7f] mb-6">
            Transformando el acceso al trabajo. <span className="text-[#60efdb]">Una historia de propósito.</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            En PLP - Plataforma Laboral Proactiva, creemos que cada persona tiene un valor único que va más allá de los títulos y diplomas.
          </p>
          <div className="w-full h-64 md:h-80 bg-[#60efdb] bg-opacity-20 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
              alt="Diverse team working together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#405e7f]">
            <h3 className="text-xl font-semibold text-[#405e7f] mb-3">Nuestra Razón de Ser</h3>
            <p className="text-gray-700">
              PLP surge como respuesta a una necesidad real y urgente: abrir caminos para que personas con talento comprobado puedan acceder a oportunidades laborales dignas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#60efdb]">
            <h3 className="text-xl font-semibold text-[#405e7f] mb-3">Nuestro Enfoque</h3>
            <p className="text-gray-700">
              Valoramos las habilidades prácticas y fomentamos la confianza mutua mediante trayectorias visibles y un sistema de reputación sólido.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#405e7f]">
            <h3 className="text-xl font-semibold text-[#405e7f] mb-3">Nuestro Compromiso</h3>
            <p className="text-gray-700">
              No solo te ayudamos a encontrar trabajo. Te ayudamos a reconocer tu valor y a conectarte con quienes lo necesitan.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16 bg-[#f8fafc] p-8 rounded-xl">
        <div className="md:w-1/2">
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Person struggling with job search"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#405e7f] mb-6">El desafío actual</h2>
          <p className="text-gray-700 mb-4">
            Sabemos que el mundo laboral tradicional no siempre reconoce el talento que no encaja en los moldes convencionales, y que miles de personas con conocimientos prácticos, experiencia en el terreno y una actitud ejemplar hacia el trabajo son constantemente descartadas.
          </p>
          <p className="text-gray-700 mb-4">
            Vivimos en una sociedad donde el título profesional, en muchos casos, se ha convertido en un filtro excluyente. Sin embargo, la realidad demuestra que el conocimiento se adquiere de muchas maneras: aprendiendo en el trabajo, emprendiendo, colaborando con otros, superando retos y manteniendo una actitud constante de mejora.
          </p>
          <div className="bg-[#405e7f] text-white p-4 rounded-lg">
            <p className="font-medium">
              "El empleo no debe ser un privilegio reservado solo a quienes accedieron a la educación superior formal, sino un derecho basado en la capacidad de aportar valor real."
            </p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Team celebrating success"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#405e7f] mb-6">Nuestra Plataforma</h2>
          <p className="text-gray-700 mb-4">
            Construimos una plataforma digital donde las personas pueden crear un perfil profesional completo, destacando su experiencia laboral, proyectos realizados, habilidades técnicas y blandas, así como recomendaciones y valoraciones de empleadores anteriores.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-[#60efdb] mr-2 mt-1">✓</span>
              <span className="text-gray-700">Acceso a ofertas laborales adaptadas a sus conocimientos y fortalezas</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#60efdb] mr-2 mt-1">✓</span>
              <span className="text-gray-700">Conexión con empresas que buscan personas auténticas y proactivas</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#60efdb] mr-2 mt-1">✓</span>
              <span className="text-gray-700">Participación en procesos de selección más justos</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#60efdb] mr-2 mt-1">✓</span>
              <span className="text-gray-700">Reducción de desigualdades sociales en el acceso al empleo</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-[#405e7f] text-white rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Visión</h2>
        <p className="text-xl text-center mb-6 max-w-4xl mx-auto">
          Imaginamos un mundo donde el talento y el esfuerzo sean más importantes que el lugar donde estudiaste.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#60efdb] mb-3">Para Personas</h3>
            <p>
              Un mundo donde una persona puede construir su futuro gracias a lo que sabe, lo que hace y cómo lo hace, no por una hoja de papel.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#60efdb] mb-3">Para Empresas</h3>
            <p>
              Queremos ser la plataforma de referencia para el talento no tradicional en América Latina y el mundo, conectando empresas con candidatos capaces.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#405e7f] mb-6 text-center">Nuestra Misión</h2>
        <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">
          En PLP trabajamos para democratizar el acceso al empleo digno, reconocer y visibilizar el talento más allá del sistema educativo formal, y cambiar la narrativa del "éxito profesional".
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#60efdb] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#405e7f] mb-3">Democratizar</h3>
            <p className="text-gray-700">
              Ampliar el acceso a empleos dignos para personas que, por motivos económicos o personales, no pudieron acceder a estudios universitarios, pero sí se formaron trabajando.
            </p>
          </div>
          <div className="border border-[#405e7f] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#405e7f] mb-3">Reconocer</h3>
            <p className="text-gray-700">
              Valorar las habilidades prácticas: desde saber reparar una computadora, hasta gestionar un equipo, liderar una venta o desarrollar un producto. Todo conocimiento útil cuenta.
            </p>
          </div>
          <div className="border border-[#405e7f] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#405e7f] mb-3">Conectar</h3>
            <p className="text-gray-700">
              Unir a empresas conscientes con candidatos capaces, fomentando la confianza mutua mediante valoraciones verificadas y trayectorias visibles.
            </p>
          </div>
          <div className="border border-[#60efdb] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#405e7f] mb-3">Transformar</h3>
            <p className="text-gray-700">
              Cambiar la narrativa del éxito profesional, demostrando que hay múltiples caminos y generando un impacto social real.
            </p>
          </div>
        </div>
      </div>

      {/* Who Can Join Section */}
      <div className="bg-[#f8fafc] p-8 rounded-xl mb-16">
        <h2 className="text-3xl font-bold text-[#405e7f] mb-6 text-center">¿Quiénes pueden unirse a PLP?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[#405e7f] mb-3 flex items-center">
              <span className="bg-[#60efdb] text-white p-2 rounded-full mr-3">1</span>
              Personas con talento
            </h3>
            <ul className="space-y-2 pl-12">
              <li className="flex items-start">
                <span className="text-[#60efdb] mr-2">•</span>
                <span>Con experiencia laboral pero sin título universitario</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#60efdb] mr-2">•</span>
                <span>Técnicos, autodidactas y trabajadores independientes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#60efdb] mr-2">•</span>
                <span>Emprendedores o aprendices de oficios</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#405e7f] mb-3 flex items-center">
              <span className="bg-[#60efdb] text-white p-2 rounded-full mr-3">2</span>
              Empresas conscientes
            </h3>
            <ul className="space-y-2 pl-12">
              <li className="flex items-start">
                <span className="text-[#60efdb] mr-2">•</span>
                <span>Que valoran el talento y la actitud por encima del papel</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#60efdb] mr-2">•</span>
                <span>Organizaciones con compromiso social</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#60efdb] mr-2">•</span>
                <span>Que buscan reclutar de forma equitativa y diversa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[#405e7f] to-[#60efdb] text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para formar parte del cambio?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Porque todos tenemos algo que ofrecer. Porque tu experiencia vale. Porque el trabajo digno es un derecho, no un privilegio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-[#405e7f] hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">
            Regístrate como talento
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-20 font-bold py-3 px-6 rounded-lg transition duration-300">
            Empresas - Publica vacantes
          </button>
        </div>
        <p className="mt-6 text-lg">
          Bienvenido a PLP.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-[#405e7f] mb-6 text-center">Contáctanos</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
          <div>
            <div className="text-[#60efdb] text-2xl mb-2">✉️</div>
            <p className="font-medium text-gray-700">plataformalaboralproactiva@example.com</p>
          </div>
          <div>
            <div className="text-[#60efdb] text-2xl mb-2">📞</div>
            <p className="font-medium text-gray-700">+57 312 345 6789</p>
          </div>
          <div>
            <div className="text-[#60efdb] text-2xl mb-2">📍</div>
            <p className="font-medium text-gray-700">Bogotá, Colombia</p>
          </div>
        </div>
      </div>
    </div>
  );
};