import React from "react";
import { IoSunny, IoRainy } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { GiChemicalDrop } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { IoThermometerOutline } from "react-icons/io5";

export default function Continuousparameter() {
  return (
    <>
      <div>
        <h1 className="text-center text-my_green1 mb-4 uppercase underline">
          {" "}
          Continuous Parameters
        </h1>
      </div>
      <div className="mx-2">
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg  ">
          <IoSunny className="text-xl  ml-1 text-[#FFBF00]" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Sunlight"
          />
        </div>{" "}
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <LuWind className="text-xl  ml-1 text-[#0f5e9c] " />
          <input
            className="rounded-lg pl-3 py-1  focus:outline-none bg-[#f0f0f0]"
            placeholder="Wind Current"
          />
        </div>
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <IoRainy className="text-xl ml-1 text-[#0f5e9c]" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Rain Fall"
          />
        </div>
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <WiHumidity className="text-xl ml-1 text-[#0f5e9c]" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Humidity"
          />
        </div>
        <div className="flex items-center gap-2 mb-3 rounded-lg border border-my_green1">
          <GiChemicalDrop className="text-xl ml-1 text-red-400" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Ph Value"
          />
        </div>
        <div className="flex items-center gap-2 mb-3 rounded-lg border border-my_green1">
          <IoThermometerOutline className="text-xl ml-1 text-red-600" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0] "
            placeholder="Temperature "
          />
        </div>
      </div>
    </>
  );
}
