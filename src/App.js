import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import React from "react";
// import { Html } from "@react-three/drei";
import "./style/style.scss";
import Model from "./composant/modules/Lanscape";

function App() {
  return (
    <>
      <Canvas camera={{position: [15,8,-5]}} style={{ width: "100%", height: "100vh" }}>
        <ambientLight />
          <Suspense>
              <Model />
          </Suspense>
      </Canvas>
    </>
  );
}

export default App;
