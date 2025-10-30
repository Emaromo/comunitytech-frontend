import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // ✅ viene de esta librería

// cn = combina clases de forma inteligente (Tailwind + condicionales)
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}