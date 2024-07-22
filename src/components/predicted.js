import React, { useContext, useEffect, useState } from "react";
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
    minerals,
    setMinerals,
    region,
    setRegion,
    fetchPRed,
    setPred,
  ] = useContext(Parametercontext);

  const [plant, setPlant] = useState([]);

  useEffect(() => {
    if (fetchPRed) {
      fetch("http://localhost:8000/api_root/getInputs/")
        .then((response) => response.json())
        .then((data) => {
          const plants = data[0].result
            .split(",")
            .filter((p) => p.trim() !== "");
          setPlant(plants);
          setPred(false);
        });
    }
  }, [fetchPRed, setPred]);

  return (
    <div className="h-96 w-72 mt-5">
      <h1 className="uppercase text-center text-my_green1 px-2">
        The crop that can survive in {region} with the Input you provided is
      </h1>
      <div className="px-2 mt-5 text-xl overflow-auto">
        {plant.length > 0
          ? plant.map((p, index) => (
              <p className="my-3" key={index}>
                {index + 1 + ".) " + p}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
