import React from "react";
import Option from "./Option";
import "../css/style.css";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  const [answerValue, setAnswerValue] = React.useState();

  function activeButton(value) {
    setAnswerValue(value);
  }

  return (
    <div className="quiz">
      <div className="container">
        <h3 className="quiz__question mb-3">{props.question}</h3>
        <div className="quiz__answers">
          {props.options.map((option) => (
            <Option
              option={option}
              key={nanoid()}
              activeButton={activeButton}
              answerValue={answerValue}
            />
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
}
