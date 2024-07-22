import React, { useState } from "react";
import ListParameter from "../components/ListParameter";
import BarChart from "../components/Barchart";
import PieChart from "../components/piechart";
import Predicted from "../components/predicted";

export default function DisplayAnalysis() {
  return (
    <>
      <div className="bg-[#f0f0f0]">
        <header className="text-2xl capitalize text-center text-white font-bold font-serif  p-6 rounded-b-3xl bg-gradient-to-r from-my_green2 to-my_green1">
          {" "}
          Crop Recommendation System For optimal seed selection <br />
          <div className="mt-5 "> based on soil and climate paramter</div>
        </header>
        <div className="flex  flex-wrap justify-center gap-4 mt-10 ">
          {/* List of paramter */}
          <ListParameter />
          {/* Pie Chart or Histogram or Bar Chart */}
          {/* List of Plant that can Survive */}
          <div className=" border-2 rounded-lg border-my_green1">
            <PieChart />
          </div>
          <div className=" border-2 rounded-lg border-my_green1">
            <BarChart />
          </div>
          <div className=" border-2 rounded-lg border-my_green1">
            {" "}
            <Predicted />
          </div>
        </div>
      </div>
      <footer className="p-10 bg-my_green1 mt-16 "></footer>
    </>
  );
}
