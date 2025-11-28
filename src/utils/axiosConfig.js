/**
 * ============================================================
 * CONFIGURACIÓN GLOBAL DE AXIOS
 * ------------------------------------------------------------
 * Detecta automáticamente si el frontend está
 * en localhost o desplegado en dominio real.
 * 
 * - Adjunta el token JWT en cada request
 * - Soporta login y llamadas protegidas
 * - Compatible con cookies y CORS
 * ============================================================
 */

import axios from "axios";
import { getToken } from "./localStorage";

// 🧠 Detecta si estamos en producción o local
const isProd = window.location.hostname !== "localhost";

const api = axios.create({
  baseURL: isProd
    ? "https://api.comunitytech.com.ar" // 🌐 Backend real en VPS / EasyPanel
    : "http://localhost:8082",          // 💻 Backend local en tu PC
  withCredentials: true,                // ⬅️ Importante para cookies / JWT cross-origin
});

// 🎯 Interceptor → Agrega token automáticamente
api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
