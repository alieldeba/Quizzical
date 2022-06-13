import React from "react";

export default function CheckButton(props) {
  function reload() {
    window.location.reload();
  }

  return props.isGood ? (
    <div className="d-flex justify-content-center align-items-center pb-3 gap-2">
      <h5>
        You Scored {props.correct}/{props.questionsNumber} correct answers
      </h5>
      <button className="btn btn-primary rounded" onClick={reload}>
        Play again
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary rounded check-answers mb-3"
      onClick={props.check}
    >
      Check Answers
    </button>
  );
}
