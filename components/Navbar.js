"use client"
import React from "react";
import Image from "next/image";

import { useState } from "react";
import { navLinks } from "@/data";
import Link from "next/link";
import { close, menu } from "@/public/assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`w-full  sm:px-16 px-5 sm:py-10 py-6 flex justify-between items-center `}
    >
      <div className=" flex  items-center justify-center gap-3 ">
        <Link href="/">
          <Image
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="w-20"
            src="/headLogo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Link>

        <h3 className="text-2xl font-semibold sm:block hidden">
          Sunil | Portfolio
        </h3>
      </div>
      <ul className={` gap-8 hidden lg:flex`}>
        {navLinks.map((link) => (
          <li
            onClick={() => setActive(link.title)}
            className={`text-2xl hover ${
              active === link.title ? "active" : "hover"
            }`}
            key={link.id}
          >
            <Link href={`#${link.id}`}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-items-start flex-col items-end lg:hidden ">
        <Image
          onClick={() => {
            setToggle(!toggle);
          }}
          className="w-6 z-20"
          src={toggle ? close : menu}
          width={500}
          height={500}
          alt="menu"
        />
        {toggle && (
          <div className="p-6  black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
            <ul className={` gap-5 flex flex-col lg:block items-center`}>
              {navLinks.map((link) => (
                <li
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  className={`text-2xl hover ${
                    active === link.title ? "active" : "hover"
                  }`}
                  key={link.id}
                >
                  <Link className="" href={`#${link.id}`}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
