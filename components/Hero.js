"use client";
import { styles } from "@/styles";
import React from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text] = useTypewriter({
    words: [" Sunil Reddy", "  A Developer"],

    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="relative w-full h-screen mx-auto sm:px-16 px-5 sm:pt-0 pt-6">
      <div className="flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-56 h-52 violet-gradient" />
        </div>
        <div className="flex flex-col gap-5 w-full  ">
          <h1
            className={`font-black lg:text-[80px] sm:text-[55px] xs:text-[45px] text-[31px] lg:leading-[98px] mt-2 text-white`}
          >
            I'm <span className="text-[#915eff]">{text}</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[20px] lg:leading-[40px]">
            Full Stack Web  And <br className="md:hidden block" /> Blockchain
            Developer{" "}
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
