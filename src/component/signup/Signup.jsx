import React, { useState } from "react";
import api from "../../utils/axiosConfig"; // ⬅️ Usa la URL automática

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  // 🔄 Limpia todos los campos del formulario
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const containsNewLine =
      email.includes("\n") ||
      password.includes("\n") ||
      firstName.includes("\n") ||
      lastName.includes("\n");

    if (containsNewLine) {
      setMessage("❌ No se permiten saltos de línea en los campos.");
      return;
    }

    try {
      const cleanEmail = email.trim();
      const cleanPassword = password.trim();
      const cleanFirstName = firstName.trim();
      const cleanLastName = lastName.trim();

      const res = await api.post("/users", {
        email: cleanEmail,
        password: cleanPassword,
        firstName: cleanFirstName,
        lastName: cleanLastName,
      });

      if (res.status === 200 || res.status === 201) {
        setMessage("✅ Usuario registrado correctamente. Ya puedes iniciar sesión.");
        resetForm(); // ✅ Limpia los campos después del registro
        setTimeout(() => setMessage(""), 3000);
      }

    } catch (err) {
      console.error("❌ Error al registrar usuario:", err);
      setMessage("❌ El correo ya está en uso o hubo un problema con el servidor.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <input
        type="text"
        placeholder="Nombre"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full p-2 bg-[#0f0f0f] border border-grey-900 text-white 
                   placeholder-gray-400 rounded-md focus:outline-none 
                   focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full p-2 bg-[#0f0f0f] border border-grey-900 text-white 
                   placeholder-gray-400 rounded-md focus:outline-none 
                   focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 bg-[#0f0f0f] border border-grey-900 text-white 
                   placeholder-gray-400 rounded-md focus:outline-none 
                   focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="password"
        placeholder="Contraseña (mín. 8 caracteres)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 bg-[#0f0f0f] border border-grey-900 text-white 
                   placeholder-gray-400 rounded-md focus:outline-none 
                   focus:ring-2 focus:ring-blue-500"
        required
      />

      {message && (
        <p className="text-sm text-center text-white bg-black bg-opacity-30 p-2 rounded">
          {message}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-gray-900 to-blue-900
                   text-white font-semibold py-3 px-7 rounded-lg
                   border-2 border-blue-300 shadow-[0_0_10px_#2563eb]
                   transition duration-300
                   hover:border-blue-400 hover:shadow-[0_0_20px_#3b82f6]
                   hover:scale-105"
      >
        Registrarse
      </button>
    </form>
  );
}
