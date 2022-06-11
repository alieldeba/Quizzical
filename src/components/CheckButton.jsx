import React from "react";

export default function CheckButton() {
  const [isGood, setIsGood] = React.useState(false);

  function check() {
    // 1. check that all the questions are answered
    // 2. check the result and save it in a variable
    setIsGood(true);
  }
  return (
    <button
      className="btn btn-primary rounded check-answers mb-3"
      onClick={check}
    >
      Check Answers
    </button>
  );
}
