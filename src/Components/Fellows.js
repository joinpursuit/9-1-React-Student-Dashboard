import React from "react";
import Card from "./Card";
import "./Fellows.css";

const Fellows = ({ cohort, fellows, formatCode }) => {
  const { selected } = fellows;
  return (
    <div>
      <div className="cohort-count">
        <h2>{formatCode(cohort) || "All Students"}</h2>
        <p>
          Total Students: <span>{selected.length}</span>
        </p>
      </div>
      <div className="fellow-cards">
        {selected.map((fellow) => {
          return <Card key={fellow.id} fellow={fellow} />;
        })}
      </div>
    </div>
  );
};

export default Fellows;
