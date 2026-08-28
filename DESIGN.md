# Design System: EnviosDosRuedas_Oficial

## 1. Visual Theme & Atmosphere
Un sistema de diseño cinético, táctil y de alta precisión para logística urbana de última milla. La atmósfera combina la solidez operacional de un centro de despacho con la agilidad y frescura del asfalto costero marplatense.

- **Density:** Daily App Balanced / Cockpit Operativo (6.5/10) — Balance equilibrado entre claridad visual espaciosa y densidad de métricas logísticas (tarifas, tiempos de entrega, códigos postales y tracking en tiempo real).
- **Variance:** Offset Asymmetric (7/10) — Grillas dinámicas asimétricas, combinando composiciones *split-screen*, doble bisel con vidrio pulido y micro-patrones reticulares procedurales de despacho.
- **Motion:** Spring Physics & Micro-Vibrance (6.5/10) — Sensación mecánica y táctil, con indicadores activos nimate-ping, estados hover de elevación en -1px/translate, y reflejos suaves con amortiguación natural.

## 2. Color Palette & Roles
El sistema utiliza una base estricta de azules y neutros de alta legibilidad, contrastados por un único acento amarillo vibrante de alta visibilidad para acciones críticas y estados en vivo.

- **Canvas White (Primary Light Surface)** (#FFFFFF / #FFF) — Fondo principal en modo claro y tarjetas iluminadas.
- **Brand Blue 50 (Soft Canvas)** (#E6EEFE) — Fondos de tarjetas claras, estados inactivos y divisores tenues.
- **Brand Blue 700 (Structural Cobalt)** (#0636A5) — Base de tarjetas oscuras, botones secundarios y acentos de navegación.
- **Brand Blue 600 (Mid Blue)** (#0742CA) — Gradientes dinámicos y enlaces activos.
- **Brand Blue 200 (Muted Sky)** (#8EAFFB) — Texto secundario y descriptores sobre fondos oscuros (Blue 700 / gradientes).
- **Brand Yellow 500 (Primary CTA & Live Accent)** (#FFEC01) — Acento singular obligatorio. Usado exclusivamente para botones de conversión (Nested-Pill CTA), orbes de estado activo, pines de mapa y destacados clave.
- **Brand Yellow 400 (CTA Hover State)** (#FFF12E) — Estado hover para botones principales.
- **Brand Yellow 50 (Yellow Muted Tint)** (#FFFDE6) — Fondos de advertencia o badges suaves.
- **Feedback Green 500 (Success State)** (#00C758) — Indicadores de entrega completada y confirmaciones.
- **Feedback Red 600 (Alert State)** (#E40014) — Alertas críticas y demoras climáticas.

> **Restricciones de Color:**
> - El negro puro (#000000) está PROHIBIDO.
> - No existen los tonos rand-blue-800, 900 ni 950.
> - Prohibidos los gradientes neón violetas o púrpuras ("AI Purple/Blue").

## 3. Typography Rules
Una jerarquía tipográfica cuadripartita que separa el impacto heroico, la rotulación de acción, la legibilidad de lectura y la precisión de datos logísticos.

- **Display / Titulares H1-H2:** Anton (Fallback: sans-serif)
  - Uso: H1 y H2 principales de sección.
  - Formato: Siempre uppercase, interlineado ultra cerrado (leading-[0.9] o leading-none), peso display condensado e imponente.
- **Subheading / Botones, Pills & Badges:** Bebas Neue (Fallback: sans-serif)
  - Uso: Botones CTA, tabs de navegación, píldoras de estado, encabezados de tarjeta y labels de formulario.
  - Formato: Siempre uppercase, espaciado expandido (	racking-widest o 	racking-[.05em]).
- **Body / Textos Generales & Formularios:** Outfit (Fallback: sans-serif)
  - Uso: Párrafos de lectura, etiquetas de campos, tablas de cobertura y modales.
  - Formato: Interlineado cómodo (leading-relaxed), ancho máximo de 65 caracteres por bloque de lectura, peso regular a medium (ont-normal / ont-medium).
- **Mono / Precios & Métricas Operativas:** Geist Mono (Fallback: monospace)
  - Uso: Precios monetarios ($8.200), métricas operativas (+50K, 45 min), teléfonos, franjas horarias y códigos de tracking.
  - Formato: Alta legibilidad monoespaciada con alineación tabular natural.
- **Banned:** Se prohíbe Inter como fuente tipográfica de personalidad. Se prohíben fuentes serifas (Times New Roman, Georgia, etc.) en interfaces operativas.

## 4. Component Stylings

### 4.1 Nested-Pill CTA (Botón Primario de Marca)
- Estructura: Contenedor tipo píldora (ounded-full) en amarillo g-brand-yellow-500 con texto 	ext-brand-ink en ont-subheading tracking-[.05em].
- Orbe Interno: Círculo derecho (w-8 h-8 rounded-full bg-brand-blue-700/10) con flecha direccional → que se desplaza hacia la derecha (group-hover:translate-x-1) y conmuta a fondo azul con flecha amarilla (group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500).
- Sombra: shadow-cta-glow con expansión suave en hover (hover:shadow-[0_0_50px_rgba(255,236,1,0.5)]).
- Tactilidad: Reducción de escala al click (ctive:scale-[.98]).

### 4.2 Status Badge (Píldora de Estado en Vivo)
- Estructura: Cápsula translúcida g-brand-blue-700/60 border border-white/15 px-3.5 py-1.5 rounded-full.
- Indicador Pulsante: Doble span con punto h-2.5 w-2.5 rounded-full bg-brand-yellow-500 y halo con nimate-ping opacity-75.
- Texto: ont-subheading text-xs uppercase tracking-widest text-brand-yellow-500 font-bold.

### 4.3 Double-Bezel Card (Tarjeta de Alto Rango)
- Bisel Exterior: Contenedor con radio generoso (ounded-3xl), fondo de cristal ahumado g-brand-blue-700/60 backdrop-blur-md y borde order border-white/20.
- Superficie Interior: Contenedor encastrado con radio (ounded-2xl) con gradiente sutil linear-gradient(to bottom, rgba(6,54,165,.85), rgba(7,66,202,.95)) y padding calibrado.

### 4.4 Inputs y Formularios de Cotización
- Estructura: Labels situadas estrictamente arriba en ont-subheading uppercase text-xs tracking-wider text-brand-blue-600 o 	ext-brand-blue-200.
- Campo: Superficie clara g-white border border-brand-blue-200 rounded-xl px-4 py-3 text-brand-blue-700 con anillo de enfoque en azul o amarillo ocus:ring-2 focus:ring-brand-yellow-500.
- Mensajes de Error: Debajo del campo en 	ext-xs text-red-600 font-sans. Sin etiquetas flotantes confusas.

### 4.5 Loaders y Estados Vacíos
- Loaders: Shimmer esquelético dimensional (nimate-shimmer) que respeta la forma exacta del contenedor o tarjeta. Prohibidos spinners circulares genéricos.
- Empty States: Ilustraciones contextuales de motos/cajas con llamada a la acción clara para cotizar o crear primer envío.

## 5. Layout & Responsive Principles
- **Contención y Ancho Máximo:** Contenedor centralizado max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.
- **Estructura de Secciones:** Padding vertical armónico py-16 sm:py-20 lg:py-24. Alturas completas usando min-h-[100dvh] (evitar h-screen).
- **Hero Asimétrico:** Título de gran impacto a la izquierda con Status Badge superior y CTA anidado; columna derecha con fotografía real (card_heroe_nueva.jpeg o card_moto01.webp) encastrada en contenedor redondeado.
- **Grilla Procedural de Fondo:** SVG con patrón reticular de 48×48px con trazo punteado y nodos Brand Yellow 500 a opacity-[0.07].
- **Colapso Mobile-First (< 768px):** Todas las grillas multicolumna colapsan a 1 columna única. Padding táctil mínimo de 44px en todos los elementos interactivos. Prohibido el desborde u overflow horizontal.

## 6. Motion & Micro-Interactions
- **Física de Resortes:** Animaciones basadas en transiciones suaves 	ransition-all duration-300 con curvas naturales cubic-bezier(0,0,.2,1).
- **Micro-Interacciones Perpetuas:**
  - nimate-ping en puntos de monitoreo y ruteo en vivo.
  - nimate-float-slow en orbes y tarjetas flotantes de servicio.
  - nimate-pulse-subtle en badges de alerta o disponibilidad de flota.
- **Rendimiento de Aceleración por Hardware:** Animaciones limitadas exclusivamente a 	ransform (	ranslate, scale) y opacity.

## 7. Anti-Patterns & Prohibiciones Estrictas (AI Tells)
- **NO emojis:** Prohibidos en cualquier texto, botón, encabezado o badge de la interfaz.
- **NO fuente Inter:** Usar únicamente Anton (Display), Bebas Neue (Subheading), Outfit (Sans) y Geist Mono (Mono).
- **NO fuentes serif genéricas:** Prohibido el uso de Times New Roman, Georgia o similares en pantallas operativas.
- **NO negro puro (#000000).**
- **NO sombras de neón púrpura/azul:** Únicamente sombras calibradas a la marca (shadow-cta-glow, shadow-antigravity-deep, shadow-float).
- **NO gradientes de texto excesivos:** Evitar el texto con máscara de gradiente arcoíris. Títulos sólidos con destacados en Brand Yellow 500.
- **NO grillas genéricas de 3 tarjetas idénticas:** Utilizar grillas asimétricas, tarjetas destacadas con fondos temáticos por servicio o composición zig-zag.
- **NO datos ni métricas inventadas:** Prohibido generar estadísticas ficticias estilo "99.99% UPTIME" o "124ms SLA". Usar terminología y métricas reales del servicio o placeholders explícitos.
- **NO textos cliché de IA:** Prohibido "Elevate", "Seamless", "Unleash", "Next-Gen", "Scroll to explore", flechas de scroll rebotantes.
- **NO placeholders de imágenes rotas:** Usar exclusivamente las imágenes reales de guidelines/img/ (card_heroe_nueva.jpeg, hero_express.webp, card_moto01.webp, ox_card.jpeg, card_mapa.webp, logo-envios-simplified.webp).
