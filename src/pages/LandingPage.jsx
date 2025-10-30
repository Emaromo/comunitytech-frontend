// src/pages/LandingPage.jsx

import React from 'react';
import { Helmet } from 'react-helmet'; // Permite manejar el <title> y meta tags para SEO
import { Link } from 'react-router-dom'; // Para crear enlaces internos (rutas) de React
import { Toaster } from '../component/landingpage/ui/toaster'; // Componente para mostrar notificaciones tipo toast
import Header from '../component/landingpage/Header'; // Cabecera de la landing (logo, menú, etc.)
import Hero from '../component/landingpage/Hero'; // Sección principal destacada de la landing
import ValueStrip from '../component/landingpage/ValueStrip'; // Sección que muestra valores, beneficios o características
import Services from '../component/landingpage/Services'; // Sección de servicios ofrecidos
import Trust from '../component/landingpage/Trust'; // Sección que genera confianza (testimonios, logos, etc.)
import Process from '../component/landingpage/Process'; // Sección que explica el proceso de trabajo
import Contact from '../component/landingpage/Contact'; // Formulario de contacto o info de contacto
import Footer from '../component/landingpage/Footer'; // Pie de página con links, copyright, etc.

/**
 * Componente principal de la Landing Page
 * Aquí se estructura todo lo que ve el usuario cuando entra a la página
 */
function LandingPage() {
  return (
    <>
      {/* --- SEO --- */}
      {/* Helmet permite modificar dinámicamente <title> y meta tags */}
      <Helmet>
        <title>Comunity Tech | Reparación de Notebooks & PC en Córdoba</title>
        <meta
          name="description"
          content="Reparación profesional de notebooks y PC en Córdoba. Diagnóstico en el día, 90 días de garantía. Especialistas en cambio de pantalla, batería, SSD y más."
        />
      </Helmet>

      {/* --- Contenedor principal de la Landing --- */}
      {/* min-h-screen asegura que ocupe al menos toda la altura de la pantalla */}
      <div
      className="min-h-screen flex flex-col bg-cover bg-start bg-no-repeat"
      style={{
      backgroundImage: `url('/fondo-tech4.jpg')`
    }}
>
        {/* --- Header --- */}
        {/* Contiene logo, navegación y posibles botones de acción */}
        <Header />

        {/* --- Hero --- */}
        {/* Sección principal de impacto visual */}
        <Hero />

        {/* --- Botón de acción (CTA) --- */}
        {/* Centrado, grande y visible para que el usuario haga login o registro */}
        <div className="text-center my-8">
  <p className="mb-3 text-white text-lg font-medium">
    Registrate o ingresá acá para seguir el estado de tu reparación 🚀
  </p>
  <Link
    to="/login" // Redirige a tu página de Login / Signup
    className="secondary-button text-white font-semibold px-6 py-2 rounded-full"
            >
    
    Seguir mi ticket
  </Link>
</div>

        {/* --- Value Strip --- */}
        {/* Muestra los valores de la empresa, beneficios o características destacadas */}
        <ValueStrip />

        {/* --- Services --- */}
        {/* Sección con los servicios que ofrece la empresa */}
        <Services />

        {/* --- Trust --- */}
        {/* Sección de confianza: testimonios, logos de clientes o certificaciones */}
        <Trust />

        {/* --- Process --- */}
        {/* Explica cómo funciona el servicio paso a paso */}
        <Process />

        {/* --- Contact --- */}
        {/* Formulario o información de contacto */}
        <Contact />
        
         <ValueStrip />
        {/* --- Footer --- */}
        {/* Información de pie de página, links adicionales, derechos de autor */}
        <Footer />

        {/* --- Toaster --- */}
        {/* Componente que permite mostrar notificaciones tipo toast en cualquier parte de la landing */}
        <Toaster />
      </div>
    </>
  );
}

export default LandingPage;
