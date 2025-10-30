/**
 * =============================================================================
 * CLIENTE DASHBOARD — ESTÉTICA TIPO LANDING (CLARA + AZUL)
 * -----------------------------------------------------------------------------
 * ✅ Qué se cambió (solo estilo, no lógica):
 *   - Fondo claro (bg-gray-50) como tu landing.
 *   - Tarjeta principal blanca con borde sutil y sombra (look profesional).
 *   - Tipografía y espaciado más aireados (mejor legibilidad).
 *   - Tabla con encabezado azul claro y filas alternadas.
 *   - Componente StateProgress en look claro (coherente con landing).
 *   - FAQ con tarjetas blancas/border gris (misma identidad visual).
 *   - Totalmente responsive: stack en móvil, anchos fluidos, tabla scrollable.
 *
 * ⚠️ Importante: NO se tocó la lógica de datos, ni endpoints, ni props.
 * =============================================================================
 */

import React, { useEffect, useState } from "react";
import Footer from "../Footer";                     // ⚙️ Footer del sitio (no se toca)
import api from "../../utils/axiosConfig";         // 📡 Axios configurado (no se toca)
import { getUserEmail } from "../../utils/localStorage"; // 🔐 Email desde JWT (no se toca)
import ClientCard from "../adminDashboard/ClientCard";   // 🧾 Nombre + Logout (no se toca)
import StateProgress from "./StateProgress";             // 🚦 Paso a paso (estilo solo)
import FAQSection from "./FAQSection";                   // ❓ Preguntas frecuentes (estilo solo)

