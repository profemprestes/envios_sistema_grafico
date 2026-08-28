// Contacto (ruta /contacto).
const CONTACT_CHANNELS = [
  { icon: "message-circle", title: "WhatsApp Comercial", text: "Respuestas y cotizaciones de envíos en tiempo real.", href: "https://wa.me/542236602699?text=Hola!%20Quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20mis%20env%C3%ADos.", cta: "Abrir WhatsApp" },
  { icon: "phone", title: "Llamada de Coordinación", text: "Para hablar directamente con un coordinador logístico.", href: TEL, cta: "223 660-2699" },
  { icon: "mail", title: "Solicitar Cotización B2B", text: "Envianos tu base de envíos para un plan personalizado.", href: "mailto:matiascejas@enviosdosruedas.com", cta: "Escribir email" },
];

export function ContactoScreen({ go }) {
  const nav = (p) => (e) => { e.preventDefault(); go(p); };
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <section className="relative overflow-hidden text-white" style={{ background: HERO_BG }}>
        <HeroGrid />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <Pill tone="dark" ping>Conexión directa Mar del Plata</Pill>
            <h1 className="font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6">¿Hablamos ahora?</h1>
            <p className="mt-6 text-lg text-brand-blue-200 leading-relaxed">Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce.</p>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs text-brand-blue-200">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"><Icon name="map-pin" size={14} tone="yellow" />Oficina Central · Friuli 1972, Mar del Plata</span>
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"><Icon name="calendar" size={14} tone="yellow" />Operación Lunes a Sábado · Turnos 2026</span>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CONTACT_CHANNELS.map((c) => (
              <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="group rounded-3xl bg-brand-ink/60 backdrop-blur-md border border-white/20 p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
                <span className="w-12 h-12 rounded-xl bg-brand-yellow-500 flex items-center justify-center"><Icon name={c.icon} size={22} tone="ink" /></span>
                <div className="flex-1"><h2 className="font-subheading uppercase tracking-widest text-lg">{c.title}</h2><p className="text-sm text-brand-blue-200 mt-1">{c.text}</p></div>
                <span className="inline-flex items-center gap-2 font-mono text-sm text-brand-yellow-500">{c.cta}<Icon name="arrow-right" size={16} tone="yellow" className="group-hover:translate-x-1 transition-transform duration-200" /></span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <Pill className="mb-4">Propuesta B2B · General Pueyrredón</Pill>
            <h2 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink">Pedí un plan a medida</h2>
            <p className="mt-4 text-lg text-brand-blue-600 leading-relaxed">Si tu negocio despacha a diario en Mar del Plata o necesitás integración de envíos para tu tienda online, armamos un esquema con tarifas fijas, retiros programados y cuenta corriente mensual.</p>
            <ul className="mt-6 space-y-3">
              {["Tarifas por volumen", "Retiros en tu local", "Todo MDQ y Batán"].map((t) => <li key={t} className="flex items-center gap-3 text-brand-ink"><Icon name="circle-check" size={18} tone="blue" />{t}</li>)}
            </ul>
            <div className="mt-8 rounded-3xl overflow-hidden border border-brand-blue-100 relative" style={{ minHeight: 260 }}>
              <img src={IMG + "card_mapa.webp"} alt="Mapa de cobertura General Pueyrredón" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between" style={{ background: "linear-gradient(to top, rgba(0,39,124,.9) 0%, rgba(0,39,124,0) 60%)" }}>
                <div className="flex justify-between"><Pill tone="dark" ping>GPS activo</Pill></div>
                <div className="text-white"><p className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">Central de despacho MDQ · Cobertura General Pueyrredón</p><p className="font-display uppercase text-2xl mt-1">Hub operativo Friuli 1972</p><p className="font-mono text-xs text-brand-blue-200 mt-1">Salidas cada 30 min · Soporte en directo</p></div>
              </div>
            </div>
          </div>
          <form className="lg:col-span-6 rounded-3xl bg-brand-white-50 border border-brand-blue-100 shadow-minimal p-6 sm:p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <Pill>Cotización inmediata</Pill>
            <h3 className="font-display uppercase leading-none text-3xl text-brand-ink">Cotizá tu cuenta comercial</h3>
            <Field id="c-nombre" label="Nombre o Comercio" placeholder="Ej: Tienda Güemes / Juan Pérez" required />
            <Field id="c-tel" label="WhatsApp / Teléfono" type="tel" placeholder="Ej: 223 660-2699" required />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field id="c-vol" label="Volumen mensual"><select defaultValue="20-50"><option value="20-50">20 a 50 envíos</option><option value="50-200">50 a 200 envíos</option><option value="200-500">200 a 500 envíos</option><option value="+500">+500 envíos (Gran cuenta)</option></select></Field>
              <Field id="c-mod" label="Modalidad"><select defaultValue="express"><option value="express">Express (2 horas)</option><option value="lowcost">LowCost (Mismo día)</option><option value="flex">MercadoLibre Flex</option><option value="3pl">Fulfillment 3PL</option></select></Field>
            </div>
            <Cta className="w-full">Solicitar plan y tarifas</Cta>
            {sent ? <p role="status" className="text-sm text-brand-blue-700">Recibido. Un coordinador te escribe por WhatsApp para armar el plan.</p> : <p className="text-xs text-brand-blue-600">Atención comercial directa en Mar del Plata · Sin costos de apertura de cuenta</p>}
          </form>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <Pill className="mb-4">Centro de distribución y base central</Pill>
            <h2 className="font-display uppercase leading-[0.9] text-4xl text-brand-ink">Base de operaciones MDQ</h2>
            <p className="mt-3 text-brand-blue-600">Partido de General Pueyrredón. Atención presencial y retiro de cargas en Friuli 1972.</p>
          </div>
          <dl className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[["map-pin", "Centro de Distribución", "Friuli 1972, Mar del Plata"], ["phone", "Línea Directa y WhatsApp", "+54 223 660-2699"], ["mail", "Atención Comercial", "matiascejas@enviosdosruedas.com"], ["clock", "Horarios de Despacho (Base Central)", "Lunes a Viernes 09:00 - 18:00 hs · Sábados 10:00 - 15:00 hs"]].map(([i, k, v]) => (
              <div key={k} className="rounded-2xl bg-white border border-brand-blue-100 p-5 flex gap-4"><span className="w-11 h-11 rounded-xl bg-brand-blue-50 flex items-center justify-center shrink-0"><Icon name={i} size={20} tone="blue" /></span><div><dt className="font-subheading uppercase tracking-widest text-xs text-brand-blue-600">{k}</dt><dd className="font-mono text-sm text-brand-ink mt-1">{v}</dd></div></div>
            ))}
          </dl>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { ContactoScreen });
