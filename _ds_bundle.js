/* @ds-bundle: {"format":4,"namespace":"EnviosDosRuedas","components":[{"name":"Icon","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"Container","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"Pill","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"Cta","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"HeroGrid","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"SectionHead","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"Brand","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"Navbar","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"RedesStrip","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"Footer","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"Field","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"Chrome","sourcePath":"ui_kits/website/Chrome.jsx"},{"name":"ContactoScreen","sourcePath":"ui_kits/website/ContactoScreen.jsx"},{"name":"CotizarScreen","sourcePath":"ui_kits/website/CotizarScreen.jsx"},{"name":"FaqScreen","sourcePath":"ui_kits/website/FaqScreen.jsx"},{"name":"HomeScreen","sourcePath":"ui_kits/website/HomeScreen.jsx"},{"name":"LegalScreen","sourcePath":"ui_kits/website/LegalScreen.jsx"},{"name":"NosotrosScreen","sourcePath":"ui_kits/website/NosotrosScreen.jsx"},{"name":"RedesScreen","sourcePath":"ui_kits/website/RedesScreen.jsx"},{"name":"ServicioScreen","sourcePath":"ui_kits/website/ServicioScreen.jsx"}],"sourceHashes":{"ui_kits/website/Chrome.jsx":"27f4203ad991","ui_kits/website/ContactoScreen.jsx":"02ade9197c11","ui_kits/website/CotizarScreen.jsx":"a4b319ba598a","ui_kits/website/FaqScreen.jsx":"9ccb75683fa5","ui_kits/website/HomeScreen.jsx":"7d53c9b65370","ui_kits/website/LegalScreen.jsx":"459bb17f107f","ui_kits/website/NosotrosScreen.jsx":"90135137273e","ui_kits/website/RedesScreen.jsx":"6bd80ab9e1e6","ui_kits/website/ServicioScreen.jsx":"9ade77db9d2c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EnviosDosRuedas = window.EnviosDosRuedas || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Chrome.jsx
try { (() => {
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
  ink: "invert(12%) sepia(70%) saturate(3000%) hue-rotate(222deg) brightness(70%)"
};
function Icon({
  name,
  size = 20,
  tone = "ink",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/" + name + ".svg",
    width: size,
    height: size,
    alt: "",
    "aria-hidden": "true",
    className: "shrink-0 " + className,
    style: {
      filter: ICON_FILTER[tone]
    }
  });
}
function Container({
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " + className
  }, children);
}

// Pill de categoría (Bebas Neue). Sobre fondo oscuro tone="dark".
function Pill({
  children,
  tone = "light",
  ping = false,
  className = ""
}) {
  const cls = tone === "dark" ? "bg-brand-ink/60 border border-white/15 text-brand-yellow-500" : "bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-700";
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-subheading text-xs uppercase tracking-widest font-bold " + cls + " " + className
  }, ping && /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-2.5 w-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500"
  })), children);
}

// Nested-Pill CTA. variant: primary (amarillo) | ghost (glass sobre oscuro) | outline (sobre claro)
function Cta({
  children,
  variant = "primary",
  href,
  onClick,
  icon = "arrow-right",
  small = false,
  className = ""
}) {
  const base = "group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-[.05em] font-bold border transition-all duration-300 active:scale-[.98] " + (small ? "px-5 py-2 min-h-[48px] " : "px-8 py-3 min-h-[52px] ");
  const look = {
    primary: "bg-brand-yellow-500 text-brand-ink border-brand-yellow-500 shadow-cta-glow hover:bg-brand-yellow-400 hover:shadow-[0_0_50px_rgba(255,236,1,0.5)]",
    ghost: "border-white/20 bg-white/10 hover:bg-white/20 text-white",
    outline: "border-brand-blue-700 bg-white text-brand-blue-700 hover:bg-brand-blue-50"
  }[variant];
  const orb = variant === "primary" ? "bg-brand-blue-700/10 text-brand-ink group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500" : variant === "ghost" ? "bg-white/10 text-white group-hover:bg-brand-yellow-500 group-hover:text-brand-ink" : "bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500";
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    target: href && href.startsWith("http") ? "_blank" : undefined,
    rel: href && href.startsWith("http") ? "noopener" : undefined,
    className: base + look + " " + className
  }, /*#__PURE__*/React.createElement("span", {
    className: "truncate"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-all duration-200 " + orb
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    tone: variant === "primary" ? "ink" : variant === "ghost" ? "white" : "blue"
  })));
}

// Grilla procedural de rutas para heros oscuros.
function HeroGrid({
  id = "hero-grid"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("pattern", {
    id: id,
    width: "48",
    height: "48",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48 0 L 0 0 0 48",
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: "0.75",
    strokeDasharray: "2,6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "0",
    r: "1.5",
    fill: "#FFEC01"
  })), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#" + id + ")"
  }));
}

// Encabezado de sección (pill opcional + H2 + p).
function SectionHead({
  pill,
  title,
  text,
  dark = false,
  center = false,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: (center ? "text-center mx-auto " : "") + "max-w-3xl mb-12 " + className
  }, pill && /*#__PURE__*/React.createElement(Pill, {
    tone: dark ? "dark" : "light",
    className: "mb-4"
  }, pill), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl " + (dark ? "text-white" : "text-brand-ink")
  }, title), text && /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg leading-relaxed " + (dark ? "text-brand-blue-200" : "text-brand-blue-600")
  }, text));
}

// ---------------------------------------------------------------- Navbar
const NAV = [{
  label: "Inicio",
  path: "/"
}, {
  label: "Servicios",
  items: [{
    label: "Envíos Express",
    path: "/servicios/envios-express",
    icon: "zap"
  }, {
    label: "Envíos LowCost",
    path: "/servicios/envios-lowcost",
    icon: "trending-down"
  }, {
    label: "Plan Emprendedores 3PL",
    path: "/servicios/plan-emprendedores",
    icon: "package"
  }, {
    label: "Envíos Flex (MeLi)",
    path: "/servicios/enviosflex",
    icon: "shopping-bag"
  }]
}, {
  label: "Nosotros",
  items: [{
    label: "Sobre Nosotros",
    path: "/nosotros/sobre-nosotros",
    icon: "info"
  }, {
    label: "Preguntas Frecuentes",
    path: "/nosotros/preguntas-frecuentes",
    icon: "circle-help"
  }, {
    label: "Nuestras Redes",
    path: "/nosotros/nuestras-redes",
    icon: "share-2"
  }]
}, {
  label: "Contacto",
  path: "/contacto"
}];
function Brand({
  go,
  size = "md"
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#/",
    onClick: e => {
      e.preventDefault();
      go("/");
    },
    className: "flex items-center gap-3 cursor-pointer"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "logo-envios-simplified.webp",
    alt: "Isotipo Env\xEDos Dos Ruedas",
    className: (size === "lg" ? "h-12 w-12" : "h-10 w-10") + " rounded-full"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display uppercase leading-none text-white " + (size === "lg" ? "text-3xl" : "text-2xl")
  }, "Env\xEDos ", /*#__PURE__*/React.createElement("span", {
    className: "text-brand-yellow-500"
  }, "DosRuedas")));
}
function Navbar({
  path,
  go
}) {
  const [open, setOpen] = React.useState(null);
  const [mobile, setMobile] = React.useState(false);
  const nav = p => e => {
    e.preventDefault();
    setOpen(null);
    setMobile(false);
    go(p);
  };
  const isActive = it => it.path ? path === it.path : it.items.some(s => s.path === path);
  return /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-50 bg-brand-blue-700 border-b border-white/10 shadow-antigravity-deep"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "flex items-center justify-between gap-6 py-3"
  }, /*#__PURE__*/React.createElement(Brand, {
    go: go
  }), /*#__PURE__*/React.createElement("nav", {
    className: "hidden lg:flex items-center gap-1",
    "aria-label": "Principal"
  }, NAV.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    className: "relative",
    onMouseEnter: () => it.items && setOpen(i),
    onMouseLeave: () => setOpen(null)
  }, it.path ? /*#__PURE__*/React.createElement("a", {
    href: "#" + it.path,
    onClick: nav(it.path),
    className: "inline-flex items-center px-4 py-2 rounded-full font-subheading uppercase tracking-widest text-sm transition-colors duration-200 " + (isActive(it) ? "bg-white/10 text-brand-yellow-500" : "text-white hover:bg-white/10")
  }, it.label) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(open === i ? null : i),
    className: "inline-flex items-center gap-1 px-4 py-2 rounded-full font-subheading uppercase tracking-widest text-sm transition-colors duration-200 " + (isActive(it) ? "bg-white/10 text-brand-yellow-500" : "text-white hover:bg-white/10")
  }, it.label, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    tone: isActive(it) ? "yellow" : "white",
    className: open === i ? "rotate-180 transition-transform" : "transition-transform"
  })), it.items && open === i && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-full left-0 pt-2 z-50",
    style: {
      width: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-blue-700 backdrop-blur-md rounded-2xl border border-white/15 shadow-antigravity-deep p-2 space-y-1"
  }, it.items.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.path,
    href: "#" + s.path,
    onClick: nav(s.path),
    className: "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 " + (path === s.path ? "bg-white/10" : "hover:bg-white/10")
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 18,
    tone: "yellow"
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-subheading uppercase tracking-widest text-sm text-white"
  }, s.label)))))))), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: TEL,
    className: "inline-flex items-center gap-2 font-mono text-sm text-white hover:text-brand-yellow-500 transition-colors duration-200"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    tone: "yellow"
  }), PHONE), /*#__PURE__*/React.createElement(Cta, {
    small: true,
    href: "#/cotizar/express",
    onClick: nav("/cotizar/express")
  }, "Cotiz\xE1 tu env\xEDo")), /*#__PURE__*/React.createElement("div", {
    className: "flex lg:hidden items-center gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: TEL,
    "aria-label": "Llamar por tel\xE9fono",
    className: "w-11 h-11 rounded-full bg-white/10 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    tone: "yellow"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Toggle Navigation Menu",
    onClick: () => setMobile(!mobile),
    className: "w-11 h-11 rounded-full bg-white/10 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mobile ? "x" : "menu",
    size: 20,
    tone: "white"
  })))), mobile && /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden bg-brand-ink border-t border-white/10"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "py-4 space-y-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/",
    onClick: nav("/"),
    className: "block px-3 py-2 rounded-xl font-subheading uppercase tracking-widest text-sm text-white hover:bg-white/10"
  }, "Inicio"), [["Servicios", NAV[1].items], ["Cotizadores", [{
    label: "Cotizar Express",
    path: "/cotizar/express"
  }, {
    label: "Cotizar LowCost",
    path: "/cotizar/lowcost"
  }]], ["Nosotros", NAV[2].items]].map(([g, items]) => /*#__PURE__*/React.createElement("div", {
    key: g
  }, /*#__PURE__*/React.createElement("p", {
    className: "px-3 pt-3 pb-1 font-mono text-xs text-brand-blue-200 uppercase"
  }, g), items.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.path,
    href: "#" + s.path,
    onClick: nav(s.path),
    className: "block px-3 py-2 rounded-xl font-subheading uppercase tracking-widest text-sm text-white hover:bg-white/10"
  }, s.label)))), /*#__PURE__*/React.createElement("a", {
    href: "#/contacto",
    onClick: nav("/contacto"),
    className: "block px-3 py-2 rounded-xl font-subheading uppercase tracking-widest text-sm text-white hover:bg-white/10"
  }, "Contacto"), /*#__PURE__*/React.createElement("div", {
    className: "pt-3"
  }, /*#__PURE__*/React.createElement(Cta, {
    href: "#/cotizar/express",
    onClick: nav("/cotizar/express"),
    className: "w-full"
  }, "Cotiz\xE1 tu Env\xEDo")))));
}

// ---------------------------------------------------- Franja global de redes
const REDES = [{
  tag: "Facebook oficial",
  name: "FACEBOOK",
  handle: "Envíos DosRuedas",
  text: "Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.",
  cta: "Seguir comunidad",
  href: "https://www.facebook.com/share/1RnSzyweir/",
  icon: "facebook"
}, {
  tag: "Instagram MDQ",
  name: "INSTAGRAM",
  handle: "@enviosdosruedas",
  text: "Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.",
  cta: "Ver contenido",
  href: "https://www.instagram.com/enviosdosruedas/",
  icon: "instagram"
}, {
  tag: "WhatsApp directo",
  name: "WHATSAPP",
  handle: "+54 223 660-2699",
  text: "Escribinos directamente para consultas, contrataciones o soporte express al toque.",
  cta: "Iniciar chat",
  href: WA,
  icon: "message-circle"
}];
function RedesStrip() {
  return /*#__PURE__*/React.createElement("section", {
    id: "carrusel-redes",
    className: "py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    pill: "Nuestra comunidad digital",
    title: "Segu\xED nuestro movimiento",
    text: "Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-6"
  }, REDES.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    className: "rounded-3xl bg-white border border-brand-blue-100 shadow-minimal p-6 flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-brand-blue-50 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 22,
    tone: "blue"
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-brand-blue-500 uppercase"
  }, r.tag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-2xl text-brand-ink leading-none"
  }, r.name), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-sm text-brand-blue-700 mt-1"
  }, r.handle)), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed flex-1"
  }, r.text), /*#__PURE__*/React.createElement(Cta, {
    variant: "outline",
    small: true,
    href: r.href,
    icon: "arrow-up-right"
  }, r.cta))))));
}

// ---------------------------------------------------------------- Footer
function Footer({
  go
}) {
  const nav = p => e => {
    e.preventDefault();
    go(p);
  };
  const FootLink = ({
    path,
    children
  }) => /*#__PURE__*/React.createElement("a", {
    href: "#" + path,
    onClick: nav(path),
    className: "text-brand-blue-200 hover:text-brand-yellow-500 transition-colors duration-200"
  }, children);
  return /*#__PURE__*/React.createElement("footer", {
    id: "optimized-footer",
    className: "relative overflow-hidden text-white",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, {
    id: "footer-grid"
  }), /*#__PURE__*/React.createElement(Container, {
    className: "relative py-16 sm:py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-brand-ink/60 backdrop-blur-md border border-white/15 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, "Operaciones activas Mar del Plata 2026"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl mt-4"
  }, "\xBFTen\xE9s env\xEDos para hoy? Los entregamos a tiempo."), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-200 max-w-xl"
  }, "Cotiz\xE1 online en segundos o coordin\xE1 directo con nuestro equipo log\xEDstico por WhatsApp.")), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 flex flex-wrap gap-4 lg:justify-end"
  }, /*#__PURE__*/React.createElement(Cta, {
    href: "#/cotizar/express",
    onClick: nav("/cotizar/express")
  }, "Cotiz\xE1 tu Env\xEDo"), /*#__PURE__*/React.createElement(Cta, {
    variant: "ghost",
    href: WA_MSG,
    icon: "message-circle"
  }, "Chate\xE1 con Nosotros"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "logo-envios-simplified.webp",
    alt: "Logo Env\xEDos DosRuedas",
    className: "h-14 w-14 rounded-full"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-display uppercase text-2xl leading-none"
  }, "Env\xEDos ", /*#__PURE__*/React.createElement("span", {
    className: "text-brand-yellow-500"
  }, "DosRuedas")), /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-blue-200 mt-1"
  }, "Tu soluci\xF3n confiable \xB7 Mar del Plata"))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-200 leading-relaxed max-w-md"
  }, "Con m\xE1s de 7 a\xF1os de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-yellow-500 mb-3"
  }, "Canales oficiales"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/nosotros/nuestras-redes",
    onClick: nav("/nosotros/nuestras-redes"),
    "aria-label": "Instagram Oficial",
    className: "w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 18,
    tone: "white"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#/nosotros/nuestras-redes",
    onClick: nav("/nosotros/nuestras-redes"),
    "aria-label": "Facebook Oficial",
    className: "w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 18,
    tone: "white"
  })), /*#__PURE__*/React.createElement("a", {
    href: WA,
    target: "_blank",
    rel: "noopener",
    "aria-label": "WhatsApp Directo",
    className: "w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 18,
    tone: "white"
  })), /*#__PURE__*/React.createElement("span", {
    className: "ml-3 inline-flex items-center gap-2 font-mono text-xs text-brand-blue-200"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 16,
    tone: "yellow"
  }), "Partner 3PL Verificado")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-subheading uppercase tracking-widest text-sm text-brand-yellow-500 mb-4"
  }, "Servicios y Cotizadores"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 text-sm"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(FootLink, {
    path: "/cotizar/express"
  }, "Cotizador Express < 2H")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(FootLink, {
    path: "/cotizar/lowcost"
  }, "Cotizador LowCost Batch")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(FootLink, {
    path: "/servicios/enviosflex"
  }, "Mercado Env\xEDos Flex")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(FootLink, {
    path: "/servicios/plan-emprendedores"
  }, "E-Commerce & 3PL")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-subheading uppercase tracking-widest text-sm text-brand-yellow-500 mb-4"
  }, "Base de Operaciones MDQ"), /*#__PURE__*/React.createElement("dl", {
    className: "space-y-3 text-sm"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    className: "text-brand-blue-200"
  }, "Centro de Distribuci\xF3n"), /*#__PURE__*/React.createElement("dd", {
    className: "font-mono text-white"
  }, "Friuli 1972, Mar del Plata")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    className: "text-brand-blue-200"
  }, "L\xEDnea Directa y WhatsApp"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
    href: TEL,
    className: "font-mono text-white hover:text-brand-yellow-500"
  }, "+54 223 660-2699"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    className: "text-brand-blue-200"
  }, "Atenci\xF3n Comercial"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:matiascejas@enviosdosruedas.com",
    className: "font-mono text-white hover:text-brand-yellow-500"
  }, "matiascejas@enviosdosruedas.com"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    className: "text-brand-blue-200"
  }, "Horarios de Despacho (Base Central)"), /*#__PURE__*/React.createElement("dd", {
    className: "font-mono text-white"
  }, "Lunes a Viernes: 09:00 - 18:00 hs", /*#__PURE__*/React.createElement("br", null), "S\xE1bados: 10:00 - 15:00 hs"))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-blue-200"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2026 Env\xEDos DosRuedas \xB7 Mar del Plata, Argentina."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement(FootLink, {
    path: "/nosotros/sobre-nosotros"
  }, "Sobre Nosotros"), /*#__PURE__*/React.createElement(FootLink, {
    path: "/nosotros/preguntas-frecuentes"
  }, "Preguntas Frecuentes"), /*#__PURE__*/React.createElement(FootLink, {
    path: "/nosotros/nuestras-redes"
  }, "Nuestras Redes"), /*#__PURE__*/React.createElement(FootLink, {
    path: "/terminos-y-condiciones"
  }, "T\xE9rminos y Condiciones"), /*#__PURE__*/React.createElement(FootLink, {
    path: "/politica-de-privacidad"
  }, "Pol\xEDtica de Privacidad")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Volver arriba",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    }),
    className: "w-11 h-11 rounded-full bg-brand-yellow-500 flex items-center justify-center hover:bg-brand-yellow-400 transition-colors duration-200"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 18,
    tone: "ink"
  })))));
}

