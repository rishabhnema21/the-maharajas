import React from "react";
import { useParams } from "react-router";
import empires from "../assets/empires";

const EmpireDetail = () => {
  const { empire } = useParams();
  const currentEmpire = empires.find(e => e.id === empire)
  if (!currentEmpire) {
    return <h1 className="text-white p-10">Empire not found</h1>;
  }
  const emperorHeading = currentEmpire.detailContent.heading2;
  const words = emperorHeading.split(" ");
  const lastword = words.pop();
  const firstPart = words.join(" ");

  return (
    <div className="min-h-screen relative pb-24 overflow-hidden text-white bg-gradient-to-bl from-[#0b0707]  to-[#040900]"
    style={{ backgroundImage: `linear-gradient(to bottom left, #0b0707, ${currentEmpire.detailContent.pageTheme}, #040900)` }}
    >
      <div className="pt-16">
        <h1 className="text-start mt-12 md:mt-0 z-10 ml-3 md:ml-24 font-[ethnic] opacity-60 md:opacity-10 text-5xl md:text-7xl">
          the{" "}
          <span className="text-8xl md:text-[12rem] text-[#04bf30]"
              style={{color: `${currentEmpire.accent_color}`}}
          >
            {currentEmpire.detailedName}
          </span>
        </h1>
        <img
          className="mask-l-from-0% mask-b-from-4 z-0 h-[50vh] md:h-[104vh] rotate-12 absolute -top-16 md:-right-16"
          src={currentEmpire.detailContent.backgroundImage}
          alt=""
        />

        <div className="flex flex-col md:flex-row">
          <img
            src={currentEmpire.detailContent.pageImages[0]}
            className="mask-linear-110 mask-linear-from-80% mask-linear-to-80%  w-3/4 md:w-auto mt-12 z-10 md:h-[60vh] ml-12 md:ml-24 md:mt-2"
            alt=""
          />
          <div className="ml-5 z-10 md:ml-24 mt-12">
            <h1 className="text-5xl font-[ethnic]" style={{ color: currentEmpire.accent_color }}>
              {currentEmpire.detailContent.heading1}
            </h1>
            <p className="text-white w-[90vw] md:w-[45vw] text-justify mt-6 mb-6 md:mb-0 md:mt-3">
              {currentEmpire.detailContent.paragraph1}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="ml-5 md:ml-22 mt-4">
            <h1 className="text-green-300 text-5xl mb-5 md:text-end md:ml-60 md:text-7xl font-[ethnic]" style={{ color: currentEmpire.accent_color }}>
              {firstPart} <br />
              <span className="text-6xl md:text-8xl" style={{ color: currentEmpire.theme_color }}>
                {lastword}
              </span>
            </h1>
            <div className="flex flex-col gap-3">
              {currentEmpire.detailContent.emperors.map((emperor, index) => (
                <p className="text-2xl font-[ethnic] hover:scale-105 transition-all duration-200 ease-in border-b mb-2 border-b-green-300 text-red-200">
                {index + 1}. <span className="text-5xl " style={{ color: currentEmpire.accent_color }}>{emperor}</span>
              </p>
              ))}
            </div>
          </div>
          <div className="bg-emerald-800/5 overflow-hidden  w-3/4 md:w-3/4 ml-12 mt-12 md:ml-24 rounded-xl md:mr-24 md:mt-2">
            <img
            src={currentEmpire.detailContent.pageImages[1]}
            className="h-full object-cover bg-emerald-800/5 w-full md:w-full "
            alt=""
          />
        </div>
          </div>
      </div>
    </div>
  );
};

export default EmpireDetail;
