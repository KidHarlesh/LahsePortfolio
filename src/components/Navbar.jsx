// dexttop view

import React, { useContext } from "react";
import { motion } from "framer-motion";
import logoLash from "../assets/lasheToolsBg.png";
import { NavContext } from "./NavContext"; // Import the context
import { useHireMe } from "../components/HireMeContext";
import ScrollNavbarDesktop from "./ScrollNavbarDesktop";


const Navbar = ({ onClick }) => {
  const navLinks = useContext(NavContext);
  const { handleWhatsAppClick } = useHireMe();

  return (
    <section className="hidden lg:block container">
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
          <ul className="flex justify-between gap-8 text-xl  text-[#DDDDDD] font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={onClick}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="text-[#DDDDDD] border px-5 py-2 rounded-2xl bg-gradient-to-l from-[#000428] to-[#040762] text-lg border-[#2137ff] font-semibold"
            onClick={handleWhatsAppClick}
          >
            Hire Me!
          </button>
        </nav>
      </div>
      <ScrollNavbarDesktop />
    </section>
  );
};
export default Navbar;
