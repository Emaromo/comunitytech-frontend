import React, { useState } from "react";
import api from "../../utils/axiosConfig";  // ✅ Usa AxiosConfig con auto URL
import { saveToken } from "../../utils/localStorage";
import { jwtDecode } from "jwt-decode";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔥 Ahora usa Axios, NO fetch, y usa la baseURL correcta automáticamente
      const response = await api.post("/users/login", {
        email,
        password,
      });

      const token = response.data;    // backend retorna JWT en texto
      saveToken(token);

      const decoded = jwtDecode(token);
      const role = decoded.role;

      if (!role) {
        setMessage("El token no contiene rol.");
        return;
      }

      // 🔥 Se notifican roles como siempre
      onLoginSuccess(role);

    } catch (error) {
      console.error("Error al hacer login:", error);
      setMessage("❌ Credenciales inválidas o servidor no disponible.");
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
