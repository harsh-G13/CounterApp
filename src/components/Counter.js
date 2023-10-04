
import React, { useState } from 'react';
import '../styles/Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={increment} disabled={count >= 10}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
