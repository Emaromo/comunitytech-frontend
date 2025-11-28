/**
 * Utilidades para gestionar el token JWT en el almacenamiento local del navegador (localStorage).
 * Incluye funciones para guardar, obtener y eliminar el token.
 */

// Clave bajo la que se almacenará el token en localStorage
const TOKEN_KEY = 'authToken';  // puedes cambiar este nombre según tu preferencia

// Guarda el token JWT en localStorage
export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

// Obtiene el token JWT almacenado (o null si no existe)
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

// Elimina el token JWT de localStorage (por ejemplo, al cerrar sesión)
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}
