import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, Zap } from 'lucide-react';

const ValueStrip = () => {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Diagnóstico en el día"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Repuestos garantizados"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      text: "Pagá con Mercado Pago"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-900 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center space-x-3 text-white"
            >
              <div className="text-blue-400">
                {benefit.icon}
              </div>
              <span className="font-semibold text-sm md:text-base">
                {benefit.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ValueStrip;