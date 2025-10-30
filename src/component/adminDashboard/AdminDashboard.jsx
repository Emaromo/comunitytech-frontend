import React from "react";
import TicketForm from "./TicketForm";      // 🧾 Formulario para crear tickets
import TicketList from "./TicketList";      // 📋 Lista de todos los tickets
import TechnicalCard from "./TechnicalCard"; // 🧑‍🔧 Tarjeta con datos del técnico
import TicketChart from "./TicketChart";    // 📈 Gráfico mensual de tickets
import Footer from "../Footer";             // ⚙️ Footer personalizado

/**
 * 🎯 AdminDashboard
 * Panel principal del administrador con layout en 3 columnas (desktop):
 * - Columna izquierda: formulario para crear tickets
 * - Columna central: lista completa de tickets
 * - Columna derecha: gráfico de tickets mensuales
 * 
 * ✅ Responsivo: en pantallas chicas se apilan en una sola columna
 * ✅ Visual mejorado: sombras dinámicas, bordes, colores más futuristas
 */
export default function AdminDashboard() {
  return (
    // 🖥️ Contenedor principal con fondo tecnológico
    <div
      className="min-h-screen flex flex-col bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/fondo-tech3.jpg')` }}
    >
      {/* 🧑‍🔧 Header con tarjeta técnica */}
      <header className="w-full px-6 py-4">
        <TechnicalCard />
      </header>

      {/* 📦 Contenido principal */}
      <main className="flex-grow w-full px-6 flex items-center justify-center">
        {/* 
          📊 Grid principal 
          - En desktop: 12 columnas 
          - En tablets: 6 columnas 
          - En mobile: 1 columna
        */}
        <div
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 w-full"
          style={{ minHeight: "70vh" }}
        >
          {/* 📋 Formulario para crear ticket */}
          <section
            className="col-span-1 md:col-span-2 lg:col-span-3
                       bg-zinc-950 bg-opacity-80 rounded-2xl p-6 shadow-lg
                       hover:shadow-[0_0_25px_rgba(0,106,158,0.6)]
                       border border-zinc-800 hover:border-[#006a9e]
                       transition-all duration-300 overflow-auto"
          >
            <h2 className="text-lg font-semibold text-[#66d9ff] mb-4">
              Crear nuevo ticket
            </h2>
            <TicketForm />
          </section>

          {/* 🗂️ Lista de tickets */}
          <section
            className="col-span-1 md:col-span-4 lg:col-span-6
                       bg-zinc-950 bg-opacity-80 rounded-2xl p-6 shadow-lg
                       hover:shadow-[0_0_25px_rgba(0,106,158,0.6)]
                       border border-zinc-800 hover:border-[#006a9e]
                       transition-all duration-300 overflow-y-auto"
          >
            <h2 className="text-lg font-semibold text-[#66d9ff] mb-4">
              Tickets registrados
            </h2>
            <div className="w-full">
              <TicketList />
            </div>
          </section>

          {/* 📈 Gráfico de tickets */}
          <section
            className="col-span-1 md:col-span-2 lg:col-span-3
                       bg-zinc-950 bg-opacity-80 rounded-2xl p-6 shadow-lg
                       hover:shadow-[0_0_25px_rgba(0,106,158,0.6)]
                       border border-zinc-800 hover:border-[#006a9e]
                       transition-all duration-300 overflow-auto"
          >
            <h2 className="text-lg font-semibold text-[#66d9ff] mb-4">
              Estadísticas mensuales
            </h2>
            <TicketChart />
          </section>
        </div>
      </main>

      {/* 📌 Footer fijo al final */}
      <Footer />
    </div>
  );
}
