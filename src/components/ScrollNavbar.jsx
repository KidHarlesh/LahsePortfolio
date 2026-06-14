import React, { useState, useEffect, useRef, useContext } from "react";
import Logo from "../assets/LasheImageHeroRemovebgA.webp";
import { FiAlignRight, FiSun, FiMoon } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { NavContext } from "../components/NavContext";
import { ThemeContext } from "./ThemeContext";
import { useHireMe } from "../components/HireMeContext";

const ScrollNavbar = ({ onClick }) => {
  const navLinks = useContext(NavContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const [showScrollNav, setShowScrollNav] = useState(false);
  const lastScrollY = useRef(0);
  const { handleWhatsAppClick } = useHireMe();

  const Toggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show sticky nav only when scrolling UP
      if (currentScrollY < lastScrollY.current && currentScrollY > 100) {
        setShowScrollNav(true);
      } else {
        setShowScrollNav(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="lg:hidden">
      <motion.div
        className="fixed top-0 left-0 w-full z-50 py-3 px-5 bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 shadow-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={showScrollNav ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="Lashe logo" className="w-10 h-10 rounded-full object-cover object-top border border-slate-200 dark:border-zinc-800" />
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
              className="bg-blue-600 text-white py-2 px-5 rounded-3xl text-sm font-semibold hover:bg-blue-700 transition-all duration-300"
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
                <IoMdClose className="text-3xl text-slate-700 dark:text-slate-100" />
              ) : (
                <FiAlignRight className="text-3xl text-slate-700 dark:text-slate-100" />
              )}
            </motion.div>
          </div>
        </div>

        {/* Dropdown menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={nav ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <nav>
            <ul className="text-xl flex flex-col gap-5 text-slate-700 dark:text-slate-100 font-medium py-5 px-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => { Toggle(); }}
                    className="hover:text-blue-600 transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ScrollNavbar;
