import React, { useContext, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Parametercontext } from "../App";

const labels = [
  "Sunlight",
  "Wind Current",
  "Rain Fall",
  "Humidity",
  "Ph Value",
  "Temperature",
];

export default function PieChart() {
  const info = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          "rgba(255, 0, 0, 0.7)",
          "rgba(0, 159, 0, 0.9)",
          "rgba(0, 0, 200, 0.6)",
          "rgba(75, 120, 12, 0.4)",
          "rgba(154, 10, 35, 0.2)",
          "rgba(200, 0, 250, 0.2)",
        ],
        borderColor: "rgb(46,180,127)",
        data: [110, 20, 310, 40, 10, 30],
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
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(25, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 102, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(1, 203, 207, 0.2)",
          ],
          borderColor: "rgb(46,180,127)",
          data: [sunlight, wind, rainfall, humidity, Ph, temperature],
        },
      ],
    });
  }, [sunlight, wind, rainfall, humidity, Ph, temperature]);
  return (
    <div>
      <Pie className="mt-10" data={data} />
    </div>
  );
}
