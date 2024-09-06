import React, { useContext } from "react";
import { MyContext } from "./ContextCustom";

function Child() {
  const userData = useContext(MyContext);
  console.log(userData);
  return (
    <div>
      {userData.isLoggedin ? <h2>{userData.name}</h2> : <h2>Please log in</h2>}
    </div>
  );
}

export default Child;
