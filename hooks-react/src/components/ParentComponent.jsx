import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <label>Count {count}</label>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
