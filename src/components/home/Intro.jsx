import React from "react";

const Intro = () => {
  return (
    <div className="p-2 md:p-6 bg-[#070302] w-full">
      <div className="mt-20 flex flex-col-reverse md:flex-row-reverse justify-center">
        <div className="mt-8 z-10 w-full md:w-1/2 p-4 right-8 mr-24 font-[ethnic]">
          <h1 className="text-white text-shadow-lg text-6xl md:text-7xl md:font-semibold ml-2 -mt-16 md:mt-0 md:ml-3">
            Through the Halls
          </h1>
          <p className="w-fit mt-8 text-2xl ml-4 md:ml-24 text-gray-400">
            The halls of these palaces once witnessed the rise of great empires.
            <br />
            Here emperors planned their conquests, held court with nobles,
            <br />
            and celebrated victories with grandeur.
            <br />
            Every corridor tells of alliances, traditions, and struggles
            <br />
            that shaped the destiny of kingdoms.
            <br />
            These spaces remain as living records of history,
            <br />
            preserving the legacy of rulers and their reigns.
          </p>
        </div>
        <div className="rounded-2xl w-[80vw] md:w-1/2 h-[20rem] md:h-[30rem] bg-amber-200 relative left-4 md:left-24 overflow-hidden">
          <img
            src="/herobg.webp"
            className="object-cover object-bottom w-full h-full"
            alt="royal"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
