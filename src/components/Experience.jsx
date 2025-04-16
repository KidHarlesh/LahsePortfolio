import React from 'react'
import { LiaCertificateSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { GiGraduateCap } from "react-icons/gi";

export const Experience = () => {
  return (
    <section className="bg-[rgb(5,7,9)] lg:h-screen  ">
      <div className="containers py-24 lg:pt-20 lg:flex gap-20 w-max ">
        <div className='w-full'>
          <motion.div
            className="flex items-center gap-5"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LiaCertificateSolid className="text-[#6675ff] text-5xl" />
            <h1 className="bg-gradient-to-r from-[#6675ff] to-[#0006ad] text-transparent bg-clip-text text-4xl lg:text-5xl text-center font-extrabold py-5">
              Experience
            </h1>
          </motion.div>
          <motion.div
            className=" p-4 rounded-xl bg-[#020330] hover:bg-[#5141ff] text-[#5141ff] hover:text-[#DDDDDD] border-0"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-base font-semibold lg:text-lg hover:text-[#DDDDDD] pb-2 ">
              2025
            </p>
            <h1 className="text-[#DDDDDD] text-lg lg:text-xl pb-2 font-semibold ">
              {" "}
              HNG Internship{" "}
              <span className="text-sm lg:text-base">(Remote)</span>
            </h1>
            <p className="text-[#DDDDDD] text-sm lg:text-base">
              Remote,Nigeria
            </p>
          </motion.div>
          <motion.div
            className=" p-4 rounded-xl bg-[#020330] hover:bg-[#5141ff] text-[#5141ff] hover:text-[#DDDDDD] border-0 mt-8"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-base font-semibold  hover:text-[#DDDDDD] pb-2 lg:text-lg  ">
              2024 - 2025
            </p>
            <h1 className="text-[#DDDDDD] text-lg pb-2 font-semibold lg:text-xl ">
              {" "}
              Frootify Internship{" "}
              <span className="text-sm lg:text-base">(hybrid)</span>
            </h1>
            <p className="text-[#DDDDDD] text-sm  lg:text-base ">
              Abeokuta,ogun-state Nigeria
            </p>
          </motion.div>
          <motion.div
            className=" p-4 rounded-xl bg-[#020330] hover:bg-[#5141ff] text-[#5141ff] hover:text-[#DDDDDD] border-0 mt-8 "
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-base font-semibold  hover:text-[#DDDDDD] pb-2  lg:text-lg">
              2024 - 2025
            </p>
            <h1 className="text-[#DDDDDD] text-lg lg:text-xl pb-2 font-semibold ">
              TECH-ZONE ACADEMY
              <span className="text-sm lg:text-base"> (hybrid)</span>
            </h1>
            <p className="text-[#DDDDDD] text-sm  lg:text-base">
              Abeokuta, Ogun State, Nigeria
            </p>
          </motion.div>
        </div>
        <div className='w-full'>
          <motion.div
            className="flex items-center gap-5 lg:mt-0 mt-5"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <GiGraduateCap className="text-[#6675ff] text-5xl" />
            <h1 className="bg-gradient-to-r from-[#6675ff] to-[#0006ad] text-transparent bg-clip-text text-4xl lg:text-5xl text-center font-extrabold py-5">
              My Education
            </h1>
          </motion.div>

          <motion.div
            className=" p-4 rounded-xl bg-[#020330] hover:bg-[#5141ff] text-[#5141ff] hover:text-[#DDDDDD] border-0 lg:mt-0 mt-8"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-base font-semibold lg:text-lg   hover:text-[#DDDDDD] pb-2 ">
              2018 - 2022
            </p>
            <h1 className="text-[#DDDDDD] lg:text-xl text-lg pb-2 font-semibold ">
              Federal University of Oye-Ekiti, Ekiti State
            </h1>
            <p className="text-[#DDDDDD] text-sm  lg:text-base">
              Oye-Ekiti, Ekiti-State, Nigeria.
            </p>
          </motion.div>

          <motion.div
            className=" p-4 rounded-xl bg-[#020330] hover:bg-[#5141ff] text-[#5141ff] hover:text-[#DDDDDD] border-0 mt-8"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-base font-semibold lg:text-lg  hover:text-[#DDDDDD] pb-2 ">
              2024
            </p>
            <h1 className="text-[#DDDDDD] text-lg pb-2 lg:text-xlfont-semibold ">
              Tech-Zone Academy{" "}
              <span className="text-sm lg:text-base">
                ( Front-End Development Certification)
              </span>{" "}
            </h1>
            <p className="text-[#DDDDDD] text-sm lg:text-base ">
              Abeokuta, Ogun State, Nigeria
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
