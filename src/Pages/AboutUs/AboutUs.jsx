import React from 'react'
import { Header } from '../../Components/Header/Header'

export const AboutUs = () => {
  return (
    <div className='p-6'>
      <Header
        middleObject={
          <h1 className='text-5xl font-[afacadBold] text-[#405e7f]'>
            Sobre PLP (Plataforma Laboral Proactiva)
          </h1>
        }
      />
      <div className='max-w-7xl py-10 md:px-16 lg:px-24 mx-auto mt-15 text-gray-800'>
        <section className="grid lg:grid-cols-2 gap-10 mb-12 items-center">
          <div className="space-y-4">
            <p>
              En <strong>PLP - Plataforma Laboral Proactiva</strong>, creemos firmemente que el talento no siempre viene acompañado de un título universitario, y que las habilidades, la experiencia y la actitud son igual de valiosas —si no más— al momento de construir un equipo de trabajo sólido, creativo y comprometido.
            </p>
            <p>
              Cada día, miles de personas con grandes capacidades enfrentan un desafío común: encontrar una oportunidad laboral digna. Son individuos con años de experiencia, conocimiento práctico, creatividad, ética laboral y pasión por lo que hacen. Sin embargo, por no contar con un título profesional, se ven constantemente excluidos de procesos de selección tradicionales.
            </p>
            <p>
              Frente a esta realidad, nace <strong>PLP</strong>, una plataforma creada con el propósito de cerrar la brecha entre el talento real y las oportunidades laborales disponibles. Queremos transformar la manera en que se conecta el mundo laboral, valorando lo que verdaderamente importa.
            </p>
          </div>
          <img
            src="/images/talento.png"
            alt="Personas colaborando"
            className="w-full max-h-80 object-contain"
          />
        </section>

        <section className="grid lg:grid-cols-2 gap-10 mb-12 items-center">
          <img
            src="/images/conexion-laboral.png"
            alt="Conexiones laborales"
            className="w-full max-h-80 object-contain order-2 lg:order-1"
          />
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#60efdb] mb-2">¿Qué hacemos?</h2>
            <p>PLP ofrece un espacio accesible e inclusivo donde las personas pueden crear un perfil profesional, compartir su experiencia, demostrar sus habilidades y aspirar a oportunidades laborales sin que un título universitario sea un requisito excluyente.</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Permite que personas sin título profesional se den a conocer profesionalmente.</li>
              <li>Facilita la conexión directa con empresas, emprendedores y proyectos que valoran el talento práctico.</li>
              <li>Ofrece herramientas de visibilidad y posicionamiento para destacar perfiles altamente capacitados.</li>
              <li>Brinda acceso a vacantes que priorizan la experiencia, las habilidades blandas y el compromiso.</li>
            </ul>
            <p>Las empresas también pueden publicar sus vacantes y descubrir perfiles auténticos, motivados y llenos de potencial.</p>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-10 mb-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#60efdb] mb-2">Nuestra visión</h2>
            <p>Soñamos con un mundo laboral donde todas las personas tengan las mismas oportunidades, independientemente de su historial académico.</p>
            <p>Queremos ser una plataforma que empodere a las personas, que derribe estigmas y que inspire a las organizaciones a mirar más allá del papel.</p>
            <p>Porque creemos que el valor de una persona no se mide por un título, sino por su historia, su talento y su impacto.</p>
          </div>
          <img
            src="/images/vision-plp.png"
            alt="Visión de futuro"
            className="w-full max-h-80 object-contain"
          />
        </section>

        <section className="grid lg:grid-cols-2 gap-10 mb-12 items-center">
          <img
            src="/images/mision-equipo.png"
            alt="Misión colaborativa"
            className="w-full max-h-80 object-contain order-2 lg:order-1"
          />
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#60efdb] mb-2">Nuestra misión</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Reconocer y visibilizar el talento no tradicional.</li>
              <li>Conectar a personas sin título con oportunidades reales de crecimiento.</li>
              <li>Transformar la cultura de contratación, haciendo espacio para la diversidad de trayectorias.</li>
              <li>Promover la equidad, la inclusión y el respeto en el entorno laboral.</li>
            </ul>
          </div>
        </section>

        <section className="text-center bg-[#60efdb] rounded-2xl p-8 text-[#405e7f]">
          <h2 className="text-2xl font-bold mb-4">Únete al cambio</h2>
          <p className="max-w-3xl mx-auto mb-4">
            En PLP, no solo ofrecemos una plataforma, sino una comunidad comprometida con la transformación social y laboral. Ya seas un trabajador en busca de oportunidades o una empresa en búsqueda de talento genuino, aquí tienes un lugar.
          </p>
          <p className="font-semibold">Porque todos merecemos la oportunidad de crecer.<br />
            Porque el futuro del trabajo está en las personas.<br />
            <span className="text-xl">Bienvenido a PLP.</span></p>
        </section>
      </div>
    </div>
  )
}
