/**
 * Configuración del cliente Axios para realizar peticiones a la API.
 * Ajusta la URL base dependiendo del entorno (producción o desarrollo) y agrega el token JWT a las cabeceras.
 */

import axios from 'axios';
import { getToken } from './localStorage';  // Importa la función para obtener el token

// Determinar la URL base de la API según el entorno: producción vs desarrollo
const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://comunitytech.com.ar/api'   // URL base de la API en producción (TODO: ajusta si es distinta)
  : 'http://localhost:8080/api';        // URL base de la API en desarrollo local

// Crear una instancia de Axios con la configuración base
const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para agregar el token JWT en cada petición si existe
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();  // obtener token JWT almacenado
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
