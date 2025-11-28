/**
 * ============================================================
 * CONFIGURACIÓN GLOBAL DE AXIOS
 * ------------------------------------------------------------
 * Soporta:
 *  - Localhost (desarrollo)
 *  - Producción (VPS con dominio propio)
 *  - Evita usar el dominio del frontend para llamadas backend
 * ============================================================
 */

import axios from "axios";
import { getToken } from "./localStorage";

// 🧠 Forzamos baseURL de producción, sin depender del hostname del frontend
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.comunitytech.com.ar" // 👈 Backend en VPS
      : "http://localhost:8082",          // 👈 Backend local
  withCredentials: true,
});

// 🔐 Agregar token automáticamente
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
