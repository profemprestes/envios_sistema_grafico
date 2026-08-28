// Cotizadores (rutas /cotizar/express y /cotizar/lowcost). mode: "express" | "lowcost".
const COTIZAR = {
  express: {
    pill: "Servicio Express prioritario", h1: "Cotizá tu envío Express",
    text: "Calculá el costo de tu envío prioritario al instante. Obtené la tarifa de entrega según la distancia y coordiná en el acto con nosotros por WhatsApp.",
    chips: ["Entrega en < 2 horas", "Ruta optimizada", "Tarifa 100% precisa"],
    demo: { system: "Sistema Express Maps", origen: "Terminal Ferroautomotora", destino: "B° Stella Maris", km: "3.7 km", tarifa: "$4.600 ARS", nota: "Sin registro obligatorio" },
    formPill: "Cotización al instante · Mar del Plata", formTitle: "Calculá tu envío Express",
    formText: "Ingresá las direcciones de origen y destino en Mar del Plata para obtener tarifa exacta y ruta OSRM en tiempo real.",
    submit: "Calcular ruta y tarifa Express", router: "Ruteador MDQ activo", service: "Servicio: Envío Express < 2H", scope: "Cobertura: Partido de General Pueyrredón",
    benefitsTitle: "Beneficios del servicio Express", benefitsTag: "Tarifas 2026",
    benefits: [["route", "Ruteo urbano preciso", "Medición métrica exacta entre puntos de Mar del Plata con tecnología de ruteo OSRM."], ["zap", "Prioridad inmediata (< 120 min)", "Asignación directa a cadete en moto apenas confirmás la solicitud. Sin esperas ni desvíos."], ["message-circle", "Confirmación directa por WhatsApp", "Coordiná en 1 clic con todos los datos precargados, sin registros tediosos ni esperas de validación."]],
    rulesTitle: "Pautas operativas Express",
    rules: [["Capacidad máxima", "Hasta 15 kg por viaje en caja / mochila de moto."], ["Dimensiones", "Bultos de hasta 40 × 40 cm entran en tarifa estándar."], ["Horario de operación", "Lunes a Sábados de 8:00 a 20:00 hs con monitoreo activo."]],
    guaranteeTitle: "Garantía DosRuedas MDQ", guarantee: "Más de 7 años operando en las calles de Mar del Plata. Tu paquete viaja asegurado y con seguimiento directo de punta a punta.",
    ctaPill: "¿Dudas o envíos especiales?", ctaTitle: "¿Necesitás cadetería recurrente o bultos especiales?",
    ctaText: "Si realizás más de 5 envíos diarios o necesitás distribución continua para tu comercio en Mar del Plata, consultá por nuestros convenios y cuentas corrientes.",
    tariff: (km) => km <= 3 ? 3700 : km <= 5 ? 4600 : km <= 7 ? 6100 : km <= 10 ? 8200 : 8200 + Math.ceil(km - 10) * 1000,
  },
  lowcost: {
    pill: "Servicio económico y programado", h1: "Cotizá tu envío LowCost",
    text: "Eficiencia y rentabilidad. Calculá tu envío con entrega garantizada en el día si es solicitado antes de 13 hs.",
    chips: ["Hasta 40% de ahorro", "Entrega same-day", "Tarifa plana PyME"],
    demo: { system: "Sistema LowCost Batch", origen: "Av. Constitución 5500", destino: "Plaza Mitre", km: "5.8 km", tarifa: "$5.300 ARS", nota: "Entrega incluida en el día" },
    formPill: "Programado y económico · Mar del Plata", formTitle: "Calculá tu envío LowCost",
    formText: "Ingresá las direcciones de origen y destino para calcular la tarifa económica agrupada con entrega garantizada en el día (solicitando antes de 13:00 hs).",
    submit: "Calcular ruta y tarifa LowCost", router: "Ruteador Batch activo", service: "Servicio: Envío LowCost Batch", scope: "Modalidad: Ruteo agrupado diario MDQ",
    benefitsTitle: "Beneficios del servicio LowCost", benefitsTag: "Hasta 40% ahorro",
    benefits: [["route", "Ruteo batch inteligente", "Agrupamos entregas por cercanía en Mar del Plata para reducir costos operativos y transferirte el ahorro."], ["clock", "Entrega same-day garantizada", "Solicitando antes de las 13:00 hs, tu paquete se entrega en el día dentro de las franjas habituales."], ["badge-check", "Tarifa fija predecible", "Valores oficiales 2026 claros y sin sorpresas para que puedas presupuestar los costos de tu tienda."]],
    rulesTitle: "Franjas de entrega LowCost",
    rules: [["Horario de corte", "Pedidos ingresados antes de las 13:00 hs se entregan en la tarde del mismo día."], ["Turno tarde", "Reparto masivo entre las 14:00 y 20:00 hs con trazabilidad garantizada."], ["Pedidos posteriores", "Los recibidos después de las 13:00 hs se programan para el primer turno del día hábil siguiente."]],
    guaranteeTitle: "Garantía de reparto diario", guarantee: "Optimizamos los circuitos viales de la ciudad para garantizar que cada paquete llegue a destino con seguridad y al menor costo por km.",
    ctaPill: "Cuentas corrientes y PyMEs", ctaTitle: "¿Tenés envíos recurrentes o tienda e-commerce?",
    ctaText: "Accedé a facturación quincenal o mensual consolidada, retiro programado en tu depósito o local y tarifas diferenciales por volumen en Mar del Plata.",
    tariff: (km) => km <= 3 ? 3000 : km <= 5 ? 4000 : km <= 7 ? 5300 : km <= 10 ? 7000 : 7000 + Math.ceil(km - 10) * 700,
  },
};
const ARS = (n) => "$" + n.toLocaleString("es-AR");

