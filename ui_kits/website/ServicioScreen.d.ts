import type { Go } from "./Chrome";
export type ServiceKey = "express" | "lowcost" | "flex" | "emprendedores";
/** Ficha de servicio (rutas /servicios/*). service elige el contenido real de cada servicio. */
export function ServicioScreen(props: { service: ServiceKey; go: (path: string) => void; }): JSX.Element;
