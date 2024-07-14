// ./components/BarChart.js
import React, { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Parametercontext } from "../App";

export default function BarChart() {
  const labels = [
    "Sunlight",
    "Wind Current",
    "Rain Fall",
    "Humidity",
    "Ph Value",
    "Temperature",
  ];
  const info = {
    labels: labels,
    datasets: [
      {
        label: "Parameters Bar Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 0, 0, 0, 0, 0],
      },
    ],
  };
  const [data, setData] = useState(info);
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
  useEffect(() => {
    setData({
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [sunlight, wind, rainfall, humidity, Ph, temperature],
        },
      ],
    });
  }, [sunlight, wind, rainfall, humidity, Ph, temperature]);

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="h-full w-full p-2">
      <Bar data={data} options={options} />
    </div>
  );
}
