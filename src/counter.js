import React, { useState } from "react";
// import {connect} from 'react-redux';

// import { INCREMENT_ACTION, DECREMENT_ACTION } from './store';

// TODO: Connect <Counter /> to the store

export const Counter = () => {
  const [counter, updateCounter] = useState(0);
  return (
    <section className="Counter">
      <button
        className="Counter-decrement capsule"
        onClick={() => updateCounter(counter - 1)}
      >
        -
      </button>
      <output className="Counter-output capsule">{counter}</output>
      <button
        className="Counter-increment capsule"
        onClick={() => updateCounter(counter + 1)}
      >
        +
      </button>
    </section>
  );
};
