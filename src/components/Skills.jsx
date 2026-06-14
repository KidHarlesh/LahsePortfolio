import React from "react";
import { motion } from "framer-motion";
import { AllPics } from "../constant";

const Skills = () => {
  return (
    <section
      className="bg-white dark:bg-zinc-950 py-12 lg:py-24 border-b border-slate-100 dark:border-zinc-800"
      id="Skills"
    >
      <div className="text-slate-900 dark:text-slate-50 containers">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold py-5 text-slate-900 dark:text-slate-50"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h1>

        <motion.p
          className="text-center text-base lg:text-lg font-normal text-slate-600 dark:text-slate-200 pb-12 lg:pb-20 lg:px-60"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          The tools and technologies I use to build and ship quality work.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
          {AllPics.map((Pics) => (
            <motion.div
              key={Pics.id}
              className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md rounded-2xl py-6 px-8 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1 cursor-default"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={Pics.imageTwo}
                alt={Pics.skillName || ""}
                className={`${
                  Pics.id === 4
                    ? "w-12 h-12 lg:h-16 lg:w-16"
                    : "w-12 lg:w-16"
                } object-contain grayscale hover:grayscale-0 transition duration-500`}
              />
              {Pics.skillName && (
                <p className="text-sm lg:text-base font-semibold text-slate-700 dark:text-slate-100">
                  {Pics.skillName}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
