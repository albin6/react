import React, { useReducer, useState } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        &nbsp;&nbsp;
        <button onClick={() => dispatch("reset")}>Reset</button>&nbsp;&nbsp;
        <button onClick={() => dispatch("increment")}>Increment</button>
      </div>
    </>
  );
}

export default Counter;
