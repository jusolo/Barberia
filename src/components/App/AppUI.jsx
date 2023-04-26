import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { Services } from "../Services/Services";
import { About } from "../About/About";

function AppUI() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Services />
      <About />
    </React.Fragment>
  );
}

export { AppUI };
