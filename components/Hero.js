 "use client"
import { styles } from "@/styles";
import React from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [" Sunil Reddy", "  A Developer"],

    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className=" w-full h-screen mx-auto sm:px-16 px-5 sm:py-10 py-6">
      <div className="flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex flex-col gap-5 w-full  ">
          <h1
            className={`font-black lg:text-[80px] sm:text-[55px] xs:text-[45px] text-[31px] lg:leading-[98px] mt-2 text-white`}
          >
            I'm <span className="text-[#915eff]">{text}</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[20px] lg:leading-[40px]">
            Full Stack Blockchain <br className="md:hidden block" /> And Web
            Developer{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
