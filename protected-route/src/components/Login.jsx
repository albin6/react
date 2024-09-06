import React, { useState } from "react";
import { useAuth } from "../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const loginUser = () => {
    if (user) {
      auth.login();
      navigate("/profile");
    }
  };
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <input
        value={user}
        type="text"
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={loginUser}>login</button>
    </div>
  );
}

export default Login;
