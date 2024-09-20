import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      &nbsp;&nbsp;&nbsp;
      <span>{count}</span>&nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
}

export default Counter;
