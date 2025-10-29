import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const FinalHome = () => {

  const textRef = useRef();
  const sectionRef = useRef();

//   useEffect(() => {
//   const section = sectionRef.current;

//   gsap.fromTo(
//     section,
//     { y: 100 },
//     {
//       y: -200,
//       scrollTrigger: {
//         trigger: section,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//       },
//     }
//   );
// }, []);


  return (
    <div className="p-2 relative md:p-6 bg-[#1b1b1b] text-white rounded-t-3xl rounded-b-3xl w-full">
      <div ref={sectionRef} className="parallax">
        <div className="flex">
        <div className="my-5 ml-6 inline-block font-[ethnic]">
          <h1 className="text-5xl md:text-9xl">
            {" "}
            <span className="italic">Experience the</span> <br />{" "}
            <span className="ml-[10vw] md:ml-[30vw] bg-gradient-to-tl from-[#f48080] to-red-900 bg-clip-text text-transparent">
              Legacy
            </span>
          </h1>

          <div className="w-3/4 md:w-1/3 text-2xl inline-block text-start md:ml-4 mt-8">
            <p ref={textRef} className="inline-block">
              Discover the timeless glory of India’s great empires through their
              art, architecture, and enduring culture.
            </p>

            <button className="text-xl mt-9 text-red-400 hover:text-red-300 transition-all duration-200 ease-in-out">Begin Your Journey &#129042;</button>
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

      <div className="absolute h-[40vh] md:h-[30vh] top-3/4 left-1/7 md:top-1/2 md:left-1/3 w-[45vw] md:w-[30vw]">
        <img
          className="object-cover"
          src="https://ik.imagekit.io/c25vdtqqp/maharajas/elephant.jpg"
          alt=""
        />
      </div>
      </div>
    </div>
  );
};

export default FinalHome;
