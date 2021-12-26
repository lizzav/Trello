import "./App.css";
import React, {useState} from "react";
import { Panels,Counter } from "./containers";
import { Routes ,Route } from 'react-router-dom';
function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="App">
        <Panels/>
        <Counter count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
