/**
 * ============================================================
 * CONFIGURACIÓN GLOBAL DE AXIOS
 * ------------------------------------------------------------
 * - Detecta automáticamente entorno: LOCAL vs PRODUCCIÓN
 * - Usa JWT por Authorization Header (NO usa cookies)
 * - Agrega token automáticamente si existe
 * - Funciona para login, registro, tickets, admin/cliente
 * - Manejo centralizado de errores HTTP útiles
 * ============================================================
 */

import axios from "axios";
import { getToken } from "./localStorage";

// 🧠 Detecta si está en producción o local
const isProd = window.location.hostname !== "localhost";

// 🌐 Selección automática del URL base del backend
const api = axios.create({
  baseURL: isProd
    ? "https://api.comunitytech.com.ar" // 🌐 Backend en VPS / EasyPanel
    : "http://localhost:8082",          // 💻 Backend local en PC
  withCredentials: false,               // 🚫 NO usamos cookies, solo JWT
});

// 🔐 Agregar token automáticamente a TODAS las peticiones
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ⚠ Manejo de errores centralizado (opcional pero altamente recomendado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ Error en API:", error.response?.status, error.response?.data);

    // Token expirado o inválido → se puede agregar logout automático
    if (error.response?.status === 401) {
      console.warn("⚠ Token expirado o inválido.");
    }

    return Promise.reject(error);
  }
);

export default api;
