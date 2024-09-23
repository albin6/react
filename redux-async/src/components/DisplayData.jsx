import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import requestData from "../store/requestData";

function DisplayData() {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    requestData(dispatch);
  });
  return (
    <div>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}

      <span>{data.title}</span>
    </div>
  );
}

export default DisplayData;
