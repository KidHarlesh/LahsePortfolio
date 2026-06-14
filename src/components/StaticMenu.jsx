import React, { useContext } from "react";
import { motion } from "framer-motion";
import { NavContext } from "../components/NavContext";

const StaticMenu = ({ nav, onClick }) => {
  const navLinks = useContext(NavContext);

  return (
    <div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          nav ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden fixed w-full z-50"
      >
        <nav className="bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 min-h-screen">
          <ul className="text-2xl flex flex-col gap-7 text-slate-800 dark:text-slate-200 font-medium py-6 px-6">
            {navLinks &&
              navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={onClick}
                    className="hover:text-blue-600 transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

export default StaticMenu;
