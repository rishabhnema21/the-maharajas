import React, { useRef, useEffect } from "react";
import Timeline from "../components/Timeline";
import { Mouse } from "lucide-react";
import { gsap } from "gsap";

const Empires = () => {

  const containerRef = useRef(null);
  const kingRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const king = kingRef.current;

    function parallaxIt(e, element, movement) {
      const bounds = container.getBoundingClientRect();

      const relX = e.clientX - bounds.left;
      const relY = e.clientY - bounds.top;

      gsap.to(element, {
        duration: 1,
        x: ((relX - bounds.width / 2) / bounds.width) * movement,
        y: ((relY - bounds.height / 2) / bounds.height) * movement,
        ease: "power2.out",
      });
    }

    function handleMove(e) {
      // Parallax only the king image
      parallaxIt(e, king, -40);
    }

    container.addEventListener("mousemove", handleMove);

    return () => container.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="bg-[#0b0707]">
      <div ref={containerRef} className="relative min-h-screen">
        {/* King's Image */}
        <div
          ref={kingRef}
          className="absolute w-[80vw] md:w-auto top-[35rem] z-30 md:top-[30rem] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vh]"
        >
          <img src="/king.png" className="contrast-150 md:h-[70vh] " alt="" />
        </div>

        <div
          className="absolute top-[40rem] left-1/2 z-30 -translate-x-1/2 text-white"
          style={{
            animation: "upDown 3s ease-in-out infinite",
          }}
        >
          <Mouse size={35} />
          <style>{`
    @keyframes upDown {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `}</style>
        </div>

        <div
          ref={kingRef}
          className="absolute top-[10rem] md:top-[5rem] z-20 md:z-20 w-full text-center font-[ethnic] text-[7rem] leading-[5rem] md:leading-[10rem] md:text-[15rem]"
        >
          <h1 className="text-white">
            <span className="bg-gradient-to-b from-red-400 via-[#982c2c] to-[#6f0101] bg-clip-text text-transparent ">
              the
            </span>
            <br />
            Empires
          </h1>
        </div>

        <div className="absolute z-10 top-[10rem] md:top-[12rem] left-[2rem] md:left-[19rem] bg-red-800/30 md:bg-red-600/20 h-80 md:h-60 w-40"></div>
      </div>

      {/* Timeline */}
      <Timeline />
    </div>
  );
};

export default Empires;
