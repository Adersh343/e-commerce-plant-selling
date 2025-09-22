import React from "react";
import PopularPlants from "./components/landing_components/PopularPlants";
import Navbar from "./components/Navbar";
import Home from "./pages/LandingPage";
import ShopPage from "./components/landing_components/ShopByCate";
import About from "./components/landing_components/WhyChooseUs";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";

const Index = () => {
  return (
    <div>
     
      <Navbar />
      <Home />
      <ShopPage />
      <About />
      <PopularPlants/>

      <Footer/>

      <LoginPage/>
      <SingupPage/>
      
    </div>
  );
};

export default Index;
