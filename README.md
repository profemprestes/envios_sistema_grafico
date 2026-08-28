# Convenciones — EnviosDosRuedas_Oficial

**Qué es.** Los tokens y el CSS compilado (Tailwind v4) del sitio real enviosdosruedas.com: mensajería en moto y logística de última milla en Mar del Plata. **No hay componentes React**: `window.EnviosDosRuedas` está vacío. Construí cada pantalla con JSX/HTML propio usando exactamente las clases y variables de abajo.

## Setup (sin provider)
- No hace falta wrapper ni ThemeProvider. `styles.css` carga las 4 fuentes (Anton, Bebas Neue, Outfit, Geist Mono) y fija `--font-display`, `--font-subheading`, `--font-sans`, `--font-mono` en `:root`; el `<body>` ya hereda Outfit.
- Página clara: `bg-white` o `bg-brand-white-50` + texto `text-brand-ink` (#00277c). Secciones oscuras: `bg-brand-ink` (el tono más profundo del sistema) o `bg-brand-blue-700`, o el gradiente hero en style inline: `linear-gradient(135deg,#00277C 0%,#0636A5 60%,#0742CA 100%)`.
- **La paleta termina en `ink` (#00277c) y `700` (#0636a5).** No existen `brand-blue-800/900/950` (se quitaron del sistema): no los escribas ni como clase ni como `var()`.
- Idioma del contenido: español rioplatense (voseo: "Cotizá", "Pedí").

## Idioma de estilo: utilidades Tailwind v4 COMPILADAS (sin JIT)
Sólo existen las clases que el sitio usa. Una clase no compilada **no hace nada y no avisa**. Regla: si una clase no figura en esta tabla, buscala en `_ds_bundle.css`; si no está, usá `style` inline con la variable (`style={{background:'var(--color-brand-blue-700)'}}`). Todas las variables viven en `tokens/theme.css`.

| Familia | Clases verificadas en el CSS |
| :-- | :-- |
| Color de marca | `bg-brand-blue-{50,100,500,700}`, `bg-brand-ink`, `text-brand-blue-{200,300,500,600,700}`, `text-brand-ink`, `border-brand-blue-{100,200,700}`, `bg-brand-yellow-500` (CTA), `hover:bg-brand-yellow-400`, `bg-brand-yellow-50`, `text-brand-yellow-{400,500}`, `border-brand-yellow-500`, `text-white`, `bg-white` |
| Opacidades | `bg-brand-ink/40`, `bg-brand-ink/60`, `bg-brand-blue-700/{10,20,40,60,80,95}`, `text-brand-ink/{70,80,90}`, `bg-brand-yellow-500/10`, `bg-brand-yellow-500/20`, `border-brand-yellow-500/30`, `bg-white/5`, `bg-white/10`, `hover:bg-white/20`, `border-white/10`, `border-white/15`, `border-white/20`. (NO existen `text-white/70` ni similares: para texto atenuado sobre azul usá `text-brand-blue-200`.) |
| Tipografía | `font-display` (Anton → H1/H2, siempre `uppercase leading-[0.9]`), `font-subheading` (Bebas Neue → botones, pills, tabs, labels: `uppercase tracking-widest` o `tracking-[.05em]`), `font-sans` (Outfit → cuerpo, forms, tablas), `font-mono` (Geist Mono → precios `$8.200`, métricas `+50K`, teléfonos, horarios). Tamaños `text-xs` … `text-7xl`; pesos `font-light` `font-medium` `font-semibold` `font-bold`; `leading-tight` `leading-relaxed` |
| Layout | contenedor `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`; sección `py-16 sm:py-20 lg:py-24`; grillas `grid grid-cols-2` / `grid-cols-3` con `gap-4 sm:gap-6 lg:gap-8` (no existe `grid-cols-4`: usá style inline) |
| Radios | botones y badges `rounded-full`; tarjetas `rounded-2xl`; contenedores/bezel `rounded-3xl`; cajas de icono `rounded-xl` |
| Sombras | `shadow-cta-glow` (sólo sobre el CTA amarillo), `shadow-antigravity-deep` (tarjetas hero), `shadow-float` (flotantes), `shadow-minimal` (tarjetas planas); hover del CTA `hover:shadow-[0_0_50px_rgba(255,236,1,0.5)]`; bezel exterior `shadow-[0_20px_50px_rgba(0,0,0,0.4)]` |
| Glass | `backdrop-blur-md bg-brand-ink/60 border border-white/20` |
| Gradientes | `bg-gradient-to-b from-brand-blue-700 to-brand-blue-600`; para el interior del double-bezel usá style inline `linear-gradient(to bottom,rgba(6,54,165,.85),rgba(0,39,124,.95))` |
| Movimiento | `animate-ping` (punto "en vivo"), `animate-pulse-subtle`, `animate-float-slow`, `animate-shimmer`, `animate-border-pulse`; `transition-all duration-300`, `active:scale-[.98]`, `hover:-translate-y-1`, `group` + `group-hover:translate-x-1` |

## Dónde está la verdad
- `styles.css` → importa `tokens/theme.css` (todas las `--color-*`, `--shadow-*`, `--radius-*`, `--animate-*`, `--text-*`), `fonts/fonts.css` (+ woff2), `tokens/fonts.css` (`--font-*`), `_ds_bundle.css` (todas las clases compiladas). Leé `tokens/theme.css` antes de inventar un color.
- `guidelines/*.html`: ejemplos renderizados y verificados de colores, tipografía, radios, sombras, logo y los patrones de abajo.
- `ui_kits/website/`: las 13 páginas del sitio real como pantallas JSX verificadas (`Chrome.jsx` = header, franja de redes y footer; `HomeScreen`, `ServicioScreen`, `CotizarScreen`, `ContactoScreen`, `NosotrosScreen`, `FaqScreen`, `RedesScreen`, `LegalScreen`). Cada pantalla es un `export function` con su firma en `<Name>.d.ts` y un preview propio `<Name>.html` (tarjeta del catálogo); `index.html` las enruta todas. Los helpers compartidos (`Cta`, `Pill`, `Icon`, `Container`, `HeroGrid`, `SectionHead`, `Field`, `Navbar`, `RedesStrip`, `Footer`, `Chrome`) viven en `Chrome.jsx`. Para una página nueva, copiá la estructura de la pantalla más parecida y envolvela en `<Chrome>`.

## Imágenes de marca (usá estas, nunca placeholders)
Viven en `guidelines/img/` del sistema (misma raíz que `styles.css`); referencialas por esa ruta relativa a la carpeta vinculada del DS. Detalle visual en `guidelines/imagery.html`.
- `card_heroe_nueva.jpeg` (896×1200, vertical): mensajero entregando un paquete en mano a una clienta. Es la mejor foto para el hero principal, testimonios y "cómo funciona". Ya trae las palabras "LOGÍSTICO" y "RÁPIDO" grabadas en la imagen: no le superpongas más texto.
- `hero_express.webp` (512×512): mensajero con uniforme (polo azul, gorra amarilla) sosteniendo un paquete. Sólo para tarjetas o columnas de hasta ~500 px; es chica para full-bleed.
- `card_moto01.webp` (2048×2048, fondo blanco): moto de reparto azul con baúl DosRuedas. Tarjeta Express, flota, secciones claras.
- `box_card.jpeg` (1024×1024): caja de cartón con sticker y QR de la marca. Paquetería, e-commerce, Plan Emprendedores.
- `card_mapa.webp` (1024×1024): mapa isométrico de Mar del Plata con pin amarillo. Tarjeta de cobertura / zonas de envío.
- Fondos abstractos por servicio (448×600, ondas): `fondo_express.webp` azul + amarillo, `fondo_lowcost.webp` blanco + azul, `fondo_flex.webp` amarillo, `fondo_emprendedores.webp` verde. Van detrás del contenido de la tarjeta del servicio con `object-cover`; sobre los oscuros usá texto blanco con overlay `bg-brand-ink/60`, sobre `fondo_lowcost` y `fondo_flex` texto `text-brand-ink`.
- `logo-envios-simplified.webp` (800×800): isotipo circular para header, footer y favicon (sobre blanco o sobre `bg-brand-ink`).
Reglas: `object-cover` + `rounded-2xl`/`rounded-3xl`; nada de etiquetas superpuestas sobre la foto; si hace falta texto, va debajo.

## Patrones de la marca (copiá la estructura)
1. **Nested-Pill CTA**: píldora amarilla + orbe interno con la flecha que se desplaza en hover.
2. **Status Badge**: pill azul/70 con punto `animate-ping` amarillo y label Bebas Neue.
3. **Double-Bezel Card**: bisel exterior glass `bg-brand-ink/60 backdrop-blur-md` (`rounded-3xl`) + interior con gradiente 700→ink (`rounded-2xl`).
4. **Grilla procedural**: `<svg>` con `<pattern>` de 48×48, trazo blanco dasharray y puntos `#FFEC01`, `opacity-[0.07]`.

```html
<section class="relative overflow-hidden text-white py-16 sm:py-20 lg:py-24" style="background:linear-gradient(135deg,#00277C 0%,#0636A5 60%,#0742CA 100%)">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="inline-flex items-center gap-2 bg-brand-ink/60 border border-white/15 px-3.5 py-1.5 rounded-full mb-6">
      <span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75"></span><span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500"></span></span>
      <span class="font-subheading text-xs uppercase tracking-widest text-brand-yellow-500 font-bold">Ruteo activo · MDQ</span>
    </div>
    <h1 class="font-display uppercase leading-[0.9] text-6xl mb-4">Tu envío, <span class="text-brand-yellow-500">hoy mismo.</span></h1>
    <p class="text-lg text-brand-blue-200 max-w-xl mb-6">Retiro en el día, seguimiento y cero extravíos.</p>
    <a href="/cotizar/express" class="group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-[.05em] font-bold border px-8 py-3 min-h-[52px] bg-brand-yellow-500 text-brand-ink border-brand-yellow-500 shadow-cta-glow hover:bg-brand-yellow-400 hover:shadow-[0_0_50px_rgba(255,236,1,0.5)] active:scale-[.98] transition-all duration-300">
      <span class="truncate">Cotizá Express</span>
      <span class="w-8 h-8 rounded-full flex items-center justify-center bg-brand-blue-700/10 text-brand-ink group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500 group-hover:translate-x-1 transition-all duration-200">→</span>
    </a>
  </div>
</section>
```

---

# EnviosDosRuedas_Oficial - índice de tokens (generado)

Sistema **tokens-only**: no expone componentes React (`window.EnviosDosRuedas` está vacío). Todo lo que un diseño necesita llega por `styles.css` → `tokens/theme.css` (variables), `fonts/fonts.css` (+ woff2), `tokens/fonts.css` (`--font-*` en `:root`), `_ds_bundle.css` (utilidades Tailwind v4 compiladas del sitio real).

## Colores de marca
| Variable | Valor |
| :-- | :-- |
| `--color-brand-blue-50` | `#e6eefe` |
| `--color-brand-blue-100` | `#bacefd` |
| `--color-brand-blue-200` | `#8eaffb` |
| `--color-brand-blue-300` | `#628ff9` |
| `--color-brand-blue-400` | `#3570f8` |
| `--color-brand-blue-500` | `#0950f6` |
| `--color-brand-blue-600` | `#0742ca` |
| `--color-brand-blue-700` | `#0636a5` |
| `--color-brand-yellow-50` | `#fffde6` |
| `--color-brand-yellow-100` | `#fffab8` |
| `--color-brand-yellow-200` | `#fff78a` |
| `--color-brand-yellow-300` | `#fff45c` |
| `--color-brand-yellow-400` | `#fff12e` |
| `--color-brand-yellow-500` | `#ffec01` |
| `--color-brand-white-50` | `#fff` |
| `--color-brand-blue` | `var(--color-brand-blue-700)` |
| `--color-brand-yellow` | `var(--color-brand-yellow-500)` |
| `--color-brand-blue-ink` | `#00277c` |
| `--color-brand-ink` | `#00277c` |

## Otros colores del tema
| Variable | Valor |
| :-- | :-- |
| `--color-red-500` | `#fb2c36` |
| `--color-red-600` | `#e40014` |
| `--color-green-400` | `#05df72` |
| `--color-green-500` | `#00c758` |
| `--color-blue-500` | `var(--color-brand-blue-500)` |
| `--color-gray-700` | `var(--color-brand-blue-600)` |
| `--color-black` | `#000` |
| `--color-white` | `#fff` |
| `--color-red-500` | `lab(55.4814% 75.0732 48.8528)` |
| `--color-red-600` | `lab(48.4493% 77.4328 61.5452)` |
| `--color-green-400` | `lab(78.503% -64.9265 39.7492)` |
| `--color-green-500` | `lab(70.5521% -66.5147 45.8073)` |

## Tipografía
| Variable | Valor |
| :-- | :-- |
| `--font-sans` | `"Outfit", "Outfit Fallback","Outfit","IBM Plex Sans","Inter",sans-serif` |
| `--font-mono` | `"Geist Mono", "Geist Mono Fallback","Geist Mono",monospace` |
| `--font-weight-light` | `300` |
| `--font-weight-normal` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |
| `--font-weight-extrabold` | `800` |
| `--font-weight-black` | `900` |
| `--font-display` | `"Anton", "Anton Fallback","Anton SC","Anton",sans-serif` |
| `--font-headline` | `var(--font-display),"Anton SC","Anton",sans-serif` |
| `--font-subheading` | `"Bebas Neue", "Bebas Neue Fallback","Bebas Neue",sans-serif` |
| `--font-body` | `var(--font-sans)` |
| `--text-xs` | `.75rem` |
| `--text-xs--line-height` | `calc(1/.75)` |
| `--text-sm` | `.875rem` |
| `--text-sm--line-height` | `calc(1.25/.875)` |
| `--text-base` | `1rem` |
| `--text-base--line-height` | `calc(1.5/1)` |
| `--text-lg` | `1.125rem` |
| `--text-lg--line-height` | `calc(1.75/1.125)` |
| `--text-xl` | `1.25rem` |
| `--text-xl--line-height` | `calc(1.75/1.25)` |
| `--text-2xl` | `1.5rem` |
| `--text-2xl--line-height` | `calc(2/1.5)` |
| `--text-3xl` | `1.875rem` |
| `--text-3xl--line-height` | `calc(2.25/1.875)` |
| `--text-4xl` | `2.25rem` |
| `--text-4xl--line-height` | `calc(2.5/2.25)` |
| `--text-5xl` | `3rem` |
| `--text-5xl--line-height` | `1` |
| `--text-6xl` | `3.75rem` |
| `--text-6xl--line-height` | `1` |
| `--text-7xl` | `4.5rem` |
| `--text-7xl--line-height` | `1` |
| `--text-8xl` | `6rem` |
| `--text-8xl--line-height` | `1` |
| `--text-9xl` | `9rem` |
| `--text-2xs` | `.625rem` |
| `--tracking-tighter` | `-.05em` |
| `--tracking-tight` | `-.025em` |
| `--tracking-wide` | `.025em` |
| `--tracking-wider` | `.05em` |
| `--tracking-widest` | `.1em` |
| `--tracking-mega` | `.2em` |
| `--leading-tight` | `1.25` |
| `--leading-snug` | `1.375` |
| `--leading-normal` | `1.5` |
| `--leading-relaxed` | `1.625` |
| `--leading-hero` | `.8` |
| `--leading-none` | `1` |

## Radios, sombras, blur
| Variable | Valor |
| :-- | :-- |
| `--radius-md` | `.5rem` |
| `--radius-lg` | `.75rem` |
| `--radius-xl` | `1rem` |
| `--radius-2xl` | `1.5rem` |
| `--radius-3xl` | `2rem` |
| `--radius-full` | `9999px` |
| `--shadow-accent-sm` | `0 2px 4px #ffec0126` |
| `--shadow-float` | `0 25px 50px -12px #00277c26` |
| `--shadow-minimal` | `0 4px 20px -2px #0636a50a,0 2px 6px -1px #0636a505` |
| `--shadow-soft-elevation` | `0 12px 24px -10px #0636a51f` |
| `--shadow-antigravity-deep` | `0 30px 60px -15px #0636a54d,0 0 50px -10px #ffec0126` |
| `--shadow-cta-glow` | `0 0 40px #ffec0166,0 0 80px #ffec0126` |
| `--blur-sm` | `8px` |
| `--blur-md` | `12px` |
| `--blur-2xl` | `40px` |
| `--blur-3xl` | `64px` |

## Animaciones
| Variable | Valor |
| :-- | :-- |
| `--animate-spin` | `spin 1s linear infinite` |
| `--animate-ping` | `ping 1s cubic-bezier(0,0,.2,1)infinite` |
| `--animate-pulse` | `pulse 2s cubic-bezier(.4,0,.6,1)infinite` |
| `--animate-bounce` | `bounce 1s infinite` |
| `--animate-float-slow` | `float-slow 4s ease-in-out infinite` |
| `--animate-pulse-subtle` | `pulse-subtle 3s ease-in-out infinite` |
| `--animate-border-pulse` | `border-pulse 2s ease-in-out infinite` |
| `--animate-shimmer` | `shimmer 2.5s ease-in-out infinite` |
| `--animate-counter-up` | `counter-up .8s cubic-bezier(.22,1,.36,1)forwards` |
| `--animate-logos-scroll` | `logos-scroll 30s linear infinite` |

Keyframes disponibles: `route-dash-flow`, `map-pin-pop`, `radar-ripple`, `spin`, `ping`, `pulse`, `bounce`, `float-slow`, `pulse-subtle`, `border-pulse`, `shimmer`, `counter-up`, `logos-scroll`.

## Espaciado y contenedores
| Variable | Valor |
| :-- | :-- |
| `--spacing` | `.25rem` |
| `--spacing-section-y` | `6rem` |
| `--spacing-section-y-tight` | `3rem` |
| `--container-xs` | `20rem` |
| `--container-sm` | `24rem` |
| `--container-md` | `28rem` |
| `--container-lg` | `32rem` |
| `--container-xl` | `36rem` |
| `--container-2xl` | `42rem` |
| `--container-3xl` | `48rem` |
| `--container-4xl` | `56rem` |
| `--container-5xl` | `64rem` |
| `--container-6xl` | `72rem` |
| `--container-7xl` | `80rem` |

## Imágenes de marca (`guidelines/img/`)
- `guidelines/img/box_card.jpeg` (612 KB)
- `guidelines/img/card_heroe_nueva.jpeg` (724 KB)
- `guidelines/img/card_mapa.webp` (65 KB)
- `guidelines/img/card_moto01.webp` (142 KB)
- `guidelines/img/fondo_emprendedores.webp` (93 KB)
- `guidelines/img/fondo_express.webp` (69 KB)
- `guidelines/img/fondo_flex.webp` (103 KB)
- `guidelines/img/fondo_lowcost.webp` (77 KB)
- `guidelines/img/hero_express.webp` (146 KB)
- `guidelines/img/logo-envios-simplified.webp` (69 KB)

## Inventario
- Variables en `tokens/theme.css`: 128
- Imágenes de marca en `guidelines/img/`: 10
- UI kits en `ui_kits/`: 1 (29 archivos)
- Clases utilitarias compiladas en `_ds_bundle.css`: ~637 (sólo las que usa el sitio; grep antes de usar)
- Fuentes: Outfit, Outfit Fallback, Anton, Anton Fallback, Bebas Neue, Bebas Neue Fallback, Geist Mono, Geist Mono Fallback
- Tarjetas de guidelines: 7
