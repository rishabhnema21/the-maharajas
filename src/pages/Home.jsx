import React from 'react';
import Hero from '../components/home/Hero';
import Navigation from '../components/Navigation';
import Intro from '../components/home/Intro';
import FinalHome from '../components/home/FinalHome';

const Home = () => {
  return (
    <main className="relative min-h-screen w-full bg-[#070302] overflow-hidden">
      <Navigation />
      <Hero />
      <Intro />
      <FinalHome />
    </main>
  );
};

export default Home;
