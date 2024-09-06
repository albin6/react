import React, { useEffect, useState } from "react";

function withLoading(WrappedComponent) {
  return function (props) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return <WrappedComponent {...props} />;
  };
}

export default withLoading;
