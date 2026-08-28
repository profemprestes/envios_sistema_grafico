// Sobre nosotros (ruta /nosotros/sobre-nosotros).
const ABOUT_TIMELINE = [
  ["2019", "Lanzamiento inicial en MDQ", "Iniciamos operaciones con flota propia de motocicletas en las calles céntricas de Mar del Plata, apostando a un servicio ágil y de confianza."],
  ["2021", "Soluciones PyME y LowCost", "Lanzamos la modalidad LowCost agrupada y el Plan Emprendedores para impulsar las ventas online durante la expansión del e-commerce local."],
  ["2023", "Consolidación de flota propia", "Estructura propia de repartidores uniformados y coordinados por WhatsApp para garantizar entregas puntuales sin tercerización."],
  ["2024", "Pioneros MercadoLibre Flex en MDQ", "Nos convertimos en el socio logístico de referencia para entregas same-day de Mercado Libre en todo General Pueyrredón."],
  ["2025", "Hub logístico Friuli 1972", "Inauguración de nuestro depósito central en Chauvín con depósitos de paquetería, picking y tecnología de ruteo optimizado."],
  ["2026", "Infraestructura 3PL y cobertura total", "Más de 7 años de trayectoria consolidada con flota propia, cotizadores en tiempo real y fulfillment integral para tiendas online."],
];

