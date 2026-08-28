// Legales (rutas /terminos-y-condiciones y /politica-de-privacidad). doc: "terminos" | "privacidad".
const LEGAL = {
  terminos: {
    pill: "Marco legal del servicio", h1: "Términos y Condiciones", text: "Las reglas del juego claras y transparentes. Al solicitar nuestros servicios, aceptás estas pautas operativas diseñadas para proteger tu mercadería.",
    asideTitle: "Secciones del contrato", asideNote: ["Operación transparente", "Nuestras pautas operativas aseguran un servicio responsable y veloz."], keyLabel: "Aspectos clave", unit: "Cláusula",
    sections: [
      ["aceptacion", "Aceptación", "1. Aceptación de los Términos", "Al solicitar o utilizar cualquiera de los servicios de envío proporcionados por Envíos DosRuedas, vos (el cliente o comercio) aceptás y te comprometés a cumplir con los siguientes términos y condiciones.", ["Consentimiento expreso al solicitar servicios en la plataforma", "Aplicable a usuarios individuales, comercios y clientes corporativos", "Vigencia legal plena en toda la ciudad de Mar del Plata"]],
      ["descripcion", "Descripción", "2. Descripción del Servicio", "Envíos DosRuedas proporciona servicios de mensajería urbana y paquetería local en todo el ejido urbano de Mar del Plata (no cubrimos zonas aledañas no especificadas). Los detalles específicos de cada modalidad (Express inmediato, LowCost programado, MercadoLibre Flex y 3PL) se rigen según la tabla tarifaria oficial 2026.", ["Operación activa y cobertura integral en Mar del Plata", "Diversas modalidades de envío (Express, LowCost y Flex)", "Soporte logístico adaptado para eCommerce y PyMEs locales"]],
      ["obligaciones", "Obligaciones", "3. Obligaciones del Usuario", "Como cliente, sos responsable de proporcionar información precisa para la recolección y entrega (direcciones exactas, timbres, referencias y teléfono del destinatario). El embalaje adecuado para su transporte seguro en motocicleta es responsabilidad del remitente. No transportamos sustancias ilegales, peligrosas ni dinero en efectivo fuera de cobros contrareembolso autorizados.", ["Precisión total en datos de origen, destino y contactos directos", "Prohibición estricta de sustancias peligrosas o ilícitas", "Responsabilidad del cliente sobre el embalaje y sellado"]],
      ["tarifas", "Tarifas y pago", "4. Tarifas y Pago", "Las tarifas se calculan en base a la distancia kilométrica real y el tipo de servicio seleccionado según la tabla 2026. Los viajes de más de 10 km aplican tarifa base más excedente por kilómetro adicional entero. Los medios de pago incluyen efectivo, transferencia bancaria inmediata o cuenta corriente quincenal/mensual para clientes corporativos.", ["Tarifas transparentes calculadas por rangos kilométricos 2026", "Medios de pago: transferencia, efectivo o cuenta corriente", "Ajustes únicamente por demoras ajenas o cambios de recorrido"]],
      ["responsabilidad", "Responsabilidad", "5. Limitación de Responsabilidad", "Garantizamos la máxima custodia y cuidado de cada paquete. No nos responsabilizamos por demoras extraordinarias ocasionadas por fuerza mayor, condiciones meteorológicas severas (temporal o inundaciones en la vía pública) o cortes de tránsito.", ["Exclusión de responsabilidad por eventos de fuerza mayor", "Tiempos de entrega con SLA prioritario garantizado", "Cobertura de reenvío en caso de incidencias de transporte"]],
      ["modificaciones", "Modificaciones", "6. Modificaciones de los Términos", "Nos reservamos el derecho de actualizar estos términos para adecuarlos a nuevas tecnologías y disposiciones operativas. Las modificaciones entrarán en vigencia tras su publicación online en este sitio web.", ["Actualización transparente en el sitio oficial en tiempo real", "Notificación directa de condiciones tarifarias a comercios adheridos", "Vigencia inmediata para nuevos despachos solicitados"]],
    ],
    cta: ["Contacto y dudas legales", "¿Tenés alguna consulta legal?", "Si tenés dudas operativas o inquietudes sobre nuestros términos, ponete en contacto con nuestro equipo directivo."],
  },
  privacidad: {
    pill: "Navegación 100% protegida", h1: "Política de Privacidad", text: "En Envíos DosRuedas, tu confianza es nuestra prioridad. Te explicamos cómo protegemos y utilizamos tu información personal.",
    asideTitle: "Índice de secciones", asideNote: ["Seguridad garantizada", "Tus datos logísticos se cifran con los más altos estándares."], keyLabel: "Puntos clave", unit: "Sección",
    sections: [
      ["introduccion", "Introducción", "Introducción", "Bienvenido a Envíos DosRuedas. Nos comprometemos a proteger tu privacidad y a manejar tus datos personales de manera transparente y segura.", ["Transparencia absoluta en el tratamiento de datos", "Cumplimiento con la Ley de Protección de Datos Personales N° 25.326", "Seguridad y resguardo de la información de envíos"]],
      ["informacion", "Recopilación", "1. Información que Recopilamos", "Recopilamos información que nos proporcionás directamente, como tu nombre, número de teléfono, dirección de correo electrónico y direcciones de recogida/entrega al utilizar nuestros servicios. También podemos recopilar información técnica sobre tu dispositivo y uso de nuestro sitio web a través de cookies y tecnologías similares.", ["Datos de contacto (nombre, teléfono, e-mail)", "Datos logísticos (dirección de recogida y entrega en MDQ)", "Datos de navegación (cookies y telemetría técnica)"]],
      ["uso", "Uso de datos", "2. Uso de la Información", "Utilizamos tu información para proveer y gestionar nuestros servicios de envío, comunicar el estado de tus despachos, enviar ofertas y actualizaciones importantes, y optimizar y personalizar nuestro servicio.", ["Gestión y ruteo de envíos express y lowcost", "Notificaciones automáticas y alertas de entrega en tiempo real", "Mejora continua del algoritmo de cotización y servicio"]],
      ["compartir", "Compartir datos", "3. Cómo Compartimos tu Información", "No vendemos ni alquilamos tu información personal. La compartimos con nuestros repartidores y socios logísticos únicamente para completar el servicio de entrega, o cuando es requerido por ley.", ["Cero reventa ni alquiler de bases de datos a terceros", "Sincronización segura con cadetes asignados al despacho", "Requerimientos legales y auditorías obligatorias"]],
      ["seguridad", "Seguridad", "4. Seguridad de los Datos", "Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración o destrucción.", ["Encriptación SSL en pasarelas y transmisión de datos", "Control estricto de accesos internos a las consolas de despacho", "Monitoreo activo de brechas y almacenamiento seguro"]],
      ["derechos", "Tus derechos", "5. Tus Derechos", "Tenés derecho a acceder, rectificar o suprimir tus datos personales, u oponerte a su tratamiento en cualquier momento.", ["Acceso inmediato a la información personal almacenada", "Rectificación rápida de direcciones y números telefónicos erróneos", "Supresión definitiva a solicitud del usuario"]],
      ["cambios", "Cambios", "6. Cambios en esta Política", "Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento publicando la nueva versión aquí.", ["Notificación de cambios sustanciales a través de la web", "Archivo histórico de políticas anteriores disponible a solicitud", "Vigencia inmediata tras su publicación online"]],
      ["contacto", "Contacto", "7. Contacto", "Si tenés preguntas sobre esta Política, contactanos a través de nuestro formulario de contacto o en matiascejas@enviosdosruedas.com.", ["Atención directa del responsable de privacidad", "Respuesta garantizada en menos de 48 horas hábiles", "Soporte especializado para PyMEs y eCommerce"]],
    ],
    cta: ["Soporte de privacidad", "¿Tenés dudas de privacidad?", "Escribinos directamente o completá nuestro formulario para que podamos ayudarte de inmediato."],
  },
};

