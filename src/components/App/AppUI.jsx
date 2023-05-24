import React from "react";

import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { Services } from "../Services/Services";
import { About } from "../About/About";
import { Testimoniales } from "../Testimoniales/Testimoniales";
import { Contact } from "../Contact/Contact";
import { Shop } from "../Shop/Shop";

function AppUI() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Testimoniales />
      <Contact />
      <Shop />
    </React.Fragment>
  );
}

export { AppUI };
