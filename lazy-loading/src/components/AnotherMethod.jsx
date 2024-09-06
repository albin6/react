import React, { useState } from "react";
import Home from "./Home";

function AnotherMethod() {
  const [About, setAbout] = useState(null);
  function handleClick() {
    import("./About").then((module) => setAbout(() => module.default));
  }
  return (
    <div>
      <button onClick={handleClick}>Click to load About</button>

      {About ? <About /> : <Home />}
    </div>
  );
}

export default AnotherMethod;
