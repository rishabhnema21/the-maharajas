import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = ["Home", "About", "Empires", "Legacy"];

const overLay = {
  hidden: {
    opacity: 0,
    rotateX: -75,
    scale: 0.95,
    transformOrigin: "top center",
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    rotateX: -75,
    scale: 0.95,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const listItems = {
    hidden: {opacity: 0, y:30},
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }
}


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen])

  return (
    <nav className="fixed w-full p-2 md:p-4  z-50 top-0 left-0 flex justify-between items-center">
      <Logo />

      <button
        className="text-white bg-[#212121] hover:bg-gradient-to-tl hover:from-[#2b2b2b] hover:to-[#111] transition-all duration-200 ease-in-out cursor-pointer h-12 w-12 md:w-14 md:h-14 rounded-full flex justify-center items-center z-[60]"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black/90 backdrop-blur-xl text-white flex flex-col justify-center items-center z-50"
        variants={overLay}
        style={{ perspective: "1200px" }}
        initial="hidden"
        animate="visible"
        exit= "exit"
        >
            <motion.ul className="space-y-8 w-full text-center px-8 font-semibold"
            variants={overLay}>
                {navLinks.map((link, index) => (
                    <motion.li className="text-6xl md:text-7xl hover:text-[5rem] hover:text-[#ffe8ce] transition-all duration-300 mb-5 cursor-pointer font-[ethnic]"
                        key={index}
                        onClick={toggleMenu}
                        variants={listItems}
                    >
                        {link}
                        <hr className="h-[1px] text-gray-600" />
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
    </nav>
  );
};

export default Navigation;
