import "./App.css";
import React from "react";
import Person from "./components/OnRefreshPersistData/Person";

const userData = [
  { id: 1, name: "john" },
  { id: 2, name: "mary" },
  { id: 3, name: "jacob" },
];

function App() {
  return (
    <div>
      <Person users={userData} />
    </div>
  );
}

export default App;
