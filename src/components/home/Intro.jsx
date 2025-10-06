import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const scenes = [
  {
    src: "https://ik.imagekit.io/c25vdtqqp/maharajas/chittorfort",
    title: "The Dawn of Legends",
    description:
      "As the first light kisses the ancient walls of Chittor, echoes of courage awaken once more — where every stone whispers tales of valor that time could never silence.",
  },
  {
    src: "https://ik.imagekit.io/c25vdtqqp/maharajas/palaces1.jpg",
    title: "Where Royals Dreamed",
    description:
      "Beyond the marble corridors, the palaces breathe stories of grandeur - of laughter under chandeliers, of footsteps that once danced to the rhythm of royal grace.",
  },
  {
    src: "https://ik.imagekit.io/c25vdtqqp/maharajas/palaces2.jpg",
    title: "The Silent Twilight",
    description:
      "As dusk settles upon the domes, silence takes the throne - a silence not of emptiness, but of legacy, where the past and present bow to eternity together.",
  },
];

const Intro = () => {
  const sectionRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();
  const sceneImageRef = useRef([]);
  const sceneTextRef = useRef([]);

  const headingImage = useRef();
  const headingTitle = useRef();
  const headingText = useRef();
  const headingPara = useRef();

  gsap.registerPlugin({ ScrollTrigger, useGSAP });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingImage.current,
        start: "top 70%",
        end: "center center",
        scrub: true,
      },
    });

    tl.fromTo(
      headingImage.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "center center",
        ease: "power1.out",
        duration: 1.5,
      }
    );

    tl.fromTo(
      headingTitle.current.querySelector("span"),
      {
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.out",
        duration: 1,
      },
      ">-0.3"
    );

    tl.fromTo(
      headingPara.current,
      {
        autoAlpha: 0,
        y: 25,
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        duration: 1.2,
      },
      ">-0.2"
    );
  }, []);

  return (
    <div ref={sectionRef} className="p-2 md:p-6 bg-[#070302] w-full">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-center">
        <div
          ref={headingText}
          className="mt-8 z-10 w-full md:w-1/2 p-4 right-8 mr-24 font-[ethnic]"
        >
          <h1
            ref={headingTitle}
            className="text-white overflow-hidden text-shadow-lg text-6xl md:text-7xl md:font-semibold ml-2 -mt-16 md:mt-0 md:ml-3"
          >
            <span className="block" style={{ display: "inline-block" }}>
              Through the Halls
            </span>
          </h1>
          <p
            ref={headingPara}
            className="w-fit mt-8 text-2xl ml-4 md:ml-24 text-gray-400"
          >
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
        <div
          ref={headingImage}
          className="rounded-2xl w-[80vw] md:w-1/2 h-[20rem] md:h-[30rem] relative left-4 md:left-24 overflow-hidden"
        >
          <img
            src="/herobg.webp"
            className="object-cover object-bottom w-full h-full"
            alt="royal"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        {scenes.map((scene, index) => (
          <div
            key={index}
            className="h-screen w-full p-2 flex flex-col justify-center items-center md:p-6"
          >
            <div
              ref={(el) => {
                sceneImageRef.current[index] = el;
              }}
              className="h-full md:w-2/3 relative mt-9 rounded-2xl overflow-hidden"
            >
              <img
                src={scene.src}
                alt={scene.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tl from-black via-black/30 to-transparent"></div>

              <div
                ref={(el) => {
                  sceneTextRef.current[index] = el;
                }}
                className="absolute transition-opacity duration-1000 w-2/3 text-end md:text-start md:w-1/2 bottom-5 md:bottom-1/7 right-4 md:right-10 font-[ethnic] text-white"
              >
                <h1 className="text-6xl md:text-5xl">{scene.title}</h1>
                <p className="mt-4">{scene.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
