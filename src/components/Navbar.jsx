// Desktop Navbar

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import logoLash from "../assets/LasheImageHeroRemovebgA.webp";
import { NavContext } from "./NavContext";
import { ThemeContext } from "./ThemeContext";
import { useHireMe } from "../components/HireMeContext";
import ScrollNavbarDesktop from "./ScrollNavbarDesktop";

const Navbar = ({ onClick }) => {
  const navLinks = useContext(NavContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { handleWhatsAppClick } = useHireMe();

  return (
    <section className="hidden lg:block container">
      <div className="pb-4 pt-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-14">
            <a href="#">
              <motion.img
                animate={{ x: 15 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={logoLash}
                alt="Lashe logo"
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-slate-200 dark:border-zinc-800"
              />
            </a>
            <p className="text-slate-500 dark:text-slate-200 font-medium text-base">
              alowoesintoluwalase@gmail.com
            </p>
          </div>
          <ul className="flex justify-between gap-8 text-base text-slate-700  dark:text-slate-200 font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={onClick}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors text-slate-700 dark:text-slate-100"
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button
              className="bg-blue-600 text-white border border-blue-600 px-6 py-2.5 rounded-2xl text-base font-semibold hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 shadow-sm"
              onClick={handleWhatsAppClick}
            >
              Hire Me!
            </button>
          </div>
        </nav>
      </div>
      <ScrollNavbarDesktop />
    </section>
  );
};

export default Navbar;
