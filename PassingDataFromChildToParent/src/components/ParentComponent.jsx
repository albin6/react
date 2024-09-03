import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [data, setData] = useState(null);
  function getDataFromChild(data) {
    setData(data);
  }
  return (
    <>
      <h2>In parent {data}</h2>
      <ChildComponent sentDataToParent={getDataFromChild} />
    </>
  );
}

export default ParentComponent;
