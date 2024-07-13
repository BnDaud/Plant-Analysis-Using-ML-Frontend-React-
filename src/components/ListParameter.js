import React, { useState } from "react";

import Continuousparameter from "./continuousparameter";
import Discreteparameter from "./discreteparameter";

export default function ListParameter() {
  const [changeparameter, setChangeparameter] = useState(true);
  return (
    <>
      {" "}
      <div className=" border-2 border-my_green2  h-96 w-72 pt-5  rounded-lg overflow-auto">
        {changeparameter ? <Continuousparameter /> : <Discreteparameter />}
        <div className="text-center ">
          <button
            className="bg-green-200 hover:bg-my_green2  p-1 rounded-lg hover:text-[#f0f0f0]"
            onClick={() => {
              setChangeparameter(!changeparameter);
            }}
          >
            Change Parameters
          </button>
        </div>
        <div className="text-center">
          <button className="bg-green-200 hover:bg-my_green2  p-1 rounded-lg mt-3 hover:text-[#f0f0f0]">
            {" "}
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
