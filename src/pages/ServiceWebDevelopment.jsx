import React from "react";
import MobileNavbar from "../components/MobileNavbar";

import { NavContext } from "../components/NavContext";
import { HireMeContext } from "../components/HireMeContext"; 
import ServiceMobile from "../components/ServiceMobile";


const ServiceWebDevelopment = () => {
const navLinks = [
    { name: "Service", id: "Service" },
    { name: "Work", id: "Work" },
    { name: "Resume", id: "Resume" },
    { name: "Skills", id: "Skills" },
    { name: "Testimonial", id: "Testimonial" },
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
          <div className="bg-gradient-to-r from-[#000428] to-[#040762] lg:h-screen ">
            <MobileNavbar /> 
          </div>

        </div>
      </NavContext.Provider>
    </HireMeContext.Provider>
  );
}

export default ServiceWebDevelopment