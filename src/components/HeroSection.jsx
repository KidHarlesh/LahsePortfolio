import React, { useState, useEffect } from "react";
import MyCV from "../assets/CV.pdf";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import LahseImage from "../assets/lashe.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const text = "Front-End Web Developer.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50); // Adjust typing speed here (100ms per letter)
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section className="z-10 lg:pt-16 lg:containers lg:h-screen pb-40">
      <div className="containers mt-8 text-left">
        <div className="lg:flex">
          <div className="">
            <motion.h1
              initial={{ y: 0 }}
              animate={{ y: 10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl  lg:text-4xl font-bold text-[#DDDDDD] "
            >
              I am Lashe
            </motion.h1>

            <motion.p
              className="bg-gradient-to-r from-[#6675ff] to-[#0006ad] text-transparent bg-clip-text text-[40px] leading-[48px] lg:text-7xl  font-extrabold  pt-2 lg:pt-4 "
              initial={{ y: 0 }}
              animate={{ y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {displayedText}
            </motion.p>

            {/* About Text */}
            <div className="hidden lg:block">
              <p className="text-2xl font-medium text-[#DDDDDD] mt-10 ">
                I create intuitive, responsive, and visually engaging web
                interfaces that improve user experience and performance.
              </p>

              {/* Download CV Button */}
              <div className="flex items-center gap-4 mt-10">
                <a href={MyCV} download="Toluwalase_CV.pdf">
                  <button className="my-4 border text-xl px-10 py-2 rounded-3xl bg-gradient-to-r from-[#9da7ff] to-[#2e34d0] text-transparent bg-clip-text border-[#3347ff]">
                    Download CV
                  </button>
                </a>
                <div
                  className="lg:flex 
        gap-3  text-3xl text-[#5f6bd0] hidden  "
                >
                  <a href="https://x.com/harlesh444/" target="_blank">
                    <FaXTwitter className="hover:text-[#1DA1F2] transition duration-300 cursor-pointer border rounded-full  p-1 border-[#3347ff] " />
                  </a>
                  <a href="">
                    <FaLinkedinIn className="hover:text-[#0077B5] transition duration-300 cursor-pointer border  rounded-full  p-1 border-[#3347ff]" />
                  </a>
                  <a href="">
                    {" "}
                    <FaInstagram className="hover:text-[#E1306C] transition duration-300 cursor-pointer border rounded-full  p-1 border-[#3347ff]" />
                  </a>
                  <a href="">
                    <FaGithub className="hover:text-gray-400 transition duration-300 cursor-pointer border  rounded-full   p-1 border-[#3347ff]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-20 z-0 lg:mt-0">
            <motion.img
              src={LahseImage}
              alt="LASHEIMAGE"
              className="rounded-3xl w-[80%]  lg:w-[70%] border border-[#273291cd]"
              initial={{ rotate: 7 }}
              whileHover={{ rotate: 0 }}
              whileTap={{ rotate: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* About Text */}
        <div className="lg:hidden">
          <p className="text-xl font-medium text-[#DDDDDD] mt-10 ">
            I create intuitive, responsive, and visually engaging web interfaces
            that improve user experience and performance.
          </p>

          {/* Download CV Button */}
          <a href={MyCV} download="Toluwalase_CV.pdf">
            <button className="my-4 border text-xl px-10 py-2 rounded-3xl bg-gradient-to-r from-[#9da7ff] to-[#2e34d0] text-transparent bg-clip-text border-[#3347ff]">
              Download CV
            </button>
          </a>
        </div>

        {/* Social Icons */}
        <div
          className="flex 
        gap-6 mt-4  text-3xl text-[#5f6bd0] lg:hidden"
        >
          <a href="https://x.com/harlesh444/" target="_blank">
            <FaXTwitter className="hover:text-[#1DA1F2] transition duration-300 cursor-pointer border rounded-full  p-1 border-[#3347ff] " />
          </a>
          <a href="https://www.linkedin.com/in/alowoesin-toluwalase-956249337/">
            <FaLinkedinIn className="hover:text-[#0077B5] transition duration-300 cursor-pointer border  rounded-full  p-1 border-[#3347ff]" />
          </a>
          <a href="https://www.instagram.com/big_harlesh1/">
            {" "}
            <FaInstagram className="hover:text-[#E1306C] transition duration-300 cursor-pointer border rounded-full  p-1 border-[#3347ff]" />
          </a>
          <a href="https://www.instagram.com/big_harlesh1/">
            <FaGithub className="hover:text-gray-400 transition duration-300 cursor-pointer border  rounded-full   p-1 border-[#3347ff]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
