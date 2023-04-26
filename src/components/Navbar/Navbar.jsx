import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="bg-zinc-900">
      <ul className="flex gap-3 p-4 justify-center">
        <li><a href="#" className="text-gray-200 uppercase hover:text-white hover:underline hover:underline-offset-8 hover:decoration-orange-600">Home</a></li>
        <li><a href="#" className="text-gray-200 uppercase hover:text-white hover:underline hover:underline-offset-8 hover:decoration-orange-600">Services</a></li>
        <li><a href="#" className="text-gray-200 uppercase hover:text-white hover:underline hover:underline-offset-8 hover:decoration-orange-600">Barber</a></li>
        <li><a href="#" className="text-gray-200 uppercase hover:text-white hover:underline hover:underline-offset-8 hover:decoration-orange-600">Contact Us</a></li>
        <li><a href="#" className="text-gray-200 uppercase hover:text-white hover:underline hover:underline-offset-8 hover:decoration-orange-600">Location</a></li>
      </ul>
    </div>
  );
}

export { Navbar };