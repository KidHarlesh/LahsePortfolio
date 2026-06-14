import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { GiGraduateCap } from "react-icons/gi";

const ExperienceCard = ({ year, title, subtitle, location, delay = 0 }) => (
  <motion.div
    className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 mt-5 group"
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    viewport={{ once: true }}
  >
    <p className="text-sm font-bold text-blue-600 dark:text-blue-400 pb-2 uppercase tracking-wide">{year}</p>
    <h3 className="text-slate-900 dark:text-slate-50 text-lg lg:text-xl font-bold pb-1 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
      {title}{" "}
      {subtitle && <span className="text-slate-500 dark:text-slate-200 text-sm font-medium ml-1">{subtitle}</span>}
    </h3>
    <p className="text-slate-600 dark:text-slate-200 text-sm font-medium mt-1">{location}</p>
  </motion.div>
);

export const Experience = () => {
  return (
    <section className="bg-slate-50 dark:bg-zinc-950" id="Experience">
      <div className="container py-12 lg:py-24 lg:flex lg:gap-16 w-full">
        {/* Experience column */}
        <div className="w-full">
          <motion.div
            className="flex items-center gap-4 overflow-hidden mb-6"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl flex-shrink-0">
               <LiaCertificateSolid className="text-blue-600 dark:text-blue-400 text-4xl" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
              Experience
            </h2>
          </motion.div>

          <ExperienceCard
            year="2025"
            title="GFA Technologies – Remsana"
            subtitle="(Hybrid)"
            location="Abeokuta, Ogun State, Nigeria"
            delay={0}
          />
          <ExperienceCard
            year="2025"
            title="HNG Internship"
            subtitle="(Remote)"
            location="Remote, Nigeria"
            delay={0.1}
          />
          <ExperienceCard
            year="2024 – 2025"
            title="Frootify Internship"
            subtitle="(Hybrid)"
            location="Abeokuta, Ogun State, Nigeria"
            delay={0.2}
          />
          <ExperienceCard
            year="2024 – 2025"
            title="Tech-Zone Academy"
            subtitle="(Hybrid)"
            location="Abeokuta, Ogun State, Nigeria"
            delay={0.3}
          />
        </div>

        {/* Education column */}
        <div className="w-full mt-16 lg:mt-0">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl flex-shrink-0">
               <GiGraduateCap className="text-blue-600 dark:text-blue-400 text-4xl" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
              Education
            </h2>
          </motion.div>

          <ExperienceCard
            year="2018 – 2022"
            title="Federal University of Oye-Ekiti"
            location="Oye-Ekiti, Ekiti State, Nigeria"
            delay={0}
          />
          <ExperienceCard
            year="2024"
            title="Tech-Zone Academy"
            subtitle="(Front-End Development Certification)"
            location="Abeokuta, Ogun State, Nigeria"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
};
