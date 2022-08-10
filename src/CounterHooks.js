import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

const CounterHooks = ({ initialCount }) => {
  //is setCount better to use when dealing withing single integer input?
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);

  return (
    <div>
      <button style={style} onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
      <span>{count}</span>
      <button style={style} onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
    </div>
  );
};

export default CounterHooks;
