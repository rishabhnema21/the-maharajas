import { MoveLeft, MoveRight } from "lucide-react";
import React, { useRef } from "react";
import empires from "../assets/empires";
import { useNavigate } from "react-router";
import slugify from "slugify";

const Timeline = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const highlightText = (text, highlights, color) => {
    let result = text;
    highlights.forEach((word) => {
      const regex = new RegExp(word, "gi");
      result = result.replace(
        regex,
        `<span style="color:${color}">${word}</span>`
      );
    });
    return result;
  };

  return (
    <div className="h-[100vh] md:[70vh] relative  flex justify-center items-center">
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
        className="timeline h-[100%] md:h-[90%] flex flex-nowrap md:mt-24 gap-6 scroll-smooth px-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
      >
        {empires.map((empire) => (
          <div
            key={empire.id}
            className="h-[100%] md:h-[31rem] snap-center flex-shrink-0 mr-6 relative w-[90vw]"
          >
            {/* Year */}
            <h1 className="text-6xl md:text-9xl md:ml-14 z-10 md:mt-4 mb-6 md:mb-0 opacity-35 md:opacity-20 font-[ethnic] text-[#cfd3d3]">
              {empire.date}
            </h1>

            {/* Name */}
            <div className="md:absolute mb-12 md:mb-0 z-10 md:top-1/3 left-2 md:left-24 font-[ethnic]">
              <h1
                className="text-6xl md:text-7xl text-[#fff]"
                dangerouslySetInnerHTML={{
                  __html: highlightText(
                    empire.name,
                    empire.highlighted,
                    empire.theme_color
                  ),
                }}
              />
            </div>

            {/* Short Description */}
            <p
              className="text-white md:absolute z-10 mb-12 text-justify w-[85vw] md:w-1/2 left-2 md:left-[7rem] top-[15rem] md:top-[16rem]"
              dangerouslySetInnerHTML={{
                __html: highlightText(
                  empire.short_desc,
                  empire.highlighted,
                  empire.accent_color
                ),
              }}
            ></p>

            {/* Image */}
            <div className="w-[100vw] md:w-[50rem] h-[100%] z-0 absolute top-2  md:right-8">
              <img
                className={`object-cover ${empire.image_pos} mask-b-from-60%  mask-r-from-60% mask-t-from-80% mask-l-from-1% h-full w-full`}
                src={`/${empire.thumbnail}`}
                alt={empire.name}
              />
            </div>

            <button
            onClick={() => {navigate(`/empires/${slugify(empire.id, { lower: true })}`); console.log(empire.name)}}
              className={`absolute bottom-52 md:bottom-24 cursor-pointer left-2 md:left-28 text-[#cfcdcc] tracking-widest font-[ethnic]`}
            >
              Explore
            </button>
          </div>
        ))}
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
  );
};

export default Timeline;
