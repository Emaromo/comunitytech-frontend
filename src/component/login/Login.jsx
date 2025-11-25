import React, { useState } from "react";
import api from "../../utils/axiosConfig";      // ✅ Axios configurado globalmente
import { saveToken } from "../../utils/localStorage";
import { jwtDecode } from "jwt-decode";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  /**
   * 🔐 Función que maneja el login
   * ------------------------------------------------------------------
   * - Previene el comportamiento por defecto del formulario
   * - Valida que los campos no tengan saltos de línea (`\n`)
   * - Limpia los espacios sobrantes con `.trim()`
   * - Envía los datos con axios al backend
   * - Guarda el token si el login es exitoso
   * - Llama a `onLoginSuccess()` con el rol del usuario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ⚠️ Validación contra saltos de línea en los inputs
    if (email.includes("\n") || password.includes("\n")) {
      setMessage("❌ No se permiten saltos de línea en el correo o contraseña.");
      return;
    }

    try {
      // 🧼 Sanitización: elimina espacios innecesarios y saltos accidentales
      const cleanEmail = email.trim();
      const cleanPassword = password.trim();

      // 🔥 Enviamos los datos sanitizados al backend con Axios
      const response = await api.post("/users/login", {
        email: cleanEmail,
        password: cleanPassword,
      });

      const token = response.data; // El backend devuelve el JWT como string
      saveToken(token);            // 🔐 Guardamos el token en localStorage

      const decoded = jwtDecode(token); // Decodificamos el JWT
      const role = decoded.role;

      if (!role) {
        setMessage("⚠️ El token no contiene un rol válido.");
        return;
      }

      onLoginSuccess(role); // 👉 Notificamos al componente padre

    } catch (error) {
      console.error("Error al hacer login:", error);

      // 🧠 Mejor feedback al usuario según el tipo de error
      if (error.response) {
        const backendMessage = error.response.data?.message || "Credenciales inválidas.";
        setMessage("❌ " + backendMessage);
      } else {
        setMessage("❌ Servidor no disponible o error de red.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 bg-[#0f0f0f] border border-gray-800 text-white 
                   placeholder-gray-500 rounded-md focus:outline-none 
                   focus:ring-2 focus:ring-blue-500 transition duration-200"
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-3 bg-[#0f0f0f] border border-gray-800 text-white 
                   placeholder-gray-500 rounded-md focus:outline-none 
                   focus:ring-2 focus:ring-blue-500 transition duration-200"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-gray-900 to-blue-900
                   text-white font-semibold py-3 px-7 rounded-lg
                   border border-blue-300 shadow-[0_0_8px_#2563eb]
                   transition duration-300 hover:border-blue-400 
                   hover:shadow-[0_0_20px_#3b82f6]
                   hover:scale-105 active:scale-95"
      >
        Iniciar Sesión
      </button>

      {message && (
        <p className="text-sm text-center text-red-400 mt-2">{message}</p>
      )}
    </form>
  );
}
