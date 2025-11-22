import { MoveLeft, MoveRight } from "lucide-react";
import React, { useRef } from "react";

const Empires = () => {
  const sliderRef = useRef(null);

  return (
    <div className="bg-[#0b0707]">
      <div className="relative min-h-screen">
        {/* King's Image */}
        <div className="absolute w-[80vw] md:w-auto top-[35rem] z-30 md:top-[30rem] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vh]">
          <img src="/king.png" className="contrast-150 md:h-[70vh] " alt="" />
        </div>

        <div className="absolute top-[10rem] md:top-[5rem] z-20 md:z-20 w-full text-center font-[ethnic] text-[7rem] leading-[5rem] md:leading-[10rem] md:text-[15rem]">
          <h1 className="text-white">
            <span className="text-red-400">the</span>
            <br />
            Empires
          </h1>
        </div>

        <div className="absolute z-10 top-[10rem] md:top-[12rem] left-[2rem] md:left-[19rem] bg-red-800/30 md:bg-red-600/20 h-80 md:h-60 w-40"></div>
      </div>

      <div className=" relative mt-16 pb-12 flex justify-center items-center">
        <button
          onClick={() =>
            sliderRef.current.scrollBy({ left: -400, behavior: "smooth" })
          }
          className="absolute z-20 left-4 text-white bg-[#201f1f] hover:bg-[#181818] p-3 cursor-pointer rounded-full"
        >
          <MoveLeft size={30} />
        </button>
        <div
          ref={sliderRef}
          className="timeline flex flex-nowrap gap-6 scroll-smooth px-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
        >
          <div className="h-[400px] snap-center flex-shrink-0 mr-6 relative w-[90vw]">
            <h1 className="text-9xl ml-14 mt-4 opacity-10 font-[ethnic] text-[#cfd3d3]">
              300 B.C
            </h1>
            <div className="absolute top-1/3 left-24 font-[ethnic]">
              <h1 className="text-7xl text-[#fff]">
                The <span className="text-red-800">Magadha</span> Empire
              </h1>
            </div>

            <p className="text-white absolute w-1/2 left-[7rem] top-[14rem]">
              Stood as the mightiest power of ancient India—home to towering
              forts, war elephants, legendary rulers like{" "}
              <span className="text-red-400">Bimbisara</span>,{" "}
              <span className="text-red-400">Ajatashatru</span>,{" "}
              <span className="text-red-400">Chandragupta</span>, and{" "}
              <span className="text-red-400">Ashoka</span>, and the birthplace
              of great philosophies that shaped civilizations. It wasn’t just a
              kingdom—it was the center of power, ambition, and empire.
            </p>
            <div className="w-[40rem] rounded-bl-3xl overflow-hidden absolute top-2 right-8">
              <img
                className="object-cover mask-b-from-80% mask-r-from-60% mask-t-from-80% mask-l-from-20% h-full w-full"
                src="/magadha.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="h-[400px] snap-center flex-shrink-0 mr-6 relative w-[90vw] bg-emerald-800"></div>
          <div className="h-[400px] inline-block mr-3 w-[400px] bg-emerald-800"></div>
          <div className="h-[400px] inline-block mr-3 w-[400px] bg-emerald-800"></div>
          <div className="h-[400px] inline-block mr-3 w-[400px] bg-emerald-800"></div>
        </div>
        <button
          onClick={() =>
            sliderRef.current.scrollBy({ left: 400, behavior: "smooth" })
          }
          className="absolute right-4 z-20 text-white bg-[#201f1f] hover:bg-[#181818] p-3 cursor-pointer rounded-full"
        >
          {" "}
          <MoveRight size={30} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Empires;
