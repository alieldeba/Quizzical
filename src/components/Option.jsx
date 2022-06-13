import React from "react";

export default function Option(props) {
  return (
    <button
      className={`btn btn-primary rounded mb-3 me-2 ${
        props.answerValue === props.option ? "active" : "inactive"
      }`}
      onClick={() => props.activeButton(props.option)}
    >
      {props.option}
    </button>
  );
}
