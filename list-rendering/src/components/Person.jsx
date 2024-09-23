import React from "react";

function Person({ person }) {
  return (
    <div key={person.id}>
      <h4>{person.name}</h4>
    </div>
  );
}

export default Person;
