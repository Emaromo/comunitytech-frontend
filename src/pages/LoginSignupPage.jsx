// LoginSignupPage mejorado con animaciones futuristas
import React, { useState } from "react";
import Login from "../component/login/Login";
import Signup from "../component/signup/Signup";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";
import Footer from "../component/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginSignupPage() {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    const role = getUserRole();
    if (role === "ROLE_ADMIN") navigate("/admin");
    else if (role === "ROLE_CLIENTE") navigate("/client");
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative"
      style={{ backgroundImage: `url('/fondo-tech4.jpg')` }}
    >
      {/* Overlay futurista */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0" />

      {/* MAIN */}
      <main className="flex-grow flex justify-center items-center h-full relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-black/80 backdrop-blur-lg w-full max-w-md p-8 rounded-2xl shadow-2xl border border-blue-500/20"
        >
          {/* Branding */}
          <div className="flex items-center gap-3 mb-2 justify-center">
            <img
              src="/logo192.png"
              alt="Logo"
              className="w-10 h-10 object-contain drop-shadow-lg"
            />
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wider drop-shadow-lg">
              Comunity Tech
            </h1>
          </div>
          <p className="text-blue-300 text-center text-xs md:text-sm mb-8 tracking-[0.2em] uppercase">
            Computers Service
          </p>

          {/* Botones de alternancia */}
          <div className="flex gap-4 mb-6 w-full">
            <button
              onClick={() => setShowLogin(true)}
              className={`px-6 py-2 rounded-md font-semibold w-1/2 transition-all duration-300 ${
                showLogin
                  ? "bg-gradient-to-r from-blue-600 to-blue-900 text-white shadow-[0_0_15px_rgba(0,153,255,0.7)]"
                  : "bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setShowLogin(false)}
              className={`px-6 py-2 rounded-md font-semibold w-1/2 transition-all duration-300 ${
                !showLogin
                  ? "bg-gradient-to-r from-blue-600 to-blue-900 text-white shadow-[0_0_15px_rgba(0,153,255,0.7)]"
                  : "bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              Signup
            </button>
          </div>

          {/* Formularios con animación */}
          <div className="w-full min-h-[300px]">
            <AnimatePresence mode="wait">
              {showLogin ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <Login onLoginSuccess={handleLoginSuccess} />
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <Signup />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}