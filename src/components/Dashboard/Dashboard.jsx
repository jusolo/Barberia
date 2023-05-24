import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    setEmail(sessionStorage.getItem("email"));
    if (!loggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Eliminar la información de inicio de sesión de la sesión almacenada
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="h-screen grid">
      <div class="text-center place-self-center max-w-sm p-6 bg-zinc-900 rounded-lg shadow">
        <h5 class="uppercase mb-2 text-2xl font-bold tracking-tight text-white">
          Dashboard
        </h5>
        <p class="font-normal text-gray-200">
          Email: {email}
        </p>
        <button
          onClick={handleLogout}
          className="w-36 h-12 mt-6 text-white border border-orange-600 hover:bg-orange-600 hover:duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export { Dashboard };
