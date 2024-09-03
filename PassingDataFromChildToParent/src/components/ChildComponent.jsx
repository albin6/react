import React, { useState } from "react";

function ChildComponent({ sentDataToParent }) {
  const [dataToSent, setDataToSent] = useState("");
  return (
    <>
      <input
        value={dataToSent}
        onChange={(e) => setDataToSent(e.target.value)}
        type="text"
        style={{ height: "30px" }}
      />
      &nbsp;&nbsp;
      <button
        onClick={() => {
          sentDataToParent(dataToSent);
        }}
      >
        Sent data
      </button>
    </>
  );
}

export default ChildComponent;
