import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  data: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCES":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        data: {},
        error: "Something went wrong",
      };
    default:
      state;
  }
};

function DataFetch() {
  const [post, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) =>
        dispatch({
          type: "FETCH_SUCCESS",
          data: response.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: "FETCH_ERROR",
        })
      );
  });
  return (
    <div>
      {post.loading && "Loading..."}
      {post.error && "Error"}
    </div>
  );
}

export default DataFetch;
