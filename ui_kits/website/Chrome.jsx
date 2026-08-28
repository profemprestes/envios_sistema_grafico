// Chrome del sitio: helpers compartidos, Navbar, franja global de redes y Footer.
// Sólo clases Tailwind v4 compiladas del sitio real (ver ../../_ds_bundle.css).
const IMG = "../../guidelines/img/";
const HERO_BG = "linear-gradient(135deg,#00277C 0%,#0636A5 60%,#0742CA 100%)";
const PHONE = "223 660-2699";
const TEL = "tel:+542236602699";
const WA = "https://wa.me/542236602699";
const WA_MSG = "https://wa.me/542236602699?text=Hola%20Env%C3%ADos%20DosRuedas!%20Quiero%20hacer%20una%20consulta%20de%20env%C3%ADos";

// Iconos Lucide por CDN (el sitio real usa lucide-react). tone: white | yellow | blue | ink
const ICON_FILTER = {
  white: "invert(1)",
  yellow: "invert(89%) sepia(72%) saturate(3000%) hue-rotate(3deg) brightness(105%)",
  blue: "invert(16%) sepia(84%) saturate(3200%) hue-rotate(220deg) brightness(85%)",
  ink: "invert(12%) sepia(70%) saturate(3000%) hue-rotate(222deg) brightness(70%)",
};
export function Icon({ name, size = 20, tone = "ink", className = "" }) {
  return (
    <img src={"https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/" + name + ".svg"} width={size} height={size} alt=""
      aria-hidden="true" className={"shrink-0 " + className} style={{ filter: ICON_FILTER[tone] }} />
  );
}

export function Container({ className = "", children }) {
  return <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " + className}>{children}</div>;
}

// Pill de categoría (Bebas Neue). Sobre fondo oscuro tone="dark".
export function Pill({ children, tone = "light", ping = false, className = "" }) {
  const cls = tone === "dark"
    ? "bg-brand-ink/60 border border-white/15 text-brand-yellow-500"
    : "bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700";
  return (
    <span className={"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-subheading text-xs uppercase tracking-widest font-bold " + cls + " " + className}>
      {ping && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500"></span>
        </span>
      )}
      {children}
    </span>
  );
}

// Nested-Pill CTA. variant: primary (amarillo) | ghost (glass sobre oscuro) | outline (sobre claro)
export function Cta({ children, variant = "primary", href, onClick, icon = "arrow-right", small = false, className = "" }) {
  const base = "group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-[.05em] font-bold border transition-all duration-300 active:scale-[.98] " + (small ? "px-5 py-2 min-h-[48px] " : "px-8 py-3 min-h-[52px] ");
  const look = {
    primary: "bg-brand-yellow-500 text-brand-ink border-brand-yellow-500 shadow-cta-glow hover:bg-brand-yellow-400 hover:shadow-[0_0_50px_rgba(255,236,1,0.5)]",
    ghost: "border-white/20 bg-white/10 hover:bg-white/20 text-white",
    outline: "border-brand-blue-700 bg-white text-brand-blue-700 hover:bg-brand-blue-50",
  }[variant];
  const orb = variant === "primary"
    ? "bg-brand-blue-700/10 text-brand-ink group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500"
    : variant === "ghost" ? "bg-white/10 text-white group-hover:bg-brand-yellow-500 group-hover:text-brand-ink"
    : "bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500";
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick} target={href && href.startsWith("http") ? "_blank" : undefined} rel={href && href.startsWith("http") ? "noopener" : undefined}
      className={base + look + " " + className}>
      <span className="truncate">{children}</span>
      <span className={"w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-all duration-200 " + orb}>
        <Icon name={icon} size={16} tone={variant === "primary" ? "ink" : variant === "ghost" ? "white" : "blue"} />
      </span>
    </Tag>
  );
}

// Grilla procedural de rutas para heros oscuros.
export function HeroGrid({ id = "hero-grid" }) {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" aria-hidden="true">
      <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="2,6" />
        <circle cx="0" cy="0" r="1.5" fill="#FFEC01" />
      </pattern>
      <rect width="100%" height="100%" fill={"url(#" + id + ")"} />
    </svg>
  );
}

// Encabezado de sección (pill opcional + H2 + p).
export function SectionHead({ pill, title, text, dark = false, center = false, className = "" }) {
  return (
    <div className={(center ? "text-center mx-auto " : "") + "max-w-3xl mb-12 " + className}>
      {pill && <Pill tone={dark ? "dark" : "light"} className="mb-4">{pill}</Pill>}
      <h2 className={"font-display uppercase leading-[0.9] text-4xl sm:text-5xl " + (dark ? "text-white" : "text-brand-ink")}>{title}</h2>
      {text && <p className={"mt-4 text-lg leading-relaxed " + (dark ? "text-brand-blue-200" : "text-brand-blue-600")}>{text}</p>}
    </div>
  );
}

