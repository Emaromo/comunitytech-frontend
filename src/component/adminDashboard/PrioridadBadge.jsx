import React from "react";

/**
 * 🔴🟠🟡 PrioridadBadge (mejorado visualmente)
 *
 * - No se cambia la funcionalidad: sigue recibiendo `prioridad` y mostrándola.
 * - Mejora visual: colores, pequeño punto indicador, sombra, bordes redondeados.
 * - Accesibilidad: `role`, `aria-label` y `title` para lectores de pantalla / tooltips.
 *
 * Props:
 * - prioridad: string -> 'alta' | 'media' | 'baja' (o cualquier string; habrá un estilo por defecto)
 */
export default function PrioridadBadge({ prioridad }) {
  // -------------------------
  // 1) Map de estilos por prioridad
  // -------------------------
  // Cada entrada contiene:
  // - bg: clase de background de Tailwind
  // - text: clase de color de texto
  // - ring: un pequeño ring/transparencia para dar profundidad
  const estilos = {
    alta: {
      bg: "bg-red-600",
      text: "text-white",
      ring: "ring-1 ring-red-800/30",
    },
    media: {
      bg: "bg-orange-500",
      text: "text-white",
      ring: "ring-1 ring-orange-700/30",
    },
    baja: {
      bg: "bg-yellow-400",
      text: "text-black",
      ring: "ring-1 ring-yellow-600/20",
    },
    default: {
      bg: "bg-green-500",
      text: "text-white",
      ring: "ring-1 ring-green-700/30",
    },
  };

  // -------------------------
  // 2) Normalizamos la clave y elegimos el estilo (fallback a 'default')
  // -------------------------
  const clave = prioridad ? prioridad.toString().toLowerCase() : "default";
  const estilo = estilos[clave] || estilos.default;

  // -------------------------
  // 3) Etiqueta amigable: capitalizamos la primera letra y dejamos el resto en minúscula
  //    (esto es solo visual; no cambia la lógica)
  // -------------------------
  const label = prioridad
    ? prioridad.toString().toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
    : "Sin prioridad";

  // -------------------------
  // 4) Color del puntito indicador (contraste con el fondo)
  //    Si el texto es negro (ej: fondo amarillo), usamos un puntito oscuro; sino blanco.
  // -------------------------
  const dotColorClass = estilo.text.includes("black") ? "bg-black" : "bg-white";

  // -------------------------
  // 5) Render - todo comentado
  // -------------------------
  return (
    <span
      // role / aria: ayuda a lectores de pantalla a identificar que esto indica un estado
      role="status"
      aria-label={`Prioridad: ${label}`}
      // title: tooltip nativo al pasar el mouse
      title={`Prioridad: ${label}`}
      // Clases:
      // - inline-flex: para alinear el puntito y el texto en una fila
      // - items-center gap-2: alineación vertical y separación
      // - px/py: padding cómodo
      // - rounded-full: forma de píldora (badge)
      // - text-sm font-semibold: tamaño y peso de la tipografía
      // - shadow-sm + ring: profundidad y borde sutil
      // - uppercase: estilo opcional para destacar (podés quitarlo si preferís capitalizado)
      // - transition + hover: pequeña animación al pasar el mouse
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold shadow-sm ${estilo.bg} ${estilo.text} ${estilo.ring} uppercase whitespace-nowrap transform transition duration-150 hover:scale-105`}
    >
      {/* Puntito visual a la izquierda (decorativo, aria-hidden) */}
      <span
        aria-hidden="true"
        className={`w-2 h-2 rounded-full ${dotColorClass} opacity-95`}
      />

      {/* Texto de la prioridad (visual) */}
      <span className="leading-none">{label}</span>
    </span>
  );
}
