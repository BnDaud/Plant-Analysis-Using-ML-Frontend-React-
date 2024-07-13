// ./components/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45, 100, 500],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="h-full w-full p-2">
      <Bar data={data} options={options} />
    </div>
  );
}
