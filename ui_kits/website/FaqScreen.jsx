// Preguntas frecuentes (ruta /nosotros/preguntas-frecuentes). 18 preguntas reales del sitio (JSON-LD FAQPage).
const FAQ_CATS = [
  { key: "servicios", title: "Servicios y Envíos", text: "Soluciones de última milla, cobertura urbana y tipos de entrega" },
  { key: "tiempos", title: "Tiempos y Operatoria", text: "Horarios de base, anticipación de pedidos, seguimiento y contingencias" },
  { key: "pagos", title: "Precios, Pagos y Facturación", text: "Cálculo por distancia, métodos de pago y planes para comercios" },
  { key: "confianza", title: "Confianza y Diferenciación", text: "Nuestra propuesta de valor, flota propia y contacto directo" },
];
const FAQS = [
  ["servicios", "¿Qué tipo de servicios y soluciones logísticas realizan en Mar del Plata?", "Ofrecemos mensajería urbana y soluciones para e-commerce: Envíos Flex para MercadoLibre, Envíos Express prioritarios, reparto LowCost programado, cadetería corporativa, mandados y servicio integral 3PL (almacenamiento, preparación de pedidos y distribución)."],
  ["servicios", "¿Cuáles son las zonas de cobertura?", "Cubrimos de forma integral todo el ejido urbano de Mar del Plata (no cubrimos zonas aledañas), garantizando presencia y entregas seguras en todos los barrios de la ciudad."],
  ["servicios", "¿Hacen entregas en el mismo día (Same-Day) y Mercado Envíos Flex?", "Sí, somos especialistas en entregas en el día. Retiramos tus ventas y las entregamos en la misma jornada, cumpliendo estrictamente los tiempos de MercadoLibre para proteger tu reputación y medalla de vendedor."],
  ["servicios", "¿Cuáles son los límites de peso y tamaño por paquete?", "Operamos con una flota propia y exclusiva de motocicletas. La capacidad máxima estándar es de hasta 5 kg o dimensiones de aproximadamente 40x40x30 cm por bulto."],
  ["servicios", "¿Realizan entregas a contrareembolso?", "Sí, realizamos la cobranza en efectivo al momento de entregar el producto. El dinero recaudado se rinde en el transcurso del mismo día o a primera hora del día hábil siguiente."],
  ["servicios", "¿Trabajan con empresas o solo con particulares?", "Atendemos a empresas, pymes, tiendas online, emprendedores y particulares que necesiten cadetería puntual o recurrente."],
  ["tiempos", "¿Cuáles son sus horarios de atención y recepción de pedidos?", "Nuestro horario de atención en base (Friuli 1972) es de lunes a viernes de 09:00 a 18:00 hs y sábados de 10:00 a 15:00 hs. Para el servicio LowCost del día, el horario de corte de recepción de pedidos es a las 13:00 hs."],
  ["tiempos", "¿Cómo funciona el Servicio Express y con cuánta anticipación debo pedirlo?", "El Servicio Express cuenta con prioridad operativa inmediata para envíos urgentes. Podés programar tu franja horaria de retiro y entrega con una antelación mínima de 2 horas."],
  ["tiempos", "¿Cómo realizo el seguimiento de mi envío?", "Centralizamos la gestión de forma ágil y directa vía WhatsApp. Te mantenemos informado del estado del paquete y te enviamos la confirmación inmediata una vez concretada la entrega."],
  ["tiempos", "¿Qué información necesito proporcionar para solicitar un envío?", "Solo requerimos: dirección exacta de retiro, dirección de entrega, franja horaria, detalle o tamaño del paquete, y nombre con teléfono de contacto de quien recibe."],
  ["tiempos", "¿Puedo modificar la dirección de entrega cuando el paquete ya está en camino?", "Sí, podés avisarnos por WhatsApp y coordinamos el cambio. Tené en cuenta que, dependiendo de la distancia a la nueva zona, puede aplicar un costo adicional por kilometraje."],
  ["tiempos", "¿Qué sucede si el destinatario no está en el domicilio o rechaza el producto?", "Te avisamos en el momento para intentar resolverlo. Si el paquete no puede entregarse y debe regresar a tu local o depósito, la devolución se realiza totalmente sin cargo."],
  ["pagos", "¿Cómo calculan el costo del envío?", "El valor se calcula según la distancia punto a punto entre retiro y entrega, contemplando adicionales si existen (días de lluvia, bultos especiales o demoras en espera)."],
  ["pagos", "¿Cuáles son las formas de pago aceptadas?", "Podés abonar mediante transferencia bancaria, dinero en cuenta o efectivo al momento del retiro o la entrega."],
  ["pagos", "¿Emiten factura por el servicio?", "Sí, emitimos Factura C para todos nuestros servicios profesionales, comerciales y corporativos."],
  ["pagos", "¿Tienen planes o tarifas especiales para emprendedores y envíos masivos?", "Sí, contamos con el Plan Emprendedores y esquemas de tarifas reducidas para comercios y marcas con volumen diario recurrente."],
  ["confianza", "¿Qué diferencia a Envíos DosRuedas de otras mensajerías o apps?", "Brindamos logística con cara humana: flota propia de motos (cero tercerización informal), atención personalizada y directa por WhatsApp sin bots impersonales, y una calificación perfecta de 5 estrellas en Mar del Plata respaldada por nuestra puntualidad, cuidado y compromiso real."],
  ["confianza", "¿Cómo puedo solicitar un envío o pedir una cotización?", "Escribinos directamente por WhatsApp al 223 660-2699 y un operador te responderá al instante con la cotización exacta para tu pedido."],
];
const FAQ_TOP = ["¿Cuáles son sus horarios de atención y recepción de pedidos?", "¿Cómo realizo el seguimiento de mi envío?", "¿Qué sucede si el destinatario no está en el domicilio o rechaza el producto?"];
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function FaqScreen({ go }) {
  const nav = (p) => (e) => { e.preventDefault(); go(p); };
  const [cat, setCat] = React.useState("servicios");
  const [q, setQ] = React.useState("");
  const [open, setOpen] = React.useState(0);
  const list = q.trim() ? FAQS.filter((f) => norm(f[1] + " " + f[2]).includes(norm(q))) : FAQS.filter((f) => f[0] === cat);
  const jump = (question) => { const f = FAQS.find((x) => x[1] === question); setQ(""); setCat(f[0]); setOpen(FAQS.filter((x) => x[0] === f[0]).indexOf(f)); document.getElementById("faq-accordion")?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <div>
      <section className="relative overflow-hidden text-white" style={{ background: HERO_BG }}>
        <HeroGrid />
        <Container className="relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <Pill tone="dark">Centro de soporte · Mar del Plata</Pill>
            <h1 className="font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6">¿Tenés dudas?</h1>
            <p className="mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl">Buscá por palabra clave o elegí una categoría. Si no está, te respondemos por WhatsApp en minutos.</p>
            <div className="mt-8 relative"><label htmlFor="faq-search" className="sr-only">Buscar en preguntas frecuentes</label><input id="faq-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ej: ¿cuánto tarda un envío a Batán?" className="w-full h-14 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500" style={{ paddingLeft: "3rem" }} /><span className="absolute" style={{ left: "1.1rem", top: "1.1rem" }}><Icon name="search" size={18} tone="yellow" /></span></div>
            <div className="mt-4 flex flex-wrap items-center gap-2"><span className="font-mono text-xs text-brand-blue-200">Temas:</span>{["Express", "LowCost", "Flex", "3PL", "Pagos"].map((t) => <button key={t} type="button" onClick={() => setQ(t)} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 font-subheading uppercase tracking-widest text-xs text-white hover:bg-white/20">{t}</button>)}</div>
          </div>
          <div className="lg:col-span-5 rounded-3xl bg-brand-ink/60 backdrop-blur-md border border-white/20 p-6">
            <p className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">Preguntas top MDQ</p>
            <h2 className="font-display uppercase text-2xl mt-2">Respuestas rápidas</h2>
            <ul className="mt-4 space-y-2">{FAQ_TOP.map((t) => <li key={t}><button type="button" onClick={() => jump(t)} className="w-full text-left flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10"><span>{t}</span><Icon name="arrow-right" size={16} tone="yellow" /></button></li>)}</ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><span className="font-mono text-xs text-brand-blue-200">¿No encontrás tu duda? Respuesta &lt; 5 min</span><Cta small icon="message-circle" href="https://wa.me/542236602699?text=Hola!%20Tengo%20una%20duda%20sobre%20los%20env%C3%ADos%20de%20Env%C3%ADos%20DosRuedas%20en%20Mar%20del%20Plata.">Preguntanos por WhatsApp</Cta></div>
          </div>
        </Container>
      </section>

      <section id="faq-accordion" className="py-16 sm:py-20 lg:py-24 bg-white" aria-label="Preguntas Frecuentes por Categoría">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {FAQ_CATS.map((c) => { const n = FAQS.filter((f) => f[0] === c.key).length; const active = !q && cat === c.key; return (
              <button key={c.key} type="button" onClick={() => { setQ(""); setCat(c.key); setOpen(0); }} className={"text-left rounded-2xl p-5 border transition-colors duration-200 " + (active ? "bg-brand-blue-700 border-brand-blue-700 text-white" : "bg-brand-white-50 border-brand-blue-100 text-brand-ink hover:bg-brand-blue-50")}>
                <span className={"font-mono text-xs " + (active ? "text-brand-yellow-500" : "text-brand-blue-500")}>{n} preguntas</span><h3 className="font-subheading uppercase tracking-widest text-lg mt-1">{c.title}</h3><p className={"text-xs mt-1 " + (active ? "text-brand-blue-200" : "text-brand-blue-600")}>{c.text}</p>
              </button>); })}
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-6"><div><h2 className="font-display uppercase leading-[0.9] text-4xl text-brand-ink">{q ? "Resultados de búsqueda" : FAQ_CATS.find((c) => c.key === cat).title}</h2><p className="text-brand-blue-600 mt-2">{q ? `${list.length} coincidencia(s) para "${q}"` : FAQ_CATS.find((c) => c.key === cat).text}</p></div><span className="font-mono text-xs text-brand-blue-500">Mar del Plata 2026</span></div>
            {list.length === 0 && <div className="rounded-2xl bg-brand-white-50 border border-brand-blue-100 p-8 text-center"><p className="font-subheading uppercase tracking-widest text-lg text-brand-ink">Sin resultados</p><p className="text-sm text-brand-blue-600 mt-2">Probá con otra palabra o escribinos por WhatsApp.</p></div>}
            <div className="divide-y border-brand-blue-100" style={{ borderColor: "#bacefd" }}>
              {list.map((f, i) => (
                <div key={f[1]} className="py-2">
                  <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left flex items-center justify-between gap-4 py-3"><h3 className="font-subheading uppercase tracking-wide text-lg text-brand-ink">{f[1]}</h3><span className={"w-9 h-9 rounded-full flex items-center justify-center shrink-0 " + (open === i ? "bg-brand-blue-700" : "bg-brand-blue-50")}><Icon name={open === i ? "minus" : "plus"} size={16} tone={open === i ? "yellow" : "blue"} /></span></button>
                  {open === i && <p className="pb-4 text-brand-blue-600 leading-relaxed max-w-3xl">{f[2]}</p>}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="faq-cta" className="py-16 sm:py-20 bg-brand-white-50 border-t border-brand-blue-100">
        <Container className="rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8"><p className="font-subheading uppercase tracking-widest text-xs text-brand-blue-500">Soporte humano en MDP</p><h2 className="font-display uppercase leading-[0.9] text-4xl text-brand-ink mt-2">¿No encontraste lo que buscabas?</h2><p className="mt-3 text-brand-blue-600 leading-relaxed">No te preocupes. Nuestro equipo de soporte está listo para ayudarte de inmediato con cualquier consulta específica que tengas sobre nuestros servicios de mensajería y delivery.</p></div>
          <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end"><Cta icon="message-circle" href="https://wa.me/5492236602699?text=Hola,%20tengo%20una%20consulta%20que%20no%20encontr%C3%A9%20en%20las%20FAQ">Hablá por WhatsApp</Cta><Cta variant="outline" href="#/contacto" onClick={nav("/contacto")}>Contacto directo</Cta></div>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { FaqScreen });
