import React, { useContext } from "react";
import { Parametercontext } from "../App";
export default function Predicted() {
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
    <div>
      <h1 className="uppercase text-center text-my_green1 h-96 w-72">
        List Of Crop That can survive with the selected input
        <p> topography {topography}</p>
        <p> soiltype {soiltype}</p>
        <p>texture {texture}</p>
        <p>minerals {minerals}</p>
      </h1>
    </div>
  );
}
