import React from "react";
import ReactMemo from "./ReactMemo";

function ParentComponent({ data }) {
  console.log("ParentComponent RENDERED");
  return (
    <>
      <span>{data}</span>
      <div>ParentComponent</div>
      <ReactMemo />
    </>
  );
}

export default React.memo(ParentComponent);
// it will prevent the parent and reactmemo
// components from being rendered
// it renders on in the initial render and the time when the
// props to the child component change
