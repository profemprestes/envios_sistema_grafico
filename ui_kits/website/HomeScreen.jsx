// Home (ruta /). Secciones en el orden del sitio real.
const HOME_SERVICES = [
  { tag: "Urgente", zone: "Cobertura MDQ", name: "Envíos Express", text: "Mensajería en moto con entregas inmediatas de alta prioridad.", entrega: "30-90 min", tarifa: "$3.700 base", peso: "Hasta 10 kg", img: "fondo_express.webp", path: "/servicios/envios-express", dark: true },
  { tag: "Económico", zone: "Todo Gral. Pueyrredón", name: "Envíos LowCost", text: "Envíos económicos planificados con retiro y entrega coordinados.", entrega: "Same / Next Day", tarifa: "$3.000 base", peso: "Hasta 15 kg", img: "fondo_lowcost.webp", path: "/servicios/envios-lowcost", dark: false },
  { tag: "MercadoLibre Flex", zone: "Mar del Plata y Batán", name: "Envíos Flex", text: "Entregas en el día integradas para tus ventas de MercadoLibre.", entrega: "En el día", tarifa: "Zonificado LowCost", peso: "Apto moto / auto", img: "fondo_flex.webp", path: "/servicios/enviosflex", dark: false },
  { tag: "Logística integral", zone: "Depósito Friuli 1972", name: "E-Commerce & 3PL", text: "Logística integral: almacenamiento, preparación y despacho de pedidos.", entrega: "24 hs / stock", tarifa: "Planes a medida", peso: "Sin límite", img: "fondo_emprendedores.webp", path: "/servicios/plan-emprendedores", dark: true },
];

const HOME_REVIEWS = [
  { tag: "Encargo especial", title: "Mi héroe logístico por segundo año consecutivo", text: "Un encargo especial: comprar alfajores de temporada en MDQ, embalarlos con mimo y enviármelos para viajar a Europa. Rapidez, comunicación clara y calidez humana.", name: "Sol R", meta: "Local Guide" },
  { tag: "Resolución inmediata", title: "Resolvieron mi problema con la mejor predisposición", text: "Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.", name: "Karen Herrera", meta: "Google Maps" },
  { tag: "Tiendas y comercios", title: "Impecable para llevar pedidos a nuestros clientes", text: "Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio. Además hacen depósitos en cajeros sin problemas.", name: "Agustin Torres", meta: "Google Maps" },
  { tag: "Seguridad y rapidez", title: "Atención de primera, rápido, confiable y seguro", text: "Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100% para envíos puntuales.", name: "Lorenzo Elizagoyen", meta: "Google Maps" },
];

const HOME_BRANDS = ["Toy Piola Juguetería", "Ama & Pola", "Dropix 3D", "El Cóndor", "Starcel", "Urbancow", "Wanca", "Catalina Indumentaria", "Envases 3G", "La Peri"];

