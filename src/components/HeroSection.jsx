import React, { useState, useEffect } from "react";
import MyCV from "../assets/DevlasheCv.pdf";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import LahseImage from "../assets/lasheMe.webp";
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
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section
      className="relative z-0 py-12 lg:py-0 lg:flex lg:items-center lg:min-h-[calc(100vh-80px)] text-[#DDDDDD]"
      id="Resume"
    >
      <motion.h1
        aria-hidden="true"
        className="hidden lg:block absolute text-[15em] top-[15%] left-[40%] -translate-x-1/2 -translate-y-1/2 text-transparent bg-clip-text opacity-5 font-bold pointer-events-none"
        style={{ WebkitTextStroke: "3px #273291cd", zIndex: 0 }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        HI
      </motion.h1>
      <div className="containers text-left z-10 w-full relative">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <motion.h1
              initial={{ y: 0 }}
              animate={{ y: 10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl lg:text-5xl font-bold"
            >
              I am Lashe
            </motion.h1>
            <div className="min-h-[100px] lg:min-h-[120px]">
              <motion.p
                className="bg-gradient-to-r from-[#6675ff] to-[#0006ad] text-transparent bg-clip-text text-[40px] leading-[48px] lg:text-7xl lg:leading-[80px] font-extrabold pt-2 lg:pt-6 pb-6 lg:pb-8"
                initial={{ y: 0 }}
                animate={{ y: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {displayedText}
              </motion.p>
            </div>
            {/* About Text */}
            <div className="hidden lg:block">
              <p className="text-xl lg:text-2xl font-medium leading-relaxed mt-6 lg:mt-8 z-10 max-w-2xl">
                I create intuitive, responsive, and visually engaging web
                interfaces that improve user experience and performance.
              </p>
              {/* Download CV Button */}
              <div className="flex items-center gap-4 mt-10">
                <a href={MyCV} download="Toluwalase_CV.pdf">
                  <button className="my-4 border text-2xl px-10 py-2 rounded-3xl bg-gradient-to-r from-[#9da7ff] to-[#2e34d0] text-transparent bg-clip-text border-[#3347ff]">
                    Download CV
                  </button>
                </a>
                <div className="lg:flex gap-3  text-4xl text-[#5f6bd0] hidden  ">
                  <a href="https://x.com/harlesh444/" target="_blank">
                    <FaXTwitter className="hover:text-[#1DA1F2] transition duration-300 cursor-pointer border rounded-full  p-1 border-[#3347ff]  " />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alowoesin-toluwalase-956249337/ "
                    target="_blank"
                  >
                    <FaLinkedinIn className="hover:text-[#0077B5] transition duration-300 cursor-pointer border  rounded-full  p-1 border-[#3347ff]" />
                  </a>
                  <a
                    href="https://www.instagram.com/big_harlesh1/"
                    target="_blank"
                  >
                    {" "}
                    <FaInstagram className="hover:text-[#E1306C] transition duration-300 cursor-pointer border rounded-full  p-1 border-[#3347ff]" />
                  </a>
                  <a href="https://github.com/KidHarlesh/" target="_blank">
                    <FaGithub className="hover:text-gray-400 transition duration-300 cursor-pointer border  rounded-full   p-1 border-[#3347ff]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16 lg:mt-0 z-10 lg:w-1/2">
            <motion.img
              src={LahseImage}
              alt="Lashe Profile Picture"
              loading="lazy"
              className="shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] rounded-3xl w-[85%] lg:w-[65%] max-w-md object-contain border border-[#273291cd] transition-shadow duration-300"
              initial={{
                x: window.innerWidth >= 1024 ? 100 : 0,
                y: window.innerWidth < 1024 ? 100 : 0,
                opacity: 0,
                rotate: 7,
              }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 7 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              whileTap={{ rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* About Text mobile view only */}
        <div className="lg:hidden">
          <motion.p
            className="text-xl font-medium mt-10"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            I create intuitive, responsive, and visually engaging web interfaces
            that improve user experience and performance.
          </motion.p>

          <a href={MyCV} download="Toluwalase_DevlasheCv.pdf">
            <motion.button
              className="my-4 border text-2xl px-10 py-2 rounded-3xl bg-gradient-to-r from-[#9da7ff] to-[#2e34d0] text-transparent bg-clip-text border-[#3347ff]"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Download CV
            </motion.button>
          </a>
        </div>
        {/* Social Icons mobile view only */}
        <motion.div
          className="flex 
        gap-6 mt-4  text-4xl text-[#5f6bd0] lg:hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <a href="https://x.com/harlesh444/" target="_blank">
            <FaXTwitter className="hover:text-[#1DA1F2] transition duration-300 cursor-pointer border rounded-full  p-1 border-[#3347ff] " />
          </a>
          <a
            href="https://www.linkedin.com/in/alowoesin-toluwalase-956249337/ "
            target="_blank"
          >
            <FaLinkedinIn className="hover:text-[#0077B5] transition duration-300 cursor-pointer border  rounded-full  p-1 border-[#3347ff]" />
          </a>
          <a href="https://www.instagram.com/big_harlesh1/" target="_blank">
            {" "}
            <FaInstagram className="hover:text-[#E1306C] transition duration-300 cursor-pointer border rounded-full  p-1 border-[#3347ff]" />
          </a>
          <a href="https://github.com/KidHarlesh/" target="_blank">
            <FaGithub className="hover:text-gray-400 transition duration-300 cursor-pointer border  rounded-full   p-1 border-[#3347ff]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
