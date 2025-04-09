import React, { useState } from "react";
import { AllWorks } from "../constant";

const Work = () => {
  const [all, setAll] = useState();
  const [web, setWeb] = useState();
  const [video, setVideo] = useState();

  return (
    <section
      className="  bg-gradient-to-r from-[#000428] to-[#020330] lg:h-screen text-[#DDDDDD] "
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
            <button className="">All</button>
            <button className="">Website</button>
            <button className="">Games</button>
            <button className="">video</button>
          </div>
        </div>
        {/* {AllWorks.map((work, index) => (
          <div key={index}>
            <div>
              <img src={work.image} alt="" />
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Work;