export function CotizarScreen({ mode = "express", go }) {
  const c = COTIZAR[mode];
  const nav = (p) => (e) => { e.preventDefault(); go(p); };
  const [result, setResult] = React.useState(null);
  const [rows, setRows] = React.useState([{ id: 1 }, { id: 2 }]);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    // Demo: sin geocodificación en el kit; la distancia se toma del ejemplo del hero.
    const km = parseFloat(c.demo.km);
    setResult({ origen: f.get("origen"), destino: f.get("destino"), km, tarifa: c.tariff(km) });
  };
  return (
    <div>
      <section className="relative overflow-hidden text-white" style={{ background: HERO_BG }}>
        <HeroGrid />
        <Container className="relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Pill tone="dark" ping>{c.pill}</Pill>
            <h1 className="font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6">{c.h1}</h1>
            <p className="mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl">{c.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">{c.chips.map((t) => <span key={t} className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full font-mono text-xs"><Icon name="circle-check" size={14} tone="yellow" />{t}</span>)}</div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="rounded-2xl border border-white/10 p-6" style={{ background: "linear-gradient(to bottom,rgba(6,54,165,.85),rgba(0,39,124,.95))" }}>
                <p className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">Cálculo automático</p>
                <p className="font-mono text-xs text-brand-blue-200 mt-1">{c.demo.system}</p>
                <dl className="mt-6 space-y-3 font-mono text-sm">
                  {[["Origen", c.demo.origen], ["Destino", c.demo.destino], ["Distancia", c.demo.km]].map(([k, v]) => <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3"><dt className="text-brand-blue-200 uppercase text-xs">{k}</dt><dd className="text-white text-right">{v}</dd></div>)}
                </dl>
                <div className="mt-6 flex items-end justify-between"><div><p className="font-subheading uppercase tracking-widest text-xs text-brand-blue-200">Tarifa final</p><p className="font-mono text-4xl font-bold text-brand-yellow-500">{c.demo.tarifa}</p></div><Pill tone="dark">{c.demo.nota}</Pill></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <Pill className="mb-4">{c.formPill}</Pill>
            <h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">{c.formTitle}</h2>
            <p className="mt-4 text-brand-blue-600 leading-relaxed">{c.formText}</p>
            <form className="mt-8 space-y-4" onSubmit={submit}>
              <Field id="origen-input" label="Dirección de origen (retiro)" placeholder="Ej: Av. Colón 1234, Mar del Plata" required><input name="origen" type="text" placeholder="Ej: Av. Colón 1234, Mar del Plata" required /></Field>
              <Field id="destino-input" label="Dirección de destino (entrega)" placeholder="Ej: Juan B. Justo 5678, Mar del Plata" required><input name="destino" type="text" placeholder="Ej: Juan B. Justo 5678, Mar del Plata" required /></Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="nombre-input" label="Nombre" placeholder="Tu nombre completo" required />
                <Field id="telefono-input" label="Teléfono" type="tel" placeholder="Tu teléfono de contacto" required />
              </div>
              <Field id="producto-input" label="Tipo de producto a trasladar" placeholder="Ej: Documentos, Paquete pequeño..." required />
              <Cta icon="calculator" className="w-full">{c.submit}</Cta>
            </form>
            {result && (
              <div role="status" className="mt-6 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 p-6">
                <p className="font-subheading uppercase tracking-widest text-xs text-brand-blue-600">Resultado estimado (demo del kit: distancia de ejemplo)</p>
                <dl className="mt-3 grid grid-cols-3 gap-4 font-mono text-sm"><div><dt className="text-xs text-brand-blue-600 uppercase">Origen</dt><dd className="text-brand-ink truncate">{result.origen}</dd></div><div><dt className="text-xs text-brand-blue-600 uppercase">Destino</dt><dd className="text-brand-ink truncate">{result.destino}</dd></div><div><dt className="text-xs text-brand-blue-600 uppercase">Distancia</dt><dd className="text-brand-ink">{result.km} km</dd></div></dl>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4"><p className="font-mono text-3xl font-bold text-brand-blue-700">{ARS(result.tarifa)} <span className="text-sm text-brand-blue-600">ARS</span></p><Cta small icon="message-circle" href={"https://wa.me/542236602699?text=" + encodeURIComponent("Hola Envíos DosRuedas! Quiero coordinar un envío " + (mode === "express" ? "Express" : "LowCost") + " de " + result.origen + " a " + result.destino + ". Tarifa estimada " + ARS(result.tarifa) + ".")}>Coordinar por WhatsApp</Cta></div>
              </div>
            )}
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-brand-blue-100 relative" style={{ minHeight: 360 }}>
              <img src={IMG + "card_mapa.webp"} alt="Mapa de Mar del Plata" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between" style={{ background: "linear-gradient(to top, rgba(0,39,124,.9) 0%, rgba(0,39,124,0) 55%)" }}>
                <div className="flex items-center justify-between"><Pill tone="dark" ping>{c.router}</Pill><span className="font-mono text-xs text-white bg-brand-ink/60 border border-white/15 px-3 py-1.5 rounded-full">OpenStreetMap + OSRM</span></div>
                <div className="font-mono text-xs text-white space-y-1"><p>{c.service}</p><p className="text-brand-blue-200">{c.scope}</p></div>
              </div>
            </div>
            {mode === "lowcost" && (
              <div className="rounded-3xl bg-brand-white-50 border border-brand-blue-100 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="font-display uppercase text-2xl text-brand-ink leading-none">Planilla de despachos masivos (batch)</h3><p className="text-sm text-brand-blue-600 mt-2">Cargá múltiples destinos de Mar del Plata para ruteo agrupado del día y consultá por WhatsApp con un solo clic.</p></div><span className="font-mono text-xs text-brand-blue-700">{rows.length} paquetes en lote</span></div>
                <div className="mt-4 space-y-3">
                  {rows.map((r, i) => (
                    <div key={r.id} className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-sm text-brand-blue-600 shrink-0" style={{ width: 20 }}>{i + 1}</span>
                      {["Destinatario", "Dirección en MDQ *", "Teléfono", "Producto / Bulto"].map((ph) => <input key={ph} type={ph === "Teléfono" ? "tel" : "text"} placeholder={ph} aria-label={ph} style={{ minWidth: 140 }} className="flex-1 h-12 px-3 rounded-xl bg-white border border-brand-blue-200 text-sm text-brand-ink placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500" />)}
                      <button type="button" aria-label="Quitar fila" onClick={() => setRows(rows.filter((x) => x.id !== r.id))} className="w-11 h-11 rounded-full bg-brand-blue-50 shrink-0 flex items-center justify-center hover:bg-brand-blue-100"><Icon name="trash-2" size={16} tone="blue" /></button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button type="button" onClick={() => setRows([...rows, { id: Date.now() }])} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue-200 font-subheading uppercase tracking-widest text-sm text-brand-blue-700 hover:bg-brand-blue-50"><Icon name="plus" size={16} tone="blue" />Agregar fila</button>
                  <Cta small icon="message-circle" href={"https://wa.me/542236602699?text=" + encodeURIComponent("¡Hola Envíos DosRuedas! Quiero solicitar una cotización por lote de " + rows.length + " envíos LowCost en Mar del Plata. Modalidad: Ruteo LowCost Programado 2026 (Corte 13:00 hs)")}>Cotizar lote ({rows.length} envíos)</Cta>
                </div>
                <p className="mt-3 text-xs text-brand-blue-600">Tarifas LowCost vigentes 2026 ($3.000 a $7.000 + excedente por km).</p>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8"><h2 className="font-display uppercase leading-none text-3xl text-brand-ink">{c.benefitsTitle}</h2><Pill>{c.benefitsTag}</Pill></div>
            <div className="space-y-6">
              {c.benefits.map(([i, t, d]) => <div key={t} className="flex gap-4"><span className="w-12 h-12 rounded-xl bg-white border border-brand-blue-100 flex items-center justify-center shrink-0"><Icon name={i} size={22} tone="blue" /></span><div><h3 className="font-subheading uppercase tracking-widest text-lg text-brand-blue-700">{t}</h3><p className="text-sm text-brand-blue-600 leading-relaxed mt-1">{d}</p></div></div>)}
            </div>
          </div>
          <div className="lg:col-span-5 rounded-3xl bg-brand-ink text-white p-8 relative overflow-hidden">
            <HeroGrid id="rules-grid" />
            <div className="relative">
              <h3 className="font-display uppercase leading-none text-2xl text-brand-yellow-500">{c.rulesTitle}</h3>
              <dl className="mt-6 space-y-4">{c.rules.map(([k, v]) => <div key={k} className="border-b border-white/10 pb-4"><dt className="font-subheading uppercase tracking-widest text-xs text-brand-blue-200">{k}</dt><dd className="text-sm mt-1">{v}</dd></div>)}</dl>
              <p className="mt-6 font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">{c.guaranteeTitle}</p>
              <p className="text-sm text-brand-blue-200 mt-1">{c.guarantee}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <Container className="rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8"><Pill className="mb-4">{c.ctaPill}</Pill><h2 className="font-display uppercase leading-[0.9] text-4xl text-brand-ink">{c.ctaTitle}</h2><p className="mt-3 text-brand-blue-600 leading-relaxed">{c.ctaText}</p></div>
          <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end"><Cta href="#/contacto" onClick={nav("/contacto")}>Formulario de contacto</Cta><Cta variant="outline" href={TEL} icon="phone">Llamanos</Cta></div>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { CotizarScreen });
