import type { ReactNode } from "react";

export type Go = (path: string) => void;

/** Cascarón completo de página: Navbar + <main> + franja de redes + Footer. */
export function Chrome(props: { path?: string; go?: Go; children?: ReactNode }): JSX.Element;
/** Header sticky azul con menús Servicios / Nosotros, teléfono y CTA "Cotizá tu envío". */
export function Navbar(props: { path: string; go: Go }): JSX.Element;
/** Franja global "Seguí nuestro movimiento" (Facebook, Instagram, WhatsApp). */
export function RedesStrip(): JSX.Element;
/** Footer con banda CTA, columnas de marca / servicios / base operativa y línea legal. */
export function Footer(props: { go: Go }): JSX.Element;

/** Nested-Pill CTA. variant: primary (amarillo) | ghost (glass sobre oscuro) | outline (sobre claro). */
export function Cta(props: { children: ReactNode; variant?: "primary" | "ghost" | "outline"; href?: string; onClick?: (e: any) => void; icon?: string; small?: boolean; className?: string }): JSX.Element;
/** Pill de categoría en Bebas Neue; ping=true agrega el punto "en vivo" (sólo para estados reales). */
export function Pill(props: { children: ReactNode; tone?: "light" | "dark"; ping?: boolean; className?: string }): JSX.Element;
/** Icono Lucide por CDN. tone: white | yellow | blue | ink. */
export function Icon(props: { name: string; size?: number; tone?: "white" | "yellow" | "blue" | "ink"; className?: string }): JSX.Element;
/** Campo de formulario del sistema: label Bebas arriba + input/select redondeado. dark=true para fondos oscuros. */
export function Field(props: { id: string; label: string; type?: string; placeholder?: string; required?: boolean; dark?: boolean; children?: JSX.Element }): JSX.Element;
/** Contenedor max-w-7xl con padding responsivo. */
export function Container(props: { className?: string; children?: ReactNode }): JSX.Element;
/** Grilla procedural de rutas para fondos oscuros (id único por instancia). */
export function HeroGrid(props: { id?: string }): JSX.Element;
/** Encabezado de sección: pill opcional + H2 + párrafo. */
export function SectionHead(props: { pill?: string; title: string; text?: string; dark?: boolean; center?: boolean; className?: string }): JSX.Element;

export const IMG: string;
export const HERO_BG: string;
export const PHONE: string;
export const TEL: string;
export const WA: string;
export const WA_MSG: string;
