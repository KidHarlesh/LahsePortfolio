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

  return (
    <section
      className="bg-gradient-to-r from-[#000428] to-[#020330] text-[#DDDDDD] pb-20"
      id="Work"
    >
      <div className="containers pt-10 pb-10">
        <div>
          <motion.h1
            className="bg-gradient-to-r from-[#0006ad] to-[#6675ff] text-transparent bg-clip-text text-3xl lg:text-6xl text-center font-extrabold py-5"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            My Recent works
          </motion.h1>
          <motion.p
            className="text-center text-base lg:text-lg font-semibold pb-10 lg:pb-10 lg:px-60"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Bringing your vision to life with seamless digital experiences that
            blend creativity and functionality to engage your audience.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center pb-8">
          <div className="border flex items-center gap-10 py-1 px-4 w-fit rounded-3xl bg-black border-[#4144e3]">
            {["all", "website", "game", "video"].map((cat) => (
              <button
                key={cat}
                className={
                  category === cat ? "bg-[#6c6eff] rounded-3xl p-2" : ""
                }
                onClick={() => setCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-wrap justify-center gap-10 mt-10 overflow-hidden">
          {showAll.map((work, index) => (
            <motion.div
              key={work.id}
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group border-[15px] border-b-0 lg:border-[25px] lg:border-b-0 rounded-xl border-[#161752] lg:w-[47%] w-full"
            >
              {work.video ? (
                <video
                  src={work.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-64 lg:h-[100%] w-full object-cover rounded-xl"
                />
              ) : (
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-64 lg:h-[100%] w-full object-cover rounded-xl"
                />
              )}

              {hoveredId === work.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-2 bg-[#5141ff]  px-4 h-32 z-10 w-full"
                >
                  <div className="flex items-center gap-5  py-2 px-2 ">
                    <div>
                      <h3 className="sm:text-base md:text-base lg:text-lg font-bold pb-1 lg:mb-2">
                        {work.title}
                      </h3>
                      <p className="text-sm mb-4">{work.desc}</p>
                    </div>

                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-l from-[#000428] to-[#040762] rounded-xl  lg:p-4 p-2   text-xs text-center h-fit w-[60%] lg:w-[50%] transition"
                    >
                      {work.buttonText}
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => alert("View more page is under construction...")}
          className="text-white border px-5 py-2 rounded-2xl bg-gradient-to-l from-[#000428] to-[#040762] text-lg border-[#2137ff] font-semibold mt-6 float-end"
        >
          View more
        </button>
      </div>
    </section>
  );
};

export default Work;
