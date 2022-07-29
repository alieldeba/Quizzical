import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleCalculate } from "../slices/calculateSlice";

export default function CheckButton(props) {
  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const score = useSelector((state) => state.calculate.score);

  function reload() {
    window.location.reload();
  }

  function checkAnswers() {
    setShow(true);
    dispatch(toggleCalculate())
  }

  return show ? (
    <div className="d-flex justify-content-center align-items-center pb-3 gap-2">
      <h5>
        You Scored {score} / {props.numberOfQuestions} correct answers
      </h5>
      <button className="btn btn-primary rounded" onClick={reload}>
        Play again
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary rounded check-answers mb-3"
      onClick={checkAnswers}
    >
      Check Answers
    </button>
  );
}