export function HomeScreen({ go }) {
  const nav = (p) => (e) => { e.preventDefault(); go(p); };
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      {/* 1. Hero */}
      <section id="hero-animado" className="relative overflow-hidden text-white" style={{ background: HERO_BG }}>
        <HeroGrid />
        <Container className="relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Pill tone="dark" ping>Envíos Dos Ruedas · Tu solución confiable en Mar del Plata</Pill>
            <h1 className="font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6">Mensajería y logística <span className="text-brand-yellow-500 whitespace-nowrap">e-commerce</span> en Mar del Plata</h1>
            <p className="mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl">Somos tu partner estratégico en mensajería urbana, envíos en el día y delivery de última milla. Flota propia de motos, cero tercerización y respuesta inmediata.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta href="#/cotizar/express" onClick={nav("/cotizar/express")}>Cotizá Express</Cta>
              <Cta variant="ghost" href="#/servicios/envios-express" onClick={nav("/servicios/envios-express")}>Mirá los Servicios</Cta>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img src={IMG + "card_mapa.webp"} alt="Envíos DosRuedas - Mapa y Cobertura Logística en Mar del Plata" className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 flex flex-col justify-between p-4" style={{ background: "linear-gradient(to bottom, rgba(0,39,124,0) 40%, rgba(0,39,124,.9) 100%)" }}>
                  <div className="flex items-center justify-between">
                    <Pill tone="dark" ping>Ruteo activo · MDQ</Pill>
                    <span className="font-mono text-xs text-white bg-brand-ink/60 border border-white/15 px-3 py-1.5 rounded-full">Friuli 1972</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3"><p className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">Envíos same-day</p><p className="text-sm text-white">Entrega en el día</p></div>
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3"><p className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">Flota propia</p><p className="text-sm text-white">Cero tercerización</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Visión + métricas */}
      <section id="vision-section" className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Pill className="mb-4">Partner logístico especializado</Pill>
            <h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">Conectamos Mar del Plata de punta a punta</h2>
            <p className="mt-4 text-lg text-brand-blue-600 leading-relaxed max-w-2xl">Nos especializamos en la distribución de última milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo récord con flota propia y tarifas transparentes.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[["clock", "Entregas a tiempo", "Puntualidad garantizada en cada envío. Optimizamos cada ruta mediante geolocalización avanzada en Mar del Plata."], ["shield-check", "Envíos seguros", "Protección total de tus paquetes. Despachos con custodia digital y confirmación de entrega en el acto."]].map(([i, t, d]) => (
                <div key={t} className="flex gap-4">
                  <span className="w-12 h-12 rounded-xl bg-brand-blue-50 flex items-center justify-center shrink-0"><Icon name={i} size={22} tone="blue" /></span>
                  <div><h3 className="font-subheading uppercase tracking-widest text-lg text-brand-blue-700">{t}</h3><p className="text-sm text-brand-blue-600 leading-relaxed mt-1">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 rounded-3xl bg-brand-ink text-white p-8 lg:p-12 relative overflow-hidden">
            <HeroGrid id="vision-grid" />
            <div className="relative">
              <p className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500 mb-6">Mar del Plata 2026</p>
              <div className="space-y-6">
                {[["+50K", "Envíos y entregas realizadas con éxito en toda la región"], ["0", "Paquetes extraviados"], ["+100", "Emprendedores confían"]].map(([n, l]) => (
                  <div key={l} className="flex items-baseline gap-4 border-b border-white/10 pb-6"><span className="font-mono text-4xl font-bold text-brand-yellow-500 shrink-0">{n}</span><span className="text-sm text-brand-blue-200">{l}</span></div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Servicios */}
      <section id="services-overview" className="py-16 sm:py-20 lg:py-24 bg-brand-white-50">
        <Container>
          <SectionHead pill="Nuestros servicios" title="Soluciones logísticas a tu medida" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_SERVICES.map((s) => (
              <a key={s.name} href={"#" + s.path} onClick={nav(s.path)} className="group relative rounded-3xl overflow-hidden border border-brand-blue-100 shadow-minimal hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ minHeight: 420 }}>
                <img src={IMG + s.img} alt={s.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className={"absolute inset-0 " + (s.dark ? "bg-brand-ink/60" : "bg-white/20")}></div>
                <div className={"relative p-6 flex flex-col h-full " + (s.dark ? "text-white" : "text-brand-ink")}>
                  <div className="flex items-center justify-between gap-2">
                    <Pill tone={s.dark ? "dark" : "light"}>{s.tag}</Pill>
                  </div>
                  <p className={"font-mono text-xs mt-3 " + (s.dark ? "text-brand-blue-200" : "text-brand-blue-700")}>{s.zone}</p>
                  <h3 className="font-display uppercase leading-none text-3xl mt-2">{s.name}</h3>
                  <p className={"text-sm leading-relaxed mt-2 flex-1 " + (s.dark ? "text-brand-blue-200" : "text-brand-blue-700")}>{s.text}</p>
                  <dl className={"mt-6 grid grid-cols-3 gap-2 border-t pt-4 " + (s.dark ? "border-white/15" : "border-brand-blue-700/20")}>
                    {[["Entrega", s.entrega], ["Tarifa", s.tarifa], ["Peso", s.peso]].map(([k, v]) => <div key={k}><dt className="font-subheading uppercase tracking-widest text-xs">{k}</dt><dd className="font-mono text-xs mt-1">{v}</dd></div>)}
                  </dl>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Industrias */}
      <section id="slider-servicios" className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <SectionHead pill="Logística a medida de tu rubro · MDQ 2026" title="Soluciones especiales para industrias" text="Adaptamos nuestra flota propia de motos a la dinámica de tu negocio. Elegí tu sector y descubrí cómo optimizamos tus entregas urbanas." />
          <div className="flex flex-wrap gap-2 mb-8">
            {["E-Commerce", "Repuestos", "Moda, Calzado", "Trámites", "Insumos Médicos", "Encomiendas"].map((r, i) => (
              <span key={r} className={"px-4 py-2 rounded-full font-subheading uppercase tracking-widest text-sm border " + (i === 0 ? "bg-brand-blue-700 text-brand-yellow-500 border-brand-blue-700" : "bg-white text-brand-blue-700 border-brand-blue-200")}>{r}</span>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 overflow-hidden">
            <div className="lg:col-span-7 p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>SLA: entregas en el día</Pill>
                <span className="font-mono text-xs text-brand-blue-600">Máxima velocidad · Envíos Flex Same-Day y Next-Day</span>
              </div>
              <h3 className="font-display uppercase leading-[0.9] text-4xl text-brand-ink mt-4">E-Commerce y tiendas online</h3>
              <p className="mt-4 text-brand-blue-600 leading-relaxed">Retiramos tus ventas online y las entregamos en la misma jornada en todo Mar del Plata. Integración directa para Mercado Libre Flex y tiendas independientes con reputación garantizada.</p>
              <ul className="mt-6 space-y-3">
                {["Rendición de dinero en el acto", "Seguimiento por WhatsApp", "Cero suspensiones de Flex"].map((t) => <li key={t} className="flex items-center gap-3 text-sm text-brand-ink"><Icon name="circle-check" size={18} tone="blue" />{t}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Cta href="#/servicios/enviosflex" onClick={nav("/servicios/enviosflex")}>Ver solución Flex</Cta>
                <Cta variant="outline" href="#/contacto" onClick={nav("/contacto")}>Consultar cuenta corriente</Cta>
              </div>
            </div>
            <div className="lg:col-span-5 relative" style={{ minHeight: 320 }}>
              <img src={IMG + "card_moto01.webp"} alt="Moto de reparto Envíos DosRuedas" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Emprendedores */}
      <section id="emprendedores-home" className="py-16 sm:py-20 lg:py-24 bg-brand-white-50">
        <Container>
          <SectionHead pill="Socio estratégico local" title="Potenciamos tu marca en Mar del Plata" text="Si vendés online, necesitás un socio logístico que responda al toque. Creamos planes a tu medida con tarifas dinámicas transparentes y recolección programada a domicilio en Mar del Plata." />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-white border border-brand-blue-100 shadow-minimal grid grid-cols-1 sm:grid-cols-2">
              <div className="p-8">
                <Pill>Emprendedores</Pill>
                <h3 className="font-display uppercase leading-none text-3xl text-brand-ink mt-4">Logística e-commerce</h3>
                <p className="mt-3 text-sm text-brand-blue-600 leading-relaxed">Gestión de última milla pensada para PyMEs y marcas locales. Optimizamos tus costos de envío con retiros programados a domicilio y soporte post-venta.</p>
                <ul className="mt-4 space-y-2">
                  {["Soporte comercial dedicado vía WhatsApp", "Entregas contrareembolso integradas sin cargo extra", "Rastreo digital transparente para tus clientes"].map((t) => <li key={t} className="flex items-start gap-2 text-sm text-brand-ink"><Icon name="circle-check" size={16} tone="blue" className="mt-1" />{t}</li>)}
                </ul>
                <a href="#/servicios/plan-emprendedores" onClick={nav("/servicios/plan-emprendedores")} className="inline-flex items-center gap-2 mt-6 font-subheading uppercase tracking-widest text-sm text-brand-blue-700 hover:text-brand-blue-500">Conocer más<Icon name="arrow-right" size={16} tone="blue" /></a>
              </div>
              <div className="relative" style={{ minHeight: 260 }}><img src={IMG + "box_card.jpeg"} alt="Caja con sticker Envíos DosRuedas" className="absolute inset-0 w-full h-full object-cover" /></div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              <div className="rounded-3xl bg-brand-blue-700 text-white p-8 relative overflow-hidden">
                <HeroGrid id="meli-grid" />
                <div className="relative">
                  <Pill tone="dark">MercadoLibre</Pill>
                  <h3 className="font-display uppercase leading-none text-3xl mt-4">Envíos Flex Meli</h3>
                  <p className="mt-3 text-sm text-brand-blue-200 leading-relaxed">Socio logístico homologado para tus envíos rápidos en el día. Recolección gratis en tu local y entrega garantizada dentro del SLA establecido.</p>
                  <a href="#/servicios/enviosflex" onClick={nav("/servicios/enviosflex")} className="inline-flex items-center gap-2 mt-6 font-subheading uppercase tracking-widest text-sm text-brand-yellow-500">Configurar Flex<Icon name="arrow-right" size={16} tone="yellow" /></a>
                </div>
              </div>
              <div className="rounded-3xl bg-white border border-brand-blue-100 shadow-minimal p-8">
                <Pill>Corporativo</Pill>
                <h3 className="font-display uppercase leading-none text-3xl text-brand-ink mt-4">Soluciones corporativas</h3>
                <p className="mt-3 text-sm text-brand-blue-600 leading-relaxed">Soporte a gran escala con facturación mensual, ruteos especiales para grandes volúmenes y entregas express coordinadas en Mar del Plata.</p>
                <a href="#/contacto" onClick={nav("/contacto")} className="inline-flex items-center gap-2 mt-6 font-subheading uppercase tracking-widest text-sm text-brand-blue-700 hover:text-brand-blue-500">Abrir cuenta corriente<Icon name="arrow-right" size={16} tone="blue" /></a>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-center text-sm text-brand-blue-600 mb-4">Marcas locales que confían en nosotros</p>
            <div className="flex flex-wrap justify-center gap-3">
              {HOME_BRANDS.map((b) => <span key={b} className="px-4 py-2 rounded-full bg-white border border-brand-blue-100 font-subheading uppercase tracking-widest text-sm text-brand-blue-700">{b}</span>)}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Reseñas */}
      <section id="social-proof" className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Pill className="mb-4">5.0 / 5.0 en Google Maps</Pill>
              <h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">Reseñas reales de Mar del Plata</h2>
              <p className="mt-4 text-brand-blue-600 leading-relaxed">Vecinos, tiendas online y emprendedores que confían a diario en nuestra flota propia.</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[["5.0", "15 opiniones en Google Maps"], ["100%", "Flota propia sin tercerizar"], ["+7", "Años de trayectoria en MDQ"]].map(([n, l]) => <div key={l}><p className="font-mono text-3xl font-bold text-brand-blue-700">{n}</p><p className="text-xs text-brand-blue-600 mt-1">{l}</p></div>)}
              </div>
              <Cta variant="outline" small href="https://share.google/ofw5wAQt3Fc1dArom" icon="arrow-up-right" className="mt-8">Ver ficha en Google Maps</Cta>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {HOME_REVIEWS.map((r) => (
                <figure key={r.name} className="rounded-3xl bg-brand-white-50 border border-brand-blue-100 p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between"><span className="font-mono text-xs text-brand-blue-500 uppercase">{r.tag}</span><span className="flex gap-1">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={14} tone="yellow" />)}</span></div>
                  <blockquote className="flex-1"><p className="font-subheading uppercase tracking-wide text-xl text-brand-ink leading-tight">“{r.title}”</p><p className="mt-2 text-sm text-brand-blue-600 leading-relaxed">{r.text}</p></blockquote>
                  <figcaption className="flex items-center gap-3"><span className="w-10 h-10 rounded-full bg-brand-blue-700 text-brand-yellow-500 font-display text-lg flex items-center justify-center">{r.name[0]}</span><span><span className="block text-sm font-semibold text-brand-ink">{r.name}</span><span className="block text-xs text-brand-blue-600">{r.meta}</span></span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. CTA + formulario */}
      <section id="cta-section" className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-24" style={{ background: HERO_BG }}>
        <HeroGrid id="cta-grid" />
        <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Pill tone="dark">Cotización inmediata</Pill>
            <h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl mt-4">¿Listo para escalar la logística de tu e-commerce?</h2>
            <p className="mt-4 text-lg text-brand-blue-200 leading-relaxed max-w-xl">Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante.</p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-brand-yellow-500"><Icon name="clock" size={16} tone="yellow" />Atención comercial &lt; 2 min</p>
          </div>
          <form className="lg:col-span-6 bg-brand-ink/60 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            {[["home-nombre", "Tu nombre", "Ingresá tu nombre"], ["home-empresa", "Empresa / negocio", "Nombre de tu emprendimiento"]].map(([id, label, ph]) => (
              <div key={id} className="space-y-2">
                <label htmlFor={id} className="block font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">{label}</label>
                <input id={id} type="text" required placeholder={ph} className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500" />
              </div>
            ))}
            <div className="space-y-2">
              <label htmlFor="volume-select" className="block font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">Volumen estimado mensual</label>
              <select id="volume-select" required defaultValue="" className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500">
                <option value="" disabled>Seleccioná una opción</option><option value="1 a 50">1 a 50 envíos</option><option value="51 a 200">51 a 200 envíos</option><option value="Más de 200">Más de 200 envíos</option>
              </select>
            </div>
            <Cta icon="message-circle" className="w-full">Hablar por WhatsApp</Cta>
            {sent && <p role="status" className="text-sm text-brand-yellow-500">Listo. Te contactamos por WhatsApp en menos de 2 minutos.</p>}
          </form>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { HomeScreen });
