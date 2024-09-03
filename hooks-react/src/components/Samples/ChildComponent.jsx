import React from "react";

function ChildComponent({ onClick }) {
  console.log("child re-rendered");
  return <button onClick={onClick}>Click</button>;
}

export default ChildComponent;
