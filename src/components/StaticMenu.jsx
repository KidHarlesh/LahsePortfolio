import React, { useContext } from "react"; // ✅ Import useContext
import { motion } from "framer-motion";
import { NavContext } from "../components/NavContext"; // Import NavContext

const StaticMenu = ({ nav, onClick }) => {
  const navLinks = useContext(NavContext); // Get navLinks from context

  return (
    <div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          nav ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        } // Use nav prop
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="overflow-hidden fixed w-full z-50"
      >
        <nav className="bg-[rgb(50,40,150)] h-screen">
          <ul className="text-2xl flex flex-col gap-6 text-white font-medium py-5 px-4">
            {navLinks &&
              navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={onClick}>
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
