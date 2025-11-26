import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, TicketCheck } from 'lucide-react';
import { Button } from '../landingpage/ui/button';
import { toast } from '../landingpage/ui/use-toast';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGoToLogin = () => navigate("/login");

  return (
    <>
      {/* HEADER FIJO */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50
                   bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm
                   w-full"
        style={{
          WebkitOverflowScrolling: "touch",
          boxSizing: "border-box",
          maxWidth: "100vw"
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/logo192.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Comunity Tech</h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  Especialistas en reparación de Notebooks & PC y soluciones 3D.
                </p>
              </div>
            </motion.div>

            {/* NAV DESKTOP */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://wa.me/5493516959149"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cta-button text-white font-semibold px-6 py-2 rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>

              <a href="tel:+5493516959149">
                <Button
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 rounded-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar
                </Button>
              </a>

              <Button
                onClick={handleGoToLogin}
                className="secondary-button text-white font-semibold px-6 py-2 rounded-full"
              >
                <TicketCheck className="w-4 h-4 mr-2" />
                Seguir mi ticket
              </Button>
            </div>

            {/* BOTÓN MENÚ MOBILE */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* MENÚ MOBILE */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-3 border-t border-gray-200 bg-white/90 w-full"
            >
              <div className="flex flex-col space-y-3 w-full">
                <a
                  href="https://wa.me/5493516959149"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cta-button text-white font-semibold w-full rounded-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>

                <a href="tel:+5493516959149">
                  <Button
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold w-full rounded-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar
                  </Button>
                </a>

                <Button
                  onClick={handleGoToLogin}
                  className="secondary-button text-white font-semibold w-full rounded-full"
                >
                  <TicketCheck className="w-4 h-4 mr-2" />
                  Seguir mi ticket
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* ELIMINAMOS ESPACIADOR QUE CAUSABA EL PROBLEMA */}
      <div className="h-14 md:h-16"></div>
    </>
  );
};

export default Header;
