import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const useFetch = (url) => {
    useEffect(() => {
      axios.get(url).then((response) => {
        setLoading(false);
        setData(response.data);
      });
    }, []);
  };
  useFetch("https://jsonplaceholder.typicode.com/posts/1");
  return (
    <>
      {loading && <h2>Loading....</h2>}
      {data && <h2>{data.title}</h2>}
    </>
  );
}

export default App;
