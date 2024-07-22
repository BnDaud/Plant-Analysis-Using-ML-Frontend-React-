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

    minerals,
    setMinerals,
    region,
    setRegion,
  ] = useContext(Parametercontext);

  return (
    <>
      <div>
        <h1 className="text-center text-my_green1 mb-4 uppercase underline">
          Other Parameters
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

        {/*<div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg relative">
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
        </div>*/}
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg">
          <GiMineralPearls className="text-xl ml-1 text-[#0f5e9c]" />
          <input
            className="rounded-lg pl-3 py-1 focus:outline-none bg-[#f0f0f0]"
            placeholder="Minerals (1-4)"
            value={minerals}
            onChange={(e) => setMinerals(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 mb-3 border border-my_green1 rounded-lg relative">
          <GiMineralPearls className="text-xl ml-1 text-[#0f5e9c]" />
          <select
            className="block appearance-none w-full bg-[#f0f0f0]   px-2 py-2 pr-6 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="options"
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          >
            <option value="" disabled>
              Please Select State
            </option>
            <option value="abia">Abia</option>
            <option value="adamawa">Adamawa</option>
            <option value="akwa-ibom">Akwa Ibom</option>
            <option value="anambra">Anambra</option>
            <option value="bauchi">Bauchi</option>
            <option value="bayelsa">Bayelsa</option>
            <option value="benue">Benue</option>
            <option value="borno">Borno</option>
            <option value="cross-river">Cross River</option>
            <option value="delta">Delta</option>
            <option value="ebonyi">Ebonyi</option>
            <option value="edo">Edo</option>
            <option value="ekiti">Ekiti</option>
            <option value="enugu">Enugu</option>
            <option value="gombe">Gombe</option>
            <option value="imo">Imo</option>
            <option value="jigawa">Jigawa</option>
            <option value="kaduna">Kaduna</option>
            <option value="kano">Kano</option>
            <option value="katsina">Katsina</option>
            <option value="kebbi">Kebbi</option>
            <option value="kogi">Kogi</option>
            <option value="kwara">Kwara</option>
            <option value="lagos">Lagos</option>
            <option value="nasarawa">Nasarawa</option>
            <option value="niger">Niger</option>
            <option value="ogun">Ogun</option>
            <option value="ondo">Ondo</option>
            <option value="osun">Osun</option>
            <option value="oyo">Oyo</option>
            <option value="plateau">Plateau</option>
            <option value="rivers">Rivers</option>
            <option value="sokoto">Sokoto</option>
            <option value="taraba">Taraba</option>
            <option value="yobe">Yobe</option>
            <option value="zamfara">Zamfara</option>
            <option value="fct">Federal Capital Territory</option>
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
