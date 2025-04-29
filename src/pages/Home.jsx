import React from "react";
import MobileNavbar from "../components/MobileNavbar";
import HeroSection from "../components/HeroSection";
import { NavContext } from "../components/NavContext";
import { HireMeContext } from "../components/HireMeContext"; 
import ServiceMobile from "../components/ServiceMobile";
import Work from "../components/Work";
import Skills from "../components/Skills";
import { Experience } from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const navLinks = [
    { name: "Service", id: "Service" },
    { name: "Work", id: "Work" },
    { name: "Resume", id: "Resume" },
    { name: "Skills", id: "Skills" },
    { name: "Contact", id: "Contact" },
  ];


  const handleWhatsAppClick = () => {
    window.location.href =
      "https://wa.me/2347089327276?text=Hello%20I%20want%20to%20hire%20you","_blank"
  };

  return (
    <HireMeContext.Provider value={{ handleWhatsAppClick }}>
      <NavContext.Provider value={navLinks}>
        <div>
          <div className="bg-gradient-to-r from-[#000428] to-[#020330] lg:h-screen ">
            <MobileNavbar />
            <HeroSection />
          </div>
          <div className="">
            <ServiceMobile />
          </div>
          <div>
            <Work/>
          </div>
          <div>
            <Experience/>
            <Skills/>
          </div>
          <div>
            <Contact/>
          </div>
          <Footer/>
        </div>
      </NavContext.Provider>
    </HireMeContext.Provider>
  );
};

export default Home;
