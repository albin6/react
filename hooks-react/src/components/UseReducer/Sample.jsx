import React, { useReducer } from "react";

const initialstate = 20;

function reducer(state, action) {
  if (action === "increment") {
    return state + 1;
  }
}

function Sample() {
  const [data, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <button onClick={() => dispatch("increment")}>increment {data}</button>
    </div>
  );
}

export default Sample;
