import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Html } from "@react-three/drei";
import "./style/style.scss";
// import Model from "./composant/modules/Lanscape";
import Fantasy from "./composant/modules/Fantasy";
// import Meteo from "./composant/Meteo";
import Proverbes from "./composant/Proverbes";

function App() {
  const [dateState, setDateState] = useState(0);
  let date = new Date();
  let hoursDisplay = date.getHours();
  useEffect(() =>{
      setInterval(() =>{
          setDateState(hoursDisplay);
      },1000)
  })
  return (
    <>
      <Canvas flat={true} shadows={true} camera={{position: [240,120,-180]}} style={{ width: "100%", height: "100vh" }}>
        <ambientLight />
          <Suspense fallback={null}>
              <Fantasy />
              <Html fullscreen>
                {/* <Meteo heuresDay={dateState}/> */}
                <Proverbes heuresDay={dateState}/>
              </Html>
          </Suspense>
      </Canvas>
    </>
  );
}

export default App;
