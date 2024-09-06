import React from "react";
import { MyContextProvider } from "./ContextCustom";
import Child from "./Child";

function Parent() {
  return (
    <MyContextProvider>
      <Child />
    </MyContextProvider>
  );
}

export default Parent;
