import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

function Header() {
  const navigate = useNavigate();
  const auth = useAuth();
  const logoutUser = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <span>Logo</span>&nbsp;&nbsp;&nbsp;
      <Link to={"/"}>Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to={"/about"}>About</Link>&nbsp;&nbsp;&nbsp;
      <Link to={"/contact"}>Contact</Link>&nbsp;&nbsp;&nbsp;
      {!auth.user ? (
        <Link to={"/login"}>Login</Link>
      ) : (
        <>
          <Link to={"/profile"}>Profile</Link>&nbsp;&nbsp;&nbsp;
          <button onClick={logoutUser}>logout</button>
        </>
      )}
    </div>
  );
}

export default Header;
