import type { Go } from "./Chrome";
/** Páginas legales (rutas /terminos-y-condiciones y /politica-de-privacidad). */
export function LegalScreen(props: { doc: "terminos" | "privacidad"; go: (path: string) => void; }): JSX.Element;
