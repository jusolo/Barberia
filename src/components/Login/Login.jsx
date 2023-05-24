import React from "react";
import "./Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "password") {
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("email", email);
      navigate("/");
    } else {
      alert("Credenciales invalidas. Intentalo de nuevo!");
    }
  };
  return (
    <div className="h-96 flex container m-auto px-40 mt-24">
      <div className="img-login w-1/2"></div>
      <div className="w-1/2 self-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="m-auto flex place-content-between w-96">
            <label className="text-white">Email:</label>
            <input
              type="email"
              name=""
              id="email"
              className="bg-transparent border border-gray-300 h-10 p-4 text-gray-300 ml-3 w-64"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="m-auto flex place-content-between w-96">
            <label className="text-white">Contraseña:</label>
            <input
              type="password"
              name=""
              id="password"
              className="bg-transparent border border-gray-300 h-10 p-4 text-gray-300 ml-3 w-64"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="m-auto mt-24">
            <button
              className="w-36 h-12 text-white border border-orange-600 hover:bg-orange-600 hover:duration-300"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Login };
