/**
 * ============================================================
 * GESTIÓN DEL TOKEN JWT EN EL NAVEGADOR
 * ------------------------------------------------------------
 * - Guarda, obtiene y elimina el token JWT
 * - Extrae el email desde el token decodificado
 * ============================================================
 */
import { jwtDecode } from "jwt-decode";

// 📥 Guarda el token JWT
export function saveToken(token) {
  localStorage.setItem("token", token);
}

// 📤 Obtiene el token JWT
export function getToken() {
  return localStorage.getItem("token");
}

// ❌ Elimina el token JWT
export function clearToken() {
  localStorage.removeItem("token");
}

// 📧 Extrae el email desde el token decodificado
export function getUserEmail() {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.sub?.toLowerCase() || null; // Usamos el "sub" como email
  } catch (error) {
    console.error("❌ Error al decodificar el token JWT:", error);
    return null;
  }
}
