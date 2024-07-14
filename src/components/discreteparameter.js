import React, { useContext } from "react";
import { MdOutlineLandslide } from "react-icons/md";
import { TbTexture } from "react-icons/tb";
import { GiIsland } from "react-icons/gi";
import { GiMineralPearls } from "react-icons/gi";
import { Parametercontext } from "../App";

export default function Discreteparameter() {
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
    topography,
    setTopography,
    soiltype,
    setSoiltype,
    texture,
    setTexture,
    minerals,
    setMinerals,
  ] = useContext(Parametercontext);

  return (
    <>
      <div>
        <h1 className="text-center text-my_green1 mb-4 uppercase underline">
          Discrete Parameters
        </h1>
      </div>
      <div className="mx-2">
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg relative">
          <MdOutlineLandslide className="text-xl ml-1 text-[#C2B280]" />
          <select
            className="block appearance-none w-full bg-[#f0f0f0]  px-2 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="options"
            value={topography}
            onChange={(e) => {
              setTopography(e.target.value);
            }}
          >
            <option value="" disabled>
              Please Select Topography
            </option>
            <option value="Hill">Hill</option>
            <option value="Flat">Flat</option>
            <option value="Slopy">Slopy</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg relative">
          <GiIsland className="text-xl ml-1 text-[#C2B280]" />
          <select
            className="block appearance-none w-full bg-[#f0f0f0]  px-2 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="options"
            value={soiltype}
            onChange={(e) => {
              setSoiltype(e.target.value);
            }}
          >
            <option value="" disabled>
              Please Select Soil Type
            </option>
            <option value="Loamy">Loamy</option>
            <option value="Sandy">Sandy</option>
            <option value="Sandy Loamy">Sandy Loamy</option>
            <option value="Silty">Silty</option>
            <option value="Peaty">Peaty</option>
            <option value="Chalky">Chalky</option>
            <option value="Saline">Saline</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg relative">
          <TbTexture className="text-xl ml-1 text-[#C2B280]" />
          <select
            className="block appearance-none w-full bg-[#f0f0f0]  px-2 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="options"
            value={texture}
            onChange={(e) => {
              setTexture(e.target.value);
            }}
          >
            <option value="" disabled>
              Please Select Soil Texture
            </option>
            <option value="Loamy">Loamy</option>
            <option value="Sandy">Sandy</option>
            <option value="Sandy Loamy">Sandy Loamy</option>
            <option value="Clay">Clay</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg relative">
          <GiMineralPearls className="text-xl ml-1 text-[#0f5e9c]" />
          <select
            className="block appearance-none w-full bg-[#f0f0f0]   px-2 py-2 pr-6 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="options"
            value={minerals}
            onChange={(e) => {
              setMinerals(e.target.value);
            }}
          >
            <option value="" disabled>
              Please Select Minerals
            </option>
            <option value="Loamy">Loamy</option>
            <option value="Sandy">Sandy</option>
            <option value="Sandy Loamy">Sandy Loamy</option>
            <option value="Clay">Clay</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2  text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
