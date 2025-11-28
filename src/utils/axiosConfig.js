/**
 * ============================================================
 * CONFIGURACIÓN GLOBAL DE AXIOS
 * ------------------------------------------------------------
 * - Funciona en local (localhost) y producción (VPS con dominio)
 * - Agrega automáticamente el token JWT a cada request
 * - Usa withCredentials para CORS con cookies o tokens
 * ============================================================
 */
import axios from "axios";
import { getToken } from "../utils/localStorage";

// 🌍 Detecta el entorno actual
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.comunitytech.com.ar" // 👈 Producción
      : "http://localhost:8082",          // 👈 Local
  withCredentials: true, // Necesario para cookies y cabeceras cross-origin
});

// 🔐 Interceptor: agrega token si existe
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
