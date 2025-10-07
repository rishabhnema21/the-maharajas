import React from 'react';
import Hero from '../components/home/Hero';
import Navigation from '../components/Navigation';
import Intro from '../components/home/Intro';
import { Fluid } from '@whatisjery/react-fluid-distortion';
import { EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';
import FinalHome from '../components/home/FinalHome';

const Home = () => {
  return (
    <main className="relative min-h-screen w-full bg-[#070302] overflow-hidden">
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-30 opacity-40">
        <Canvas
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
        >
          <EffectComposer>
            <Fluid
              fluidColor="#808080"
              rainbow={false}
              showBackground={false}
              intensity={20}
              force={3}
              distortion={2}
              radius={0.3}
              curl={10}
              swirl={20}
              velocityDissipation={0.99}
              densitionDissipation={0.95}
              pressure={0.80}
            />
          </EffectComposer>
        </Canvas>
      </div>


      <Navigation />
      <Hero />
      <Intro />
      <FinalHome />
    </main>
  );
};

export default Home;
