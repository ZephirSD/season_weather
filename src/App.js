import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./style/style.scss";
import Meteo from "./composant/Meteo";
import Proverbes from "./composant/Proverbes";
import TitreSaison from "./composant/TitreSaison";

function App() {
  const [hoursState, setHoursState] = useState(0);
  const [dayState, setDayState] = useState(0);
  const [monthState, setMonthState] = useState(0);
  let date = new Date();
  let hoursDisplay = date.getHours();
  let dayDisplay = date.getDate();
  let monthDisplay = date.getMonth() + 1;
  
  useEffect(() =>{
    setHoursState(hoursDisplay);
    setDayState(dayDisplay);
    setMonthState(monthDisplay);
  },[dayDisplay, hoursDisplay, monthDisplay])

  return (
    <>
      <Canvas style={{width: '100%', height: '100vh'}}>
        <Suspense fallback={null}>
          <Html fullscreen>
            <Meteo heuresDay={hoursState}/>
            <TitreSaison jour={dayState} mois={monthState} heures={hoursState}/>
            <Proverbes heuresDay={hoursState} dayMonths={dayState}/>
          </Html>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
