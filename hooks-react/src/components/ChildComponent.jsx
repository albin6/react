import React from "react";

function ChildComponent({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default ChildComponent;
