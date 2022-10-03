import React from "react";
import About from "./components/About";
import DemoComponent from "./components/DemoComponent";
import FooterComponent from "./components/FooterComponent";
import Hero from "./components/HeroComponent";
import Navbar from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <DemoComponent/>
      <About/>
      <FooterComponent/>
    </div>
  );
}

export default App;
