import React, { useState, useEffect } from "react";
import MyCV from "../assets/LasheCv.pdf";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import LahseImage from "../assets/LasheImageHeroRemovebgA.webp";
import { motion } from "framer-motion";

const HeroSection = () => {
  const roles = ["Front-End Developer.", "Creative Coder."];
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const socialLinks = [
    { href: "https://x.com/harlesh444/", icon: <FaXTwitter />, label: "X (Twitter)" },
    { href: "https://www.linkedin.com/in/alowoesin-toluwalase-956249337/", icon: <FaLinkedinIn />, label: "LinkedIn" },
    { href: "https://www.instagram.com/big_harlesh1/", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://github.com/KidHarlesh/", icon: <FaGithub />, label: "GitHub" },
  ];

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden" id="Resume">
      {/* Background Layer (z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none ">
        {/* Premium Subtle Grid Background masked to fade at edges */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_10%,transparent_80%)] lg:[mask-image:radial-gradient(ellipse_60%_60%_at_30%_50%,#000_10%,transparent_80%)]"></div>
        
        {/* Soft blue ambient glow behind text to give it weight */}
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-blue-300/30 dark:bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-800/10 rounded-full blur-[120px]" />
      </div>

      <div className="container w-full flex-1 relative z-10 flex flex-col lg:flex-row lg:justify-center lg:gap-8 xl:gap-12 pt-28 lg:pt-0">

          {/* Left — Text content */}
          <div className="lg:w-[48%] self-center flex flex-col justify-center items-center lg:items-start text-center lg:text-left pb-12 lg:pb-0 z-20">
            <motion.span
              className="inline-block text-sm lg:text-base font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-200 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Hi there! I'm
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-slate-900 dark:text-slate-50 mb-2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              A <span className="text-blue-600">Front-End</span>
              <br />
              Web Developer
              <br />
              <span className="text-blue-600">Lashe</span>
            </motion.h1>

            {/* Typing effect subtitle */}
            <motion.div
              className="mt-4 mb-6 min-h-[36px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xl lg:text-2xl font-semibold text-slate-600 dark:text-slate-100">
                {displayedText}
                <span className="animate-pulse text-blue-400 ml-0.5">|</span>
              </span>
            </motion.div>

            <motion.p
              className="text-base lg:text-lg font-normal leading-relaxed text-slate-500 dark:text-slate-200 max-w-lg mb-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              I create intuitive, responsive, and visually engaging web
              interfaces that improve user experience and performance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start items-center gap-5"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <a href={MyCV} download="Toluwalase_CV.pdf">
                <button className="bg-blue-600 text-white text-base font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-[0_6px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5">
                  Download CV
                </button>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <span className="w-11 h-11 text-lg flex items-center justify-center rounded-lg bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-100 border border-slate-200 dark:border-zinc-700 shadow-sm hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            className="lg:w-[45%] flex justify-center self-center w-full z-10"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full flex justify-center">
              <img
                src={LahseImage}
                alt="Lashe — Front-End Web Developer"
                loading="lazy"
                className="w-full max-w-[500px] lg:max-w-[650px] object-contain  pointer-events-none"
                style={{ 
                  maxHeight: "85vh", 
                  WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", 
                  maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" 
                }}
              />
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default HeroSection;
