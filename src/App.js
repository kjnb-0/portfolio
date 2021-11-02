import "./App.css";

import React, { Fragment } from "react";

//components import
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";


function App() {
  return (
    <Fragment>
      {/* <div id="showcase"> */}
      <Navbar />
      <Header />
      {/* </div> */}
    </Fragment>
  );
}

export default App;
