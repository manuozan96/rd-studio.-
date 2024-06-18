import React from "react";
import PersonCard from "./PersonCard";

const PersonGrid = ({ people }) => {
  const column1 = people.slice(0, 4);
  const column2 = people.slice(4);

  return (
    <div style={{ display: "flex"}}>
      <div style={{ marginLeft: "12px" }}>
        {column1.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
      <div>
        {column2.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
    </div>
  );
};

export default PersonGrid;
