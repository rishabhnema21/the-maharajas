import React from "react";

const Empires = () => {
  return (
    <div className="bg-[#0b0707]">
      <div className="relative min-h-screen">
        <div className="absolute w-[80vw] md:w-auto top-[35rem] z-10 md:top-[30rem] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vh]">
          <img
            src="/king.png" className="contrast-150 md:h-[70vh] "
            alt=""
          />
        </div>
        <div className="absolute top-[10rem] md:top-[5rem] z-0 md:z-0 w-full text-center font-[ethnic] text-[7rem] leading-[5rem] md:leading-[10rem] md:text-[15rem]">
          <h1 className="text-white">
            <span className="text-red-400">the</span><br />Empires
          </h1>
        </div>

        <div className="absolute top-[10rem] md:top-[12rem] left-2rem md:left-[19rem] bg-red-800/30 md:bg-red-600/20 h-80 md:h-60 w-40"></div>
      </div>

      <div className="font-[ethnic] ml-12">
        <h1 className="text-5xl text-white"><span className="text-red-400 mr-6 text-8xl">01.</span> Magadha Empire</h1>
        <h1 className="text-5xl text-white"><span className="text-red-400 text-8xl">02.</span> Mauryans</h1>
        <h1 className="text-5xl text-white"><span className="text-red-400 text-8xl">03.</span> Delhi Sultanate</h1>
        <h1 className="text-5xl text-white"><span className="text-red-400 text-8xl">04.</span> The Mughals</h1>
      </div>
    </div>
  );
};

export default Empires;
