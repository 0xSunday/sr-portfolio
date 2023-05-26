import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Links from "@/components/Links";
import StarsCanvas from "@/components/canvas/Stars";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> Sunil | Portfolio</title>
        <meta name="sunil reddy" content="sunil reddy personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shotcut icon" href="/srlogo.png" />
      </Head>
      <div className="flex flex-col relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        {/* <Skills /> */}
        <Projects />
        {/* <Experience /> */}

        <div>
          <Contact />
          {/* <StarsCanvas /> */}
          {/* <Links /> */}
        </div>
      </div>
    </>
  );
}