export function NosotrosScreen({ go }) {
  const nav = (p) => (e) => { e.preventDefault(); go(p); };
  return (
    <div>
      <section className="relative overflow-hidden text-white" style={{ background: HERO_BG }}>
        <HeroGrid />
        <Container className="relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Pill tone="dark" ping>Logística soberana · Mar del Plata</Pill>
            <h1 className="font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6">Líderes en logística de última milla</h1>
            <p className="mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl">Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano.</p>
            <div className="mt-8 rounded-2xl bg-white/10 border border-white/15 p-5"><p className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">Propósito operativo 2026</p><p className="text-sm text-white mt-2 leading-relaxed">Conectamos tiendas online, PyMEs y emprendedores de General Pueyrredón mediante una flota motorizada 100% propia, soporte en tiempo real y cumplimiento estricto de horarios.</p></div>
            <dl className="mt-8 grid grid-cols-3 gap-4">{[["+7", "Años en MDQ"], ["100%", "Flota propia"], ["5.0", "Google Reviews"]].map(([n, l]) => <div key={l}><dt className="font-mono text-3xl font-bold text-brand-yellow-500">{n}</dt><dd className="text-xs text-brand-blue-200 mt-1">{l}</dd></div>)}</dl>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src={IMG + "card_heroe_nueva.jpeg"} alt="Mensajero de Envíos DosRuedas entregando un paquete" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
                <div className="p-6" style={{ background: "linear-gradient(to bottom,rgba(6,54,165,.85),rgba(0,39,124,.95))" }}>
                  <div className="flex items-center justify-between"><span className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">Google Reviews 5.0 / 5</span><span className="flex gap-1">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={14} tone="yellow" />)}</span></div>
                  <blockquote className="mt-3 text-sm text-white leading-relaxed">“Matías de Envíos DosRuedas se convirtió en mi héroe logístico por segundo año consecutivo. Rapidez, comunicación clara y un embalaje impecable.”</blockquote>
                  <p className="mt-3 font-mono text-xs text-brand-blue-200">Sol R. · Google Local Guide · Mar del Plata</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12"><h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">Por qué confiar en DosRuedas</h2><p className="mt-4 text-lg text-brand-blue-600 leading-relaxed">Frente a aplicaciones automatizadas y plataformas impersonales, nosotros brindamos compromiso presencial, operadores locales y conocimiento metro a metro de Mar del Plata.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[["message-circle", "Atención humana y directa", "Damos la cara siempre. Cuando surge una duda o reprogramación, te comunicás directamente por WhatsApp con operadores en Mar del Plata que gestionan y resuelven en el acto.", "Comunicación directa vía WhatsApp"], ["bike", "Flota propia capacitada", "No tercerizamos de forma descontrolada. Nuestro equipo de cadetes está uniformado, capacitado en manejo de paquetes frágiles y con base física en Friuli 1972.", "Cobertura total General Pueyrredón"], ["shield-check", "Garantía operativa sin excusas", "Tu reputación comercial depende de la puntualidad de entrega. Si coordinamos un envío express en 2 horas o un ruteo programado, cumplimos la franja pactada sin desvíos.", "Franja pactada, sin desvíos"]].map(([i, t, d, tag]) => (
              <div key={t} className="border-t border-brand-blue-200 pt-6"><span className="w-12 h-12 rounded-xl bg-brand-blue-50 flex items-center justify-center"><Icon name={i} size={22} tone="blue" /></span><h3 className="font-subheading uppercase tracking-widest text-xl text-brand-blue-700 mt-4">{t}</h3><p className="text-sm text-brand-blue-600 leading-relaxed mt-2">{d}</p><p className="font-mono text-xs text-brand-blue-500 uppercase mt-4">{tag}</p></div>
            ))}
          </div>
          <div className="mt-8"><Cta href="#/cotizar/express" onClick={nav("/cotizar/express")}>Cotizar tu envío</Cta></div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-brand-ink text-white relative overflow-hidden">
        <HeroGrid id="values-grid" />
        <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4"><Pill tone="dark">Filosofía operativa</Pill><h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl mt-4">Nuestros valores</h2><p className="mt-4 text-brand-blue-200 leading-relaxed">Los pilares innegociables que sostienen nuestra operativa diaria en cada rincón de General Pueyrredón.</p></div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[["package", "Cuidado del paquete", "Manipulación profesional de paquetería e-commerce, indumentaria, tecnología y repuestos. Cada envío viaja seguro y protegido de las inclemencias del clima marplatense."], ["badge-check", "Transparencia total", "Tarifas públicas por kilómetro exacto según tabla oficial 2026. Sin costos ocultos, sin sorpresas en la liquidación de tus envíos."], ["cpu", "Innovación tecnológica", "Ruteo optimizado en tiempo real, trazabilidad GPS instantánea y avisos automáticos para tus clientes en Mar del Plata."]].map(([i, t, d]) => (
              <div key={t} className="rounded-2xl bg-white/5 border border-white/10 p-6"><Icon name={i} size={24} tone="yellow" /><h3 className="font-subheading uppercase tracking-widest text-lg mt-4">{t}</h3><p className="text-sm text-brand-blue-200 leading-relaxed mt-2">{d}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4"><h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">Nuestra historia</h2><p className="mt-4 text-brand-blue-600 leading-relaxed">Más de 7 años transformando la última milla y la mensajería urbana en la ciudad de Mar del Plata.</p><div className="mt-8 rounded-3xl overflow-hidden border border-brand-blue-100"><img src={IMG + "card_moto01.webp"} alt="Moto de reparto Envíos DosRuedas" className="w-full aspect-square object-cover" /></div></div>
          <ol className="lg:col-span-8 space-y-6">
            {ABOUT_TIMELINE.map(([y, t, d]) => <li key={y} className="flex gap-6 border-t border-brand-blue-100 pt-6"><span style={{ width: 72 }} className="shrink-0 font-mono text-2xl font-bold text-brand-blue-700">{y}</span><div className="flex-1"><h3 className="font-subheading uppercase tracking-widest text-lg text-brand-ink">{t}</h3><p className="text-sm text-brand-blue-600 leading-relaxed mt-1">{d}</p></div></li>)}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100">
        <Container>
          <div className="max-w-3xl mb-12"><h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">Nuestro equipo en calle</h2><p className="mt-4 text-lg text-brand-blue-600">Una estructura humana consolidada con base física en la ciudad, lista para responder al ritmo de tu negocio.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[["Flota propia", "+20", "Repartidores en calle", "Cadetes capacitados y uniformados que conocen cada atajo y zona de Mar del Plata para entregas veloces y seguras."], ["Hub Chauvín", "100%", "Base operativa en MDQ", "Depósito central en Friuli 1972 para recepción, almacenamiento, consolidación de paquetes y despacho diario."], ["Máxima velocidad", "< 2 h", "Tiempo promedio Express", "Servicio prioritario punto a punto dentro del ejido urbano con monitoreo continuo de ruta."], ["Confianza local", "+7", "Años de trayectoria", "Compromiso ininterrumpido con comerciantes, emprendedores y empresas marplatenses."]].map(([tag, n, t, d], i) => (
              <div key={t} className={"rounded-3xl p-6 " + (i === 1 ? "bg-brand-blue-700 text-white" : "bg-white border border-brand-blue-100 text-brand-ink")}><p className={"font-subheading uppercase tracking-widest text-xs " + (i === 1 ? "text-brand-yellow-500" : "text-brand-blue-500")}>{tag}</p><p className="font-mono text-4xl font-bold mt-3">{n}</p><h3 className="font-subheading uppercase tracking-widest text-lg mt-2">{t}</h3><p className={"text-sm leading-relaxed mt-2 " + (i === 1 ? "text-brand-blue-200" : "text-brand-blue-600")}>{d}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12"><h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">Misión, visión y compromiso</h2><p className="mt-4 text-lg text-brand-blue-600">Hacia dónde vamos y cuáles son las convicciones que guían cada entrega y ruteo diario en Mar del Plata.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8"><h3 className="font-display uppercase text-3xl text-brand-ink leading-none">Nuestra misión</h3><p className="mt-4 text-brand-blue-600 leading-relaxed">Brindar a cada negocio, e-commerce y particular de Mar del Plata una infraestructura de última milla confiable, accesible y ágil. Eliminamos las fricciones logísticas para que nuestros clientes puedan enfocarse en vender más y crecer.</p><p className="font-mono text-xs text-brand-blue-500 uppercase mt-6">Compromiso operativo permanente</p></div>
            <div className="rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8"><h3 className="font-display uppercase text-3xl text-brand-ink leading-none">Nuestra visión</h3><p className="mt-4 text-brand-blue-600 leading-relaxed">Ser el estándar indiscutido de logística urbana y fulfillment 3PL en la Costa Atlántica, reconocidos por nuestra puntualidad, tecnología de ruteo y calidez en la atención humana.</p><p className="font-mono text-xs text-brand-blue-500 uppercase mt-6">Visión de futuro 2026</p></div>
          </div>
          <div className="mt-8 rounded-3xl text-white p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden" style={{ background: HERO_BG }}>
            <HeroGrid id="about-cta-grid" />
            <div className="relative lg:col-span-8"><h3 className="font-display uppercase leading-[0.9] text-4xl">¿Listo para enviar con los mejores?</h3><p className="mt-3 text-brand-blue-200 leading-relaxed">Sumate a las cientos de tiendas y emprendimientos de Mar del Plata que confían su logística diaria en Envíos DosRuedas. Cotizá en línea o hablá hoy con un asesor comercial.</p></div>
            <div className="relative lg:col-span-4 flex flex-wrap gap-4 lg:justify-end"><Cta href="#/cotizar/express" onClick={nav("/cotizar/express")}>Cotizar envío</Cta><Cta variant="ghost" href="#/contacto" onClick={nav("/contacto")}>Contactar asesor</Cta></div>
          </div>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { NosotrosScreen });
