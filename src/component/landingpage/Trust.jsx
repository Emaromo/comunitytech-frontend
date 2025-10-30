import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, CheckCircle, CreditCard } from 'lucide-react';

const Trust = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "+300",
      text: "Equipos reparados en Córdoba"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "99%",
      text: "Clientes satisfechos"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: "90",
      text: "Días de garantía"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      text: "Excelente servicio! Me arreglaron la pantalla de mi notebook en el mismo día. Muy profesionales.",
      rating: 5,
      service: "Cambio de pantalla"
    },
    {
      name: "Carlos Rodríguez", 
      text: "Súper recomendable. Mi PC estaba lentísima y ahora funciona como nueva. Precio justo y buena atención.",
      rating: 5,
      service: "Limpieza y optimización"
    },
    {
      name: "Ana Martín",
      text: "Pensé que había perdido todos mis archivos, pero lograron recuperar todo. Increíble trabajo!",
      rating: 5,
      service: "Recuperación de datos"
    }
  ];

  const paymentMethods = [
    "Mercado Pago",
    "Tarjeta de Débito", 
    "Tarjeta de Crédito",
    "Efectivo",
    "Transferencia"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Confianza que Respalda
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-900 rounded-2xl text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-semibold">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-blue-600">
                    {testimonial.service}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
            Métodos de Pago
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-6 py-3"
              >
                <span className="font-semibold text-gray-700">
                  {method}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;