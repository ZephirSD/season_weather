import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Html } from "@react-three/drei";
import "./style/style.scss";
// import Model from "./composant/modules/Lanscape";
import Fantasy from "./composant/modules/Fantasy";
import Meteo from "./composant/Meteo";

function App() {
  return (
    <>
      <Canvas flat={true} shadows={true} camera={{position: [240,120,-180]}} style={{ width: "100%", height: "100vh" }}>
        <ambientLight />
          <Suspense fallback={null}>
              <Fantasy />
              <Html fullscreen>
                <Meteo/>
              </Html>
          </Suspense>
      </Canvas>
    </>
  );
}

export default App;
