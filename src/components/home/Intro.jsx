import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

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
  const headingTitle = useRef();
  const headingPara = useRef();

  const sceneImageRef = useRef([]);
  const sceneTextRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = headingTitle.current;
    const para = headingPara.current;

    // Split the paragraph text into characters
    const split = new SplitType(para, { types: "chars" });

    // Animate all characters fading in as user scrolls
    gsap.fromTo(
      split.chars,
      { opacity: 0.3 },
      {
        opacity: 1,
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true, // <-- section stays pinned during reveal
        },
      }
    );

    // Animate color change for span text
    gsap.fromTo(
      para.querySelectorAll("span .char"),
      { color: "#999" },
      {
        color: "#fb2b2b",
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      split.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#070302] w-full">
      {/* ===== Pinned Intro Section with Text Reveal ===== */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-16">
        {/* Image */}
        <div className="rounded-2xl w-[80vw] md:w-1/2 h-[20rem] md:h-[30rem] relative overflow-hidden left-0 md:left-12">
          <img
            src="https://ik.imagekit.io/c25vdtqqp/maharajas/herobg.webp"
            className="object-cover object-bottom w-full h-full"
            alt="royal"
          />
        </div>

        {/* Text */}
        <div className="w-full z-20 md:w-1/2 mt-12 md:mt-0 text-white font-[ethnic]">
          <h1
            ref={headingTitle}
            className="overflow-hidden text-6xl md:text-7xl font-semibold text-shadow-lg mb-8"
          >
            Through the Halls
          </h1>

          <p
            ref={headingPara}
            className="text-2xl text-gray-300 leading-relaxed"
          >
            The halls of these palaces once witnessed the rise of{" "}
            <span>great empires</span>. <br />
            Here emperors planned their <span>conquests</span>, held court with{" "}
            <span>nobles</span>, <br />
            and celebrated victories with <span>grandeur</span>. <br />
            Every corridor tells of <span>alliances</span>, traditions, and{" "}
            <span>struggles</span> <br />
            that shaped the destiny of <span>kingdoms</span>. <br />
            These spaces remain as living records of <span>history</span>,{" "}
            preserving the legacy of <span>rulers</span> and their reigns.
          </p>
        </div>
      </section>

      {/* ===== Scene Sections ===== */}
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
                className="absolute w-2/3 text-end md:text-start md:w-1/2 bottom-5 md:bottom-1/7 right-4 md:right-10 font-[ethnic] text-white"
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
