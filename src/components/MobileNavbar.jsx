import React, { useState } from "react";
import Logo from "../assets/lasheToolsBg.png";
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ScrollNavbar from "./ScrollNavbar";


const MobileNavbar = () => {

const [nav, setNav] = useState(false);


const Toggle = () => {
    setNav(!nav);
}
  return (
    <section className=" ">
      <div className=" lg:hidden ">
        <div className="container p-5">
          <div className="flex justify-between items-center">
            <a href="">
              <motion.img
                animate={{ x: -10 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={Logo}
                alt=""
                className="w-[44px] max-h-[92px] "
              />
            </a>
            <div className="flex justify-between items-center gap-8">
              <button className="border py-4 px-7 rounded-3xl text-lg font-semibold text-white  bg-gradient-to-r from-[#000428] to-[#040762] border-[#200e42]">
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
                    className="text-5xl  text-white "
                    onClick={Toggle}
                  />
                ) : (
                  <FiAlignRight
                    className="text-5xl text-white "
                    onClick={Toggle}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            nav ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="overflow-hidden  fixed w-full  h z-50 "
        >
          <nav className="bg-[rgb(50,40,150)] h-screen  ">
            <ul className="text-2xl flex flex-col gap-6 text-white font-medium py-5 px-4">
              <li> SERVICE</li>
              <li>WORKS</li>
              <li>RESUME</li>
              <li>SKILLS</li>
              <li>TESTIMONIALS</li>
              <li>CONTACTS</li>
            </ul>
          </nav>
        </motion.div>
        <ScrollNavbar />
      </div>
      <Navbar />
    </section>
  );
};

export default MobileNavbar;

