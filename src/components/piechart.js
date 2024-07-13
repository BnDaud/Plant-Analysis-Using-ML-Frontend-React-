import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
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
      data: [1, 10, 5, 2, 20, 30],
    },
  ],
};
export default function PieChart() {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
}
