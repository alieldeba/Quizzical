import React from "react";
import "../css/style.css";

export default function Quiz(props) {
  console.log(props)

  return (
    <div className="quiz">
      <div className="container">
        <h3 className="quiz__question">{props.question}</h3>
        <div className="quiz__answers">
          {props.answers.map((answer, index) => (
            <button key={index} className="btn btn-danger rounded-pill">
              {answer}
            </button>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
}