export function LegalScreen({ doc = "terminos", go }) {
  const d = LEGAL[doc];
  const nav = (p) => (e) => { e.preventDefault(); go(p); };
  const [active, setActive] = React.useState(d.sections[0][0]);
  const jump = (id) => (e) => { e.preventDefault(); setActive(id); document.getElementById("legal-" + id)?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  return (
    <div>
      <section className="relative overflow-hidden text-white" style={{ background: HERO_BG }}>
        <HeroGrid />
        <Container className="relative py-16 sm:py-20 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl"><Pill tone="dark">{d.pill}</Pill><h1 className="font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6">{d.h1}</h1><p className="mt-6 text-lg text-brand-blue-200 leading-relaxed">{d.text}</p></div>
          <span className="font-mono text-xs text-brand-blue-200 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">Vigencia operativa 2026</span>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-24 rounded-3xl bg-brand-white-50 border border-brand-blue-100 p-6">
            <h3 className="font-subheading uppercase tracking-widest text-sm text-brand-blue-500">{d.asideTitle}</h3>
            <nav className="mt-4 space-y-1" aria-label={d.asideTitle}>
              {d.sections.map(([id, short], i) => <a key={id} href={"#legal-" + id} onClick={jump(id)} className={"flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors duration-200 " + (active === id ? "bg-brand-blue-700 text-white" : "text-brand-ink hover:bg-brand-blue-50")}><span className={"font-mono text-xs " + (active === id ? "text-brand-yellow-500" : "text-brand-blue-500")}>0{i + 1}</span>{short}</a>)}
            </nav>
            <div className="mt-6 pt-6 border-t border-brand-blue-100"><p className="font-subheading uppercase tracking-widest text-xs text-brand-blue-700">{d.asideNote[0]}</p><p className="text-xs text-brand-blue-600 mt-1">{d.asideNote[1]}</p></div>
          </aside>
          <div className="lg:col-span-8 space-y-6">
            {d.sections.map(([id, short, title, text, keys], i) => (
              <article key={id} id={"legal-" + id} className="rounded-3xl border border-brand-blue-100 p-8" style={{ scrollMarginTop: "6rem" }}>
                <p className="font-mono text-xs text-brand-blue-500">{d.unit} {i + 1} de {d.sections.length}</p>
                <h2 className="font-display uppercase leading-none text-3xl text-brand-ink mt-2">{title}</h2>
                <p className="mt-4 text-brand-blue-600 leading-relaxed">{text}</p>
                <p className="mt-6 font-subheading uppercase tracking-widest text-xs text-brand-blue-700">{d.keyLabel}</p>
                <ul className="mt-2 space-y-2">{keys.map((k) => <li key={k} className="flex items-start gap-2 text-sm text-brand-ink"><Icon name="check" size={16} tone="blue" className="mt-1" />{k}</li>)}</ul>
              </article>
            ))}
            <div className="rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8 flex flex-wrap items-center justify-between gap-6">
              <div><p className="font-subheading uppercase tracking-widest text-xs text-brand-blue-500">{d.cta[0]}</p><h3 className="font-display uppercase text-3xl text-brand-ink leading-none mt-2">{d.cta[1]}</h3><p className="text-sm text-brand-blue-600 mt-2 max-w-xl">{d.cta[2]}</p></div>
              <Cta variant="outline" href="#/contacto" onClick={nav("/contacto")}>Formulario de contacto</Cta>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { LegalScreen });
