/**
 * =============================================================================
 * CONFIGURACIÓN GLOBAL DE AXIOS
 * -----------------------------------------------------------------------------
 * Este archivo se encarga de:
 *  - Detectar si la app corre LOCAL o en PRODUCCIÓN (EasyPanel)
 *  - Elegir la URL correcta del backend automáticamente
 *  - Agregar el token JWT en cada petición sin que vos tengas que hacerlo
 *
 * ⚠️ IMPORTANTE:
 *   - NO modifiques nada en otro archivo, todo se resuelve acá.
 *   - Backend local → localhost:8082
 *   - Backend en servidor → 66.97.42.236:8082
 * =============================================================================
 */

import axios from "axios";
import { getToken } from "./localStorage";

/**
 * 🔍 Detecta si estamos en modo producción o desarrollo.
 * -----------------------------------------------------
 * window.location.hostname devuelve el nombre del dominio actual.
 *
 * - Si es "localhost"  → estás trabajando en tu PC
 * - Si es cualquier otro (IP o dominio) → estás en el servidor
 */
const isProd = window.location.hostname !== "localhost";

/**
 * 🧱 Instancia personalizada de Axios
 * -----------------------------------
 * Acá definimos *una sola vez* la URL base que usarán TODAS las peticiones.
 *
 * - En local  → usa localhost:8082
 * - En el servidor → usa la IP del VPS donde corre tu backend
 */
const api = axios.create({
  baseURL: isProd
    ? "https://api.comunitytech.com.ar" // 🌐 URL DEL BACKEND EN EASY PANEL
    : "http://localhost:8082",  // 💻 URL DEL BACKEND EN TU PC
});

/**
 * 🎯 Interceptor para agregar el token JWT automáticamente
 * --------------------------------------------------------
 * Antes de cada request, Axios llama a esta función.
 *
 * Si existe un token guardado en localStorage:
 *   - Lo agrega al header Authorization
 *   - Permite que Spring Security autentique al usuario
 */
api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

/**
 * 📤 Exportamos la instancia lista para usar
 * -----------------------------------------
 * En todo tu frontend vas a usar:
 *   api.get(...)
 *   api.post(...)
 *   api.put(...)
 *
 * Y NUNCA más usás fetch ni axios directo.
 */
export default api;
