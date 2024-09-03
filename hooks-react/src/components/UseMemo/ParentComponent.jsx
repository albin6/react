import React from "react";
import UseMemo from "./UseMemo";

function ParentComponent({ value }) {
  console.log("ParentComponent RENDERD");
  return (
    <>
      <h3>{value.name}</h3>
      <div>ParentComponent</div>
      <UseMemo />
    </>
  );
}

export default React.memo(ParentComponent);
