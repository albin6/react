import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CheckBox() {
  const isChecked = useSelector((state) => state.check.isChecked);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        onChange={() =>
          dispatch({
            type: "CHECK",
          })
        }
        value={isChecked}
        id="label"
      />
      {isChecked ? <label htmlFor="label">box ticked</label> : null}
    </div>
  );
}

export default CheckBox;
