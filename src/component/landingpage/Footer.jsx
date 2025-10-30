import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-blue-950 text-white py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/fondo-tech11.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 🔹 Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                <img
                  src="/logo192.png"
                  alt="Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold">Comunity Tech</span>
                <p className="text-gray-400 text-xs">
                  Asesores en tecnología & reparación de Notebooks y PC
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Más de <span className="text-yellow-400 font-semibold">300</span>{" "}
              equipos reparados y{" "}
              <span className="text-green-400 font-semibold">99%</span> de
              clientes satisfechos. Soluciones rápidas, confiables y con{" "}
              <span className="text-blue-400 font-semibold">90 días</span> de
              garantía.
            </p>

            <div className="flex space-x-3">
              <motion.a
                href="https://wa.me/543511234567"
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition"
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="tel:+543511234567"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <Phone className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:contacto@communitytech.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* 🔹 Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-base font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Cambio de Pantalla",
                "Batería / Cargador",
                "Teclado / Touchpad",
                "Limpieza Interna",
                "Instalación SSD",
                "Eliminación de Virus",
                "Recuperación de Datos",
              ].map((servicio, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {servicio}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🔹 Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-base font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+54 351 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>WhatsApp: +54 351 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Nueva Córdoba, Córdoba</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-yellow-400 mt-0.5" />
                <div>
                  <p>Lun a Vie: 9:00 - 18:00</p>
                  <p>Sáb: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🔹 Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <p className="text-gray-400 mb-3 md:mb-0">
            © {currentYear} Community Tech. Todos los derechos reservados.
          </p>

          <div className="flex space-x-6 text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">
              Términos
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacidad
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Garantía
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
