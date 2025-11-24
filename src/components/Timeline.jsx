import { MoveLeft, MoveRight } from "lucide-react";
import React, { useRef } from "react";
import empires from "../assets/empires";

const Timeline = () => {
  const sliderRef = useRef(null);

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
    <div className=" relative pb-12  flex justify-center items-center">
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
        className="timeline flex flex-nowrap mt-24 gap-6 scroll-smooth px-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
      >
        {empires.map((empire) => (
          <div
            key={empire.id}
            className="h-[31rem] snap-center flex-shrink-0 mr-6 relative w-[90vw]"
          >
            {/* Year */}
            <h1 className="text-9xl ml-14 z-10 mt-4 opacity-20 font-[ethnic] text-[#cfd3d3]">
              {empire.date}
            </h1>

            {/* Name */}
            <div className="absolute z-10 top-1/3 left-24 font-[ethnic]">
              <h1
                className="text-7xl text-[#fff]"
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
              className="text-white absolute z-10 mb-12 text-justify w-1/2 left-[7rem] top-[16rem]"
              dangerouslySetInnerHTML={{
                __html: highlightText(
                  empire.short_desc,
                  empire.highlighted,
                  empire.accent_color
                ),
              }}
            ></p>

            {/* Image */}
            <div className="w-[50rem] h-[100%] absolute top-2 right-8">
              <img
                className={`object-cover ${empire.image_pos} mask-b-from-60%  mask-r-from-60% mask-t-from-80% mask-l-from-1% h-full w-full`}
                src={`/${empire.thumbnail}`}
                alt={empire.name}
              />
            </div>

            <button
              className={`absolute bottom-24 cursor-pointer left-28 text-[#cfcdcc] tracking-widest font-[ethnic]`}
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
