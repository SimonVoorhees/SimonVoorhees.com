import { useState } from "react";

import { Rightpoint } from "./components/Rightpoint";
import { RIT } from "./components/RIT";
import { Title } from "./components/Title";
import { Bio } from "./components/Bio";
import { Navbar } from "./components/Navbar";
import { Navlink } from "./components/Navlink";
import { HomePage } from "./components/HomePage";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Title/> */}
      {/* <Navbar /> */}
      {/* Overview */}
      {/* <Bio /> */}
      <HomePage />
      <Projects />
      {/* Rightpoint */}
      <Rightpoint />
      {/* Education */}
      <RIT />
      <Footer />      
    </div>
  );
}

export default App;
