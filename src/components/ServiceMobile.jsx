import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <section className="bg-[rgb(5,7,9)] lg:h-screen pt-10 " id="Service">
      <div className="text-[#DDDDDD] containers py-10 lg:pt-20">
        <motion.h1
          className="bg-gradient-to-r from-[#0006ad] to-[#6675ff] text-transparent bg-clip-text text-3xl lg:text-6xl text-center font-extrabold py-5  "
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Quality Service
        </motion.h1>

        <motion.p
          className="text-center text-base lg:text-lg font-semibold  pb-10 lg:pb-24 lg:px-60  "
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Bringing your vision to life with seamless digital experiences that
          blend creativity and functionality to engage your audience.
        </motion.p>
        <div className="lg:flex items-center lg:gap-10 ">
          {/* Web Development */}
          <motion.div
            className=" border-b pb-5 lg:rounded-3xl  lg:border-8 lg:p-0 border-[#273291cd] "
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link
              to="#"
              onClick={() => toggleArrow("webDev")}
              onMouseEnter={() => setHoveredLink("webDev")}
              onMouseLeave={() => setHoveredLink(null)}
              className={`block   transition-all duration-300 p-4 lg:p-6   rounded-xl ${
                (activeLink === "webDev" && !hoveredLink) ||
                hoveredLink === "webDev"
                  ? "bg-[#5141ff]"
                  : ""
              }`}
            >
              <div className="pb-4  lg:pb-8 flex items-center justify-between ">
                <h2 className="text-xl lg:text-2xl lg:font-bold font-semibold ">
                  01 WEB DEVELOPMENT
                </h2>
                {activeLink === "webDev" ? (
                  <FiArrowUpRight />
                ) : (
                  <GoArrowDownRight />
                )}
              </div>
              <p className="font-medium text-lg lg:text-xl ">
                Optimized websites that adapt to any device, ensuring speed and
                usability.
              </p>
            </Link>
          </motion.div>

          {/* Web Development ends */}

          {/* Video Editing start*/}

          <motion.div
            className="pt-5  lg:border-8 lg:p-0 border-[#273291cd] lg:rounded-3xl "
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link
              to="#"
              onClick={() => toggleArrow("video")}
              onMouseEnter={() => setHoveredLink("video")}
              onMouseLeave={() => setHoveredLink(null)}
              className={` block transition-all duration-300 p-4 lg:p-6  rounded-xl ${
                (activeLink === "video" && !hoveredLink) ||
                hoveredLink === "video"
                  ? "bg-[#5141ff]"
                  : ""
              }`}
            >
              <div className="pb-4  lg:pb-8 flex items-center justify-between">
                <h2 className="text-xl lg:text-2xl lg:font-bold font-semibold">
                  02 VIDEO EDITING
                </h2>
                {activeLink === "video" ? (
                  <FiArrowUpRight />
                ) : (
                  <GoArrowDownRight />
                )}
              </div>
              <p className="font-medium text-lg lg:text-xl">
                Polished edits, smooth transitions, and visuals that leave a
                lasting impression.
              </p>
            </Link>
          </motion.div>

          {/* Video Editing ends */}
        </div>
      </div>
    </section>
  );
};

export default ServiceMobile;
