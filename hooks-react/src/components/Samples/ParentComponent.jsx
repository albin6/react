import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  function handleParentClick() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <span>{count}</span>
      <ChildComponent onClick={handleClick} />
      <button onClick={handleParentClick}>{counter} parent button</button>
    </div>
  );
}

export default ParentComponent;
