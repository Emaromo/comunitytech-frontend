// 📦 Importamos íconos desde lucide-react
import { UserCog, LogOut } from "lucide-react";
import React, { useState, useEffect } from "react";
import { logout } from "../../utils/auth";
import api from "../../utils/axiosConfig";
import { motion } from "framer-motion";

/**
 * 🧠 Capitaliza nombres (primera letra mayúscula)
 */
const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * 💼 TechnicalCard — Estilo azul/celeste fuerte con gradientes
 * ⚙️ Lógica sin cambios. Solo mejora visual (100% segura)
 * 🎨 Estilo:
 * - Fondo degradado azul oscuro → celeste brillante.
 * - Bordes redondeados 2xl, sombras suaves con luz azul.
 * - Botón redondeado tipo "pill" con gradiente y hover dinámico.
 * - 100% responsive (móvil → desktop).
 */
export default function TechnicalCard({ email }) {
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!email) return;
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/users/email/${email}`);
        if (response.status === 200) {
          const { firstName, lastName } = response.data;
          setUserName({
            firstName: capitalize(firstName),
            lastName: capitalize(lastName),
          });
          setError(null);
        }
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar el nombre del usuario.");
        setUserName({ firstName: "", lastName: "" });
      }
    };
    fetchUserData();
  }, [email]);

  return (
    // 🧱 CONTENEDOR PRINCIPAL — gradiente azul profundo → celeste
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 35px rgba(56,189,248,0.5)", // 💎 Luz celeste sutil
      }}
      className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 
                 rounded-2xl bg-gradient-to-br from-[#0a1a3d] via-[#004aad] to-[#38bdf8]
                 border border-blue-500/50 shadow-[0_0_25px_rgba(56,189,248,0.25)]
                 backdrop-blur-md transition-all duration-500"
    >
      {/* 👤 IZQUIERDA: Ícono + saludo */}
      <div className="flex items-center gap-3">
        {/* 🔹 Ícono circular con glow */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="p-2 bg-gradient-to-br from-blue-700 via-sky-500 to-cyan-400 rounded-full 
                     shadow-[0_0_5px_rgba(56,189,248,0.6)]"
        >
          <UserCog className="w-6 h-6 text-white drop-shadow-[0_0_6px_#38bdf8]" />
        </motion.div>

        {/* 🔹 Texto dinámico */}
        <h2 className="text-white text-lg sm:text-xl font-semibold tracking-wide drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
          {error
            ? "Bienvenido.."
            : userName.firstName && userName.lastName
            ? `Bienvenido ${userName.firstName} ${userName.lastName} 👋`
            : "Bienvenido.."}
        </h2>
      </div>

      {/* 🔘 BOTÓN CERRAR SESIÓN */}
      <motion.button
        onClick={logout}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.7)", // ✨ Glow azul-celeste
        }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-2 px-7 py-2.5 rounded-full
                   text-white font-medium text-sm sm:text-base
                   bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#0284c7]
                   shadow-[0_0_18px_rgba(56,189,248,0.4)]
                   border border-sky-400/30
                   hover:from-[#06b6d4] hover:via-[#3b82f6] hover:to-[#1e40af]
                   transition-all duration-400"
      >
        <LogOut className="w-4 h-4 text-white drop-shadow-[0_0_8px_#38bdf8]" />
        Cerrar sesión
      </motion.button>
    </motion.div>
  );
}
