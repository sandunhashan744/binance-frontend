import React from "react";
import About from "./components/About";
import ContactUsComponent from "./components/ContactUsComponent";
import DemoComponent from "./components/DemoComponent";
import DownloadComponent from "./components/DownloadComponent";
import FooterComponent from "./components/FooterComponent";
import Hero from "./components/HeroComponent";
import Navbar from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <DemoComponent/>
      <DownloadComponent/>
      <About/>
      <ContactUsComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