// ---------------------------------------------------------------- Navbar
const NAV = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", items: [
    { label: "Envíos Express", path: "/servicios/envios-express", icon: "zap" },
    { label: "Envíos LowCost", path: "/servicios/envios-lowcost", icon: "trending-down" },
    { label: "Plan Emprendedores 3PL", path: "/servicios/plan-emprendedores", icon: "package" },
    { label: "Envíos Flex (MeLi)", path: "/servicios/enviosflex", icon: "shopping-bag" },
  ] },
  { label: "Nosotros", items: [
    { label: "Sobre Nosotros", path: "/nosotros/sobre-nosotros", icon: "info" },
    { label: "Preguntas Frecuentes", path: "/nosotros/preguntas-frecuentes", icon: "circle-help" },
    { label: "Nuestras Redes", path: "/nosotros/nuestras-redes", icon: "share-2" },
  ] },
  { label: "Contacto", path: "/contacto" },
];

export function Brand({ go, size = "md" }) {
  return (
    <a href="#/" onClick={(e) => { e.preventDefault(); go("/"); }} className="flex items-center gap-3 cursor-pointer">
      <img src={IMG + "logo-envios-simplified.webp"} alt="Isotipo Envíos Dos Ruedas" className={(size === "lg" ? "h-12 w-12" : "h-10 w-10") + " rounded-full"} />
      <span className={"font-display uppercase leading-none text-white " + (size === "lg" ? "text-3xl" : "text-2xl")}>Envíos <span className="text-brand-yellow-500">DosRuedas</span></span>
    </a>
  );
}

