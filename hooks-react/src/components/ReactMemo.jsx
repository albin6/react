import React from "react";

function MultiplyByTwo({ num }) {
  return <span>{num * 2}</span>;
}

export default React.memo(MultiplyByTwo, (prev, curr) => {
  return prev.num === curr.num;
});
