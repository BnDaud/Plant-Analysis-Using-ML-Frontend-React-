import React, { useContext, useState } from "react";
import { IoSunny, IoRainy } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { GiChemicalDrop } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { IoThermometerOutline } from "react-icons/io5";
import { Parametercontext } from "../App";
export default function Continuousparameter(arg) {
  const [
    sunlight,
    setSunlight,
    wind,
    setWind,
    rainfall,
    setRainfall,
    humidity,
    setHumidity,
    Ph,
    setPh,
    temperature,
    setTemperature,
  ] = useContext(Parametercontext);

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
            value={sunlight}
            onChange={(e) => {
              setSunlight(e.target.value);
            }}
          />
        </div>{" "}
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <LuWind className="text-xl  ml-1 text-[#0f5e9c] " />
          <input
            className="rounded-lg pl-3 py-1  focus:outline-none bg-[#f0f0f0]"
            placeholder="Wind Current"
            value={wind}
            onChange={(e) => setWind(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <IoRainy className="text-xl ml-1 text-[#0f5e9c]" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Rain Fall"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <WiHumidity className="text-xl ml-1 text-[#0f5e9c]" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Humidity"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 mb-3 rounded-lg border border-my_green1">
          <GiChemicalDrop className="text-xl ml-1 text-red-400" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Ph Value"
            value={Ph}
            onChange={(e) => setPh(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 mb-3 rounded-lg border border-my_green1">
          <IoThermometerOutline className="text-xl ml-1 text-red-600" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0] "
            placeholder="Temperature "
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