// Cascarón de página completo: header + contenido + franja de redes + footer.
// Campo de formulario del sistema (label Bebas + input/select redondeado). Compartido por Contacto y Cotizar.
function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  children,
  dark = false
}) {
  const cls = dark ? "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500" : "w-full h-12 px-4 rounded-xl bg-white border border-brand-blue-200 text-brand-ink placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500";
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "block font-subheading uppercase tracking-widest text-xs " + (dark ? "text-brand-yellow-500" : "text-brand-blue-700")
  }, label, required && " *"), children ? React.cloneElement(children, {
    id,
    className: cls
  }) : /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    placeholder: placeholder,
    required: required,
    className: cls
  }));
}
function Chrome({
  path = "/",
  go = () => {},
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col"
  }, /*#__PURE__*/React.createElement(Navbar, {
    path: path,
    go: go
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1"
  }, children), /*#__PURE__*/React.createElement(RedesStrip, null), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }));
}
Object.assign(window, {
  IMG,
  HERO_BG,
  PHONE,
  TEL,
  WA,
  WA_MSG,
  Icon,
  Container,
  Pill,
  Cta,
  HeroGrid,
  SectionHead,
  Navbar,
  RedesStrip,
  Footer,
  Chrome,
  Field
});
Object.assign(__ds_scope, { Icon, Container, Pill, Cta, HeroGrid, SectionHead, Brand, Navbar, RedesStrip, Footer, Field, Chrome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactoScreen.jsx
try { (() => {
// Contacto (ruta /contacto).
const CONTACT_CHANNELS = [{
  icon: "message-circle",
  title: "WhatsApp Comercial",
  text: "Respuestas y cotizaciones de envíos en tiempo real.",
  href: "https://wa.me/542236602699?text=Hola!%20Quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20mis%20env%C3%ADos.",
  cta: "Abrir WhatsApp"
}, {
  icon: "phone",
  title: "Llamada de Coordinación",
  text: "Para hablar directamente con un coordinador logístico.",
  href: TEL,
  cta: "223 660-2699"
}, {
  icon: "mail",
  title: "Solicitar Cotización B2B",
  text: "Envianos tu base de envíos para un plan personalizado.",
  href: "mailto:matiascejas@enviosdosruedas.com",
  cta: "Escribir email"
}];
function ContactoScreen({
  go
}) {
  const nav = p => e => {
    e.preventDefault();
    go(p);
  };
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden text-white",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, null), /*#__PURE__*/React.createElement(Container, {
    className: "relative py-16 sm:py-20 lg:py-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, "Conexi\xF3n directa Mar del Plata"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6"
  }, "\xBFHablamos ahora?"), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg text-brand-blue-200 leading-relaxed"
  }, "Sin formularios complejos ni esperas. Eleg\xED el canal que mejor se adapte al ritmo de tu e-commerce."), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-wrap gap-3 font-mono text-xs text-brand-blue-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    tone: "yellow"
  }), "Oficina Central \xB7 Friuli 1972, Mar del Plata"), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 14,
    tone: "yellow"
  }), "Operaci\xF3n Lunes a S\xE1bado \xB7 Turnos 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6"
  }, CONTACT_CHANNELS.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: c.href,
    target: c.href.startsWith("http") ? "_blank" : undefined,
    rel: "noopener",
    className: "group rounded-3xl bg-brand-ink/60 backdrop-blur-md border border-white/20 p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-brand-yellow-500 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 22,
    tone: "ink"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-subheading uppercase tracking-widest text-lg"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-200 mt-1"
  }, c.text)), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 font-mono text-sm text-brand-yellow-500"
  }, c.cta, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    tone: "yellow",
    className: "group-hover:translate-x-1 transition-transform duration-200"
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement(Pill, {
    className: "mb-4"
  }, "Propuesta B2B \xB7 General Pueyrred\xF3n"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, "Ped\xED un plan a medida"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-600 leading-relaxed"
  }, "Si tu negocio despacha a diario en Mar del Plata o necesit\xE1s integraci\xF3n de env\xEDos para tu tienda online, armamos un esquema con tarifas fijas, retiros programados y cuenta corriente mensual."), /*#__PURE__*/React.createElement("ul", {
    className: "mt-6 space-y-3"
  }, ["Tarifas por volumen", "Retiros en tu local", "Todo MDQ y Batán"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "flex items-center gap-3 text-brand-ink"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 18,
    tone: "blue"
  }), t))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 rounded-3xl overflow-hidden border border-brand-blue-100 relative",
    style: {
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "card_mapa.webp",
    alt: "Mapa de cobertura General Pueyrred\xF3n",
    className: "absolute inset-0 w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 p-6 flex flex-col justify-between",
    style: {
      background: "linear-gradient(to top, rgba(0,39,124,.9) 0%, rgba(0,39,124,0) 60%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, "GPS activo")), /*#__PURE__*/React.createElement("div", {
    className: "text-white"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, "Central de despacho MDQ \xB7 Cobertura General Pueyrred\xF3n"), /*#__PURE__*/React.createElement("p", {
    className: "font-display uppercase text-2xl mt-1"
  }, "Hub operativo Friuli 1972"), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs text-brand-blue-200 mt-1"
  }, "Salidas cada 30 min \xB7 Soporte en directo"))))), /*#__PURE__*/React.createElement("form", {
    className: "lg:col-span-6 rounded-3xl bg-brand-white-50 border border-brand-blue-100 shadow-minimal p-6 sm:p-8 space-y-4",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(Pill, null, "Cotizaci\xF3n inmediata"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase leading-none text-3xl text-brand-ink"
  }, "Cotiz\xE1 tu cuenta comercial"), /*#__PURE__*/React.createElement(Field, {
    id: "c-nombre",
    label: "Nombre o Comercio",
    placeholder: "Ej: Tienda G\xFCemes / Juan P\xE9rez",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    id: "c-tel",
    label: "WhatsApp / Tel\xE9fono",
    type: "tel",
    placeholder: "Ej: 223 660-2699",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement(Field, {
    id: "c-vol",
    label: "Volumen mensual"
  }, /*#__PURE__*/React.createElement("select", {
    defaultValue: "20-50"
  }, /*#__PURE__*/React.createElement("option", {
    value: "20-50"
  }, "20 a 50 env\xEDos"), /*#__PURE__*/React.createElement("option", {
    value: "50-200"
  }, "50 a 200 env\xEDos"), /*#__PURE__*/React.createElement("option", {
    value: "200-500"
  }, "200 a 500 env\xEDos"), /*#__PURE__*/React.createElement("option", {
    value: "+500"
  }, "+500 env\xEDos (Gran cuenta)"))), /*#__PURE__*/React.createElement(Field, {
    id: "c-mod",
    label: "Modalidad"
  }, /*#__PURE__*/React.createElement("select", {
    defaultValue: "express"
  }, /*#__PURE__*/React.createElement("option", {
    value: "express"
  }, "Express (2 horas)"), /*#__PURE__*/React.createElement("option", {
    value: "lowcost"
  }, "LowCost (Mismo d\xEDa)"), /*#__PURE__*/React.createElement("option", {
    value: "flex"
  }, "MercadoLibre Flex"), /*#__PURE__*/React.createElement("option", {
    value: "3pl"
  }, "Fulfillment 3PL")))), /*#__PURE__*/React.createElement(Cta, {
    className: "w-full"
  }, "Solicitar plan y tarifas"), sent ? /*#__PURE__*/React.createElement("p", {
    role: "status",
    className: "text-sm text-brand-blue-700"
  }, "Recibido. Un coordinador te escribe por WhatsApp para armar el plan.") : /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-brand-blue-600"
  }, "Atenci\xF3n comercial directa en Mar del Plata \xB7 Sin costos de apertura de cuenta")))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Pill, {
    className: "mb-4"
  }, "Centro de distribuci\xF3n y base central"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl text-brand-ink"
  }, "Base de operaciones MDQ"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-brand-blue-600"
  }, "Partido de General Pueyrred\xF3n. Atenci\xF3n presencial y retiro de cargas en Friuli 1972.")), /*#__PURE__*/React.createElement("dl", {
    className: "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
  }, [["map-pin", "Centro de Distribución", "Friuli 1972, Mar del Plata"], ["phone", "Línea Directa y WhatsApp", "+54 223 660-2699"], ["mail", "Atención Comercial", "matiascejas@enviosdosruedas.com"], ["clock", "Horarios de Despacho (Base Central)", "Lunes a Viernes 09:00 - 18:00 hs · Sábados 10:00 - 15:00 hs"]].map(([i, k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "rounded-2xl bg-white border border-brand-blue-100 p-5 flex gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-11 h-11 rounded-xl bg-brand-blue-50 flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20,
    tone: "blue"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-blue-600"
  }, k), /*#__PURE__*/React.createElement("dd", {
    className: "font-mono text-sm text-brand-ink mt-1"
  }, v))))))));
}
Object.assign(window, {
  ContactoScreen
});
Object.assign(__ds_scope, { ContactoScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CotizarScreen.jsx
try { (() => {
// Cotizadores (rutas /cotizar/express y /cotizar/lowcost). mode: "express" | "lowcost".
const COTIZAR = {
  express: {
    pill: "Servicio Express prioritario",
    h1: "Cotizá tu envío Express",
    text: "Calculá el costo de tu envío prioritario al instante. Obtené la tarifa de entrega según la distancia y coordiná en el acto con nosotros por WhatsApp.",
    chips: ["Entrega en < 2 horas", "Ruta optimizada", "Tarifa 100% precisa"],
    demo: {
      system: "Sistema Express Maps",
      origen: "Terminal Ferroautomotora",
      destino: "B° Stella Maris",
      km: "3.7 km",
      tarifa: "$4.600 ARS",
      nota: "Sin registro obligatorio"
    },
    formPill: "Cotización al instante · Mar del Plata",
    formTitle: "Calculá tu envío Express",
    formText: "Ingresá las direcciones de origen y destino en Mar del Plata para obtener tarifa exacta y ruta OSRM en tiempo real.",
    submit: "Calcular ruta y tarifa Express",
    router: "Ruteador MDQ activo",
    service: "Servicio: Envío Express < 2H",
    scope: "Cobertura: Partido de General Pueyrredón",
    benefitsTitle: "Beneficios del servicio Express",
    benefitsTag: "Tarifas 2026",
    benefits: [["route", "Ruteo urbano preciso", "Medición métrica exacta entre puntos de Mar del Plata con tecnología de ruteo OSRM."], ["zap", "Prioridad inmediata (< 120 min)", "Asignación directa a cadete en moto apenas confirmás la solicitud. Sin esperas ni desvíos."], ["message-circle", "Confirmación directa por WhatsApp", "Coordiná en 1 clic con todos los datos precargados, sin registros tediosos ni esperas de validación."]],
    rulesTitle: "Pautas operativas Express",
    rules: [["Capacidad máxima", "Hasta 15 kg por viaje en caja / mochila de moto."], ["Dimensiones", "Bultos de hasta 40 × 40 cm entran en tarifa estándar."], ["Horario de operación", "Lunes a Sábados de 8:00 a 20:00 hs con monitoreo activo."]],
    guaranteeTitle: "Garantía DosRuedas MDQ",
    guarantee: "Más de 7 años operando en las calles de Mar del Plata. Tu paquete viaja asegurado y con seguimiento directo de punta a punta.",
    ctaPill: "¿Dudas o envíos especiales?",
    ctaTitle: "¿Necesitás cadetería recurrente o bultos especiales?",
    ctaText: "Si realizás más de 5 envíos diarios o necesitás distribución continua para tu comercio en Mar del Plata, consultá por nuestros convenios y cuentas corrientes.",
    tariff: km => km <= 3 ? 3700 : km <= 5 ? 4600 : km <= 7 ? 6100 : km <= 10 ? 8200 : 8200 + Math.ceil(km - 10) * 1000
  },
  lowcost: {
    pill: "Servicio económico y programado",
    h1: "Cotizá tu envío LowCost",
    text: "Eficiencia y rentabilidad. Calculá tu envío con entrega garantizada en el día si es solicitado antes de 13 hs.",
    chips: ["Hasta 40% de ahorro", "Entrega same-day", "Tarifa plana PyME"],
    demo: {
      system: "Sistema LowCost Batch",
      origen: "Av. Constitución 5500",
      destino: "Plaza Mitre",
      km: "5.8 km",
      tarifa: "$5.300 ARS",
      nota: "Entrega incluida en el día"
    },
    formPill: "Programado y económico · Mar del Plata",
    formTitle: "Calculá tu envío LowCost",
    formText: "Ingresá las direcciones de origen y destino para calcular la tarifa económica agrupada con entrega garantizada en el día (solicitando antes de 13:00 hs).",
    submit: "Calcular ruta y tarifa LowCost",
    router: "Ruteador Batch activo",
    service: "Servicio: Envío LowCost Batch",
    scope: "Modalidad: Ruteo agrupado diario MDQ",
    benefitsTitle: "Beneficios del servicio LowCost",
    benefitsTag: "Hasta 40% ahorro",
    benefits: [["route", "Ruteo batch inteligente", "Agrupamos entregas por cercanía en Mar del Plata para reducir costos operativos y transferirte el ahorro."], ["clock", "Entrega same-day garantizada", "Solicitando antes de las 13:00 hs, tu paquete se entrega en el día dentro de las franjas habituales."], ["badge-check", "Tarifa fija predecible", "Valores oficiales 2026 claros y sin sorpresas para que puedas presupuestar los costos de tu tienda."]],
    rulesTitle: "Franjas de entrega LowCost",
    rules: [["Horario de corte", "Pedidos ingresados antes de las 13:00 hs se entregan en la tarde del mismo día."], ["Turno tarde", "Reparto masivo entre las 14:00 y 20:00 hs con trazabilidad garantizada."], ["Pedidos posteriores", "Los recibidos después de las 13:00 hs se programan para el primer turno del día hábil siguiente."]],
    guaranteeTitle: "Garantía de reparto diario",
    guarantee: "Optimizamos los circuitos viales de la ciudad para garantizar que cada paquete llegue a destino con seguridad y al menor costo por km.",
    ctaPill: "Cuentas corrientes y PyMEs",
    ctaTitle: "¿Tenés envíos recurrentes o tienda e-commerce?",
    ctaText: "Accedé a facturación quincenal o mensual consolidada, retiro programado en tu depósito o local y tarifas diferenciales por volumen en Mar del Plata.",
    tariff: km => km <= 3 ? 3000 : km <= 5 ? 4000 : km <= 7 ? 5300 : km <= 10 ? 7000 : 7000 + Math.ceil(km - 10) * 700
  }
};
const ARS = n => "$" + n.toLocaleString("es-AR");
function CotizarScreen({
  mode = "express",
  go
}) {
  const c = COTIZAR[mode];
  const nav = p => e => {
    e.preventDefault();
    go(p);
  };
  const [result, setResult] = React.useState(null);
  const [rows, setRows] = React.useState([{
    id: 1
  }, {
    id: 2
  }]);
  const submit = e => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    // Demo: sin geocodificación en el kit; la distancia se toma del ejemplo del hero.
    const km = parseFloat(c.demo.km);
    setResult({
      origen: f.get("origen"),
      destino: f.get("destino"),
      km,
      tarifa: c.tariff(km)
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden text-white",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, null), /*#__PURE__*/React.createElement(Container, {
    className: "relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, c.pill), /*#__PURE__*/React.createElement("h1", {
    className: "font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6"
  }, c.h1), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl"
  }, c.text), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-wrap gap-3"
  }, c.chips.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full font-mono text-xs"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 14,
    tone: "yellow"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-white/10 p-6",
    style: {
      background: "linear-gradient(to bottom,rgba(6,54,165,.85),rgba(0,39,124,.95))"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, "C\xE1lculo autom\xE1tico"), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs text-brand-blue-200 mt-1"
  }, c.demo.system), /*#__PURE__*/React.createElement("dl", {
    className: "mt-6 space-y-3 font-mono text-sm"
  }, [["Origen", c.demo.origen], ["Destino", c.demo.destino], ["Distancia", c.demo.km]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "flex justify-between gap-4 border-b border-white/10 pb-3"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "text-brand-blue-200 uppercase text-xs"
  }, k), /*#__PURE__*/React.createElement("dd", {
    className: "text-white text-right"
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex items-end justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-blue-200"
  }, "Tarifa final"), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-4xl font-bold text-brand-yellow-500"
  }, c.demo.tarifa)), /*#__PURE__*/React.createElement(Pill, {
    tone: "dark"
  }, c.demo.nota))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement(Pill, {
    className: "mb-4"
  }, c.formPill), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, c.formTitle), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-brand-blue-600 leading-relaxed"
  }, c.formText), /*#__PURE__*/React.createElement("form", {
    className: "mt-8 space-y-4",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement(Field, {
    id: "origen-input",
    label: "Direcci\xF3n de origen (retiro)",
    placeholder: "Ej: Av. Col\xF3n 1234, Mar del Plata",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    name: "origen",
    type: "text",
    placeholder: "Ej: Av. Col\xF3n 1234, Mar del Plata",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    id: "destino-input",
    label: "Direcci\xF3n de destino (entrega)",
    placeholder: "Ej: Juan B. Justo 5678, Mar del Plata",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    name: "destino",
    type: "text",
    placeholder: "Ej: Juan B. Justo 5678, Mar del Plata",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement(Field, {
    id: "nombre-input",
    label: "Nombre",
    placeholder: "Tu nombre completo",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    id: "telefono-input",
    label: "Tel\xE9fono",
    type: "tel",
    placeholder: "Tu tel\xE9fono de contacto",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    id: "producto-input",
    label: "Tipo de producto a trasladar",
    placeholder: "Ej: Documentos, Paquete peque\xF1o...",
    required: true
  }), /*#__PURE__*/React.createElement(Cta, {
    icon: "calculator",
    className: "w-full"
  }, c.submit)), result && /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: "mt-6 rounded-2xl bg-brand-blue-50 border border-brand-blue-100 p-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-blue-600"
  }, "Resultado estimado (demo del kit: distancia de ejemplo)"), /*#__PURE__*/React.createElement("dl", {
    className: "mt-3 grid grid-cols-3 gap-4 font-mono text-sm"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    className: "text-xs text-brand-blue-600 uppercase"
  }, "Origen"), /*#__PURE__*/React.createElement("dd", {
    className: "text-brand-ink truncate"
  }, result.origen)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    className: "text-xs text-brand-blue-600 uppercase"
  }, "Destino"), /*#__PURE__*/React.createElement("dd", {
    className: "text-brand-ink truncate"
  }, result.destino)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    className: "text-xs text-brand-blue-600 uppercase"
  }, "Distancia"), /*#__PURE__*/React.createElement("dd", {
    className: "text-brand-ink"
  }, result.km, " km"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-3xl font-bold text-brand-blue-700"
  }, ARS(result.tarifa), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-brand-blue-600"
  }, "ARS")), /*#__PURE__*/React.createElement(Cta, {
    small: true,
    icon: "message-circle",
    href: "https://wa.me/542236602699?text=" + encodeURIComponent("Hola Envíos DosRuedas! Quiero coordinar un envío " + (mode === "express" ? "Express" : "LowCost") + " de " + result.origen + " a " + result.destino + ". Tarifa estimada " + ARS(result.tarifa) + ".")
  }, "Coordinar por WhatsApp")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl overflow-hidden border border-brand-blue-100 relative",
    style: {
      minHeight: 360
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "card_mapa.webp",
    alt: "Mapa de Mar del Plata",
    className: "absolute inset-0 w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 p-5 flex flex-col justify-between",
    style: {
      background: "linear-gradient(to top, rgba(0,39,124,.9) 0%, rgba(0,39,124,0) 55%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, c.router), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-white bg-brand-ink/60 border border-white/15 px-3 py-1.5 rounded-full"
  }, "OpenStreetMap + OSRM")), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-xs text-white space-y-1"
  }, /*#__PURE__*/React.createElement("p", null, c.service), /*#__PURE__*/React.createElement("p", {
    className: "text-brand-blue-200"
  }, c.scope)))), mode === "lowcost" && /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-brand-white-50 border border-brand-blue-100 p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-2xl text-brand-ink leading-none"
  }, "Planilla de despachos masivos (batch)"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 mt-2"
  }, "Carg\xE1 m\xFAltiples destinos de Mar del Plata para ruteo agrupado del d\xEDa y consult\xE1 por WhatsApp con un solo clic.")), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-brand-blue-700"
  }, rows.length, " paquetes en lote")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-3"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    className: "flex flex-wrap items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-sm text-brand-blue-600 shrink-0",
    style: {
      width: 20
    }
  }, i + 1), ["Destinatario", "Dirección en MDQ *", "Teléfono", "Producto / Bulto"].map(ph => /*#__PURE__*/React.createElement("input", {
    key: ph,
    type: ph === "Teléfono" ? "tel" : "text",
    placeholder: ph,
    "aria-label": ph,
    style: {
      minWidth: 140
    },
    className: "flex-1 h-12 px-3 rounded-xl bg-white border border-brand-blue-200 text-sm text-brand-ink placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Quitar fila",
    onClick: () => setRows(rows.filter(x => x.id !== r.id)),
    className: "w-11 h-11 rounded-full bg-brand-blue-50 shrink-0 flex items-center justify-center hover:bg-brand-blue-100"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 16,
    tone: "blue"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setRows([...rows, {
      id: Date.now()
    }]),
    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue-200 font-subheading uppercase tracking-widest text-sm text-brand-blue-700 hover:bg-brand-blue-50"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16,
    tone: "blue"
  }), "Agregar fila"), /*#__PURE__*/React.createElement(Cta, {
    small: true,
    icon: "message-circle",
    href: "https://wa.me/542236602699?text=" + encodeURIComponent("¡Hola Envíos DosRuedas! Quiero solicitar una cotización por lote de " + rows.length + " envíos LowCost en Mar del Plata. Modalidad: Ruteo LowCost Programado 2026 (Corte 13:00 hs)")
  }, "Cotizar lote (", rows.length, " env\xEDos)")), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-xs text-brand-blue-600"
  }, "Tarifas LowCost vigentes 2026 ($3.000 a $7.000 + excedente por km)."))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-3 mb-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-none text-3xl text-brand-ink"
  }, c.benefitsTitle), /*#__PURE__*/React.createElement(Pill, null, c.benefitsTag)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, c.benefits.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "flex gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-white border border-brand-blue-100 flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22,
    tone: "blue"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-lg text-brand-blue-700"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed mt-1"
  }, d)))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 rounded-3xl bg-brand-ink text-white p-8 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(HeroGrid, {
    id: "rules-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase leading-none text-2xl text-brand-yellow-500"
  }, c.rulesTitle), /*#__PURE__*/React.createElement("dl", {
    className: "mt-6 space-y-4"
  }, c.rules.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "border-b border-white/10 pb-4"
  }, /*#__PURE__*/React.createElement("dt", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-blue-200"
  }, k), /*#__PURE__*/React.createElement("dd", {
    className: "text-sm mt-1"
  }, v)))), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, c.guaranteeTitle), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-200 mt-1"
  }, c.guarantee))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 bg-white"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement(Pill, {
    className: "mb-4"
  }, c.ctaPill), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl text-brand-ink"
  }, c.ctaTitle), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-brand-blue-600 leading-relaxed"
  }, c.ctaText)), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 flex flex-wrap gap-4 lg:justify-end"
  }, /*#__PURE__*/React.createElement(Cta, {
    href: "#/contacto",
    onClick: nav("/contacto")
  }, "Formulario de contacto"), /*#__PURE__*/React.createElement(Cta, {
    variant: "outline",
    href: TEL,
    icon: "phone"
  }, "Llamanos")))));
}
Object.assign(window, {
  CotizarScreen
});
Object.assign(__ds_scope, { CotizarScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CotizarScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FaqScreen.jsx
try { (() => {
// Preguntas frecuentes (ruta /nosotros/preguntas-frecuentes). 18 preguntas reales del sitio (JSON-LD FAQPage).
const FAQ_CATS = [{
  key: "servicios",
  title: "Servicios y Envíos",
  text: "Soluciones de última milla, cobertura urbana y tipos de entrega"
}, {
  key: "tiempos",
  title: "Tiempos y Operatoria",
  text: "Horarios de base, anticipación de pedidos, seguimiento y contingencias"
}, {
  key: "pagos",
  title: "Precios, Pagos y Facturación",
  text: "Cálculo por distancia, métodos de pago y planes para comercios"
}, {
  key: "confianza",
  title: "Confianza y Diferenciación",
  text: "Nuestra propuesta de valor, flota propia y contacto directo"
}];
const FAQS = [["servicios", "¿Qué tipo de servicios y soluciones logísticas realizan en Mar del Plata?", "Ofrecemos mensajería urbana y soluciones para e-commerce: Envíos Flex para MercadoLibre, Envíos Express prioritarios, reparto LowCost programado, cadetería corporativa, mandados y servicio integral 3PL (almacenamiento, preparación de pedidos y distribución)."], ["servicios", "¿Cuáles son las zonas de cobertura?", "Cubrimos de forma integral todo el ejido urbano de Mar del Plata (no cubrimos zonas aledañas), garantizando presencia y entregas seguras en todos los barrios de la ciudad."], ["servicios", "¿Hacen entregas en el mismo día (Same-Day) y Mercado Envíos Flex?", "Sí, somos especialistas en entregas en el día. Retiramos tus ventas y las entregamos en la misma jornada, cumpliendo estrictamente los tiempos de MercadoLibre para proteger tu reputación y medalla de vendedor."], ["servicios", "¿Cuáles son los límites de peso y tamaño por paquete?", "Operamos con una flota propia y exclusiva de motocicletas. La capacidad máxima estándar es de hasta 5 kg o dimensiones de aproximadamente 40x40x30 cm por bulto."], ["servicios", "¿Realizan entregas a contrareembolso?", "Sí, realizamos la cobranza en efectivo al momento de entregar el producto. El dinero recaudado se rinde en el transcurso del mismo día o a primera hora del día hábil siguiente."], ["servicios", "¿Trabajan con empresas o solo con particulares?", "Atendemos a empresas, pymes, tiendas online, emprendedores y particulares que necesiten cadetería puntual o recurrente."], ["tiempos", "¿Cuáles son sus horarios de atención y recepción de pedidos?", "Nuestro horario de atención en base (Friuli 1972) es de lunes a viernes de 09:00 a 18:00 hs y sábados de 10:00 a 15:00 hs. Para el servicio LowCost del día, el horario de corte de recepción de pedidos es a las 13:00 hs."], ["tiempos", "¿Cómo funciona el Servicio Express y con cuánta anticipación debo pedirlo?", "El Servicio Express cuenta con prioridad operativa inmediata para envíos urgentes. Podés programar tu franja horaria de retiro y entrega con una antelación mínima de 2 horas."], ["tiempos", "¿Cómo realizo el seguimiento de mi envío?", "Centralizamos la gestión de forma ágil y directa vía WhatsApp. Te mantenemos informado del estado del paquete y te enviamos la confirmación inmediata una vez concretada la entrega."], ["tiempos", "¿Qué información necesito proporcionar para solicitar un envío?", "Solo requerimos: dirección exacta de retiro, dirección de entrega, franja horaria, detalle o tamaño del paquete, y nombre con teléfono de contacto de quien recibe."], ["tiempos", "¿Puedo modificar la dirección de entrega cuando el paquete ya está en camino?", "Sí, podés avisarnos por WhatsApp y coordinamos el cambio. Tené en cuenta que, dependiendo de la distancia a la nueva zona, puede aplicar un costo adicional por kilometraje."], ["tiempos", "¿Qué sucede si el destinatario no está en el domicilio o rechaza el producto?", "Te avisamos en el momento para intentar resolverlo. Si el paquete no puede entregarse y debe regresar a tu local o depósito, la devolución se realiza totalmente sin cargo."], ["pagos", "¿Cómo calculan el costo del envío?", "El valor se calcula según la distancia punto a punto entre retiro y entrega, contemplando adicionales si existen (días de lluvia, bultos especiales o demoras en espera)."], ["pagos", "¿Cuáles son las formas de pago aceptadas?", "Podés abonar mediante transferencia bancaria, dinero en cuenta o efectivo al momento del retiro o la entrega."], ["pagos", "¿Emiten factura por el servicio?", "Sí, emitimos Factura C para todos nuestros servicios profesionales, comerciales y corporativos."], ["pagos", "¿Tienen planes o tarifas especiales para emprendedores y envíos masivos?", "Sí, contamos con el Plan Emprendedores y esquemas de tarifas reducidas para comercios y marcas con volumen diario recurrente."], ["confianza", "¿Qué diferencia a Envíos DosRuedas de otras mensajerías o apps?", "Brindamos logística con cara humana: flota propia de motos (cero tercerización informal), atención personalizada y directa por WhatsApp sin bots impersonales, y una calificación perfecta de 5 estrellas en Mar del Plata respaldada por nuestra puntualidad, cuidado y compromiso real."], ["confianza", "¿Cómo puedo solicitar un envío o pedir una cotización?", "Escribinos directamente por WhatsApp al 223 660-2699 y un operador te responderá al instante con la cotización exacta para tu pedido."]];
const FAQ_TOP = ["¿Cuáles son sus horarios de atención y recepción de pedidos?", "¿Cómo realizo el seguimiento de mi envío?", "¿Qué sucede si el destinatario no está en el domicilio o rechaza el producto?"];
const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
function FaqScreen({
  go
}) {
  const nav = p => e => {
    e.preventDefault();
    go(p);
  };
  const [cat, setCat] = React.useState("servicios");
  const [q, setQ] = React.useState("");
  const [open, setOpen] = React.useState(0);
  const list = q.trim() ? FAQS.filter(f => norm(f[1] + " " + f[2]).includes(norm(q))) : FAQS.filter(f => f[0] === cat);
  const jump = question => {
    const f = FAQS.find(x => x[1] === question);
    setQ("");
    setCat(f[0]);
    setOpen(FAQS.filter(x => x[0] === f[0]).indexOf(f));
    document.getElementById("faq-accordion")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden text-white",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, null), /*#__PURE__*/React.createElement(Container, {
    className: "relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark"
  }, "Centro de soporte \xB7 Mar del Plata"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6"
  }, "\xBFTen\xE9s dudas?"), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl"
  }, "Busc\xE1 por palabra clave o eleg\xED una categor\xEDa. Si no est\xE1, te respondemos por WhatsApp en minutos."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 relative"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "faq-search",
    className: "sr-only"
  }, "Buscar en preguntas frecuentes"), /*#__PURE__*/React.createElement("input", {
    id: "faq-search",
    type: "search",
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Ej: \xBFcu\xE1nto tarda un env\xEDo a Bat\xE1n?",
    className: "w-full h-14 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500",
    style: {
      paddingLeft: "3rem"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute",
    style: {
      left: "1.1rem",
      top: "1.1rem"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    tone: "yellow"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-brand-blue-200"
  }, "Temas:"), ["Express", "LowCost", "Flex", "3PL", "Pagos"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    type: "button",
    onClick: () => setQ(t),
    className: "px-3 py-1.5 rounded-full bg-white/10 border border-white/15 font-subheading uppercase tracking-widest text-xs text-white hover:bg-white/20"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 rounded-3xl bg-brand-ink/60 backdrop-blur-md border border-white/20 p-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, "Preguntas top MDQ"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase text-2xl mt-2"
  }, "Respuestas r\xE1pidas"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-4 space-y-2"
  }, FAQ_TOP.map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => jump(t),
    className: "w-full text-left flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10"
  }, /*#__PURE__*/React.createElement("span", null, t), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    tone: "yellow"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex flex-wrap items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-brand-blue-200"
  }, "\xBFNo encontr\xE1s tu duda? Respuesta < 5 min"), /*#__PURE__*/React.createElement(Cta, {
    small: true,
    icon: "message-circle",
    href: "https://wa.me/542236602699?text=Hola!%20Tengo%20una%20duda%20sobre%20los%20env%C3%ADos%20de%20Env%C3%ADos%20DosRuedas%20en%20Mar%20del%20Plata."
  }, "Preguntanos por WhatsApp"))))), /*#__PURE__*/React.createElement("section", {
    id: "faq-accordion",
    className: "py-16 sm:py-20 lg:py-24 bg-white",
    "aria-label": "Preguntas Frecuentes por Categor\xEDa"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
  }, FAQ_CATS.map(c => {
    const n = FAQS.filter(f => f[0] === c.key).length;
    const active = !q && cat === c.key;
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      type: "button",
      onClick: () => {
        setQ("");
        setCat(c.key);
        setOpen(0);
      },
      className: "text-left rounded-2xl p-5 border transition-colors duration-200 " + (active ? "bg-brand-blue-700 border-brand-blue-700 text-white" : "bg-brand-white-50 border-brand-blue-100 text-brand-ink hover:bg-brand-blue-50")
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-xs " + (active ? "text-brand-yellow-500" : "text-brand-blue-500")
    }, n, " preguntas"), /*#__PURE__*/React.createElement("h3", {
      className: "font-subheading uppercase tracking-widest text-lg mt-1"
    }, c.title), /*#__PURE__*/React.createElement("p", {
      className: "text-xs mt-1 " + (active ? "text-brand-blue-200" : "text-brand-blue-600")
    }, c.text));
  })), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl text-brand-ink"
  }, q ? "Resultados de búsqueda" : FAQ_CATS.find(c => c.key === cat).title), /*#__PURE__*/React.createElement("p", {
    className: "text-brand-blue-600 mt-2"
  }, q ? `${list.length} coincidencia(s) para "${q}"` : FAQ_CATS.find(c => c.key === cat).text)), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-brand-blue-500"
  }, "Mar del Plata 2026")), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl bg-brand-white-50 border border-brand-blue-100 p-8 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-lg text-brand-ink"
  }, "Sin resultados"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 mt-2"
  }, "Prob\xE1 con otra palabra o escribinos por WhatsApp.")), /*#__PURE__*/React.createElement("div", {
    className: "divide-y border-brand-blue-100",
    style: {
      borderColor: "#bacefd"
    }
  }, list.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f[1],
    className: "py-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": open === i,
    onClick: () => setOpen(open === i ? -1 : i),
    className: "w-full text-left flex items-center justify-between gap-4 py-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-wide text-lg text-brand-ink"
  }, f[1]), /*#__PURE__*/React.createElement("span", {
    className: "w-9 h-9 rounded-full flex items-center justify-center shrink-0 " + (open === i ? "bg-brand-blue-700" : "bg-brand-blue-50")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open === i ? "minus" : "plus",
    size: 16,
    tone: open === i ? "yellow" : "blue"
  }))), open === i && /*#__PURE__*/React.createElement("p", {
    className: "pb-4 text-brand-blue-600 leading-relaxed max-w-3xl"
  }, f[2]))))))), /*#__PURE__*/React.createElement("section", {
    id: "faq-cta",
    className: "py-16 sm:py-20 bg-brand-white-50 border-t border-brand-blue-100"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-blue-500"
  }, "Soporte humano en MDP"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl text-brand-ink mt-2"
  }, "\xBFNo encontraste lo que buscabas?"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-brand-blue-600 leading-relaxed"
  }, "No te preocupes. Nuestro equipo de soporte est\xE1 listo para ayudarte de inmediato con cualquier consulta espec\xEDfica que tengas sobre nuestros servicios de mensajer\xEDa y delivery.")), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 flex flex-wrap gap-4 lg:justify-end"
  }, /*#__PURE__*/React.createElement(Cta, {
    icon: "message-circle",
    href: "https://wa.me/5492236602699?text=Hola,%20tengo%20una%20consulta%20que%20no%20encontr%C3%A9%20en%20las%20FAQ"
  }, "Habl\xE1 por WhatsApp"), /*#__PURE__*/React.createElement(Cta, {
    variant: "outline",
    href: "#/contacto",
    onClick: nav("/contacto")
  }, "Contacto directo")))));
}
Object.assign(window, {
  FaqScreen
});
Object.assign(__ds_scope, { FaqScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FaqScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Home (ruta /). Secciones en el orden del sitio real.
const HOME_SERVICES = [{
  tag: "Urgente",
  zone: "Cobertura MDQ",
  name: "Envíos Express",
  text: "Mensajería en moto con entregas inmediatas de alta prioridad.",
  entrega: "30-90 min",
  tarifa: "$3.700 base",
  peso: "Hasta 10 kg",
  img: "fondo_express.webp",
  path: "/servicios/envios-express",
  dark: true
}, {
  tag: "Económico",
  zone: "Todo Gral. Pueyrredón",
  name: "Envíos LowCost",
  text: "Envíos económicos planificados con retiro y entrega coordinados.",
  entrega: "Same / Next Day",
  tarifa: "$3.000 base",
  peso: "Hasta 15 kg",
  img: "fondo_lowcost.webp",
  path: "/servicios/envios-lowcost",
  dark: false
}, {
  tag: "MercadoLibre Flex",
  zone: "Mar del Plata y Batán",
  name: "Envíos Flex",
  text: "Entregas en el día integradas para tus ventas de MercadoLibre.",
  entrega: "En el día",
  tarifa: "Zonificado LowCost",
  peso: "Apto moto / auto",
  img: "fondo_flex.webp",
  path: "/servicios/enviosflex",
  dark: false
}, {
  tag: "Logística integral",
  zone: "Depósito Friuli 1972",
  name: "E-Commerce & 3PL",
  text: "Logística integral: almacenamiento, preparación y despacho de pedidos.",
  entrega: "24 hs / stock",
  tarifa: "Planes a medida",
  peso: "Sin límite",
  img: "fondo_emprendedores.webp",
  path: "/servicios/plan-emprendedores",
  dark: true
}];
const HOME_REVIEWS = [{
  tag: "Encargo especial",
  title: "Mi héroe logístico por segundo año consecutivo",
  text: "Un encargo especial: comprar alfajores de temporada en MDQ, embalarlos con mimo y enviármelos para viajar a Europa. Rapidez, comunicación clara y calidez humana.",
  name: "Sol R",
  meta: "Local Guide"
}, {
  tag: "Resolución inmediata",
  title: "Resolvieron mi problema con la mejor predisposición",
  text: "Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.",
  name: "Karen Herrera",
  meta: "Google Maps"
}, {
  tag: "Tiendas y comercios",
  title: "Impecable para llevar pedidos a nuestros clientes",
  text: "Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio. Además hacen depósitos en cajeros sin problemas.",
  name: "Agustin Torres",
  meta: "Google Maps"
}, {
  tag: "Seguridad y rapidez",
  title: "Atención de primera, rápido, confiable y seguro",
  text: "Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100% para envíos puntuales.",
  name: "Lorenzo Elizagoyen",
  meta: "Google Maps"
}];
const HOME_BRANDS = ["Toy Piola Juguetería", "Ama & Pola", "Dropix 3D", "El Cóndor", "Starcel", "Urbancow", "Wanca", "Catalina Indumentaria", "Envases 3G", "La Peri"];
function HomeScreen({
  go
}) {
  const nav = p => e => {
    e.preventDefault();
    go(p);
  };
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    id: "hero-animado",
    className: "relative overflow-hidden text-white",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, null), /*#__PURE__*/React.createElement(Container, {
    className: "relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, "Env\xEDos Dos Ruedas \xB7 Tu soluci\xF3n confiable en Mar del Plata"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6"
  }, "Mensajer\xEDa y log\xEDstica ", /*#__PURE__*/React.createElement("span", {
    className: "text-brand-yellow-500 whitespace-nowrap"
  }, "e-commerce"), " en Mar del Plata"), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl"
  }, "Somos tu partner estrat\xE9gico en mensajer\xEDa urbana, env\xEDos en el d\xEDa y delivery de \xFAltima milla. Flota propia de motos, cero tercerizaci\xF3n y respuesta inmediata."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement(Cta, {
    href: "#/cotizar/express",
    onClick: nav("/cotizar/express")
  }, "Cotiz\xE1 Express"), /*#__PURE__*/React.createElement(Cta, {
    variant: "ghost",
    href: "#/servicios/envios-express",
    onClick: nav("/servicios/envios-express")
  }, "Mir\xE1 los Servicios"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-2xl overflow-hidden border border-white/10"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "card_mapa.webp",
    alt: "Env\xEDos DosRuedas - Mapa y Cobertura Log\xEDstica en Mar del Plata",
    className: "w-full aspect-square object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex flex-col justify-between p-4",
    style: {
      background: "linear-gradient(to bottom, rgba(0,39,124,0) 40%, rgba(0,39,124,.9) 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, "Ruteo activo \xB7 MDQ"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-white bg-brand-ink/60 border border-white/15 px-3 py-1.5 rounded-full"
  }, "Friuli 1972")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white/10 border border-white/10 p-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, "Env\xEDos same-day"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-white"
  }, "Entrega en el d\xEDa")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white/10 border border-white/10 p-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, "Flota propia"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-white"
  }, "Cero tercerizaci\xF3n"))))))))), /*#__PURE__*/React.createElement("section", {
    id: "vision-section",
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Pill, {
    className: "mb-4"
  }, "Partner log\xEDstico especializado"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, "Conectamos Mar del Plata de punta a punta"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-600 leading-relaxed max-w-2xl"
  }, "Nos especializamos en la distribuci\xF3n de \xFAltima milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo r\xE9cord con flota propia y tarifas transparentes."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
  }, [["clock", "Entregas a tiempo", "Puntualidad garantizada en cada envío. Optimizamos cada ruta mediante geolocalización avanzada en Mar del Plata."], ["shield-check", "Envíos seguros", "Protección total de tus paquetes. Despachos con custodia digital y confirmación de entrega en el acto."]].map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "flex gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-brand-blue-50 flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22,
    tone: "blue"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-lg text-brand-blue-700"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed mt-1"
  }, d)))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 rounded-3xl bg-brand-ink text-white p-8 lg:p-12 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(HeroGrid, {
    id: "vision-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-yellow-500 mb-6"
  }, "Mar del Plata 2026"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, [["+50K", "Envíos y entregas realizadas con éxito en toda la región"], ["0", "Paquetes extraviados"], ["+100", "Emprendedores confían"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "flex items-baseline gap-4 border-b border-white/10 pb-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-4xl font-bold text-brand-yellow-500 shrink-0"
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-brand-blue-200"
  }, l)))))))), /*#__PURE__*/React.createElement("section", {
    id: "services-overview",
    className: "py-16 sm:py-20 lg:py-24 bg-brand-white-50"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    pill: "Nuestros servicios",
    title: "Soluciones log\xEDsticas a tu medida"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  }, HOME_SERVICES.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: "#" + s.path,
    onClick: nav(s.path),
    className: "group relative rounded-3xl overflow-hidden border border-brand-blue-100 shadow-minimal hover:-translate-y-1 transition-all duration-300 flex flex-col",
    style: {
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + s.img,
    alt: s.name,
    className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 " + (s.dark ? "bg-brand-ink/60" : "bg-white/20")
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative p-6 flex flex-col h-full " + (s.dark ? "text-white" : "text-brand-ink")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: s.dark ? "dark" : "light"
  }, s.tag)), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs mt-3 " + (s.dark ? "text-brand-blue-200" : "text-brand-blue-700")
  }, s.zone), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase leading-none text-3xl mt-2"
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "text-sm leading-relaxed mt-2 flex-1 " + (s.dark ? "text-brand-blue-200" : "text-brand-blue-700")
  }, s.text), /*#__PURE__*/React.createElement("dl", {
    className: "mt-6 grid grid-cols-3 gap-2 border-t pt-4 " + (s.dark ? "border-white/15" : "border-brand-blue-700/20")
  }, [["Entrega", s.entrega], ["Tarifa", s.tarifa], ["Peso", s.peso]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    className: "font-subheading uppercase tracking-widest text-xs"
  }, k), /*#__PURE__*/React.createElement("dd", {
    className: "font-mono text-xs mt-1"
  }, v)))))))))), /*#__PURE__*/React.createElement("section", {
    id: "slider-servicios",
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    pill: "Log\xEDstica a medida de tu rubro \xB7 MDQ 2026",
    title: "Soluciones especiales para industrias",
    text: "Adaptamos nuestra flota propia de motos a la din\xE1mica de tu negocio. Eleg\xED tu sector y descubr\xED c\xF3mo optimizamos tus entregas urbanas."
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-8"
  }, ["E-Commerce", "Repuestos", "Moda, Calzado", "Trámites", "Insumos Médicos", "Encomiendas"].map((r, i) => /*#__PURE__*/React.createElement("span", {
    key: r,
    className: "px-4 py-2 rounded-full font-subheading uppercase tracking-widest text-sm border " + (i === 0 ? "bg-brand-blue-700 text-brand-yellow-500 border-brand-blue-700" : "bg-white text-brand-blue-700 border-brand-blue-200")
  }, r))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 p-8 lg:p-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement(Pill, null, "SLA: entregas en el d\xEDa"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-brand-blue-600"
  }, "M\xE1xima velocidad \xB7 Env\xEDos Flex Same-Day y Next-Day")), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase leading-[0.9] text-4xl text-brand-ink mt-4"
  }, "E-Commerce y tiendas online"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-brand-blue-600 leading-relaxed"
  }, "Retiramos tus ventas online y las entregamos en la misma jornada en todo Mar del Plata. Integraci\xF3n directa para Mercado Libre Flex y tiendas independientes con reputaci\xF3n garantizada."), /*#__PURE__*/React.createElement("ul", {
    className: "mt-6 space-y-3"
  }, ["Rendición de dinero en el acto", "Seguimiento por WhatsApp", "Cero suspensiones de Flex"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "flex items-center gap-3 text-sm text-brand-ink"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 18,
    tone: "blue"
  }), t))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement(Cta, {
    href: "#/servicios/enviosflex",
    onClick: nav("/servicios/enviosflex")
  }, "Ver soluci\xF3n Flex"), /*#__PURE__*/React.createElement(Cta, {
    variant: "outline",
    href: "#/contacto",
    onClick: nav("/contacto")
  }, "Consultar cuenta corriente"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 relative",
    style: {
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "card_moto01.webp",
    alt: "Moto de reparto Env\xEDos DosRuedas",
    className: "absolute inset-0 w-full h-full object-cover"
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "emprendedores-home",
    className: "py-16 sm:py-20 lg:py-24 bg-brand-white-50"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    pill: "Socio estrat\xE9gico local",
    title: "Potenciamos tu marca en Mar del Plata",
    text: "Si vend\xE9s online, necesit\xE1s un socio log\xEDstico que responda al toque. Creamos planes a tu medida con tarifas din\xE1micas transparentes y recolecci\xF3n programada a domicilio en Mar del Plata."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 rounded-3xl overflow-hidden bg-white border border-brand-blue-100 shadow-minimal grid grid-cols-1 sm:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-8"
  }, /*#__PURE__*/React.createElement(Pill, null, "Emprendedores"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase leading-none text-3xl text-brand-ink mt-4"
  }, "Log\xEDstica e-commerce"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm text-brand-blue-600 leading-relaxed"
  }, "Gesti\xF3n de \xFAltima milla pensada para PyMEs y marcas locales. Optimizamos tus costos de env\xEDo con retiros programados a domicilio y soporte post-venta."), /*#__PURE__*/React.createElement("ul", {
    className: "mt-4 space-y-2"
  }, ["Soporte comercial dedicado vía WhatsApp", "Entregas contrareembolso integradas sin cargo extra", "Rastreo digital transparente para tus clientes"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "flex items-start gap-2 text-sm text-brand-ink"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 16,
    tone: "blue",
    className: "mt-1"
  }), t))), /*#__PURE__*/React.createElement("a", {
    href: "#/servicios/plan-emprendedores",
    onClick: nav("/servicios/plan-emprendedores"),
    className: "inline-flex items-center gap-2 mt-6 font-subheading uppercase tracking-widest text-sm text-brand-blue-700 hover:text-brand-blue-500"
  }, "Conocer m\xE1s", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    tone: "blue"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative",
    style: {
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "box_card.jpeg",
    alt: "Caja con sticker Env\xEDos DosRuedas",
    className: "absolute inset-0 w-full h-full object-cover"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 grid grid-cols-1 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-brand-blue-700 text-white p-8 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(HeroGrid, {
    id: "meli-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark"
  }, "MercadoLibre"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase leading-none text-3xl mt-4"
  }, "Env\xEDos Flex Meli"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm text-brand-blue-200 leading-relaxed"
  }, "Socio log\xEDstico homologado para tus env\xEDos r\xE1pidos en el d\xEDa. Recolecci\xF3n gratis en tu local y entrega garantizada dentro del SLA establecido."), /*#__PURE__*/React.createElement("a", {
    href: "#/servicios/enviosflex",
    onClick: nav("/servicios/enviosflex"),
    className: "inline-flex items-center gap-2 mt-6 font-subheading uppercase tracking-widest text-sm text-brand-yellow-500"
  }, "Configurar Flex", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    tone: "yellow"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-white border border-brand-blue-100 shadow-minimal p-8"
  }, /*#__PURE__*/React.createElement(Pill, null, "Corporativo"), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase leading-none text-3xl text-brand-ink mt-4"
  }, "Soluciones corporativas"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm text-brand-blue-600 leading-relaxed"
  }, "Soporte a gran escala con facturaci\xF3n mensual, ruteos especiales para grandes vol\xFAmenes y entregas express coordinadas en Mar del Plata."), /*#__PURE__*/React.createElement("a", {
    href: "#/contacto",
    onClick: nav("/contacto"),
    className: "inline-flex items-center gap-2 mt-6 font-subheading uppercase tracking-widest text-sm text-brand-blue-700 hover:text-brand-blue-500"
  }, "Abrir cuenta corriente", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    tone: "blue"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-center text-sm text-brand-blue-600 mb-4"
  }, "Marcas locales que conf\xEDan en nosotros"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-3"
  }, HOME_BRANDS.map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    className: "px-4 py-2 rounded-full bg-white border border-brand-blue-100 font-subheading uppercase tracking-widest text-sm text-brand-blue-700"
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    id: "social-proof",
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Pill, {
    className: "mb-4"
  }, "5.0 / 5.0 en Google Maps"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, "Rese\xF1as reales de Mar del Plata"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-brand-blue-600 leading-relaxed"
  }, "Vecinos, tiendas online y emprendedores que conf\xEDan a diario en nuestra flota propia."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid grid-cols-3 gap-4"
  }, [["5.0", "15 opiniones en Google Maps"], ["100%", "Flota propia sin tercerizar"], ["+7", "Años de trayectoria en MDQ"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-3xl font-bold text-brand-blue-700"
  }, n), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-brand-blue-600 mt-1"
  }, l)))), /*#__PURE__*/React.createElement(Cta, {
    variant: "outline",
    small: true,
    href: "https://share.google/ofw5wAQt3Fc1dArom",
    icon: "arrow-up-right",
    className: "mt-8"
  }, "Ver ficha en Google Maps")), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
  }, HOME_REVIEWS.map(r => /*#__PURE__*/React.createElement("figure", {
    key: r.name,
    className: "rounded-3xl bg-brand-white-50 border border-brand-blue-100 p-6 flex flex-col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-brand-blue-500 uppercase"
  }, r.tag), /*#__PURE__*/React.createElement("span", {
    className: "flex gap-1"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 14,
    tone: "yellow"
  })))), /*#__PURE__*/React.createElement("blockquote", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-wide text-xl text-brand-ink leading-tight"
  }, "\u201C", r.title, "\u201D"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm text-brand-blue-600 leading-relaxed"
  }, r.text)), /*#__PURE__*/React.createElement("figcaption", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-10 h-10 rounded-full bg-brand-blue-700 text-brand-yellow-500 font-display text-lg flex items-center justify-center"
  }, r.name[0]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "block text-sm font-semibold text-brand-ink"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "block text-xs text-brand-blue-600"
  }, r.meta))))))))), /*#__PURE__*/React.createElement("section", {
    id: "cta-section",
    className: "relative overflow-hidden text-white py-16 sm:py-20 lg:py-24",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, {
    id: "cta-grid"
  }), /*#__PURE__*/React.createElement(Container, {
    className: "relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark"
  }, "Cotizaci\xF3n inmediata"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl mt-4"
  }, "\xBFListo para escalar la log\xEDstica de tu e-commerce?"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-200 leading-relaxed max-w-xl"
  }, "Olvidate de la gesti\xF3n de paquetes en Mar del Plata. Complet\xE1 tus datos y te respondemos por WhatsApp al instante."), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 inline-flex items-center gap-2 font-mono text-sm text-brand-yellow-500"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    tone: "yellow"
  }), "Atenci\xF3n comercial < 2 min")), /*#__PURE__*/React.createElement("form", {
    className: "lg:col-span-6 bg-brand-ink/60 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 space-y-4",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, [["home-nombre", "Tu nombre", "Ingresá tu nombre"], ["home-empresa", "Empresa / negocio", "Nombre de tu emprendimiento"]].map(([id, label, ph]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "block font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, label), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "text",
    required: true,
    placeholder: ph,
    className: "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-brand-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "volume-select",
    className: "block font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, "Volumen estimado mensual"), /*#__PURE__*/React.createElement("select", {
    id: "volume-select",
    required: true,
    defaultValue: "",
    className: "w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Seleccion\xE1 una opci\xF3n"), /*#__PURE__*/React.createElement("option", {
    value: "1 a 50"
  }, "1 a 50 env\xEDos"), /*#__PURE__*/React.createElement("option", {
    value: "51 a 200"
  }, "51 a 200 env\xEDos"), /*#__PURE__*/React.createElement("option", {
    value: "M\xE1s de 200"
  }, "M\xE1s de 200 env\xEDos"))), /*#__PURE__*/React.createElement(Cta, {
    icon: "message-circle",
    className: "w-full"
  }, "Hablar por WhatsApp"), sent && /*#__PURE__*/React.createElement("p", {
    role: "status",
    className: "text-sm text-brand-yellow-500"
  }, "Listo. Te contactamos por WhatsApp en menos de 2 minutos.")))));
}
Object.assign(window, {
  HomeScreen
});
Object.assign(__ds_scope, { HomeScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LegalScreen.jsx
try { (() => {
// Legales (rutas /terminos-y-condiciones y /politica-de-privacidad). doc: "terminos" | "privacidad".
const LEGAL = {
  terminos: {
    pill: "Marco legal del servicio",
    h1: "Términos y Condiciones",
    text: "Las reglas del juego claras y transparentes. Al solicitar nuestros servicios, aceptás estas pautas operativas diseñadas para proteger tu mercadería.",
    asideTitle: "Secciones del contrato",
    asideNote: ["Operación transparente", "Nuestras pautas operativas aseguran un servicio responsable y veloz."],
    keyLabel: "Aspectos clave",
    unit: "Cláusula",
    sections: [["aceptacion", "Aceptación", "1. Aceptación de los Términos", "Al solicitar o utilizar cualquiera de los servicios de envío proporcionados por Envíos DosRuedas, vos (el cliente o comercio) aceptás y te comprometés a cumplir con los siguientes términos y condiciones.", ["Consentimiento expreso al solicitar servicios en la plataforma", "Aplicable a usuarios individuales, comercios y clientes corporativos", "Vigencia legal plena en toda la ciudad de Mar del Plata"]], ["descripcion", "Descripción", "2. Descripción del Servicio", "Envíos DosRuedas proporciona servicios de mensajería urbana y paquetería local en todo el ejido urbano de Mar del Plata (no cubrimos zonas aledañas no especificadas). Los detalles específicos de cada modalidad (Express inmediato, LowCost programado, MercadoLibre Flex y 3PL) se rigen según la tabla tarifaria oficial 2026.", ["Operación activa y cobertura integral en Mar del Plata", "Diversas modalidades de envío (Express, LowCost y Flex)", "Soporte logístico adaptado para eCommerce y PyMEs locales"]], ["obligaciones", "Obligaciones", "3. Obligaciones del Usuario", "Como cliente, sos responsable de proporcionar información precisa para la recolección y entrega (direcciones exactas, timbres, referencias y teléfono del destinatario). El embalaje adecuado para su transporte seguro en motocicleta es responsabilidad del remitente. No transportamos sustancias ilegales, peligrosas ni dinero en efectivo fuera de cobros contrareembolso autorizados.", ["Precisión total en datos de origen, destino y contactos directos", "Prohibición estricta de sustancias peligrosas o ilícitas", "Responsabilidad del cliente sobre el embalaje y sellado"]], ["tarifas", "Tarifas y pago", "4. Tarifas y Pago", "Las tarifas se calculan en base a la distancia kilométrica real y el tipo de servicio seleccionado según la tabla 2026. Los viajes de más de 10 km aplican tarifa base más excedente por kilómetro adicional entero. Los medios de pago incluyen efectivo, transferencia bancaria inmediata o cuenta corriente quincenal/mensual para clientes corporativos.", ["Tarifas transparentes calculadas por rangos kilométricos 2026", "Medios de pago: transferencia, efectivo o cuenta corriente", "Ajustes únicamente por demoras ajenas o cambios de recorrido"]], ["responsabilidad", "Responsabilidad", "5. Limitación de Responsabilidad", "Garantizamos la máxima custodia y cuidado de cada paquete. No nos responsabilizamos por demoras extraordinarias ocasionadas por fuerza mayor, condiciones meteorológicas severas (temporal o inundaciones en la vía pública) o cortes de tránsito.", ["Exclusión de responsabilidad por eventos de fuerza mayor", "Tiempos de entrega con SLA prioritario garantizado", "Cobertura de reenvío en caso de incidencias de transporte"]], ["modificaciones", "Modificaciones", "6. Modificaciones de los Términos", "Nos reservamos el derecho de actualizar estos términos para adecuarlos a nuevas tecnologías y disposiciones operativas. Las modificaciones entrarán en vigencia tras su publicación online en este sitio web.", ["Actualización transparente en el sitio oficial en tiempo real", "Notificación directa de condiciones tarifarias a comercios adheridos", "Vigencia inmediata para nuevos despachos solicitados"]]],
    cta: ["Contacto y dudas legales", "¿Tenés alguna consulta legal?", "Si tenés dudas operativas o inquietudes sobre nuestros términos, ponete en contacto con nuestro equipo directivo."]
  },
  privacidad: {
    pill: "Navegación 100% protegida",
    h1: "Política de Privacidad",
    text: "En Envíos DosRuedas, tu confianza es nuestra prioridad. Te explicamos cómo protegemos y utilizamos tu información personal.",
    asideTitle: "Índice de secciones",
    asideNote: ["Seguridad garantizada", "Tus datos logísticos se cifran con los más altos estándares."],
    keyLabel: "Puntos clave",
    unit: "Sección",
    sections: [["introduccion", "Introducción", "Introducción", "Bienvenido a Envíos DosRuedas. Nos comprometemos a proteger tu privacidad y a manejar tus datos personales de manera transparente y segura.", ["Transparencia absoluta en el tratamiento de datos", "Cumplimiento con la Ley de Protección de Datos Personales N° 25.326", "Seguridad y resguardo de la información de envíos"]], ["informacion", "Recopilación", "1. Información que Recopilamos", "Recopilamos información que nos proporcionás directamente, como tu nombre, número de teléfono, dirección de correo electrónico y direcciones de recogida/entrega al utilizar nuestros servicios. También podemos recopilar información técnica sobre tu dispositivo y uso de nuestro sitio web a través de cookies y tecnologías similares.", ["Datos de contacto (nombre, teléfono, e-mail)", "Datos logísticos (dirección de recogida y entrega en MDQ)", "Datos de navegación (cookies y telemetría técnica)"]], ["uso", "Uso de datos", "2. Uso de la Información", "Utilizamos tu información para proveer y gestionar nuestros servicios de envío, comunicar el estado de tus despachos, enviar ofertas y actualizaciones importantes, y optimizar y personalizar nuestro servicio.", ["Gestión y ruteo de envíos express y lowcost", "Notificaciones automáticas y alertas de entrega en tiempo real", "Mejora continua del algoritmo de cotización y servicio"]], ["compartir", "Compartir datos", "3. Cómo Compartimos tu Información", "No vendemos ni alquilamos tu información personal. La compartimos con nuestros repartidores y socios logísticos únicamente para completar el servicio de entrega, o cuando es requerido por ley.", ["Cero reventa ni alquiler de bases de datos a terceros", "Sincronización segura con cadetes asignados al despacho", "Requerimientos legales y auditorías obligatorias"]], ["seguridad", "Seguridad", "4. Seguridad de los Datos", "Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración o destrucción.", ["Encriptación SSL en pasarelas y transmisión de datos", "Control estricto de accesos internos a las consolas de despacho", "Monitoreo activo de brechas y almacenamiento seguro"]], ["derechos", "Tus derechos", "5. Tus Derechos", "Tenés derecho a acceder, rectificar o suprimir tus datos personales, u oponerte a su tratamiento en cualquier momento.", ["Acceso inmediato a la información personal almacenada", "Rectificación rápida de direcciones y números telefónicos erróneos", "Supresión definitiva a solicitud del usuario"]], ["cambios", "Cambios", "6. Cambios en esta Política", "Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento publicando la nueva versión aquí.", ["Notificación de cambios sustanciales a través de la web", "Archivo histórico de políticas anteriores disponible a solicitud", "Vigencia inmediata tras su publicación online"]], ["contacto", "Contacto", "7. Contacto", "Si tenés preguntas sobre esta Política, contactanos a través de nuestro formulario de contacto o en matiascejas@enviosdosruedas.com.", ["Atención directa del responsable de privacidad", "Respuesta garantizada en menos de 48 horas hábiles", "Soporte especializado para PyMEs y eCommerce"]]],
    cta: ["Soporte de privacidad", "¿Tenés dudas de privacidad?", "Escribinos directamente o completá nuestro formulario para que podamos ayudarte de inmediato."]
  }
};
function LegalScreen({
  doc = "terminos",
  go
}) {
  const d = LEGAL[doc];
  const nav = p => e => {
    e.preventDefault();
    go(p);
  };
  const [active, setActive] = React.useState(d.sections[0][0]);
  const jump = id => e => {
    e.preventDefault();
    setActive(id);
    document.getElementById("legal-" + id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden text-white",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, null), /*#__PURE__*/React.createElement(Container, {
    className: "relative py-16 sm:py-20 flex flex-wrap items-end justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark"
  }, d.pill), /*#__PURE__*/React.createElement("h1", {
    className: "font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6"
  }, d.h1), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg text-brand-blue-200 leading-relaxed"
  }, d.text)), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-brand-blue-200 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"
  }, "Vigencia operativa 2026"))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "lg:col-span-4 lg:sticky lg:top-24 rounded-3xl bg-brand-white-50 border border-brand-blue-100 p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-sm text-brand-blue-500"
  }, d.asideTitle), /*#__PURE__*/React.createElement("nav", {
    className: "mt-4 space-y-1",
    "aria-label": d.asideTitle
  }, d.sections.map(([id, short], i) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#legal-" + id,
    onClick: jump(id),
    className: "flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors duration-200 " + (active === id ? "bg-brand-blue-700 text-white" : "text-brand-ink hover:bg-brand-blue-50")
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs " + (active === id ? "text-brand-yellow-500" : "text-brand-blue-500")
  }, "0", i + 1), short))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 pt-6 border-t border-brand-blue-100"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-blue-700"
  }, d.asideNote[0]), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-brand-blue-600 mt-1"
  }, d.asideNote[1]))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 space-y-6"
  }, d.sections.map(([id, short, title, text, keys], i) => /*#__PURE__*/React.createElement("article", {
    key: id,
    id: "legal-" + id,
    className: "rounded-3xl border border-brand-blue-100 p-8",
    style: {
      scrollMarginTop: "6rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs text-brand-blue-500"
  }, d.unit, " ", i + 1, " de ", d.sections.length), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-none text-3xl text-brand-ink mt-2"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-brand-blue-600 leading-relaxed"
  }, text), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-subheading uppercase tracking-widest text-xs text-brand-blue-700"
  }, d.keyLabel), /*#__PURE__*/React.createElement("ul", {
    className: "mt-2 space-y-2"
  }, keys.map(k => /*#__PURE__*/React.createElement("li", {
    key: k,
    className: "flex items-start gap-2 text-sm text-brand-ink"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    tone: "blue",
    className: "mt-1"
  }), k))))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8 flex flex-wrap items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-blue-500"
  }, d.cta[0]), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-3xl text-brand-ink leading-none mt-2"
  }, d.cta[1]), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 mt-2 max-w-xl"
  }, d.cta[2])), /*#__PURE__*/React.createElement(Cta, {
    variant: "outline",
    href: "#/contacto",
    onClick: nav("/contacto")
  }, "Formulario de contacto"))))));
}
Object.assign(window, {
  LegalScreen
});
Object.assign(__ds_scope, { LegalScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LegalScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NosotrosScreen.jsx
try { (() => {
// Sobre nosotros (ruta /nosotros/sobre-nosotros).
const ABOUT_TIMELINE = [["2019", "Lanzamiento inicial en MDQ", "Iniciamos operaciones con flota propia de motocicletas en las calles céntricas de Mar del Plata, apostando a un servicio ágil y de confianza."], ["2021", "Soluciones PyME y LowCost", "Lanzamos la modalidad LowCost agrupada y el Plan Emprendedores para impulsar las ventas online durante la expansión del e-commerce local."], ["2023", "Consolidación de flota propia", "Estructura propia de repartidores uniformados y coordinados por WhatsApp para garantizar entregas puntuales sin tercerización."], ["2024", "Pioneros MercadoLibre Flex en MDQ", "Nos convertimos en el socio logístico de referencia para entregas same-day de Mercado Libre en todo General Pueyrredón."], ["2025", "Hub logístico Friuli 1972", "Inauguración de nuestro depósito central en Chauvín con depósitos de paquetería, picking y tecnología de ruteo optimizado."], ["2026", "Infraestructura 3PL y cobertura total", "Más de 7 años de trayectoria consolidada con flota propia, cotizadores en tiempo real y fulfillment integral para tiendas online."]];
function NosotrosScreen({
  go
}) {
  const nav = p => e => {
    e.preventDefault();
    go(p);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden text-white",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, null), /*#__PURE__*/React.createElement(Container, {
    className: "relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, "Log\xEDstica soberana \xB7 Mar del Plata"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6"
  }, "L\xEDderes en log\xEDstica de \xFAltima milla"), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl"
  }, "Con m\xE1s de 7 a\xF1os de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 rounded-2xl bg-white/10 border border-white/15 p-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, "Prop\xF3sito operativo 2026"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-white mt-2 leading-relaxed"
  }, "Conectamos tiendas online, PyMEs y emprendedores de General Pueyrred\xF3n mediante una flota motorizada 100% propia, soporte en tiempo real y cumplimiento estricto de horarios.")), /*#__PURE__*/React.createElement("dl", {
    className: "mt-8 grid grid-cols-3 gap-4"
  }, [["+7", "Años en MDQ"], ["100%", "Flota propia"], ["5.0", "Google Reviews"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("dt", {
    className: "font-mono text-3xl font-bold text-brand-yellow-500"
  }, n), /*#__PURE__*/React.createElement("dd", {
    className: "text-xs text-brand-blue-200 mt-1"
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl overflow-hidden border border-white/10"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "card_heroe_nueva.jpeg",
    alt: "Mensajero de Env\xEDos DosRuedas entregando un paquete",
    className: "w-full object-cover",
    style: {
      aspectRatio: "4/3"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-6",
    style: {
      background: "linear-gradient(to bottom,rgba(6,54,165,.85),rgba(0,39,124,.95))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-yellow-500"
  }, "Google Reviews 5.0 / 5"), /*#__PURE__*/React.createElement("span", {
    className: "flex gap-1"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 14,
    tone: "yellow"
  })))), /*#__PURE__*/React.createElement("blockquote", {
    className: "mt-3 text-sm text-white leading-relaxed"
  }, "\u201CMat\xEDas de Env\xEDos DosRuedas se convirti\xF3 en mi h\xE9roe log\xEDstico por segundo a\xF1o consecutivo. Rapidez, comunicaci\xF3n clara y un embalaje impecable.\u201D"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 font-mono text-xs text-brand-blue-200"
  }, "Sol R. \xB7 Google Local Guide \xB7 Mar del Plata"))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, "Por qu\xE9 confiar en DosRuedas"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-600 leading-relaxed"
  }, "Frente a aplicaciones automatizadas y plataformas impersonales, nosotros brindamos compromiso presencial, operadores locales y conocimiento metro a metro de Mar del Plata.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-8"
  }, [["message-circle", "Atención humana y directa", "Damos la cara siempre. Cuando surge una duda o reprogramación, te comunicás directamente por WhatsApp con operadores en Mar del Plata que gestionan y resuelven en el acto.", "Comunicación directa vía WhatsApp"], ["bike", "Flota propia capacitada", "No tercerizamos de forma descontrolada. Nuestro equipo de cadetes está uniformado, capacitado en manejo de paquetes frágiles y con base física en Friuli 1972.", "Cobertura total General Pueyrredón"], ["shield-check", "Garantía operativa sin excusas", "Tu reputación comercial depende de la puntualidad de entrega. Si coordinamos un envío express en 2 horas o un ruteo programado, cumplimos la franja pactada sin desvíos.", "Franja pactada, sin desvíos"]].map(([i, t, d, tag]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "border-t border-brand-blue-200 pt-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-brand-blue-50 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22,
    tone: "blue"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-xl text-brand-blue-700 mt-4"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed mt-2"
  }, d), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs text-brand-blue-500 uppercase mt-4"
  }, tag)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/React.createElement(Cta, {
    href: "#/cotizar/express",
    onClick: nav("/cotizar/express")
  }, "Cotizar tu env\xEDo")))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-brand-ink text-white relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(HeroGrid, {
    id: "values-grid"
  }), /*#__PURE__*/React.createElement(Container, {
    className: "relative grid grid-cols-1 lg:grid-cols-12 gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark"
  }, "Filosof\xEDa operativa"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl mt-4"
  }, "Nuestros valores"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-brand-blue-200 leading-relaxed"
  }, "Los pilares innegociables que sostienen nuestra operativa diaria en cada rinc\xF3n de General Pueyrred\xF3n.")), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
  }, [["package", "Cuidado del paquete", "Manipulación profesional de paquetería e-commerce, indumentaria, tecnología y repuestos. Cada envío viaja seguro y protegido de las inclemencias del clima marplatense."], ["badge-check", "Transparencia total", "Tarifas públicas por kilómetro exacto según tabla oficial 2026. Sin costos ocultos, sin sorpresas en la liquidación de tus envíos."], ["cpu", "Innovación tecnológica", "Ruteo optimizado en tiempo real, trazabilidad GPS instantánea y avisos automáticos para tus clientes en Mar del Plata."]].map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "rounded-2xl bg-white/5 border border-white/10 p-6"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 24,
    tone: "yellow"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-lg mt-4"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-200 leading-relaxed mt-2"
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, "Nuestra historia"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-brand-blue-600 leading-relaxed"
  }, "M\xE1s de 7 a\xF1os transformando la \xFAltima milla y la mensajer\xEDa urbana en la ciudad de Mar del Plata."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 rounded-3xl overflow-hidden border border-brand-blue-100"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "card_moto01.webp",
    alt: "Moto de reparto Env\xEDos DosRuedas",
    className: "w-full aspect-square object-cover"
  }))), /*#__PURE__*/React.createElement("ol", {
    className: "lg:col-span-8 space-y-6"
  }, ABOUT_TIMELINE.map(([y, t, d]) => /*#__PURE__*/React.createElement("li", {
    key: y,
    className: "flex gap-6 border-t border-brand-blue-100 pt-6"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 72
    },
    className: "shrink-0 font-mono text-2xl font-bold text-brand-blue-700"
  }, y), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-lg text-brand-ink"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed mt-1"
  }, d))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, "Nuestro equipo en calle"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-600"
  }, "Una estructura humana consolidada con base f\xEDsica en la ciudad, lista para responder al ritmo de tu negocio.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  }, [["Flota propia", "+20", "Repartidores en calle", "Cadetes capacitados y uniformados que conocen cada atajo y zona de Mar del Plata para entregas veloces y seguras."], ["Hub Chauvín", "100%", "Base operativa en MDQ", "Depósito central en Friuli 1972 para recepción, almacenamiento, consolidación de paquetes y despacho diario."], ["Máxima velocidad", "< 2 h", "Tiempo promedio Express", "Servicio prioritario punto a punto dentro del ejido urbano con monitoreo continuo de ruta."], ["Confianza local", "+7", "Años de trayectoria", "Compromiso ininterrumpido con comerciantes, emprendedores y empresas marplatenses."]].map(([tag, n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "rounded-3xl p-6 " + (i === 1 ? "bg-brand-blue-700 text-white" : "bg-white border border-brand-blue-100 text-brand-ink")
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs " + (i === 1 ? "text-brand-yellow-500" : "text-brand-blue-500")
  }, tag), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-4xl font-bold mt-3"
  }, n), /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-lg mt-2"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm leading-relaxed mt-2 " + (i === 1 ? "text-brand-blue-200" : "text-brand-blue-600")
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, "Misi\xF3n, visi\xF3n y compromiso"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-600"
  }, "Hacia d\xF3nde vamos y cu\xE1les son las convicciones que gu\xEDan cada entrega y ruteo diario en Mar del Plata.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-3xl text-brand-ink leading-none"
  }, "Nuestra misi\xF3n"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-brand-blue-600 leading-relaxed"
  }, "Brindar a cada negocio, e-commerce y particular de Mar del Plata una infraestructura de \xFAltima milla confiable, accesible y \xE1gil. Eliminamos las fricciones log\xEDsticas para que nuestros clientes puedan enfocarse en vender m\xE1s y crecer."), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs text-brand-blue-500 uppercase mt-6"
  }, "Compromiso operativo permanente")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-3xl text-brand-ink leading-none"
  }, "Nuestra visi\xF3n"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-brand-blue-600 leading-relaxed"
  }, "Ser el est\xE1ndar indiscutido de log\xEDstica urbana y fulfillment 3PL en la Costa Atl\xE1ntica, reconocidos por nuestra puntualidad, tecnolog\xEDa de ruteo y calidez en la atenci\xF3n humana."), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs text-brand-blue-500 uppercase mt-6"
  }, "Visi\xF3n de futuro 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 rounded-3xl text-white p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, {
    id: "about-cta-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative lg:col-span-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase leading-[0.9] text-4xl"
  }, "\xBFListo para enviar con los mejores?"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-brand-blue-200 leading-relaxed"
  }, "Sumate a las cientos de tiendas y emprendimientos de Mar del Plata que conf\xEDan su log\xEDstica diaria en Env\xEDos DosRuedas. Cotiz\xE1 en l\xEDnea o habl\xE1 hoy con un asesor comercial.")), /*#__PURE__*/React.createElement("div", {
    className: "relative lg:col-span-4 flex flex-wrap gap-4 lg:justify-end"
  }, /*#__PURE__*/React.createElement(Cta, {
    href: "#/cotizar/express",
    onClick: nav("/cotizar/express")
  }, "Cotizar env\xEDo"), /*#__PURE__*/React.createElement(Cta, {
    variant: "ghost",
    href: "#/contacto",
    onClick: nav("/contacto")
  }, "Contactar asesor"))))));
}
Object.assign(window, {
  NosotrosScreen
});
Object.assign(__ds_scope, { NosotrosScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NosotrosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RedesScreen.jsx
try { (() => {
// Nuestras redes (ruta /nosotros/nuestras-redes).
const REDES_HERO = [{
  icon: "instagram",
  title: "Instagram oficial",
  text: "Rutas en vivo, fotos de la flota en MDQ y novedades de horarios.",
  cta: "Ver historias",
  href: "https://instagram.com/enviosdosruedas"
}, {
  icon: "facebook",
  title: "Facebook comunidad",
  text: "El día a día de nuestros cadetes recorriendo calles y barrios de Mar del Plata.",
  cta: "Mirar videos",
  href: "https://facebook.com/enviosdosruedas"
}, {
  icon: "message-circle",
  title: "Canal de WhatsApp",
  text: "Avisos de cortes de tránsito, clima y códigos de descuento relámpago.",
  cta: "Unirme al canal",
  href: WA
}];
const REDES_CHANNELS = [{
  icon: "message-circle",
  tag: "Atención inmediata",
  name: "WhatsApp directo",
  handle: "+54 223 660-2699",
  text: "Atención personalizada y sin demoras por WhatsApp. El canal más ágil para coordinar cotizaciones, retiros inmediatos, envíos Flex y resolver dudas sobre nuestra operativa diaria.",
  cta: "Chateá ahora",
  href: "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
}, {
  icon: "instagram",
  tag: "+3.000 seguidores",
  name: "Instagram",
  handle: "@enviosdosruedas",
  text: "Mirá nuestro día a día, fotos reales de las entregas diarias de la flota y promociones especiales diseñadas para tu e-commerce.",
  cta: "Seguinos en Instagram",
  href: "https://instagram.com/enviosdosruedas"
}, {
  icon: "facebook",
  tag: "+2.000 seguidores",
  name: "Facebook",
  handle: "@enviosdosruedas",
  text: "Seguinos para enterarte de ofertas exclusivas y novedades logísticas sobre el tránsito y cadetería comercial local.",
  cta: "Seguinos en Facebook",
  href: "https://facebook.com/enviosdosruedas"
}];
const REDES_POSTS = [{
  net: "facebook",
  date: "21 Jun",
  text: "Mensajería Envíos DosRuedas. ¡Somos la solución para tus envíos en Mar del Plata! Confianza y responsabilidad son nuestros pilares.",
  likes: 12,
  comments: 10,
  href: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l",
  featured: true
}, {
  net: "instagram",
  date: "21 Jun",
  text: "Mensajería Envíos DosRuedas. ¡Somos la solución para tus envíos en Mar del Plata! Te ofrecemos un servicio confiable.",
  likes: 14,
  comments: 2,
  href: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/"
}, {
  net: "facebook",
  date: "21 Jun",
  text: "Para vos, que vendés en Mar del Plata y hacés envíos. ¿Solés usar apps genéricas pero no te dan tranquilidad ni cara visible?",
  likes: 19,
  comments: 7,
  href: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl"
}, {
  net: "instagram",
  date: "21 Jun",
  text: "En Envíos DosRuedas, nuestro servicio se construye sobre tres pilares fundamentales: Responsabilidad, Eficiencia y Confianza.",
  likes: 24,
  comments: 4,
  href: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/"
}, {
  net: "instagram",
  date: "21 Jun",
  text: "En cada envío, nos das tu confianza. Con cada entrega, te demostramos por qué vale la pena. En Envíos Dos Ruedas, la responsabilidad es nuestro motor.",
  likes: 31,
  comments: 6,
  href: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/"
}];
function RedesScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden text-white",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, null), /*#__PURE__*/React.createElement(Container, {
    className: "relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, "Comunidad en movimiento \xB7 Social media"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display uppercase leading-[0.9] text-5xl lg:text-6xl mt-6"
  }, "Comunidad en l\xEDnea"), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl"
  }, "La log\xEDstica tambi\xE9n se vive en redes. Rutas en vivo, promos rel\xE1mpago y la comunidad de repartidores m\xE1s grande de Mar del Plata."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, REDES_HERO.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.title,
    href: r.href,
    target: "_blank",
    rel: "noopener",
    className: "group rounded-2xl bg-white/10 border border-white/15 p-4 hover:bg-white/20 transition-colors duration-200"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 22,
    tone: "yellow"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-sm mt-3"
  }, r.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-brand-blue-200 mt-1 leading-relaxed"
  }, r.text), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1 font-mono text-xs text-brand-yellow-500 mt-3"
  }, r.cta, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 14,
    tone: "yellow"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl overflow-hidden border border-white/10 grid grid-cols-1 sm:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative",
    style: {
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "hero_express.webp",
    alt: "Mensajero de Env\xEDos DosRuedas",
    className: "absolute inset-0 w-full h-full object-cover"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-6",
    style: {
      background: "linear-gradient(to bottom,rgba(6,54,165,.85),rgba(0,39,124,.95))"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-4xl font-bold text-brand-yellow-500"
  }, "+4.850"), /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs mt-1"
  }, "M\xE1s de 5.000 seguidores en redes"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-200 leading-relaxed mt-3"
  }, "Sumate a la red m\xE1s activa de la ciudad. Compartimos historias del asfalto marplatense, consejos de embalaje para e-commerce y promociones sorpresa todos los meses."), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-2 font-mono text-xs"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-yellow-500"
  }, "#RutasMDQ"), " \xB7 Cadetes en calle"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "text-brand-yellow-500"
  }, "#SameDayMDQ"), " \xB7 100% efectividad")), /*#__PURE__*/React.createElement(Cta, {
    small: true,
    href: "https://instagram.com/enviosdosruedas",
    icon: "instagram",
    className: "mt-5"
  }, "Seguinos en Instagram"))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Canales oficiales",
    text: "Conectate al instante con nuestras plataformas oficiales y form\xE1 parte de la mayor comunidad log\xEDstica de Mar del Plata."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6"
  }, REDES_CHANNELS.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    className: "rounded-3xl p-8 flex flex-col " + (i === 0 ? "lg:col-span-6 bg-brand-blue-700 text-white" : "lg:col-span-3 bg-brand-white-50 border border-brand-blue-100 text-brand-ink")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl flex items-center justify-center " + (i === 0 ? "bg-brand-yellow-500" : "bg-white border border-brand-blue-100")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 22,
    tone: i === 0 ? "ink" : "blue"
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs uppercase " + (i === 0 ? "text-brand-yellow-500" : "text-brand-blue-500")
  }, c.tag)), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-3xl leading-none mt-6"
  }, c.name), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-sm mt-1 " + (i === 0 ? "text-brand-blue-200" : "text-brand-blue-700")
  }, c.handle), /*#__PURE__*/React.createElement("p", {
    className: "text-sm leading-relaxed mt-4 flex-1 " + (i === 0 ? "text-brand-blue-200" : "text-brand-blue-600")
  }, c.text), /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React.createElement(Cta, {
    small: true,
    variant: i === 0 ? "primary" : "outline",
    icon: "arrow-up-right",
    href: c.href
  }, c.cta))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-brand-white-50 border-t border-brand-blue-100"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    pill: "En vivo",
    title: "Publicaciones recientes",
    text: "Lo que est\xE1 pasando ahora mismo en nuestras redes sociales oficiales de Mar del Plata. Seguinos para no perderte nada."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  }, REDES_POSTS.map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: p.href,
    className: "rounded-3xl p-6 flex flex-col gap-4 " + (p.featured ? "bg-brand-ink text-white lg:col-span-1" : "bg-white border border-brand-blue-100 text-brand-ink")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "logo-envios-simplified.webp",
    alt: "",
    className: "w-10 h-10 rounded-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-sm"
  }, "Env\xEDos DosRuedas"), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs " + (p.featured ? "text-brand-blue-200" : "text-brand-blue-600")
  }, p.date)), /*#__PURE__*/React.createElement(Icon, {
    name: p.net,
    size: 18,
    tone: p.featured ? "yellow" : "blue"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-sm leading-relaxed flex-1 " + (p.featured ? "text-brand-blue-200" : "text-brand-blue-600")
  }, p.text), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between font-mono text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 14,
    tone: p.featured ? "yellow" : "blue"
  }), p.likes), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-square",
    size: 14,
    tone: p.featured ? "yellow" : "blue"
  }), p.comments)), /*#__PURE__*/React.createElement("a", {
    href: p.href,
    target: "_blank",
    rel: "noopener",
    className: "inline-flex items-center gap-1 font-subheading uppercase tracking-widest " + (p.featured ? "text-brand-yellow-500" : "text-brand-blue-700")
  }, "Ver original", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 14,
    tone: p.featured ? "yellow" : "blue"
  })))))))));
}
Object.assign(window, {
  RedesScreen
});
Object.assign(__ds_scope, { RedesScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RedesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicioScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Fichas de servicio (rutas /servicios/*). service: express | lowcost | flex | emprendedores.
const SERVICES = {
  express: {
    pill: "Mensajería en moto y entregas inmediatas · MDQ 2026",
    h1: "Mensajería en moto y envíos Express",
    sub: "Entregas inmediatas en Mar del Plata",
    text: "Especialistas en mensajería en moto y envíos express prioritarios. Asignación de rango horario de entrega de 3 horas (solicitud con 2 hs de anticipación antes de las 15:00 hs). Todo lo que entre en moto (hasta 5 kg y 40x30 cm).",
    ctas: [{
      label: "Cotizá tu envío Express",
      path: "/cotizar/express"
    }, {
      label: "Hablar por WhatsApp",
      href: WA,
      icon: "message-circle"
    }],
    stats: [["3 horas", "Rango de entrega"], ["15:00 hs", "Corte de solicitud"], ["Hasta 5 kg", "40x30 cm límite"]],
    img: "fondo_express.webp",
    dark: true,
    cardTag: "Telemetría en vivo · MDQ",
    cardTitle: "Prioridad 1",
    cardItems: ["Retiro en origen", "Entrega destino", "Rango horario programado · 3 hs", "Ruteo directo", "Custodia 100% exclusiva", "Confirmación al instante"],
    features: {
      title: "Entregas rápidas y eficientes",
      text: "Nuestro servicio Express ofrece cobertura total en el Partido de General Pueyrredón. Llegamos a todos los barrios con franjas horarias prioritarias: Centro, Chauvín, Los Troncos, Güemes, Puerto, Playa Grande, Punta Mogotes, Constitución, Camet y Batán.",
      tag: "Logística urbana integral 2026",
      items: [["clock", "Rangos de entrega de 3 horas", "Elegí franjas horarias precisas de 3 horas de espaciado (ej: 10 a 13 hs) para trámites y gestiones urgentes."], ["alarm-clock", "Corte 15:00 hs (2 h anticipación)", "Pedí con 2 horas de anticipación y antes de las 15:00 hs para entrega asegurada en el mismo día."], ["package", "Bultos en moto (hasta 5 kg)", "Traslado seguro de paquetes de hasta 5 kg y 40x30 cm con control y avisos en tiempo real por WhatsApp."], ["bike", "Cadetería propia de confianza", "Nuestros riders están identificados, con más de 7 años de trayectoria en las calles de Mar del Plata."]]
    },
    pricing: {
      pill: "Tarifario vigente 2026",
      title: "Tarifas por distancia",
      text: "Precios oficiales calculados por rango kilométrico para envíos inmediatos en Mar del Plata.",
      unit: "/ despacho final",
      ctaPath: "/cotizar/express",
      list: ["Elegís rango horario", "Mínimo 2 hs anticipación", "Notificación digital por WhatsApp", "Custodia digital"],
      tiers: [{
        tag: "Radio cercano",
        name: "Hasta 3 km",
        price: "$3.700",
        text: "Ideal para entregas inmediatas de cercanía."
      }, {
        tag: "Radio central",
        name: "3 a 5 km",
        price: "$4.600",
        text: "Cobertura intermedia rápida en el casco urbano.",
        featured: "Más elegido"
      }, {
        tag: "Radio extendido",
        name: "5 a 7 km",
        price: "$6.100",
        text: "Llegamos a distancias medias con máxima agilidad."
      }, {
        tag: "Radio perimetral",
        name: "7 a 10 km",
        price: "$8.200",
        text: "Máxima cobertura urbana perimetral."
      }],
      extra: {
        tag: "Trayectos de más de 10 km",
        title: "$8.200 base + $1.000 x km adicional",
        text: "Para envíos que exceden los 10 km (Batán, Sierra de los Padres, Camet o periferia de General Pueyrredón), el cálculo aplica tarifa base de 7 a 10 km más $1.000 por kilómetro adicional exacto.",
        cta: "Calcular con mapa",
        path: "/cotizar/express"
      }
    },
    useCases: {
      title: "¿Cuándo necesitás Express?",
      text: "Situaciones cotidianas y corporativas donde cada minuto cuenta y la puntualidad es innegociable.",
      items: [{
        tag: "Legal y trámites",
        title: "Envíos de documentación",
        text: "Contratos, documentos legales, escrituras y trámites críticos que requieren custodia y entrega inmediata.",
        list: ["Documentos notariales y escrituras", "Contratos comerciales firmados", "Certificados médicos y habilitaciones oficiales"],
        img: "box_card.jpeg"
      }, {
        tag: "Insumos y repuestos",
        title: "Distribución de insumos",
        text: "Despacho urgente de repuestos mecánicos, insumos gastronómicos, tecnología y suministros comerciales."
      }, {
        tag: "Franja horaria exacta",
        title: "Entregas con horario estricto",
        text: "Operaciones que necesitan entregarse con altísima puntualidad dentro de una franja horaria restringida."
      }]
    }
  },
  lowcost: {
    pill: "Paquetería e-commerce y cadetería económica · MDQ 2026",
    h1: "Paquetería e-commerce y encomiendas LowCost",
    sub: "El servicio de cadetería más rentable",
    text: "Solución en paquetería e-commerce, servicio de cadetería y servicio de encomiendas programadas en Mar del Plata. Pedidos solicitados antes de las 13:00 hs se entregan en el día antes de las 19:00 hs.",
    ctas: [{
      label: "Cotizá tu lote LowCost",
      path: "/cotizar/lowcost"
    }, {
      label: "Hablar por WhatsApp",
      href: WA,
      icon: "message-circle"
    }],
    stats: [["$3.000", "Base 0-3 km 2026"], ["13:00 hs", "Horario de corte"], ["Antes 19:00 hs", "Entrega misma jornada"]],
    img: "fondo_lowcost.webp",
    dark: false,
    cardTag: "Circuitos activos MDQ",
    cardTitle: "Consolidado",
    cardItems: ["Paquetería e-commerce rentable: bajamos costos de envío significativamente", "Cadetería flexible: envíos esporádicos o volúmenes diarios ruteados", "Seguimiento y notificaciones vía WhatsApp por cada despacho", "Tarifa vigente 2026 · Excedente $700/km"],
    features: {
      title: "Envíos LowCost: máxima eficiencia",
      text: "Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas agrupando despachos para ofrecer la tarifa más competitiva, garantizando la entrega en el día para pedidos ingresados antes del horario de corte.",
      tag: "Logística predecible para negocios",
      items: [["route", "Eficiencia en ruteo", "Ruteo diario masivo optimizado de última milla. No se elige rango horario para maximizar la eficiencia logística y bajar costos."], ["alarm-clock", "Corte y entrega", "Pedidos ingresados antes de las 13:00 hs se entregan de forma totalmente garantizada antes de las 19:00 hs del mismo día."], ["trending-down", "Tarifa económica", "La mejor tarifa de Mar del Plata para envíos masivos agrupados, ruteos continuos y entregas a clientes finales."]]
    },
    pricing: {
      pill: "Tarifario inteligente",
      title: "Tarifas 2026 envíos LowCost",
      text: "Eficiencia en ruteo masivo. Garantizamos entregas antes de las 19:00 hs para pedidos cargados antes de las 13:00 hs.",
      unit: "/ despacho final",
      ctaPath: "/cotizar/lowcost",
      list: ["Eficiencia en ruteo masivo", "Corte de carga 13:00 hs", "Entrega antes de las 19:00 hs", "SLA de entrega garantizada"],
      tiers: [{
        tag: "Zona 1",
        name: "Hasta 3 km",
        price: "$3.000",
        text: "La mejor tarifa para ruteo diario de cercanía."
      }, {
        tag: "Zona 2",
        name: "3 a 5 km",
        price: "$4.000",
        text: "Cobertura intermedia económica para PyMEs.",
        featured: "Recomendado PyME"
      }, {
        tag: "Zona 3",
        name: "5 a 7 km",
        price: "$5.300",
        text: "Llegamos a distancias medias al mejor costo."
      }, {
        tag: "Zona 4",
        name: "7 a 10 km",
        price: "$7.000",
        text: "Máximo ahorro en distancias urbanas largas."
      }],
      extra: {
        tag: "Zona 5 (más de 10 km)",
        title: "$700 x km",
        text: "Para envíos de larga distancia fuera del ejido urbano masivo tradicional, te ofrecemos la tarifa por kilómetro más competitiva del mercado local para que sigas ruteando con rentabilidad total.",
        cta: "Consultar por WhatsApp",
        href: WA
      }
    },
    benefits: {
      title: "Beneficios LowCost",
      text: "La combinación perfecta entre economía inteligente y máxima eficiencia logística para la consolidación de tu negocio.",
      items: [["Entregas a valores LowCost con las condiciones de Express", "Disfrutá del mejor precio con un servicio rápido y seguro que se adapta a vos."], ["Horario de corte extendido hasta 15 hs", "Ingresá tus envíos del día hasta las 15:00 hs y los entregamos en la misma jornada."], ["Elección de rango horario", "Vos y tus clientes eligen cuándo es más conveniente recibir los paquetes."], ["Ahorro de costos logísticos", "Maximizá tu rentabilidad pagando tarifas súper económicas por cada entrega."]]
    },
    steps: {
      title: "¿Cómo funciona?",
      text: "Un proceso simple, transparente y diseñado milimétricamente para maximizar tu productividad logística.",
      items: [["Solicitud", "Nos solicitás el envío por WhatsApp."], ["Retiro", "Retiramos el paquete por tu local o depósito en el transcurso del día."], ["Entrega", "Entregamos de forma segura en manos de tu destinatario."]]
    }
  },
  flex: {
    pill: "Envíos Flex y reparto MercadoLibre · MDQ 2026",
    h1: "Envíos Flex y reparto MercadoLibre",
    sub: "Logística Flex con 100% de cumplimiento",
    text: "Líderes en envíos flex, reparto MercadoLibre y logística flex en Mar del Plata. SLA real con 100% de entregas en el día antes de las 20:00 hs para proteger la reputación de MercadoLíder. Horario de corte 15:00 hs y múltiples retiros diarios sin mínimos de paquetes.",
    ctas: [{
      label: "Activar envíos Flex",
      path: "/cotizar/lowcost"
    }, {
      label: "Contactar asesor Flex",
      href: WA,
      icon: "message-circle"
    }],
    stats: [["15:00 hs", "Horario de corte"], ["100%", "Entregas en el día"], ["Sin mínimos", "Retiros múltiples"]],
    img: "fondo_flex.webp",
    dark: false,
    cardTag: "Integración logística Flex",
    cardTitle: "SLA 100%",
    cardItems: ["Corte a las 15:00 hs: envíos recibidos hasta esa hora, entregados antes de las 20:00 hs", "Protección de reputación: 100% de entregas en el día para tu medalla de MercadoLíder", "Sin mínimos y múltiples retiros en tu local en el día", "Reparto MercadoLibre MDQ · Corte 15:00 hs"],
    features: {
      title: "Dominá tus ventas con envíos Flex",
      text: "Somos el aliado estratégico definitivo para vendedores de MercadoLibre en Mar del Plata. Optimizamos tus envíos same-day para que vos solo te preocupes por publicar, atender clientes y vender más de lo que imaginás.",
      tag: "Cobertura total en Mar del Plata",
      items: [["gift", "Recolección gratis", "Retiramos tus paquetes sin costo adicional directamente por tu local o depósito."], ["clock", "Entrega en el día antes de 20 hs", "Garantizamos que tus clientes reciban sus compras el mismo día antes de las 20:00 hs."], ["trending-down", "Tarifas LowCost", "Tarifas competitivas súper económicas para cuidar la rentabilidad de cada una de tus ventas."], ["alarm-clock", "Horario de corte: 15 hs", "Recibimos y procesamos tus despachos del día hasta las 15:00 hs de manera garantizada."]]
    },
    benefits: {
      title: "Beneficios para vendedores",
      text: "La solución definitiva para llevar tu tienda o e-commerce de MercadoLibre al siguiente nivel de competitividad.",
      items: [["Corte 15:00 hs", "Despachá tus ventas hasta las 15:00 hs para entrega garantizada en el mismo día. Más tiempo de ventas online."], ["Reputación intacta", "Cumplimos con rigor tus acuerdos de nivel de servicio (SLA) para que mantengas tu estatus de MercadoLíder sin sobresaltos."], ["Devoluciones sin cargo", "Si el comprador rechaza el producto en el domicilio por cualquier causa, la devolución a tu local es totalmente sin cargo."], ["Cobertura MDP", "Cubrimos absolutamente todas las zonas de entrega habilitadas por MercadoLibre Flex en la ciudad de Mar del Plata."], ["Choferes calificados", "Contamos con personal altamente capacitado para brindar la mejor experiencia de entrega y atención a tus clientes finales."]]
    },
    pricing: {
      pill: "Niveles Flex",
      title: "Niveles y tarifas Flex",
      text: "Escalá tu negocio con MercadoLibre Flex. A mayor volumen diario de despachos, mejores beneficios y tarifas para tus envíos same-day.",
      unit: "/ liquidación quincenal",
      ctaHref: WA,
      ctaLabel: "Activar nivel",
      tiers: [{
        tag: "1 a 4 envíos diarios",
        name: "Nivel 1 (Crecimiento)",
        price: "$3.000",
        text: "Tarifas estándar segmentadas por distancia en km.",
        list: ["Z1 (0-3 km) $3.000 · Z2 (3-5 km) $4.000", "Z3 (5-7 km) $5.300 · Z4 (7-10 km) $7.000", "Z5 (+10 km) $7.000 + $700 x km adicional", "Segunda visita bonificada al 50%"]
      }, {
        tag: "5 a 10 envíos diarios",
        name: "Nivel 2 (Pro)",
        price: "$3.000",
        text: "Tarifas con tope fijo para envíos de mayor distancia.",
        featured: "Recomendado",
        list: ["Z1 (0-3 km) $3.000 · Z2 (3-5 km) $4.000", "Z3 (5-7 km) $5.300 · Z4 y Z5 (tope) $6.500", "Segunda visita Z1 gratis, otras al 50%", "Retiro bonificado sin cargo"]
      }, {
        tag: "+10 envíos diarios",
        name: "Nivel 3 (Elite)",
        price: "$4.500",
        text: "Tarifa plana unificada para toda la ciudad sin límites.",
        list: ["Tarifa plana de $4.500 a toda la ciudad", "Segunda visita sin cargo a toda la ciudad", "Soporte directo prioritario", "Retiro bonificado sin cargo"]
      }],
      extra: {
        tag: "Recargo por lluvia",
        title: "30% adicional en caso de lluvia",
        text: "Para todos nuestros clientes asociados al canal Flex, el recargo por días de lluvia es de solo un 30% adicional sobre el valor del envío. Cuidamos tu rentabilidad operativa para que sigas vendiendo con tranquilidad.",
        cta: "Más información Flex",
        href: WA
      }
    },
    steps: {
      title: "Logística sin fricciones",
      text: "Integramos tu flujo diario de ventas con nuestra red de distribución de última milla de forma directa.",
      items: [["Vendés", "Recibís una venta con Mercado Envíos Flex en tu panel tradicional de vendedor de MercadoLibre."], ["Retiramos", "Coordinamos y pasamos a retirar todos los paquetes por tu local o depósito en el horario de corte acordado."], ["Entregamos", "Todas las ventas realizadas antes de 15 hs serán entregadas en el día en Mar del Plata."], ["Calificás", "Tu cliente recibe el paquete en el mismo día y tu reputación de MercadoLíder sube automáticamente."]]
    },
    requirements: {
      title: "¿Qué necesitás?",
      text: "Requisitos mínimos e indispensables para empezar a ofrecer envíos same-day y potenciar tu e-commerce hoy mismo.",
      items: [["user-check", "Cuenta activa de vendedor", "Tener una cuenta activa de vendedor dentro de MercadoLibre."], ["toggle-right", "Envíos Flex activados", "Habilitar la opción de envíos rápidos en el día en tu configuración logística."], ["package-check", "Embalaje apto para moto", "Tener tus paquetes embalados de forma adecuada para el traslado seguro en moto."]]
    }
  },
  emprendedores: {
    pill: "Paquetería e-commerce y logística 3PL · Friuli 1972 MDQ",
    h1: "Paquetería y envíos e-commerce",
    sub: "Logística 3PL en Mar del Plata",
    text: "Solución en paquetería e-commerce, envíos e-commerce y logística 3PL en Mar del Plata. Ofrecemos E-Commerce Same Day desde nuestro depósito en Friuli 1972 con picking QR, E-Commerce Next Day (24 hs), opción DropOFF (-20% OFF) y contrareembolso sin cargo extra.",
    ctas: [{
      label: "Solicitar plan corporativo",
      path: "/contacto"
    }, {
      label: "Agendar asesoría 3PL",
      href: WA,
      icon: "message-circle"
    }],
    stats: [["Same Day", "Stock Friuli 1972"], ["-20% OFF", "Opción DropOFF"], ["$0 comisión", "Contrareembolso gratis"]],
    img: "fondo_emprendedores.webp",
    dark: false,
    cardTag: "Hub logístico Friuli 1972",
    cardTitle: "3PL activo",
    cardItems: ["E-Commerce Same Day: stock guardado en Friuli 1972; al vender, sale empaquetado con picking QR", "Opción DropOFF (-20% OFF): traé tus envíos a Friuli 1972 y obtené 20% de descuento", "Contrareembolso sin cargo extra: cobramos a tu cliente en destino sin comisiones", "Depósito Friuli 1972 MDQ · Atención B2B"],
    features: {
      title: "Logística 3PL y paquetería e-commerce",
      text: "Especialistas en paquetería e-commerce y logística 3PL en Mar del Plata. Almacenamos tus productos pequeños o medianos en Friuli 1972, realizamos picking por QR y despachamos en el día o 24 hs con la tarifa más competitiva.",
      tag: "Paquetería y logística B2B Mar del Plata",
      items: [["warehouse", "E-Commerce Same Day (Friuli 1972)", "Guardamos tu stock en nuestro depósito central de Friuli 1972. Al vender, tu producto sale inmediatamente empaquetado con picking por código QR."], ["percent", "Opción DropOFF (-20% OFF)", "Acercá tus paquetes directamente a nuestro depósito en Friuli 1972 y obtené un 20% de descuento automático en la tarifa final de envío."], ["banknote", "Contrareembolso sin cargo extra", "Realizamos cobro contra entrega en destino sin ningún tipo de comisión ni recargo adicional por gestión de cobranza."]]
    },
    benefits: {
      title: "Potenciamos tu PyME",
      text: "Dedicá a vender, de la logística nos encargamos nosotros.",
      items: [["Partner logístico especializado", "Más que un simple servicio de envío, nos convertimos en tu depósito estratégico. Soluciones completas de almacenamiento y fulfillment diseñadas especialmente para PyMEs."], ["Cuentas corrientes", "Esquemas ágiles de facturación mensual consolidada adaptados al flujo de caja financiero de tu negocio (Factura C disponible de forma directa)."], ["Límites claros y seguros", "Flota de motos y utilitarios. Llevamos bultos de hasta 5 kg con control y seguimiento centralizado vía WhatsApp."], ["Almacenaje seguro", "Contamos con depósitos propios en Friuli 1972, Mar del Plata, equipados con alta seguridad para el resguardo de tu stock."], ["Asesor dedicado", "Asignamos un operador exclusivo para tu firma. Resolvé cualquier consulta operativa o eventualidad directamente con personas reales en MDQ."]]
    },
    pricing: {
      pill: "Modalidades e-commerce y 3PL 2026",
      title: "Planes paquetería y fulfillment",
      text: "Elegí la modalidad e-commerce que mejor impulse tu marca. Desde almacenamiento con picking QR en Friuli 1972 hasta opción DropOFF con 20% OFF.",
      ctaHref: WA,
      ctaLabel: "Elegir modalidad",
      tiers: [{
        tag: "Stock en depósito",
        name: "E-Commerce Same Day",
        price: "$6.000",
        unit: "Fijo toda la ciudad",
        text: "Stock almacenado en Friuli 1972 (productos chicos/medianos). Sale empaquetado inmediatamente con picking QR.",
        list: ["Picking por código QR y empaquetado", "Despacho y logística en el día", "Contrareembolso sin cargo extra", "Rechazos devueltos 100% sin costo"]
      }, {
        tag: "Retiro en tu local",
        name: "E-Commerce Next Day (24 hs)",
        price: "$3.800",
        unit: "Desde $3.800",
        text: "Retiro programado en tu local para entrega al día siguiente. A mayor cantidad de envíos, baja la tarifa.",
        featured: "Volumen diario",
        list: ["Entrega garantizada en 24 horas", "Recolección gratis para +10 envíos (sino $4.000)", "Ideal para volúmenes diarios constantes", "Resúmenes y reportes de envíos"]
      }, {
        tag: "Ahorro máximo",
        name: "Opción DropOFF (-20% OFF)",
        price: "20% OFF",
        unit: "Descuento directo en tarifa",
        text: "Traé tus paquetes terminados a nuestro depósito central de Friuli 1972 y obtené un 20% de descuento.",
        list: ["20% de descuento sobre la tarifa final", "Recepción directa en Friuli 1972", "Ideal para emprendedores con vehículo", "Cobro contrareembolso sin comisiones"]
      }],
      extra: {
        tag: "Contrareembolso sin costo extra",
        title: "¿Cobrás tus ventas en puerta?",
        text: "Realizamos cobros contrareembolso en Mar del Plata sin ningún costo adicional sobre el valor del producto. Además, podés llevar tus envíos a Friuli 1972 con un 20% de descuento en la tarifa final.",
        cta: "Agendar asesoría 3PL",
        href: WA
      }
    }
  }
};
function ServicioScreen({
  service = "express",
  go
}) {
  const s = SERVICES[service];
  const nav = p => e => {
    e.preventDefault();
    go(p);
  };
  const link = c => c.path ? {
    href: "#" + c.path,
    onClick: nav(c.path)
  } : {
    href: c.href
  };
  const [openCase, setOpenCase] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden text-white",
    style: {
      background: HERO_BG
    }
  }, /*#__PURE__*/React.createElement(HeroGrid, null), /*#__PURE__*/React.createElement(Container, {
    className: "relative py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, s.pill), /*#__PURE__*/React.createElement("h1", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl mt-6"
  }, s.h1, /*#__PURE__*/React.createElement("span", {
    className: "block font-subheading tracking-widest text-2xl text-brand-yellow-500 mt-3"
  }, s.sub)), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-lg text-brand-blue-200 leading-relaxed max-w-xl"
  }, s.text), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement(Cta, link(s.ctas[0]), s.ctas[0].label), /*#__PURE__*/React.createElement(Cta, _extends({
    variant: "ghost",
    icon: s.ctas[1].icon
  }, link(s.ctas[1])), s.ctas[1].label)), /*#__PURE__*/React.createElement("dl", {
    className: "mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6"
  }, s.stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("dt", {
    className: "font-mono text-2xl font-bold text-brand-yellow-500"
  }, n), /*#__PURE__*/React.createElement("dd", {
    className: "text-xs text-brand-blue-200 mt-1"
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-ink/60 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-2xl overflow-hidden border border-white/10",
    style: {
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + s.img,
    alt: "",
    className: "absolute inset-0 w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-brand-ink/60"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative p-6 flex flex-col h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark",
    ping: true
  }, s.cardTag), /*#__PURE__*/React.createElement("span", {
    className: "font-display uppercase text-xl text-brand-yellow-500"
  }, s.cardTitle)), /*#__PURE__*/React.createElement("ul", {
    className: "mt-6 space-y-3"
  }, s.cardItems.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "flex items-start gap-3 text-sm text-white"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 16,
    tone: "yellow",
    className: "mt-1"
  }), t))))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, s.features.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-600 leading-relaxed"
  }, s.features.text), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-subheading uppercase tracking-widest text-xs text-brand-blue-500"
  }, s.features.tag)), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
  }, s.features.items.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "rounded-2xl bg-brand-white-50 border border-brand-blue-100 p-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-white border border-brand-blue-100 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22,
    tone: "blue"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-lg text-brand-blue-700 mt-4"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed mt-2"
  }, d)))))), s.benefits && /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-brand-ink text-white relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(HeroGrid, {
    id: "benefits-grid"
  }), /*#__PURE__*/React.createElement(Container, {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl"
  }, s.benefits.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-200"
  }, s.benefits.text)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2",
    style: {
      columnGap: "3rem",
      rowGap: "2rem"
    }
  }, s.benefits.items.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "flex gap-5 border-t border-white/15 pt-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-sm text-brand-yellow-500 shrink-0"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-lg"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-200 leading-relaxed mt-2"
  }, d))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-brand-white-50"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHead, {
    pill: s.pricing.pill,
    title: s.pricing.title,
    text: s.pricing.text
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 " + (s.pricing.tiers.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")
  }, s.pricing.tiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    className: "relative rounded-3xl p-6 flex flex-col " + (t.featured ? "bg-brand-blue-700 text-white shadow-antigravity-deep" : "bg-white border border-brand-blue-100 text-brand-ink shadow-minimal")
  }, t.featured && /*#__PURE__*/React.createElement("span", {
    className: "absolute top-4 right-4 bg-brand-yellow-500 text-brand-ink font-subheading uppercase tracking-widest text-xs px-3 py-1 rounded-full"
  }, t.featured), /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs " + (t.featured ? "text-brand-yellow-500" : "text-brand-blue-500")
  }, t.tag), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-2xl leading-none mt-2"
  }, t.name), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-4xl font-bold mt-4"
  }, t.price), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs mt-1 " + (t.featured ? "text-brand-blue-200" : "text-brand-blue-600")
  }, t.unit || s.pricing.unit), /*#__PURE__*/React.createElement("p", {
    className: "text-sm mt-4 " + (t.featured ? "text-brand-blue-200" : "text-brand-blue-600")
  }, t.text), /*#__PURE__*/React.createElement("ul", {
    className: "mt-4 space-y-2 flex-1"
  }, (t.list || s.pricing.list).map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    className: "flex items-start gap-2 text-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    tone: t.featured ? "yellow" : "blue",
    className: "mt-1"
  }), l))), s.pricing.ctaPath ? /*#__PURE__*/React.createElement("a", {
    href: "#" + s.pricing.ctaPath,
    onClick: nav(s.pricing.ctaPath),
    className: "mt-6 inline-flex items-center gap-2 font-subheading uppercase tracking-widest text-sm " + (t.featured ? "text-brand-yellow-500" : "text-brand-blue-700")
  }, "Cotizar", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    tone: t.featured ? "yellow" : "blue"
  })) : /*#__PURE__*/React.createElement("a", {
    href: s.pricing.ctaHref,
    target: "_blank",
    rel: "noopener",
    className: "mt-6 inline-flex items-center gap-2 font-subheading uppercase tracking-widest text-sm " + (t.featured ? "text-brand-yellow-500" : "text-brand-blue-700")
  }, s.pricing.ctaLabel, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 16,
    tone: t.featured ? "yellow" : "blue"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-subheading uppercase tracking-widest text-xs text-brand-blue-500"
  }, s.pricing.extra.tag), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-3xl text-brand-ink leading-none mt-2"
  }, s.pricing.extra.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed mt-3"
  }, s.pricing.extra.text)), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 lg:flex lg:justify-end"
  }, /*#__PURE__*/React.createElement(Cta, _extends({
    variant: "outline",
    small: true,
    icon: s.pricing.extra.path ? "map" : "message-circle"
  }, link(s.pricing.extra)), s.pricing.extra.cta))))), s.useCases && /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, s.useCases.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-600"
  }, s.useCases.text)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 rounded-3xl overflow-hidden border border-brand-blue-100 grid grid-cols-1 sm:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-8 bg-brand-white-50"
  }, /*#__PURE__*/React.createElement(Pill, null, s.useCases.items[0].tag), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-3xl leading-none text-brand-ink mt-4"
  }, s.useCases.items[0].title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed mt-3"
  }, s.useCases.items[0].text), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpenCase(openCase === 0 ? -1 : 0),
    className: "mt-4 inline-flex items-center gap-2 font-subheading uppercase tracking-widest text-sm text-brand-blue-700"
  }, "Ver ejemplos", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 16,
    tone: "blue",
    className: openCase === 0 ? "rotate-180 transition-transform" : "transition-transform"
  })), openCase === 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-xs text-brand-blue-500 uppercase"
  }, "Despachos habituales"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-2 space-y-2"
  }, s.useCases.items[0].list.map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    className: "flex items-start gap-2 text-sm text-brand-ink"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    tone: "blue",
    className: "mt-1"
  }), l))))), /*#__PURE__*/React.createElement("div", {
    className: "relative",
    style: {
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + s.useCases.items[0].img,
    alt: "",
    className: "absolute inset-0 w-full h-full object-cover"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 grid grid-cols-1 gap-6"
  }, s.useCases.items.slice(1).map(u => /*#__PURE__*/React.createElement("div", {
    key: u.title,
    className: "rounded-3xl bg-brand-blue-50 border border-brand-blue-100 p-8"
  }, /*#__PURE__*/React.createElement(Pill, null, u.tag), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-3xl leading-none text-brand-ink mt-4"
  }, u.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed mt-3"
  }, u.text))))))), s.steps && /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 lg:py-24 bg-white"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl sm:text-5xl text-brand-ink"
  }, s.steps.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-brand-blue-600"
  }, s.steps.text)), /*#__PURE__*/React.createElement("ol", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 " + (s.steps.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")
  }, s.steps.items.map(([t, d], i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    className: "rounded-2xl border border-brand-blue-100 p-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-3xl font-bold text-brand-yellow-500",
    style: {
      WebkitTextStroke: "1px #0636a5"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "font-display uppercase text-2xl text-brand-ink leading-none mt-3"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 leading-relaxed mt-2"
  }, d)))))), s.requirements && /*#__PURE__*/React.createElement("section", {
    className: "py-16 sm:py-20 bg-brand-white-50 border-t border-brand-blue-100"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display uppercase leading-[0.9] text-4xl text-brand-ink"
  }, s.requirements.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-brand-blue-600"
  }, s.requirements.text)), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
  }, s.requirements.items.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "flex gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-xl bg-white border border-brand-blue-100 flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22,
    tone: "blue"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-subheading uppercase tracking-widest text-lg text-brand-blue-700"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-brand-blue-600 mt-1"
  }, d))))))));
}
Object.assign(window, {
  ServicioScreen
});
Object.assign(__ds_scope, { ServicioScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicioScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Container = __ds_scope.Container;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Cta = __ds_scope.Cta;

__ds_ns.HeroGrid = __ds_scope.HeroGrid;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.Brand = __ds_scope.Brand;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.RedesStrip = __ds_scope.RedesStrip;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Chrome = __ds_scope.Chrome;

__ds_ns.ContactoScreen = __ds_scope.ContactoScreen;

__ds_ns.CotizarScreen = __ds_scope.CotizarScreen;

__ds_ns.FaqScreen = __ds_scope.FaqScreen;

__ds_ns.HomeScreen = __ds_scope.HomeScreen;

__ds_ns.LegalScreen = __ds_scope.LegalScreen;

__ds_ns.NosotrosScreen = __ds_scope.NosotrosScreen;

__ds_ns.RedesScreen = __ds_scope.RedesScreen;

__ds_ns.ServicioScreen = __ds_scope.ServicioScreen;

})();
