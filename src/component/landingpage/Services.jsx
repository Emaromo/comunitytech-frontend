import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Battery, 
  Keyboard, 
  Cpu, 
  HardDrive, 
  Shield, 
  Download, 
  RotateCcw,
  Printer,
  Handshake
} from 'lucide-react';
import { Button } from '../landingpage/ui/button';
import { toast } from '../landingpage/ui/use-toast';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Cambio de Pantalla",
      description: "Reparamos pantallas rotas, líneas o manchas. Repuestos originales con garantía.",
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Batería / Cargador",
      description: "Cambio de baterías agotadas y reparación de conectores de carga.",
    },
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: "Teclado / Touchpad",
      description: "Cambio de teclados y touchpads que no responden",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Limpieza / Rendimiento",
      description: "Limpieza interna, cambio de pasta térmica y optimización del sistema.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Instalación SSD / Upgrade",
      description: "Mejorá la velocidad con discos SSD y ampliación de memoria RAM.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Eliminación de Virus",
      description: "Limpieza completa de malware, virus y optimización del sistema.",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Instalación Windows/Linux",
      description: "Instalación limpia de sistemas operativos con drivers y programas básicos.",
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Recuperación de Datos",
      description: "Recuperamos archivos perdidos de discos dañados o formateados.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Reparación de bisagras",
      description: "¡Devolve la firmeza y suavidad a tu equipo! Reparamos bisagras dañadas o flojas en notebooks y laptops, asegurando que tu pantalla abra y cierre sin esfuerzo.",
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Soluciones 3D a medida",
      description: "Diseñamos la solución funcional 3D que necesitas e imprimimos en PLA, PETG o ABS ¡Consulta por nuestros servicios de modelado 3D!",
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Impresiones 3D personalizadas",
      description: "Accesorios como llaveros para tu empresa, piezas de repuesto y mucho más. ¡Consulta por nuestros servicios de impresión 3D!",
    },
  ];

  // 🔹 Solo cambiamos esta función
  const handleServiceClick = (serviceName) => {
    const message = `¡Hola! 👋 Estoy interesado/a en el servicio de ${serviceName} y me gustaría recibir más información.`;
    const phone = "5493516959149";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solucionamos todos los problemas de tu notebook o PC con la mejor calidad y garantía en Córdoba
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card rounded-2xl p-6 text-center group cursor-pointer"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-200 to-[#006a9e] rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="text-2xl font-bold text-blue-600 mb-4">
                {service.price}
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-[#006a9e] hover:from-[#006a9e] hover:to-blue-500 text-white font-semibold rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(service.title);
                }}
              >
                Consultar
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
