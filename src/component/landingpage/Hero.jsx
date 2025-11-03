import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Shield, Clock, Database } from 'lucide-react';
import { Button } from '../landingpage/ui/button';
import { toast } from '../landingpage/ui/use-toast';

const Hero = () => {
  const handleWhatsApp = () => {
  // Número de WhatsApp: 5493516959149
  const numero = "5493516959149";
  const url = `https://wa.me/${numero}`;
  window.open(url, "_blank"); // Abre en una nueva pestaña
};

  const handleReserve = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  // --- IMÁGENES DEL SLIDESHOW ---
  const images = [
    "/soporte.jpg",
    "/landing2.jpg",
    "/impresora1.jpeg",
    "/impresora2.jpeg"

    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 gradient-bg tech-pattern relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-24 left-10 floating-animation"style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
          <Shield className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute top-24 right-10 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
          <Clock className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Reparamos tu <span className="text-blue-500">Notebook</span> en el día
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Especialistas en reparación de notebooks y PC en Córdoba. 
              <span className="font-semibold text-blue-500"> Diagnóstico gratuito</span> y 
              <span className="font-semibold text-blue-500"> 90 días de garantía</span>.
            </motion.p>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="trust-badge rounded-full px-4 py-2 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Atención en el día</span>
              </div>
              <div className="trust-badge rounded-full px-4 py-2 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">90 días garantía</span>
              </div>
              <div className="trust-badge rounded-full px-4 py-2 flex items-center space-x-2">
                <Database className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">Cuidamos tus datos</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="cta-button text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Contactar por WhatsApp
              </Button>
              
            </motion.div>
          </motion.div>

          {/* Image Slideshow */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Imagen ${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                    ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;