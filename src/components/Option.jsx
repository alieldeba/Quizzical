import React from "react";

export default function Option(props) {
  const [isChecked, setIsChecked] = React.useState(false);

  function changeAnswerColor(event) {
    setIsChecked((prev) => !prev);
    isChecked
      ? (event.target.style.cssText = "background-color: #f5f7fb !important")
      : (event.target.style.cssText = "background-color: #D6DBF5 !important");
  }

  return (
    <button
      className="btn btn-primary rounded-pill mb-3 me-2"
      onClick={changeAnswerColor}
    >
      {props.option}
    </button>
  );
}
