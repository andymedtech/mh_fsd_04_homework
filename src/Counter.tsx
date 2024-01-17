import React from "react";
import { useState } from "react";
// import "./Counter.module.css";
// import s from "./Counter.module.css";

const Counter = () => {
  const count = 0;
  const [changeCount, setChangeCount] = useState(count);

  const decrementCount = () => {
    if (changeCount === 0) {
      alert("Вы не можете опускаться ниже нуля!");
    } else {
      setChangeCount(changeCount - 1);
    }
  };

  const incrementCount = () => {
    setChangeCount(changeCount + 1);
  };

  return (
    <div>
      <h3>Cчетчик: {changeCount}</h3>
      <br></br>
      <button onClick={decrementCount}>Уменьшить</button>
      <button onClick={incrementCount}>Увеличить</button>
    </div>
  );
};

export default Counter;
