import { createContext, useState } from "react";
import DisplayAnalysis from "./pages/DisplayAnalysis";
export const Parametercontext = createContext();

function App() {
  const [sunlight, setSunlight] = useState("");
  const [wind, setWind] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [humidity, setHumidity] = useState("");
  const [Ph, setPh] = useState("");
  const [temperature, setTemperature] = useState("");
  return (
    <Parametercontext.Provider
      value={[
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
      ]}
    >
      <div className="App bg-[#f0f0f0] h-screen">
        <DisplayAnalysis />
      </div>
    </Parametercontext.Provider>
  );
}

export default App;
