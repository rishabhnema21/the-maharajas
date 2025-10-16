import React from "react";
import Logo from "../Logo";
import { li } from "framer-motion/client";
import { Link } from "react-router";

const Footer = () => {

    const navLinks = ["Home", "About", "Empires", "Legacy"];

  return (
    <div className="p-2 md:p-6 bg-[#0b0707]">
      <div className="bg-gradient-to-tl rounded-t-3xl pb-4 rounded-b-3xl from-[#111] to-[#242424] text-3xl">
        <div className="flex justify-between items-center">
          <div className="ml-12 inline-block mt-9">
            <Logo />
          </div>

          <ul className="mt-9 flex gap-8">
            {navLinks.map((link, index) => (
                <li key={index} className="text-white text-xl font-[ethnic] mb-3">
                    <a href="">{link}</a>
                </li>
            ))}
          </ul>

          <p className="text-sm mt-3 text-gray-500 text-center mr-12 md:text-right">
          © {new Date().getFullYear()} The Maharajas. <br /> All rights reserved.
        </p>
        </div>

        <div className="py-2 mr-12 ml-12 mt-16 flex items-center justify-center rounded-3xl text-center">
            <h1 className="bg-gradient-to-tl from-[#700202] to-[#b34848] bg-clip-text text-transparent font-[ethnic] text-[12rem]">The Maharajas</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
