import React from "react";
import "../css/style.css";

export default function Quiz(props) {
  return (
    <div className="quiz">
      <div className="container">
        <h3 className="quiz__question">{props.question}</h3>
        <div className="quiz__answers">
          {props.answers.map((answer) => (
            <button className="btn btn-danger rounded-pill">
              {props.answer}
            </button>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
}
