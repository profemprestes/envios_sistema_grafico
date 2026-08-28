// Rediseño de HomeScreen para Stitch Design System
// Sin Canvas Dark Brand Ink (#00277C), colores de marca luminosos y acentos en Brand Yellow 500.

const REDESIGN_SERVICES = [
  { 
    tag: "Prioridad 1", 
    zone: "Mar del Plata y Batán", 
    name: "Envíos Express", 
    text: "Mensajería en moto con despachos inmediatos punto a punto y respuesta en minutos.", 
    entrega: "30-90 min", 
    tarifa: ".700 base", 
    peso: "Hasta 10 kg", 
    img: "card_moto01.webp", 
    path: "/servicios/envios-express", 
    featured: true 
  },
  { 
    tag: "Económico", 
    zone: "Todo General Pueyrredón", 
    name: "Envíos LowCost", 
    text: "Envíos programados para e-commerce con tarifas optimizadas y retiro en tu local.", 
    entrega: "Mismo día / 24 hs", 
    tarifa: ".000 base", 
    peso: "Hasta 15 kg", 
    img: "box_card.jpeg", 
    path: "/servicios/envios-lowcost", 
    featured: false 
  },
  { 
    tag: "Integración MercadoLibre", 
    zone: "Cobertura Completa", 
    name: "Mercado Envíos Flex", 
    text: "Entregas en el día con cumplimiento estricto de SLA para proteger tu reputación.", 
    entrega: "Same-Day garantizado", 
    tarifa: "Zonificado oficial", 
    peso: "Motos & Utilitarios", 
    img: "card_mapa.webp", 
    path: "/servicios/enviosflex", 
    featured: false 
  },
  { 
    tag: "Fulfillment & 3PL", 
    zone: "Hub Friuli 1972", 
    name: "Plan Emprendedores", 
    text: "Almacenaje, armado de paquetes y distribución masiva sin fricciones operativas.", 
    entrega: "Stock permanente", 
    tarifa: "Planes escalables", 
    peso: "Sin límite", 
    img: "hero_express.webp", 
    path: "/servicios/plan-emprendedores", 
    featured: false 
  },
];

const REDESIGN_REVIEWS = [
  { tag: "Encargo especial", title: "Mi héroe logístico por segundo año consecutivo", text: "Un encargo especial: comprar alfajores de temporada en MDQ, embalarlos con mimo y enviármelos para viajar a Europa. Rapidez, comunicación clara y calidez humana.", name: "Sol R", meta: "Local Guide" },
  { tag: "Resolución inmediata", title: "Resolvieron mi problema con la mejor predisposición", text: "Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.", name: "Karen Herrera", meta: "Google Maps" },
  { tag: "Tiendas y comercios", title: "Impecable para llevar pedidos a nuestros clientes", text: "Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio. Además hacen depósitos en cajeros sin problemas.", name: "Agustin Torres", meta: "Google Maps" },
  { tag: "Seguridad y rapidez", title: "Atención de primera, rápido, confiable y seguro", text: "Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100% para envíos puntuales.", name: "Lorenzo Elizagoyen", meta: "Google Maps" },
];

const REDESIGN_INDUSTRIES = [
  { title: "E-Commerce y Tiendas Online", badge: "SLA en el día", desc: "Retiro programado en tu depósito y entrega directa al cliente con tracking por WhatsApp y rendición de cobros contrareembolso en el acto.", bullets: ["Rendición de dinero en el acto", "Soporte exclusivo post-venta", "Cero cancelaciones de Flex"], img: "card_heroe_nueva.jpeg" },
  { title: "Repuestos y Autopartes", badge: "Despacho Urgente", desc: "Entregas inmediatas para talleres y casas de repuestos en toda la ciudad. Traslado seguro de componentes mecánicos.", bullets: ["Respuesta en menos de 15 min", "Manipulación de paquetes pesados", "Rutas directas sin escalas"], img: "card_moto01.webp" },
  { title: "Indumentaria y Moda", badge: "Cuidado Total", desc: "Packaging impecable para prendas y calzado con cambios y devoluciones coordinados a domicilio.", bullets: ["Cambios en mano coordinados", "Embalaje protegido contra lluvia", "Tarifas diferenciadas por volumen"], img: "box_card.jpeg" },
  { title: "Farmacia e Insumos Médicos", badge: "Prioridad Crítica", desc: "Traslado prioritario de medicamentos, muestras y recetas con máxima trazabilidad y puntualidad.", bullets: ["Custodia dedicada", "Monitoreo en tiempo real", "Cadetes certificados"], img: "card_mapa.webp" }
];

