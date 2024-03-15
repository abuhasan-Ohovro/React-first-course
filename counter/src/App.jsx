import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter,setCounter] = useState(3)
  const addValue = () => {
    console.log("cliked", counter);
  setCounter (counter + 1) ;
  };
  // let [counter,removeValue] = useState(55);
  const removeValue =() => {
    // console.log("clicked",counter)
    setCounter (counter - 1) ;
  };
 

  return (
    <>
      <h1>Counter App </h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
