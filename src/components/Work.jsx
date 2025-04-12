import React, { useState } from "react";
import { AllWorks } from "../constant";

const Work = () => {
  const [category, setCategory] = useState("all");

  const showAll = category === "all"? AllWorks: AllWorks.filter(work => work.category === category);
  const FirstShowAll = showAll.slice(0, 2);
   const SecondShowAll = showAll.slice(2, 4);

  return (
    <section
      className="  bg-gradient-to-r from-[#000428] to-[#020330]  text-[#DDDDDD] pb-20 "
      id="Work"
    >
      <div className="containers  pt-10 ">
        <div>
          <h1 className="bg-gradient-to-r from-[#0006ad] to-[#6675ff] text-transparent bg-clip-text text-3xl lg:text-6xl text-center font-extrabold py-5  ">
            My Recent works
          </h1>
          <p className="text-center text-base lg:text-lg font-semibold  pb-10 lg:pb-10 lg:px-60 ">
            Bringing your vision to life with seamless digital experiences that
            blend creativity and functionality to engage your audience.
          </p>
        </div>

        <div className="flex justify-center pb-8">
          <div className=" border flex items-center gap-10 py-2 px-4 w-fit rounded-3xl bg-black border-[#200e42]">
            <button
              className={
                category === "all" ? "bg-[#200e42] rounded-3xl p-1" : ""
              }
              onClick={() => setCategory("all")}
            >
              All
            </button>
            <button
              className={
                category === "website" ? " bg-[#200e42]  rounded-3xl p-1  " : ""
              }
              onClick={() => setCategory("website")}
            >
              Website
            </button>
            <button
              className={
                category === "game" ? " bg-[#200e42] rounded-3xl p-1 " : ""
              }
              onClick={() => setCategory("game")}
            >
              Games
            </button>
            <button
              className={
                category === "video" ? " bg-[#200e42] rounded-3xl p-1 " : ""
              }
              onClick={() => setCategory("video")}
            >
              video
            </button>
          </div>
        </div>
        <div className=" flex-col  lg:flex-row flex gap-10 justify-center mt-10  ">
          {FirstShowAll.map((work) => (
            <div
              key={work.id}
              className=" border-[30px] border-b-0   lg:border-[40px]   lg:border-b-0 rounded-xl border-[#200e42]"
            >
              <img src={work.image} alt="" className="lg:h-96 h-72 " />
            </div>
          ))}
        </div>

        <div className="flex-col  lg:flex-row flex gap-10 justify-center mt-10  ">
          {" "}
          {SecondShowAll.map((work) => (
            <div
              key={work.id}
              className=" border-[30px] border-b-0   lg:border-[40px]   lg:border-b-0 rounded-xl border-[#200e42]"
            >
              <img src={work.image} alt="" className="lg:h-96 h-72 " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
