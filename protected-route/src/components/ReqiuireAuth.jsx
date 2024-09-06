import React from "react";
import { useAuth } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

function ReqiuireAuth({ children }) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default ReqiuireAuth;
