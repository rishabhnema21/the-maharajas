import React from "react";
import ImperialLegacy from "../components/ImperialLegacy";

const Legacy = () => {
  return (
    <div className="bg-gradient-to-bl from-[#000] overflow-x-hidden via-[#2c000e] to-[#120000] min-h-screen">
      <h1 className="font-[ethnic] pt-26 translate-x-[10%] text-5xl text-white">
        Beyond <span className="text-[#ff8095] text-7xl">Thrones</span> <br />{" "}
        &ensp;&ensp; & <span className="text-[#ff8095] text-7xl">Time</span>
      </h1>

      <div>
        <img
          className="absolute h-100 z-0 right-0 top-0 mask-l-from-30% mask-b-from-8 contrast-125"
          src="https://ik.imagekit.io/c25vdtqqp/maharajas/indiandurbar.jfif"
          alt="indian durbar"
        />
      </div>

      <div>
        <div className="text-[#fde5d7] text-2xl font-[ethnic] mt-18 w-1/2 ml-36 relative z-10">
          Empires rose with banners and ambition, <br />
          and fell into silence with time. <br />
          Yet history does not remember power alone — <br />
          it remembers what endured.
        </div>

        <img
          className="z-0 absolute right-0 top-1/2 mask-t-from-0 mask-r-from-30% mask-b-from-0 contrast-125"
          src="https://ik.imagekit.io/c25vdtqqp/maharajas/fort1.webp"
          alt="Fort"
        />

        <div className="absolute left-36 top-[80%] text-white">
          <h2 className="font-[ethnic] text-4xl text-white">
            Culture & <span className="text-[#ff8095] text-5xl">Wisdom</span>
          </h2>

          <div className="w-[40%] mt-7">
            <p className="mb-5">
              Indian empires supported organized learning, scholarship, and
              artistic production through state patronage. Institutions for
              education, literature, science, and the arts preserved and
              developed knowledge in fields such as mathematics, astronomy,
              medicine, philosophy, and architecture.
            </p>

            <p className="mb-5">
              Multiple religious traditions coexisted and interacted under
              imperial rule, shaping cultural practices, languages, and
              architectural forms. This sustained interaction contributed to a
              plural cultural framework that influenced Indian society long
              after the empires declined.
            </p>
          </div>
        </div>

        <div className="translate-x-[55%] relative z-10 text-white">
          <h2 className="font-[ethnic] text-4xl text-white">
            Military & <span className="text-[#ff8095] text-5xl">Strategy</span>
          </h2>

          <div className="w-[40%] mt-10">
            <p className="mb-5">
              Indian empires mastered warfare through strategy, terrain, and
              enduring stone. Forts crowned hills, guarded coasts, and
              controlled trade routes — engineered not just for defense, but for
              survival under siege.
            </p>

            <p className="mb-5">
              From Rajput hill forts to Maratha strongholds, military
              architecture adapted to geography, using layered walls, hidden
              gates, and self-sustaining design. Warfare favored precision over
              spectacle — guerrilla tactics, naval power, and strategic mobility
              often outweighed sheer numbers.
            </p>

            <p className="mb-5">
              These forts were more than defenses; they were centers of command
              and symbols of sovereignty. Even in silence, their walls continue
              to echo centuries of resolve and resistance.
            </p>
          </div>
        </div>
        <ImperialLegacy />
      </div>
    </div>
  );
};

export default Legacy;
