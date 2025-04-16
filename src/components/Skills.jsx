import React from 'react'
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="bg-gradient-to-r from-[#000428] to-[#020330] lg:h-screen ">
      <div className="text-[#DDDDDD]">
        <motion.h1
          className="bg-gradient-to-r from-[#6675ff] to-[#0006ad] text-transparent bg-clip-text text-3xl lg:text-6xl text-center font-extrabold py-5  "
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Skills
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
      </div>
    </section>
  );
}

export default Skills