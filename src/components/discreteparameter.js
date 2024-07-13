import React from "react";

import { MdOutlineLandslide } from "react-icons/md";
import { TbTexture } from "react-icons/tb";
import { GiIsland } from "react-icons/gi";
import { GiMineralPearls } from "react-icons/gi";

export default function Discreteparameter() {
  return (
    <>
      <div>
        <h1 className="text-center text-my_green1 mb-4 uppercase underline ">
          {" "}
          Discrete Parameters
        </h1>
      </div>
      <div className="mx-2">
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg  ">
          <MdOutlineLandslide className="text-xl  ml-1 text-[#C2B280]" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Topography"
          />
        </div>{" "}
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <GiIsland className="text-xl  ml-1 text-[#C2B280]" />
          <input
            className="rounded-lg pl-3 py-1  focus:outline-none bg-[#f0f0f0]"
            placeholder="Soil Type"
          />
        </div>
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <TbTexture className="text-xl ml-1 text-[#C2B280]" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Soil Texture"
          />
        </div>
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <GiMineralPearls className="text-xl ml-1 text-[#0f5e9c]" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Minerals"
          />
        </div>
      </div>
    </>
  );
}
