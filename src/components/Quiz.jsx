import React from "react";
import "../css/style.css";

export default function Quiz(props) {
  return (
    <div className="quiz">
      <div className="container">
        <h3 className="quiz__question mb-3">{props.question}</h3>
        <div className="quiz__answers">
          {props.options.map((option, index) => (
            <button className="btn btn-primary rounded-pill mb-3 me-2" key={index}>
              {option}
            </button>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
}
