import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      &nbsp;&nbsp;&nbsp;
      <span>{count}</span>&nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
    </div>
  );
}

export default Counter;
