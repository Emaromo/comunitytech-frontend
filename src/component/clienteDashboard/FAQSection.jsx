/**
 * =============================================================================
 * FAQ SECTION — NEÓN BLANCO + AZUL / CELESTE EN BUCLE
 * -----------------------------------------------------------------------------
 * 🎨 Estilo visual:
 *   - Fondo blanco con leve degradé azul claro.
 *   - Bordes animados con bucle azul-celeste (sin violeta).
 *   - Efecto neón suave alrededor del panel.
 *   - Preguntas con sombras y hover azul brillante.
 * ⚙️ Lógica, estructura y animaciones internas: sin cambios.
 * 💎 100 % responsive.
 * =============================================================================
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const preguntas = [
    {
      pregunta: "¿Cuándo recibiré mi equipo reparado?",
      respuesta:
        "Recibirás tu equipo dentro de los 3 a 5 días hábiles, dependiendo de la complejidad del problema.",
    },
    {
      pregunta: "¿Dónde puedo consultar el estado de mi reparación?",
      respuesta:
        "Desde este panel podés ver en qué etapa está tu ticket: pendiente, en reparación o listo.",
    },
    {
      pregunta: "¿Qué pasa si no estoy conforme con la reparación?",
      respuesta:
        "Podés contactarnos dentro de los 7 días para realizar un reclamo o revisión adicional sin costo.",
    },
    {
      pregunta: "¿Cómo me notifican los avances?",
      respuesta:
        "Te enviamos actualizaciones por email. También podés revisar este panel con tu usuario.",
    },
    {
      pregunta: "¿Cuáles son los métodos de pago?",
      respuesta:
        "Podés pagar en efectivo, transferencia o con tarjeta al momento de retirar el equipo.",
    },
  ];

  const [activa, setActiva] = useState(null);

  return (
    <div
      className="relative p-6 sm:p-8 md:p-10 rounded-2xl 
                 bg-gradient-to-br from-white via-[#f7fbff] to-[#e6f3ff]
                 shadow-[0_0_25px_rgba(0,150,255,0.15)] overflow-hidden backdrop-blur-sm"
    >
      {/* 💫 BORDE ANIMADO AZUL–CELESTE (sin violeta) */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-transparent 
                   bg-[conic-gradient(from_0deg,#00BFFF,#007BFF,#00BFFF)]
                   animate-[neonFlow_6s_linear_infinite] opacity-70"
        style={{
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "2px",
        }}
      ></div>

      {/* 🔹 Animación del flujo neón */}
      <style>
        {`
          @keyframes neonFlow {
            0% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(45deg); }
            100% { filter: hue-rotate(0deg); }
          }
        `}
      </style>

      {/* 🔷 TÍTULO */}
      <h2 className="relative text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 
                     tracking-tight drop-shadow-[0_0_8px_rgba(0,150,255,0.2)]">
        Preguntas Frecuentes
      </h2>

      {/* 📋 LISTA DE PREGUNTAS */}
      <ul className="relative space-y-4 z-10">
        {preguntas.map((item, index) => {
          const isActive = activa === index;

          return (
            <li
              key={index}
              className={`relative rounded-xl border overflow-hidden transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-white via-[#eaf4ff] to-[#dff0ff] border-blue-300 shadow-[0_0_20px_rgba(0,150,255,0.25)]"
                    : "bg-white border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(0,191,255,0.2)]"
                }
              `}
            >
              {/* 🔘 PREGUNTA */}
              <button
                onClick={() => setActiva(isActive ? null : index)}
                className="w-full flex justify-between items-center px-5 py-4 
                           text-left text-gray-800 text-sm sm:text-base font-semibold
                           tracking-wide hover:text-blue-600 transition-all duration-200"
              >
                <span className="pr-3">{item.pregunta}</span>

                {/* Indicador (+ / −) */}
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-600 text-lg font-bold"
                >
                  {isActive ? "−" : "+"}
                </motion.div>
              </button>

              {/* 🔽 RESPUESTA */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-5 pb-5 text-gray-600 text-sm md:text-[15px] leading-relaxed 
                               border-t border-blue-100 bg-gradient-to-br from-white via-[#f2f8ff] to-[#e2f5ff]"
                  >
                    {item.respuesta}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQSection;
