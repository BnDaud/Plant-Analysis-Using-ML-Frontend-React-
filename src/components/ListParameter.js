import React, { useContext, useState } from "react";

import Continuousparameter from "./continuousparameter";
import Discreteparameter from "./discreteparameter";
import { Parametercontext } from "../App";
export default function ListParameter(arg) {
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

    fetchPRed,
    setPred,
  ] = useContext(Parametercontext);

  const [changeparameter, setChangeparameter] = useState(true);
  function submitted() {
    fetch("http://localhost:8000/api_root/input_data/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sunlight: sunlight,
        windcurrent: wind,
        rainfall: rainfall,
        humidity: humidity,
        phvalue: Ph,
        temperature: temperature,
        topography: topography,
        soiltype: soiltype,

        minerals: minerals,
        name: region,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPred(true);
      });
  }

  return (
    <>
      {" "}
      <div className=" border-2 border-my_green2  h-96 w-72 pt-5  rounded-lg overflow-auto">
        <form
          id="submit"
          onSubmit={(e) => {
            e.preventDefault();
            submitted();
          }}
        >
          {" "}
          {changeparameter ? <Continuousparameter /> : <Discreteparameter />}
        </form>
        <div className="text-center ">
          <button
            className="bg-green-500 hover:bg-my_green2  p-1 rounded-lg hover:text-[#f0f0f0]"
            onClick={() => {
              setChangeparameter(!changeparameter);
            }}
          >
            Change Parameters
          </button>
        </div>
        <div className="text-center">
          <button
            form="submit"
            className="bg-green-200 hover:bg-my_green2  p-1 rounded-lg my-3 hover:text-[#f0f0f0]"
          >
            {" "}
            Submit
          </button>
        </div>{" "}
      </div>
    </>
  );
}