export function HomeScreenRedesign({ go }) {
  const nav = (p) => (e) => { e.preventDefault(); if (go) go(p); };
  const [sent, setSent] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="bg-white text-brand-blue-700">
      
      {/* 1. HERO REDISEÑADO */}
      <section className="relative overflow-hidden bg-white border-b border-brand-blue-100 py-16 sm:py-24">
        <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 bg-brand-blue-50 border border-brand-blue-200 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500"></span>
              </span>
              <span className="font-subheading text-xs uppercase tracking-widest text-brand-blue-700 font-bold">
                Flota activa · Despachos Mar del Plata 2026
              </span>
            </div>

            <h1 className="font-display uppercase leading-[0.9] text-5xl sm:text-6xl lg:text-7xl text-brand-blue-700">
              Tu logística <span className="text-brand-blue-500">urbana</span> más veloz y <span className="bg-brand-yellow-500 text-brand-blue-700 px-2 rounded-lg inline-block">segura</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-blue-600 leading-relaxed max-w-xl">
              Mensajería express en moto, entregas en el mismo día e integración directa para tiendas online y Mercado Libre en todo Mar del Plata.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Cta href="#/cotizar/express" onClick={nav("/cotizar/express")}>Cotizá tu Envío</Cta>
              <Cta variant="outline" href="#/servicios/envios-express" onClick={nav("/servicios/envios-express")}>Ver Tarifas y Servicios</Cta>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-blue-100 grid grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-3xl font-bold text-brand-blue-700">30-90m</p>
                <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-600 mt-1">Tiempo Express</p>
              </div>
              <div>
                <p className="font-mono text-3xl font-bold text-brand-blue-700">100%</p>
                <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-600 mt-1">Flota Propia</p>
              </div>
              <div>
                <p className="font-mono text-3xl font-bold text-brand-blue-700">5.0 ★</p>
                <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-600 mt-1">Google Maps</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-brand-blue-50 border border-brand-blue-200 p-4 shadow-float">
              <div className="rounded-2xl bg-white border border-brand-blue-100 overflow-hidden relative">
                <img src={IMG + "card_heroe_nueva.jpeg"} alt="Mensajero de Envíos DosRuedas entregando paquete" className="w-full aspect-[4/5] object-cover" />
                <div className="p-6 bg-white border-t border-brand-blue-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-subheading uppercase tracking-widest text-xs text-brand-blue-500">Hub Central</p>
                      <h4 className="font-display uppercase text-2xl text-brand-blue-700 mt-1">Friuli 1972 · MDQ</h4>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-brand-yellow-500 text-brand-blue-700 font-subheading text-xs uppercase tracking-widest font-bold">
                      Despacho Inmediato
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SERVICIOS REDISEÑADOS */}
      <section className="py-20 bg-brand-white-50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <Pill className="mb-3">Soluciones Operativas</Pill>
              <h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-blue-700">
                Servicios diseñados para tu ritmo
              </h2>
            </div>
            <p className="text-brand-blue-600 max-w-md text-sm sm:text-base leading-relaxed">
              Desde trámites urgentes en 30 minutos hasta logística de fulfillment integral para e-commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REDESIGN_SERVICES.map((s) => (
              <div key={s.name} className={"rounded-3xl border transition-all duration-300 flex flex-col p-6 " + (s.featured ? "bg-brand-blue-700 text-white border-brand-blue-700 shadow-float" : "bg-white text-brand-blue-700 border-brand-blue-100 hover:border-brand-blue-200")}>
                <div className="flex items-center justify-between mb-4">
                  <span className={"px-3 py-1 rounded-full font-subheading uppercase tracking-widest text-xs font-bold " + (s.featured ? "bg-brand-yellow-500 text-brand-blue-700" : "bg-brand-blue-50 text-brand-blue-700")}>
                    {s.tag}
                  </span>
                  <span className={"font-mono text-xs " + (s.featured ? "text-brand-blue-200" : "text-brand-blue-500")}>{s.zone}</span>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 bg-brand-blue-50">
                  <img src={IMG + s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>

                <h3 className={"font-display uppercase text-2xl " + (s.featured ? "text-white" : "text-brand-blue-700")}>{s.name}</h3>
                <p className={"text-sm mt-2 flex-1 leading-relaxed " + (s.featured ? "text-brand-blue-200" : "text-brand-blue-600")}>{s.text}</p>

                <div className={"mt-6 pt-4 border-t grid grid-cols-2 gap-3 " + (s.featured ? "border-white/15" : "border-brand-blue-100")}>
                  <div>
                    <span className={"block font-subheading uppercase tracking-widest text-xs " + (s.featured ? "text-brand-blue-200" : "text-brand-blue-500")}>Entrega</span>
                    <span className="font-mono text-sm font-bold mt-0.5 block">{s.entrega}</span>
                  </div>
                  <div>
                    <span className={"block font-subheading uppercase tracking-widest text-xs " + (s.featured ? "text-brand-blue-200" : "text-brand-blue-500")}>Tarifa</span>
                    <span className={"font-mono text-sm font-bold mt-0.5 block " + (s.featured ? "text-brand-yellow-500" : "text-brand-blue-700")}>{s.tarifa}</span>
                  </div>
                </div>

                <a href={"#" + s.path} onClick={nav(s.path)} className={"mt-6 inline-flex items-center justify-between w-full py-2.5 px-4 rounded-full font-subheading uppercase tracking-wider text-xs font-bold transition-all " + (s.featured ? "bg-white text-brand-blue-700 hover:bg-brand-yellow-500" : "bg-brand-blue-50 text-brand-blue-700 hover:bg-brand-blue-700 hover:text-white")}>
                  <span>Ver detalles</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. INDUSTRIAS INTERACTIVAS */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHead pill="Sectores Especializados" title="Logística a la medida de tu rubro" text="Configuramos rutas dinámicas y cadetería capacitada para los requerimientos específicos de cada negocio." />

          <div className="flex flex-wrap gap-2 mb-8 border-b border-brand-blue-100 pb-4">
            {REDESIGN_INDUSTRIES.map((ind, idx) => (
              <button key={ind.title} onClick={() => setActiveTab(idx)} className={"px-5 py-2.5 rounded-full font-subheading uppercase tracking-widest text-sm transition-all " + (activeTab === idx ? "bg-brand-blue-700 text-brand-yellow-500 font-bold shadow-minimal" : "bg-brand-blue-50 text-brand-blue-700 hover:bg-brand-blue-100")}>
                {ind.title.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-brand-blue-50 border border-brand-blue-200 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-blue-700 text-brand-yellow-500 font-subheading uppercase text-xs tracking-widest font-bold">
                {REDESIGN_INDUSTRIES[activeTab].badge}
              </span>
              <h3 className="font-display uppercase text-3xl sm:text-4xl text-brand-blue-700 mt-4 leading-tight">
                {REDESIGN_INDUSTRIES[activeTab].title}
              </h3>
              <p className="mt-4 text-brand-blue-600 leading-relaxed text-base">
                {REDESIGN_INDUSTRIES[activeTab].desc}
              </p>
              <ul className="mt-6 space-y-3">
                {REDESIGN_INDUSTRIES[activeTab].bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-brand-blue-700 font-medium text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-yellow-500 text-brand-blue-700 flex items-center justify-center font-bold text-xs">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Cta href="#/contacto" onClick={nav("/contacto")}>Solicitar Plan para este Rubro</Cta>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-brand-blue-200 shadow-minimal">
                <img src={IMG + REDESIGN_INDUSTRIES[activeTab].img} alt={REDESIGN_INDUSTRIES[activeTab].title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. PRUEBA SOCIAL & RESEÑAS */}
      <section className="py-20 bg-brand-white-50 border-t border-brand-blue-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Pill className="mb-4">Calificación 5.0 en Google</Pill>
              <h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-blue-700">
                La confianza de Mar del Plata
              </h2>
              <p className="mt-4 text-brand-blue-600 leading-relaxed">
                Comercios locales, profesionales y clientes que eligen nuestro servicio día a día.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-white border border-brand-blue-100">
                <p className="font-mono text-4xl font-bold text-brand-blue-700">100%</p>
                <p className="font-subheading uppercase text-xs tracking-wider text-brand-blue-600 mt-1">
                  Envíos entregados en tiempo y forma
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REDESIGN_REVIEWS.map((r) => (
                <div key={r.name} className="p-6 rounded-3xl bg-white border border-brand-blue-100 shadow-minimal flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs text-brand-blue-500 uppercase">{r.tag}</span>
                      <span className="text-brand-yellow-500 text-sm">★★★★★</span>
                    </div>
                    <p className="font-subheading uppercase text-lg text-brand-blue-700 leading-snug">“{r.title}”</p>
                    <p className="mt-2 text-sm text-brand-blue-600 leading-relaxed">{r.text}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-blue-50 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-blue-700 text-brand-yellow-500 flex items-center justify-center font-display text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-brand-blue-700">{r.name}</span>
                      <span className="block text-2xs text-brand-blue-500">{r.meta}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CTA SECTION LUMINOSA */}
      <section className="py-20 bg-brand-blue-700 text-white relative overflow-hidden">
        <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-yellow-500 font-subheading uppercase text-xs tracking-widest font-bold inline-block mb-4">
              Atención Inmediata
            </span>
            <h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl lg:text-6xl text-white">
              ¿Tenés un envío listo para despachar?
            </h2>
            <p className="mt-4 text-lg text-brand-blue-200 leading-relaxed max-w-lg">
              Cotizá por WhatsApp en menos de 2 minutos. Asignamos un mensajero de nuestra flota en el acto.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={WA_MSG} target="_blank" rel="noopener" className="group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-[.05em] font-bold border px-8 py-3 min-h-[52px] bg-brand-yellow-500 text-brand-blue-700 border-brand-yellow-500 shadow-cta-glow hover:bg-brand-yellow-400 active:scale-[.98] transition-all">
                <span>Escribir por WhatsApp</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-blue-700 text-brand-yellow-500 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div>
                <label className="block font-subheading uppercase tracking-widest text-xs text-brand-yellow-500 mb-1">Nombre o Comercio</label>
                <input type="text" required placeholder="Tu nombre o empresa" className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-brand-blue-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500" />
              </div>
              <div>
                <label className="block font-subheading uppercase tracking-widest text-xs text-brand-yellow-500 mb-1">Tipo de Envío</label>
                <select className="w-full h-12 px-4 rounded-xl bg-brand-blue-700 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500">
                  <option>Express (Urgente en moto)</option>
                  <option>LowCost (Económico en el día)</option>
                  <option>Mercado Libre Flex</option>
                  <option>Plan Emprendedores / PyME</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3.5 rounded-full bg-brand-yellow-500 text-brand-blue-700 font-subheading uppercase tracking-widest font-bold hover:bg-brand-yellow-400 transition-colors shadow-cta-glow">
                Solicitar Cotización Inmediata
              </button>
              {sent && (
                <p className="text-center text-sm font-subheading uppercase text-brand-yellow-500 mt-2">
                  ¡Mensaje recibido! Nos comunicamos a la brevedad.
                </p>
              )}
            </form>
          </div>
        </Container>
      </section>

    </div>
  );
}

Object.assign(window, { HomeScreenRedesign });
