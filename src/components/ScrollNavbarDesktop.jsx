import React, { useState, useEffect, useRef, useContext } from "react";
import logoLash from "../assets/lasheToolsBg.png";
import { motion } from "framer-motion";
import { NavContext } from "../components/NavContext";
import { useHireMe } from "../components/HireMeContext";

const ScrollNavbarDesktop = ({ onClick }) => {

  const navLinks = useContext(NavContext);
  const { handleWhatsAppClick } = useHireMe();
  const [showScrollNav, setShowScrollNav] = useState();
  const lastScrollY = useRef(0);
   
useEffect(()=>{
    const handleScroll=() =>{
        const currentScrollY = window.scrollY;
        if( currentScrollY > lastScrollY.current && currentScrollY > 100){
            setShowScrollNav(true);
        } else { setShowScrollNav(false);

        }
         lastScrollY.current = currentScrollY;
    };
        window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section className="hidden lg:block container">
      <motion.div
        className={`fixed top-0 left-0 w-full z-50  px-6 bg-black  transition-shadow duration-500 ${
          showScrollNav ? "shadow-[0_0_30px_#4f46e5]" : "shadow-none"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={showScrollNav ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <div className=" pb-4 pt-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-14">
              <a href="#">
                <motion.img
                  animate={{ x: 15 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  src={logoLash}
                  alt=""
                  className="w-[40px] max-h-[100px]"
                />
              </a>
              <p className=" text-[#DDDDDD] font-semibold text-lg">
                alowoesintoluwalase@gmail.com
              </p>
            </div>
            <ul className="flex justify-between gap-8 text-lg  text-[#DDDDDD] font-semibold">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={onClick}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="text-white border px-5 py-2 rounded-2xl bg-gradient-to-l from-[#000428] to-[#040762] text-lg border-[#2137ff] font-semibold"
              onClick={handleWhatsAppClick}
            >
              Hire Me!
            </button>
          </nav>
        </div>
      </motion.div>
    </section>
  );
 
};

export default ScrollNavbarDesktop