import React from "react";

const FinalHome = () => {
  return (
    <div className="p-2 relative md:p-6 bg-[#1b1b1b] text-white rounded-t-3xl rounded-b-3xl w-full">
      <div className="flex">
        <div className="my-5 ml-6 inline-block font-[ethnic]">
          <h1 className="text-9xl">
            {" "}
            <span className="italic">Experience the</span> <br />{" "}
            <span className="ml-[30vw] bg-gradient-to-tl from-[#f48080] to-red-900 bg-clip-text text-transparent">Legacy</span>
          </h1>

          <div className="w-1/3 text-2xl inline-block text-start ml-4 mt-8">
            <p className="inline-block">Discover the timeless glory of India’s great empires through their art, architecture, and enduring culture.</p>
          </div>
        </div>
        <div className="h-[100vh] overflow-hidden ml-8">
          <img
            className="object-cover mask-r-from-50% h-full"
            src="https://ik.imagekit.io/c25vdtqqp/maharajas/maharajas2.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className="absolute h-[30vh] top-1/2 left-1/3 w-[30vw]">
        <img className="object-cover" src="https://ik.imagekit.io/c25vdtqqp/maharajas/elephant.jpg" alt="" />
      </div>

    </div>
  );
};

export default FinalHome;
