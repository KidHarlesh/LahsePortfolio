import React, { useState, useEffect, useRef, useContext } from "react";
import Logo from "../assets/lasheToolsBg.png";
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { NavContext } from "../components/NavContext";
import { useHireMe } from "../components/HireMeContext";


const ScrollNavbar = ({ onClick }) => {
  const navLinks = useContext(NavContext);
  const [nav, setNav] = useState(false);
  const [showScrollNav, setShowScrollNav] = useState();
  const lastScrollY = useRef(0); 
  const { handleWhatsAppClick } = useHireMe();

  const Toggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowScrollNav(true);
      } else {
        setShowScrollNav(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <motion.div
        className={`fixed top-0 left-0 w-full z-50 py-3 px-6 bg-black  transition-shadow duration-500 ${
          showScrollNav ? "shadow-[0_0_30px_#4f46e5]" : "shadow-none"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={showScrollNav ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <div className=" ">
          <div className=" flex justify-between items-center">
            <a href="#">
              <motion.img
                animate={{ x: -10 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={Logo}
                alt=""
                className="w-[44px] max-h-[92px] "
              />
            </a>
            <div className="flex justify-between items-center gap-8">
              <button
                className="border py-4 px-7 rounded-3xl text-lg font-semibold text-[#DDDDDD]  bg-gradient-to-r from-[#000428] to-[#040762] border-[#200e42]"
                onClick={handleWhatsAppClick}
              >
                Hire Me!
              </button>
              <motion.div
                className="cursor-pointer"
                onClick={Toggle}
                initial={{ rotate: 0, opacity: 1 }}
                animate={{ rotate: nav ? 90 : 0, opacity: 3 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {nav ? (
                  <IoMdClose
                    className="text-5xl  text-[#DDDDDD] "
                    onClick={Toggle}
                  />
                ) : (
                  <FiAlignRight
                    className="text-5xl text-[#DDDDDD] "
                    onClick={Toggle}
                  />
                )}
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              nav ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
            }
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden absolute top-full left-0 w-full bg-[rgb(50,40,150)]  z-40"
          >
            <nav>
              <ul className="text-2xl flex flex-col gap-6 text-[#DDDDDD] font-medium py-5 px-4 h-screen">
                {" "}
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} onClick={Toggle}>
                      {link.name}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollNavbar;
