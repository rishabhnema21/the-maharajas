import React, { useRef } from "react";
import Badge from "../Badge";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const sectionRef = useRef();
  const heroHeadingRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(heroHeadingRef.current, {
        scale: 3,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      })
        .to(
          imageRef.current,
          {
            scale: 1.2,
            opacity: 0.3,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          contentRef.current,
          {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          0.2
        )

        .set(
          [imageRef.current, heroHeadingRef.current, contentRef.current],
          {
            visibility: "hidden",
            pointerEvents: "none",
          },
          ">"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden h-screen w-full p-2 md:p-6 bg-[#070302]"
    >
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

      <div
        ref={imageRef}
        className="w-full h-full absolute flex justify-center items-center inset-0"
      >
        <img
          className="rounded-b-3xl object-cover h-full w-full"
          src="https://ik.imagekit.io/c25vdtqqp/maharajas/heroimage.webp"
          alt="The Maharajas"
        />
      </div>

      <div
        ref={contentRef}
        className="hidden md:block absolute z-20 left-5 w-1/5 top-36"
      >
        <p className="text-white text-[1rem] font-[ethnic] p-4 w-1/2">
          Echoes of Maharajas - courage, legacy, and the magnificence of royal
          India
        </p>
      </div>

      <div className="text-white flex flex-col md:flex-row justify-between md:items-center p-2 md:p-4 z-20 absolute bottom-[15%] md:bottom-[8%] w-full">
        <h1
          ref={heroHeadingRef}
          className="text-7xl sm:text-8xl md:text-[11rem] leading-18 md:leading-32 lg:leading-32 font-[ethnic] text-shadow-lg text-shadow-black"
        >
          <span className="text-3xl leading-6 md:leading-none md:ml-1 md:text-6xl block">
            the
          </span>
          <span className="block text-white">
            Maha
            <wbr />
            Rajas
          </span>
          <p className="hidden md:block md:text-sm font-[trajan] ml-2 tracking-[1rem]">
            Reviving the legacy
          </p>
        </h1>

        <div className="mt-10 flex justify-between items-center md:mt-32 md:mr-26">
          <Badge />
          <div className="text-white text-sm md:hidden font-semibold font-[ethnic] p-3 w-2/3">
            Echoes of Maharajas - courage, legacy, and the magnificence of royal
            India
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
