import React, { useState } from "react";
import { AllWorks } from "../constant";
import { motion } from "framer-motion";

const Work = () => {
  const [category, setCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  const showAll =
    category === "all"
      ? AllWorks
      : AllWorks.filter((work) => work.category === category);

  const categories = ["all", "website", "game", "video"];

  return (
    <section
      className="bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-50 pb-20 border-b border-slate-100 dark:border-zinc-800"
      id="Work"
    >
      <div className="containers pt-10 pb-10">
        <div>
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold py-5 text-slate-900 dark:text-slate-50"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            My Recent Work
          </motion.h1>
          <motion.p
            className="text-center text-base lg:text-lg font-normal text-slate-600 dark:text-slate-200 pb-10 lg:pb-10 lg:px-60"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            A selection of projects I have built — websites, games, and creative work.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center pb-12">
          <div className="border border-slate-200 dark:border-zinc-800 flex flex-wrap justify-center items-center gap-2 py-2 px-3 rounded-3xl bg-slate-50 dark:bg-zinc-900 shadow-sm max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-3xl text-sm font-semibold transition-all duration-300 ${
                  category === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-zinc-800"
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8 mt-6 overflow-hidden">
          {showAll.map((work, index) => (
            <motion.div
              key={work.id}
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden lg:w-[47%] w-full shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {work.video ? (
                <video
                  src={work.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-64 lg:h-80 w-full object-cover"
                />
              ) : (
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-64 lg:h-80 w-full object-cover"
                />
              )}

              {/* Hover overlay */}
              {hoveredId === work.id && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-t border-slate-100 dark:border-zinc-800 px-6 py-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 pb-1 truncate">{work.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-200 line-clamp-2">{work.desc}</p>
                    </div>
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                    >
                      {work.buttonText}
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
