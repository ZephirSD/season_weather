import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./style/style.scss";
import Meteo from "./composant/Meteo";
import Proverbes from "./composant/Proverbes";
import TitreSaison from "./composant/TitreSaison";

function App() {
  const [dateState, setDateState] = useState(0);
  const [dayState, setDayState] = useState(0);
  const [monthState, setMonthState] = useState(0);
  let date = new Date();
  let hoursDisplay = date.getHours();
  let dayDisplay = date.getDate();
  let monthDisplay = date.getMonth() + 1;
  
  useEffect(() =>{
    setDateState(hoursDisplay);
    setDayState(dayDisplay);
    setMonthState(monthDisplay);
  },[dayDisplay, hoursDisplay, monthDisplay])
  
  return (
    <>
      <Canvas style={{width: '100%', height: '100vh'}}>
        <Suspense fallback={null}>
          <Html fullscreen>
            <Meteo heuresDay={dateState}/>
            <TitreSaison jour={dayState} mois={monthState}/>
          <Proverbes heuresDay={dateState} dayMonths={dayState}/>
          </Html>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
