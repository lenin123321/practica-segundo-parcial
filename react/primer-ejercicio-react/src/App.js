import "./style/Estilos.css";
import { useState } from "react";
import React from "react";
export default function App() {
  ///////////////////////////////////////////
  /******** State varaibles assignment ******/

  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
      {show ? <h1>Welcome to React Challenges</h1> : null}
    </div>
  );
}
