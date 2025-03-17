import React from "react";
import MobileNavbar from "../components/MobileNavbar";
import HeroSection from "../components/HeroSection";
// import Work from "../components/Work";
// import Resume from "../components/Resume";
// import Skills from "../components/Skills";
// import Testimonial from "../components/Testimonial";
// import Contact from "../components/Contact";
// import Service from "../components/Service";
import { NavContext } from "../components/NavContext";
const Home = () => {

  const navLinks = [
    { name: "service", id: "Service" },
    { name: "work", id: "Work" },
    { name: "resume", id: "Resume" },
    { name: "skills", id: "Skills" },
    { name: "testimonial", id: "Testimonial" },
    { name: "contact", id: "Contact" },
  ];
  return (
    <NavContext.Provider value={navLinks}>
      <div>
        <div className="bg-gradient-to-r from-[#000428] to-[#040762] lg:h-screen ">
          <MobileNavbar/>
          <HeroSection />
        </div>
        {/* <div>
          <Service />
          <Work />
          <Resume />
          <Skills />
          <Testimonial />
          <Contact />
        </div> */}
      </div>
    </NavContext.Provider>
  );
}; 

export default Home;
