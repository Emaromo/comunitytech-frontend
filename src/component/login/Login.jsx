// ✅ Componente Login.jsx
// Este formulario permite a un usuario loguearse con email y contraseña.
// Si el backend valida, se guarda el JWT en localStorage y se decodifica para obtener el rol.

import React, { useState } from "react";
import { saveToken } from "../../utils/localStorage"; 
import { jwtDecode } from "jwt-decode";

export default function Login({ onLoginSuccess }) {
  // 📌 Estados controlados para inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 📌 Estado para mostrar mensajes de error o información
  const [message, setMessage] = useState("");

  // 📌 Función principal al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8082/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const token = await response.text();       // JWT recibido
        saveToken(token);                          // Guardamos en localStorage
        const decoded = jwtDecode(token);          // Decodificamos token
        const role = decoded.role;                 // Obtenemos el rol

        if (role) {
          onLoginSuccess();                        // Notificamos éxito al padre
        } else {
          setMessage("Rol no reconocido en el token recibido.");
        }
      } else {
        setMessage("❌ Credenciales inválidas, intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al hacer login:", error);
      setMessage("⚠️ Error en la conexión con el servidor. Intenta más tarde.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* ✉️ Campo de Email */}
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 bg-[#0f0f0f] border border-gray-800 text-white 
                   placeholder-gray-500 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   transition duration-200"
      />

      {/* 🔑 Campo de Contraseña */}
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-3 bg-[#0f0f0f] border border-gray-800 text-white 
                   placeholder-gray-500 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   transition duration-200"
      />

      {/* 🔵 Botón de Login */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-gray-900 to-blue-900
                   text-white font-semibold py-3 px-7 rounded-lg
                   border border-blue-300 shadow-[0_0_8px_#2563eb]
                   transition duration-300
                   hover:border-blue-400 hover:shadow-[0_0_20px_#3b82f6]
                   hover:scale-105 active:scale-95"
      >
        Iniciar Sesión
      </button>

      {/* ❗Mensaje de error si existe */}
      {message && (
        <p className="text-sm text-center text-red-400 mt-2">{message}</p>
      )}

      {/* 🔗 Link auxiliar */}
      <div className="mt-3 text-sm text-center text-gray-400 hover:text-gray-200 cursor-pointer transition">
        ¿Olvidaste tu contraseña?
      </div>
    </form>
  );
}