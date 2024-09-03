import React from "react";

function ReactMemo() {
  console.log("ReactMemo RENDERED");
  return <div>ReactMemo</div>;
}

export default React.memo(ReactMemo);
// so here it will not re rendered again
