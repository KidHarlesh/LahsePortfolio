import React, { useState, useEffect, useRef, useContext } from "react";
import logoLash from "../assets/LasheImageHeroRemovebgA.webp";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { NavContext } from "../components/NavContext";
import { ThemeContext } from "./ThemeContext";
import { useHireMe } from "../components/HireMeContext";

const ScrollNavbarDesktop = ({ onClick }) => {
  const navLinks = useContext(NavContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { handleWhatsAppClick } = useHireMe();
  const [showScrollNav, setShowScrollNav] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show sticky nav only when scrolling UP (user intends to navigate)
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
    <section className="hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 w-full z-50 px-6 bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 shadow-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={showScrollNav ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="pb-4 pt-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-14">
              <a href="#">
                <img src={logoLash} alt="Lashe logo" className="w-10 h-10 rounded-full object-cover object-top border border-slate-200 dark:border-zinc-800" />
              </a>
              <p className="text-slate-500 dark:text-slate-200 font-medium text-base">
                alowoesintoluwalase@gmail.com
              </p>
            </div>
            <ul className="flex justify-between items-center gap-8 text-base text-slate-700 dark:text-slate-100 font-semibold">
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
                className="bg-blue-600 text-white border border-blue-600 px-6 py-2.5 rounded-2xl text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm"
                onClick={handleWhatsAppClick}
              >
                Hire Me!
              </button>
            </div>
          </nav>
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollNavbarDesktop;