export default function ClienteDashboard() {
  // 📬 Estado con los tickets del cliente (NO SE TOCA)
  const [tickets, setTickets] = useState([]);
  // ⚠️ Mensaje informativo (NO SE TOCA)
  const [mensaje, setMensaje] = useState("");
  // ⏳ Loader (NO SE TOCA)
  const [loading, setLoading] = useState(true);
  // 🔑 Email del cliente desde el token (NO SE TOCA)
  const email = getUserEmail();
  // 🔔 Estado compartido para notificaciones (NO SE TOCA)
  const [activado, setActivado] = useState(false);

  /**
   * 🔄 Al montar: trae tickets por email
   * (LÓGICA ORIGINAL CONSERVADA)
   */
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get(`/tickets/cliente/${email}`);
        if (res.status === 200) {
          if (res.data.length > 0) {
            setTickets(res.data);
            setMensaje("");
          } else {
            setMensaje("📭 No tenés tickets creados todavía.");
          }
        }
      } catch (error) {
        console.error("❌ Error al cargar los tickets:", error);
        setMensaje("❌ Hubo un problema al cargar tus tickets.");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [email]);

  /**
   * 📅 Helper: formatea YYYY-MM-DD -> DD/MM/YYYY
   * (LÓGICA ORIGINAL CONSERVADA)
   */
  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    try {
      return new Date(dateStr + "T00:00:00").toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch (e) {
      return "—";
    }
  };

  return (
    /**
     * 🎨 CONTENEDOR PRINCIPAL
     * - Fondo claro general (bg-gray-50) como la landing.
     * - Layout columna (header arriba, contenido al medio, footer abajo).
     */
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🧾 Encabezado con ClientCard (mismo componente) */}
      <header className="w-full px-6 md:px-12 py-6">
        <ClientCard email={email} />
      </header>

      {/**
       * 📦 CONTENIDO CENTRAL
       * - Contenedor max-w-7xl como tu landing.
       * - Tarjeta blanca principal: borde sutil + sombra suave.
       * - padding fluido responsive (p-4 -> md:p-8).
       */}
      <main className="flex-grow w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div
            className="
              w-full bg-white rounded-2xl
              border border-gray-200 shadow-md
              p-4 sm:p-6 md:p-8
            "
          >
            {/* ⏳ Estado de carga (estilo claro + azul suave) */}
            {loading ? (
              <p className="text-blue-600 text-base sm:text-lg animate-pulse">
                ⏳ Cargando tus tickets...
              </p>
            ) : (
              <>
                {/* 🛑 Mensajes informativos (error / no hay tickets) */}
                {mensaje && (
                  <p
                    className="
                      mb-6 text-center text-gray-700
                      bg-yellow-50 border border-yellow-200
                      rounded-lg p-4
                    "
                  >
                    {mensaje}
                  </p>
                )}

                {/* 📋 Tabla + Progreso + FAQ (solo si hay tickets) */}
                {tickets.length > 0 && (
                  <>
                    {/**
                     * 🌐 TABLA DE TICKETS
                     * - Contenedor con overflow-x-auto para móvil.
                     * - Altura máxima controlada si querés limitar (opcional).
                     * - Estilo claro: encabezado azul, filas alternadas gris muy claro.
                     */}
                    <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
                      <table className="min-w-full table-auto text-sm">
                        {/* 🔷 Encabezado (azul claro + texto blanco) */}
                        <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs uppercase tracking-wide">
                          <tr>
                            <th className="py-3 px-4 text-left">ID</th>
                            <th className="py-3 px-4 text-left">Descripción</th>
                            <th className="py-3 px-4 text-left">Estado</th>
                            <th className="py-3 px-4 text-left">Solución</th>
                            <th className="py-3 px-4 text-left">Precio</th>
                            <th className="py-3 px-4 text-left">Fecha</th>
                          </tr>
                        </thead>

                        {/* 📄 Cuerpo de tabla (filas alternadas) */}
                        <tbody className="divide-y divide-gray-100">
                          {tickets.map((ticket, idx) => {
                            // 🎨 Color por estado (MISMA LÓGICA, solo clases)
                            let estadoColor = "text-gray-800";
                            const estado = ticket.estado?.toLowerCase();
                            if (estado === "pendiente") estadoColor = "text-yellow-600";
                            else if (estado === "en reparación") estadoColor = "text-orange-600";
                            else if (estado === "listo") estadoColor = "text-green-600";

                            return (
                              <tr
                                key={ticket.id}
                                className={`${
                                  idx % 2 === 0 ? "bg-gray-50/80" : "bg-white"
                                } hover:bg-blue-50 transition-colors`}
                              >
                                {/* ID */}
                                <td className="py-3 px-4 align-top text-gray-700">
                                  {ticket.id}
                                </td>

                                {/* Descripción */}
                                <td className="py-3 px-4 align-top text-gray-800">
                                  {ticket.descripcionProblema}
                                </td>

                                {/* Estado con color */}
                                <td className={`py-3 px-4 align-top font-semibold ${estadoColor}`}>
                                  {ticket.estado}
                                </td>

                                {/* Solución */}
                                <td className="py-3 px-4 align-top text-gray-700">
                                  {ticket.solucion || "-"}
                                </td>

                                {/* Precio */}
                                <td className="py-3 px-4 align-top">
                                  <span className="text-green-600 font-semibold mr-1">$</span>
                                  <span className="text-gray-900">{ticket.precio}</span>
                                </td>

                                {/* Fecha */}
                                <td className="py-3 px-4 align-top text-gray-700">
                                  {formatDate(ticket.fechaCreacion)}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/**
                     * 🚦 STATE PROGRESS (paso a paso)
                     * - Se mantiene la funcionalidad y props.
                     * - Look claro alineado con la landing (ver componente abajo).
                     */}
                    <div className="mb-6">
                      <StateProgress
                        estado={tickets[0].estado}
                        ticketId={tickets[0].id}
                        clienteEmail={email}
                        activado={activado}
                        setActivado={setActivado}
                        fechas={{
                          pendiente: tickets[0].fechaCreacion
                            ? formatDate(tickets[0].fechaCreacion)
                            : "—",
                          "en reparación": tickets[0].fechaReparacion
                            ? formatDate(tickets[0].fechaReparacion)
                            : "—",
                          listo: tickets[0].fechaListo ? formatDate(tickets[0].fechaListo) : "—",
                        }}
                      />
                    </div>

                    {/* ❓ FAQ (estilo claro + tarjetas) */}
                    <FAQSection />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* ⚙️ Footer del sitio (no se toca) */}
      <Footer />
    </div>
  );
}
