import React from "react";

function ReactMemo({ num }) {
  return <span>{num * 2}</span>;
}

export default React.memo(ReactMemo, (prev, curr) => prev === curr);
