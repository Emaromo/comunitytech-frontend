import React, { useState, useEffect } from "react";
import { CheckCircle, Bell, BellOff } from "lucide-react"; // ✅ Íconos (sin cambios)
import api from "../../utils/axiosConfig"; // ✅ Configuración de axios (sin cambios)

/**
 * 🎯 StateProgress — VERSIÓN LANDING
 * -------------------------------------------------------------
 * - Mantiene toda la lógica original, solo cambia el estilo.
 * - Fondo blanco, tonos azules, y círculos llenos por estado.
 * - Totalmente responsive (adapta tamaño y espaciado en móvil).
 * -------------------------------------------------------------
 */
export default function StateProgress({
  estado,
  fechas = {},
  ticketId,
  clienteEmail,
  activado,
  setActivado,
}) {
  // 🔔 Control interno de notificaciones activadas (misma lógica)
  const [notificacionesActivas, setNotificacionesActivas] = useState(false);

  // ✅ Consulta inicial: si el ticket ya tiene notificaciones activas
  useEffect(() => {
    const obtenerEstadoNotificaciones = async () => {
      try {
        const respuesta = await api.get(`/tickets/cliente/${clienteEmail}`);
        if (respuesta.status === 200) {
          const tickets = respuesta.data;
          const ticket = tickets.find((t) => t.id === ticketId);
          if (ticket?.notificarCliente === true) {
            setNotificacionesActivas(true);
            setActivado(true);
          }
        }
      } catch (error) {
        console.error("❌ Error al obtener ticket por email:", error);
      }
    };
    obtenerEstadoNotificaciones();
  }, [ticketId, clienteEmail, setActivado]);

  // 🔢 Orden de pasos (mismo array)
  const pasos = ["pendiente", "en reparación", "listo"];

  // 🔡 Estado actual (normalizado)
  const estadoActual = estado.toLowerCase();

  // 🔍 Índice del paso actual
  const pasoActual = pasos.indexOf(estadoActual);

  // 🔔 Activar notificaciones (funcionalidad intacta)
  const manejarToggleNotificaciones = async () => {
    try {
      const url = `/tickets/${ticketId}/notificacion`;
      const respuesta = await api.put(url);

      if (respuesta.status === 200 || respuesta.status === 204) {
        setNotificacionesActivas(true);
        setActivado(true);
      }
    } catch (error) {
      console.error("💥 Error al activar notificaciones:", error);
    }
  };

  // 🎨 Colores por estado (usados para los círculos y texto)
  const estilos = {
    pendiente: {
      bg: "bg-yellow-400",
      text: "text-yellow-600",
    },
    "en reparación": {
      bg: "bg-orange-400",
      text: "text-orange-600",
    },
    listo: {
      bg: "bg-green-400",
      text: "text-green-600",
    },
  };

  return (
    /**
     * 🧱 CONTENEDOR PRINCIPAL:
     * Tarjeta clara con bordes suaves y sombra ligera.
     */
    <div className="mt-6 p-5 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-md">
      {/* 🔰 CABECERA: título + botón de notificaciones */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
           Seguimiento de tu reparación
        </h2>

        {/* 🔔 BOTÓN DE NOTIFICACIONES */}
        <button
          onClick={manejarToggleNotificaciones}
          disabled={notificacionesActivas}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
            ${
              notificacionesActivas
                ? "bg-green-50 text-green-700 border border-green-200 cursor-default"
                : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-50"
            }`}
        >
          {notificacionesActivas ? (
            <>
              <Bell className="w-4 h-4" />
              Notificaciones activadas
            </>
          ) : (
            <>
              <BellOff className="w-4 h-4" />
              Activar notificaciones
            </>
          )}
        </button>
      </div>

      {/* 🛠️ BARRA DE PROGRESO */}
      <div className="relative">
        {/* ➖ Línea base gris */}
        <div className="absolute top-6 left-0 w-full h-1 bg-gray-200 rounded-full" />

        {/* 🔵 Línea de progreso azul (se calcula igual que antes) */}
        <div
          className="absolute top-6 left-0 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-700"
          style={{ width: `${((pasoActual + 1) / pasos.length) * 100}%` }}
        />

        {/* 🔘 CÍRCULOS DE ESTADO */}
        <div className="flex justify-between items-center relative">
          {pasos.map((paso, idx) => {
            const completado = idx <= pasoActual;
            const clase = estilos[paso];
            const fechaPaso = fechas[paso] || "—";

            return (
              <div
                key={paso}
                className="flex flex-col items-center text-center w-1/3 z-10"
              >
                {/* 🔵 CÍRCULO COMPLETO (color sólido según estado) */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-sm border border-gray-200 transition-all
                    ${
                      completado
                        ? clase.bg
                        : "bg-gray-200"
                    }`}
                >
                  {completado && (
                    <CheckCircle className="w-6 h-6 text-white" />
                  )}
                </div>

                {/* 🏷️ ETIQUETA DE ESTADO */}
                <p
                  className={`mt-3 font-semibold capitalize ${
                    completado ? clase.text : "text-gray-500"
                  }`}
                >
                  {paso}
                </p>

                {/* 📆 FECHA */}
                <p className="text-xs text-gray-500 mt-1">{fechaPaso}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
