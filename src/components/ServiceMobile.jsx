import React, { useState } from "react";
import { GoArrowDownRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const ServiceMobile = () => {
  const [activeLink, setActiveLink] = useState("webDev");
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleArrow = (linkName) => {
    if (activeLink === linkName) {
      setActiveLink(null);
    } else {
      setActiveLink(linkName);
    }
  };

  const isActive = (name) =>
    (activeLink === name && !hoveredLink) || hoveredLink === name;

  return (
    <section className="bg-slate-50 dark:bg-zinc-950 lg:min-h-[80vh] pt-10" id="Service">
      <div className="container py-10 lg:pt-20 ">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold py-5 text-slate-900 dark:text-slate-50"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Quality Service
        </motion.h1>

        <motion.p
          className="text-center text-base lg:text-lg font-normal text-slate-600 dark:text-slate-200 pb-10 lg:pb-24 lg:px-60"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Clean, purposeful work from pixel-perfect interfaces to polished video content.
        </motion.p>

        <div className="lg:flex items-stretch lg:gap-8">
          {/* Web Development */}
          <motion.div
            className="border-b lg:border lg:border-slate-200 dark:border-zinc-800 lg:bg-white dark:lg:bg-zinc-900 lg:shadow-sm lg:rounded-2xl lg:flex-1 overflow-hidden transition-shadow hover:shadow-md"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <button
              type="button"
              onClick={() => toggleArrow("webDev")}
              onMouseEnter={() => setHoveredLink("webDev")}
              onMouseLeave={() => setHoveredLink(null)}
              className={`w-full text-left transition-all duration-300 p-6 lg:p-8 rounded-2xl ${
                isActive("webDev") ? "bg-blue-600 text-white lg:bg-blue-50 dark:lg:bg-blue-900/30 lg:text-slate-900 dark:lg:text-slate-100" : "text-slate-900 dark:text-slate-200"
              }`}
            >
              <div className="pb-4 lg:pb-8 flex items-center justify-between">
                <h2 className={`text-xl lg:text-2xl font-bold ${isActive("webDev") ? "text-white lg:text-blue-700 dark:lg:text-blue-400" : "text-slate-900 dark:text-slate-50"}`}>
                  1. WEB DEVELOPMENT
                </h2>
                {activeLink === "webDev" ? (
                  <FiArrowUpRight className={`text-2xl flex-shrink-0 ${isActive("webDev") ? "text-white lg:text-blue-600 dark:lg:text-blue-400" : "text-slate-400 dark:text-slate-500"}`} />
                ) : (
                  <GoArrowDownRight className="text-2xl flex-shrink-0 text-slate-400 dark:text-slate-500" />
                )}
              </div>
              <p className={`font-medium text-base lg:text-lg ${isActive("webDev") ? "text-blue-100 lg:text-slate-600 dark:lg:text-slate-300" : "text-slate-500 dark:text-slate-200"}`}>
                Optimised, responsive websites built for speed, usability, and real-world results.
              </p>
            </button>
          </motion.div>

          {/* Video Editing */}
          <motion.div
            className="pt-5 lg:pt-0 lg:border lg:border-slate-200 dark:border-zinc-800 lg:bg-white dark:lg:bg-zinc-900 lg:shadow-sm lg:rounded-2xl lg:flex-1 overflow-hidden transition-shadow hover:shadow-md"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <button
              type="button"
              onClick={() => toggleArrow("video")}
              onMouseEnter={() => setHoveredLink("video")}
              onMouseLeave={() => setHoveredLink(null)}
              className={`w-full text-left transition-all duration-300 p-6 lg:p-8 rounded-2xl ${
                isActive("video") ? "bg-blue-600 text-white lg:bg-blue-50 dark:lg:bg-blue-900/30 lg:text-slate-900 dark:lg:text-slate-100" : "text-slate-900 dark:text-slate-200"
              }`}
            >
              <div className="pb-4 lg:pb-8 flex items-center justify-between">
                <h2 className={`text-xl lg:text-2xl font-bold ${isActive("video") ? "text-white lg:text-blue-700 dark:lg:text-blue-400" : "text-slate-900 dark:text-slate-50"}`}>
                  2. VIDEO EDITING
                </h2>
                {activeLink === "video" ? (
                  <FiArrowUpRight className={`text-2xl flex-shrink-0 ${isActive("video") ? "text-white lg:text-blue-600 dark:lg:text-blue-400" : "text-slate-400 dark:text-slate-500"}`} />
                ) : (
                  <GoArrowDownRight className="text-2xl flex-shrink-0 text-slate-400 dark:text-slate-500" />
                )}
              </div>
              <p className={`font-medium text-base lg:text-lg ${isActive("video") ? "text-blue-100 lg:text-slate-600 dark:lg:text-slate-300" : "text-slate-500 dark:text-slate-200"}`}>
                Polished edits, smooth transitions, and engaging visuals that leave a lasting impression.
              </p>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMobile;
