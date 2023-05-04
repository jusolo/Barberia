import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { Services } from "../Services/Services";
import { About } from "../About/About";
import { Testimoniales } from "../Testimoniales/Testimoniales";

function AppUI() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Testimoniales />
    </React.Fragment>
  );
}

export { AppUI };
