import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds));

const LazyAbout = React.lazy(() => delay(2000).then(() => import("./About")));

function LazyComponent() {
  return (
    <Router>
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<LazyAbout />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default LazyComponent;
