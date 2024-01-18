import React from "react";
import { useState } from "react";
// import "./Counter.module.css";
import s from "./Counter.module.css";

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
    <div className={s.counter}>
      <h3 className={s.header}>Cчётчик: {changeCount}</h3>
      <nav>
        <button className={s.button} onClick={decrementCount}>
          Уменьшить
        </button>
        <button className={s.button} onClick={incrementCount}>
          Увеличить
        </button>
      </nav>
    </div>
  );
};

export default Counter;
