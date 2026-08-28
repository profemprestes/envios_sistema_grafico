// Fichas de servicio (rutas /servicios/*). service: express | lowcost | flex | emprendedores.
const SERVICES = {
  express: {
    pill: "Mensajería en moto y entregas inmediatas · MDQ 2026", h1: "Mensajería en moto y envíos Express", sub: "Entregas inmediatas en Mar del Plata",
    text: "Especialistas en mensajería en moto y envíos express prioritarios. Asignación de rango horario de entrega de 3 horas (solicitud con 2 hs de anticipación antes de las 15:00 hs). Todo lo que entre en moto (hasta 5 kg y 40x30 cm).",
    ctas: [{ label: "Cotizá tu envío Express", path: "/cotizar/express" }, { label: "Hablar por WhatsApp", href: WA, icon: "message-circle" }],
    stats: [["3 horas", "Rango de entrega"], ["15:00 hs", "Corte de solicitud"], ["Hasta 5 kg", "40x30 cm límite"]],
    img: "fondo_express.webp", dark: true, cardTag: "Telemetría en vivo · MDQ", cardTitle: "Prioridad 1",
    cardItems: ["Retiro en origen", "Entrega destino", "Rango horario programado · 3 hs", "Ruteo directo", "Custodia 100% exclusiva", "Confirmación al instante"],
    features: { title: "Entregas rápidas y eficientes", text: "Nuestro servicio Express ofrece cobertura total en el Partido de General Pueyrredón. Llegamos a todos los barrios con franjas horarias prioritarias: Centro, Chauvín, Los Troncos, Güemes, Puerto, Playa Grande, Punta Mogotes, Constitución, Camet y Batán.", tag: "Logística urbana integral 2026",
      items: [["clock", "Rangos de entrega de 3 horas", "Elegí franjas horarias precisas de 3 horas de espaciado (ej: 10 a 13 hs) para trámites y gestiones urgentes."], ["alarm-clock", "Corte 15:00 hs (2 h anticipación)", "Pedí con 2 horas de anticipación y antes de las 15:00 hs para entrega asegurada en el mismo día."], ["package", "Bultos en moto (hasta 5 kg)", "Traslado seguro de paquetes de hasta 5 kg y 40x30 cm con control y avisos en tiempo real por WhatsApp."], ["bike", "Cadetería propia de confianza", "Nuestros riders están identificados, con más de 7 años de trayectoria en las calles de Mar del Plata."]] },
    pricing: { pill: "Tarifario vigente 2026", title: "Tarifas por distancia", text: "Precios oficiales calculados por rango kilométrico para envíos inmediatos en Mar del Plata.", unit: "/ despacho final", ctaPath: "/cotizar/express",
      list: ["Elegís rango horario", "Mínimo 2 hs anticipación", "Notificación digital por WhatsApp", "Custodia digital"],
      tiers: [{ tag: "Radio cercano", name: "Hasta 3 km", price: "$3.700", text: "Ideal para entregas inmediatas de cercanía." }, { tag: "Radio central", name: "3 a 5 km", price: "$4.600", text: "Cobertura intermedia rápida en el casco urbano.", featured: "Más elegido" }, { tag: "Radio extendido", name: "5 a 7 km", price: "$6.100", text: "Llegamos a distancias medias con máxima agilidad." }, { tag: "Radio perimetral", name: "7 a 10 km", price: "$8.200", text: "Máxima cobertura urbana perimetral." }],
      extra: { tag: "Trayectos de más de 10 km", title: "$8.200 base + $1.000 x km adicional", text: "Para envíos que exceden los 10 km (Batán, Sierra de los Padres, Camet o periferia de General Pueyrredón), el cálculo aplica tarifa base de 7 a 10 km más $1.000 por kilómetro adicional exacto.", cta: "Calcular con mapa", path: "/cotizar/express" } },
    useCases: { title: "¿Cuándo necesitás Express?", text: "Situaciones cotidianas y corporativas donde cada minuto cuenta y la puntualidad es innegociable.",
      items: [{ tag: "Legal y trámites", title: "Envíos de documentación", text: "Contratos, documentos legales, escrituras y trámites críticos que requieren custodia y entrega inmediata.", list: ["Documentos notariales y escrituras", "Contratos comerciales firmados", "Certificados médicos y habilitaciones oficiales"], img: "box_card.jpeg" }, { tag: "Insumos y repuestos", title: "Distribución de insumos", text: "Despacho urgente de repuestos mecánicos, insumos gastronómicos, tecnología y suministros comerciales." }, { tag: "Franja horaria exacta", title: "Entregas con horario estricto", text: "Operaciones que necesitan entregarse con altísima puntualidad dentro de una franja horaria restringida." }] },
  },
  lowcost: {
    pill: "Paquetería e-commerce y cadetería económica · MDQ 2026", h1: "Paquetería e-commerce y encomiendas LowCost", sub: "El servicio de cadetería más rentable",
    text: "Solución en paquetería e-commerce, servicio de cadetería y servicio de encomiendas programadas en Mar del Plata. Pedidos solicitados antes de las 13:00 hs se entregan en el día antes de las 19:00 hs.",
    ctas: [{ label: "Cotizá tu lote LowCost", path: "/cotizar/lowcost" }, { label: "Hablar por WhatsApp", href: WA, icon: "message-circle" }],
    stats: [["$3.000", "Base 0-3 km 2026"], ["13:00 hs", "Horario de corte"], ["Antes 19:00 hs", "Entrega misma jornada"]],
    img: "fondo_lowcost.webp", dark: false, cardTag: "Circuitos activos MDQ", cardTitle: "Consolidado",
    cardItems: ["Paquetería e-commerce rentable: bajamos costos de envío significativamente", "Cadetería flexible: envíos esporádicos o volúmenes diarios ruteados", "Seguimiento y notificaciones vía WhatsApp por cada despacho", "Tarifa vigente 2026 · Excedente $700/km"],
    features: { title: "Envíos LowCost: máxima eficiencia", text: "Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas agrupando despachos para ofrecer la tarifa más competitiva, garantizando la entrega en el día para pedidos ingresados antes del horario de corte.", tag: "Logística predecible para negocios",
      items: [["route", "Eficiencia en ruteo", "Ruteo diario masivo optimizado de última milla. No se elige rango horario para maximizar la eficiencia logística y bajar costos."], ["alarm-clock", "Corte y entrega", "Pedidos ingresados antes de las 13:00 hs se entregan de forma totalmente garantizada antes de las 19:00 hs del mismo día."], ["trending-down", "Tarifa económica", "La mejor tarifa de Mar del Plata para envíos masivos agrupados, ruteos continuos y entregas a clientes finales."]] },
    pricing: { pill: "Tarifario inteligente", title: "Tarifas 2026 envíos LowCost", text: "Eficiencia en ruteo masivo. Garantizamos entregas antes de las 19:00 hs para pedidos cargados antes de las 13:00 hs.", unit: "/ despacho final", ctaPath: "/cotizar/lowcost",
      list: ["Eficiencia en ruteo masivo", "Corte de carga 13:00 hs", "Entrega antes de las 19:00 hs", "SLA de entrega garantizada"],
      tiers: [{ tag: "Zona 1", name: "Hasta 3 km", price: "$3.000", text: "La mejor tarifa para ruteo diario de cercanía." }, { tag: "Zona 2", name: "3 a 5 km", price: "$4.000", text: "Cobertura intermedia económica para PyMEs.", featured: "Recomendado PyME" }, { tag: "Zona 3", name: "5 a 7 km", price: "$5.300", text: "Llegamos a distancias medias al mejor costo." }, { tag: "Zona 4", name: "7 a 10 km", price: "$7.000", text: "Máximo ahorro en distancias urbanas largas." }],
      extra: { tag: "Zona 5 (más de 10 km)", title: "$700 x km", text: "Para envíos de larga distancia fuera del ejido urbano masivo tradicional, te ofrecemos la tarifa por kilómetro más competitiva del mercado local para que sigas ruteando con rentabilidad total.", cta: "Consultar por WhatsApp", href: WA } },
    benefits: { title: "Beneficios LowCost", text: "La combinación perfecta entre economía inteligente y máxima eficiencia logística para la consolidación de tu negocio.",
      items: [["Entregas a valores LowCost con las condiciones de Express", "Disfrutá del mejor precio con un servicio rápido y seguro que se adapta a vos."], ["Horario de corte extendido hasta 15 hs", "Ingresá tus envíos del día hasta las 15:00 hs y los entregamos en la misma jornada."], ["Elección de rango horario", "Vos y tus clientes eligen cuándo es más conveniente recibir los paquetes."], ["Ahorro de costos logísticos", "Maximizá tu rentabilidad pagando tarifas súper económicas por cada entrega."]] },
    steps: { title: "¿Cómo funciona?", text: "Un proceso simple, transparente y diseñado milimétricamente para maximizar tu productividad logística.", items: [["Solicitud", "Nos solicitás el envío por WhatsApp."], ["Retiro", "Retiramos el paquete por tu local o depósito en el transcurso del día."], ["Entrega", "Entregamos de forma segura en manos de tu destinatario."]] },
  },
  flex: {
    pill: "Envíos Flex y reparto MercadoLibre · MDQ 2026", h1: "Envíos Flex y reparto MercadoLibre", sub: "Logística Flex con 100% de cumplimiento",
    text: "Líderes en envíos flex, reparto MercadoLibre y logística flex en Mar del Plata. SLA real con 100% de entregas en el día antes de las 20:00 hs para proteger la reputación de MercadoLíder. Horario de corte 15:00 hs y múltiples retiros diarios sin mínimos de paquetes.",
    ctas: [{ label: "Activar envíos Flex", path: "/cotizar/lowcost" }, { label: "Contactar asesor Flex", href: WA, icon: "message-circle" }],
    stats: [["15:00 hs", "Horario de corte"], ["100%", "Entregas en el día"], ["Sin mínimos", "Retiros múltiples"]],
    img: "fondo_flex.webp", dark: false, cardTag: "Integración logística Flex", cardTitle: "SLA 100%",
    cardItems: ["Corte a las 15:00 hs: envíos recibidos hasta esa hora, entregados antes de las 20:00 hs", "Protección de reputación: 100% de entregas en el día para tu medalla de MercadoLíder", "Sin mínimos y múltiples retiros en tu local en el día", "Reparto MercadoLibre MDQ · Corte 15:00 hs"],
    features: { title: "Dominá tus ventas con envíos Flex", text: "Somos el aliado estratégico definitivo para vendedores de MercadoLibre en Mar del Plata. Optimizamos tus envíos same-day para que vos solo te preocupes por publicar, atender clientes y vender más de lo que imaginás.", tag: "Cobertura total en Mar del Plata",
      items: [["gift", "Recolección gratis", "Retiramos tus paquetes sin costo adicional directamente por tu local o depósito."], ["clock", "Entrega en el día antes de 20 hs", "Garantizamos que tus clientes reciban sus compras el mismo día antes de las 20:00 hs."], ["trending-down", "Tarifas LowCost", "Tarifas competitivas súper económicas para cuidar la rentabilidad de cada una de tus ventas."], ["alarm-clock", "Horario de corte: 15 hs", "Recibimos y procesamos tus despachos del día hasta las 15:00 hs de manera garantizada."]] },
    benefits: { title: "Beneficios para vendedores", text: "La solución definitiva para llevar tu tienda o e-commerce de MercadoLibre al siguiente nivel de competitividad.",
      items: [["Corte 15:00 hs", "Despachá tus ventas hasta las 15:00 hs para entrega garantizada en el mismo día. Más tiempo de ventas online."], ["Reputación intacta", "Cumplimos con rigor tus acuerdos de nivel de servicio (SLA) para que mantengas tu estatus de MercadoLíder sin sobresaltos."], ["Devoluciones sin cargo", "Si el comprador rechaza el producto en el domicilio por cualquier causa, la devolución a tu local es totalmente sin cargo."], ["Cobertura MDP", "Cubrimos absolutamente todas las zonas de entrega habilitadas por MercadoLibre Flex en la ciudad de Mar del Plata."], ["Choferes calificados", "Contamos con personal altamente capacitado para brindar la mejor experiencia de entrega y atención a tus clientes finales."]] },
    pricing: { pill: "Niveles Flex", title: "Niveles y tarifas Flex", text: "Escalá tu negocio con MercadoLibre Flex. A mayor volumen diario de despachos, mejores beneficios y tarifas para tus envíos same-day.", unit: "/ liquidación quincenal", ctaHref: WA, ctaLabel: "Activar nivel",
      tiers: [{ tag: "1 a 4 envíos diarios", name: "Nivel 1 (Crecimiento)", price: "$3.000", text: "Tarifas estándar segmentadas por distancia en km.", list: ["Z1 (0-3 km) $3.000 · Z2 (3-5 km) $4.000", "Z3 (5-7 km) $5.300 · Z4 (7-10 km) $7.000", "Z5 (+10 km) $7.000 + $700 x km adicional", "Segunda visita bonificada al 50%"] }, { tag: "5 a 10 envíos diarios", name: "Nivel 2 (Pro)", price: "$3.000", text: "Tarifas con tope fijo para envíos de mayor distancia.", featured: "Recomendado", list: ["Z1 (0-3 km) $3.000 · Z2 (3-5 km) $4.000", "Z3 (5-7 km) $5.300 · Z4 y Z5 (tope) $6.500", "Segunda visita Z1 gratis, otras al 50%", "Retiro bonificado sin cargo"] }, { tag: "+10 envíos diarios", name: "Nivel 3 (Elite)", price: "$4.500", text: "Tarifa plana unificada para toda la ciudad sin límites.", list: ["Tarifa plana de $4.500 a toda la ciudad", "Segunda visita sin cargo a toda la ciudad", "Soporte directo prioritario", "Retiro bonificado sin cargo"] }],
      extra: { tag: "Recargo por lluvia", title: "30% adicional en caso de lluvia", text: "Para todos nuestros clientes asociados al canal Flex, el recargo por días de lluvia es de solo un 30% adicional sobre el valor del envío. Cuidamos tu rentabilidad operativa para que sigas vendiendo con tranquilidad.", cta: "Más información Flex", href: WA } },
    steps: { title: "Logística sin fricciones", text: "Integramos tu flujo diario de ventas con nuestra red de distribución de última milla de forma directa.", items: [["Vendés", "Recibís una venta con Mercado Envíos Flex en tu panel tradicional de vendedor de MercadoLibre."], ["Retiramos", "Coordinamos y pasamos a retirar todos los paquetes por tu local o depósito en el horario de corte acordado."], ["Entregamos", "Todas las ventas realizadas antes de 15 hs serán entregadas en el día en Mar del Plata."], ["Calificás", "Tu cliente recibe el paquete en el mismo día y tu reputación de MercadoLíder sube automáticamente."]] },
    requirements: { title: "¿Qué necesitás?", text: "Requisitos mínimos e indispensables para empezar a ofrecer envíos same-day y potenciar tu e-commerce hoy mismo.", items: [["user-check", "Cuenta activa de vendedor", "Tener una cuenta activa de vendedor dentro de MercadoLibre."], ["toggle-right", "Envíos Flex activados", "Habilitar la opción de envíos rápidos en el día en tu configuración logística."], ["package-check", "Embalaje apto para moto", "Tener tus paquetes embalados de forma adecuada para el traslado seguro en moto."]] },
  },
  emprendedores: {
    pill: "Paquetería e-commerce y logística 3PL · Friuli 1972 MDQ", h1: "Paquetería y envíos e-commerce", sub: "Logística 3PL en Mar del Plata",
    text: "Solución en paquetería e-commerce, envíos e-commerce y logística 3PL en Mar del Plata. Ofrecemos E-Commerce Same Day desde nuestro depósito en Friuli 1972 con picking QR, E-Commerce Next Day (24 hs), opción DropOFF (-20% OFF) y contrareembolso sin cargo extra.",
    ctas: [{ label: "Solicitar plan corporativo", path: "/contacto" }, { label: "Agendar asesoría 3PL", href: WA, icon: "message-circle" }],
    stats: [["Same Day", "Stock Friuli 1972"], ["-20% OFF", "Opción DropOFF"], ["$0 comisión", "Contrareembolso gratis"]],
    img: "fondo_emprendedores.webp", dark: false, cardTag: "Hub logístico Friuli 1972", cardTitle: "3PL activo",
    cardItems: ["E-Commerce Same Day: stock guardado en Friuli 1972; al vender, sale empaquetado con picking QR", "Opción DropOFF (-20% OFF): traé tus envíos a Friuli 1972 y obtené 20% de descuento", "Contrareembolso sin cargo extra: cobramos a tu cliente en destino sin comisiones", "Depósito Friuli 1972 MDQ · Atención B2B"],
    features: { title: "Logística 3PL y paquetería e-commerce", text: "Especialistas en paquetería e-commerce y logística 3PL en Mar del Plata. Almacenamos tus productos pequeños o medianos en Friuli 1972, realizamos picking por QR y despachamos en el día o 24 hs con la tarifa más competitiva.", tag: "Paquetería y logística B2B Mar del Plata",
      items: [["warehouse", "E-Commerce Same Day (Friuli 1972)", "Guardamos tu stock en nuestro depósito central de Friuli 1972. Al vender, tu producto sale inmediatamente empaquetado con picking por código QR."], ["percent", "Opción DropOFF (-20% OFF)", "Acercá tus paquetes directamente a nuestro depósito en Friuli 1972 y obtené un 20% de descuento automático en la tarifa final de envío."], ["banknote", "Contrareembolso sin cargo extra", "Realizamos cobro contra entrega en destino sin ningún tipo de comisión ni recargo adicional por gestión de cobranza."]] },
    benefits: { title: "Potenciamos tu PyME", text: "Dedicá a vender, de la logística nos encargamos nosotros.",
      items: [["Partner logístico especializado", "Más que un simple servicio de envío, nos convertimos en tu depósito estratégico. Soluciones completas de almacenamiento y fulfillment diseñadas especialmente para PyMEs."], ["Cuentas corrientes", "Esquemas ágiles de facturación mensual consolidada adaptados al flujo de caja financiero de tu negocio (Factura C disponible de forma directa)."], ["Límites claros y seguros", "Flota de motos y utilitarios. Llevamos bultos de hasta 5 kg con control y seguimiento centralizado vía WhatsApp."], ["Almacenaje seguro", "Contamos con depósitos propios en Friuli 1972, Mar del Plata, equipados con alta seguridad para el resguardo de tu stock."], ["Asesor dedicado", "Asignamos un operador exclusivo para tu firma. Resolvé cualquier consulta operativa o eventualidad directamente con personas reales en MDQ."]] },
    pricing: { pill: "Modalidades e-commerce y 3PL 2026", title: "Planes paquetería y fulfillment", text: "Elegí la modalidad e-commerce que mejor impulse tu marca. Desde almacenamiento con picking QR en Friuli 1972 hasta opción DropOFF con 20% OFF.", ctaHref: WA, ctaLabel: "Elegir modalidad",
      tiers: [{ tag: "Stock en depósito", name: "E-Commerce Same Day", price: "$6.000", unit: "Fijo toda la ciudad", text: "Stock almacenado en Friuli 1972 (productos chicos/medianos). Sale empaquetado inmediatamente con picking QR.", list: ["Picking por código QR y empaquetado", "Despacho y logística en el día", "Contrareembolso sin cargo extra", "Rechazos devueltos 100% sin costo"] }, { tag: "Retiro en tu local", name: "E-Commerce Next Day (24 hs)", price: "$3.800", unit: "Desde $3.800", text: "Retiro programado en tu local para entrega al día siguiente. A mayor cantidad de envíos, baja la tarifa.", featured: "Volumen diario", list: ["Entrega garantizada en 24 horas", "Recolección gratis para +10 envíos (sino $4.000)", "Ideal para volúmenes diarios constantes", "Resúmenes y reportes de envíos"] }, { tag: "Ahorro máximo", name: "Opción DropOFF (-20% OFF)", price: "20% OFF", unit: "Descuento directo en tarifa", text: "Traé tus paquetes terminados a nuestro depósito central de Friuli 1972 y obtené un 20% de descuento.", list: ["20% de descuento sobre la tarifa final", "Recepción directa en Friuli 1972", "Ideal para emprendedores con vehículo", "Cobro contrareembolso sin comisiones"] }],
      extra: { tag: "Contrareembolso sin costo extra", title: "¿Cobrás tus ventas en puerta?", text: "Realizamos cobros contrareembolso en Mar del Plata sin ningún costo adicional sobre el valor del producto. Además, podés llevar tus envíos a Friuli 1972 con un 20% de descuento en la tarifa final.", cta: "Agendar asesoría 3PL", href: WA } },
  },
};

