# UI kit: sitio enviosdosruedas.com

Recreación click-through de las 13 páginas del sitio real, construida sólo con las clases Tailwind v4 compiladas y los tokens del sistema (no hay componentes React en este DS). Abrí `index.html`; la navegación, los menús Servicios/Nosotros, los cotizadores y los formularios funcionan; la ruta activa se refleja en el hash (`#/servicios/enviosflex`).

| Pantalla | Rutas del sitio | Archivo |
| :-- | :-- | :-- |
| Home | `/` | `HomeScreen.jsx` |
| Servicio (4 variantes) | `/servicios/envios-express`, `/servicios/envios-lowcost`, `/servicios/enviosflex`, `/servicios/plan-emprendedores` | `ServicioScreen.jsx` (`service` prop) |
| Cotizador (2 variantes) | `/cotizar/express`, `/cotizar/lowcost` | `CotizarScreen.jsx` (`mode` prop) |
| Contacto | `/contacto` | `ContactoScreen.jsx` |
| Sobre nosotros | `/nosotros/sobre-nosotros` | `NosotrosScreen.jsx` |
| Preguntas frecuentes | `/nosotros/preguntas-frecuentes` | `FaqScreen.jsx` |
| Nuestras redes | `/nosotros/nuestras-redes` | `RedesScreen.jsx` |
| Legales (2 variantes) | `/terminos-y-condiciones`, `/politica-de-privacidad` | `LegalScreen.jsx` (`doc` prop) |
| Header, footer, botón de WhatsApp | todas | `Chrome.jsx` (`Navbar`, `Footer`, `WhatsAppFloat`) |

Contenido: titulares, copy, tarifas, teléfonos, dirección, horarios y preguntas frecuentes se tomaron del HTML real del sitio (clon del 2026-08-27). Imágenes: `../../guidelines/img/`. Iconos: Lucide por CDN (el sitio real usa lucide-react).

Para el agente de diseño: cada pantalla es un ejemplo verificado de cómo componer una página con este sistema. Copiá la estructura de sección (contenedor `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, ritmo `py-16 sm:py-20 lg:py-24`) y los patrones (Nested-Pill CTA, badge con `animate-ping`, double-bezel) tal como aparecen acá.
