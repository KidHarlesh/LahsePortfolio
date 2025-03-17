import React, { useState, useContext } from "react";
import Logo from "../assets/lasheToolsBg.png";
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ScrollNavbar from "./ScrollNavbar";
import StaticMenu from "./StaticMenu";


const MobileNavbar = () => {
  const [nav, setNav] = useState(false);
  const Toggle = () => {
    setNav(!nav);
  };
  return (
    <section>
      <div className="lg:hidden">
        <div className="container p-5">
          <div className="flex justify-between items-center">
            <a href="#">
              <motion.img
                animate={{ x: -10 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={Logo}
                alt="logo"
                className="w-[44px] max-h-[92px]"
              />
            </a>
            <div className="flex justify-between items-center gap-8">
              <button className="border py-4 px-7 rounded-3xl text-lg font-semibold text-white bg-gradient-to-r from-[#000428] to-[#040762] border-[#200e42]">
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
                  <IoMdClose className="text-5xl text-white" onClick={Toggle} />
                ) : (
                  <FiAlignRight
                    className="text-5xl text-white"
                    onClick={Toggle}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
        {/* ✅ Passing nav and onclick as props  */}
        <StaticMenu nav={nav} onclick={Toggle} />
        <ScrollNavbar />
      </div>
      <Navbar />
    </section>
  );
};

export default MobileNavbar;
