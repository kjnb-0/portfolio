import "./App.css";

import React, { Fragment } from "react";

//components import
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
  return (
    <Fragment>
      {/* <div id="showcase"> */}
      <Navbar />
      <Header />
      <Footer />
      {/* </div> */}
    </Fragment>
  );
}

export default App;
