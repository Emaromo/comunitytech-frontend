import { jwtDecode } from "jwt-decode";

// Clave bajo la que se almacenará el token en localStorage
const TOKEN_KEY = 'authToken';  // puedes cambiar este nombre según tu preferencia

/**
 * Guarda el token JWT en localStorage
 * @param {string} token 
 */
export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

/**
 * Obtiene el token JWT almacenado
 * @returns {string|null}
 */
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

/**
 * Elimina el token JWT de localStorage
 */
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

/**
 * Decodifica el token y devuelve el email del usuario (si está presente)
 * @returns {string|null}
 */
export function getUserEmail() {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.sub?.toLowerCase() || null;
  } catch (err) {
    console.error("Error decoding token:", err);
    return null;
  }
}
