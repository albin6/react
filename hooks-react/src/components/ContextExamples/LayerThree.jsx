import React, { useContext } from "react";
import { MyContext, MyNewcontext } from "./LayerOne";

function LayerThree() {
  const isChecked = useContext(MyContext);
  const value = useContext(MyNewcontext);
  return (
    <div>
      <span>{value}</span>
      <br />
      <br />
      {isChecked ? (
        <span>Check box checked</span>
      ) : (
        <span>Check box not checked</span>
      )}
    </div>
  );
}

export default LayerThree;