export function Navbar({ path, go }) {
  const [open, setOpen] = React.useState(null);
  const [mobile, setMobile] = React.useState(false);
  const nav = (p) => (e) => { e.preventDefault(); setOpen(null); setMobile(false); go(p); };
  const isActive = (it) => it.path ? path === it.path : it.items.some((s) => s.path === path);
  return (
    <header className="sticky top-0 z-50 bg-brand-blue-700 border-b border-white/10 shadow-antigravity-deep">
      <Container className="flex items-center justify-between gap-6 py-3">
        <Brand go={go} />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
          {NAV.map((it, i) => (
            <div key={it.label} className="relative" onMouseEnter={() => it.items && setOpen(i)} onMouseLeave={() => setOpen(null)}>
              {it.path ? (
                <a href={"#" + it.path} onClick={nav(it.path)}
                  className={"inline-flex items-center px-4 py-2 rounded-full font-subheading uppercase tracking-widest text-sm transition-colors duration-200 " + (isActive(it) ? "bg-white/10 text-brand-yellow-500" : "text-white hover:bg-white/10")}>{it.label}</a>
              ) : (
                <button type="button" onClick={() => setOpen(open === i ? null : i)}
                  className={"inline-flex items-center gap-1 px-4 py-2 rounded-full font-subheading uppercase tracking-widest text-sm transition-colors duration-200 " + (isActive(it) ? "bg-white/10 text-brand-yellow-500" : "text-white hover:bg-white/10")}>
                  {it.label}<Icon name="chevron-down" size={14} tone={isActive(it) ? "yellow" : "white"} className={open === i ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
              )}
              {it.items && open === i && (
                <div className="absolute top-full left-0 pt-2 z-50" style={{ width: 300 }}>
                  <div className="bg-brand-blue-700 backdrop-blur-md rounded-2xl border border-white/15 shadow-antigravity-deep p-2 space-y-1">
                    {it.items.map((s) => (
                      <a key={s.path} href={"#" + s.path} onClick={nav(s.path)}
                        className={"flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 " + (path === s.path ? "bg-white/10" : "hover:bg-white/10")}>
                        <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center"><Icon name={s.icon} size={18} tone="yellow" /></span>
                        <span className="font-subheading uppercase tracking-widest text-sm text-white">{s.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a href={TEL} className="inline-flex items-center gap-2 font-mono text-sm text-white hover:text-brand-yellow-500 transition-colors duration-200"><Icon name="phone" size={16} tone="yellow" />{PHONE}</a>
          <Cta small href="#/cotizar/express" onClick={nav("/cotizar/express")}>Cotizá tu envío</Cta>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <a href={TEL} aria-label="Llamar por teléfono" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center"><Icon name="phone" size={18} tone="yellow" /></a>
          <button type="button" aria-label="Toggle Navigation Menu" onClick={() => setMobile(!mobile)} className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center"><Icon name={mobile ? "x" : "menu"} size={20} tone="white" /></button>
        </div>
      </Container>
      {mobile && (
        <div className="lg:hidden bg-brand-ink border-t border-white/10">
          <Container className="py-4 space-y-2">
            <a href="#/" onClick={nav("/")} className="block px-3 py-2 rounded-xl font-subheading uppercase tracking-widest text-sm text-white hover:bg-white/10">Inicio</a>
            {[["Servicios", NAV[1].items], ["Cotizadores", [{ label: "Cotizar Express", path: "/cotizar/express" }, { label: "Cotizar LowCost", path: "/cotizar/lowcost" }]], ["Nosotros", NAV[2].items]].map(([g, items]) => (
              <div key={g}>
                <p className="px-3 pt-3 pb-1 font-mono text-xs text-brand-blue-200 uppercase">{g}</p>
                {items.map((s) => <a key={s.path} href={"#" + s.path} onClick={nav(s.path)} className="block px-3 py-2 rounded-xl font-subheading uppercase tracking-widest text-sm text-white hover:bg-white/10">{s.label}</a>)}
              </div>
            ))}
            <a href="#/contacto" onClick={nav("/contacto")} className="block px-3 py-2 rounded-xl font-subheading uppercase tracking-widest text-sm text-white hover:bg-white/10">Contacto</a>
            <div className="pt-3"><Cta href="#/cotizar/express" onClick={nav("/cotizar/express")} className="w-full">Cotizá tu Envío</Cta></div>
          </Container>
        </div>
      )}
    </header>
  );
}

// ---------------------------------------------------- Franja global de redes
const REDES = [
  { tag: "Facebook oficial", name: "FACEBOOK", handle: "Envíos DosRuedas", text: "Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.", cta: "Seguir comunidad", href: "https://www.facebook.com/share/1RnSzyweir/", icon: "facebook" },
  { tag: "Instagram MDQ", name: "INSTAGRAM", handle: "@enviosdosruedas", text: "Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.", cta: "Ver contenido", href: "https://www.instagram.com/enviosdosruedas/", icon: "instagram" },
  { tag: "WhatsApp directo", name: "WHATSAPP", handle: "+54 223 660-2699", text: "Escribinos directamente para consultas, contrataciones o soporte express al toque.", cta: "Iniciar chat", href: WA, icon: "message-circle" },
];
export function RedesStrip() {
  return (
    <section id="carrusel-redes" className="py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100">
      <Container>
        <SectionHead pill="Nuestra comunidad digital" title="Seguí nuestro movimiento" text="Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {REDES.map((r) => (
            <div key={r.name} className="rounded-3xl bg-white border border-brand-blue-100 shadow-minimal p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-brand-blue-50 flex items-center justify-center"><Icon name={r.icon} size={22} tone="blue" /></span>
                <span className="font-mono text-xs text-brand-blue-500 uppercase">{r.tag}</span>
              </div>
              <div>
                <h3 className="font-display uppercase text-2xl text-brand-ink leading-none">{r.name}</h3>
                <p className="font-mono text-sm text-brand-blue-700 mt-1">{r.handle}</p>
              </div>
              <p className="text-sm text-brand-blue-600 leading-relaxed flex-1">{r.text}</p>
              <Cta variant="outline" small href={r.href} icon="arrow-up-right">{r.cta}</Cta>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---------------------------------------------------------------- Footer
export function Footer({ go }) {
  const nav = (p) => (e) => { e.preventDefault(); go(p); };
  const FootLink = ({ path, children }) => <a href={"#" + path} onClick={nav(path)} className="text-brand-blue-200 hover:text-brand-yellow-500 transition-colors duration-200">{children}</a>;
  return (
    <footer id="optimized-footer" className="relative overflow-hidden text-white" style={{ background: HERO_BG }}>
      <HeroGrid id="footer-grid" />
      <Container className="relative py-16 sm:py-20">
        <div className="rounded-3xl bg-brand-ink/60 backdrop-blur-md border border-white/15 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Pill tone="dark" ping>Operaciones activas Mar del Plata 2026</Pill>
            <h3 className="font-display uppercase leading-[0.9] text-4xl sm:text-5xl mt-4">¿Tenés envíos para hoy? Los entregamos a tiempo.</h3>
            <p className="mt-4 text-lg text-brand-blue-200 max-w-xl">Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.</p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
            <Cta href="#/cotizar/express" onClick={nav("/cotizar/express")}>Cotizá tu Envío</Cta>
            <Cta variant="ghost" href={WA_MSG} icon="message-circle">Chateá con Nosotros</Cta>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src={IMG + "logo-envios-simplified.webp"} alt="Logo Envíos DosRuedas" className="h-14 w-14 rounded-full" />
              <div>
                <p className="font-display uppercase text-2xl leading-none">Envíos <span className="text-brand-yellow-500">DosRuedas</span></p>
                <p className="font-subheading uppercase tracking-widest text-xs text-brand-blue-200 mt-1">Tu solución confiable · Mar del Plata</p>
              </div>
            </div>
            <p className="text-sm text-brand-blue-200 leading-relaxed max-w-md">Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano.</p>
            <div>
              <p className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500 mb-3">Canales oficiales</p>
              <div className="flex items-center gap-3">
                <a href="#/nosotros/nuestras-redes" onClick={nav("/nosotros/nuestras-redes")} aria-label="Instagram Oficial" className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20"><Icon name="instagram" size={18} tone="white" /></a>
                <a href="#/nosotros/nuestras-redes" onClick={nav("/nosotros/nuestras-redes")} aria-label="Facebook Oficial" className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20"><Icon name="facebook" size={18} tone="white" /></a>
                <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp Directo" className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20"><Icon name="message-circle" size={18} tone="white" /></a>
                <span className="ml-3 inline-flex items-center gap-2 font-mono text-xs text-brand-blue-200"><Icon name="badge-check" size={16} tone="yellow" />Partner 3PL Verificado</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-subheading uppercase tracking-widest text-sm text-brand-yellow-500 mb-4">Servicios y Cotizadores</h4>
            <ul className="space-y-3 text-sm">
              <li><FootLink path="/cotizar/express">Cotizador Express &lt; 2H</FootLink></li>
              <li><FootLink path="/cotizar/lowcost">Cotizador LowCost Batch</FootLink></li>
              <li><FootLink path="/servicios/enviosflex">Mercado Envíos Flex</FootLink></li>
              <li><FootLink path="/servicios/plan-emprendedores">E-Commerce &amp; 3PL</FootLink></li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h4 className="font-subheading uppercase tracking-widest text-sm text-brand-yellow-500 mb-4">Base de Operaciones MDQ</h4>
            <dl className="space-y-3 text-sm">
              <div><dt className="text-brand-blue-200">Centro de Distribución</dt><dd className="font-mono text-white">Friuli 1972, Mar del Plata</dd></div>
              <div><dt className="text-brand-blue-200">Línea Directa y WhatsApp</dt><dd><a href={TEL} className="font-mono text-white hover:text-brand-yellow-500">+54 223 660-2699</a></dd></div>
              <div><dt className="text-brand-blue-200">Atención Comercial</dt><dd><a href="mailto:matiascejas@enviosdosruedas.com" className="font-mono text-white hover:text-brand-yellow-500">matiascejas@enviosdosruedas.com</a></dd></div>
              <div><dt className="text-brand-blue-200">Horarios de Despacho (Base Central)</dt><dd className="font-mono text-white">Lunes a Viernes: 09:00 - 18:00 hs<br />Sábados: 10:00 - 15:00 hs</dd></div>
            </dl>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-blue-200">
          <p>© 2026 Envíos DosRuedas · Mar del Plata, Argentina.</p>
          <div className="flex flex-wrap gap-4">
            <FootLink path="/nosotros/sobre-nosotros">Sobre Nosotros</FootLink>
            <FootLink path="/nosotros/preguntas-frecuentes">Preguntas Frecuentes</FootLink>
            <FootLink path="/nosotros/nuestras-redes">Nuestras Redes</FootLink>
            <FootLink path="/terminos-y-condiciones">Términos y Condiciones</FootLink>
            <FootLink path="/politica-de-privacidad">Política de Privacidad</FootLink>
          </div>
          <button type="button" aria-label="Volver arriba" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-11 h-11 rounded-full bg-brand-yellow-500 flex items-center justify-center hover:bg-brand-yellow-400 transition-colors duration-200"><Icon name="arrow-up" size={18} tone="ink" /></button>
        </div>
      </Container>
    </footer>
  );
}

// Cascarón de página completo: header + contenido + franja de redes + footer.
// Campo de formulario del sistema (label Bebas + input/select redondeado). Compartido por Contacto y Cotizar.
export function Field({ id, label, type = "text", placeholder, required, children, dark = false }) {
  const cls = dark
    ? "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500"
    : "w-full h-12 px-4 rounded-xl bg-white border border-brand-blue-200 text-brand-ink placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500";
  return (
    <div className="space-y-2">
      <label htmlFor={id} className={"block font-subheading uppercase tracking-widest text-xs " + (dark ? "text-brand-yellow-500" : "text-brand-blue-700")}>{label}{required && " *"}</label>
      {children ? React.cloneElement(children, { id, className: cls }) : <input id={id} type={type} placeholder={placeholder} required={required} className={cls} />}
    </div>
  );
}

export function Chrome({ path = "/", go = () => {}, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar path={path} go={go} />
      <main className="flex-1">{children}</main>
      <RedesStrip />
      <Footer go={go} />
    </div>
  );
}

Object.assign(window, { IMG, HERO_BG, PHONE, TEL, WA, WA_MSG, Icon, Container, Pill, Cta, HeroGrid, SectionHead, Navbar, RedesStrip, Footer, Chrome, Field });
