import React, { useMemo, useState } from "react";
import ParentComponent from "./ParentComponent";

function grandParent() {
  const [count, setCount] = useState(0);
  console.log("GrandParent RENDERD");
  const user = {
    name: "mary",
  };
  // if we pass this object as props it will re- render the whole component
  // because the comparison of two object will always return false
  // sp for this type of cases we can use the useMemo()
  const newUser = useMemo(() => {
    return {
      name: "Angela",
    };
  }, []);
  const num = 10;
  // if we pass this number as props to the next level component
  // because compares with values (num is primitive value)
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>grandParent</div>
      <span>{count}</span>
      <br />
      <button onClick={handleClick}>click</button>
      <ParentComponent value={newUser} />
    </>
  );
}

export default grandParent;
