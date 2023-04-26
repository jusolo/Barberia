import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="h-screen m-auto Header-content" id="header">
      <div className="bg-black/50 h-screen pt-20">
        <h1 className="text-white uppercase text-8xl font-bold w-80 ml-60">
          Raise Your Level Instanly
        </h1>
      </div>
    </div>
  );
}

export { Header };
