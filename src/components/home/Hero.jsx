import React from "react";
import Badge from "../Badge";

const Hero = () => {
  return (
    <section className='relative overflow-x-hidden min-h-screen w-screen p-4 bg-[url("/herobg.webp")] bg-cover bg-no-repeat bg-[position:30%_70%]'>
      <div
        className="absolute inset-0 pointer-events-none w-full h-full z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 45% 40%, transparent 0%, transparent 35%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0.85) 100%),
            radial-gradient(circle at 20% 0%, rgba(0,0,0,0.4) 0%, transparent 30%),
            radial-gradient(circle at 80% 20%, rgba(0,0,0,0.35) 0%, transparent 5%),
            radial-gradient(circle at 90% 85%, rgba(0,0,0,0.45) 0%, transparent 10%)
          `,
        }}
      />

      <div className="text-[#f9f3d9]  flex flex-col md:flex-row justify-between md:items-center p-2 md:p-4 z-10 absolute bottom-[0%] md:bottom-[10%] w-full">
        <h1 className="text-9xl md:text-[16rem] leading-18 md:leading-32 lg:leading-28 font-[jorick] text-shadow-lg text-shadow-black">
          <span className="text-5xl leading-10 md:leading-none md:text-7xl block">
            the
          </span>
          <span className="block">
            MAHA
            <wbr />
            RAJAS
          </span>
        </h1>
        <div className="mt-10 md:mt-32 md:mr-12">
          <Badge />
        </div>
      </div>
    </section>
  );
};

export default Hero;
