import React, { useState, useContext } from "react";
import Logo from "../assets/LasheImageHeroRemovebgA.webp";
import { FiAlignRight, FiSun, FiMoon } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ScrollNavbar from "./ScrollNavbar";
import StaticMenu from "./StaticMenu";
import { useHireMe } from "../components/HireMeContext";
import { ThemeContext } from "./ThemeContext";

const MobileNavbar = () => {
  const [nav, setNav] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const Toggle = () => {
    setNav(!nav);
  };
  const { handleWhatsAppClick } = useHireMe();

  return (
    <section>
      {/* Mobile top bar */}
      <div className="lg:hidden">
        <div className="container p-5">
          <div className="flex justify-between items-center">
            <a href="#">
              <img
                src={Logo}
                alt="Lashe logo"
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-slate-200 dark:border-zinc-800"
              />
            </a>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors text-slate-700 dark:text-slate-100"
                aria-label="Toggle Dark Mode"
              >
                {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
              <button
                className="bg-blue-600 text-white py-2.5 px-6 rounded-3xl text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm"
                onClick={handleWhatsAppClick}
              >
                Hire Me!
              </button>
              <motion.div
                className="cursor-pointer"
                onClick={Toggle}
                animate={{ rotate: nav ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {nav ? (
                  <IoMdClose className="text-4xl text-slate-700" />
                ) : (
                  <FiAlignRight className="text-4xl text-slate-700" />
                )}
              </motion.div>
            </div>
          </div>
        </div>
        <StaticMenu nav={nav} onClick={Toggle} />
        <ScrollNavbar onClick={Toggle} />
      </div>
      <Navbar />
    </section>
  );
};

export default MobileNavbar;
