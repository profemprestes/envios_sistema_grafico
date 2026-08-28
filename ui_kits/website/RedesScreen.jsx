// Nuestras redes (ruta /nosotros/nuestras-redes).
const REDES_HERO = [
  { icon: "instagram", title: "Instagram oficial", text: "Rutas en vivo, fotos de la flota en MDQ y novedades de horarios.", cta: "Ver historias", href: "https://instagram.com/enviosdosruedas" },
  { icon: "facebook", title: "Facebook comunidad", text: "El día a día de nuestros cadetes recorriendo calles y barrios de Mar del Plata.", cta: "Mirar videos", href: "https://facebook.com/enviosdosruedas" },
  { icon: "message-circle", title: "Canal de WhatsApp", text: "Avisos de cortes de tránsito, clima y códigos de descuento relámpago.", cta: "Unirme al canal", href: WA },
];
const REDES_CHANNELS = [
  { icon: "message-circle", tag: "Atención inmediata", name: "WhatsApp directo", handle: "+54 223 660-2699", text: "Atención personalizada y sin demoras por WhatsApp. El canal más ágil para coordinar cotizaciones, retiros inmediatos, envíos Flex y resolver dudas sobre nuestra operativa diaria.", cta: "Chateá ahora", href: "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web." },
  { icon: "instagram", tag: "+3.000 seguidores", name: "Instagram", handle: "@enviosdosruedas", text: "Mirá nuestro día a día, fotos reales de las entregas diarias de la flota y promociones especiales diseñadas para tu e-commerce.", cta: "Seguinos en Instagram", href: "https://instagram.com/enviosdosruedas" },
  { icon: "facebook", tag: "+2.000 seguidores", name: "Facebook", handle: "@enviosdosruedas", text: "Seguinos para enterarte de ofertas exclusivas y novedades logísticas sobre el tránsito y cadetería comercial local.", cta: "Seguinos en Facebook", href: "https://facebook.com/enviosdosruedas" },
];
const REDES_POSTS = [
  { net: "facebook", date: "21 Jun", text: "Mensajería Envíos DosRuedas. ¡Somos la solución para tus envíos en Mar del Plata! Confianza y responsabilidad son nuestros pilares.", likes: 12, comments: 10, href: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l", featured: true },
  { net: "instagram", date: "21 Jun", text: "Mensajería Envíos DosRuedas. ¡Somos la solución para tus envíos en Mar del Plata! Te ofrecemos un servicio confiable.", likes: 14, comments: 2, href: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/" },
  { net: "facebook", date: "21 Jun", text: "Para vos, que vendés en Mar del Plata y hacés envíos. ¿Solés usar apps genéricas pero no te dan tranquilidad ni cara visible?", likes: 19, comments: 7, href: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl" },
  { net: "instagram", date: "21 Jun", text: "En Envíos DosRuedas, nuestro servicio se construye sobre tres pilares fundamentales: Responsabilidad, Eficiencia y Confianza.", likes: 24, comments: 4, href: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/" },
  { net: "instagram", date: "21 Jun", text: "En cada envío, nos das tu confianza. Con cada entrega, te demostramos por qué vale la pena. En Envíos Dos Ruedas, la responsabilidad es nuestro motor.", likes: 31, comments: 6, href: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/" },
];

export function RedesScreen({ go }) {
  return (
    <div>
      <section className="relative overflow-hidden text-white" style={{ background: HERO_BG }}>
        <HeroGrid />
        <Container className="relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Pill tone="dark" ping>Comunidad en movimiento · Social media</Pill>
            <h1 className="font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6">Comunidad en línea</h1>
            <p className="mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl">La logística también se vive en redes. Rutas en vivo, promos relámpago y la comunidad de repartidores más grande de Mar del Plata.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {REDES_HERO.map((r) => <a key={r.title} href={r.href} target="_blank" rel="noopener" className="group rounded-2xl bg-white/10 border border-white/15 p-4 hover:bg-white/20 transition-colors duration-200"><Icon name={r.icon} size={22} tone="yellow" /><p className="font-subheading uppercase tracking-widest text-sm mt-3">{r.title}</p><p className="text-xs text-brand-blue-200 mt-1 leading-relaxed">{r.text}</p><span className="inline-flex items-center gap-1 font-mono text-xs text-brand-yellow-500 mt-3">{r.cta}<Icon name="arrow-up-right" size={14} tone="yellow" /></span></a>)}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="rounded-2xl overflow-hidden border border-white/10 grid grid-cols-1 sm:grid-cols-2">
                <div className="relative" style={{ minHeight: 260 }}><img src={IMG + "hero_express.webp"} alt="Mensajero de Envíos DosRuedas" className="absolute inset-0 w-full h-full object-cover" /></div>
                <div className="p-6" style={{ background: "linear-gradient(to bottom,rgba(6,54,165,.85),rgba(0,39,124,.95))" }}>
                  <p className="font-mono text-4xl font-bold text-brand-yellow-500">+4.850</p>
                  <p className="font-subheading uppercase tracking-widest text-xs mt-1">Más de 5.000 seguidores en redes</p>
                  <p className="text-sm text-brand-blue-200 leading-relaxed mt-3">Sumate a la red más activa de la ciudad. Compartimos historias del asfalto marplatense, consejos de embalaje para e-commerce y promociones sorpresa todos los meses.</p>
                  <div className="mt-4 space-y-2 font-mono text-xs"><p><span className="text-brand-yellow-500">#RutasMDQ</span> · Cadetes en calle</p><p><span className="text-brand-yellow-500">#SameDayMDQ</span> · 100% efectividad</p></div>
                  <Cta small href="https://instagram.com/enviosdosruedas" icon="instagram" className="mt-5">Seguinos en Instagram</Cta>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <SectionHead title="Canales oficiales" text="Conectate al instante con nuestras plataformas oficiales y formá parte de la mayor comunidad logística de Mar del Plata." />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {REDES_CHANNELS.map((c, i) => (
              <div key={c.name} className={"rounded-3xl p-8 flex flex-col " + (i === 0 ? "lg:col-span-6 bg-brand-blue-700 text-white" : "lg:col-span-3 bg-brand-white-50 border border-brand-blue-100 text-brand-ink")}>
                <div className="flex items-center justify-between"><span className={"w-12 h-12 rounded-xl flex items-center justify-center " + (i === 0 ? "bg-brand-yellow-500" : "bg-white border border-brand-blue-100")}><Icon name={c.icon} size={22} tone={i === 0 ? "ink" : "blue"} /></span><span className={"font-mono text-xs uppercase " + (i === 0 ? "text-brand-yellow-500" : "text-brand-blue-500")}>{c.tag}</span></div>
                <h3 className="font-display uppercase text-3xl leading-none mt-6">{c.name}</h3>
                <p className={"font-mono text-sm mt-1 " + (i === 0 ? "text-brand-blue-200" : "text-brand-blue-700")}>{c.handle}</p>
                <p className={"text-sm leading-relaxed mt-4 flex-1 " + (i === 0 ? "text-brand-blue-200" : "text-brand-blue-600")}>{c.text}</p>
                <div className="mt-6"><Cta small variant={i === 0 ? "primary" : "outline"} icon="arrow-up-right" href={c.href}>{c.cta}</Cta></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100">
        <Container>
          <SectionHead pill="En vivo" title="Publicaciones recientes" text="Lo que está pasando ahora mismo en nuestras redes sociales oficiales de Mar del Plata. Seguinos para no perderte nada." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REDES_POSTS.map((p, i) => (
              <article key={p.href} className={"rounded-3xl p-6 flex flex-col gap-4 " + (p.featured ? "bg-brand-ink text-white lg:col-span-1" : "bg-white border border-brand-blue-100 text-brand-ink")}>
                <div className="flex items-center gap-3"><img src={IMG + "logo-envios-simplified.webp"} alt="" className="w-10 h-10 rounded-full" /><div className="flex-1"><p className="font-subheading uppercase tracking-widest text-sm">Envíos DosRuedas</p><p className={"font-mono text-xs " + (p.featured ? "text-brand-blue-200" : "text-brand-blue-600")}>{p.date}</p></div><Icon name={p.net} size={18} tone={p.featured ? "yellow" : "blue"} /></div>
                <p className={"text-sm leading-relaxed flex-1 " + (p.featured ? "text-brand-blue-200" : "text-brand-blue-600")}>{p.text}</p>
                <div className="flex items-center justify-between font-mono text-xs"><span className="flex items-center gap-4"><span className="inline-flex items-center gap-1"><Icon name="heart" size={14} tone={p.featured ? "yellow" : "blue"} />{p.likes}</span><span className="inline-flex items-center gap-1"><Icon name="message-square" size={14} tone={p.featured ? "yellow" : "blue"} />{p.comments}</span></span><a href={p.href} target="_blank" rel="noopener" className={"inline-flex items-center gap-1 font-subheading uppercase tracking-widest " + (p.featured ? "text-brand-yellow-500" : "text-brand-blue-700")}>Ver original<Icon name="arrow-up-right" size={14} tone={p.featured ? "yellow" : "blue"} /></a></div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { RedesScreen });
