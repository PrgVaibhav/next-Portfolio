import React from "react";
import "./Learning.scss";
export const Learning = ({ learning }) => {
  return (
    <div className="description">
      <h4>{learning.title}</h4>
      {<p>{learning.description}</p>}
    </div>
  );
};
