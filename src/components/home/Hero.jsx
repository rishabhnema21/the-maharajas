import React from "react";
import Badge from "../Badge";
import Logo from "../Logo";

const Hero = () => {
  return (
    <section className='relative overflow-x-hidden min-h-screen w-screen p-2 md:p-4 bg-[#070302]'>
      <div
        className="absolute z-20 inset-0 pointer-events-none w-full h-full"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%),
            radial-gradient(circle at 15% 15%, rgba(0,0,0,0.5) 0%, transparent 25%),
            radial-gradient(circle at 85% 20%, rgba(0,0,0,0.4) 0%, transparent 20%),
            radial-gradient(circle at 10% 85%, rgba(0,0,0,0.5) 0%, transparent 20%),
            radial-gradient(circle at 92% 88%, rgba(0,0,0,0.55) 0%, transparent 18%)
          `,
        }}
      />

        <Logo/>

      <div className="w-full h-full absolute flex justify-center items-center inset-0">
        <img className="rounded-b-3xl object-cover h-full" src="/heroimage.webp" alt="" />
      </div>

        <div className="hidden md:block absolute z-20 left-5 w-1/5 top-36">
          <p className="text-[#fff] text-[1rem] font-[ethnic] p-4 w-1/2"> Echoes of Maharajas - courage, legacy, and the magnificence of royal India </p>
        </div>

      <div className="text-[#ffffff] flex flex-col md:flex-row justify-between md:items-center p-2 md:p-4 z-20 absolute bottom-[15%] md:bottom-[8%] w-full">
        <h1 className="text-7xl sm:text-8xl md:text-[11rem] leading-18 md:leading-32 lg:leading-32 font-[ethnic] text-shadow-lg text-shadow-black">
          <span className="text-3xl leading-6 md:leading-none md:ml-1 md:text-6xl block">
            the
          </span>
          <span className="block text-[#ffffff]">
            Maha
            <wbr />
            Rajas
          </span>
          <p className="hidden md:block md:text-sm font-[trajan] ml-2 tracking-[1rem]">Reviving the legacy</p>
        </h1>
        <div className="mt-10 flex justify-between items-center md:mt-32 md:mr-26">
          <Badge />
          <div className="text-[#fff] text-sm md:hidden font-semibold font-[ethnic] p-3 w-2/3"> Echoes of Maharajas - courage, legacy, and the magnificence of royal India </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
