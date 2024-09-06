import React, { useEffect } from "react";
import Header from "./Header";
import { useAuth } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  });
  return (
    <>
      <Header />
      {auth?.user && <h3>Profile</h3>}
    </>
  );
}

export default Profile;