export function ServicioScreen({ service = "express", go }) {
  const s = SERVICES[service];
  const nav = (p) => (e) => { e.preventDefault(); go(p); };
  const link = (c) => c.path ? { href: "#" + c.path, onClick: nav(c.path) } : { href: c.href };
  const [openCase, setOpenCase] = React.useState(0);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ background: HERO_BG }}>
        <HeroGrid />
        <Container className="relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Pill tone="dark" ping>{s.pill}</Pill>
            <h1 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl mt-6">{s.h1}<span className="block font-subheading tracking-widest text-2xl text-brand-yellow-500 mt-3">{s.sub}</span></h1>
            <p className="mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl">{s.text}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta {...link(s.ctas[0])}>{s.ctas[0].label}</Cta>
              <Cta variant="ghost" icon={s.ctas[1].icon} {...link(s.ctas[1])}>{s.ctas[1].label}</Cta>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">{s.stats.map(([n, l]) => <div key={l}><dt className="font-mono text-2xl font-bold text-brand-yellow-500">{n}</dt><dd className="text-xs text-brand-blue-200 mt-1">{l}</dd></div>)}</dl>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="relative rounded-2xl overflow-hidden border border-white/10" style={{ minHeight: 420 }}>
                <img src={IMG + s.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-ink/60"></div>
                <div className="relative p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between"><Pill tone="dark" ping>{s.cardTag}</Pill><span className="font-display uppercase text-xl text-brand-yellow-500">{s.cardTitle}</span></div>
                  <ul className="mt-6 space-y-3">{s.cardItems.map((t) => <li key={t} className="flex items-start gap-3 text-sm text-white"><Icon name="circle-check" size={16} tone="yellow" className="mt-1" />{t}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Características */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">{s.features.title}</h2>
            <p className="mt-4 text-lg text-brand-blue-600 leading-relaxed">{s.features.text}</p>
            <p className="mt-6 font-subheading uppercase tracking-widest text-xs text-brand-blue-500">{s.features.tag}</p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {s.features.items.map(([i, t, d]) => <div key={t} className="rounded-2xl bg-brand-white-50 border border-brand-blue-100 p-6"><span className="w-12 h-12 rounded-xl bg-white border border-brand-blue-100 flex items-center justify-center"><Icon name={i} size={22} tone="blue" /></span><h3 className="font-subheading uppercase tracking-widest text-lg text-brand-blue-700 mt-4">{t}</h3><p className="text-sm text-brand-blue-600 leading-relaxed mt-2">{d}</p></div>)}
          </div>
        </Container>
      </section>

      {/* Beneficios (lowcost, flex, emprendedores) */}
      {s.benefits && (
        <section className="py-16 sm:py-20 lg:py-24 bg-brand-ink text-white relative overflow-hidden">
          <HeroGrid id="benefits-grid" />
          <Container className="relative">
            <div className="max-w-3xl mb-12"><h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl">{s.benefits.title}</h2><p className="mt-4 text-lg text-brand-blue-200">{s.benefits.text}</p></div>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ columnGap: "3rem", rowGap: "2rem" }}>
              {s.benefits.items.map(([t, d], i) => <div key={t} className="flex gap-5 border-t border-white/15 pt-6"><span className="font-mono text-sm text-brand-yellow-500 shrink-0">0{i + 1}</span><div><h3 className="font-subheading uppercase tracking-widest text-lg">{t}</h3><p className="text-sm text-brand-blue-200 leading-relaxed mt-2">{d}</p></div></div>)}
            </div>
          </Container>
        </section>
      )}

      {/* Tarifas */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-white-50">
        <Container>
          <SectionHead pill={s.pricing.pill} title={s.pricing.title} text={s.pricing.text} />
          <div className={"grid grid-cols-1 sm:grid-cols-2 gap-6 " + (s.pricing.tiers.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
            {s.pricing.tiers.map((t) => (
              <div key={t.name} className={"relative rounded-3xl p-6 flex flex-col " + (t.featured ? "bg-brand-blue-700 text-white shadow-antigravity-deep" : "bg-white border border-brand-blue-100 text-brand-ink shadow-minimal")}>
                {t.featured && <span className="absolute top-4 right-4 bg-brand-yellow-500 text-brand-ink font-subheading uppercase tracking-widest text-xs px-3 py-1 rounded-full">{t.featured}</span>}
                <p className={"font-subheading uppercase tracking-widest text-xs " + (t.featured ? "text-brand-yellow-500" : "text-brand-blue-500")}>{t.tag}</p>
                <h3 className="font-display uppercase text-2xl leading-none mt-2">{t.name}</h3>
                <p className="font-mono text-4xl font-bold mt-4">{t.price}</p>
                <p className={"font-mono text-xs mt-1 " + (t.featured ? "text-brand-blue-200" : "text-brand-blue-600")}>{t.unit || s.pricing.unit}</p>
                <p className={"text-sm mt-4 " + (t.featured ? "text-brand-blue-200" : "text-brand-blue-600")}>{t.text}</p>
                <ul className="mt-4 space-y-2 flex-1">{(t.list || s.pricing.list).map((l) => <li key={l} className="flex items-start gap-2 text-sm"><Icon name="check" size={16} tone={t.featured ? "yellow" : "blue"} className="mt-1" />{l}</li>)}</ul>
                {s.pricing.ctaPath
                  ? <a href={"#" + s.pricing.ctaPath} onClick={nav(s.pricing.ctaPath)} className={"mt-6 inline-flex items-center gap-2 font-subheading uppercase tracking-widest text-sm " + (t.featured ? "text-brand-yellow-500" : "text-brand-blue-700")}>Cotizar<Icon name="arrow-right" size={16} tone={t.featured ? "yellow" : "blue"} /></a>
                  : <a href={s.pricing.ctaHref} target="_blank" rel="noopener" className={"mt-6 inline-flex items-center gap-2 font-subheading uppercase tracking-widest text-sm " + (t.featured ? "text-brand-yellow-500" : "text-brand-blue-700")}>{s.pricing.ctaLabel}<Icon name="arrow-up-right" size={16} tone={t.featured ? "yellow" : "blue"} /></a>}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8"><p className="font-subheading uppercase tracking-widest text-xs text-brand-blue-500">{s.pricing.extra.tag}</p><h3 className="font-display uppercase text-3xl text-brand-ink leading-none mt-2">{s.pricing.extra.title}</h3><p className="text-sm text-brand-blue-600 leading-relaxed mt-3">{s.pricing.extra.text}</p></div>
            <div className="lg:col-span-4 lg:flex lg:justify-end"><Cta variant="outline" small icon={s.pricing.extra.path ? "map" : "message-circle"} {...link(s.pricing.extra)}>{s.pricing.extra.cta}</Cta></div>
          </div>
        </Container>
      </section>

      {/* Casos de uso (express) */}
      {s.useCases && (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <Container>
            <div className="max-w-3xl mb-12"><h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">{s.useCases.title}</h2><p className="mt-4 text-lg text-brand-blue-600">{s.useCases.text}</p></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-brand-blue-100 grid grid-cols-1 sm:grid-cols-2">
                <div className="p-8 bg-brand-white-50"><Pill>{s.useCases.items[0].tag}</Pill><h3 className="font-display uppercase text-3xl leading-none text-brand-ink mt-4">{s.useCases.items[0].title}</h3><p className="text-sm text-brand-blue-600 leading-relaxed mt-3">{s.useCases.items[0].text}</p>
                  <button type="button" onClick={() => setOpenCase(openCase === 0 ? -1 : 0)} className="mt-4 inline-flex items-center gap-2 font-subheading uppercase tracking-widest text-sm text-brand-blue-700">Ver ejemplos<Icon name="chevron-down" size={16} tone="blue" className={openCase === 0 ? "rotate-180 transition-transform" : "transition-transform"} /></button>
                  {openCase === 0 && <div className="mt-3"><p className="font-mono text-xs text-brand-blue-500 uppercase">Despachos habituales</p><ul className="mt-2 space-y-2">{s.useCases.items[0].list.map((l) => <li key={l} className="flex items-start gap-2 text-sm text-brand-ink"><Icon name="check" size={16} tone="blue" className="mt-1" />{l}</li>)}</ul></div>}
                </div>
                <div className="relative" style={{ minHeight: 280 }}><img src={IMG + s.useCases.items[0].img} alt="" className="absolute inset-0 w-full h-full object-cover" /></div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                {s.useCases.items.slice(1).map((u) => <div key={u.title} className="rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8"><Pill>{u.tag}</Pill><h3 className="font-display uppercase text-3xl leading-none text-brand-ink mt-4">{u.title}</h3><p className="text-sm text-brand-blue-600 leading-relaxed mt-3">{u.text}</p></div>)}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Paso a paso (lowcost, flex) */}
      {s.steps && (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <Container>
            <div className="max-w-3xl mb-12"><h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">{s.steps.title}</h2><p className="mt-4 text-lg text-brand-blue-600">{s.steps.text}</p></div>
            <ol className={"grid grid-cols-1 sm:grid-cols-2 gap-6 " + (s.steps.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
              {s.steps.items.map(([t, d], i) => <li key={t} className="rounded-2xl border border-brand-blue-100 p-6"><span className="font-mono text-3xl font-bold text-brand-yellow-500" style={{ WebkitTextStroke: "1px #0636a5" }}>0{i + 1}</span><h3 className="font-display uppercase text-2xl text-brand-ink leading-none mt-3">{t}</h3><p className="text-sm text-brand-blue-600 leading-relaxed mt-2">{d}</p></li>)}
            </ol>
          </Container>
        </section>
      )}

      {/* Requisitos (flex) */}
      {s.requirements && (
        <section className="py-16 sm:py-20 bg-brand-white-50 border-t border-brand-blue-100">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4"><h2 className="font-display uppercase leading-[0.9] text-4xl text-brand-ink">{s.requirements.title}</h2><p className="mt-4 text-brand-blue-600">{s.requirements.text}</p></div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">{s.requirements.items.map(([i, t, d]) => <div key={t} className="flex gap-4"><span className="w-12 h-12 rounded-xl bg-white border border-brand-blue-100 flex items-center justify-center shrink-0"><Icon name={i} size={22} tone="blue" /></span><div><h3 className="font-subheading uppercase tracking-widest text-lg text-brand-blue-700">{t}</h3><p className="text-sm text-brand-blue-600 mt-1">{d}</p></div></div>)}</div>
          </Container>
        </section>
      )}
    </div>
  );
}
Object.assign(window, { ServicioScreen });
