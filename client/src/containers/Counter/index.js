import React, {useState} from "react";
import { Routes ,Route } from 'react-router-dom';
function Counter(props) {
  return (
    <div className="counter">
      вы нажали {props.count} раз

      <button onClick={()=> props.setCount(prev=>prev+1)}>Нажать</button>
    </div>
  );
}

export default Counter;