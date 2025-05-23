import React from 'react'
import { motion } from "framer-motion";
import {AllPics} from "../constant"

const Skills = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#000428] to-[#020330]  py-24 lg:pt-24  pt-12 "
      id="Skills"
    >
      <div className="text-[#DDDDDD] containers">
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
        <div className="flex flex-wrap justify-center gap-5 lg:gap-5 ">
          {AllPics.map((Pics) => (
            <motion.div
              key={Pics.id}
              className="bg-gradient-to-r from-[#0b0e29] to-[#000833] rounded-3xl  py-5 px-12"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="  rounded-3xl w-fit border-0   grayscale hover:grayscale-0 transition duration-500 flex items-center flex-col gap-5  ">
                <img
                  src={Pics.imageTwo}
                  alt=""
                  className={`${
                    Pics.id === 4 
                      ? "w-14 h-14 lg:h-20 lg:w-20"
                      : "w-14 lg:w-20 "
                  } object-contain`}
                />
                <p className="text-2xl font-semibold">{Pics.pargaphtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills