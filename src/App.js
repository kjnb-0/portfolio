import "./App.css";

import React, { Fragment } from "react";

//components import
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
