import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Services } from "../Services/Services";

function AppUI() {
  return (
    <React.Fragment>
      <Navbar />
      <Services />
    </React.Fragment>
  );
}

export { AppUI };
