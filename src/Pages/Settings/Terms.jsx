import { motion } from 'framer-motion'
import { Avatar } from '../../Components/Avatar/Avatar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

export const Terms = ({ embedded = false }) => {
  return (
    <div className='general'>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
       className={`text w-full overflow-y-auto scrollbar-custom pr-4
          ${embedded ? 'container-help-terms h-[100%] max-h-[600px]' : 'container-screen h-screen'}
        `}
      >
        <div className="sub-help-terms max-w-5xl mx-auto px-6 py-8 text-[color:var(--color-card-text)] leading-relaxed">
          <motion.h1
            className="text-3xl font-bold mb-6 text-center border-b-2 border-[#405e7f] pb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            TÉRMINOS Y CONDICIONES DE USO DE PLP (PLATAFORMA LABORAL PROACTIVA)
          </motion.h1>

          <motion.p
            className="text-sm italic mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Última actualización: 03/06/2025
          </motion.p>

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p className="mb-4">
              Al acceder y utilizar la plataforma <strong>PLP (Proactive Labor Platform)</strong> ("la Plataforma"), propiedad de <strong>[Nombre de la Empresa o Razón Social]</strong> ("nosotros", "nuestro", "PLP"), usted ("Usuario") acepta cumplir con estos <strong>Términos y Condiciones</strong> ("Términos"). Si no está de acuerdo con alguna parte de estos Términos, debe abstenerse de usar la Plataforma.
            </p>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">2. Definiciones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plataforma:</strong> Sitio web, aplicación móvil y servicios asociados ofrecidos por PLP.</li>
              <li><strong>Usuario:</strong> Persona natural o jurídica que utiliza la Plataforma (incluye candidatos, empleadores y visitantes).</li>
              <li><strong>Candidato:</strong> Usuario que busca oportunidades laborales y publica su perfil en PLP.</li>
              <li><strong>Empleador:</strong> Empresa, reclutador o emprendedor que publica vacantes o busca talento en PLP.</li>
              <li><strong>Contenido:</strong> Información, textos, imágenes, datos de perfil, ofertas de trabajo y cualquier material compartido en la Plataforma.</li>
            </ul>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">3. Uso de la Plataforma</h2>

            <h3 className="font-semibold mb-2">3.1. Funcionalidades principales</h3>
            <p className="mb-4">
              PLP es una plataforma diseñada para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Conectar <strong>candidatos sin título profesional</strong> con empleadores que valoren habilidades y experiencia.</li>
              <li>Permitir a empresas y emprendedores publicar vacantes y buscar talento basado en competencias.</li>
            </ul>

            <h3 className="font-semibold mb-2">3.2. Obligaciones del Usuario</h3>
            <p className="mb-2">El Usuario se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar <strong>información veraz, exacta y actualizada</strong>.</li>
              <li>No usar la Plataforma para fines ilegales, discriminatorios o fraudulentos.</li>
              <li>No suplantar identidades, difamar o violar derechos de terceros.</li>
              <li>No realizar actividades que dañen la infraestructura técnica de PLP (ej.: hacking, spam).</li>
            </ul>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">4. Registro y Cuentas</h2>

            <h3 className="font-semibold mb-2">4.1. Creación de Perfil</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Los <strong>Candidatos</strong> deben registrarse con datos personales (nombre, experiencia, habilidades, etc.).</li>
              <li>Los <strong>Empleadores</strong> deben verificar su identidad y datos empresariales (ej.: RFC, nombre de la empresa).</li>
            </ul>

            <h3 className="font-semibold mb-2">4.2. Seguridad de la Cuenta</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>El Usuario es responsable de mantener la confidencialidad de su contraseña.</li>
              <li>PLP no será responsable por accesos no autorizados debido a negligencia del Usuario.</li>
            </ul>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">5. Privacidad y Protección de Datos</h2>
            <p>
              El tratamiento de datos personales se rige por nuestra <strong>Política de Privacidad</strong> [enlace], la cual describe:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Qué datos recopilamos (ej.: perfil laboral, historial profesional).</li>
              <li>Cómo usamos y protegemos la información.</li>
              <li>Derechos del Usuario (acceso, rectificación, eliminación de datos).</li>
            </ul>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">6. Contenido y Propiedad Intelectual</h2>

            <h3 className="font-semibold mb-2">6.1. Derechos de PLP</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>La Plataforma, su diseño, software, logotipos y contenido original son propiedad de PLP o sus licenciantes.</li>
              <li>Queda prohibida la reproducción, modificación o distribución no autorizada.</li>
            </ul>

            <h3 className="font-semibold mb-2">6.2. Contenido Generado por Usuarios</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los <strong>Candidatos</strong> otorgan a PLP una licencia no exclusiva para mostrar su perfil a empleadores.</li>
              <li>Los <strong>Empleadores</strong> garantizan que las vacantes publicadas son reales y cumplen con las leyes laborales.</li>
            </ul>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">7. Limitación de Responsabilidad</h2>

            <h3 className="font-semibold mb-2">7.1. Uso bajo su propio riesgo</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>PLP es un <strong>intermediario</strong> y no garantiza la obtención de empleo o la veracidad absoluta de los perfiles.</li>
              <li>No nos hacemos responsables por:
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>Conflictos entre Candidatos y Empleadores.</li>
                  <li>Pérdidas económicas o daños indirectos derivados del uso.</li>
                </ul>
              </li>
            </ul>

            <h3 className="font-semibold mb-2">7.2. Enlaces a Terceros</h3>
            <p>Si la Plataforma incluye enlaces a sitios externos, PLP no controla ni respalda su contenido.</p>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">8. Modificaciones y Terminación</h2>

            <h3 className="font-semibold mb-2">8.1. Cambios en los Términos</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>PLP puede actualizar estos Términos. Los cambios serán notificados por email o mediante anuncios en la Plataforma.</li>
              <li>El uso continuado tras las modificaciones implica aceptación.</li>
            </ul>

            <h3 className="font-semibold mb-2">8.2. Suspensión de Cuentas</h3>
            <p>PLP se reserva el derecho de suspender o eliminar cuentas que:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Incumplan estos Términos.</li>
              <li>Publiquen información falsa o ofensiva.</li>
            </ul>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">9. Ley Aplicable y Resolución de Conflictos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Estos Términos se rigen por las leyes de <strong>[País/Estado, ej.: México]</strong> y cualquier disputa se resolverá en los tribunales de <strong>[Ciudad, ej.: Ciudad de México]</strong>.</li>
              <li>Se fomenta la resolución amistosa de conflictos antes de acudir a vías legales.</li>
            </ul>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">10. Contacto</h2>
            <p>Para preguntas o reclamos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Email:</strong> legal@plp.com</li>
              <li><strong>Dirección:</strong> [Dirección física de la empresa, si aplica]</li>
            </ul>
          </motion.section>

          <motion.div
            className="h-px bg-gray-300 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.section
            className="terms-section p-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            <h3 className="font-semibold mb-3">Notas Clave</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">🔹</span>
                <span><strong>Adaptaciones Legales:</strong> Este documento debe revisarse con un abogado para cumplir con regulaciones locales (ej.: Ley Federal del Trabajo en México, GDPR en Europa).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔹</span>
                <span><strong>Políticas Adicionales:</strong> Asegúrate de tener enlazadas la <strong>Política de Privacidad</strong> y, si aplica, <strong>Términos de Pago</strong> (para suscripciones premium).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔹</span>
                <span><strong>Claridad:</strong> Evita lenguaje ambiguo para reducir riesgos legales.</span>
              </li>
            </ul>
          </motion.section>
        </div>
      </motion.div>
    </div>
  )
}