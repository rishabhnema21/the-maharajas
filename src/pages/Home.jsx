import React from 'react';
import Hero from '../components/home/Hero';
import Navigation from '../components/Navigation';
import Intro from '../components/home/Intro';
import FinalHome from '../components/home/FinalHome';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.main 
    className="relative min-h-screen w-full bg-[#070302] overflow-hidden"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.6, ease: "easeOut"}}
    >
      <Hero />
      <Intro />
      <FinalHome />
    </motion.main>
  );
};

export default Home;
