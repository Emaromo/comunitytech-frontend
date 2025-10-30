import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full mt-10 bg-black bg-opacity-60 text-center text-sm text-white py-8 relative overflow-hidden">
      
      {/* 🔹 Fondo animado sutil (gradiente flotando) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-black to-blue-900/40 animate-pulse"></div>

      {/* 🔹 Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* 🔹 Logo + Nombre */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-1"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {/* 👉 Logo con animación */}
          <motion.img
            src="/logo192.png" // 👈 Logo en public/logo192.png
            alt="Logo"
            className="w-10 h-10 object-contain drop-shadow-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          {/* 👉 Nombre de la empresa */}
          <p className="text-white font-bold text-xl tracking-wider drop-shadow-md">
            COMUNITY TECH
          </p>
        </motion.div>

        {/* 🔹 Subtítulo */}
        <p className="text-sm mb-5 text-gray-300">Computers Service</p>

        {/* 🔹 Redes sociales con animación */}
   {/* 🔹 Redes sociales con animación y colores por defecto */}
  <div className="flex justify-center gap-6 mb-6">
  {[
    { icon: <FaFacebookF size={20} />, color: "text-blue-500 hover:text-blue-400", link: "https://facebook.com" },
    { icon: <FaInstagram size={20} />, color: "text-pink-500 hover:text-pink-400", link: "https://instagram.com" },
    { icon: <FaLinkedinIn size={20} />, color: "text-blue-400 hover:text-blue-300", link: "https://linkedin.com" },
    { icon: <FaEnvelope size={20} />, color: "text-green-400 hover:text-green-300", link: "mailto:contacto@unitytech.com" },
  ].map((item, i) => (
    <motion.a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-300 ${item.color}`}
      whileHover={{ scale: 1.3, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {item.icon}
    </motion.a>
    ))}
     </div>

        {/* 🔹 Botón de contacto animado */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-4">
          <a
            href="mailto:contacto@unitytech.com"
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 via-indigo-700 to-black rounded-xl text-white font-semibold text-sm shadow-md hover:shadow-blue-500/50 transition-all duration-300"
          >
            Contactanos
          </a>
        </motion.div>

        {/* 🔹 Créditos */}
        <motion.p
          className="text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © {new Date().getFullYear()} COMUNITY TECH. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
