import React, { useState } from 'react';
// Animaciones
import { motion } from 'framer-motion';
// Íconos de lucide-react
import { Phone, MessageCircle, Calendar, Menu, X, TicketCheck } from 'lucide-react';
// Botón reutilizable de tu UI
import { Button } from '../landingpage/ui/button';
// Toasts (notificaciones emergentes)
import { toast } from '../landingpage/ui/use-toast';
// Hook de navegación de React Router
import { useNavigate } from "react-router-dom";

const Header = () => {
  // Estado: controla si el menú móvil está abierto o no
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hook de navegación para redirigir a rutas internas
  const navigate = useNavigate();

  // Redirige al login (cuando el usuario quiere "seguir su ticket")
  const handleGoToLogin = () => {
    navigate("/login"); 
  };

  // Placeholder: WhatsApp no implementado aún
  const handleWhatsApp = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  // Placeholder: llamada telefónica no implementada aún
  const handleCall = () => {
    toast({
      title: "🚧 Esta función no está implementada aún", 
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  // Placeholder: reserva no implementada aún
  const handleReserve = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  return (
    // Header animado: entra desde arriba al cargarse
    <motion.header 
      initial={{ y: -100 }} // comienza oculto
      animate={{ y: 0 }}    // se desliza hacia abajo
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      {/* Contenedor central con padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Fila principal: logo a la izquierda, navegación a la derecha */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + nombre de la empresa */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            {/* Contenedor del logo */}
            <div className="w-8 h-8 bg-gradient-to-br from-white-500 to-white-600 rounded-lg flex items-center justify-center">
              <img 
                src="/logo192.png"   // Logo guardado en public/logo192.png
                alt="Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Texto de branding */}
            <div>
              <h1 className="text-lg font-bold text-gray-900">Comunity Tech</h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                Especialistas en reparación de Notebooks & PC y diseño de soluciones 3D a medida.
              </p>
            </div>
          </motion.div>

          {/* Navegación en escritorio (pantallas medianas en adelante) */}
<div className="hidden md:flex items-center space-x-4">
  {/* Botón WhatsApp */}
  <a 
    href="https://wa.me/5493516959149" // Reemplazá con tu número
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="cta-button text-white font-semibold px-6 py-2 rounded-full">
      <MessageCircle className="w-4 h-4 mr-2" />
      WhatsApp
    </Button>
  </a>
  
  {/* Botón Llamar */}
  <a href="tel:+5493516959149"> {/* Reemplazá con tu número */}
    <Button 
      variant="outline" 
      className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 rounded-full"
    >
      <Phone className="w-4 h-4 mr-2" />
      Llamar
    </Button>
  </a>

            
            {/* Botón Seguir ticket (redirige al login) */}
            <Button 
              onClick={handleGoToLogin}
              className="secondary-button text-white font-semibold px-6 py-2 rounded-full"
            >
              <TicketCheck className="w-4 h-4 mr-2" />
              Seguir mi ticket
            </Button>
          </div>

          {/* Botón para abrir/cerrar el menú móvil */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // toggle
            >
              {/* Ícono cambia según estado */}
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Menú en pantallas móviles */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-3">
              {/* Botón WhatsApp en móvil */}
              <Button 
                onClick={handleWhatsApp}
                className="cta-button text-white font-semibold w-full rounded-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              
              {/* Botón Llamar en móvil */}
              <Button 
                onClick={handleCall}
                variant="outline" 
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold w-full rounded-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </Button>
              
              {/* Botón seguir tikect (placeholder aún) */}
              <Button 
              onClick={handleGoToLogin}
              className="secondary-button text-white font-semibold px-6 py-2 rounded-full"
            >
              <TicketCheck className="w-4 h-4 mr-2" />
              Seguir mi ticket
            </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;