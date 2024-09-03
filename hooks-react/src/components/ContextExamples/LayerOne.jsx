import React, { useState } from "react";
import LayerTwo from "./LayerTwo";

export const MyContext = React.createContext();
export const MyNewcontext = React.createContext("hello"); // default value for this context

function LayerOne() {
  const [isChecked, setIsChecked] = useState(false);
  function handleChange() {
    setIsChecked(!isChecked);
  }
  return (
    <div>
      <input checked={isChecked} onChange={handleChange} type="checkbox" />
      <MyContext.Provider value={isChecked}>
        <LayerTwo />
      </MyContext.Provider>
    </div>
  );
}

export default LayerOne;
