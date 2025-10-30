import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../landingpage/ui/button';
import { toast } from '../landingpage/ui/use-toast';

const Contact = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: '',
    problem: ''
  });

  // Maneja cambios en los inputs
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // WhatsApp de la empresa (editá este número al tuyo en formato internacional sin + ni 0)
  const companyWhatsApp = "5493516959149"; 
  // Ejemplo: Argentina Córdoba (+54 9 351...) se escribe: 549351xxxxxxx

  // Al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Armamos el mensaje con template
    const message = `
¡Nueva consulta desde la web! 🚀

👤 Nombre: ${formData.name}
📱 Teléfono: ${formData.phone}
💻 Equipo: ${formData.device}
⚠️ Problema: ${formData.problem}
    `;

    // Encodeamos el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // URL oficial de WhatsApp
    const whatsappURL = `https://wa.me/${companyWhatsApp}?text=${encodedMessage}`;

    // Redirige a WhatsApp (web o app)
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({
      name: '',
      phone: '',
      device: '',
      problem: ''
    });

    // Feedback
    toast({
      title: "✅ Consulta lista para enviar",
      description: "WhatsApp se abrirá en una nueva pestaña 📲"
    });
  };

  // Info de contacto estática
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+5493516959149",
      action: "Llamar ahora",
      link: "tel:5493516959149"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      info: "+5493516959149",
      action: "Enviar mensaje",
      link: `https://wa.me/${companyWhatsApp}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: "Lima 438, Centro, Córdoba Capital",
      action: "Ver en mapa",
      link: "https://maps.google.com/?q=Centro+Córdoba+Capital"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      info: "Lun a Vie: 9:00 - 18:00 | Sáb: 9:00 - 13:00",
      action: "Ver disponibilidad"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte. Elegí la forma que más te convenga para contactarnos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Información de Contacto
            </h3>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-800 rounded-xl flex items-center justify-center text-white">
                  {item.icon}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-2">{item.info}</p>
                  <span className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                    {item.action} →
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-400 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Formulario de Contacto
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              {/* Teléfono */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="+54 351 123-4567"
                  required
                />
              </div>
              
              {/* Tipo de equipo */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de equipo *
                </label>
                <select
                  name="device"
                  value={formData.device}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="">Seleccionar equipo</option>
                  <option value="notebook">Notebook</option>
                  <option value="pc-escritorio">PC de Escritorio</option>
                  <option value="all-in-one">All-in-One</option>
                  <option value="servicio de impresion 3D">Servicio de Impresión 3D</option>
                </select>
              </div>
              
              {/* Problema */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Describe el problema *
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Contanos qué le pasa a tu equipo..."
                  required
                />
              </div>
              
              {/* Botón */}
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900 text-white font-bold py-4 rounded-xl text-lg"
              >
                Enviar Consulta por WhatsApp
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-sm text-yellow-800">
                <strong>💡 Tip:</strong> Para una respuesta más rápida, envianos un mensaje directo por WhatsApp con fotos del problema.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
