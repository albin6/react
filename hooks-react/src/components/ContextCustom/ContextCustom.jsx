import React from "react";

export const MyContext = React.createContext();

const userData = {
  name: "mary",
  isLoggedin: true,
};

export function MyContextProvider({ children }) {
  return <MyContext.Provider value={userData}>{children}</MyContext.Provider>;
}
