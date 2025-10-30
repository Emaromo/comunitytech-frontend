// 📦 Importamos React
import React from "react";

// 📦 Importamos íconos desde lucide-react
import { UserCog, LogOut } from "lucide-react";

// 📦 Importamos la función logout (limpia sesión y redirige)
import { logout } from "../../utils/auth";

// 📦 Importamos Framer Motion para animaciones
import { motion } from "framer-motion";

/**
 * 💼 TechnicalCard
 * Tarjeta horizontal que muestra:
 * - Mensaje de bienvenida con ícono de usuario.
 * - Botón para cerrar sesión.
 */
export default function TechnicalCard() {
  return (
    // 🖤 Contenedor principal con animaciones de entrada y hover
    <motion.div
      initial={{ opacity: 0, y: 20 }} // 🎬 Entrada suave
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(59,130,246,0.6)" }} // ✨ Glow azul al pasar mouse
      className="w-full bg-gradient-to-r from-zinc-900 to-black border border-blue-700 rounded-xl px-6 py-5 flex items-center justify-between shadow-md"
    >
      {/* 📌 Sección izquierda: icono + saludo */}
      <div className="flex items-center gap-3">
        {/* 🔹 Ícono dentro de un círculo */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }} // 🌀 Efecto de rotación al pasar mouse
          className="p-2 bg-zinc-800 rounded-full"
        >
          <UserCog className="w-6 h-6 text-blue-400" />
        </motion.div>

        {/* 🔹 Texto de bienvenida */}
        <h2 className="text-white text-lg font-bold drop-shadow-md">
          Bienvenido, David Vall 👋
        </h2>
      </div>

      {/* 📌 Sección derecha: botón logout */}
      <motion.button
        onClick={logout}
        whileHover={{ scale: 1.1 }} // 🚀 Aumenta tamaño en hover
        whileTap={{ scale: 0.95 }} // 👆 Se achica un poco al click
        className="flex items-center gap-2 px-5 py-2 rounded-lg
                   bg-gradient-to-r from-blue-600 via-indigo-700 to-black
                   text-white font-medium text-sm
                   shadow-md hover:shadow-blue-500/50 transition-all duration-300"
      >
        <LogOut className="w-4 h-4" />
        Cerrar sesión
      </motion.button>
    </motion.div>
  );
}
