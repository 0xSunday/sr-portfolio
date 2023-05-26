"use client";
import React from "react";

import { SectionWrapper } from "./hoc";
import { technologies } from "@/data";
import { BallCanvas } from "./canvas";
const Skills = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className=" text-center sm:text-start font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
        Skills
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas
              icon={technology.icon}
              name={technology.name}
             
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
