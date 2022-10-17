import React from "react";
import ContactUsComponent from "./components/ContactUsComponent";
import DemoComponent from "./components/DemoComponent";
import FooterComponent from "./components/FooterComponent";
import Hero from "./components/HeroComponent";
import Navbar from "./components/NavbarComponent";
import PricingComponent from "./components/PricingComponent";
import ReviewsComponent from "./components/ReviewsComponent";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>

      <DemoComponent/>
      <ReviewsComponent/>
      <PricingComponent/>
      <ContactUsComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
