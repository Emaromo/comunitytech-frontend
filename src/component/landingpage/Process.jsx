import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Search, Wrench, CheckCircle } from 'lucide-react';
import { toast } from '../landingpage/ui/use-toast';

const Process = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "1. Contactanos",
      description: "Escribinos por WhatsApp o completá el formulario. Te respondemos al instante.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "2. Diagnóstico",
      description: "Revisamos tu equipo y te damos un presupuesto sin compromiso en el día.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "3. Reparación",
      description: "Repuestos de calidad y control en tiempo real en nuestro sistema.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "4. Entrega",
      description: "Te entregamos tu equipo funcionando perfecto con 90 días de garantía.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // 🔹 Función para abrir WhatsApp
  const handleWhatsApp = () => {
    const phone = "5493516959149";
    const message = "¡Hola! 👋 Quisiera obtener más información sobre la reparación de mi equipo.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // 🔹 Función para hacer scroll hasta la sección de contacto
  const handleScrollToForm = () => {
    const formSection = document.getElementById("contact"); // 👈 apunta al id de tu componente Contact.jsx
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
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
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proceso simple y transparente para que tengas tu equipo funcionando lo antes posible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Línea de conexión */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para reparar tu equipo?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Contactanos ahora y obtené un diagnóstico gratuito en el día
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Botón WhatsApp Directo */}
              <button 
                onClick={handleWhatsApp}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-3 inline" />
                WhatsApp Directo
              </button>
              
              {/* Botón Completar Formulario */}
              <button 
                onClick={handleScrollToForm}
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Completar Formulario
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
