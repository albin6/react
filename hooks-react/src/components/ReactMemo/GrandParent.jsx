import React, { useState } from "react";
import ParentComponent from "./ParentComponent";

function GrandParent() {
  const [counter, setConuter] = useState(0);
  console.log("GrandParent RENDERED");
  function handleClick() {
    setConuter(counter + 1);
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />
      <div>GrandParent</div>
      <ParentComponent data={counter} />
    </>
  );
}

export default GrandParent;
