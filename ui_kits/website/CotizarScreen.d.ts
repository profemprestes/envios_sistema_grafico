import type { Go } from "./Chrome";
/** Cotizador (rutas /cotizar/express y /cotizar/lowcost). Calcula la tarifa con la tabla real sobre la distancia de ejemplo. */
export function CotizarScreen(props: { mode: "express" | "lowcost"; go: (path: string) => void; }): JSX.Element;
