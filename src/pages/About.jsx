import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-white relative bg-[#0b0707]">
      <div className="w-screen h-[60vh]">
        <img
          className="object-cover md:mask-l-from-80% md:mask-r-from-80% mask-b-from-10% object-top-left md:object-bottom w-full h-full"
          src="https://ik.imagekit.io/c25vdtqqp/maharajas/shivajidurbar.jpg"
          alt="Shrimant Shivaji Durbar"
        />
      </div>

      <div className="absolute top-[40vh]">
        <h1 className="text-white ml-5 md:ml-12 font-medium text-6xl font-[ethnic]">
          the{" "}
          <span className="bg-gradient-to-tl from-[#f48080] to-red-900 bg-clip-text text-transparent">
            Legacy
          </span>{" "}
          Unfolds
        </h1>
      </div>

      <div className="about-content z-50 pb-20 text-justify text-xl ml-5 md:ml-12 w-[60vw] font-[ethnic]">
        <p>
          The <span className="text-red-400 font-medium text-4xl">Maharajas</span> is a digital
          homage to the timeless grandeur of Indian royalty — a journey through
          palaces, forts, and forgotten corridors that once defined the essence
          of regality. This project was envisioned not merely as a website, but
          as an immersive storytelling experience, where history meets modern
          design, and architecture breathes through light and motion.
        </p>
        <br />
        <p>
          Each frame, each transition, has been crafted to evoke emotion — to
          make the viewer feel the weight of silence in royal halls, the glint
          of gold in the sunlit courtyards, and the soft echo of voices long
          past.
        </p>
        <br />
        <p>
          Here, we celebrate the art of stillness and grandeur — moments carved
          in stone, memories preserved in gold, and echoes that refuse to fade.
        </p>
        <br />
        <p>
          Every visual and word you see is a reminder that royalty was never
          about crowns or thrones, but about the timeless spirit of dignity that
          endures beyond centuries.
        </p>
        <br />
        <p>
          This space was created to let you feel what history left behind — not
          through facts, but through emotion.
        </p>
        <br />
        <blockquote className="border-l-4 border-red-300 bg-red-300/10 p-5 rounded-md text-white italic">
          These walls do not age — they remember. For even when empires crumble,
          memory stands eternal.
          <cite className="block mt-2 text-sm text-[#e1dfdf] text-right">
            — Inscription attributed to the court historian of Mewar, circa 16th
            century
          </cite>
        </blockquote>
      </div>

      <div className="z-0">
        <img className="absolute top-[55vh] z-0 right-0 mask-l-from-65% mask-b-from-70% mask-t-from-70% object-cover h-[80vh] w-[40vw]" src="https://ik.imagekit.io/c25vdtqqp/maharajas/maharajas2.jpeg?updatedAt=1759841557807" alt="" />
      </div>
    </div>
  );
};

export default About;
